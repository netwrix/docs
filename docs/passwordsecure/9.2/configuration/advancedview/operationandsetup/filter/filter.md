---
title: "Filter"
description: "Filter"
sidebar_position: 20
---

# Filter

## What is a filter?

The freely configurable filters of the PSR client provide all methods for easy retrieval of stored
data. The filter criteria are always adapted according to the module in which you are currently
located. When you select one or several search criteria, and click on “Apply filter”, the results
will be displayed in the list view. If necessary, this process can be repeated as desired and
further restrictions can be added.

## Relevant rights

The following option is required for editing filters:

**User right**

- Can edit filter

![Filter](/images/passwordsecure/9.2/configuration/advanced_view/operation_and_setup/filter/installation_with_parameters_10-en.webp)

## Who is allowed to use the filter?

The filter is an indispensable working tool because of the possibility to restrict existing results
according to individual requirements. Consequently, all users can use the filter. It is, of course,
possible to place restrictions for filter criteria. This means that the filter criteria available to
individual employees can be restricted by means of
[Authorization and protection mechanisms](/docs/passwordsecure/9.2/configuration/webapplication/authorization_and_protection_mechanisms.md).
For example, an employee can only filter for the [Forms](/docs/passwordsecure/9.2/configuration/advancedview/clientmodule/forms/forms.md) password
if he has the read permission for that form.

**CAUTION:** There are no permissions for [Tags](/docs/passwordsecure/9.2/configuration/advancedview/operationandsetup/tags.md). This means that any employee can
use any tags. The display order in the filter is determined by the frequency of use. This process is
not critical to security, since tags do not grant any permissions. They are merely a supportive
measure for filtering.

## Application example

Filter without criteria

By selecting the desired criteria and applying the filter using the button of the same name, the set
of all the records corresponding to the criteria is displayed in the list view. If you used the
filter without criteria, you would obtain a list of all records to which you generally have
authorization.

![editing criteria](/images/passwordsecure/9.2/configuration/advanced_view/operation_and_setup/filter/installation_with_parameters_11-en.webp)

As you can see, 133 records are not really manageable. In most situations you will need to reduce
the number of records by adding filters.

**Adding filter criteria**

The filter **organization** can be applied directly to the authorizations to restrict the number of
records according to the authorizations granted. In this case, the logged-on user holds rights for
various areas. However, it would like to see only those records which are assigned to the **Own
passwords** area within the organisational structure. In addition, there should be further
restrictions, which could be formulated as in the following sentence: “Deliver all records from my
own passwords that were created with the form **password** and which contain the expression **2016**
and the tag **Administrator**.

![Adding filter criteria](/images/passwordsecure/9.2/configuration/advanced_view/operation_and_setup/filter/installation_with_parameters_12-en.webp)

As can be seen, the filter delivers the desired results. The extent to which the filter criteria
match the three remaining data sets is assigned in colour.

**CAUTION:** When filtering with several criteria, such as forms, content and tags, all filter
criteria must be complied with. It is therefore a logical “AND operation”. Other possible methods
for linking criteria are described in detail in the Advanced Filter Settings.

**Content filter**

The term \* 2016 \* is part of the description in the \* My Schufa \* record, part of the
description of \* Wordpress 2016 \* and Microsoft Online 2016 . **Since the search** \***”in all
fields”** is activated in the content filter, all three records are also included in the results,
and are displayed in the list view. You can also configure the content filter to search for
expressions in a specific field. The icon next to the expression **”in all fields”** opens the
content filter configuration in a modal window. As can be seen, the content filter has been
configured to only search in the form **password** and then only in the form field **Internet
address:**

![installation_with_parameters_13](/images/passwordsecure/9.2/configuration/advanced_view/operation_and_setup/filter/installation_with_parameters_13.webp)

![Content filter](/images/passwordsecure/9.2/configuration/advanced_view/operation_and_setup/filter/installation_with_parameters_14-en.webp)

It is very easy to abstract, because of the present example, that the filter can be adapted to your
personal requirements. It is thus the most important tool to be able to retrieve data once stored in
the database.

**CAUTION:** The effectiveness of the filter is closely linked to data integrity. Only when data is
kept clean, efficient operation with the filter is ensured. It is important that employees are
trained in the correct handling of the filter tool as well as when creating the records. Workshops
show the best success rate in this context. If you require further information, contact us under
mail to: sales@passwordsafe.de.
