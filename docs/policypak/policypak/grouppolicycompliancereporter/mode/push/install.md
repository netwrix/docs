# Installation and Uninstallation

We recommend that installation of the GPCR Server Edition be on a server (Server 2008 R2 or higher). However, Endpoint Policy Manager GPCR in push mode doesn't need to be installed on a server at all, and could be installed on any machine (Windows 7 or higher). To start the installation, find the Endpoint Policy Manager GP Compliance Reporter (Server).msi file, as shown in Figure 36.

![gpcr_server_with_push_mode](/static/img/product_docs/policypak/policypak/grouppolicycompliancereporter/mode/push/gpcr_server_with_push_mode.png)

Figure 36. GPCR server MSI.

__Step 1 –__ To install Endpoint Policy Manager GP Compliance Reporter, click on the MSI file and start the wizard (Figure 37).

![gpcr_server_with_push_mode_1](/static/img/product_docs/policypak/policypak/grouppolicycompliancereporter/mode/push/gpcr_server_with_push_mode_1.png)

Figure 37. The Endpoint Policy Manager Group Policy Compliance Reporter Server Setup Wizard.

__Step 2 –__ Next, choose the domain group that will have rights to the Endpoint Policy Manager GPCR server as shown in Figure 38.

__NOTE:__  To see a video on Compliance Reporter and specific group membership requirements, see the following link: [Enhanced Security for Server](/docs/product_docs/policypak/policypak/video/gpocompilancereporter/securityenhanced.md).

![gpcr_server_with_push_mode_2](/static/img/product_docs/policypak/policypak/grouppolicycompliancereporter/mode/push/gpcr_server_with_push_mode_2.png)

Figure 38. Choosing the domain group that will have access to the GPCR server.

__Step 3 –__ Then select which type of database you want to use (see Figure 39). You can choose Microsoft SQL Server Compact if you only expect a small amount of data for processing and testing. However, in most cases, Microsoft SQL Server is recommended.

![gpcr_server_with_push_mode_3](/static/img/product_docs/policypak/policypak/grouppolicycompliancereporter/mode/push/gpcr_server_with_push_mode_3.png)

Figure 39. Selecting the type of database.

__Step 4 –__ Once the installation process is complete, close the wizard.

__NOTE:__ If you need to uninstall Endpoint Policy Manager GPCR Server, use Add/Remove Programs and uninstall Endpoint Policy Manager. Then, remove

```C:\ProgramData\PolicyPak\PolicyPak Group Policy Compliance Reporter Server``` and all subfolders. Additionally, remove the Endpoint Policy Manager Group Policy Compliance Reporter (endpoint) license from the Group Policy Object (GPO).
