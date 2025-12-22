---
title: "Customize a Native Notification"
description: "Customize a Native Notification"
sidebar_position: 10
---

# Customize a Native Notification

This guide shows how to set a template other than the default one for native notifications.

## Overview

Usercube natively sends notifications for usual cases.
[See more details](/docs/identitymanager/6.1/integration-guide/notifications/native/index.md).

These native notifications are based on cshtml templates available inside the `Runtime` folder. If
the provided templates do not meet your exact needs, then they can be replaced by personalized
templates.

## Customize a Native Notification

Customize a native notification by proceeding as follows:

1. Among the
   [list of all native notifications](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/notifications/notificationtemplate/index.md),
   get the identifier of the notification whose templates are to be replaced.

    > For example, to customize the notification for one-way password reset: `OneWayPasswordReset`.

2. In `Runtime/NotificationTemplates`, copy to the configuration folder the cshtml template(s)
   associated to the notification that need to be overridden.

    > For example, we can copy the template for the email's body but keep the provided template for
    > the subject. Then we have: `Conf/Templates/MyOneWayPasswordReset.cshtml`.
    >
    > Let's say that we also need to customize the email's subject in French which is the language
    > 2: `Conf/Templates/MyOneWayPasswordReset_Subject.fr.cshtml`

3. Customize the template(s) previously copied to the configuration folder.
4. Configure an XML element
   [`NotificationTemplate`](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/notifications/notificationtemplate/index.md)
   with the identifier collected at step 1, and the relative path(s) to the customized template(s).

    > For example:
    >
    > ```
    >
    > <NotificationTemplate Identifier="OneWayPasswordReset" BodyTemplate_L1="./Templates/MyOneWayPasswordReset.cshtml" SubjectTemplate_L2="./Templates/MyOneWayPasswordReset_Subject.fr.cshtml" />
    >
    > ```
