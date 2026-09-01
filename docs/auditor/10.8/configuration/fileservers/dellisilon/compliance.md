---
title: "Compliance Mode"
description: "Compliance Mode"
sidebar_position: 30
---

# Compliance Mode

You can configure your cluster for monitoring in one of the following ways:

- Using the **configure_ifs.sh** shell script that comes with Netwrix Auditor. See the Configure
  Dell Isilon/PowerScale Cluster in Compliance Mode Via Shell Script topic for additional
  information.
- Manual configuration. See the Configure Dell Isilon/PowerScale Cluster in Compliance Mode Manually
  topic for additional information.

## Configure Dell Isilon/PowerScale Cluster in Compliance Mode Via Shell Script

1. On the computer where Auditor Server resides, navigate to `C:\Program Files (x86)\Netwrix Auditor\File Server Auditing` and copy the `configure_ifs.sh` shell script to `/ifs/data` on your cluster.
2. Navigate to your cluster command prompt through the SSH connection.
3. Log in to your cluster as a **compadmin** user.
4. Run the shell script by executing the following command:

`sh /ifs/data/configure_ifs.sh -z zone1 -a 1`

Where:
- `zone1` is the name of the audited access zone on your file server.
- `1` is a combination of the bitwise flags. The table below shows the example combination of 4 flags:

|                          |      |
| ------------------------ | ---- |
| `Successful changes`     | `1`  |
| `Failed change attempts` | `2`  |
| `Successful reads`       | `4`  |
| `Failed read attempts`   | `8`  |
| `Total:`                 | `15` |

5. Create a shared folder named `netwrix_audit$` on a system zone. This folder points to `/ifs`:

`isi smb shares create --name=netwrix_audit$ --path=/ifs/ --zone=system --browsable=true`

6. Add the `BUILTIN\Administrators` group in the share permissions for `netwrix_audit$` folder with `full access` rights:

`isi smb shares permission create --share=netwrix_audit$ --group="BUILTIN\Administrators" --permission-type=allow --permission=full --zone=system`

7. Grant your data collection account `read access` rights to the `/ifs/.ifsvar/audit` catalog:

`isi zone modify system --add-user-mapping-rules="Enterprise\Administrator ++ compadmin [group]"`

Where `Enterprise\Administrator` is your account name.

## Configure Dell Isilon/PowerScale Cluster in Compliance Mode Manually

1. Navigate to your cluster command prompt through the SSH connection.
2. Log in to your cluster as a **compadmin** user.
3. Create a shared folder named `netwrix_audit$` on a system zone. This folder points to `/ifs`:

`isi smb shares create --name=netwrix_audit$ --path=/ifs/ --zone=system --browsable=true`

4. Add the `BUILTIN\Administrators` group in the share permissions for `netwrix_audit$` folder with `full access` rights:

`isi smb shares permission create --share=netwrix_audit$ --group="BUILTIN\Administrators" --permission-type=allow --permission=full --zone=system`

5. Grant your data collection account `read access` rights to the `/ifs/.ifsvar/audit` catalog:

`isi zone modify system --add-user-mapping-rules="Enterprise\Administrator ++ compadmin [group]"`

Where `Enterprise\Administrator` is your account name.

6. Enable protocol auditing for a selected zone (for example, `zone1`). Do one of the following, depending on your Dell Isilon/PowerScale version:

| EMC Isilon/PowerScale 7.x                                                                    | EMC Isilon/PowerScale 8.x                                                                           |
| -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `isi audit settings modify ` `--add-audited-zones=zone1 --protocol` `-auditing-enabled=true` | `isi audit settings global modify ` `--add-audited-zones=zone1 --protocol` `-auditing-enabled=true` |

Enable filters for auditing protocol operations that succeeded / failed for audited access zones on
your cluster.

| EMC Isilon/PowerScale 7.x                                                                   | EMC Isilon/PowerScale 8.2 and above                                                                         |
| ------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| Successful changes                                                                          |                                                                                                             |
| `isi zone zones modify ` `zone1 --audit-success` `=write,delete,set_security,rename`        | `isi audit settings modify ` `--zone=zone1 --audit-success` `=write,delete,set_security,rename, create`     |
| Failed change attempts                                                                      |                                                                                                             |
| `isi zone zones modify ` `zone1 --audit-failure` `=create,write,delete,set_security,rename` | `isi audit settings modify ` `--zone=zone1 --audit-failure` `=create,write,delete,set_security,rename,open` |
| Successful reads                                                                            |                                                                                                             |
| `isi zone zones modify ` `zone1 --audit-success=read`                                       | `isi audit settings modify --` `zone=zone1 --audit-success=read`                                            |
| Failed read attempts                                                                        |                                                                                                             |
| `isi zone zones modify ` `zone1 ` `--audit-failure= create,read`                            | `isi audit settings ` `modify --zone=zone1 ` `--audit-failure=create,read, open`                            |

7. Create the `netwrix_audit` role and add the required privileges to this role. For example:

```isi auth roles create --name=netwrix_audit

```

```isi auth roles modify netwrix_audit --add-priv-ro="ISI_PRIV_LOGIN_PAPI,ISI_PRIV_AUTH,ISI_PRIV_AUDIT,ISI_PRIV_IFS_BACKUP"

```

`isi auth roles modify netwrix_audit --add-group="BUILTIN\Administrators"`
