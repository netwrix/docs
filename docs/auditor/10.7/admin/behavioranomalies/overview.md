---
title: "Behavior Anomalies"
description: "Behavior Anomalies"
sidebar_position: 80
---

# Behavior Anomalies

Use Netwrix Auditor to detect behavior anomalies in your IT environment, such as activity surges or mass deletions of archived data. As you investigate suspicious activity and review incidents, you can identify intruders or in-house bad actors who violate your company's security policies.

The behavior anomalies assessment extends the alerting functionality and provides both a high-level
visualization and a detailed history of malicious user activity. While alerts notify you on a single
or repetitive action almost immediately, the Behavior Anomalies dashboard accumulates this data over
time and thus gives you the bird's eye view of activity patterns. With Behavior Anomalies, you can
step beyond individual actions and investigate more complicated user behavior scenarios that might
otherwise stay concealed for a long time.

On a high level, your behavior anomalies assessment workflow can be described as follows:

1. You create alerts on threat patterns specific to your company. You include these alerts in
   Behavior Anomalies assessment and associate a risk score with each alert. The score, that is
   between 1 and 100 points, reflects how critical the action is for your organization.
   [Risk Score](/docs/auditor/10.7/admin/alertsettings/create/create.md)how to set a risk score for an alert.

    Although Netwrix industry experts suggest risk scores for default alerts, you can easily tailor these scores to your organization's needs and priorities. You can adjust risk scores over time as you become more aware of behavior patterns and anomalous actions in your environment.

2. Each action that provokes an alert is treated as an anomaly. When the anomaly is detected, it appears on the dashboard timeline and its risk score is added to the user's total score.

3. Regularly review the Behavior Anomalies dashboard—the risk score timeline with anomaly surges and the most active users. The more risk score points a user has, the more attention they merit.
   [Review Behavior Anomalies Dashboard](/docs/auditor/10.7/admin/behavioranomalies/dashboard.md)
4. View details of a user's activity by opening their profile to review all alerts they triggered. As you review anomalies and mitigate risks, the user's total score decreases. [Review User Profiles and Process Anomalies](/docs/auditor/10.7/admin/behavioranomalies/userprofile.md)

The purpose of the dashboard is to keep risks low and help you spot and address issues as they
occur. The risk score assigned to a user doesn't qualify him or her as a bad actor but rather
brings your attention to behavior patterns. Depending on the role in your organization, users might
have different safe levels while you should make your priority to review the anomalies on time, stay
focused, and proactively mitigate risks.

[ Using Behavior Anomaly Discovery](https://www.netwrix.com/using_behavior_anomaly_discovery.html)
page on Netwrix website.
