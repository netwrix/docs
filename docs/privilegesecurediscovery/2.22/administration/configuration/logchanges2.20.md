---
title: "Log Changes 2.20+"
description: "Log Changes 2.20+"
sidebar_position: 10
---

# Log Changes 2.20+

Log Changes 2.20+

# Log Changes 2.20+

The purpose of this article is to document the changes coming to Privilege Secure logs in version
2.20. The purpose of this document is to assist with updating any filtering or parsing that an
organization is using for reporting or in their SIEM.

## Exception log formatting changes

- Services affected: Worker, Scanner, Internal API, Analytics Engine, Health Reporter, LDAP Sync,
  Expire, Windows Bridge services
- log "message" fields starting with "Exception: " now have a details field with the error type and
  message
- all other log fields that had a string value starting with "Exception: " now have subfields with
  error type and message
- change the log message that was simply "Exception: " to "Exception in Windows scan."

**NOTE:** There may still be log messages that are simply "Exception: " in other places, where the
exception does not have a message.

Example 1:

Before:

```
"message": "Exception: (any string)"

```

After:

```
"message": "Exception: (any string)",
"details": {"error": {"__type__": "ErrorType", "is_exception": True, "message": "(any string)"}},

```

Example 2:

Before:

```
"message": "Exception: (any string)",
"details": {"error": {"__type__": "ErrorType", "is_exception": True, "message": "(any string)"}},

```

After:

```
"some_other_field": {"__type__": "SomeErrorType",
"is_exception": True,
"message": "(some string)"}

```

Example 3:

Before (near end of a Windows system scan):

```
"levelname": "ERROR",
"message": "Exception: "

```

After:

```
"levelname": "ERROR",
"message": "Exception in Windows scan",
"details": {"error": {"__type__": "ErrorType", "is_exception": True, "message": "(some string)"}},
```

## Windows System Management Log Changes

Services affected: Worker, Scanner.

Added “connector action” logs with a standard format for all actions done on the remote managed
Windows systems

- Available for all Windows connection types (including EDR integrations such as CrowdStrike)
- Previously, there were no officially supported logs for most EDR interactions with the system.
- Standard format for all interactions with the managed system.
- These logs will be available when previewing Windows Bridge.
- New log messages:

    - NOTE: Certain errors returned by the system are expected and handled, so seeing this log
      message does not necessarily indicate a problem. Use loglevel WARNING and ERROR logs to find
      potential problems.
    - "connector action start" - level DEBUG, with "details" field
    - "connector action result" - level INFO, with "details" field
    - "connector action error" - level INFO, with "details" field

- Full documentation and examples: Connector Action Logs (Windows only)

“Unknown SID:” log message now only logged if no match for the SID was found in the database

Remove extra quotes from around “System hostname does not match” lastScan message and scan detail
log

Change deprecated "system" field value to "Main" in the following Windows logs (use “targetSystem”
field instead)

- "Connecting with IP address: ((host))"
- "Retrying connection with IP address: ((host))"
- "Trying next IP after error"
- “Unknown SID”

Removed various "loglevel": "ERROR" Windows logs with redundant error messages

**NOTE:** Only the raw error message was logged, with no prefix, so there is no way to find these
without listing all possible error messages (thousands). The same error message gets logged in other
places, so these logs are not needed.

Removed various low level Windows log messages (use new “connector action” logs instead)

- These messages had varying formats and were not available for EDR connection types.
- Please use the new “connector action” logs instead for all non-troubleshooting purposes going
  forward.
- This means any SIEM or other logging integrations that use string based
- See migration table:
  [2.20.0 Windows Logging Changes: Old to New Mapping](https://remediant.quip.com/account/login?next=https%3A%2F%2Fremediant.quip.com%2FgpdpAcMLBAFZ&permalink=EFDAAAtQ1nb&secret_path=gpdpAcMLBAFZ).
- Partially removed log messages:

    - **NOTE:** Kerberos auth type does not use the discovered IP and does not retry if multiple IPs
      are found. However, we still save the first discovered pingable IP as last_ip in the database,
      even if it wasn’t the IP used to establish the connection.
    - "Connecting with IP address: ((ip))" - now logged only if using NTLM auth (i.e. not logged
      with Kerberos auth)

- Removed log messages (use new “connector action” logs):

    - "Initializing WinMgmt module"
    - "Connecting with Kerberos: ((host))"
    - "Connection failed, but Kerberos auth type does not retry."
    - "Disconnecting..."
    - "Enabled user: ((username))"
    - "Disabled user: ((username))"
    - "Successfully Enabled user: ((username))"
    - "Successfully Disabled user: ((username))"
    - "No change to ((enabled/ disabled)) state for user: ((username))"
    - "Setting password for RID ((userRid))"
    - "Successfully updated password for RID ((userRid))"
    - "Changing password for user: ((username))"
    - "Successfully changed password for user: ((username))"
    - "Creating new user: ((username))"
    - "Successfully created user: ((user_info))"
    - "Deleting user: ((username)), sid: ((sid))"
    - "User: ((username)) does not exist on system"
    - "Successfully deleted user: ((username)), sid: ((sid))"
    - "Adding user to local admin group: ((user))"
    - "Successfully added user to local admin group: ((user))"
    - "Successfully removed user from local admin group: ((user))"
    - "User already removed from admins (((e.type_name): ((e)), user=((user))"
    - "User does not exist to remove from admins (((e.type_name): ((e)), user=((user))"

- Added "debugging": true flag and possibly changed other fields in the following log messages (use
  new “connector action” logs).

    - **NOTE:** Log messages that have the "debugging": true flag may be removed or modified in
      future releases without notice in the change log. They should not be relied on for any purpose
      other than temporary troubleshooting/ debugging.
    - "Connected"
    - "Verifying host name"
    - "Unknown error connecting"
    - "Reached max attempts. Not attempting remaining addresses."
    - "Getting list of domains"
    - "Getting domain handle for ((domainName))"
    - "Getting handle of alias group ((aliasId))"
    - "Getting server handle"
    - "Sending server name ((server_name)). Do not use in production!"
    - "Getting list of SIDS for alias group"
    - "Looking up user information: ((username))"
    - "Looking up user information by RID: ((rid))"
    - "Looking up user information: ((username))"
    - "No sids could be found: STATUS_SOME_NOT_MAPPED"
    - "Unknown error occurred looking up sids: ((error))"
    - "User info for SIDS: ((users))"
    - "Adding SID: ((sid))"
    - "Generating SAMR encryption key"
    - "Creating SAMR password buffer"
    - "Encrypting SAMR password"
    - "Sending updated password payload"
    - "Changing local user name to ((username)) for SID ((sid))"
    - "Sending updated password payload"
    - "Successfully changed local user name to ((username)) for SID ((sid))"
    - "Failed to change local user name to ((username)) for SID ((sid))"
    - "Getting list of Admin users"
