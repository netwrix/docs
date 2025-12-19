---
title: "Application Log CheatSheet Basics"
description: "Application Log CheatSheet Basics"
sidebar_position: 20
---

# Application Log CheatSheet Basics

Application Log CheatSheet Basics

# Application Log CheatSheet Basics

This document will review the basics of the local logging for Privilege Secure application.

## Services Locally Logged

By default Privilege Secure logs locally the below services

- Expire
- LDAP
- Scanner
- Worker

**NOTE:** The API service (which shows all web/UI actions and events) is by default not logged
locally, but can be configured to do so. This requires a restart of the Fluentd service which No
downtime is expected. The Fluentd service is the log parser for all other services and as a
proactive measure we advise to have an internal change request window in place before making this
change.

## Local Logging naming convention and details

All local logs start with the naming convention “svc-” for service. The below attributes are
configured for Privilege Secure’s service logging.  
Local log rotation is set for each file under the `/discovery/data/logs` directory. Once the file
size reaches **10MB** the “active” file will be rotated and renamed to an “archived” file ending in
a number 1-5. For retention purposes only 5 archived files, plus 1 active file, will be kept locally
for each service.

## Local logs location

The location of all Privilege Secure service logs, within the appliance, are under the
`/discovery/data/logs` directory.

Example:

```
secureone@ip-10-100-11-20:~$ ls /secureone/data/logs/ | grep svc
svc-expire.log
svc-expire.log.1
svc-expire.log.2
svc-expire.log.3
svc-expire.log.4
svc-expire.log.5
svc-ldap.log
svc-ldap.log.1
svc-ldap.log.2
svc-ldap.log.3
svc-ldap.log.4
svc-ldap.log.5
svc-scan.log
svc-scan.log.1
svc-scan.log.2
svc-scan.log.3
svc-scan.log.4
svc-scan.log.5
svc-worker.log
svc-worker.log.1
svc-worker.log.2
svc-worker.log.3
svc-worker.log.4
svc-worker.log.5

```

## Access and Viewing Log content

To access and view these logs, use the **cat** or **tail** command(s) to display the content.

The **cat** command shows static content for the log referenced. The below example showing the cat
command combined with the head and nl commands to show the top 3 lines (**head -3**)  of the file,
numbered (**nl**).

```
secureone@ip-10-100-11-20:~$ cat /secureone/data/logs/svc-scan.log | head -3 | nl
1 {"asctime": "2022-03-17 14:56:33,609", "jobId": "33633247-8109-4f04-82a6-51ab3cda3564", "levelname": "DEBUG", "message": "Getting
2 {"asctime": "2022-03-17 14:56:33,619", "jobId": "73c4a8a1-967b-4642-8ae9-314092438bdb", "levelname": "DEBUG", "message": "Getting
3 {"asctime": "2022-03-17 14:56:33,620", "jobId": "33633247-8109-4f04-82a6-51ab3cda3564", "levelname": "DEBUG", "message": "Getting

```

The tail command, with the -f flag with show the last 10 lines, by default, that are written to the
logs as they are being written to the logs, numbered (**nl**).

