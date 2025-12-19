---
title: "Linux"
description: "Linux"
sidebar_position: 10
---

# Linux

By default the Netwrix Change Tracker database resides on the /var/lib/mongo path. A typical
installation will look like the below:

# cd /var/lib/mongo

# ls

journal mongod.lock NNTHubService.2 NNTHubService.5 NNTHubService.ns

local.0 NNTHubService.0 NNTHubService.3 NNTHubService.6

local.ns NNTHubService.1 NNTHubService.4 NNTHubService.7

The minimum requirement for Netwrix Change Tracker implementation is 10GB free space for the volume
supporting `/var/lib`.

## Modify Database Storage Path Prior to Installation of Change Tracker

If you prefer database files to be written to a different path/volume then it is best to carry out
the following procedure instead of using the standard **nnthubservice.rpm** installer package.

You can install mongo first and alter the `dbpath` parameter before installing the rest of the
system if you wish - it s probably best setup as early as possible to prevent the large files being
created.

# yum install mongodb-org

Should install just mongo at which point you can tweak the parameters as required before proceeding
with the rest of the installation. First stop any mongo processes:

# service mongod stop

Create the folder for the data to be moved to:

# mkdir -p /opt/mongod/data

Then edit the mongod config file.

# vi /etc/mongod.conf

and look for the entry:

dbpath=/var/lib/mongo

and change it to:

dbpath=/opt/mongod/data

Finally, restart the database using:

# service mongod start

## Modify the Database Storage Path after Installing the Product

:::tip
Remember, if SELinux is enabled then please copy the directory created by the install to the new
location. The copy command (example below), will take all the SELinux labelling with the copied
directory.
:::


# cp -avr /var/lib/mongo/ /secondpartition/

Stop the hub and mongo services:

# service nnthubservice stop

# service mongod stop

Create the folder for the data to be moved to:

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

In addition it is possible to ask mongo to use smaller files on disk-space constrained systems. In
the mongod.conf file you can add a further parameter:

smallfiles=true
