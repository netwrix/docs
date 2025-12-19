---
title: "Behavior Anomalies"
description: "Behavior Anomalies"
sidebar_position: 80
---

# Behavior Anomalies

Netwrix Auditor enables you to detect behavior anomalies in your IT environment, such as activity
surges or mass deletions of archived data. As you investigate suspicious activity and review
incidents, you can identify intruders or in-house bad actors who keep violating your company's
security policies.

The behavior anomalies assessment extends the alerting functionality and provides both a high-level
visualization and a detailed history of malicious user activity. While alerts notify you on a single
or repetitive action almost immediately, the Behavior Anomalies dashboard accumulates this data over
time and thus gives you the bird's eye view of activity patterns. With Behavior Anomalies, you can
step beyond individual actions and investigate more complicated user behavior scenarios that might
otherwise stay concealed for a long time.

On a high level, your behavior anomalies assessment workflow can be described as follows:

1. You create alerts on threat patterns specific to your company. You include these alerts in
   Behavior Anomalies assessment and associate a risk score with each alert. The score, that is
   between 1 and 100 points, reflects how critical the action is for your organization. See the
   [Create Alerts](/docs/auditor/10.6/admin/alertsettings/create/create.md) topic for
   information on how to set a risk score for an alert.

    Although Netwrix industry experts suggest risk scores for alerts that are provided
    out-of-the-box, you can easily tailor these scores to your organization needs and priorities.
    You can always adjust risk scores over time as you become more aware of behavior patterns and
    anomalous actions in your environment.

2. Each action that provokes an alert is treated as anomaly. Once the anomaly is detected, it
   appears on a dashboard's timeline and its risk score is added to the user's total score.
3. Every now and then, you review the Behavior Anomalies dashboard—the risk score timeline with
   anomaly surges, and the most active users. The general rule of thumb is: the more risk score
   points the user has the more he or she merits your attention.
   [Review Behavior Anomalies Dashboard](/docs/auditor/10.6/admin/behavioranomalies/dashboard.md)
4. To learn more about user activity, you can drill-down to a user profile to review all alerts
   provoked by this user. As you review anomalies and mitigate risks, the user's total score
   reduces.
   [Review User Profiles and Process Anomalies](/docs/auditor/10.6/admin/behavioranomalies/userprofile.md)

The purpose of the dashboard is to keep risks low and help you spot and address issues as they
occur. The risk score assigned to a user does not qualify him or her as a bad actor but rather
brings your attention to behavior patterns. Depending on the role in your organization, users might
have different safe levels while you should make your priority to review the anomalies on time, stay
focused, and proactively mitigate risks.

[ Using Behavior Anomaly Discovery](https://www.netwrix.com/using_behavior_anomaly_discovery.html)
page on Netwrix website.
