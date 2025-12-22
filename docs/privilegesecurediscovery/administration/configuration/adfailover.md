---
title: "AD Failover"
description: "AD Failover"
sidebar_position: 120
---

# AD Failover

AD Failover

# AD Failover

Prior to 2.12, should an LDAP Sync fail (for any reason) the Privilege Secure LDAP Sync Service
would not perform any retry logic, or attempt to use an alternate server.

With the LDAP Sync Directory Server Failover feature, the LDAP Sync service can be configured to
attempt synchronization with other servers automatically when the server being used becomes
unavailable.

This document will go over that logic, as well as the database schema needed to support it, as well
as the logs that are introduced.

## Feature Functionality

### Standard / Shared LDAP Sync Behavior

This refers to the general behavior / flow of LDAP sync in general, regardless of DC failover or
errors encountered

- When LDAP Sync runs

    - Get the list of all `ldap_config` documents in the Privilege Secure database, each of which
      corresponds to a configured AD domain

        - Attempt to sync with every domain serially, moving onto the next domain after the domain
          sync has finished by completing or failing.

- Wait for the configured “Run Interval Minutes”, then repeat this cycle

### LDAP Sync Behavior (Failover: Disabled)

With LDAP Sync Directory Server Failover disabled, the LDAP Sync cycle occurs as described above:

- Any connection error that occurs during an LDAP sync for a particular domain will cause it to stop
- Nothing further is attempted for this DC until the next sync cycle
- The next configured domain is processed if any exist

### LDAP Sync Behavior (Failover: Enabled)

With DC Failover enabled, we maintain the same general flow - attempt to sync with one domain at a
time, moving onto the next one after one has finished (error or not) - however we handle failures
for each domain differently.

When a _connection_ error (`SERVER_DOWN` or `TIMEOUT`) is first encountered during a sync for a
domain

- See if the criteria has been met for considering a DC failed or not. In 2.12, the only criteria is
  the number of attempts made against a particular DC
- If the **failure criteria has not been met**, retry the current DC, waiting a (configurable)
  period of time in between connection attempts, until the sync succeeds or the criteria is met
- The number of retry attempts per DC is configurable in the UI in the Server page, under the
  settings for each domain. The wait between retry attempts is 1s (this is not configurable in the
  UI).
- If the **failure criteria has been met** for a single DC:

    - A list of DC’s is acquired from DNS MSDCS SRV records and is sorted by the `priority`property.
      This is also how the `Directory Connection Settings > Detect` function in the UI chooses a
      domain when configuring a domain.
        - Right now, there’s only one strategy for sourcing - `dns_priority` - but in the future, we
          can support additional options like a customer-defined list.
        - Command to check the DNS MSDCS SRV record from any system, replace "domain.com" at end
          with name of domain checking:  
          `nslookup -type=SRV _ldap._tcp.dc._msdcs.domain.com`

- The next DC in the prioritized list is attempted to be used until a viable DC is found or the list
  is exhausted.
- If the failover process results in using a different DC rather than the “initial DC”:
    - All attempted syncs will be `init` syncs

**CAUTION:** This is not a `full_sync`!

- `init_sync` will do a group flattening process, but **will not move stale objects**
- `full_sync`**will not do a group flattening process,** but _will_ move stale objects
- We have decided to do an `init_sync` as this mimics what Customer Success currently does to
  recover from an AD failure. This feature “automates” this approach within the product.

    - The manual failover process is to update the `ldap_config` with a new DC, and set the the USN
      values to 0.
    - According to ldap_sync behavior, when a sync is started with a `highest_usn` value of 0, it
      will switch the sync into `init_sync` mode.

- Any successful connection / ldap bind to an alternate DC will immediately update the `ldap_config`
  with this new DCs info

    - The intent is to optimistically update the config ASAP to restore AD user authentication ASAP.
      A successful connection is a strong positive signal the new DC is viable.
    - The `previous_usn` and `highest_usn` values are set to 0

        - This will ensure that if an unexpected error occurs after a successful connection
          connection, the next ldap sync cycle, will initiate an `init_sync`, rather than starting
          from USN values misaligned with the recently-set DC

