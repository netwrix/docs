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

Here, you will learn how to create and schedule a certification campaign, defining its scope, via
the filters specifying the reviewers and items to be reviewed.

## Participants and Artifacts

This operation should be performed in cooperation with the staff in charge of auditing because they
know what entitlements need to be reviewed.

| Input                                                                                                                                                                                                                                                                                                                                                          | Output                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [Identity repository](/docs/identitymanager/6.1/user-guide/set-up/initial-identities-loading/index.md) (required) [Role catalog](/docs/identitymanager/6.1/user-guide/set-up/single-roles-catalog-creation/index.md) (optional) [Risks](/docs/identitymanager/6.1/user-guide/optimize/risk-management/index.md) (optional) | Scheduled certification campaign(s) |

## Create a Certification Campaign

Create an access certification campaign by proceeding as follows:

1.  Click on **Access Certification Campaigns** in the **Administration** section on the home page.

    ![Home - Access Certification Campaigns](/images/identitymanager/6.1/user-guide/administrate/access-certification/certification-campaign-scheduling/home_accesscertificationcampaigns_v602.webp)

2.  Click on the addition button at the top right and fill in the fields.

    ![Addition Icon](/images/identitymanager/6.1/user-guide/set-up/categorization/classification/iconadd_v602.svg)

    ![New Certification Campaign](/images/identitymanager/6.1/user-guide/administrate/access-certification/certification-campaign-scheduling/certifcampaign_newcertificationcampaign_v602.webp)

    - `Identifier`: must be unique among certification campaigns and without any whitespace.
    - `Name`: will be displayed in the UI to identify the campaign.
    - `Start Date`: date for the campaign beginning and display on the reviewers' **Access
      Certification** screen. The access reviewed during the campaign are those existing at the
      start date. Any change in the permissions after the start date won't be reviewed in the
      campaign.
    - `End Date`: date for the campaign deadline.
    - `Target Entity Type`: entity type targeted by the campaign.
    - `Target Reviewers`: set of identities in charge of the access review. Available target
      reviewers are configured via
      [certification policies](/docs/identitymanager/6.1/integration-guide/governance/accesscertification/index.md).
    - `Target Specificities`:
      [data filters](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/access-certification/accesscertificationdatafilter/index.md)
      that specify the campaign scope, i.e. the permissions to include by object type, category,
      approval state, etc. A campaign is based on the union of all specificities. See the detailed
      fields below.

        ![Target Specificities](/images/identitymanager/6.1/user-guide/administrate/access-certification/certification-campaign-scheduling/certifcampaign_targetspecificities_v602.webp)

        The certification campaign will target the permissions that meet the intersection (AND) of
        all criteria.

        When giving a list of role tags, the targeted roles will be those having at least one of the
        tags (OR).

    - `Target Owners`:
      [owner filters](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/access-certification/accesscertificationownerfilter/index.md)
      on the dimensions of the identities that are subject to the certification campaign. A campaign
      is based on the intersection of all filters. See the detailed fields below.

        ![Target Owner Filters](/images/identitymanager/6.1/user-guide/administrate/access-certification/certification-campaign-scheduling/certifcampaign_targetowners_v602.webp)

        According to the target entity type, additional filters can be available.

        ![Target Owner Additional Filters](/images/identitymanager/6.1/user-guide/administrate/access-certification/certification-campaign-scheduling/certifcampaign_targetownersadditional_v603.webp)

        - `Individual Owner`: single identity whose accesses are to be certified by the campaign.
        - `Active Target`: the identities to be certified will be those for which a given property
          (here from `Directory_UserRecord`) was modified since a given date.

                        Only properties that are not calculated by Usercube can be used here to filter the target owners of the certification campaign.

            > The following campaign creates certification orders aimed at all the assigned single
            > roles of two specific users.
            >
            > ![Campaign Example](/images/identitymanager/6.1/user-guide/administrate/access-certification/certification-campaign-scheduling/certifcampaign_example_v602.webp)

3.  Click on **Create** and see a line added on the campaigns page.

    ![Campaigns Page](/images/identitymanager/6.1/user-guide/administrate/access-certification/certification-campaign-scheduling/certifcampaign_newlycreated_v603.webp)

4.  Apply the changes by clicking on **Launch**, thus running the
    [access certification job](/docs/identitymanager/6.1/integration-guide/governance/accesscertification/index.md).

    This job's logs are accessible from the **Job Results** button.

    > For example:
    >
    > ![Execute Access Reviews Job](/images/identitymanager/6.1/user-guide/administrate/access-certification/certification-campaign-scheduling/certifcampaign_job_v522.webp)

## Impact of Modifications

Any field of a certification campaign can be changed before its start date. Once a given
certification campaign has started, it is possible to modify only its name, identifier and end date.
It can be deleted at any time.

## Verify Campaign Scheduling

In order to verify the process, check on the **Access Certification Campaigns** page that the
created certification campaign has the right parameters.
