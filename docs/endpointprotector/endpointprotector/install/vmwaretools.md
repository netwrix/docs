# VMware

VMware Tools support a variety of formats such as OVF, OVA, and VMX for deploying the Endpoint
Protector Virtual Appliance. This section provides the necessary guidance to implement the solution
using different virtualization tools available within the VMware suite.

## Implement Using OVF Format

Leverage the OVF format to efficiently deploy your Endpoint Protector Virtual Appliance across
supported platforms.

### VMware vSphere

VMware vSphere allows you to deploy virtual appliances efficiently using the OVF format.

Follow the steps to set up your virtual machine.

**Step 1 –** Unzip the downloaded package.

**Step 2 –** Start vSphere.

![Using the VMware vShpere](../../../../static/img/product_docs/endpointprotector/endpointprotector/install/startvsphere.png)

**Step 3 –** Go to File and select **Deploy OVF Template**.

![Selecting Deploy OVF Template.](../../../../static/img/product_docs/endpointprotector/endpointprotector/install/ovftemplate.png)

**Step 4 –** Click **Browse**.

![Browsing the location of the tenplate](../../../../static/img/product_docs/endpointprotector/endpointprotector/install/sourcelocation.png)

**Step 5 –** Select the OVF ﬁle from the extracted zip ﬁle.

![Selecting the OVF ﬁle from the extracted zip ﬁle](../../../../static/img/product_docs/endpointprotector/endpointprotector/install/selectovffile.png)

**Step 6 –** Click **Next**.

![Selecting the Source Location](../../../../static/img/product_docs/endpointprotector/endpointprotector/install/ofvsourceselect.png)

**Step 7 –** Check the OVF Template Details and then click **Next**.

![Checking the OVF Template Details ](../../../../static/img/product_docs/endpointprotector/endpointprotector/install/ovftemplatedetails.png)

**Step 8 –** Specify the name of the OVF template and click **Next**.

![Specifying the name of the OVF template ](../../../../static/img/product_docs/endpointprotector/endpointprotector/install/templatenaming.png)

**Step 9 –** Select the Thin provision Disk Format option and click **Next**.

![Selecting the Thin provision Disk Format](../../../../static/img/product_docs/endpointprotector/endpointprotector/install/diskformat.png)

**Step 10 –** Click **Finish** to complete the installation.

![Completing the installation](../../../../static/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/jobs/instantjobs/installationcomplete.png)

### VMware Workstation

VMware Workstation provides strong virtualization capabilities for deploying Endpoint Protector
using the OVF format.

Follow the steps to get started with setting up your appliance.

**Step 1 –** Extract the downloaded Endpoint Protector Virtual Appliance package and move the ﬁles
to the path where your virtual machines are stored.

**Step 2 –** Open VMWare Workstation.

![Opening VMWare Workstation](../../../../static/img/product_docs/endpointprotector/endpointprotector/install/vmwareworkstation.png)

**Step 3 –** Select **Open Existing VM** or **Team**.

![ Opening Existing VM or Team](../../../../static/img/product_docs/endpointprotector/endpointprotector/install/vmorteam.png)

**Step 4 –** After the Virtual Appliance is in your inventory power on the Virtual Appliance.

![ Powering on the Virtual Appliance](../../../../static/img/product_docs/endpointprotector/endpointprotector/install/poweron.png)

**Step 5 –** If asked if the Virtual Machine was copied or moved, select **I moved it** (if it is
the only Endpoint Protector Virtual Appliance in your network).

![Select I moved it](../../../../static/img/product_docs/endpointprotector/endpointprotector/install/vmwaremoved.jpg)

The Virtual Machine is started and ready for use.

## Implement Using VMX Format

Utilize the VMX format to integrate existing virtual machines into your VMware environment.

### VMware Server

In VMware Server environments, the VMX format facilitates the addition of existing virtual machines
to your inventory. Follow the steps below to get started.

**Step 1 –** Extract the downloaded Endpoint Protector Virtual Appliance package and move the ﬁles
to the path where your virtual machines are stored.

**Step 2 –** Open your VMware Server web interface and log in.

![Opening VMware Server web interface](../../../../static/img/product_docs/endpointprotector/endpointprotector/install/vmwareserver.png)

**Step 3 –** Select **Add Virtual Machine to inventory**.

![Adding Virtual Machine to inventory](../../../../static/img/product_docs/endpointprotector/endpointprotector/install/vmwaretoinventory.png)

**Step 4 –** Browse in the inventory for Endpoint Protector Virtual Appliance and select the **VMX
ﬁle** and click **OK**.

![Adding Existing Virtual Machine](../../../../static/img/product_docs/endpointprotector/endpointprotector/install/addexistingvm.png)

At this point, the Virtual Machine is ready to be started.

### VMware Player

VMware Player supports legacy VMX formats, enabling straightforward virtual machine setup. Follow
the steps below to get started on integrating your appliance.

**Step 1 –** Extract the downloaded Endpoint Protector Virtual Appliance package and move the ﬁles
to the path where your virtual machines are stored.

**Step 2 –** Open VMware Player.

![Opening VMware Player](../../../../static/img/product_docs/endpointprotector/endpointprotector/install/vmwareplayer.png)

**Step 3 –** Select **Open a Virtual Machine** and select the VMX ﬁle from the location where you
extracted it and then click **Open**.

![Selecting the VMX ﬁle from the location where it was extracted](../../../../static/img/product_docs/endpointprotector/endpointprotector/install/vmwareopenvm.png)

**Step 4 –** After the Virtual Machine is in your inventory click **Play Virtual Machine**.

![Initiating VM Play on VMware Player](../../../../static/img/product_docs/endpointprotector/endpointprotector/install/vmwareplaymachine.png)

**Step 5 –** If asked if the Virtual Machine was copied or moved, select **I moved it** (if it is
the only Endpoint Protector Virtual Appliance in your network).

![Select I moved it](../../../../static/img/product_docs/endpointprotector/endpointprotector/install/vmwaremoved.jpg)

At this point, the Virtual Machine is ready to be started.

**CAUTION:** Do not suspend the VMware Player while Endpoint Protector Virtual Appliance is running.

**CAUTION:** Do not shut down your computer while VMware Player is running.
