---
description: >-
  Describes the license plans introduced in Netwrix Auditor 9.9, the feature
  matrix for Business Essentials and Enterprise Advanced, and the effects of
  downgrading from Enterprise Advanced (or Free Trial) to Business Essentials.
keywords:
  - Netwrix Auditor
  - license
  - licensing
  - plans
  - feature matrix
  - downgrade
  - Enterprise Advanced
  - Business Essentials
products:
  - auditor
sidebar_label: Netwrix Auditor Licenses and Plans
tags: []
title: "Netwrix Auditor Licenses and Plans"
knowledge_article_id: kA00g000000PbcgCAC
---

# Netwrix Auditor Licenses and Plans

In version 9.9, Netwrix Auditor introduces new commercial license plans:

1. Business Essentials
2. Enterprise Advanced

Also, there are 2 free plans:

1. Netwrix Auditor Free Community Plan
2. Netwrix Auditor Free Trial – a trial license that supports the richest set of features (same as the Enterprise Advanced commercial license).

## Feature Matrix

The table below explains what features are supported in the different commercial plans.

| Feature set                         | Feature/Characteristics                                 | Business Essentials | Enterprise Advanced |
|-------------------------------------|--------------------------------------------------------|---------------------|---------------------|
| Integration API                     | Available                                              | -                   | +                   |
| Interactive search                  | User account details included                          | -                   | +                   |
| Risk Assessment                     | Reports on all risks                                   | -                   | +                   |
| Behavior Anomalies Dashboards       | Available                                              | -                   | +                   |
| Roles based access control          | Available                                              | -                   | +                   |
| Activity Summary                    | # of recipients                                        | limited             | unlimited           |
| Alerting                            | Tags                                                   | -                   | +                   |
| Alerting                            | Response action                                        | -                   | +                   |
| Alerting                            | # of recipients                                        | limited             | unlimited           |
| Subscriptions                       | # of recipients                                        | limited             | unlimited           |

## License Plan Downgrade

This section describes changes that will affect your Netwrix Auditor deployment when you switch from Enterprise Advanced to Business Essentials, i.e. downgrade the feature set. NOTE: Switching from the Free Trial license is the same as from the Enterprise Advanced license.

### Enterprise Advanced (or Free Trial) -> Business Essentials

1. Response Action for all alerts will be disabled from this time forward.
2. User Behavior Anomalies dashboard will become unavailable.
3. Risk Score for alerts will be disabled from this time forward.
4. Risk Assessment will become unavailable (Risk Assessment overview dashboard no longer displayed, subscriptions to Risk Assessment results will be disabled from this time forward.)
5. All custom delegation settings will be reset to the initial default state (as right after the installation). Role-based access control settings will not be available for modification.
6. Alert tags will be no longer displayed; search by tag will become unavailable.
7. Netwrix API will become unavailable.
8. If you have configured more than 2 unique recipients for all enabled alerts (in total), then all alerts will be disabled. From that point forward, no more than 2 unique recipients (in total) can be configured for all enabled alerts.
9. If you have configured more than 2 unique recipients for all enabled subscriptions (in total), then all subscriptions will be disabled. From that point forward, no more than 2 unique recipients (in total) can be configured for all enabled subscriptions.
10. If you have configured more than 2 unique Activity Summary recipients for all monitoring plans, then all recipients will be deleted from all monitoring plans. From that point forward, no more than 2 unique recipients (in total) can be configured for all monitoring plans. **Important!** This setting will take effect immediately after you apply for the new license. Thus, it is strongly recommended to check the total number of recipients.
