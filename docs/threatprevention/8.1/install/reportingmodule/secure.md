---
title: "Secure the Reporting Module Console"
description: "Secure the Reporting Module Console"
sidebar_position: 30
---

# Secure the Reporting Module Console

To support HTTPS, do the following:

- Import an SSL certificate to the Netwrix Threat Manager Reporting Module server
- Configure the StealthDEFEND Web Service and the StealthDEFEND Active Directory Service with a
  certificate thumbprint and a new port value

## Locate and Import the SSL Server Certificate

Complete the steps to create or obtain a certificate and import it.

**Step 1 –**  Create or obtain an SSL Server certificate for the Netwrix Threat Manager Reporting
Module server and import it into the Windows Certificate LocalMachine Personal store on the Netwrix
Threat Manager Reporting Module server machine.

:::warning
Be very careful with the encoding of the thumbprint especially when copy/pasting the
thumbprint from certmgr.msc. This can often cause encoding issues so ensure ANSI encoding when
editing the configuration files discussed in this topic.
:::


**Step 2 –**   Copy the thumbprint of the certificate as you will need to utilize it while editing
the configuration files.

## Web Service Configuration File

Follow the steps to configure the Web Service Configuration file.

**Step 1 –**   Open the Web Service configuration file on the Netwrix Threat Manager Reporting
Module server.

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
https://ThreatManagerReportingModuleServer.Domain.com:8080).

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
Reporting Module server:

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

The Netwrix Threat Manager Reporting Module Console is now secure.
