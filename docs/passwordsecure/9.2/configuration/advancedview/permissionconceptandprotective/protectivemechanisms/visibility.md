---
title: "Visibility"
description: "Visibility"
sidebar_position: 10
---

# Visibility

## Visibility of data

The use of a [Filter](/docs/passwordsecure/9.2/configuration/advancedview/operationandsetup/filter/filter.md) is generally the gateway to
displaying existing records. Nevertheless, this aspect of the visibility of the records is closely
interwoven with the existing permissions structure. Naturally, a user can always only see those
records for which they have at least a read Permission. This doctrine should always be taken into
consideration when handling records. [Tags](/docs/passwordsecure/9.2/configuration/advancedview/operationandsetup/tags.md) are not
subject to any permissions and can thus always be used as filter criteria. Nevertheless, the
delivered results will only contain those records for which the user themselves actually has
permissions. A good example here is the tag “personal record”. Every user can mark their own record
as personal – yet each user will naturally only be able to find their own personal records.

## Creating independently working environments

The possibility of separately defining the visibility of individual objects is one of the special
features within the Netwrix Password Secure authorization concept. Irrespective of whether handling
records, documents, organisational structures, roles or forms: it is always possible to define
whether a user or a role possesses a read permission to the object or not. The permissions for each
of these objects can be defined separately via the ribbon in the permissions dialogue. This approach
enables the creation of independently existing departments within a database. The permissions
structure for the SAP form can be seen below. It shows that only the sales manager and the
administrators are currently permitted to create new records of type SAP.

![example permissions on a form](/images/passwordsecure/9.2/configuration/advanced_view/permissionconcept/predefining_rights/protective_mechanisms/visibility/visibility-en.webp)

In general, each department can independently use forms, create passwords and manage hierarchies in
this way. Especially in very sensitive areas of a company, this type of compartmentalization is
often required and also desired.

NOTE: An alternative also supported by Netwrix Password Secure is for each department to set up
their own MSSQL database. However, this physical separation requires considerably more
administration work than the above-mentioned separation of data based on permissions and visibility.
