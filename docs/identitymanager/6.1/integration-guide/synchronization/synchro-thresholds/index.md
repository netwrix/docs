---
title: "Thresholds"
description: "Thresholds"
sidebar_position: 20
---

# Thresholds

Thresholds are essential safety guards controlling all changes, for example preventing the
overwriting of important data by mistake.

Thresholds are by default activated to warn users when synchronization or provisioning triggers too
many modifications. If the number of modifications exceeds the specified threshold, Usercube stops
the synchronization/provisioning and displays a warning on the log page.

Thresholds can be deactivated via the value `0`, though **they should not all be**. Each action must
be "guarded" by at least one threshold.

Once the changes have been reviewed,
[the blocked job can be resumed](/docs/identitymanager/6.1/user-guide/set-up/synchronization/index.md)
(or not).

As long as a synchronization job is blocked for a connector, the export, prepare-synchronization and
synchronization tasks of this connector are removed from incremental jobs. The synchronization is
unblocked as soon as the blocked job is resumed, or as soon as a job involving the connector is
launched in complete mode.

## Thresholds for Synchronization

Synchronization thresholds can be configured in XML files via:

- [entity type mappings](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/connectors/entitytypemapping/index.md)
  to count the number of resources impacted by synchronization inside a given entity type. They are
  configured with:

    | Absolute Threshold     | Relative Threshold           |
    | ---------------------- | ---------------------------- |
    | `MaximumDeletedLines`  | `MaxPercentageDeletedLines`  |
    | `MaximumInsertedLines` | `MaxPercentageInsertedLines` |
    | `MaximumUpdatedLines`  | `MaxPercentageUpdatedLines`  |

- [entity association mappings](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/connectors/entityassociationmapping/index.md)
  to count the number of navigation properties impacted by synchronization inside a given entity
  type. They are configured with:

    | Absolute Threshold         | Relative Threshold               |
    | -------------------------- | -------------------------------- |
    | `MaximumLinkDeletedLines`  | `MaxLinkPercentageDeletedLines`  |
    | `MaximumLinkInsertedLines` | `MaxLinkPercentageInsertedLines` |

- [connectors](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/connectors/connector/index.md)
  to count the number of resources and/or navigation properties impacted by synchronization inside
  all entity types of a given connector. They are configured with:

    | Absolute Threshold         | Relative Threshold               |
    | -------------------------- | -------------------------------- |
    | **Resources**              |                                  |
    | `MaximumDeletedLines`      | `MaxPercentageDeletedLines`      |
    | `MaximumInsertedLines`     | `MaxPercentageInsertedLines`     |
    | `MaximumUpdatedLines`      | `MaxPercentageUpdatedLines`      |
    | **Navigation Properties**  |                                  |
    | `MaximumLinkDeletedLines`  | `MaxLinkPercentageDeletedLines`  |
    | `MaximumLinkInsertedLines` | `MaxLinkPercentageInsertedLines` |

All thresholds are active. Therefore, the lowest threshold (according to the specific situation)
would be the first to stop synchronization.

For example, in a connector, the default values for thresholds are 100 modifications for resources
(`Maximum...Lines`) and 1000 modifications for navigation properties (`MaximumLink...Lines`).

If we launch synchronization for an entity type whose threshold values are lower than the
connector's, then Usercube blocks synchronization as soon as the number of modifications exceeds the
entity type's threshold values.

If the entity type's threshold values are higher than the connector's, then Usercube blocks
synchronization as soon as the number of modifications exceeds the connector's threshold values (100
resources or 1000 navigation properties).

Distinct
[thresholds are configurable for provisioning](/docs/identitymanager/6.1/integration-guide/provisioning/prov-thresholds/index.md).
