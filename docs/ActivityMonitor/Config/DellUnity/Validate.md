# Validate Setup

Once the Activity Monitor agent is configured to monitor the Dell device, the automated configuration must be validated to ensure events are being monitored.

## Validate CEE Registry Key Settings

__NOTE:__ See the [Configure Dell Registry Key Settings](/docs/product_docs/activitymonitor/config/dellcelerravnx/installcee.md#Configure-Dell-Registry-Key-Settings) topic for information on manually setting the registry key.

After the Activity Monitor activity agent has been configured to monitor the Dell device, it will configure the Dell CEE automatically if it is installed on the same server as the agent. This needs to be set manually in the rare situations where it is necessary for the Dell CEE to be installed on a different server than the Windows proxy server(s) where the Activity Monitor activity agent is deployed.

If the monitoring agent is not registering events, validate that the EndPoint is accurately set. Open the Registry Editor (run regedit). For the synchronous real-time delivery mode (AUDIT), use the following steps.

__Step 1 –__ Navigate to the following windows registry key:

HKEY\_LOCAL\_MACHINE\SOFTWARE\EMC\CEE\CEPP\Audit\Configuration

![registryeditorendpoint](/static/img/product_docs/activitymonitor/config/dellunity/registryeditorendpoint.png)

__Step 2 –__ Ensure that the Enabled parameter is set to 1.

__Step 3 –__ Ensure that the EndPoint parameter contains an address string for the Activity Monitor agent in the following formats:

- For the RPC protocol, ```StealthAUDIT@'ip-address-of-the-agent'```

- For the HTTP protocol,``` StealthAUDIT@http://'ip-address-of-the-agent':'port'```

__NOTE:__ All protocol strings are case sensitive. The EndPoint parameter may also contain values for other applications, separated with semicolons.

__Step 4 –__ If you changed any of the settings, restart the CEE Monitor service.

For Asynchronous Bulk Delivery Mode

For the asynchronous bulk delivery mode with a cadence based on a time period or a number of events (VCAPS), use the following steps.

__Step 1 –__ Navigate to the following windows registry key:

HKEY\_LOCAL\_MACHINE\SOFTWARE\EMC\CEE\CEPP\VCAPS\Configuration

__Step 2 –__ Ensure that the Enabled parameter is set to 1.

__Step 3 –__ Ensure that the EndPoint parameter contains an address string for the Activity Monitor agent in the following formats:

- For the RPC protocol, ```StealthVCAPS@'ip-address-of-the-agent'```
- For the HTTP protocol, ```StealthVCAPS@http://'ip-address-of-the-agent':'port'```

__NOTE:__ All protocol strings are case sensitive. The EndPoint parameter may also contain values for other applications, separated with semicolons.

__Step 4 –__ Ensure that the FeedInterval parameter is set to a value between 60 and 600; the MaxEventsPerFeed - between 10 and 10000.

__Step 5 –__ If you changed any of the settings, restart the CEE Monitor service.

Set the following values under the Data column:

- Enabled – 1
- EndPoint – StealthAUDIT

If this is configured correctly, validate that the Dell CEE services are running. See the [Validate Dell CEE Services are Running](#Validate-Dell-CEE-Services-are-Running) topic for additional information.

## Validate Dell CEE Services are Running

After the Activity Monitor Activity Agent has been configured to monitor the Dell device, the Dell CEE services should be running. If the Activity Agent is not registering events and the EndPoint is set accurately, validate that the Dell CEE services are running. Open the Services (run ```services.msc```).

![services](/static/img/product_docs/activitymonitor/config/dellpowerstore/services.png)

The following services laid down by the Dell CEE installer should have Running as their status:

- Dell CAVA
- Dell CEE Monitor

## CEE Debug Logs

If an issue arises with communication between the Dell CEE and the Activity Monitor, the debug logs need to be enabled for troubleshooting purposes. Follow the steps.

__Step 6 –__ In the Activity Monitor Console, change the __Trace level__ value in the lower right corner to Trace.

__Step 7 –__ In the Activity Monitor Console, select all Dell hosts from the Monitored Hosts list and Disable monitoring.

__Step 8 –__ Download and install the Debug View tool from Microsoft on the CEE server:

> [http://docs.microsoft.com/en-us/sysinternals/downloads/debugview](http://docs.microsoft.com/en-us/sysinternals/downloads/debugview)

__Step 9 –__ Open the Registry Editor (run regedit). Navigate to following location:

HKEY\_LOCAL\_MACHINE\SOFTWARE\EMC\CEE\Configuration

__Step 10 –__ Right-click on __Debug__ and select Modify. The Edit DWORD Value window opens. In the Value data field, enter the value of 3F. Click OK, and the Edit DWORD Value window closes.

__NOTE:__ If the Debug DWORD Value does not exist, it needs to be added.

__Step 11 –__ Right-click on __Verbose__ and select Modify. The Edit DWORD Value window opens. In the Value data field, enter the value of 3F. Click OK, and the Edit DWORD Value window closes.

__NOTE:__ If the Verbose DWORD Value does not exist, it needs to be added.

__Step 12 –__ Run the Debug View tool (from Microsoft). In the Capture menu, select the following:

- Capture Win32
- Capture Global Win32
- Capture Events

__Step 13 –__ In the Activity Monitor Console, select all Dell hosts from the Monitored Hosts list and Enable monitoring.

__Step 14 –__ Generate some file activity on the Dell device. Save the Debug View Log to a file.

__Step 15 –__ Send the following logs to [Netwrix Support](https://www.netwrix.com/support.html):

- Debug View Log (from Dell Debug View tool)
- Use the __Collect Logs__ button to collect debug logs from the activity agent

___RECOMMENDED:___ After the logs have been gathered and sent to Netwrix Support, reset these configurations.
