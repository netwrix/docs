---
title: "Policy Configuration"
description: "Policy Configuration"
sidebar_position: 10
---

# Policy Configuration

The Policy Details page displays information about the Honeytoken configuration.

:::note
Policies for Honeytokens must be enabled by configuring the settings on the Configuration
tab.
:::


![detailspage](/images/threatmanager/3.0/administration/configuration/policies/detailspage.webp)

The Policies box displays the name of the Honeytoken policy. The Policy Information box displays the
Honeytoken policy and a description if specified. Click the Edit button to change the name of the
Honeytoken policy. If the policy name is changed, click the Save button to save the new name. Click
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

- Enabled – This option is set to ON or enabled by default. Click the checkmark to set to OFF or
  disabled.
- Token Username – The username that is used by the Honeytoken deployment process and threat
  detection. This is a static username that will be used for all deployments for this policy.

    :::note
    The token username can be changed post-deployment, however tokens under the previous
    username will no longer bedetected.
    :::


    :::info
    Do not change the username of a Honeytoken after a successful deployment of
    the token to a host.
    :::


- Token Password – Specify a password string to be used for the Honeytoken deployment. Passwords
  require at minimum one wildcard character. Use '@' to specify random letters and '#" to specify
  random numbers.

    :::note
    If the Honeytoken script cannot reach the Threat Manager URL, the Honeytoken will
    still be deployed but Threat Manager will be unaware of the Honeytoken deployment status.
    :::


- Threat Manager URL – Specify the Threat Manager address to be used by the Honeytoken script to
  communicate with Threat Manager. Honeytoken hosts must be able to communicate via HTTP REST to
  this address in order to report Honeytoken deployment status
- Token Domain – The domain to be used for the deployed Honeytoken. This can be selected from
  existing, known domains or a custom domain can be specified.
- Select Credential Profile – Lists Credential Profiles added on the
  [Integrations Interface](/docs/threatmanager/3.0/administration/configuration/integrations/overview.md). Select a Credential Profile from the
  drop-down list.
- Select Preferrred Action Service – Select the Action Service to be used for Honeytoken deployment.
- Token Time to Reset Password – All Honeytokens for a policy will share common password. This value
  specifies how frequently a new password will be generated for the Honeytoken policy. Select a
  value using the drop-down menu from the following options:
    - 1 Day
    - 7 Days
    - 14 Days
    - 30 Days
    - 90 Days
- Test Policy Button– Click the Test Policy button to run an LDAP query for the token username
  specified. This generates an event that will be detected by an Active Directory monitoring agent
  and sent to Threat Manager. If the event is received by Threat Manager within three minutes, the
  button displays Test Succeeded.

    :::note
    If Threat Prevention is used for Active Directory event monitoring, then an LDAP
    monitoring policy must be enabled and configured to capture LDAP events for Honeytoken users for
    the test to be successful. See the
    [Netwrix Threat Prevention Documentation](https://helpcenter.netwrix.com/category/threatprevention)
    for additional information. If Activity Monitor is used for Active Directory event monitoring,
    then the LDAP Monitor tab in the AD Monitoring Configuration Window must be configured to
    capture LDAP events for Honeytoken users for the test to be successful. See the
    [Netwrix Activity Monitor Documentation](https://helpcenter.netwrix.com/category/activitymonitor)
    for additional information.
    :::


:::info
Use the Copy LDAP Filter button to ensure that the LDAP Filter Policy string is
properly configured to capture LDAP events for the Honeytoken policy.
:::


- Copy LDAP Filter Button– Clicking the Copy LDAP Filter button will automatically copy to the
  clipboard the exact string that is required for Activity Monitor or Threat Prevention to configure
  the LDAP events for this Honeytoken. The copied string should then be pasted into the LDAP filter
  policy settings for Activity Monitor or Threat Prevention.

    :::note
    This is a required configuration in order to detect LDAP-based Honeytoken threats.
    :::


Click Save to update the policy settings. Once saved, threats are detected for this Honeytoken user.

## Hosts Tab

The Hosts tab provides information on hosts that have policies deployed. The Hosts tab displays the
following information:

![This screenshot displays the Hosts tab.](/images/threatmanager/3.0/administration/configuration/policies/policieshoststab.webp)

- Host – The host where the policy was deployed to create Honeytokens
- Token Name – The name of the Honeytoken user
- Token Status:
    - Active – The token is currently deployed to the host and has an active process
    - Decommissioned – The token is no longer valid and does not have an active process
- Process – The process ID of the process launched for the Honeytoken
- Last Deployed – When the policy was last run and deployed a new token on the host
- Created – The creation date and timestamp for the Honeytoken

## Deployment Tab

The Deployment tab provides a variety of methods to deploy Honeytokens to computers. Threat Manager
Action Service can be used to deploy Honeytokens to remote computers, or a PowerShell script can be
downloaded to allow either an external mechanism to deploy Honeytokens or for manual deployment of
the Honeytokens.

![deploymenttab](/images/threatmanager/3.0/administration/configuration/policies/deploymenttab.webp)

- PowerShell Script Deployment:

    - Download – Click the Download button to download the Honeytoken deployment script. Running
      this script will deploy a Honeytoken and report the status of the deployment to Threat
      Manager.

        :::note
        The token's current username, domain, and password are automatically injected into
        the script as a backup in case the Threat Manager address cannot be accessed by the
        Honeytoken script.
        :::


- Host Deployment:
    - Hosts – Type in the box to search for and select a host. Alternatively, a comma-separated list
      can be pasted to this field to import a list of hosts.
    - CSV Import Button – Click to open a file explorer window to select a single-column CSV file
      containing the host names of computers to add to the host list.
    - Deploy Now Button– Click Deploy Now to open the Deployment Status Window and immediately
      deploy to all hosts specified in the Hosts list, using the Honeytoken policy preferred Action
      Service.
    - Schedule – Select a schedule to automatically enable automatic deployment of Honeytokens. Once
      a schedule is designated, deployment will be queued immediately and will then follow the
      specified schedule. The default schedule is None.
        - Hourly
        - Daily
        - Weekly
- Click **Schedule** to apply the Honeytoken deployment schedule to the policy.

## Deployment Status Window

When the Deploy Now button is clicked, Threat Manager will immediately deploy the Honeytoken to all
hosts specified in the Hosts lists, utilizing the preferred action service selected for the
Honeytoken policy on the Configuration tab.

![honeytokeninprogress](/images/threatmanager/3.0/administration/configuration/policies/honeytokeninprogress.webp)

Closing this window will not cancel the deployment.

![honeytokendeploymentwindowcomplete](/images/threatmanager/3.0/administration/configuration/policies/honeytokendeploymentwindowcomplete.webp)

The window will update when the deployment is complete. The hosts and statuses will be listed,
viewable by clicking the caret. Deployment status for each host may also be viewed on the Policy
History tab. When finished, click **Close** or the gray x to exit the window.

## History Tab

The History tab displays audit history for changes to this policy. It contains a table with the
following columns:

![This screenshot displays the History tab.](/images/threatmanager/3.0/administration/configuration/policies/policieshistorytab.webp)

- TimeStamp – The timestamp for when the activity occurred
- Message – A description of the activity that occurred
- User – The user associated with the activity
- Host – The host associated with the activity
