---
title: "I can only EDIT GPOs and not create them. Can I still use PolicyPak?"
description: "I can only EDIT GPOs and not create them. Can I still use PolicyPak?"
sidebar_position: 50
---

# I can only EDIT GPOs and not create them. Can I still use PolicyPak?

Yes. And here is why.

First, you will need to import Netwrix PolicyPak licensing files.

After a GPO is created (not by you), and you edit it, see
[The License Tool (LT) isn't permitting me to install License Files (or I am using AGPM, GPA, or GPOAdmin.) What should I try?](/docs/policypak/licensing/knowledgebase/faqactivedirectory/wizard.md)
for additional information. You will import the license files while editing the GPO.

Next, all normal operations in PolicyPak are available to you, like PolicyPak Application Manager and PolicyPak Admin Templates Manager.

:::note
Note that PolicyPak Application Manager Pak definitions can be stored in
regular shares, and don't need to be stored in the Central Store, which would require domain
controllers.
:::


See [Using Shares to Store Your Paks (Share-Based Storage)](/docs/policypak/components/applicationsettingsmanager/videos/centralstoresharing/shares.md)
for additional information on using shares with PolicyPak Admin Templates Manager.

