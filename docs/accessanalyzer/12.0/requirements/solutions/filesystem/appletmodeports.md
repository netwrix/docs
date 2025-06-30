# Applet Mode Port Requirements

The following are the firewall settings are required when executing the Access Auditing (FSAA)
and/or Sensitive Data Discovery Auditing scans in applet mode for communication between Access
Analyzer and the host:

| Communication Direction                            | Protocol | Ports | Description                              |
| -------------------------------------------------- | -------- | ----- | ---------------------------------------- |
| Access Analyzer Console to Windows Server          | TCP      | 445   | SMB                                      |
| Between Access Analyzer Console and Windows Server | TCP      | 8767  | FSAA Applet Certificate Exchange         |
| Between Access Analyzer Console and Windows Server | TCP      | 8766  | FSAA Applet HTTPS communication security |

**NOTE:** The FSAA applet https requests configuration port 8766 and the FSAA Applet Certificate
Exchange port 8767 can be customized on the Applet Settings page of the File System Access Auditor
Data Collector Wizard.

**_RECOMMENDED:_** Configure target hosts to respond to ping requests.
