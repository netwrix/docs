---
title: "How to run WebEx Meeting as regular user when SecureRun is enabled"
description: "How to run WebEx Meeting as regular user when SecureRun is enabled"
sidebar_position: 50
---

# How to run WebEx Meeting as regular user when SecureRun is enabled

You need to create a new Least Privilege Manager policy on either the Computer or User side, and
then create the following Elevate and Allow policies. The steps below show you how to do this.

![575_1_image-20200826125733-1](/images/endpointpolicymanager/leastprivilege/securerun/575_1_image-20200826125733-1.webp)

**Step 1 –** Executable policy for `Webex.exe` Elevated by **Signature** and **File Info**.

**Step 2 –** Executable policy for `ATMGR.exe` Elevated by **Signature** and **File Info**.

**Step 3 –** Windows Installer policy for WebEx Desktop App (`WebExApp.msi`) Elevated by
**Signature** and **Product Info**.

**Step 4 –** Executable policy for `WebexAppLauncher.exe` Elevated by **Signature** and **File
Info**.

**Step 5 –** Executable policy for `CiscoWebExStart.exe` Allowed by **Signature** and **File Info**.

`WebEx.exe` and` WebExApp.msi` are files downloaded when joining or creating a meeting, and are
normally downloaded to `%UserProfile%\Downloads`.

`Atmgr.exe` can be found after successfully installing WebEx
under` %LocalAppData%\WebEx\WebEx\Meetings`

`WebexAppLauncher.exe`, and `CiscoWebExStart.exe` can both be found after successfully installing
WebEx under `%LocalAppData%\WebEx`

Alternatively, download the Guidance XMLs from
[https://portal.policypak.com/downloads/guidance,](https://portal.policypak.com/downloads/guidance)
then browse to the `…\Production-Guidance\PolicyPak Least Privilege Manager XMLs` folder after
extracting the contents of the downloaded zip, and import the
`WebEx Elevated by Signature and File Info.xml` for use in your environment.

## Troubleshooting:

### Method 1:

If WebEx is blocked after using these policy settings, please check in the Netwrix Endpoint Policy
Manager (formerly PolicyPak) Event log to see if `WebEx.exe` is being blocked by SecureRun due to
Publisher being unknown. If it is, you can edit the policy item for` WebEx.exe` and uncheck the
signature requirement to work around this issue.

![575_3_image-20200826125733-2](/images/endpointpolicymanager/leastprivilege/securerun/575_3_image-20200826125733-2.webp)

![575_5_image-20200826125733-3](/images/endpointpolicymanager/leastprivilege/securerun/575_5_image-20200826125733-3.webp)

### Method 2:

Export the intermediate certificate from the `Webex.exe` file.

**Step 1 –** Right-click `Webex.exe` file and open Properties

**Step 2 –** Select the Digital Signature tab and click **Details**.

![575_7_01_321x213](/images/endpointpolicymanager/leastprivilege/securerun/575_7_01_321x213.webp)

**Step 3 –** Click **View Certificate**.

![575_8_02_323x239](/images/endpointpolicymanager/leastprivilege/securerun/575_8_02_323x239.webp)

**Step 4 –** Click the **Certification Path** tab and select the second certificate from the chain.
Click **View Certificate**.

![575_9_03_319x130](/images/endpointpolicymanager/leastprivilege/securerun/575_9_03_319x130.webp)

**Step 5 –** Click on the **Details** tab and select **Copy to File**.

![575_10_04_243x307](/images/endpointpolicymanager/leastprivilege/securerun/575_10_04_243x307.webp)

**Step 6 –** Click **Next** on the Export Certificate Wizard and select DER encoded binary X.509
(.CER) format.

**Step 7 –** Finish the export and save the cert file somewhere easily accessible for the next
steps.

:::note
You can also use Endpoint Policy Manager Remote Work Delivery Manager to deliver the
certificate file at the desired location of the remote computer. For more information on this issue,
please see  Remote Work Delivery Manager > [Knowledge Base](/docs/endpointpolicymanager/)
:::


Use Endpoint Policy Manager Scripts Manager to deliver the Certificate in Intermediate Certification
Authorities for a Computer.

:::note
This script must be set up at the Computer Configuration level to work.
:::


**Step 1 –** Create a new Endpoint Policy Manager Scripts Manager GPO and use the following
PowerShell command:

```
#Path variable can be any location that you want. $pathIntermediateCertificate = 
'C:\Temp\Intermediate.cer'$certificateStore = New-Object -TypeName 
System.Security.Cryptography.X509Certificates.X509Store -ArgumentList CA,
LocalMachine$certificateStore.Open('ReadWrite')$certificateStore.Add($pathIntermediateCertificate)$certificateStore.Close()
```

**Step 2 –** Wait for the policy refresh and you should see the certificate in the Intermediate
Certification Authorities folder

![575_11_05_549x169](/images/endpointpolicymanager/leastprivilege/securerun/575_11_05_549x169.webp)


