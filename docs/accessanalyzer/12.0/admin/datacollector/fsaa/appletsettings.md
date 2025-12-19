---
title: "FSAA: Applet Settings"
description: "FSAA: Applet Settings"
sidebar_position: 30
---

# FSAA: Applet Settings

The Applet Settings page is where the Applet Launch Mechanism and Applet Settings are configured. It
is a wizard page for the categories of:

- File System Access/Permission Auditing Scan
- File System Activity Scan
- Sensitive Data Scan

:::note
This wizard page identifies options associated with the scan mode to be used. See the
[File System Scan Options](/docs/accessanalyzer/12.0/requirements/filesystem/scanoptions/scanoptions.md) topic for
additional information.
:::


![FSAA Data Collector Wizard Applet Settings page](/images/accessanalyzer/12.0/admin/datacollector/fsaa/appletsettings.webp)

In the Applet Launch Mechanism section, choose one of three radio buttons:

- MSTask Task Scheduler – Creates a scheduled task on the target host that runs the applet
- Windows Service – Automatically installs the FSAA Applet as a proxy service
    - The Applet service runs as a Connection Profile credential unless the Local System checkbox is
      selected in the Applet Settings options below. Then it runs the service in Local mode.
- Require applet to be running as a service on target (does not deploy or launch applet)
    - See the [File System Proxy Service Installation](/docs/accessanalyzer/12.0/install/filesystemproxy/wizard.md)
      topic for additional information.
    - It requires the `FSAAAppletServer.exe` to run as a service on the proxy host in order to run a
      successful scan. When this radio button is selected, Access Analyzer does not deploy an applet
      on the target or proxy machine. Therefore, if the File System Proxy service is not running,
      the FSAA scan will fail.
    - To avoid a failed scan when an applet cannot be deployed or the File System Proxy service is
      not running, the Applet Gathering Settings page contains the **Fallback to local mode if
      applet can’t start** option. This option allows the scan to run in local mode when an applet
      cannot be deployed or the service is not running.

![Applet Settings section of the Applet Settings page](/images/accessanalyzer/12.0/admin/datacollector/fsaa/appletsettingsappletsettings.webp)

In the Applet Settings section, configure the following options:

- Port number – Default port number is 8766
    - See
      [Custom Parameters for File System Proxy Service](/docs/accessanalyzer/12.0/install/filesystemproxy/wizard.md#custom-parameters-for-file-system-proxy-service)
      topic for additional information.
- Applet Log level – The type of log created on the target host. Checking the box to Enable Logging
  enables the Applet log level drop-down menu. The **Set To Default** button resets the log level to
  **Information**.
    - Debug – Most verbose logging method, records everything that happens while the applet is
      processing
    - Information – Records the steps the applet takes while processing as well as errors and
      warnings
    - Warning – Record when the applet encounters both errors and warnings while processing
    - Error – Least verbose logging method, only records when the applet encounters an error while
      processing
- Keep log files for last [number] scan(s) – Data retention period. The default is set to **15**.
- Run service as Local System (only applies to Windows Service)
    - When this checkbox is selected, the applet is deployed to run as a service on the target host.
      The credentials in the Connection Profile are used to deploy and run the service unless
      **System Default** is selected as the Connection Profile.
    - This option is active when the Windows Service radio button in the Applet Launch Mechanism
      section is selected
- Strong proxy affinity (only run scans on last proxy to scan host, unless no longer in proxy host
  list)
    - This is an optional setting when using proxy architecture
    - If this checkbox is selected and a host was previously scanned with a given proxy, it will
      only be rescanned with that same proxy. If that proxy is unreachable for any reason and no
      connection can be made, Access Analyzer will not try another proxy on the host list and will
      fail to scan that host. However, if that proxy is no longer on the host list, it will choose
      another proxy on the list and rescan.
    - If unchecked, proxy affinity is still considered, though rather than the scan failing if the
      proxy is unreachable, a new proxy will be chosen and will scan the host
    - If a host has not yet been scanned by a proxy server, the data collector should choose the
      least loaded proxy at that time. After that host has been scanned, it will follow the proxy
      affinity mapped out above.
- Maximum concurrent scans [number] – This option dictates a set limit to the number of simultaneous
  scans allowed to run on a proxy host regardless of max threads set on the job
    - For example, if there are two proxy servers with max concurrent scans set to ten per proxy and
      one proxy is offline, the remaining proxy should never exceed the value set in the query
      configuration for this option, even if the job is configured with 20 threads
- Strong proxy affinity timeout [number] minute(s) – This option determines the time a host waits,
  while the proxy server is busy, before it gets pushed into the job engine queue
- Applet communication timeout: [number] minute(s) – This option determines the length of time (in
  minutes) the Access Analyzer Console attempts to reach the proxy before giving up. Depending on
  the job configuration, the data collector behaves in one of three ways after the timeout value has
  been exceeded:
    - If a communication timeout is reached and the **Stop scan on applet communication timeout**
      option is unchecked, the scan continues running. When the proxy is available again, the data
      collector gets the database files on the next scan of that host. It will either bring the
      database files back, if the scan has finished, or display the current state of the scan in a
      **Running Job** node if it is still running.
    - If the communication timeout is reached and the **Stop scan on applet communication timeout**
      option is checked, the remote scan is either automatically suspended or canceled. If the
      **Restart incomplete scans after (0 always restarts) [number] days** option or the **Rescan
      unimported hosts after (0 always rescans) [number] days** option on the Applet Gathering
      Settings page are both set to zero or unchecked, the scan cancels.
    - If either of these options on the Applet Gathering Settings page are checked with values
      higher than zero, the scan is suspended after the communication timeout value has been
      exceeded
- Scan cancellation timeout: [number] minute(s) – When checked, this option will timeout the applet
  if there is an attempt to pause the scan and the applet does not respond

![Certificate Exchange Options section of the Applet Settings page](/images/accessanalyzer/12.0/admin/datacollector/fsaa/appletsettingscertificateexchangeoptions.webp)

In the Certificate Exchange Options section, configure the following options:

- Mechanism – Select one of the following options:

    - Automatic – Certificate exchange is handled automatically by the FSAA Data Collector. This is
      the default option.
    - Manual – The FSSA Data Collector and applet server expect all certificates to be valid and in
      their respective stores beforehand. See the
      [FSAA Manual Certificate Configuration](/docs/accessanalyzer/12.0/admin/datacollector/fsaa/certificatemanagement/manualcertificate.md) topic for additional
      information.

        :::note
        If the FSAA Data Collector and the applet server are on separate domains without a
        trust, this option must be used.
        :::


    - Provide Certificate Authority – Enables the **Select** button, which allows you to upload an
      existing certificate

- Port – Select the checkbox to specify the port number for certificate exchange. The Default port
  number is 8767.

See the [FSAA Applet Certificate Management Overview](/docs/accessanalyzer/12.0/admin/datacollector/fsaa/certificatemanagement/certificatemanagement.md) topic for additional
information.
