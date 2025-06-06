# Denying DLLs within Applications

You can deny DLLs within Applications, like PowerShell’s internal DLLs, which make it operate.

First you must turn on the option with a Global DLL policy, which may only be enabled on the __Computer Configuration__ side.

![A screenshot of a computer

Description automatically generated](/static/img/product_docs/policypak/policypak/leastprivilege/deny/denying_dlls_within_applications.png)

Then create a matching rule with __New DLL Policy__.

![A screenshot of a computer

Description automatically generated](/static/img/product_docs/policypak/policypak/leastprivilege/deny/denying_dlls_within_applications_1.png)

Then you can __Deny execution__ of the DLL when it is encountered.

__NOTE:__ Some additional details and examples can be found in the [How to Defend against malicious PowerShell attacks (DLLs)?](/docs/product_docs/policypak/policypak/leastprivilege/powershell/maliciousattacks.md) topic.
