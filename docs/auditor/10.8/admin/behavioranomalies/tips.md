---
title: "Behavior Anomalies Assessment Tips and Tricks"
description: "Behavior Anomalies Assessment Tips and Tricks"
sidebar_position: 30
---

# Behavior Anomalies Assessment Tips and Tricks

This topic contains various frequently asked questions as well as tips and tricks you might find
helpful when configuring scoring settings and reviewing behavior anomalies.

- The user has a high score and keeps provoking same alerts almost every day.

    Drill-down to the user profile and then click Show user activity. Review user actions and
    compare them to his or her job responsibilities. Does the user seem trustworthy? Are there any
    rights elevation or suspicious access attempts?

    Try to review user tasks—you may find out that the anomaly the user keeps provoking is a genuine
    part of his or her daily routine. For example, the office staff should not reset passwords for
    other accounts while this is a basic task for a system administrator. In this case, review your
    alert settings and exclude the user from the alert filters.

- Everyone in organization has a huge score

    Probably, you have configured too many alerts that turn behavior anomalies assessment into mess.
    It takes some time to learn what matters most to your organization and get accustomed to setting
    proper risk scores. Try to review your scoring settings regularly and adjust them when
    necessary.

- Is anyone who is charge of "Failed..." anomaly a bad actor?

    Anyone can forget a password or accidentally try to access some data in a wrong folder. Such
    users are not subject to immediate prosecution unless they do not provoke repetitive alerts. The
    best practice is to review user profile after some time and check if there are any threat
    patterns in user behavior.
