# Exporting Collections

[Using Endpoint Policy Manager with MDM and UEM Tools](/docs/product_docs/policypak/policypak/mdm/uemtools.md) explains how to use the Endpoint Policy Manager Exporter to wrap up any Endpoint Policy Manager directives and deliver them using Microsoft Endpoint Manager (SCCM and Intune), KACE, you own MDM service, or Endpoint Policy Manager Cloud. However, we recommend NOT using Endpoint Policy Manager File Associations Manager directives with Endpoint Policy Manager Cloud or an MDM service. This is because Endpoint Policy Manager File Associations Manager directives cannot work with non-domain-joined machines. Regardless, all Endpoint Policy Manager Cloud customers are licensed for Endpoint Policy Manager File Associations Manager, so if you decide to use Endpoint Policy Manager Cloud with some domain-joined machines, Endpoint Policy Manager File Associations Manager will function as expected using Endpoint Policy Manager Cloud.

![using_item_level_targeting_8](/static/img/product_docs/policypak/policypak/remotedesktopprotocol/itemleveltargeting/using_item_level_targeting_8.png)

__NOTE:__ For a video demonstrating the use of Endpoint Policy Manager Cloud with domain-joined machines. See the [Endpoint Policy ManagerCloud and Endpoint Policy Manager OnPremise – Together using PPCloud Licenses](/docs/product_docs/policypak/policypak/video/cloud/integration/onpremise.md) topic for additional information.

To export a policy for later use with Endpoint Policy Manager Exporter or Endpoint Policy Manager Cloud, right-click the collection or the policy, and select __Export to XML__.

__NOTE:__ For a video showing how to export policies and how to use Endpoint Policy Manager Exporter.See the [Deploying Endpoint Policy Managerdirectives without Group Policy (Endpoint Policy Manager Exporter Utility)](/docs/product_docs/policypak/policypak/video/mdm/exporterutility.md) topic for additional information.

![using_item_level_targeting_9](/static/img/product_docs/policypak/policypak/fileassociations/itemleveltargeting/using_item_level_targeting_9.png)

![using_item_level_targeting_10](/static/img/product_docs/policypak/policypak/fileassociations/itemleveltargeting/using_item_level_targeting_10.png)

__NOTE:__ Exported collections or policies maintain any Item-Level Targeting set within them. If you've used items that represent Group Membership in Active Directory, then those items will only function when the machine is domain-joined.
