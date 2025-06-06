# ExchangeMetrics: Message Sizes

The Message Sizes page is used to configure message size frames for which to return summary metrics by server. It is a wizard page for the category of:

- Message Size Statistics Custom.

![Exchange Metrics Data Collector Wizard Message Sizes page](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/exchangemetrics/messagesizes.png)

Configure the desired message size frames using the following options:

- Frame name – Name the configured message size parameters. Can either be entered manually or a default will populate when query limits are set.
- Start – Specify the lower limit of the message sizes (in MB)
- End – Specify the upper limit of the message sizes (in MB)

For example, a __Start__ value of __1__ and an __End__ value of __2__ returns messages between 1 and 2 megabytes.

- Infinite – Select the checkbox to remove the __End__ value from the scan. For example, a __Start__ value of __5__ with the __Infinite__ checkbox selected retrieves all messages which are 5 megabytes or larger.

Once the frame is configured, click __Add__. The configured message size frame will appear in the list. Multiple frames can be configured. Select a frame and click __Replace__ to modify an existing frame. Use __Remove__ to delete an existing frame.
