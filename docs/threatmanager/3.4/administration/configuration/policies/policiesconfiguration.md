---
title: "Policy Configuration"
description: "Policy Configuration"
sidebar_position: 10
---

# Policy Configuration

The Policy Details page displays information about the Honeytoken configuration.

:::note
To enable policies for Honeytokens, configure the settings on the Configuration
tab.
:::


![detailspage](/images/threatmanager/3.0/administration/configuration/policies/detailspage.webp)

The Policies box displays the name of the Honeytoken policy. The Policy Information box displays the
Honeytoken policy and a description if specified. Click the Edit button to change the name of the
Honeytoken policy. If you change the policy name, click the Save button to save the new name. Click
the Delete button to delete the Honeytoken policy.

The Tabs box contains the following tabs:

- Configuration Tab
- Hosts Tab
- Deployment Tab
- History Tab

## Configuration Tab

The Configuration tab provides information on the selected policy for a Honeytoken.

![configurationtab](/images/threatmanager/3.0/administration/configuration/policies/configurationtab.webp)

The Configuration tab contains the following configuration options:

- Enabled – This option defaults to ON (enabled). Click the checkmark to set to OFF or
  disabled.
- Token Username – The username that the Honeytoken deployment process and threat
  detection use. This is a static username that Threat Manager uses for all deployments for this policy.

    :::note
    You can change the token username after deployment, but Threat Manager no longer detects tokens under the previous
    username.
    :::


    :::info
    Don't change the username of a Honeytoken after a successful deployment of
    the token to a host.
    :::


- Token Password – Specify a password string for the Honeytoken deployment to use. Passwords
  require at minimum one wildcard character. Use '@' to specify random letters and '#" to specify
  random numbers.

    :::note
    If the Honeytoken script can't reach the Threat Manager URL, Threat Manager deploys the Honeytoken
    but doesn't know the Honeytoken deployment status.
    :::


- Threat Manager URL – Specify the Threat Manager address the Honeytoken script uses to
  communicate with Threat Manager. Honeytoken hosts must be able to communicate via HTTP REST to
  this address to report Honeytoken deployment status
- Token Domain – The domain for the deployed Honeytoken. You can select an existing, known domain or specify a custom domain.
- Select Credential Profile – Lists Credential Profiles added on the
  [Integrations Interface](/docs/threatmanager/3.4/administration/configuration/integrations/overview.md). Select a Credential Profile from the
  dropdown list.
- Select Preferred Action Service – Select the Action Service for Honeytoken deployment.
- Token Time to Reset Password – All Honeytokens for a policy share a common password. This value
  specifies how frequently Threat Manager generates a new password for the Honeytoken policy. Select a
  value using the dropdown menu from the following options:
    - 1 Day
    - 7 Days
    - 14 Days
    - 30 Days
    - 90 Days
