---
sidebar_position: 2491
title: Third-Party Applications Target Actions
---

# Third-Party Applications Target Actions

The following actions target third-party applications.

## Create ServiceNow Incident

This action creates an incident in ServiceNow®.

![](../../../../../../../static/images/ThreatManager_3.0/Content/Resources/Images/ThreatManager/Admin/Playbooks/Action/CreateServiceNow.png)

* Instance – Specify the ServiceNow instance. Only enter a name and the .servicenow.com instance is automatically applied. For example, entering "company" will automatically become company.servicenow.com.
* Message – Specify the optional message to display
* Password – Specify the password for the ServiceNow instance
* Username – Specify the ServiceNow username

## Duo Authentication Push

This action sends an authentication push to the Duo API.

![](../../../../../../../static/images/ThreatManager_3.0/Content/Resources/Images/ThreatManager/Admin/Playbooks/Action/DuoAuthenticationPush.png)

* Users – Select the users to authenticate. If not specified, the user who triggered the threat will be used.
* Admin Integration Key – Specify the Duo Admin integration key
* Admin Secret Key – Specify the Duo Admin secret key
* Admin API Hostname – Specify the Duo Admin API hostname
* Auth API Integration Key – Specify the Duo Auth integration key
* Auth API Secret Key – Specify the Duo Auth API secret key
* Auth API Hostname – Specify the Duo Auth API hostname
* Prompt Title – Specify the Duo Prompt title. If not specified, a default title will be used.
* Push Information – Specify the Duo Push information. If not specified, default threat information will be used.
* Fail On – Select the response on which to fail the action step. If not specified, the step will fail on "Deny". Select an option from the following:

  * Allow
  * Deny
* User Alias – Select the alias of the user to authorize. If not specified, the user's Activity Monitor Account Name will be used. Select an option from the following:

  * Display Name
  * SAM Account Name

## Microsoft Teams

This action posts to a Microsoft Teams channel.

![](../../../../../../../static/images/ThreatManager_3.0/Content/Resources/Images/ThreatManager/Admin/Playbooks/Action/MicrosoftTeams.png)

* Message – Specify the optional message to display
* URI – Specify the URI for the Microsoft Teams incoming webhook

## RADIUS Authentication

This action utilizes RADIUS profiles to authenticate user activity.

![](../../../../../../../static/images/ThreatManager_3.0/Content/Resources/Images/ThreatManager/Admin/Playbooks/Action/RADIUSAuthentication.png)

* User Not Found Behavior – Select how to handle a user not configured for RADIUS authentication. If not specified, the authentication will fail.
* Method – Specify the RADIUS authentication method value required by the authentication provider. This value will vary depending upon vendor. Example values may include: push, SMS, or phone.
* Users – Select the users to authenticate. If not specified, the perpetrator will be used.
* Timeout Behavior – Select how to handle a timeout. If not specified, the authentication will fail.
* Fail On – Select which authentication type to fail on. This allows configuration to determine when the action step fails. This is based upon the user response to the RADIUS Authentication request. If not specified, the action step will fail with a failed authentication.

## Send Syslog

This action sends a Syslog message to a server. This action utilizes the current SIEM settings, specified on the [Integrations Interface](../../Configuration/Integrations/Overview "Integrations Interface"), to send the threat information via Syslog.

![](../../../../../../../static/images/ThreatManager_3.0/Content/Resources/Images/ThreatManager/Admin/Playbooks/Action/SendSyslog.png)

## Set Forescout Property On Host

This action adds a property to a Forescout host record. Forescout collections can be configured to monitor this property. This allows Threat Manager to integrate with the Forescout platform to enable the use of the capabilities of Forescout for threat response.

![](../../../../../../../static/images/ThreatManager_3.0/Content/Resources/Images/ThreatManager/Admin/Playbooks/Action/ForescoutProperty.png)

* Forescout Server IP – The IP address of the Forescout server
* Forescout Property String – The value of the Forescout property string to be added to the host associated with the Target IP
* Target IP – The resource IP address that will be used to identify the host in Forescout. The default is Host.
* Forescout Password – Password for the Forescout server

## Slack

This action sends a message to Slack.

![](../../../../../../../static/images/ThreatManager_3.0/Content/Resources/Images/ThreatManager/Admin/Playbooks/Action/Slack.png)

* Message – The optional message to display
* URI – The URI for the Slack incoming webhook

## Twilio SMS Message

This action sends an SMS message through Twilio.

![](../../../../../../../static/images/ThreatManager_3.0/Content/Resources/Images/ThreatManager/Admin/Playbooks/Action/TwilioSMS.png)

* To – The phone number receiving threat notifications. Include the country code.
* SID – The Twilio SID
* Twilio Number – The phone number provided by Twilio
* Token – The Twilio token
* Message – The optional custom SMS message to send. If a message is not specified, a default SMS message will be sent.

## VirusTotal Report

This action scans the file hashes against the VirusTotal API and emails the results.

![](../../../../../../../static/images/ThreatManager_3.0/Content/Resources/Images/ThreatManager/Admin/Playbooks/Action/VirusTotalReport.png)

* Subject – The optional custom email subject. If a subject is not specified, a default email subject will be used.
* Key – The key provided by VirusTotal
* To – The email addresses receiving the email

## Webhook

This action executes a webhook via a HTTP request from Threat Manager. Webhooks are used by a variety of web applications to trigger actions or receive data from external sources.

![](../../../../../../../static/images/ThreatManager_3.0/Content/Resources/Images/ThreatManager/Admin/Playbooks/Action/Webhook.png)

* Method – The HTTP method for the webhook. Select a method from the drop-down list:
  * GET
  * POST
  * DELETE
  * PUT
* URI – The URI for the webhook
* Body – The body of the HTTP request for the webhook