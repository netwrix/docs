---
title: "Adjust the Workforce Data Model"
description: "Adjust the Workforce Data Model"
sidebar_position: 40
---

# Adjust the Workforce Data Model

How to select the properties to be part of the data model for the workforce repository (therefore displayed in the UI), and choose their optimal displaying mode.

## Overview

After you created the initial version of the workforce repository, Identity Manager provides an easy method to optimize the structure of the data model, for example preventing empty fields in the UI.

According to the number of resources in the organization, Identity Manager's analysis of the data model's usage suggests:

- to remove unused entity types (country, site, gender, subsidiary, etc.) from the data model and
from the UI;
- to remove unused properties (phone number of a user, position end date, town of a site, etc.) from
fields to fill in the workflows for entity creation, except for properties that are essential to Identity Manager's operation and thus ensured to be part of the data model (e.g. the contract's start date);
- an optimized display mode in the UI for all entity types, and for the fields which link to another
entity (manager of a department, contract type of a user, gender of a user, etc.) and thus require a query tool (dropdown box, search bar, etc.).

You can then make your own choice about activating/deactivating/re-activating any property, and you will be able to make modifications at any time.

## Participants and Artifacts

Integrators may need the help of the **HR department** who know the organization.

 | Input | Output | 
 | --- | --- | 
 | IdentityManagerServer (required) Initial workforce repository (required) | Adjusted workforce repository | 

See the [Install the Development Environment](../../../user-guide/set-up/development-environment-installation) and [Load Identities to Identity Manager](../../../user-guide/set-up/initial-identities-loading/load-identities) topics for additional information.

## Adjust the Data Model

Adjust the data model by proceeding as follows:

1. On the home page, click on **Settings** in the **Configuration** section.

    ![Home Page - Configuration](/images/identitymanager/user-guide/set-up/user-profile-configuration/home_settings_v523.webp)

2. On the **Workforce** > **Data Model** page, click on the following icon to adjust the data model
to your specific situation.

    ![Scan Data Model](/images/identitymanager/user-guide/set-up/initial-identities-loading/adjust-datamodel/iconscandatamodel_v602.svg)

    ![Scan Data Model](/images/identitymanager/user-guide/set-up/initial-identities-loading/adjust-datamodel/initialload_scandatamodel_v60.webp)

Identity Manager counts the entries for each attribute and suggests a quantification:

    - Empty attributes are deactivated as they should be excluded to simplify the data model.
    - Non-empty attributes are quantified (e.g. small, large, etc.) to be displayed in the UI's
forms optimally (e.g. dropdown list, search tool, etc.).

    ![Scan Data Model - Result](/images/identitymanager/user-guide/set-up/initial-identities-loading/adjust-datamodel/initialload_scandatamodel-result_v523.webp)

3. Observe the result and adjust manually the data model if needed, by clicking on the properties.

While Identity Manager suggests a structure for the data model, the choice is yours to activate/deactivate any property.

    > For example, empty attributes should be excluded to simplify the data model. However, you can
    > choose to keep an empty property anyway if you know that you want to fill it in later.

Note that Identity Manager stays authoritative to activate some properties that are mandatory for Identity Manager's operation.

For example the contract's start date is necessary for Identity Manager's workflows.

Modifications can be performed later, decisions can be reconsidered. See the [Modify the Identity Data Model](../../../user-guide/optimize/identity-datamodel-modification) topic for additional information.

4. Click on the Save icon at the top.

    ![Save Icon](/images/identitymanager/user-guide/set-up/user-profile-configuration/iconsave_v602.svg)

5. Click on the **Reload** button to apply the recent changes to the application.

    ![Reload Button](/images/identitymanager/user-guide/set-up/initial-identities-loading/generate-unique-properties/reload_v603.webp)

## Verify Identities Loading

In order to validate the process:

1. Choose a test field and note its displaying mode.

    > For example, our `Region` field in `Site` is sized as `large`.
>
    > ![Scan Data Model - Example](/images/identitymanager/user-guide/set-up/initial-identities-loading/adjust-datamodel/initialload_scan-example_v523.webp)

2. Navigate within Identity Manager to find a workflow using the test field. Observe the displaying
mode in the UI.

    > Our `State` field must be filled in during the creation of a new site. It can be filled by
    > opening a pop-up and choosing the region in the list.
>
    > ![Scan Data Model - Example](/images/identitymanager/user-guide/set-up/initial-identities-loading/adjust-datamodel/initialload_scan-example2_v523.webp)
>
    > ![Scan Data Model - Example](/images/identitymanager/user-guide/set-up/initial-identities-loading/adjust-datamodel/initialload_scan-example3_v523.webp)

3. Back on the scanning feature, change the displaying mode of your test field and save.

    > We change `large` to `extra small`.

4. Verify the test field's displaying mode.

