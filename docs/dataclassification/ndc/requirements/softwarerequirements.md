# Software Requirements

The table below lists the software requirements for Netwrix Data Classification installation:

| Component | Requirements |
| --- | --- |
| Operating system | Windows 2012 R2 and above Server Operating System Software. |
| Windows Features |  |  |  |  | --- | --- |  | Features |  |  | .NET Framework  Features | - .NET Framework 4.7.2 - ASP.NET |  | WCF Services | - HTTP Activation - Named Pipe Activation   __NOTE:__ To activate these features, select them under __.Net Framework Advanced Services__ - __WCF Services__ from __Windows Features__. |  |  |  |  | --- | --- |  | Web Server Role (IIS) |  |  | Common HTTP Features | - Default Document - HTTP Errors - Static Content - HTTP Redirection |  | Security | - Windows Authentication - Anonymous Authentication  __NOTE:__ The Anonymous Authentication element is included in the default installation of IIS 7. Make sure you use IIS 7 and above. |  | Application  Development | - ISAPI Extensions - ISAPI Filters |  |
| SQL Server | - [SQL Server 2008 R2 Standard Edition](https://www.microsoft.com/en-us/download/details.aspx?id=26113) (or later). - SQL Server 2016 SP2 recommended (for better performance).   __NOTE:__ For large environments, SQL Server Enterprise edition may be needed; see needed. See [Deployment Planning](/docs/product_docs/dataclassification/ndc/install/deployment/overview.md). |
| Visual Studio | - [Visual C++ Redistributable Packages for Visual Studio 2015](https://www.microsoft.com/en-us/download/details.aspx?id=48145) and above. |
| Other software |  |
| --- | --- |
| Antivirus | Netwrix recommends adding NDC Index files to the list of exclusions (white list) of any installed antivirus. These files have _.CSE_ extension. |
