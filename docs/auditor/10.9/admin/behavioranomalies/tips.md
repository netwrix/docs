---
title: "Behavior Anomalies Assessment Tips and Tricks"
description: "Behavior Anomalies Assessment Tips and Tricks"
sidebar_position: 30
---

# Behavior Anomalies Assessment Tips and Tricks

This topic contains various frequently asked questions as well as tips and tricks you might find
helpful when configuring scoring settings and reviewing behavior anomalies.

- The user has a high score and keeps provoking the same alerts almost every day.

    Go to the user profile and then click Show user activity. Review the user's actions and
    compare them to the user's job responsibilities. Does the user seem trustworthy? Are there any
    rights elevation or suspicious access attempts?

    Try to review the user's tasks—you may find out that the anomaly the user keeps provoking is a
    genuine part of the user's daily routine. For example, office staff shouldn't reset passwords
    for other accounts, although this is a basic task for a system administrator. In this case,
    review your alert settings and exclude the user from the alert filters.

- Everyone in the organization has a huge score

    You may have configured too many alerts, which makes behavior anomalies assessment difficult to
    manage. It takes some time to learn what matters most to your organization and get accustomed to
    setting proper risk scores. Review your scoring settings regularly and adjust them when
    necessary.

- Is anyone who is in charge of a "Failed..." anomaly a bad actor?

    Anyone can forget a password or accidentally try to access data in the wrong folder. Such users
    aren't subject to immediate prosecution unless they provoke repetitive alerts. The best practice
    is to review the user profile after some time and check if there are any threat patterns in user
    behavior.
