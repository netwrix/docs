---
title: "Linux Server Configuration"
description: "Settings a Linux server needs so Access Analyzer can scan it over SMB/CIFS or NFSv3, with the RHEL commands for each."
sidebar_position: 10
---

# Linux Server Configuration

Access Analyzer scans a Linux server over the network, so you make these settings on the Linux server. The commands are for Red Hat® Enterprise Linux® (RHEL) and run with `sudo`. Other distributions use equivalent commands. See the [Linux Target Requirements](/docs/accessanalyzer/12.0/requirements/filesystem/filesystems/linux/overview.md) topic for the permissions and ports each protocol requires.

## Configure SMB/CIFS Access

Ensure the Windows account in the Connection Profile is a valid user of the share and has read and execute permissions on the shared directory and every directory below it.

When SELinux is in enforcing mode, Samba can't read a directory unless it has the Samba label. Without the label, the scan reports the share as access denied. To check the mode:

```bash
getenforce
```

If the result is `Enforcing`, label the shared directory:

```bash
sudo semanage fcontext -a -t samba_share_t "{share-path}(/.*)?"
sudo restorecon -R {share-path}
```

## Configure NFSv3 Access

Add the IP address of the host that runs the scan to the export in `/etc/exports`. In local mode, that's the Access Analyzer Console server. In proxy mode, it's the proxy server. A read-only export is enough.

To let the scan read the folders as root, use `no_root_squash`:

```text
{share-path} {scanning-host-ip}(ro,sync,no_root_squash)
```

If you keep the default `root_squash`, the server maps the scan to the `nobody` user, so give "other" read and execute permission on the folders instead:

```bash
sudo chmod -R o+rX {share-path}
```

:::warning
Giving "other" read permission lets every local user on the Linux server read the folders. Review the change against your security policy.
:::

Apply the export changes:

```bash
sudo exportfs -ra
```

## Open the Firewall Ports

Open the ports listed in the Linux Target Requirements topic between the host that runs the scan and the Linux server. On RHEL with firewalld, add the services for the protocols to scan, then reload:

```bash
sudo firewall-cmd --permanent --add-service=samba
sudo firewall-cmd --permanent --add-service=rpc-bind --add-service=mountd --add-service=nfs
sudo firewall-cmd --reload
```

For an SMB/CIFS-only scan, add only `samba`. For an NFS-only scan, add only `rpc-bind`, `mountd`, and `nfs`.
