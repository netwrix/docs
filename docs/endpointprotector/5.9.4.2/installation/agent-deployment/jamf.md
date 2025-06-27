# Jamf

Since the release of macOS 11.0 (Big Sur), significant changes have been made regarding system
extensions that now allow deploying endpoint security solutions without kernel-level access.

This affects the deployment of the Netwrix Endpoint Protector Client on all Macs that are using 11.0
operating systems or later. Companies can use third-party deployment tools such as Jamf as well as
other alternatives.

This user guide aims to explain how to use Jamf in order to deploy Endpoint Protector on multiple
endpoints.

**NOTE:** This is an optional document for Jamf. It is not kept up-to-date with product changes and
may not accurately represent the current interface or features. For the latest information, consult
the official resources from the product vendor.

# Creating the Configuration Profile

In order to use Jamf, first, you need to create a new configuration profile. To do so, follow these
steps:

**Step 1 –** Open the Jamf Pro account and log in using your credentials.

**Step 2 –** In your Jamf account, from the main navigation bar click **Computer**, and then from
the left sidebar menu, select **Configuration Profiles**.

**Step 3 –** To create a new configuration profile, in the upper right, above the table with
available configuration profiles, click **+New**.

![Creating a New configuration Profile](/img/product_docs/endpointprotector/endpointprotector/install/agent/jamf/configurationprofile.webp)

On the New macOS Configuration Profile section, you can manage profile settings and select the
devices and users to which you want to deploy the profile.

**NOTE:** Click **Save** only once you have managed all settings and the profile scope.

## General Settings

On the default General section, enter the following information:

- Name – enter a name to use for this configuration profile.
- Description (optional) – add a description that details the purpose of the configuration profile.

You can continue with the default settings for the category, level, and distribution method fields.

![Completing information on the general section](/img/versioned_docs/auditor_10.6/auditor/addon/azurefiles/generalsettings.webp)

## Certificate Settings

You will add the Client CA Certificate in .cer format on the Certificate settings section.

**NOTE:** This step is not required if you are not using Deep Package Inspection. To continue the
process, go to the Privacy Preferences Policy Control section.

**Step 1 –** Log in to Endpoint Protector Server, go to the System Configuration section, and then
select **System Settings**.

**Step 2 –** On the Default System Settings section, enable Deep Packet Inspection Certificate and
then download Client CA Certificate – the downloaded .zip file contains the .cer and .crt client
certifications.

![Enabling Deep Packet Inspection Certificate and then downloading Client CA Certificate](/img/product_docs/endpointprotector/endpointprotector/install/agent/dpicertificate.webp)

**Step 3 –** Go to Jamf, the Certificate section, and click **Configure**.

**Step 4 –** Enter a Certificate name and then select and upload the downloaded Client CA
Certificate in .cer format.

![Entering the required information on New macOS Configuration Profile](/img/product_docs/endpointprotector/endpointprotector/install/agent/jamf/macosconfiguration.webp)

## Privacy Preferences Policy Control Settings

On the Privacy Preferences Policy Control section, click **Configure** and then enter the following
information:

- Identifier - `com.cososys.eppclient`.
- Identifier Type – go with the default Bundle ID type.
- Code Requirement

`anchor apple generic and certificate 1[field.1.2.840.113635.100.6.2.6] /* exists */ and certificate leaf[field.1.2.840.113635.100.6.1.13] /* exists */ and certificate leaf[subject.OU] = TV3T7A76P4`.

**NOTE:** Use the Terminal Editor to verify there are no formatting alterations before executing
this command line.

- Select the **Validate the Static Code Requirement** check-box.
- Click **Add** and **Save** to allow access to SystemPolicyAllFiles and Accessibility services.

![Configuring Privacy Peferences Policy Control](/img/product_docs/endpointprotector/endpointprotector/install/agent/jamf/privacypreferences.webp)

## Allow EppNotifier Settings

On the Privacy Preferences Policy Control section, click the **+ icon** to add a new policy and then
enter the following information:

Identifier - `com.cososys.eppclient.notifier`

Identifier Type – go with the default Bundle ID type.

Code Requirement

`anchor apple generic and certificate 1[field.1.2.840.113635.100.6.2.6] /* exists */ and certificate leaf[field.1.2.840.113635.100.6.1.13] /* exists */ and certificate leaf[subject.OU] = TV3T7A76P4`.

**NOTE:** Use the Terminal Editor to verify there are no formatting alterations before executing
this command line.

