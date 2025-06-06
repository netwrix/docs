# Viewing the Status of SendMail Actions

Follow the steps to view the status of an executed SendMail action:

![Analysis Properties page for SendMail View Status Analysis task](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/action/sendmail/viewstatusanalysisproperties.png)

__Step 1 –__ Create a new SQLViewCreation analysis and choose __Configure Analysis__. The View and Table Creation Analysis Module wizard opens.

![Input Source wizard page](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/action/sendmail/viewstatusinputsource.png)

__Step 2 –__ On the Input Source page, choose the original source table for the SendMail action as the first table and ```tablename_ActionStatus``` as the second table. For example, if the source table is ```MailEnabledPF```, then select ```MailEnabledPF_ActionStatus``` as the second table.

![Join Columns wizard page](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/action/sendmail/viewstatusjoincolumns.png)

__Step 3 –__ For __Table 1 join property__, specify the column recipient of the SendMail action. For example, if sent to SMTP address, specify __SMTPaddress__ as the column. For __Table 2 join property__, select __srcRowKey__. Leave everything else at the default settings.

![Result Columns wizard page](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/action/sendmail/viewstatusresultcolumns.png)

__Step 4 –__ On the Results Columns page, select the columns to return from each table. Leave all other settings at their default.

![Result Type wizard page](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/action/sendmail/viewstatusresulttype.png)

__Step 5 –__ On the Result Type page, leave it as a table and provide a descriptive name, for example ```SendMailStatus```.

![Results Sample wizard page](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/action/sendmail/viewstatusresultsample.png)

__Step 6 –__ Click through the rest of the options. On the Result Sample page, click __Show Preview__ to display the columns selected within the Columns page. Click __Summary__ to navigate to the Summary page and click __Finish__ to exit the wizard.

This analysis now reports the status of the SendMail action.
