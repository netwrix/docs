---
title: "Linux"
description: "Linux"
sidebar_position: 10
---

# Linux

By default, the Netwrix Change Tracker database resides on the /var/lib/mongo path. A typical
installation looks like the following:

# cd /var/lib/mongo

# ls

journal mongod.lock NNTHubService.2 NNTHubService.5 NNTHubService.ns

local.0 NNTHubService.0 NNTHubService.3 NNTHubService.6

local.ns NNTHubService.1 NNTHubService.4 NNTHubService.7

The minimum requirement for Netwrix Change Tracker implementation is 10GB free space for the volume
supporting `/var/lib`.

## Modify database storage path before installing Change Tracker

If you prefer to write database files to a different path or volume, use the following procedure
instead of the standard **nnthubservice.rpm** installer package.

You can install mongo first and change the `dbpath` parameter before installing the rest of the
system. Set this up as early as possible to prevent mongo from creating large files.

# yum install mongodb-org

This installs just mongo. At that point, you can tweak the parameters as needed before proceeding
with the rest of the installation. First, stop any mongo processes:

# service mongod stop

Create the folder to move the data to:

# mkdir -p /opt/mongod/data

Then edit the mongod config file.

# vi /etc/mongod.conf

and look for the entry:

dbpath=/var/lib/mongo

and change it to:

dbpath=/opt/mongod/data

Finally, restart the database using:

# service mongod start

## Modify the database storage path after installing the product

:::tip
If SELinux is enabled, copy the directory that the installer creates to the new location. The
following copy command example preserves the SELinux labeling in the copied directory.
:::


# cp -avr /var/lib/mongo/ /secondpartition/

Stop the hub and mongo services:

# service nnthubservice stop

# service mongod stop

Create the folder to move the data to:

# mkdir -p /opt/mongod/data

Move the data files into the new folder:

# cd /opt/mongod/data/

# mv /var/lib/mongo/\*

Remove the old folder:

# rmdir /var/lib/mongo

Change the config to point to the new folder:

# vi /etc/mongod.conf

Then look for the entry:

dbpath=/var/lib/mongo

And change it to:

dbpath=/opt/mongod/data

Restart mongo and the hub:

# service mongod start

# service nnhubservice start

You can also configure mongo to use smaller files on disk-space-constrained systems by adding a
parameter to the mongod.conf file:

smallfiles=true