- Select the **Validate the Static Code Requirement** check-box.
- Click **Add** and then **Save** to allow access to Accessibility services.

![Configuring EPPNotifier Settings](/img/product_docs/endpointprotector/endpointprotector/install/agent/jamf/eppnotifer.webp)

## Enforced Encryption Settings

On the Privacy Preferences Policy Control section, click the **+ icon** to add a new policy and then
enter the following information:

Identifier – `com.cososys.easylock`.

Identifier Type – go with the default Bundle ID type.

Code Requirement

`anchor apple generic and certificate 1[field.1.2.840.113635.100.6.2.6] /* exists */ and certificate leaf[field.1.2.840.113635.100.6.1.13] /* exists */ and certificate leaf[subject.OU] = TV3T7A76P4`.

**NOTE:** Use the Terminal Editor to verify there are no formatting alterations before executing
this command line.

- Select the **Validate the Static Code Requirement** check-box.
- Click **Add** and then **Save** to allow access to SystemPolicyAllFiles and Accessibility
  services.

![Configuring Enforced Encryption settings](/img/product_docs/endpointprotector/endpointprotector/install/agent/jamf/enforcedencryption.webp)

## System Extension Settings

### Allow System Extensions

On the System Extension section, click **Configure** and then enter the following information:

- Display Name (optional) - enter a name to use for this configuration.
- System Extension Type - select **Allow System Extension type**.
- Team Identifier - `TV3T7A76P4`.
- Allowed System Extensions – click **Add**, enter `com.cososys.eppclient`, and then **Save** the
  changes.

![Allowing System Extensions ](/img/product_docs/endpointprotector/endpointprotector/install/agent/jamf/systemextensions.webp)

**NOTE:** For operating systems lower than macOS 11 (Big Sur), manage settings from the Approved
Kernel Extensions section instead of System Extensions. Define the Team ID (enter TV3T7A76P4) and
proceed to the next step.

### Removable System Extensions

On the System Extension section, click the **+ icon** to add a new policy that will allow removing
system extensions without a pop-up, and then enter the following information:

- Display Name (optional) - enter a name to use for this configuration.
- System Extension Type - select **Removable System Extensions** type.
- Team Identifier - `TV3T7A76P4`.
- Allowed System Extensions – click **Add**, enter `com.cososys.eppclient`, and then **Save** the
  changes.

**NOTE:** This setting will be applied starting with MacOS 12 version (Monterey).

![Adding a new policy that will allow the removing of system extensions](/img/product_docs/endpointprotector/endpointprotector/install/agent/jamf/removeableextensions.webp)

### Managed Login Items

Administrators can quickly disable Endpoint Protector Items in Jamf Configuration Profiles with
Ventura's (macOS 13) new capability. This can be accomplished by taking the following steps:

**Step 5 –** Log in to your Jamf account.

**Step 6 –** Click **Computer** from the main navigation bar.

**Step 7 –** Select **Configuration Profiles** from the sidebar menu on the left.

**Step 8 –** Click **New** in the upper right-hand corner.

**Step 9 –** On the left, under the Options box, select **Managed Logged In Items**.

Endpoint Protector Items can be simply disabled in your Jamf Configuration Profiles from here.
Simply uncheck the box next to the Endpoint ProtectorItem(s) you want to disable, and then click
**Save** to save your changes.

**NOTE:** Disabling Endpoint Protector Items may have an impact on the security of your system. Only
disable these items if you are positive it is essential and you have taken every precaution
necessary to keep your system secure.

## VPN Settings

**NOTE:** This step is not required if you are not using VPN services. To continue the process, go
to the Scope section.

On the VPN section, click **Configure** and then enter the following information:

- Connection Name – enter a connection name that will be displayed on the device.
- VPN Type – select **Per-App VPN** type.
- Per-App VPN Connection Type – select **Custom SSL connection** type.
- Identifier – com.cososys.eppclient.daemon.
- Server – localhost.
- Provider Bundle Identifier – com.cososys.eppclient.daemon.
- Provider Type – select **App-proxy** type.
- Select the **Include All Networks** check-box.
- Provider Designated Requirement

`anchor apple generic and certificate 1[field.1.2.840.113635.100.6.2.6] /* exists */ and certificate leaf[field.1.2.840.113635.100.6.1.13] /* exists */ and certificate leaf[subject.OU] = TV3T7A76P4`

**NOTE:** Use the Terminal Editor to verify there are no formatting alterations before executing
this command line.

