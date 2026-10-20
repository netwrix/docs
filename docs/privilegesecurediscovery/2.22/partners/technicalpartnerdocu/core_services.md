# Core Services

Core Services

# Core Services

Privilege Secure is comprised of the following Docker containers, which each perform a unique task:

- s1_api
- s1_db (single node) OR s1_mongo1, s1_mongo2, s1_mongo3, etc (cluster setup)
- s1_expire
- s1_fluentd
- s1_ldapsync
- s1_mq
- s1_scanner
- s1_worker

Below is the sample output of running
`sudo docker service ls | awk -F" " '{print $2,$3,$4}' in a single-node environment.  Run `sudo
docker service ls` for the complete output:

![Screen_Shot_2019-04-19_at_1.13.L51_PM.webp](/images/privilegesecure/4.2/discovery/360021493614_screen_shot_2019-04-19_at_1.13.51_pm_293x206.webp)

## API Service Description

Privilege Secure is built from the ground up on a REST based API.  This service runs the web portal
and the UI through which Users and Administrators interact with the UI, as well as all of the API
which can be called to leverage all of the features of Privilege Secure from any external source
capable of ingesting JSON data returned from the calls.

How to check the status of the service from the command line:

- `sudo docker service ps s1_api`

## DB/Mongo Service Description

Privilege Secure runs MongoDB as its database service.  Everything pertinent to Privilege Secure is
stored there, and additional data regarding the data structure can be found in the support
documentation included in this portal.

How to check the status of the service from the command line:

- `sudo docker service ps s1_db` (single node)

    OR

- `sudo docker service ps s1_mongo1` (cluster, incrementing `mongo1` by 1 for every node in the
  cluster)

## Expire Service Description

There are a number of reasons why Privilege Secure may not be able to contact a specific node on the
network at any given time - laptops coming on and off the network, firewall rules changing, network
outages, etc.  When this happens and Privilege Secure is waiting to execute a command for this
machine such as expiring an active JITA session, but cannot connect to a resource at the time
required, the event passes into the expire queue where it is periodically attempted again until
either successful, or times out as an error.  The expire container is responsible for managing
expiration requests, both active and pending.
How to check the status of the expire service from the command line:

- `sudo docker service ps s1_expire`

## Fluentd Service Descirption

Fluentd is the log aggregation tool Privilege Secure uses.  It gathers all of the logging
information from the other Docker containers, aggregates it, formats it, and then spits it out via
syslog to a SIEM.  Syslog is the default format, however for Splunk specifically fluentd uses the
"HEC (HTTP Event Collector)" to directly send logs into Splunk.

How to check the status of the fluentd service from the command line:

- `sudo docker service ps s1_fluentd`

## LDAPSync Service Description

This service performs the baseline sync which takes place with Active Directory (AD).  An initial
sync with AD has essentially 5 stages which are clearly visible in the `svc-ldap.log` file:

1. Initial connection and authentication
2. Sync of AD Computer objects
3. Sync of AD User objects
4. Sync of AD Group objects
5. Message of sync completed

Once these initial sync messages have taken place, the ldapsync checks again with the configured
domain(s) every 60 seconds and tracks any new and additional changes.

How to check the status of the ldapsync service from the command line:

- `sudo docker service ps s1_ldapsync`

## MQ Service Description

MQ stands for "Messaging Queue" and it is the container which handles intra-container communications
and prioritization of messages.
How to check the status of the service from the command line:

- `sudo docker service ps s1_mq`

## Scanner Service Description

Privilege Secure is a continuous scanning solution for Privileged Access Management, and the scanner
container is the service responsible for carrying that out.  It is its own independent container,
solely responsible for scanning the network and updating all database records according to what it
discovers.
How to check the status of the scanner service from the command line:

- `sudo docker service ps s1_scanner`

## Worker Service Description

The worker service is responsible for carrying out active requests.  Some of what is does, such as
re-scanning an endpoint, and where relevant enforcing Protect Mode, overlaps with the scanner
container.  However, most of what the worker container is responsible for is enforcing changes which
are either manually requested by a user or requested via the API.  For example, when searching for a
computer in the "Grant Access" pane, the majority fo the options present for an endpoint are
executed by the worker container - Rescan, Remove Admin, Set/Remove Persistent, Request Access, etc.

How to check the status of the worker service from the command line:

- `sudo docker service ps s1_worker`
