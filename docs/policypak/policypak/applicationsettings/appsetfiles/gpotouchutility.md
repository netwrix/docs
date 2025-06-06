# Using GPOTouch Utility to Automatically Update Storage

You can manually update the Local Store or Central Storage with updated Endpoint Policy Manager DLLs and then manually edit each Group Policy Object and "touch" it if you are doing a manual upgrade. By "touching" a GPO, we mean to clicking edit on the GPO, which will refresh its contents by looking for upgraded AppSets. This can be time consuming to do this one by one. There is, however, a more straightforward approach using the Endpoint Policy Manager GPOTouch utility.

__NOTE:__  The Endpoint Policy Manager GPOTouch utility is installed alongside the Admin Console and DesignStudio setup MSI.

To start the Endpoint Policy Manager GPOTouch utility, find it in the Start Menu, as seen in Figure 87.

![policypak_application_settings_3_25](/static/img/product_docs/policypak/policypak/applicationsettings/appsetfiles/policypak_application_settings_3_25.png)

Figure 87. The Start Menu showing Endpoint Policy Manager GPOTouch.

Then follow the prompts to specify the source for the latest AppSets that you want to update: Central Storage, Share-Based Storage, Local Store, or All GPOs with the latest AppSets.

__NOTE:__ To see an overview of the Endpoint Policy Manager GPOTouch utility, please watch this tutorial video: [GPOTouch Utility](/docs/product_docs/policypak/policypak/video/applicationsettings/touchutility.md).
