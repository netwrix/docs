---
title: "Secure the Threat Manager Console"
description: "Secure the Threat Manager Console"
sidebar_position: 40
---

# Secure the Threat Manager Console

To support HTTPS, do the following:

- Import an SSL certificate to the server

- Configure the Netwrix Threat Manager Web Service and the Netwrix Threat Manager Active Directory
  Service with a certificate thumbprint and a new port value

## Locate and Import the SSL Server Certificate

Complete the steps to create or obtain a certificate and import it.

**Step 1 –**  Create or obtain an SSL Server certificate for the Netwrix Threat Manager server and
import it into the Windows Certificate LocalMachine Personal store on the Netwrix Threat Manager
server machine.

:::warning
Be very careful with the encoding of the thumbprint especially when copy/pasting the
thumbprint from certmgr.msc. This can often cause encoding issues so ensure ANSI encoding when
editing the configuration files discussed in this topic.
:::


**Step 2 –**   Copy the thumbprint of the certificate as you will need to utilize it while editing
the configuration files.

## Web Service Configuration File

Follow the steps to configure the Web Service Configuration file.

**Step 1 –**   Open the Web Service configuration file on the Netwrix Threat Manager server.

**C:\Program Files\STEALTHbits\StealthDEFEND\WebService\appsettings.json**

**Step 2 –**   Append the **WebService** and **ADService** sections to the end of the file. Remember
to add a trailing comma after the `“EncryptRecording”:false` line.

```
{
    "Jwt":  {
                "CertificateFile":  "C:\\ProgramData\\Stealthbits\\StealthDEFEND\\WebService\\jwtsign.pfx",
                "CertificatePassword":  "CertificatePassword",
                "CertificateThumbprint":  "",
                "Version":  2
            },
    "DataDirectory":  null,
    "EncryptRecording":  false,
    "WebService":  {
                       "Port":  8080,
                       "Certificate":  "CertificateThumbprint",
                       "RestApiUri":  "https://ThreatManagerServer.Domain.com:8080"
                   },
     "ADService":  {
                   "Host": "localhost",
                   "Scheme": "https",
                   "Port": "55556"
                   } 
}
```

:::warning
Do not modify the Jwt section of the appsettings.json file.
:::


**Step 3 –**   In the WebService and ADService sections, ports are set to 8080 and 55556
respectively. Make sure these ports are available on your machine.

**Step 4 –**   Set the **Certificate** value to the value of the certification thumbprint you
imported previously.

**Step 5 –**   Set the **RestApiUri** value to the URL used to access the application (e.g.,
https://ThreatManagerServer.Domain.com:8080).

**Step 6 –**   Save the configuration file.

**Step 7 –**   Restart the Web Service.

**Step 8 –**   Check the Web Service Log File to ensure the Cert was found and loaded properly. You
should see a log file with the output:

```
Found cert with subject % and thumbprint 12345ABCDEF54AED1DB59C349CA4D514628DB4D3
```

## Active Directory Service Configuration File

Follow the steps to configure the Active Directory Service Configuration file.

**Step 1 –**   Open the Active Directory Service configuration file on the Netwrix Threat Manager
server:

**C:\Program Files\STEALTHbits\StealthDEFEND\ActiveDirectoryService\appsettings.json**

**Step 2 –**   Append the **WebService** section to the end of the file. Remember to add a trailing
comma after the `“EncryptRecording”:false` line in the file.

```
{
    "Jwt":  {
                "CertificateFile":  "C:\\ProgramData\\Stealthbits\\StealthDEFEND\\WebService\\jwtsign.pfx",
                "CertificatePassword":  "CertificatePassword",
                "CertificateThumbprint":  "",
                "Version":  2
            },
    "DataDirectory":  null,
    "EncryptRecording":  false,
    "WebService":  {
                   "Port":  55556,
                   "Certificate":  "CertificateThumbprint"
                   }
}
```

:::warning
Do not modify the Jwt section of the appsettings.json file.
:::


**Step 3 –**   In the WebService section, the port is set to 55556. Make sure it is available on
your machine.

**Step 4 –**   Set the certificate value to that of the certification thumbprint you imported
previously.

**Step 5 –**   Save the configuration file.

**Step 6 –**   Restart the Active Directory Service.

**Step 7 –**   Check the Active Directory Service Log File to ensure the Cert was found and loaded
properly. You should see a log file with the output:

```
Found cert with subject % and thumbprint 12345ABCDEF54AED1DB59C349CA4D514628DB4D3
```

## Re-register the Action Service

While not always necessary it is a good practice to also re-register the Action Service whenever
changing the certificate in use.

**Step 1 –** Open an administrative command prompt.

**Step 2 –** Run the following command to launch a wizard that prompts for parameters required to
configure the Action Service:

```
<StealthDEFENDDirectory>\ActionService\ActionService.exe --config
```

**Step 3 –** Enter the following information in the wizard:

- URL or Server – The web address for the Threat Manager console (e.g.,
  https://ThreatManagerServer.Domain.com:8080).

    :::note
    Include http:// or https:// if configured and web port if not using 80 or 443
    :::


- User Name – Specify the user name to connect to the Threat Manager console. It is recommended to
  use the Admin account for the user name.
- Threat Manager Password – The password to the user name specified
- Ignore certificate errors – It is recommended to set to True if using a self-signed certificate
  for SSL or if other issues with the web certificate are experienced.

**Step 4 –** The utility will output "Success!" if the Action Service registered correctly. Verify
that the Action Service successfully registered by navigating to the System Health page of the
Threat Manager console.

**Step 5 –** Exit the command prompt.

The Action Service is now re-registered with Threat Manager.
