# First Launch

Once Threat Prevention is installed, the Administration Console administrator is the only user who can launch it for the first time.

Follow the steps to launch Threat Prevention for the first time.

__Step 1 –__ On first launch, the Netwrix Threat Prevention Licensing Configuration window is displayed to the first Administration Console administrator, showing a license key warning:

- Product license will expire in <number> days. Please contact your Netwrix representative for a new license.

This warning always displays when the organization’s license is within 14 days of expiring. Click __OK__. See the [Import the License](/docs/product_docs/threatprevention/threatprevention/install/licenseimport.md) topic for licensing the product.

![Import Templates dialog box](/static/img/product_docs/threatprevention/threatprevention/install/importtemplates.png)

__Step 2 –__ On the Import Templates dialog box, you can choose to import policy templates now or later.

In Threat Prevention, many policy templates are pre-configured for the most common policy types, so that you can quickly configure a policy. See the [Templates Interface](/docs/product_docs/threatprevention/threatprevention/admin/templates/overview.md) topic for details.

- Click __Yes__ on the Import Templates dialog box to import all the templates into the Administration Console now. Once complete, the templates are available to all Administration Console users.
- On clicking __No__, the Import Templates dialog box appears asking, “Do you want to be prompted again next time this application loads?”

You can import the policy templates any time later. See the [Import Templates](/docs/product_docs/threatprevention/threatprevention/admin/templates/folder/overview.md#Import-Templates) topic for additional information.

![Install Agent dialog box](/static/img/product_docs/threatprevention/threatprevention/install/installagent.png)

__Step 3 –__ On the Install Agents dialog box, you can choose to install the Agent on servers now or later.

The Agent is responsible for monitoring the events as configured in policies. The Agent must be deployed on all the servers where these events occur. Use the Administration Console to deploy and manage the Agent.

- Click __Yes__ on the Install Agents dialog box to launch the __Deploy Agents__ wizard. See the [Deploy Agents](/docs/product_docs/threatprevention/threatprevention/admin/agents/deploy/overview.md) topic for additional information.
- Click __No__ if you do not want to install the Agents now. To install Agents later, see the [Agents Interface](/docs/product_docs/threatprevention/threatprevention/admin/agents/overview.md) topic.

See the [Getting Started ](/docs/product_docs/threatprevention/threatprevention/gettingstarted.md)topic for the next steps.
