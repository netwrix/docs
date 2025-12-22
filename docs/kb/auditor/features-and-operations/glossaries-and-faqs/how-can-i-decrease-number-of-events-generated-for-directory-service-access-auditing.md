---
description: >-
  You enabled Directory Service Access auditing and configured object-level
  auditing categories, but the Security event log fills quickly. This article
  explains how to reduce the number of events generated for Directory Service
  Access auditing by disabling unnecessary categories on the domain container.
keywords:
  - directory service access
  - auditing
  - security event log
  - Active Directory
  - object-level auditing
  - Netwrix Auditor
  - domain controller
products:
  - auditor
sidebar_label: "How can I decrease number of events generated for Directory Service Access auditing?"
tags: []
title: >-
  How can I decrease number of events generated for Directory Service Access
  auditing?
knowledge_article_id: kA00g000000H9ViCAK
---

# How can I decrease number of events generated for Directory Service Access auditing?

You enabled Directory Service Access auditing and configured auditing categories in accordance with Netwrix instructions, but this configuration generates a lot of events and the Security event log keeps being overwritten (even after increasing its size to 4GB). How can you decrease the number of events being generated for Directory Service Access auditing?

Despite the fact that Netwrix Guides recommend enabling almost all categories while configuring object-level auditing, not all of them are being used by Netwrix Auditor. So, to decrease the event generation you can uncheck the unnecessary categories in default domain container auditing settings. The following steps outline how to modify domain container auditing settings and prevent the generation of unnecessary events (decrease the Security event log usage):

## Steps

1. Log on to any Domain Controller in the monitored domain.
2. Open **Active Directory Users and Computers**.
3. Right-click on the domain node and select **Properties**.
4. Navigate to **Security tab --> Advanced --> Audit tab**.
5. Select **Everyone** and click **Edit**.
6. Uncheck the following check boxes (you need to have only **SUCCESSFUL** checkboxes checked):
   - **Full Control**
   - **List Contents**
   - **Read all properties**
   - **Read permissions**
   - **All extended rights**
   - **Add GUID**
   - And all after "Add GUID" except "Reanimate tombstones"
