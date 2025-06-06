# Endpoint Policy Manager and MobileIron MDM

__NOTE:__ [Endpoint Policy Manager and MobileIron MDM](/docs/product_docs/policypak/policypak/video/mdm/mobileiron.md) for a video overview of Endpoint Policy Manager and MobileIron.

__Step 1 –__ To use MobileIron with Endpoint Policy Manager, go to the Apps section within MobileIron, and click In-House to add an application. Next, add the Endpoint Policy Manager CSE MSI file, Endpoint Policy Manager license MSI file, and the Endpoint Policy Manager settings MSI file.

![using_policypak_with_mdm_and_9](/static/img/product_docs/policypak/policypak/mdm/service/using_policypak_with_mdm_and_9.png)

__Step 2 –__ Once uploaded, click Next.

![using_policypak_with_mdm_and_10](/static/img/product_docs/policypak/policypak/mdm/service/using_policypak_with_mdm_and_10.png)

Sometimes MobileIron will ask you for the MSI product code of each MSI you upload. This is not a Endpoint Policy Manager problem but rather a MobileIron idiosyncrasy.

![using_policypak_with_mdm_and_11](/static/img/product_docs/policypak/policypak/mdm/service/using_policypak_with_mdm_and_11.png)

__Step 3 –__ To overcome this, Endpoint Policy Manager has provided a utility in the Endpoint Policy Manager download (in the Endpoint Policy Manager Extras folder) called Endpoint Policy Manager File Information Viewer, which you can use to quickly get this information.

![using_policypak_with_mdm_and_12](/static/img/product_docs/policypak/policypak/mdm/service/using_policypak_with_mdm_and_12.png)

__Step 4 –__ Once the Endpoint Policy Manager File Information Viewer is run, you can open an MSI (e.g., the Endpoint Policy Manager CSE MSI) and quickly output the MSI product code to copy. Once you have copied the product code, you can paste it into MobileIron.

![using_policypak_with_mdm_and_13](/static/img/product_docs/policypak/policypak/mdm/service/using_policypak_with_mdm_and_13.png)

![using_policypak_with_mdm_and_14](/static/img/product_docs/policypak/policypak/mdm/service/using_policypak_with_mdm_and_14.png)

Additionally, each MSI must be assigned to a category and a location must be selected for the installation.

![using_policypak_with_mdm_and_15](/static/img/product_docs/policypak/policypak/mdm/service/using_policypak_with_mdm_and_15.png)

__Step 5 –__ At this point, you must specify to install the application MSIs silently. That is done by clicking Install Application configuration settings.

![using_policypak_with_mdm_and_16](/static/img/product_docs/policypak/policypak/mdm/service/using_policypak_with_mdm_and_16.png)

__Step 6 –__ Once you've clicked on Install Application configuration settings, turn on the option Silently install on Windows devices.

![using_policypak_with_mdm_and_17](/static/img/product_docs/policypak/policypak/mdm/service/using_policypak_with_mdm_and_17.png)

__Step 7 –__ As a test, on an example client, perform your MDM enrollment to your MobileIron service.

![using_policypak_with_mdm_and_18](/static/img/product_docs/policypak/policypak/mdm/service/using_policypak_with_mdm_and_18.png)

Be sure the computer is MDM-joined and in the correct group (if any). If the MSIs do not download as expected, see [Troubleshooting](/docs/product_docs/policypak/policypak/troubleshooting/mdm/overview.md).
