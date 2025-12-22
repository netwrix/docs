---
title: "Policy Templates: FIM File Integrity"
description: "Policy Templates: FIM File Integrity"
sidebar_position: 30
---

# Policy Templates: FIM File Integrity

File System Integrity Monitoring is crucial for security and most Security Policies/Standards e.g.
PCI DSS, mandate use of this control. Netwrix Change Tracker will monitor and alert on any file or
folder change – a new file appearing, such as a Trojan being added to the System 32 folder, or an
application hack/modification will be detected and alerted.

![ConfigTemplatesFIMFiles](/images/changetracker/8.0/admin/settings/policytemplates/configtemplatesfimfiles.webp)

- **Polling Frequency** – The default setting is to run a full poll (effectively a new baseline
  operation) only when the Agent has been restarted e.g. after a reboot but the Agent may be run in
  a ‘polling-only’ mode. This disables live tracking (the **Tracking Style** attribute for the
  Tracker should be set to _Polling_) and means that the only change detection is performed when the
  scheduled poll is run. While this loses the benefits of real-time change detection, it can be
  desirable in sensitive environments where server resource loads need to be minimized under all
  conditions.
- **Define Path** – Click **+ Add a Tracked Folder** to add a new folder/path to be tracked. Change
  Tracker provides a range of tokens (conceptually similar to the Windows Environment Variables) so
  that template definitions can be universally applied even if the OS Installation volumes used are
  different, e.g. OS installed onto D: rather than C:

    `%SYSDIR% = \Windows\System32`

    `%WINDIR%\SysWOW64 = \Windows\SysWOW64`

    `%PROGRAMFILES% = \Program Files`

    `%PROGRAMFILES(x86)% = \Program Files (x86)`

- Tracking Specification:

    - **Tracked Folder – File Hashing** – Selects the Cryptographic Hash Algorithm used to record a
      DNA Fingerprint for each file – this option will record a secure hash value for the files
      being tracked and use this as a definitive metric for file integrity.
    - **File/Folder Name Matching** – **System files recursive** will limit tracking to \*.exe,
      \*.dll, \*.sys, \*.drv files for this folder and any sub-folders. **All files** will track all
      files with or without an extension.
    - **Tracking Style** – See point 1 regarding Poll Period, options are tracking only, polling and
      tracking or poll only.
    - **Tracked Attributes** – Options are:

        - **File Attributes** – Excluding contents only

            :::note
            Contents tracking is defined under the **File Contents** tab
            :::


        - **Folder/Directory Attributes** – Only or All File and Folder Attributes. Default is to
          use File Attributes only as tracking changes at the Folder level in Windows may sometimes
          give spurious events due to the way in which the Windows file system behaves.

    - **File Hashing** – Selects the Cryptographic Hash Algorithm used to record a ‘DNA Fingerprint’
      for each file – this option will record a secure hash value for the files being tracked as a
      definitive metric for file integrity. Options are:

        - None
        - MD5
        - SHA1
        - SHA256
        - SHA384
        - SHA512.

In fact, all significant attributes for each file are tracked and any change to any attribute will
be detected. The secure hash checksum provides a **DNA Fingerprint** of a file, such that, in the
case of a Trojan, even if the Trojan file is made to look identical to a legitimate system file, it
will still be identified as being a changed file.

Exclusions are configured in a similar manner to the inclusive tracking above.

:::note
For Advanced Options: see
[File and Folder Match Filters](/docs/changetracker/8.0/admin/matchrules/filefolderrules.md)
for more information.

:::
