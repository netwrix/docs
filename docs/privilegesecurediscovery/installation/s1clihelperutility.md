---
title: "Install the S1 CLI Helper Utility"
description: "Install the S1 CLI Helper Utility"
sidebar_position: 40
---

# Install the S1 CLI Helper Utility

Install the S1 CLI Helper Utility

# Install the S1 CLI Helper Utility

### Overview

`s1` is a helper utility designed to manage SecureONE services and make running frequently used
commands easier.

### Installation

To install the `s1` utility, run the following command while in an SSH session to SecureONE:

```
curl -sL https://deploy.remediant.com/tools/s1_install.sh | sudo bash
```

This will download the latest docker image and install the launcher executable
at `/usr/local/bin/s1.`

If you get an error similar to,  “Error response from daemon: pull access denied for ..., repository
does not exist or may require ‘docker login’”, please log into using the below command:

```
sudo $(sudo aws ecr get-login --no-include-email)
```

### Usage

Displays the status of SecureONE services:

```
s1 status
```

Displays status of the SecureONE Docker nodes:

```
s1 nodes
```

Please use the `--help` option for additional usage information:

```
s1 --help
```

### Upgrading

To upgrade to a specific version of the `s1` utility, pulling down the latest docker image and
automatically updating the host executable.  2.14.0 used as an example version:

```
VERSION=2.14.0 s1 --upgrade
```

### Troubleshooting

If a firewall is preventing SecureONE from downloading the s1_install.sh script, you can download it
to you local PC to transfer to SecureONE with this URL:

```
https://deploy.remediant.com/tools/s1_install.sh
```

You can then: (1) FTP the script over, or (2) while in an SSH session to SecureONE, create a new
text file named s1_install.sh, copy the contents over, and make the file executable.
