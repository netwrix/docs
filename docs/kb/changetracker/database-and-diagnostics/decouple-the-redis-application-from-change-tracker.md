---
description: >-
  Explains how to decouple Redis from Change Tracker and install it on a Linux
  system to address security vulnerabilities in the Windows version. Includes
  installation, configuration, and connectivity setup instructions.
keywords:
  - Netwrix Change Tracker
  - Redis
  - message broker
  - Linux installation
  - Redis configuration
  - Hub Workers
  - vulnerability scanner
  - Redis password
  - firewall configuration
products:
  - change-tracker
sidebar_label: Decouple Redis from Change Tracker
tags: []
title: Decouple the Redis Application from Change Tracker
---

# Decouple the Redis Application from Change Tracker

## Scenario

Redis is used by Change Tracker to cache information between Change Tracker and all the workers within the Change Tracker architecture. By default, Redis is installed on the Change Tracker server and runs as a service. At the time of writing, the version of Redis installed on Windows is 3.2, but the current stable release is 5.0.8, which means vulnerability scanners may identify the need for Redis to be upgraded. Version 3.2 is the latest version of Redis available for Windows, and to upgrade Redis, the application needs to be decoupled and installed onto a Linux system.

Change Tracker only uses Redis as its message broker to keep all the Worker devices in sync when there are changes to the Change Tracker configuration. The Redis communication channel broadcasts when any of the following changes occur:

- Groups, Devices
- Planned Changes
- Config (System) Settings
- IP Address Blocking
- Report or Tracking Templates

## Summary of Tasks

- Build a Linux system
- Ensure connectivity between the Change Tracker server, all Hub Workers, and the new Linux system
- Install and configure the Redis configuration file on the Linux system
- Configure Change Tracker to connect to Redis
- Disable the local Redis Service and restart the worker services

## Build a Linux System

Redis can be run on a variety of Linux distributions, including CentOS, RHEL, and AWS Linux. Any current version of the operating system should be suitable for the Redis installation. The system hosting Redis can be minimal, as we are not caching anything in RAM; Redis can be used as an in-memory datastore, but we are only using the message broker function.

- 2 vCPUs
- 2GB RAM
- Default port: 6379

## Ensure Connectivity Between Change Tracker Server, All Hub Workers, and the New Linux System

The Redis default port is 6379; however, this can be changed to a port of your choosing.

If using Windows, check that the Redis port is allowed outbound.

Check that the Linux system's firewall is running, and if so, add a rule to allow for the Redis connection. Below is a list of useful commands that can be used for testing from CentOS 7.

```plaintext
# firewall-cmd --state
# firewall-cmd --permanent --add-port=6379/tcp
# firewall-cmd --reload
# firewall-cmd --list-ports
```

## Install, Compile, and Configure Redis on the Linux System

### Install from a Repo

```plaintext
# rpm -ivh https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
# rpm -ivh https://rpms.remirepo.net/enterprise/remi-release-7.rpm
```

<u>NOTE: The below relates to RHEL. If using CentOS, this line can be dropped.</u>

```plaintext
# subscription-manager repos --enable=rhel-7-server-optional-rpms
```

```plaintext
# yum install -y redis --enablerepo=remi
# systemctl start redis
# systemctl enable redis
```

Change the following lines in `redis.conf`:

```plaintext
# sudo nano /etc/redis.conf
```

Use the search functions of your text editor to find the line within the config file that needs to be changed.

Add the IP address of the port for which the Change Tracker will connect.

```plaintext
bind 127.0.0.1 -> bind 127.0.0.1 172.31.21.101
```

Change the following settings in the Redis configuration file:

```plaintext
daemonize no -> daemonize yes
protected-mode yes -> protected-mode no
```

### Configuring a Redis Password

Note: A complex password can be created using the line below:

```plaintext
echo "RedisForChangeTracker" | sha256sum
c28b560b2b8dd06bf9f7b0fa873365a9a95a9947860d4b60b7849702bce13f8b
```

Configuring a Redis Password in the Redis configuration file:

```plaintext
# requirepass foobared -> requirepass <YourRedisPassword>
```

Restart the Redis service:

```plaintext
# systemctl restart redis
```

## Check the Service is Running and Using Authentication

From the Linux command prompt:

```plaintext
# redis-cli
127.0.0.1:6379> ping
(error) NOAUTH Authentication required.
127.0.0.1:6379> auth <YourRedisPassword>
OK
127.0.0.1:6379> ping
PONG
```

## Configure Change Tracker to Connect to Redis

### Run the Netwrix Maintenance Application

Run the Netwrix Change Tracker maintenance application to reconfigure the Redis configuration.

Open PowerShell and run as administrator:

```plaintext
cd "C:\Program Files\NNT Change Tracker Suite\Gen7\Maintenance"

.\NNT.Hub.Service.Maintenance.App.exe -e Production -l "C:\inetpub\wwwroot\Change Tracker Generation 7 (NetCore) Hub\Configs"
```

From the options that appear, select **M** to modify DB and Cache Service connection details and answer the questions that are specific to your configuration.

```plaintext
Select option from menu above and press ENTER : M
Has Database Username/Password authentication been removed from the connection? Please provide a yes or no answer.
yes
Please provide a Connection String or press Enter to retain the current value (mongodb://localhost).

Please provide a Database Name or press Enter to retain the current value (NNTHubService).

Please provide a yes or no answer to using an SSL certificate to protect the Database Connection or press Enter to retain the current value (no).

Has the Password requirement for the Cache server (Redis) connection been removed? Please provide a yes or no answer.
no
Please provide a host name for the Cache server (Redis) or press Enter to retain the current value (172.31.21.101).

Please provide a port number for the Cache server (Redis) or press Enter to retain the current value (6379).

Please provide the Password required to connect to the Cache server (Redis).
<YourRedisPassword>
```

To confirm that the Redis configuration has changed, check the Production JSON file using a text editor. The Redis entries within the editor should look like this:

![Redis Configuration](https://nwxcorp--c.na147.content.force.com/sfc/dist/version/download/?oid=00D7000000091pB&ids=0684u00000LdK8r&d=%2Fa%2F4u000000M0CY%2FQvMM00AZ.qEgABMbSfa1B2552qW5IQfsgwS6Ul9HrSc&asPdf=false)

## Disable the Local Redis Service and Restart the Worker Services

From the service manager or via PowerShell, stop the Redis service and change the startup status to Disabled.

```plaintext
Stop-Service Redis
Set-Service -Name Redis -StartupType Disabled
```

Once Redis is disabled, restart the worker service to pick up the change in the Redis configuration.

```plaintext
Restart-Service NNTWorker.AllPurpose
Restart-Service NNTWorker.HubTasks
```
