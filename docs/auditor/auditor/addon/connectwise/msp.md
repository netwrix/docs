# MSP Usage Example

Consider a situation when a password is reset for a user, computer, or **inetOrgPerson** account.

After deploying and configuring the add-on as described in this guide, the MSP (Managed Service
Providers) staff member enabled Auditor integration feature:

![Integration API Settings](../../../../../static/img/product_docs/auditor/auditor/addon/connectwise/integrations_thumb_0_0.webp)

Also, she enabled the ‘**Password Reset**’ alert from the Auditor predefined set of alerts and
specified the add-on launch as response action.

![addon](../../../../../static/img/product_docs/auditor/auditor/addon/connectwise/addon.webp)

Then a new ticket is automatically created shortly after any account password is reset.

All necessary details about the case are automatically entered into the ConnectWise ticket (_Initial
Description_ ﬁeld), including the name of the workstation, the name of the account in question, and
the time when the event occurred:

![serviceboard](../../../../../static/img/product_docs/auditor/auditor/addon/connectwise/serviceboard.webp)
