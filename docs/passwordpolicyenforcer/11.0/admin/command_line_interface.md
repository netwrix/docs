---
title: "Command Line Interface"
description: "Command Line Interface"
sidebar_position: 70
---

# Command Line Interface

## Silent Installation

Replace _version_ with the complete version and build number of the **msi** file. For example,
11.0.0.74.

Install only PPE Server: msiexec /i Netwrix_PPE_Server**version**x64.msi ADDLOCAL=FeatureServerPPE
/q

Install only Console: msiexec /i Netwrix_PPE_Server**version**x64.msi ADDLOCAL=FeatureConsole /q

Install only Mailer Server: msiexec /i Netwrix_PPE_Server**version**x64.msi
ADDLOCAL=FeaturePPEMailerServer /q

Install all 3 components:

msiexec /i Netwrix_PPE_Server**version**x64.msi
ADDLOCAL=FeaturePPEMailerServer,FeatureConsole,FeatureServerPPE /q

By default Console only installed: msiexec /i Netwrix_PPE_Server**version**x64.msi /q

Uninstall all: msiexec /uninstall Netwrix_PPE_Server**version**x64.msi /q

Uninstall only particular feature: msiexec /i _path_to_your_msi_file.msi_ REMOVE=_FeatureName_ /qn

If a reboot was not done, add **/forcerestart** at the end

## Mailer

You can run the Password Policy Enforcer Mailer from the command line to deliver email immediately,
or to troubleshoot problems. PPEMail.exe is copied into the \Program Files (x86)

\Password Policy Enforcer\ folder when the Password Policy Enforcer Mailer is installed.

PPEMail.exe starts a simulation when run without any parameters. It finds users whose password will
expire soon, but no email is sent or saved to the pickup folder. Use the simulation mode to find
common configuration errors that may stop the Password Policy Enforcer Mailer from delivering email.

Running PPEMail.exe with the /send parameter disables simulation mode. Any emails that are due to be
sent today are sent immediately. PPEMail.exe can identify a wider range of configuration errors when
run in this mode. Use the /send parameter judiciously to avoid sending duplicate emails to users.

To test email delivery options without sending any emails to users, run PPEMail.exe with the /test
parameter followed by your email address. For example, PPEMail.exe /test johnsmith@netwrix.com. This
will send one test email to your mail server or pickup folder.