```
secureone@ip-10-100-11-20:~$ tail /secureone/data/logs/svc-scan.log | nl
1 {"asctime": "2022-05-02 19:58:07,293", "levelname": "WARNING", "message": "Systems for scanning do not exist yet. Waiting 0 minutes to reload", "name": "remediant", "scanId": "6141127f-8512-4d9d-bb28-99e84cd7001e", "service": "svc-scan", "system": "Main", "threadName": "MainThread"}
2 {"asctime": "2022-05-02 19:58:37,324", "levelname": "WARNING", "message": "Systems for scanning do not exist yet. Waiting 0 minutes to reload", "name": "remediant", "scanId": "6141127f-8512-4d9d-bb28-99e84cd7001e", "service": "svc-scan", "system": "Main", "threadName": "MainThread"}
3 {"asctime": "2022-05-02 19:59:07,352", "levelname": "WARNING", "message": "Systems for scanning do not exist yet. Waiting 0 minutes to reload", "name": "remediant", "scanId": "6141127f-8512-4d9d-bb28-99e84cd7001e", "service": "svc-scan", "system": "Main", "threadName": "MainThread"}
4 {"asctime": "2022-05-02 19:59:37,384", "levelname": "WARNING", "message": "Systems for scanning do not exist yet. Waiting 0 minutes to reload", "name": "remediant", "scanId": "6141127f-8512-4d9d-bb28-99e84cd7001e", "service": "svc-scan", "system": "Main", "threadName": "MainThread"}
5 {"asctime": "2022-05-02 20:00:07,388", "levelname": "WARNING", "message": "Systems for scanning do not exist yet. Waiting 0 minutes to reload", "name": "remediant", "scanId": "6141127f-8512-4d9d-bb28-99e84cd7001e", "service": "svc-scan", "system": "Main", "threadName": "MainThread"}
6 {"asctime": "2022-05-02 20:00:37,420", "levelname": "WARNING", "message": "Systems for scanning do not exist yet. Waiting 0 minutes to reload", "name": "remediant", "scanId": "6141127f-8512-4d9d-bb28-99e84cd7001e", "service": "svc-scan", "system": "Main", "threadName": "MainThread"}
7 {"asctime": "2022-05-02 20:01:07,444", "levelname": "WARNING", "message": "Systems for scanning do not exist yet. Waiting 0 minutes to reload", "name": "remediant", "scanId": "6141127f-8512-4d9d-bb28-99e84cd7001e", "service": "svc-scan", "system": "Main", "threadName": "MainThread"}
8 {"asctime": "2022-05-02 20:01:37,448", "levelname": "WARNING", "message": "Systems for scanning do not exist yet. Waiting 0 minutes to reload", "name": "remediant", "scanId": "6141127f-8512-4d9d-bb28-99e84cd7001e", "service": "svc-scan", "system": "Main", "threadName": "MainThread"}
9 {"asctime": "2022-05-02 20:02:07,464", "levelname": "WARNING", "message": "Systems for scanning do not exist yet. Waiting 0 minutes to reload", "name": "remediant", "scanId": "6141127f-8512-4d9d-bb28-99e84cd7001e", "service": "svc-scan", "system": "Main", "threadName": "MainThread"}
10 {"asctime": "2022-05-02 20:02:37,488", "levelname": "WARNING", "message": "Systems for scanning do not exist yet. Waiting 0 minutes to reload", "name": "remediant", "scanId": "6141127f-8512-4d9d-bb28-99e84cd7001e", "service": "svc-scan", "system": "Main", "threadName": "MainThread"}

```

## Fluentd(stdout) Log viewing

As mentioned the Fluentd service is the log parser for all services. Because of this, all services
(API, Scanner, Worker, Expire, Fluentd, analytics_engine, ) are accessible via the stdout (standard
out) where all the services/processes are written to.

To view all of the service’s events directly from the appliance, in real time, run the below
command. This command shows the events within a “real time frame” which has a general 3-5 minute
window from the actual action/event occurring. Since this is a “real time” view of events there is
no availability to review the logs historically with this method, which is why there is the local
logging files mentioned above.

These logs are in JSON format and are color coded. This command/tool is best used for
troubleshooting of Fluentd service or API, if API local logging is not configured yet, but has other
uses.

`s1 logs`

Example:

