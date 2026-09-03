---
title: "Behavior Anomalies"
description: "Behavior Anomalies"
sidebar_position: 80
---

# Behavior Anomalies

Use Netwrix Auditor to detect behavior anomalies in your IT environment, such as activity
surges or mass deletions of archived data. As you investigate suspicious activity and review
incidents, you can identify intruders or in-house bad actors who keep violating your company's
security policies.

The behavior anomalies assessment extends the alerting functionality and provides both a high-level
visualization and a detailed history of malicious user activity. While alerts notify you of a single
or repetitive action almost immediately, the Behavior Anomalies dashboard accumulates this data over
time and gives you a broad view of activity patterns. With Behavior Anomalies, you can go beyond
individual actions and investigate more complicated user behavior scenarios that might otherwise
stay concealed for a long time.

At a high level, your behavior anomalies assessment workflow works like this:

1. You create alerts on threat patterns specific to your company. You include these alerts in
   Behavior Anomalies assessment and associate a risk score with each alert. The score, which is
   between 1 and 100 points, reflects how critical the action is for your organization. See the
   [Risk Score](/docs/auditor/10.9/admin/alertsettings/create/create.md) topic for information on
   how to set a risk score for an alert.

    Although Netwrix industry experts suggest risk scores for predefined alerts, you can tailor
    these scores to your organization's needs and priorities. You can always adjust risk scores
    over time as you become more aware of behavior patterns and anomalous actions in your
    environment.

2. Auditor treats each action that provokes an alert as an anomaly. After Auditor detects the
   anomaly, it appears on the dashboard's timeline, and Auditor adds its risk score to the user's
   total score.
3. Periodically review the Behavior Anomalies dashboard—the risk score timeline with anomaly
   surges, and the most active users. In general, the more risk score points a user has, the more
   attention that user merits. See the
   [Review Behavior Anomalies Dashboard](/docs/auditor/10.9/admin/behavioranomalies/dashboard.md)
   topic for more information.
4. To investigate user activity further, open a user profile to review all alerts provoked by this
   user. As you review anomalies and mitigate risks, the user's total score decreases. See the
   [Review User Profiles and Process Anomalies](/docs/auditor/10.9/admin/behavioranomalies/userprofile.md)
   topic for more information.

The purpose of the dashboard is to keep risks low and help you spot and address issues as they
occur. The risk score assigned to a user doesn't qualify the user as a bad actor but rather brings
your attention to behavior patterns. Depending on the role in your organization, users might have
different acceptable risk levels. Prioritize reviewing anomalies promptly, staying focused, and
proactively mitigating risks.

For more information, see the
[Using Behavior Anomaly Discovery](https://www.netwrix.com/using_behavior_anomaly_discovery.html)
page on the Netwrix website.