**CAUTION:** There can still be an ldap connection error after this point, which could occur during
the search for ldap entries or authentication. It’s worth noting that we get ldap data (for any
type) as paged results, so every time we request a new page is an opportunity for a connection to go
bad.

- Any "Ldap Sync Activity" (what shows up in the UI as the "status" for the domain) will be
  prepended with `Failover DC Attempt:`

    - This will prepend all activity messages for this domain **until the next ldap sync cycle**

- The result of the _domain_ failover attempt (regardless of success or fail) will be saved in the
  database

    - There is currently no ui view into this, it is primarily there to help answer questions should
      the need arise, and to support a UI later if needed
    - This will record the initial DC, any attempted DCs, whether the failover routine succeeded or
      failed on the whole, and the new DC, as applicable

## Database

**CAUTION:** There is an associated migration which must be run in order for this feature to work
properly!

The DC Failover feature’s configuration lives on an `ldap_config` db document in the
`secureone_config` collection.

Assuming all existing `ldap_config` fields are not shown, the schema will be the following:

```
ldapConfig = {
failover_config: {
enabled: Boolean,
 failover_dc_source: 'dns_priority', // currently the only option
 dc_fail_criteria: {
// There is another strategy which is based on total duration (regardless of number of attempts)
// however it is advised we do not use that now as it introduces complexity strategy: 'retry_attempts',
 // This field is for the alternate strategy mentioned above, safe to ignore for now
// total_duration_seconds: Number
 retry_attempts_max: Number, // Default of 5. Is configurable via the UI as of 2.12
wait_between_attempts_seconds: Number, // Default of 1. is NOT configurable via the UI as of 2.12  },
failover_history: [{
 initial_dc: {
server: String,
port: Number,
},
 attempted_dcs: [{
server: String,
 port: Number,
}],
 failover_dc: { // Or null, if failover did not succeed
server: String,
 port: Number,
  },
 failover_success: Boolean,
sync_start: Date, // Start of the sync process for the domain
sync_end: Date, // end of the sync process for the domain. IOW will account for the time spent attempting all DCs  
}]
}
```

## Logs

In addition to the failover history being updated, we have implemented logs for this feature.

Existing logging in ldap sync should remain unchanged (additions only).

The following logs are roughly in order one might encounter them, and do not include
otherwise-present log fields that are in all ldap logs.

