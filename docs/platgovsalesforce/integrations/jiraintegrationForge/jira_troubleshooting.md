---
title: "Jira Integration Troubleshooting"
description: "Jira Integration Troubleshooting"
sidebar_position: 50
---

# Jira Integration Troubleshooting

Jira Integration errors

## Error with Jira Credentials

Error message:

_Verify your Jira Credentials. Go to_ **Netwrix Dashboard** _>_ **Configurations and Stats**
_>_ **Jira Configuration** _>_ **Credentials**

Solution:

See [Credentials](/docs/platgovsalesforce/installingstrongpoint/config_and_stats.md#credentials) for
information on entering your credentials.

## Error with Mapping Jira Statuses

Error message:

_Verify your Jira Credentials. Go to_ **Netwrix Dashboard** _>_ **Configurations and Stats**
_>_ **Jira Configuration** _->_ **Status Mapping**

Solution:

See [Status Mapping](/docs/platgovsalesforce/installingstrongpoint/config_and_stats.md#status-mapping) for
information on mapping your statuses.

## Error with Salesforce Credentials

Error message:

Verify Your User Credentials: It may be an Invalid username, wrong password, or invalid
security token.

If you are using Salesforce Authenticator, update it to the most recent Six-digit code.

Or verify that the user isn't locked.

Solution:

Check the user's information in Salesforce.

## Error with Connected App Key

Error message:

error=invalid_client_id&error_description=client%20identifier%20invalid

See [Access Data with API Integration](/docs/platgovsalesforce/integrations/jiraintegration/jira_integration.md) for
information on setting up the connected app.

## Error with Consumer Secret

Error message:

Verify the Consumers Secret from the Connected App.

Solution:

See [Credentials](/docs/platgovsalesforce/installingstrongpoint/config_and_stats.md#credentials) for
information on entering your credentials

## URL Errors

Error message:

error=redirect_uri_mismatch

Solution:

See [Connected App](jira_walkthrough_example.md#connected-app) for
information on setting up the connected app.
