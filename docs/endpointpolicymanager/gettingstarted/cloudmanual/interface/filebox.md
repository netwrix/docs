---
title: "File Box"
description: "File Box"
sidebar_position: 30
---

# File Box

The **File Box** tab provides access to two features:

- External Links - a list of files you've staged on web services to be used with Endpoint Policy
  Manager Remote Work Delivery Manager.
- ADMX Files - files with your own ADMX settings for custom applications that you can upload and
  that Endpoint Policy Manager (the company) doesn't automatically provide for you.

![web_interface_and_controls_44_625x138](/images/endpointpolicymanager/cloud/interface/web_interface_and_controls_44_625x138.webp)

## External Links

Video: You can learn more about external links and Endpoint Policy Manager Remote Work Delivery
Manager from this video:
[Deploy software with Endpoint Policy Manager Cloud](/docs/endpointpolicymanager/components/remoteworkdeliverymanager/videos/methods/cloud.md).

You can learn more about the external links function in
[How to use Remote Work Delivery Manager to apply Firewall policies](/docs/endpointpolicymanager/deliverymethods/cloud/knowledgebase/clienttips/remoteworkdeliverymanager.md).
But in short, you can use public web services, like Amazon S3, to house software and then deploy it
to your remote PCs. However, Endpoint Policy Manager Cloud needs to know about this link before it
can be used. For this reason, you need to select the **Add external link** action and then specify
the link name, link type, the link itself, and an expiration time to turn off the link's operation.
After you do this, click **Validate Link**. Finally, click **Save** to continue, and your link will
be available within the in-cloud editor for Endpoint Policy Manager Cloud Remote Work Delivery
Manager.

![web_interface_and_controls_45_499x230](/images/endpointpolicymanager/cloud/interface/web_interface_and_controls_45_499x230.webp)

## ADMX Files

Video: You can see an overview of this section in the video:
[Endpoint Policy ManagerCloud: Upload and use your own ADMX files to Endpoint Policy Manager Cloud](/docs/endpointpolicymanager/deliverymethods/cloud/videos/gettingstarted/admxfiles.md).

While Endpoint Policy Manager (the company) automatically keeps many important ADMX settings
automatically updated for you, there could be a time when you have a third-party or custom
application that requires ADMX settings beyond what is normally available. In these cases, you can
upload a ZIP file containing your ADMX and ADML files. If you want to work though a test example,
you can go to Fox IT Software, which has a myriad of available GPO templates for its products. these
are good candidates for understanding this process. The templates can be found at this link:
[https://kb.foxitsoftware.com/hc/en-us/articles/360040241112-Available-GPO-templates](https://kb.foxitsoftware.com/hc/en-us/articles/360040241112-Available-GPO-templates).

In this example, we'll use the v10.1 templates, but you can do the same process for any application
which has both ADMX and ADML formatted files. In short, you need to ensure that your ZIP file has
exactly two files in it: an ADMX file and an ADML file.

![web_interface_and_controls_46_624x346](/images/endpointpolicymanager/cloud/interface/web_interface_and_controls_46_624x346.webp)

Once you have this ZIP file downloaded from your manufacturer or compiled on your own, you are ready
to use it with the **Upload ADMX Files** action. After selecting **Upload ADMX Files**, select the
file. Then, change the display path to describe the ADMX file, and trim anything not useful in the
name.

![web_interface_and_controls_47_624x396](/images/endpointpolicymanager/cloud/interface/web_interface_and_controls_47_624x396.webp)

Click **Save** to continue. Now you can see your ADMX settings, and you can also peruse your upload
to see all the settings.

![web_interface_and_controls_48_625x200](/images/endpointpolicymanager/cloud/interface/web_interface_and_controls_48_625x200.webp)

Now you're ready to use the uploaded ADMX and ADML files when using the Endpoint Policy Manager
Cloud in-cloud ADMX editors to create administrative template policies.

![web_interface_and_controls_49_624x318](/images/endpointpolicymanager/cloud/interface/web_interface_and_controls_49_624x318.webp)


