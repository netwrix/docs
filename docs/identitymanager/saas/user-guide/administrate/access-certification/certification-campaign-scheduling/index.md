---
title: "Schedule a Certification Campaign"
description: "Schedule a Certification Campaign"
sidebar_position: 10
---

# Schedule a Certification Campaign

How to create and schedule access certification campaigns, defining their scope.

## Overview

The aim of an access certification campaign is to review specific access and entitlements for
specific identities, in order to certify them and express an audit opinion that justifies their
necessity.

Here, you will learn how to create and schedule a certification campaign, defining its scope via the
filters specifying the reviewers and items to be reviewed.

## Participants and Artifacts

This operation should be performed in cooperation with the staff in charge of auditing, because they
know what entitlements need to be reviewed.

| Input                                                                                                                                                                                                | Output                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| Identity Repository (required) [Create Roles in the Role Catalog](/docs/identitymanager/saas/user-guide/set-up/single-roles-catalog-creation/index.md)<br />(optional) [Manage Risks](/docs/identitymanager/saas/user-guide/optimize/risk-management/index.md) | Scheduled certification campaign(s) |

See the [Create the Workforce Repository](/docs/identitymanager/saas/user-guide/set-up/initial-identities-loading/index.md) topic
for additional information.

## Create a Certification Campaign

Create an access certification campaign by proceeding as follows:

1. Click on **Access Certification Campaigns** in the **Administration** section on the home page.

    ![Home - Access Certification Campaigns](/images/identitymanager/saas/user-guide/administrate/access-certification/certification-campaign-scheduling/home_accesscertificationcampaigns_v602.webp)

2. Click on the addition button at the top right and fill in the fields.

    ![Addition Icon](/images/identitymanager/saas/user-guide/set-up/categorization/classification/iconadd_v602.svg)

    ![New Certification Campaign](/images/identitymanager/saas/user-guide/administrate/access-certification/certification-campaign-scheduling/certifcampaign_newcertificationcampaign_v602.webp)

    - `Identifier`: Must be unique among certification campaigns and must not contain whitespace.
    - `Name`: Will be displayed in the UI to identify the campaign.
    - `Start Date`: Date when the campaign begins and becomes visible on the reviewers' **Access
      Certification** screen. The campaign will review access existing at this date; changes after
      this date are not included.
    - `End Date`: Date when the campaign ends.
    - `Target Entity Type`: Entity type targeted by the campaign.
    - `Target Reviewers`: Set of identities responsible for the access review. Available reviewers
      are configured via the
      [Access Certification](/docs/identitymanager/saas/integration-guide/governance/accesscertification/index.md)
      policies.
    - `Target Specificities`:
      [AccessCertificationDataFilter](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/access-certification/accesscertificationdatafilter/index.md)
      defines the campaign scope (e.g., by object type, category, approval state). The campaign uses
      the union of all specificities.

        ![Target Specificities](/images/identitymanager/saas/user-guide/administrate/access-certification/certification-campaign-scheduling/certifcampaign_targetspecificities_v602.webp)

        The campaign will target permissions that meet the **intersection (AND)** of all criteria.

        When listing role tags, roles with **any matching tag (OR)** will be included.

    - `Target Owners`: Filters based on identity attributes for those whose access is being
      reviewed. All filters are combined using **intersection (AND)** logic.

        ![Target Owner Filters](/images/identitymanager/saas/user-guide/administrate/access-certification/certification-campaign-scheduling/certifcampaign_targetowners_v602.webp)

        Additional filters may be available depending on the target entity type.

        ![Target Owner Additional Filters](/images/identitymanager/saas/user-guide/administrate/access-certification/certification-campaign-scheduling/certifcampaign_targetownersadditional_v603.webp)

        - `Individual Owner`: A single identity whose access is to be certified.
        - `Active Target`: Identities with a specific property (from `Directory_UserRecord`)
          modified since a given date.

            > Only properties not calculated by Identity Manager can be used to filter the target
            > owners of the certification campaign.

            > The following campaign targets all assigned single roles for two specific users:
            >
            > ![Campaign Example](/images/identitymanager/saas/user-guide/administrate/access-certification/certification-campaign-scheduling/certifcampaign_example_v602.webp)

3. Click **Create** to add the campaign to the list.

    ![Campaigns Page](/images/identitymanager/saas/user-guide/administrate/access-certification/certification-campaign-scheduling/certifcampaign_newlycreated_v603.webp)

4. Apply changes by clicking **Launch** to run the access certification job.

    The job's logs are available via the **Job Results** button.

    > Example:
    >
    > ![Execute Access Reviews Job](/images/identitymanager/saas/user-guide/administrate/access-certification/certification-campaign-scheduling/certifcampaign_job_v522.webp)

## Impact of Modifications

You may modify any field of a certification campaign before its start date. After it starts, only
the name, identifier, and end date can be changed. Campaigns can be deleted at any time.

## Verify Campaign Scheduling

To verify the process, check the **Access Certification Campaigns** page to confirm the campaign’s
parameters are correct.
