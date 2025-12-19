---
title: "Set Notifications' Languages"
description: "Set Notifications' Languages"
sidebar_position: 20
---

# Set Notifications' Languages

This guide shows how to set the language for all notifications.

## Overview

Usercube sends all kinds of notification emails whose language is by default the language specified
in the configuration as the first language.

The language can also be configured explicitly with a language code. If this language code is not
defined, then notifications use the first language.

## Set the First Language

Set the first language for the whole application by proceeding as follows:

1. In the XML configuration, create a `Language` with `IndicatorNumber` set to `1`.
   [See more details on `Language`](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/metadata/language/index.md).

    > For example, to set English as the first language:
    >
    > ```
    >
    > <Language Code="en-US" IndicatorNumber="1" />
    >
    > ```

2. Deploy the configuration and relaunch the server.

## Set the Language Explicitly

Set the language explicitly for server-side-task notifications by proceeding as follows:

1. In the XML configuration, configure `MailSetting` with a `LanguageCode`.
   [See more details on `MailSetting`](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/metadata/settings/mailsetting/index.md).

    > For example, to set the language to English:
    >
    > ```
    >
    > <MailSetting MailProperty="Directory_User:Email" LanguageCode="en-US" />
    >
    > ```

    When `LanguageCode` is not defined, then the language of notifications will be the first
    language, i.e. the one specified with `Indicator` set to `1`.

2. Deploy the configuration and relaunch the server.
