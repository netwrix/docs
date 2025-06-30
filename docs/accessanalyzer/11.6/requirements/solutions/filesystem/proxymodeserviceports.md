# Proxy Mode as a Service Port Requirements

The following are the firewall settings are required when executing the Access Auditing (FSAA)
and/or Sensitive Data Discovery Auditing scans in proxy mode as a service for communication between
Enterprise Auditor and the proxy server:

| Communication Direction                                     | Protocol | Ports | Description                              |
| ----------------------------------------------------------- | -------- | ----- | ---------------------------------------- |
| Between Enterprise Auditor Console and Windows Proxy Server | TCP      | 8766  | FSAA Applet HTTPS communication security |
| Between Enterprise Auditor Console and Windows Proxy Server | TCP      | 8767  | FSAA Applet Certificate Exchange         |

**NOTE:** The FSAA applet https requests configuration port 8766 and the FSAA Applet Certificate
Exchange port 8767 can be customized on the Applet Settings page of the File System Access Auditor
Data Collector Wizard.

The following are the firewall settings are required when executing the Access Auditing (FSAA)
and/or Sensitive Data Discovery Auditing scans in proxy mode as a service for communication between
the proxy server and the target host:

| Communication Direction                    | Protocol | Ports | Description |
| ------------------------------------------ | -------- | ----- | ----------- |
| Windows Proxy Server to File Server/Device | TCP      | 445   | SMB         |

#### Additional Firewall Rules for NetApp Data ONTAP Devices

_Remember,_ NetApp communication security is configured on the Scan Settings page of the File System
Access Auditor Data Collector Wizard. One additional firewall setting is required when targeting
either a NetApp Data ONTAP 7-Mode device or a NetApp Data ONTAP Cluster-mode device. The required
setting is dependent upon how the NetApp communication security option is configured:

| Communication Direction                     | Protocol | Ports | Description                         |
| ------------------------------------------- | -------- | ----- | ----------------------------------- |
| Enterprise Auditor Console to NetApp Device | TCP      | 80    | HTTP NetApp communication security  |
| Enterprise Auditor Console to NetApp Device | TCP      | 443   | HTTPS NetApp communication security |

#### Additional Consideration for Windows File Servers

The following firewall setting is also required when targeting a Windows file server:

| Communication Direction                      | Protocol | Ports | Description                |
| -------------------------------------------- | -------- | ----- | -------------------------- |
| Enterprise Auditor Console to Windows Server | TCP      | 135   | for pre-scan access checks |

**_RECOMMENDED:_** Configure target hosts to respond to ping requests.