- Test Policy Button – Click the Test Policy button to run an LDAP query for the token username
  specified. This generates an event that an Active Directory monitoring agent detects and sends to Threat Manager. If Threat Manager receives the event within three minutes, the
  button displays Test Succeeded.

    :::note
    If you use Threat Prevention for Active Directory event monitoring, then you must
    enable and configure an LDAP monitoring policy to capture LDAP events for Honeytoken users for
    the test to be successful. See the
    [Netwrix Threat Prevention Documentation](https://helpcenter.netwrix.com/category/threatprevention)
    for additional information. If you use Activity Monitor for Active Directory event monitoring,
    then configure the LDAP Monitor tab in the AD Monitoring Configuration Window to
    capture LDAP events for Honeytoken users for the test to be successful. See the
    [Netwrix Activity Monitor Documentation](https://helpcenter.netwrix.com/category/activitymonitor)
    for additional information.
    :::


:::info
Use the Copy LDAP Filter button to ensure that you configure the LDAP Filter Policy string
properly to capture LDAP events for the Honeytoken policy.
:::


- Copy LDAP Filter Button – Clicking the Copy LDAP Filter button will automatically copy to the
  clipboard the exact string that Activity Monitor or Threat Prevention requires to configure
  the LDAP events for this Honeytoken. Paste the copied string into the LDAP filter
  policy settings for Activity Monitor or Threat Prevention.

    :::note
    This is a required configuration to detect LDAP-based Honeytoken threats.
    :::


Click Save to update the policy settings. After you save, Threat Manager detects threats for this Honeytoken user.

## Hosts Tab

The Hosts tab provides information on hosts that have policies deployed. The Hosts tab displays the
following information:

![This screenshot displays the Hosts tab.](/images/threatmanager/3.0/administration/configuration/policies/policieshoststab.webp)

- Host – The host where the policy deployed to create Honeytokens
- Token Name – The name of the Honeytoken user
- Token Status:
 - Active – The token is on the host and has an active process
    - Decommissioned – The token is no longer valid and doesn't have an active process
- Process – The process ID of the process launched for the Honeytoken
- Last Deployed – When the policy last ran and deployed a new token on the host
- Created – The creation date and timestamp for the Honeytoken

## Deployment Tab

The Deployment tab provides a variety of methods to deploy Honeytokens to computers. Use the Threat Manager
Action Service to deploy Honeytokens to remote computers, or download a PowerShell script
to allow either an external mechanism to deploy Honeytokens or manual deployment of
the Honeytokens.

![deploymenttab](/images/threatmanager/3.0/administration/configuration/policies/deploymenttab.webp)

- PowerShell Script Deployment:

    - Download – Click the Download button to download the Honeytoken deployment script. Running
      this script will deploy a Honeytoken and report the status of the deployment to Threat
      Manager.

        :::note
        Threat Manager automatically injects the token's current username, domain, and password into
        the script as a backup in case the Honeytoken script can't access the
        Threat Manager address.
        :::


- Host Deployment:
    - Hosts – Type in the box to search for and select a host. Alternatively, you can paste a comma-separated list
      into this field to import a list of hosts.
    - CSV Import Button – Click to open a file explorer window to select a single-column CSV file
      containing the host names of computers to add to the host list.
    - Deploy Now Button – Click Deploy Now to open the Deployment Status Window and immediately
      deploy to all hosts specified in the Hosts list, using the Honeytoken policy preferred Action
      Service.
    - Schedule – Select a schedule to enable automatic deployment of Honeytokens. After
      you designate a schedule, deployment queues immediately and then follows the
      specified schedule. The default schedule is None.
        - Hourly
        - Daily
        - Weekly
- Click **Schedule** to apply the Honeytoken deployment schedule to the policy.

## Deployment Status Window

When you click the Deploy Now button, Threat Manager will immediately deploy the Honeytoken to all
hosts specified in the Hosts lists, using the preferred action service selected for the
Honeytoken policy on the Configuration tab.

![honeytokeninprogress](/images/threatmanager/3.0/administration/configuration/policies/honeytokeninprogress.webp)

Closing this window will not cancel the deployment.

![honeytokendeploymentwindowcomplete](/images/threatmanager/3.0/administration/configuration/policies/honeytokendeploymentwindowcomplete.webp)

The window updates when the deployment is complete. It lists the hosts and statuses, which you can
viewable by clicking the caret. Deployment status for each host may also be viewed on the Policy
History tab. When finished, click **Close** or the gray x to exit the window.

## History Tab

The History tab displays audit history for changes to this policy. It contains a table with the
following columns:

![This screenshot displays the History tab.](/images/threatmanager/3.0/administration/configuration/policies/policieshistorytab.webp)

- TimeStamp – The timestamp for when the activity occurred
- Message – A description of the activity that occurred. When a honey token policy's app token breaks
  or you delete it, Threat Manager creates a new app token and records "App token replaced. Honey
  Tokens must be re-deployed." The old token stays active until you delete it.
- User – The user associated with the activity
- Host – The host associated with the activity