| Log Entry Trigger                                                                                     | Log Level                                                | Message field                                                             | Details (key:value pairs in the log “details”)                                                                                                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Starting the initial ldap sync for a DC (failover not enabled)                                        | info                                                     | "Attemping LDAP Sync"                                                     | **dc_failover_enabled**: false **current_dc**: server, port of current dc                                                                                                                                                                                                                    |
| Starting an LDAP sync for a DC, on any attempt after the first (failover enabled)                     | warning                                                  | "Domain Controller (DC) Failover: Attempting LDAP Sync"                   | **dc_failover_enabled**: t/f **is_initial_dc**: t/f **current_dc:** server, port of current dc **current_dc_connection_attempts**: Number of connection attempts per this DC **attempted_dcs_count**: Total number of attempted DCs                                                          |
| After any error has occurred during ldap sync, failover disabled                                      | error                                                    | "Error encountered during LDAP Sync"                                      | **dc_failover_enabled**: t/f **current_dc**: server, port of current dc **error**: dict containing error details                                                                                                                                                                             |
| After any error has occurred during ldap sync, failover enabled                                       | error                                                    | "Domain Controller (DC) Failover: Error encountered during LDAP Sync"     | **dc_failover_enabled**: t/f **current_dc**: server, port of current dc **current_dc_try_count**: number of connection attempts per this dc **current_dc_try_duration_sec**: total eslapsed time attempting connection to this dc, in seconds **error**: dict containing error details       |
| Connection has failed, failure criteria for current dc not yet met (retry attempts)                   | warning                                                  | "Domain Controller (DC) Failover: LDAP Sync failed - Retrying current DC  | **current_dc**: server, port of current dc **fail_strategy**: "retry_attempts" **attempts_max**: Max number of retry attempts before trying the next pto a different DC **attempts_current**: number of attempts already completed                                                           |
| Connection has failed, failure criteria for current dc has been met and we are movig onto the next DC | warning                                                  | "Domain Controller (DC) Failover: LDAP Sync failed - Using next DC"       | **next_dc**: server, port **attempted_dcs**: server, port of attempted (and failed) dcs **remaining_additional_dcs**: server, port of additional DCs to try                                                                                                                                  |
| Connection has failed, failure criteria for current dc not yet met, waiting to retry                  | info                                                     | "Domain Controller (DC) Failover: Waiting to retry current DC"            | **server**: hostname of current dc **wait_for_sec**: number of seconds waiting in between retry attempts                                                                                                                                                                                     |
| Initial DC has failed, failover enabled, was able to look up additional DCs via DNS                   | warning                                                  | "Domain Controller (DC) Failover: Found additional DCs"                   | **additional_dcs:** list of alternate DCs that will be attempted (ordered by priority), comprised of server, port **additional_dc_source**: source of additional dcs, currently should just be "dns_priority"                                                                                |
|                                                                                                       | warning                                                  | "Domain Controller (DC) Failover: Unable to find any additional DCs"      | **additional_dc_source**: source of additional dcs, currently should just be "dns_priority"                                                                                                                                                                                                  |
| Initial DC success                                                                                    | \* No new log added, it is already logged by svc_ldap \* |                                                                           |                                                                                                                                                                                                                                                                                              |
| Initial DC failed and failover DC has successfully synced                                             | info                                                     | "Domain Controller (DC) Failover: LDAP Sync failover succeeded"           | **initial_dc**: server, port of initial DC **attempted_dcs**: List of attempted (and failed) dcs, comprised of server, port **failover_dc**: The fail-overed dc hostname **sync_start_ts**: timestamp of sync start **sync_end_ts**: timestamp of sync end, including all faiilover attempts |
| Initial DC failed and failover not enabled                                                            | error                                                    | "LDAP Sync failed"                                                        | **dc_failover_enabled**: false **error:** dict of error details **sync_start_ts**: start time of sync **sync_end_ts**: end of sync incuding all time spent in failover routine                                                                                                               |
| Initial DC failed and failover is enabled and unsuccessful                                            | error                                                    | "Domain Controller (DC) Failover: LDAP Sync failed for all available DCs" | **dc_failover_enabled**: true **initial_dc server**: server, port of the initial dc **attempted_dcs**: list of attempted (and failed) dcs, comprised of server, port **sync_start_ts**: start time of sync **sync_end_ts**: end of sync incuding all time spent in failover routine          |

### Example Logs

