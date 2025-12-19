---
title: "Dependency Relationship Diagram"
description: "Dependency Relationship Diagram"
sidebar_position: 10
---

# Dependency Relationship Diagram

Platform Governance for Salesforce's Dependency Relationship Diagram (DRD) displays objects,
customizations and their relationships and dependencies including scripts, reports and workflows in
a graphical diagram.

To use the entity diagram:

1. Open **Netwrix Dashboard** > **Tools** > **Dependency Relationship Diagram**
2. Select the object to view.
3. The diagram displays the object and customizations under it. Use **Show/Hide Standard Fields** to
   toggle the display of Standard Fields for easier searching of non-standard fields.
4. Click on any item to expand the graphical representation of objects, dependencies and associated
   relationships. If there are more than 10 entries, a **Next** option is available at the end to
   expand the results. **Next** loads the next 10 entries, **Back** loads the previous list.
5. Click **Open Record** to open the customization record for the item.

![entity_diagram](/images/platgovsalesforce/tools/entity_diagram.webp)

Here is an example showing the Next feature for **Account (StandardObject)** > **Test 1
(Parent:Account)**.

![DRD entry showing Next option if there are more than 10 entries](/images/platgovsalesforce/tools/drd_next.webp)
