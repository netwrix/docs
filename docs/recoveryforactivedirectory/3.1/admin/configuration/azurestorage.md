---
title: "Azure Storage Page"
description: "Azure Storage Page"
sidebar_position: 12
---

# Azure Storage Page

The Azure Storage page displays the Azure storage containers configured for domain controller backup usage with Identity Recovery.

Click **Configuration** in the left pane. Then click the **Azure Storage tab** on the Configuration page to open the Azure Storage page.

![Users and Roles page](/images/recoveryforactivedirectory/3.1/product/configuration/azure_storage/azure_storage_configuration.png)

The table displays the following information:

- Container – The container in Azure storage
- Storage account – The storage account for this container
- Tenant – The tenant the storage container exists in
- Action – Actions that can be performed on user accounts

    - Remove – Click **Remove** to remove the storage container
    - Edit - Click **Edit** to edit the storage container configuration

### Add a Storage Container

Follow the steps to add a storage container that can be used to store domain controller backups.

**Step 1 –** Click the **Add Storage Container** button on the Azure Storage page. The Add Storage Container wizard opens.

![Add Storage Container wizard – Storage account page](/images/recoveryforactivedirectory/3.1/product/configuration/azure_storage/azure_storage_configuration_page1.png)

**Step 2 –** Enter the tenant name, client ID, secret and storage account from the application registration in Entra and click **Next**.

![Add Storage Container wizard – Container page](/images/recoveryforactivedirectory/3.1/product/configuration/azure_storage/azure_storage_configuration_page2.png)

**Step 3 –** Select an existing container using the dropdown list or specify a new container name. Click **Next** to continue.

![Add Storage Container wizard – Confirm page](/images/recoveryforactivedirectory/3.1/product/configuration/azure_storage/azure_storage_configuration_page3.png)

**Step 4 –** The Confirm page displays a summary of the settings you provided on the pages of the
wizard. Use the Back button to return to a previous page and change any setting. Click **Done**
to finish the wizard.

The storage container is now added to the system.

### Edit Storage Container Configuration

Follow the steps to edit a storage container configuration.  Editing a storage container follows the same steps as adding a storage container configuration.

**Step 1 –** On the Storage Container page, click the **Edit configuration** icon for a storage container. The Edit
Storage Container wizard opens.

**Step 2 –** Modify the desired settings for the storage container configuration

**Step 3 –** The Confirm page displays a summary of the settings you provided on the pages of the wizard. Use the Back button to return to a previous page and change any setting. Click **Done** to finish the wizard.

The storage container configuration is updated.