```
{  "asctime": "2021-08-18 19:39:28,295",  "levelname": "INFO",  "message": "Starting LDAP Sync",  "name": "svc-ldap",  "threadName": "MainThread"}{  "asctime": "2021-08-18 19:39:28,298",  "levelname": "CRITICAL",  "message": "Starting ldapsync, relaunching every 20 minutes",  "name": "svc-ldap",  "threadName": "MainThread"}{  "asctime": "2021-08-18 19:39:28,304",  "levelname": "INFO",  "message": "Next full sync will occur: Thu, 19 Aug 2021 00:00:00",  "name": "svc-ldap",  "threadName": "MainThread"}{  "asctime": "2021-08-18 19:39:28,312",  "ldapName": "rtest.com",  "levelname": "INFO",  "message": "Syncing LDAP for rtest.com",  "name": "svc-ldap",  "server": "dc1.rtest.com",  "threadName": "MainThread"}{  "asctime": "2021-08-18 19:39:28,328",  "details": {    "current_dc": {      "port": 389,      "server": "dc1.rtest.com"    },    "dc_failover_enabled": true  },  "ldapName": "rtest.com",  "levelname": "INFO",  "message": "Attempting LDAP Sync",  "name": "svc-ldap",  "server": "dc1.rtest.com",  "threadName": "MainThread"}{  "asctime": "2021-08-18 19:39:28,332",  "details": {    "current_dc": {      "port": 389,      "server": "dc1.rtest.com"    },    "current_dc_try_count": 1,    "current_dc_try_duration_sec": 0.003807,    "dc_failover_enabled": true,    "error": {      "desc": "LDAP Timeout"    }  },  "ldapName": "rtest.com",  "levelname": "ERROR",  "message": "Domain Controller (DC) Failover: Error encountered during LDAP Sync",  "name": "svc-ldap",  "server": "dc1.rtest.com",  "threadName": "MainThread"}{  "asctime": "2021-08-18 19:39:28,335",  "details": {    "attempts_current": 1,    "attempts_max": 2,    "current_dc": {      "port": 389,      "server": "dc1.rtest.com"    },    "fail_strategy": "retry_attempts"  },  "ldapName": "rtest.com",  "levelname": "WARNING",  "message": "Domain Controller (DC) Failover: LDAP Sync failed - Retrying current DC",  "name": "svc-ldap",  "server": "dc1.rtest.com",  "threadName": "MainThread"}{  "asctime": "2021-08-18 19:39:28,342",  "details": {    "current_dc": {      "port": 389,      "server": "dc1.rtest.com"    },    "wait_for_sec": 1  },  "ldapName": "rtest.com",  "levelname": "INFO",  "message": "Domain Controller (DC) Failover: Waiting to retry current DC",  "name": "svc-ldap",  "server": "dc1.rtest.com",  "threadName": "MainThread"}{  "asctime": "2021-08-18 19:39:29,347",  "details": {    "attempted_dcs_count": 1,    "current_dc": {      "port": 389,      "server": "dc1.rtest.com"    },    "current_dc_connection_attempts": 2,    "dc_failover_enabled": true,    "is_initial_dc": true  },  "ldapName": "rtest.com",  "levelname": "WARNING",  "message": "Domain Controller (DC) Failover: Attempting LDAP Sync",  "name": "svc-ldap",  "server": "dc1.rtest.com",  "threadName": "MainThread"}{  "asctime": "2021-08-18 19:39:29,351",  "details": {    "current_dc": {      "port": 389,      "server": "dc1.rtest.com"    },    "current_dc_try_count": 2,    "current_dc_try_duration_sec": 1.02252,    "dc_failover_enabled": true,    "error": {      "desc": "LDAP Timeout"    }  },  "ldapName": "rtest.com",  "levelname": "ERROR",  "message": "Domain Controller (DC) Failover: Error encountered during LDAP Sync",  "name": "svc-ldap",  "server": "dc1.rtest.com",  "threadName": "MainThread"}{  "asctime": "2021-08-18 19:39:29,362",  "details": {    "attempts_current": 2,    "attempts_max": 2,    "current_dc": {      "port": 389,      "server": "dc1.rtest.com"    },    "fail_strategy": "retry_attempts"  },  "ldapName": "rtest.com",  "levelname": "WARNING",  "message": "Domain Controller (DC) Failover: LDAP Sync failed - Retrying current DC",  "name": "svc-ldap",  "server": "dc1.rtest.com",  "threadName": "MainThread"}{  "asctime": "2021-08-18 19:39:29,365",  "details": {    "current_dc": {      "port": 389,      "server": "dc1.rtest.com"    },    "wait_for_sec": 1  },  "ldapName": "rtest.com",  "levelname": "INFO",  "message": "Domain Controller (DC) Failover: Waiting to retry current DC",  "name": "svc-ldap",  "server": "dc1.rtest.com",  "threadName": "MainThread"}{  "asctime": "2021-08-18 19:39:30,370",  "details": {    "attempted_dcs_count": 1,    "current_dc": {      "port": 389,      "server": "dc1.rtest.com"    },    "current_dc_connection_attempts": 3,    "dc_failover_enabled": true,    "is_initial_dc": true  },  "ldapName": "rtest.com",  "levelname": "WARNING",  "message": "Domain Controller (DC) Failover: Attempting LDAP Sync",  "name": "svc-ldap",  "server": "dc1.rtest.com",  "threadName": "MainThread"}{  "asctime": "2021-08-18 19:39:30,373",  "details": {    "current_dc": {      "port": 389,      "server": "dc1.rtest.com"    },    "current_dc_try_count": 3,    "current_dc_try_duration_sec": 2.044849,    "dc_failover_enabled": true,    "error": {      "desc": "LDAP Timeout"    }  },  "ldapName": "rtest.com",  "levelname": "ERROR",  "message": "Domain Controller (DC) Failover: Error encountered during LDAP Sync",  "name": "svc-ldap",  "server": "dc1.rtest.com",  "threadName": "MainThread"}{  "asctime": "2021-08-18 19:39:30,376",  "details": {    "additional_dc_source": "dns_priority",    "additional_dcs": [      {        "port": 389,        "priority": 0,        "server": "dc3.rtest.com",        "weight": 100      },      {        "port": 389,        "priority": 4,        "server": "dc2.rtest.com",        "weight": 100      }    ]  },  "ldapName": "rtest.com",  "levelname": "WARNING",  "message": "Domain Controller (DC) Failover: Looking up additional DCs",  "name": "svc-ldap",  "server": "dc1.rtest.com",  "threadName": "MainThread"}{  "asctime": "2021-08-18 19:39:30,379",  "details": {    "attempted_dcs": [      {        "port": 389,        "server": "dc1.rtest.com"      }    ],    "next_dc": {      "port": 389,      "server": "dc3.rtest.com"    },    "remaining_additional_dcs": [      {        "port": 389,        "priority": 4,        "server": "dc2.rtest.com",        "weight": 100      }    ]  },  "ldapName": "rtest.com",  "levelname": "WARNING",  "message": "Domain Controller (DC) Failover: LDAP Sync failed - Using next DC",  "name": "svc-ldap",  "server": "dc3.rtest.com",  "threadName": "MainThread"}{  "asctime": "2021-08-18 19:39:30,382",  "details": {    "attempted_dcs_count": 2,    "current_dc": {      "port": 389,      "server": "dc3.rtest.com"    },    "current_dc_connection_attempts": 1,    "dc_failover_enabled": true,    "is_initial_dc": false  },  "ldapName": "rtest.com",  "levelname": "WARNING",  "message": "Domain Controller (DC) Failover: Attempting LDAP Sync",  "name": "svc-ldap",  "server": "dc3.rtest.com",  "threadName": "MainThread"}{  "asctime": "2021-08-18 19:39:30,392",  "ldapName": "rtest.com",  "levelname": "INFO",  "message": "Open connection; connecting to ldap://dc3.rtest.com:389",  "name": "svc-ldap",  "server": "dc3.rtest.com",  "threadName": "MainThread"}{  "asctime": "2021-08-18 19:39:30,395",  "ldapName": "rtest.com",  "levelname": "INFO",  "message": "Open connection; binding to ldap://dc3.rtest.com:389 (elapsed: 0:00:00.003421)",  "name": "svc-ldap",  "server": "dc3.rtest.com",  "threadName": "MainThread"}{  "asctime": "2021-08-18 19:39:30,415",  "exc_info": "Traceback (most recent call last):\n  File \"/secureone/remediant/ldap_kit/__init__.py\", line 50, in get_bound_ldap_connection\n    _type, _data, _msg_id, _ctrls = conn.simple_bind_s(bind_dn, bind_pass)\n  File \"/usr/local/lib/python2.7/site-packages/ldap/ldapobject.py\", line 228, in simple_bind_s\n    msgid = self.simple_bind(who,cred,serverctrls,clientctrls)\n  File \"/usr/local/lib/python2.7/site-packages/ldap/ldapobject.py\", line 222, in simple_bind\n    return self._ldap_call(self._l.simple_bind,who,cred,RequestControlTuples(serverctrls),RequestControlTuples(clientctrls))\n  File \"/usr/local/lib/python2.7/site-packages/ldap/ldapobject.py\", line 108, in _ldap_call\n    result = func(*args,**kwargs)\nSERVER_DOWN: {'info': 'Invalid argument', 'errno': 22, 'desc': \"Can't contact LDAP server\"}",  "ldapName": "rtest.com",  "levelname": "ERROR",  "message": "{'info': 'Invalid argument', 'errno': 22, 'desc': \"Can't contact LDAP server\"}",  "name": "svc-ldap",  "server": "dc3.rtest.com",  "threadName": "MainThread"}{  "asctime": "2021-08-18 19:39:30,426",  "details": {    "current_dc": {      "port": 389,      "server": "dc3.rtest.com"    },    "current_dc_try_count": 1,    "current_dc_try_duration_sec": 0.044208,    "dc_failover_enabled": true,    "error": {      "desc": "Can't contact LDAP server",      "errno": 22,      "info": "Invalid argument"    }  },  "ldapName": "rtest.com",  "levelname": "ERROR",  "message": "Domain Controller (DC) Failover: Error encountered during LDAP Sync",  "name": "svc-ldap",  "server": "dc3.rtest.com",  "threadName": "MainThread"}{  "asctime": "2021-08-18 19:39:30,429",  "details": {    "attempts_current": 1,    "attempts_max": 2,    "current_dc": {      "port": 389,      "server": "dc3.rtest.com"    },    "fail_strategy": "retry_attempts"  },  "ldapName": "rtest.com",  "levelname": "WARNING",  "message": "Domain Controller (DC) Failover: LDAP Sync failed - Retrying current DC",  "name": "svc-ldap",  "server": "dc3.rtest.com",  "threadName": "MainThread"}{  "asctime": "2021-08-18 19:39:30,433",  "details": {    "current_dc": {      "port": 389,      "server": "dc3.rtest.com"    },    "wait_for_sec": 1  },  "ldapName": "rtest.com",  "levelname": "INFO",  "message": "Domain Controller (DC) Failover: Waiting to retry current DC",  "name": "svc-ldap",  "server": "dc3.rtest.com",  "threadName": "MainThread"}{  "asctime": "2021-08-18 19:39:31,439",  "details": {    "attempted_dcs_count": 2,    "current_dc": {      "port": 389,      "server": "dc3.rtest.com"    },    "current_dc_connection_attempts": 2,    "dc_failover_enabled": true,    "is_initial_dc": false  },  "ldapName": "rtest.com",  "levelname": "WARNING",  "message": "Domain Controller (DC) Failover: Attempting LDAP Sync",  "name": "svc-ldap",  "server": "dc3.rtest.com",  "threadName": "MainThread"}{  "asctime": "2021-08-18 19:39:31,444",  "ldapName": "rtest.com",  "levelname": "INFO",  "message": "Open connection; connecting to ldap://dc3.rtest.com:389",  "name": "svc-ldap",  "server": "dc3.rtest.com",  "threadName": "MainThread"}{  "asctime": "2021-08-18 19:39:31,447",  "ldapName": "rtest.com",  "levelname": "INFO",  "message": "Open connection; binding to ldap://dc3.rtest.com:389 (elapsed: 0:00:00.003426)",  "name": "svc-ldap",  "server": "dc3.rtest.com",  "threadName": "MainThread"}{  "asctime": "2021-08-18 19:39:31,458",  "exc_info": "Traceback (most recent call last):\n  File \"/secureone/remediant/ldap_kit/__init__.py\", line 50, in get_bound_ldap_connection\n    _type, _data, _msg_id, _ctrls = conn.simple_bind_s(bind_dn, bind_pass)\n  File \"/usr/local/lib/python2.7/site-packages/ldap/ldapobject.py\", line 228, in simple_bind_s\n    msgid = self.simple_bind(who,cred,serverctrls,clientctrls)\n  File \"/usr/local/lib/python2.7/site-packages/ldap/ldapobject.py\", line 222, in simple_bind\n    return self._ldap_call(self._l.simple_bind,who,cred,RequestControlTuples(serverctrls),RequestControlTuples(clientctrls))\n  File \"/usr/local/lib/python2.7/site-packages/ldap/ldapobject.py\", line 108, in _ldap_call\n    result = func(*args,**kwargs)\nSERVER_DOWN: {'info': 'Invalid argument', 'errno': 22, 'desc': \"Can't contact LDAP server\"}",  "ldapName": "rtest.com",  "levelname": "ERROR",  "message": "{'info': 'Invalid argument', 'errno': 22, 'desc': \"Can't contact LDAP server\"}",  "name": "svc-ldap",  "server": "dc3.rtest.com",  "threadName": "MainThread"}{  "asctime": "2021-08-18 19:39:31,467",  "details": {    "current_dc": {      "port": 389,      "server": "dc3.rtest.com"    },    "current_dc_try_count": 2,    "current_dc_try_duration_sec": 1.085234,    "dc_failover_enabled": true,    "error": {      "desc": "Can't contact LDAP server",      "errno": 22,      "info": "Invalid argument"    }  },  "ldapName": "rtest.com",  "levelname": "ERROR",  "message": "Domain Controller (DC) Failover: Error encountered during LDAP Sync",  "name": "svc-ldap",  "server": "dc3.rtest.com",  "threadName": "MainThread"}{  "asctime": "2021-08-18 19:39:31,470",  "details": {    "attempts_current": 2,    "attempts_max": 2,    "current_dc": {      "port": 389,      "server": "dc3.rtest.com"    },    "fail_strategy": "retry_attempts"  },  "ldapName": "rtest.com",  "levelname": "WARNING",  "message": "Domain Controller (DC) Failover: LDAP Sync failed - Retrying current DC",  "name": "svc-ldap",  "server": "dc3.rtest.com",  "threadName": "MainThread"}{  "asctime": "2021-08-18 19:39:31,474",  "details": {    "current_dc": {      "port": 389,      "server": "dc3.rtest.com"    },    "wait_for_sec": 1  },  "ldapName": "rtest.com",  "levelname": "INFO",  "message": "Domain Controller (DC) Failover: Waiting to retry current DC",  "name": "svc-ldap",  "server": "dc3.rtest.com",  "threadName": "MainThread"}{  "asctime": "2021-08-18 19:39:32,477",  "details": {    "attempted_dcs_count": 2,    "current_dc": {      "port": 389,      "server": "dc3.rtest.com"    },    "current_dc_connection_attempts": 3,    "dc_failover_enabled": true,    "is_initial_dc": false  },  "ldapName": "rtest.com",  "levelname": "WARNING",  "message": "Domain Controller (DC) Failover: Attempting LDAP Sync",  "name": "svc-ldap",  "server": "dc3.rtest.com",  "threadName": "MainThread"}{  "asctime": "2021-08-18 19:39:32,485",  "ldapName": "rtest.com",  "levelname": "INFO",  "message": "Open connection; connecting to ldap://dc3.rtest.com:389",  "name": "svc-ldap",  "server": "dc3.rtest.com",  "threadName": "MainThread"}{  "asctime": "2021-08-18 19:39:32,490",  "ldapName": "rtest.com",  "levelname": "INFO",  "message": "Open connection; binding to ldap://dc3.rtest.com:389 (elapsed: 0:00:00.005157)",  "name": "svc-ldap",  "server": "dc3.rtest.com",  "threadName": "MainThread"}{  "asctime": "2021-08-18 19:39:32,511",  "exc_info": "Traceback (most recent call last):\n  File \"/secureone/remediant/ldap_kit/__init__.py\", line 50, in get_bound_ldap_connection\n    _type, _data, _msg_id, _ctrls = conn.simple_bind_s(bind_dn, bind_pass)\n  File \"/usr/local/lib/python2.7/site-packages/ldap/ldapobject.py\", line 228, in simple_bind_s\n    msgid = self.simple_bind(who,cred,serverctrls,clientctrls)\n  File \"/usr/local/lib/python2.7/site-packages/ldap/ldapobject.py\", line 222, in simple_bind\n    return self._ldap_call(self._l.simple_bind,who,cred,RequestControlTuples(serverctrls),RequestControlTuples(clientctrls))\n  File \"/usr/local/lib/python2.7/site-packages/ldap/ldapobject.py\", line 108, in _ldap_call\n    result = func(*args,**kwargs)\nSERVER_DOWN: {'info': 'Invalid argument', 'errno': 22, 'desc': \"Can't contact LDAP server\"}",  "ldapName": "rtest.com",  "levelname": "ERROR",  "message": "{'info': 'Invalid argument', 'errno': 22, 'desc': \"Can't contact LDAP server\"}",  "name": "svc-ldap",  "server": "dc3.rtest.com",  "threadName": "MainThread"}{  "asctime": "2021-08-18 19:39:32,527",  "details": {    "current_dc": {      "port": 389,      "server": "dc3.rtest.com"    },    "current_dc_try_count": 3,    "current_dc_try_duration_sec": 2.145052,    "dc_failover_enabled": true,    "error": {      "desc": "Can't contact LDAP server",      "errno": 22,      "info": "Invalid argument"    }  },  "ldapName": "rtest.com",  "levelname": "ERROR",  "message": "Domain Controller (DC) Failover: Error encountered during LDAP Sync",  "name": "svc-ldap",  "server": "dc3.rtest.com",  "threadName": "MainThread"}{  "asctime": "2021-08-18 19:39:32,532",  "details": {    "attempted_dcs": [      {        "port": 389,        "server": "dc1.rtest.com"      },      {        "port": 389,        "server": "dc3.rtest.com"      }    ],    "next_dc": {      "port": 389,      "server": "dc2.rtest.com"    },    "remaining_additional_dcs": []  },  "ldapName": "rtest.com",  "levelname": "WARNING",  "message": "Domain Controller (DC) Failover: LDAP Sync failed - Using next DC",  "name": "svc-ldap",  "server": "dc2.rtest.com",  "threadName": "MainThread"}{  "asctime": "2021-08-18 19:39:32,540",  "details": {    "attempted_dcs_count": 3,    "current_dc": {      "port": 389,      "server": "dc2.rtest.com"    },    "current_dc_connection_attempts": 1,    "dc_failover_enabled": true,    "is_initial_dc": false  },  "ldapName": "rtest.com",  "levelname": "WARNING",  "message": "Domain Controller (DC) Failover: Attempting LDAP Sync",  "name": "svc-ldap",  "server": "dc2.rtest.com",  "threadName": "MainThread"}{  "asctime": "2021-08-18 19:39:32,549",  "ldapName": "rtest.com",  "levelname": "INFO",  "message": "Open connection; connecting to ldap://dc2.rtest.com:389",  "name": "svc-ldap",  "server": "dc2.rtest.com",  "threadName": "MainThread"}{  "asctime": "2021-08-18 19:39:32,555",  "ldapName": "rtest.com",  "levelname": "INFO",  "message": "Open connection; binding to ldap://dc2.rtest.com:389 (elapsed: 0:00:00.005444)",  "name": "svc-ldap",  "server": "dc2.rtest.com",  "threadName": "MainThread"}{  "asctime": "2021-08-18 19:39:32,857",  "ldapName": "rtest.com",  "levelname": "INFO",  "message": "Open connection; connection opened and bound (duration: 0:00:00.307741)",  "name": "svc-ldap",  "server": "dc2.rtest.com",  "threadName": "MainThread"}{  "asctime": "2021-08-18 19:39:33,000",  "details": {    "attempted_dcs": [      {        "port": 389,        "server": "dc1.rtest.com"      },      {        "port": 389,        "server": "dc3.rtest.com"      }    ],    "failover_dc": "dc2.rtest.com",    "initial_dc": "dc1.rtest.com",    "sync_end_ts": "2021-08-18T19:39:33.000228",    "sync_start_ts": "2021-08-18T19:39:28.328537"  },  "ldapName": "rtest.com",  "levelname": "INFO",  "message": "Domain Controller (DC) Failover: LDAP Sync failover succeeded",  "name": "svc-ldap",  "server": "dc2.rtest.com",  "threadName": "MainThread"}{  "asctime": "2021-08-18 19:39:33,016",  "ldapName": "rtest.com",  "levelname": "INFO",  "message": "Completed LDAP Sync for rtest.com in 4.70408797264 seconds",  "name": "svc-ldap",  "server": "dc2.rtest.com",  "threadName": "MainThread"}{  "asctime": "2021-08-18 19:39:33,043",  "levelname": "INFO",  "message": "Completed LDAP Sync",  "name": "svc-ldap",  "threadName": "MainThread"}
```
