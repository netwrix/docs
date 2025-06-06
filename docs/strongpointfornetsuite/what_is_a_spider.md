# What is a Spider?

The Spider searches your account and creates the documentation for your customizations. The spider includes dependencies for saved searches in standard and custom fields. Here are items documented by the spider:

|  |  |  |
| --- | --- | --- |
| Custom Entity Fields | Mass Updates | User Roles |
| Custom CRM Fields | Suitelet | Custom Report |
| Custom Body Fields | RESTlet | Bundle |
| Custom Column Fields | User Event Script | Online Customer Form |
| Custom Item Fields | Scheduled Script | Custom Record Forms |
| Custom Item Options | Client Script | Group |
| Item Number Fields | Mass Update Script | Subsidiary |
| Other Fields | Portlet Script | Department |
| Custom Lists | Custom Workflow Action | Class |
| Custom Records | Bundle Installation Script | Location |
| Custom Record Fields | Map/Reduce Script | Custom Segment |
| Custom Entry Forms | Plug-In | Email Template |
| Custom Transaction Forms | Script Deployments | Custom Advanced PDF/HTML Template |
| Searches | Workflow |  |

There are three ways to use the Spider:

> [Manual Spider](#Manual-Spider)
>
> [AutoSpider](#AutoSpider)
>
> [ReSpider Now](#ReSpider-Now)

## Manual Spider

Creates the initial documentation of your account. It has the ability to fully document your account by Spidering all the customization records as well doing a full update on the records in your account (every customization). The initial manual Spider is run during as part of the installation process: [Running the Spider](/docs/product_docs/strongpointfornetsuite/installing_strongpoint/running_the_spider.md).

When running the spider, you must keep the window open for the spider to continue working. Do not change roles or accounts during spidering. NetSuite security standards require an active Administrator login to execute some of the spider’s tasks.

You can specify specific record types to focus the spider:

## AutoSpider

The AutoSpider monitors your account on an ongoing basis to see if customization changes have occurred. This is a light scan of the data to determine if there were any changes. If changes are detected, you are reminded to ReSpider your account.

Best practice is to run the AutoSpider regularly. If the AutoSpider is not run, your Change Logs will be missing the __Changed by__ and __Actual Change Date__ fields. When the Change Log is newly created, the fields contain __Pending AutoSpider__. If too many days go by, the fields change to __Could not be determined__.

### AutoSpider Portlet

The AutoSpider Portlet is set up as part of the installation process: [Setting Up the AutoSpider and Alerts](/docs/product_docs/strongpointfornetsuite/installing_strongpoint/setting_up_auto_spider_alerts.md).

The __AutoSpider Portlet__ is required to update certain object types in NetSuite. Once triggered through the dashboard portlet, it picks up all changes on custom objects and triggers the scheduled scripts to reflect them in the Customization records, going back two days. The AutoSpider portlet is required in order to update these object types:

- Bundle
- Custom Report
- Entry Form
- Mass Update
- Online Customer Form
- Record
- Transaction Form
- Custom Advanced PDF/HTML Template

## ReSpider Now

The __ReSpider Now__ feature is used to document or update documentation for a specific customization or a specific set of customizations on demand. Once you are finished adding your new/updated objects to your customization record or change request, simply click __ReSpider Now__ on your form, and your documentation is updated in real time. Here is an example of a customization record with the __ReSpider Now__ option:

![ReSpiderNow](/static/img/product_docs/strongpointfornetsuite/respider_now.png)

Proposed customizations do not work for custom forms and custom reports, since they do not have Script IDs. NetSuite is currently working on this, but it is still in development. For searches, __ReSpider Now__ uses the permissions of the current logged in user. If the user does not have the correct permission set, the search shows as private.
