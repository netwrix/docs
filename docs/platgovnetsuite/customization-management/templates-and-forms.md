# Advanced PDF / HTML Templates

These templates customize print and email transactions, improving the NetSuite standard templates.
Platform Governance for NetSuite documents the custom templates you create. Custom templates are
identified with a ScriptID prefix of **custtmpl**. The template and relationships are documented in
the Customization record.

If you create custom **SoD Exemption Approval Change Request Templates**, or **SoD Rule Change
Approval Change Request templates**, add them to the installation settings to prevent them from
being overwritten when new bundles are installed.

1. Open **Strongpoint** > **Strongpoint Support** > **Installation Settings**.
2. Click **Edit**.
3. Open the **Change Management** tab.
4. Enter your custom templates in the **CR Email Template** section.

Open **Customization** > **Forms** > **Advanced PDF / HTML Templates** to create or view templates.

## PDF / HTML Customization Referenced by a Script Example

![Example PDF/HTML customization referenced by a script](/img/product_docs/platgovnetsuite/customizations/pdf-html_template.webp)

## Script Customization Referencing a PDF / HTML Template Example

![Example of Script referencing an Advanced PDF/HTML template](/img/product_docs/platgovnetsuite/customizations/pdf-html_template2.webp)

## PDF / HTML Customization Record for a Saved Search Example

![Example of an Advanced PDF/HTML Customization Record for a Saved Search](/img/product_docs/platgovnetsuite/customizations/pdf-html_template3.webp)

# Setting Preferred Forms

You can set the preferred form to use for specific tasks.

1. Open **Customization** > **Lists, Records, & Fields** > **Record Types**
2. Select a form from the list. For this example, select **Change Request**.

   ![Setting the preferred form.](/img/product_docs/platgovnetsuite/customizations/preferred_form1.webp)

3. Open the **Forms** tab.

   ![Setting the preferred form.](/img/product_docs/platgovnetsuite/customizations/preferred_form2.webp)

4. Click the **Preferred** radio button to make the new **ITGC** Change Request form the preferred
   form.
5. Click **Save**.
