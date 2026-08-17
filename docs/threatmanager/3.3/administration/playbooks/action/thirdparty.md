---
title: "Third-Party Applications Target Actions"
description: "Third-Party Applications Target Actions"
sidebar_position: 50
---

# Third-Party Applications Target Actions

The following actions target third-party applications.

## Create ServiceNow Incident

This action creates an incident in ServiceNow®.

![createservicenow](/images/threatmanager/3.0/administration/playbooks/action/createservicenow.webp)

- Instance – Specify the ServiceNow instance. Enter only a name; Threat Manager automatically
  applies the .servicenow.com instance. For example, entering "company" becomes
  company.servicenow.com.
- Message – Specify the optional message to display
- Password – Specify the password for the ServiceNow instance
- Username – Specify the ServiceNow username

## Duo Authentication Push

This action sends an authentication push to the Duo API.

![duoauthenticationpush](/images/threatmanager/3.0/administration/playbooks/action/duoauthenticationpush.webp)

- Users – Select the users to authenticate. If you don't specify any, Threat Manager uses the user
  who triggered the threat.
- Admin Integration Key – Specify the Duo Admin integration key
- Admin Secret Key – Specify the Duo Admin secret key
- Admin API Hostname – Specify the Duo Admin API hostname
- Auth API Integration Key – Specify the Duo Auth integration key
- Auth API Secret Key – Specify the Duo Auth API secret key
- Auth API Hostname – Specify the Duo Auth API hostname
- Prompt Title – Specify the Duo Prompt title. If you don't specify one, Threat Manager uses a
  default title.
- Push Information – Specify the Duo Push information. If you don't specify any, Threat Manager uses
  default threat information.
- Fail On – Select the response on which to fail the action step. If you don't specify one, the step
  fails on "Deny". Select an option from the following:

    - Allow
    - Deny

- User Alias – Select the alias of the user to authorize. If you don't specify one, Threat Manager
  uses the user's Activity Monitor Account Name. Select an option from the following:

    - Display Name
    - SAM Account Name

## Microsoft Teams

This action posts to a Microsoft Teams channel.

![microsoftteams](/images/threatmanager/3.0/administration/playbooks/action/microsoftteams.webp)

- Message – Specify the optional message to display
- URI – Specify the URI for the Microsoft Teams incoming webhook

## RADIUS Authentication

This action uses RADIUS profiles to authenticate user activity.

![radiusauthentication](/images/threatmanager/3.0/administration/playbooks/action/radiusauthentication.webp)

- User Not Found Behavior – Select how to handle a user not configured for RADIUS authentication. If
  you don't specify one, the authentication fails.
- Method – Specify the RADIUS authentication method value required by the authentication provider.
  This value will vary depending upon vendor. Example values may include: push, SMS, or phone.
- Users – Select the users to authenticate. If you don't specify any, Threat Manager uses the
  perpetrator.
- Timeout Behavior – Select how to handle a timeout. If you don't specify one, the authentication
  fails.
- Fail On – Select which authentication type to fail on. This allows configuration to determine when
  the action step fails. This is based upon the user response to the RADIUS Authentication request.
  If you don't specify one, the action step fails with a failed authentication.

## Send Syslog

This action sends a Syslog message to a server. This action uses the current SIEM settings,
specified on the [Integrations Interface](/docs/threatmanager/3.3/administration/configuration/integrations/overview.md), to send the
threat information via Syslog.

![sendsyslog](/images/threatmanager/3.0/administration/playbooks/action/sendsyslog.webp)

## Set Forescout Property On Host

This action adds a property to a Forescout host record. You can configure Forescout collections to
monitor this property. This lets Threat Manager integrate with the Forescout platform and use
Forescout capabilities for threat response.

![forescoutproperty](/images/threatmanager/3.0/administration/playbooks/action/forescoutproperty.webp)

- Forescout Server IP – The IP address of the Forescout server
- Forescout Property String – The value of the Forescout property string to add to the host
  associated with the Target IP
- Target IP – The resource IP address that identifies the host in Forescout. The
  default is Host.
- Forescout Password – Password for the Forescout server

## Slack

This action sends a message to Slack.

![slack](/images/threatmanager/3.0/administration/playbooks/action/slack.webp)

- Message – The optional message to display
- URI – The URI for the Slack incoming webhook

## Twilio SMS Message

This action sends an SMS message through Twilio.

![twiliosms](/images/threatmanager/3.0/administration/playbooks/action/twiliosms.webp)

- To – The phone number receiving threat notifications. Include the country code.
- SID – The Twilio SID
- Twilio Number – The phone number provided by Twilio
- Token – The Twilio token
- Message – The optional custom SMS message to send. If you don't specify a message, Threat Manager
  sends a default SMS message.

## VirusTotal Report

This action scans the file hashes against the VirusTotal API and emails the results.

![virustotalreport](/images/threatmanager/3.0/administration/playbooks/action/virustotalreport.webp)

- Subject – The optional custom email subject. If you don't specify a subject, Threat Manager uses
  a default email subject.
- Key – The key provided by VirusTotal
- To – The email addresses receiving the email

## Webhook

This action executes a webhook via a HTTP request from Threat Manager. A variety of web applications use webhooks
to trigger actions or receive data from external sources.

![webhook](/images/threatmanager/3.0/administration/playbooks/action/webhook.webp)

- Method – The HTTP method for the webhook. Select a method from the dropdown list:
    - GET
    - POST
    - DELETE
    - PUT
- URI – The URI for the webhook
- Body – The body of the HTTP request for the webhook
