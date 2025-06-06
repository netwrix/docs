# Using Email for Admin Approval

If needed, you can use email to authorize items using Endpoint Policy Manager (formerly PolicyPak) Least Privilege Manager. This way, users can click a link that automatically emails the Helpdesk or ServiceNow or support personnel, rather than initiating a phone call. Using the same Admin Approval policy we created earlier, open the policy up and click on the __Email__ tab. Change the __Use of email__ field to __Enabled__ and insert an email address that will handle the admin approvals.

__NOTE:__ See the [Using Email / Long Codes](/docs/product_docs/policypak/policypak/video/leastprivilege/longcodes.md) video for using email for Admin Approval.

![A screenshot of a computer

Description automatically generated](/static/img/product_docs/policypak/policypak/leastprivilege/adminapproval/using_email_for_admin_approval.png)

The two options are:

- Always use email (only) - Will not show a shortcode in the Admin Approval Dialog.
- Open the message in Notepad instead - Instead of opening an email, it will open in Notepad. This is useful if you don’t have any locally installed email client and wish to copy / paste the details into Gmail, Office 365 Web mail, or similar. See the [Endpoint Privilege Manager: Admin Approval Email method (with Notepad instead)](/docs/product_docs/policypak/policypak/video/leastprivilege/adminapproval/email.md) video for a demonstration.

Now when users click on an install or run an application, they receive a slightly different prompt.

Below you can see the long response code now required, instead of the short response code. Users will click the __Send a request mail to my support__ link, which will automatically send the approval request using their email application.

![A screenshot of a computer

Description automatically generated](/static/img/product_docs/policypak/policypak/leastprivilege/adminapproval/using_email_for_admin_approval_1.png)

Here you can see the generated email containing the request code.

![A screenshot of a computer

Description automatically generated](/static/img/product_docs/policypak/policypak/leastprivilege/adminapproval/using_email_for_admin_approval_2.png)

When the email is received, a support admin can copy the request code and paste it into the Admin Approval Tool. Once pasted into the tool, all of the task information about the application appears just as it was when using the short request code process.

You can then check the item using VirusTotal (optional) and get the response code copied to clip board and/or send an email back to the user.

![A screenshot of a computer

Description automatically generated](/static/img/product_docs/policypak/policypak/leastprivilege/adminapproval/using_email_for_admin_approval_3.png)
