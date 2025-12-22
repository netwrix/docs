---
title: "Docker Secrets Matching DR Site to PROD Site"
description: "Docker Secrets Matching DR Site to PROD Site"
sidebar_position: 30
---

# Docker Secrets Matching DR Site to PROD Site

Docker Secrets Matching DR Site to PROD Site

# Docker Secrets Matching DR Site to PROD Site

### Overview

Privilege Secure utilizes Docker secrets to encrypt sensitive data, such as passwords, SSH keys, and
SSL certificates, for transmission over the network.

This secret is created during the installation of Privilege Secure.  To backup and restore data from
one Privilege Secure instance to another, these secrets must match.  Examples of where data would be
required to be transferred data between Privilege Secure instances include:

- Backing up the database to a disaster recovery instance
- Transferring from a single appliance, like a PoC, to a high availability cluster
- Rebuilding the docker swarm for troubleshooting, or  environment restructuring

For more information on Docker secrets, please see Docker's page
here:  [Docker: Manage sensitive data with Docker secrets](https://docs.docker.com/engine/swarm/secrets/)

### Requirements

This guide utilizes
the [Install the S1 CLI Helper Utility ](/docs/privilegesecurediscovery/installation/s1clihelperutility.md)

### Retrieve the Docker Secret from Current Privilege Secure Instance

If using a single appliance, open an SSH session into thePrivilege Secure node.

If using a cluster, located the node running the API service with `s1 status`; and open an SSH
session into that Privilege Secure node.

Run following command:

```
sudo docker exec -it $(sudo docker ps | grep api | cut -d' ' -f1) cat /run/secrets/key.txt > /secureone/data/key.txt
```

Check the file was created and has two lines.

```
cat /secureone/data/key.txt; echo
```

Note:  Without the`; echo` in the command above, the second line will run into the command prompt,
this is expected as that line does not have a carriage return. 

Highlight the two lines of the key, stopping at the end of the second line, do not include the
carriage return, and copy.

### Copy Docker Secret to New Privilege Secure Instance

SSH into the primary node of the new instance.  Use your favorite text editor to create a key.txt
file to use for as the new Docker secret.  Vim is used in the below example:

```
sudo vim /secureone/data/key.txt
```

Paste the two lines cut from above and save the file.

### Applying the Docker Secret to the New Privilege Secure Instance

During thePrivilege Secure install, where the Docker secret key is created, instead apply the new
key:

```
sudo docker secret create key.txt/secureone/data/key.txt
```

Continue the deployment.  After the install, you can verify the key was used by following the step
in the 'Retrieve the Docker Secret from Current SecureONE Instance' section at the start of this
article.

### Troubleshooting

Some indicators that the Docker secrets key did not transfer correctly are described in the
Troubleshooting section above.

### More Information

[Docker: Manage sensitive data with Docker secrets](https://docs.docker.com/engine/swarm/secrets/)