```
secureone@ip-10-100-11-40:~$ s1 logs
2022-05-10 19:04:01 +0000 docker.s1_analytics_engine.1.gx0pvflej8lxbn2u1zculyi16: {
"log": "INFO - Not running, because access_risk feature-flag not found at SecureONE.secureone_config; run migrations?",
"container_id": "ad5a12fbbb4aa34b4480156eda6d80d8d236a85d0ca300f4b5e011eb52acbcfc",
"container_name": "/s1_analytics_engine.1.gx0pvflej8lxbn2u1zculyi16",
"source": "stdout"
}
2022-05-10 19:08:36 +0000 fluent.warn: {
"error": "#<Fluent::Plugin::Parser::ParserError: pattern not matched with data '/usr/local/lib/python2.7/site-packages/ansible/parsing/vault/__init__.py:41: CryptographyDeprecationWarning: Python 2 is no longer supported by the Python core team. Support for it is now deprecated in cryptography,
 "location": null,
"tag": "docker.s1_scanner.1.j8mf0k30jon22zvti0nh9ap64",
 "time": 1652209716,
 "record": {
 "container_name": "/s1_scanner.1.j8mf0k30jon22zvti0nh9ap64",
"source": "stderr",
"log": "/usr/local/lib/python2.7/site-packages/ansible/parsing/vault/__init__.py:41: CryptographyDeprecationWarning: Python 2 is no longer supported by the Python core team. Support for it is now deprecated in cryptography, and will be removed in the next release.",
"container_id": "7ed4a9c703d90346bbe40224420f1aaefdba13cd3dcbbdb982dc4d0959124134"
},
  "message": "dump an error event: error_class=Fluent::Plugin::Parser::ParserError error=\"pattern not matched with data '/usr/local/lib/python2.7/site-packages/ansible/parsing/vault/__init__.py:41: CryptographyDeprecationWarning: Python 2 is no longer supported by the Python core team. Support for it is now deprecated in cryptography, and will be removed in the next release.'\" location=nil tag=\"docker.s1_scanner.1.j8mf0k30jon22zvti0nh9ap64\" time=1652209716 record={\"container_name\"=>\"/s1_scanner.1.j8mf0k30jon22zvti0nh9ap64\", \"source\"=>\"stderr\", \"log\"=>\"/usr/local/lib/python2.7/site-packages/ansible/parsing/vault/__init__.py:41: CryptographyDeprecationWarning: Python 2 is no longer supported by the Python core team. Support for it is now deprecated in cryptography, and will be removed in the next release.\", \"container_id\"=>\"7ed4a9c703d90346bbe40224420f1aaefdba13cd3dcbbdb982dc4d0959124134\"}"
}
2022-05-10 19:08:36 +0000 [warn]: #0 dump an error event: error_class=Fluent::Plugin::Parser::ParserError error="pattern not matched with data '/usr/local/lib/python2.7/site-packages/ansible/parsing/vault/__init__.py:41: CryptographyDeprecationWarning: Python 2 is no longer supported by the Python core team. Support for it is now deprecated in cryptography, and will be removed in the next release.'" location=nil tag="docker.s1_scanner.1.j8mf0k30jon22zvti0nh9ap64" time=1652209716 record={"container_name"=>"/s1_scanner.1.j8mf0k30jon22zvti0nh9ap64", "source"=>"stderr", "log"=>"/usr/local/lib/python2.7/site-packages/ansible/parsing/vault/__init__.py:41: CryptographyDeprecationWarning: Python 2 is no longer supported by the Python core team. Support for it is now deprecated in cryptography, and will be removed in the next release.", "container_id"=>"7ed4a9c703d90346bbe40224420f1aaefdba13cd3dcbbdb982dc4d0959124134"}
2022-05-10 19:08:36 +0000 docker.s1_scanner.1.j8mf0k30jon22zvti0nh9ap64: {
  "container_name": "/s1_scanner.1.j8mf0k30jon22zvti0nh9ap64",
  "source": "stderr",
  "log": "/usr/local/lib/python2.7/site-packages/ansible/parsing/vault/__init__.py:41: CryptographyDeprecationWarning: Python 2 is no longer supported by the Python core team. Support for it is now deprecated in cryptography, and will be removed in the next release.",
  "container_id": "7ed4a9c703d90346bbe40224420f1aaefdba13cd3dcbbdb982dc4d0959124134"
}
2022-05-10 19:08:36 +0000 fluent.warn: {
  "error": "#<Fluent::Plugin::Parser::ParserError: pattern not matched with data '  from cryptography.exceptions import InvalidSignature'>",
  "location": null,
 "tag": "docker.s1_scanner.1.j8mf0k30jon22zvti0nh9ap64",
  "time": 1652209716,
  "record": {
   "source": "stderr",
    "log": "  from cryptography.exceptions import InvalidSignature",
    "container_id": "7ed4a9c703d90346bbe40224420f1aaefdba13cd3dcbbdb982dc4d0959124134",
   "container_name": "/s1_scanner.1.j8mf0k30jon22zvti0nh9ap64"
  },
  "message": "dump an error event: error_class=Fluent::Plugin::Parser::ParserError error=\"pattern not matched with data '  from cryptography.exceptions import InvalidSignature'\" 
location=nil tag=\"docker.s1_scanner.1.j8mf0k30jon22zvti0nh9ap64\" time=1652209716 record={\"source\"=>\"stderr\", \"log\"=>\"  from cryptography.exceptions import InvalidSignature\", 
\"container_id\"=>\"7ed4a9c703d90346bbe40224420f1aaefdba13cd3dcbbdb982dc4d0959124134\", \"container_name\"=>\"/s1_scanner.1.j8mf0k30jon22zvti0nh9ap64\"}"
}

```
