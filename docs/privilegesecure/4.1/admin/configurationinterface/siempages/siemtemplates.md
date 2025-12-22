---
title: "SIEM Templates Page"
description: "SIEM Templates Page"
sidebar_position: 20
---

# SIEM Templates Page

The SIEM Templates page is accessible from the Navigation pane under Configuration > SIEM. Privilege
Secure can output events to third-party SIEM solutions for reporting, correlation, and notification.
The SIEM Templates page determine the format and the nature of the event data.

Two out of the box templates are provided for most common use cases, CEF and LEEF. New templates can
be configured according to the requirements of the target SIEM solution, and the specific event data
that needs to be sent.

![SIEM Templates Page](/images/privilegesecure/4.1/accessmanagement/admin/configuration/page/siemtemplates.webp)

## Custom SIEM Templates

Follow the steps to add a custom SIEM template to the Privilege Secure Console.

**Step 1 –** Navigate to the **Configuration** > **SIEM** > **SIEM Templates** page.

![Add SIEM Template](/images/privilegesecure/4.1/accessmanagement/admin/configuration/page/siemtemplate.webp)

**Step 2 –** Click the Plus icon.

**Step 3 –** Enter the following information:

- Template Name – Enter the name for the custom template.
- Description – Description of the policy
- Format - The event data string that will be sent to the SIEM Server is displayed in the Format
  field. This can be edited directly
- Event Picker – A list of events that can be sent is displayed in a scrollable list. To add events,
  position the cursor in the Format field and select the green plus icon next to the events you wish
  to add in the event picker

**Step 4 –** Click **Save** to create the new custom SIEM template.

The new custom SIEM template is added to the SIEM templates list.
