---
title: "Discovered entries"
description: "Discovered entries"
sidebar_position: 30
---

# Discovered entries

The entries for the **Discovery Service** are discovered using a **Discovery Service Task**. It can
take some time for all the data on the systems for the entered IP network to be collected. This can
be easily recognized by the **blue arrow** symbol on the **Discovery Service Task** and a
corresponding message is also shown in the General display. Once the **Discovery Service Task** has
been completed, the data will be shown in the **Discovery Service module**.

![new discovery service task](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/discoveryservice/discovered_entries/discovered_entries_1-en.webp)

The **Discovery Service Task** needs to be carefully configured. The configurable sections are
described below.

1. **Discovery Service Task**: Display of the status: this can be updated in the preview and logbook
   using the F5 button. Red hand: Deactivated Blue arrow: Activated and being executed Boxes:
   Corresponds to the assigned tag
2. **General**: The latest information about the **Discovery Service Task** is shown here. A
   **message** will be shown to indicate an active **Discovery Service Task**.
3. **Overview**: Current data for the **Discovery Service Task** about its progress and subsequent
   executions are shown here.
4. **Logbook**: The **logbook** can be found in the **footer** of the **Discovery Service Task**.
   The latest activities carried out by the **Discovery Service Task** are shown here.

NOTE: The **data** is **not kept up-to-date while the task is being executed** and does not always
show the latest status. Therefore, the data should be regularly **updated** using the **F5 button**!

## Using the Discovery Service entries

The successful execution of a **Discovery Service Task** is a requirement for the **Discovery
Service entries**. The discovered data is listed in table form in the **Discovery Service module**
and can be correspondingly organized using the **Discovery Service System Task** filter.

![discovery service entries](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/discoveryservice/discovered_entries/discovered_entries_2-en.webp)

In this section, the **Discovery Service entries** that were discovered by the **Discovery Service
Task** and selected for the **Conversion Wizard** are displayed.

## Multiple selection of Discovery Service entries

If multiple entries are selected for a **Password Reset**, a corresponding number of **passwords**
and **Password Resets** need to be added in the **Conversion Wizard**. Depending on the entries
selected (service, Active Directory user, user account), it is necessary to carry out corresponding
**assignments** in the **Conversion Wizard** for the **passwords**.

![Discovery service conversion wizard ](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/discoveryservice/discovered_entries/discovered_entries_3-en.webp)

Every line must be connected to a **password** in the end. Therefore, it is necessary to carry out
an assignment process in the **Conversion Wizard** for every entry.

![Discovery service conversion wizard ](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/discoveryservice/discovered_entries/discovered_entries_4-en.webp)

For **Active Directory users**, it is possible to assign an existing **password**.

NOTE: The subsequent process is carried out in the same way as when only one **Discovery Service
entry** is selected.

## Filter settings

A good filter is required for processing the discovered data. A **filter that has been adapted for
this purpose** is available for processing the entries in the **Discovery Service module**. The
options in the **filter** are described below:

![Filter for discovered data](/images/passwordsecure/9.2/configuration/advanced_view/clientmodule/discoveryservice/discovered_entries/discovered_entries_5-en.webp)

Description of the **filter with the special options for the Discovery Service entries**:

1. **Discovered type**: The discovered entries can be filtered here according to their type.
2. **Discovered system is resettable**: Indicates whether a Password Reset can be created from the
   discovered data.
3. **Relevance**: Grading the importance of the discovered system. A high relevance means that
   multiple services have been discovered for an Active Directory user or user account. Less
   important: Exactly one service was found Important: Two to nine services were found Very
   important: 10 or more services were found If a Password Reset has already been created, the
   relevance is downgraded to less important.
4. **Transferred as password**: Indicates whether a password can be created via the Conversion
   Wizard
5. **Transferred as Password Reset**: Indicates whether a Password Reset can be created via the
   Conversion Wizard
6. **Discovery service system tasks**: The entries are filtered here based on the System Task.
