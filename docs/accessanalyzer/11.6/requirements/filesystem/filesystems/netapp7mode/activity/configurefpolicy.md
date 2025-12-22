---
title: "Configure FPolicy"
description: "Configure FPolicy"
sidebar_position: 30
---

# Configure FPolicy

Select a method to configure the FPolicy for NetApp Data ONTAP 7-Mode devices:

**:::info**

[Manually Configure FPolicy (Recommended Option)](#manually-configure-fpolicy-recommended-option) –
A tailored FPolicy
:::


- If using vFilers the FPolicy must be created on the vFiler, and the Activity Monitor must target
  the vFiler. This is because FPolicy operates on the affected vFiler. Therefore, when executing
  these commands on a vFiler, the commands must be run from a vFiler context (e.g. via the vFiler
  run command).
- Allow the Activity Monitor to create an FPolicy automatically. See the
  [Automatic Configuration of FPolicy](#automatic-configuration-of-fpolicy) topic for additional
  information.

    - This option is enabled when the Activity Monitor Activity Agent is configured to monitor the
      NetApp device on the NetApp FPolicy Configuration page of the Add New Hosts window.
    - It monitors all file system activity.

## Manually Configure FPolicy (Recommended Option)

This section describes how to manually configure FPolicy. Manual configuration of the FPolicy is
recommended so that the policy can be scoped. It is necessary to create six FPolicy components and
then enable the FPolicy. See the sections corresponding to each part of this list:

- [Part 1: Create FPolicy](#part-1-create-fpolicy)
- [Part 2: Set FPolicy Required to Off](#part-2-set-fpolicy-required-to-off)
- [Part 3: Set FPolicy to Collect Permission Changes](#part-3-set-fpolicy-to-collect-permission-changes)
- [Part 4: Set FPolicy to Monitor Alternate Data Streams](#part-4-set-fpolicy-to-monitor-alternate-data-streams)
- [Part 5: Set FPolicy to Monitor Disconnected Sessions](#part-5-set-fpolicy-to-monitor-disconnected-sessions)
- [Part 6: Scope FPolicy for Specific Volumes](#part-6-scope-fpolicy-for-specific-volumes)
- [Part 7: Enable FPolicy](#part-7-enable-fpolicy)

If using vFilers the FPolicy must be created on the vFiler, and the Activity Monitor must target the
vFiler. This is because FPolicy operates on the affected vFiler. Therefore, when executing these
commands on a vFiler, the commands must be run from a vFiler context (e.g. via the vFiler run
command).

Relevant NetApp Documentation: To learn more about configuring file policies, please visit the
NetApp website and read
[na_fpolicy – configure file policies](https://library.netapp.com/ecmdocs/ECMP1196890/html/man1/na_fpolicy.1.html)
article.

### Part 1: Create FPolicy

Create the FPolicy on the vFiler.

IMPORTANT:

- The policy should be named "StealthAUDIT"
- The only supported policy type is "screen" for file screening.

Use the following command to create the FPolicy:

```
fpolicy create StealthAUDIT screen
```

### Part 2: Set FPolicy Required to Off

If the `FPolicy Required` value is set to on, user requests are denied if an FPolicy server is not
available to implement the policy. If it is set to off, user requests are allowed when it is not
possible to apply the policy to the file because no FPolicy server is available.

IMPORTANT:

- The `FPolicy Required` value should be set to **off**

Use the following command to set the `FPolicy Required` value to off:

```
fpolicy options StealthAUDIT required off
```

### Part 3: Set FPolicy to Collect Permission Changes

The cifs_setattr value must be set to on in order for CIFS requests to change file security
descriptors to be screened by the policy.

IMPORTANT:

- The `cifs_setattr` value must be set to **on**

Use the following command to enable the FPolicy to collect permission changes:

```
fpolicy options StealthAUDIT cifs_setattr on
```

### Part 4: Set FPolicy to Monitor Alternate Data Streams

The monitor_ads value must be set to on in order for CIFS requests for alternate data streams (ADS)
to be monitored by the policy.

IMPORTANT:

- The `monitor_ads` value must be set to **on**

Use the following command to enable the FPolicy to monitor ADS:

```
fpolicy options StealthAUDIT monitor_ads on
```

### Part 5: Set FPolicy to Monitor Disconnected Sessions

The cifs_disconnect_check value must be set to on in order for CIFS requests associated with
disconnected sessions to be monitored by the policy.

IMPORTANT:

- The `cifs_disconnect_check` value must be set to **on**

Use the following command to enable the FPolicy to monitor disconnected sessions:

```
fpolicy options StealthAUDIT cifs_disconnect_check on
```

### Part 6: Scope FPolicy for Specific Volumes

The FPolicy can be scoped either to monitor only specified volumes (inclusion) or to not monitor
specific volumes (exclusion).

IMPORTANT:

- Choose to scope by including or excluding volumes

Use the following command to scope the FPolicy by volume:

```
fpolicy ‑volume [INCLUDE OR EXCLUSION] ‑add StealthAUDIT [VOLUME_NAME],[VOLUME_NAME]
```

Inclusion Example:

```
fpolicy ‑volume include ‑add StealthAUDIT samplevolume1,samplevolume2
```

Exclusion Example:

```
fpolicy ‑volume exclusion ‑add StealthAUDIT samplevolume1,samplevolume2
```

### Part 7: Enable FPolicy

The FPolicy must be enabled before the Activity Monitor Activity Agent can be configured to monitor
the NetApp device.

IMPORTANT:

- The Activity Monitor must register with the NetApp device as an FPolicy server. By default, it
  looks for a policy named `StealthAUDIT`. See the
  [Customize FPolicy Policy Name](/docs/accessanalyzer/11.6/requirements/filesystem/filesystems/netapp7mode/activity/customizefpolicy.md)
  section for information on using a different policy name.

Use the following command to enable the FPolicy to monitor disconnected sessions:

```
fpolicy enable StealthAUDIT
```

## Automatic Configuration of FPolicy

The Activity Monitor can automatically configure FPolicy on the targeted NetApp Data ONTAP 7-Mode
device. The FPolicy created monitors all file system activity. This is done when the NetApp device
is assigned to the agent for monitoring. This option is enabled on the NetApp FPolicy Configuration
page of the Add New Host window.
