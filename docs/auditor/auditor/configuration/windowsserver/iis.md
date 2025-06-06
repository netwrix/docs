# Internet Information Services (IIS)

To be able to process Internet Information Services (IIS) events, you must enable the Remote Registry service on the target computers. [Windows Server](/docs/product_docs/auditor/auditor/configuration/windowsserver/overview.md)

To configure the Operational log size and retention method

1. On the computer where IIS is installed, navigate to Start > Windows Administrative Tools → Event Viewer.
2. Navigate to Event Viewer tree → Applications and Services Logs → Microsoft → Windows and expand the IIS-Configuration node.
3. Right-click the Operational log and select Properties.

   ![manualconfig_iis2016](/static/img/product_docs/auditor/auditor/configuration/windowsserver/manualconfig_iis2016.png)
4. Make sure __Enable logging__ is enabled.
5. Set __Maximum log size__ to 4 GB.
6. Make sure __Do not overwrite events (Clear logs manually)__ is cleared. If selected, change the retention method to __Overwrite events as needed (oldest events first)__.
