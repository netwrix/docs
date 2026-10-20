---
description: >-
  Learn how to install the Netwrix Endpoint Protector client silently from the
  command line without user interaction or a system restart.
keywords:
  - endpoint protector
  - Netwrix Endpoint Protector
  - silent install
  - msiexec
  - MSI
  - client installation
  - /qn
  - /norestart
products:
  - endpointprotector
sidebar_label: How to Install Client Without User Interaction
tags:
  - deployment-and-installation
  - kb
title: "How to Install Client Without User Interaction"
knowledge_article_id: kA0Qk0000002Ay3KAE
---

# How to Install Client Without User Interaction

## Question
Can you install the Netwrix Endpoint Protector client, without user interaction?

## Answer
Yes, you can install the Netwrix Endpoint Protector client via the command line interface with administrative privileges. This method installs the client without user interaction and does not require a system restart.

For the full reference, see [Agent Installation](/docs/endpointprotector/admin/agent#agent-installation) and [Agent Install Parameters](/docs/endpointprotector/admin/agent#agent-install-parameters) in the Agent documentation. For the full list of MSI properties (server address, department code, proxy settings, and more) and GPO deployment steps, see [How to Deploy the Windows Endpoint Protector Agent](/docs/kb/endpointprotector/deployment-and-installation/how-to-deploy-the-windows-endpoint-protector-agent).

Run the following command:

```batch
msiexec /i "C:\Users\eppuser1\Desktop\EPP Client\EPPClientSetup.6.2.4.2000_x86_64_[a=192.168.43.115].msi" /norestart /qn /l*v "C:\EPP_inst.log"
```

- ` /qn` performs a silent installation.
- ` /norestart` prevents a computer restart after installation is complete.
- ` /l*v "C:\EPP_inst.log"` writes a verbose installation log to the specified path — useful for troubleshooting a failed silent install.

:::tip
To customize the installation (server address, department code, proxy settings, and more), add the relevant MSI properties to the command. See the Appendix in [How to Deploy the Windows Endpoint Protector Agent](/docs/kb/endpointprotector/deployment-and-installation/how-to-deploy-the-windows-endpoint-protector-agent) for the full property list.
:::