- Select the **Prohibit users from disabling on-demand VPN settings** check-box.

![First section to configuring VPN settings](/img/product_docs/endpointprotector/endpointprotector/install/agent/jamf/vpnsettings.webp)

![Second section to configuring VPN settings](/img/product_docs/endpointprotector/endpointprotector/install/agent/jamf/vpnconfiguration.webp)

## Notifications Settings

**NOTE:** This step is optional. To continue the process, go to the Scope section.

On the Notifications section, click **Configure** and then enter the following information:

- App Name - `EppNotifier`.
- Bundle ID - `com.cososys.eppclient.notifier`.
- Toggle the switch to include the settings type and then disable/enable to manage each notification
  option.

![Optional Notifiaction Settings](/img/product_docs/endpointprotector/endpointprotector/install/agent/jamf/notificationsettings.webp)

## Scope

Once you manage all settings, go to the Scope tab and select the devices and users to deploy the new
profile.

Click **Save** to apply all settings to the new configuration profile.

**NOTE:** To confirm that the new configuration profile is saved successfully, reboot your computer
at this point.

![Selecting Devices and Users to deploy to the new profile.](/img/versioned_docs/activitymonitor_7.1/config/activedirectory/scope.webp)

# Creating the Policy

Once the script and package are successfully uploaded, you need to create a new Jamf policy. To
create the new policy, follow these steps:

**Step 1 –** In your Jamf account, from the main navigation bar, click **Computer**, from the left
sidebar menu, select **Policies**, and then click **+ New**.

![Creating a New Policy](/img/product_docs/accessanalyzer/11.6/accessanalyzer/requirements/target/config/policies.webp)

**Step 2 –** On the default General section, enter the following information:

- Display Name – enter the name to use for this policy.
- Select the **Recurring Check-in** check-box.

![Configuring information on new policy](/img/product_docs/endpointprotector/endpointprotector/install/agent/jamf/newpolicy.webp)

**Step 3 –** On the Scripts section, click **Configure** and then enter the following information:

- Add the epp_change_ip.sh script.
- Priority – set priority to Before, as the script needs to be installed before the next step.

![Configuring Script under Policies](/img/product_docs/endpointprotector/endpointprotector/install/agent/jamf/scripts.webp)

**Step 4 –** On the Packages section, click **Configure** and then add the package
EndpointProtector.pkg.

![Adding the Endpoint Protector package to policy](/img/product_docs/endpointprotector/endpointprotector/install/agent/jamf/addingpackage.webp)

**Step 5 –** Go to the Scope tab and add the devices and users to apply the new policy.

**Step 6 –** Click **Save** to apply all settings to the new policy.

![Adding Devices and users to apply to the scope](/img/product_docs/endpointprotector/endpointprotector/install/agent/jamf/policyscope.webp)

To confirm that the Endpoint Protector Client has been successfully deployed and the Server- Client
communication and policies work as expected, you can view the endpoint in the List of Computers from
the Endpoint Protector UI, and the Endpoint Protector Client is displayed in the menu bar.

# Uploading the Script and Package

To deploy the Endpoint Protector Client, upload the `EndpointProtector.pkg` package along with the
`epp_change_ip.sh` script.

**CAUTION:** To obtain the `epp_change_ip.sh script`, customers should submit a support ticket
through the [Netwrix Customer Portal](https://www.netwrix.com/sign_in.html?rf=my_products.html).

To upload the script and package, follow these steps:

**Step 1 –** In your Jamf account, from the main navigation bar, click **Computer**, and then from
the left sidebar menu, select **Management Settings**.

**Step 2 –** From the Computer Management section, select **Scripts** and then, in the upper right,
click **+ New**.

**Step 3 –** On the General section, add a name for the profile, and then select the **Script tab**
and add the `epp_change_ip.sh` script.

**Step 4 –** Add your Server IP to the EPP_SERVER_ADDRESS field.

**NOTE:** You can edit the EPP_DEPARTMET CODE and EPP_SERVER_PORT fields to deploy the Endpoint
Protector Client on specific departments or custom ports.

![Uploading the new Script.](/img/product_docs/endpointprotector/endpointprotector/install/agent/jamf/newscript.webp)

**Step 5 –** From the Computer Management section, select **Package** and then, in the upper right,
click **+ New**.

**Step 6 –** On the General tab, add a name and then upload the package `EndpointProtector.pkg`.

![Uploading the new Package](/img/product_docs/endpointprotector/endpointprotector/install/agent/jamf/newpackage.webp)
