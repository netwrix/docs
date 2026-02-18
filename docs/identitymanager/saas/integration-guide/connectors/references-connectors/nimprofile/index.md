---
title: "NIM Profile"
description: "NIM Profile"
sidebar_position: 110
---


# NIM Profile

This connector exports and fulfills profile assignments from/to an Identity Manager instance.

This page is about [NIM Profile](../../references-packages/nimprofile/index.md).

## Overview

The NIM (Netwrix Identity Management) Profile connector enables Identity Manager to manage its own profile assignments. This connector allows you to:

* Automatically assign profiles based on rules
* Include assigned profiles in access certification campaigns
* Apply separation of duties risk rules to Identity Manager profile permissions
* Leverage the full governance lifecycle (approval workflows, audit trails, role mining, etc.)

The connector supports two operational modes:

* **Local mode**: Manage profile assignments within the same Identity Manager instance (target instance = source instance)
* **Remote mode**: Manage profile assignments in a different Identity Manager instance (target instance ≠ source instance)

## Prerequisites

Implementing this connector requires:

* An Identity Manager instance with properly configured profiles
* For Remote mode: API connectivity between the source and target Identity Manager instances

### Permissions

The service account or API credentials must have the following permissions:

* **Read, Write, Create, Delete permissions** on the target instance to export/provision/deprovision profile assignments:
  * `/AccessControl/AssignedProfile/Query`
  * `/AccessControl/AssignedProfile/Update`
  * `/AccessControl/AssignedProfile/Create`
  * `/AccessControl/AssignedProfile/Delete`
* **Administrative access** to deploy the connector configuration

## Configuration Template

The NIM Profile connector uses an automated configuration wizard that generates the necessary connector configuration  based on a template.

More specifically, based on the profiles, dimensions and entity types in the target instance, the wizard will generate and deploy:

* Entity types and associations
* Single roles (one per profile)
* Resource types
* Correlation rules
* Query rules
* Navigation and scalar rules
* UI components (views and menu items)
* A dedicated category for the connector


:::note
In complex scenarios (where the owner entity type is different from the identity entity type), the wizard generates multiple Resource Types per profile, one for each identity correlation path (e.g., separate Resource Types for nominative and administrative accounts).

:::

The connector supports scenarios where:

* Users have multiple profile assignments
* Profiles are parameterized with multiple dimension values
* Users have both time-limited and permanent profile assignments


:::warning
If the target instance's configuration changes (profiles added or removed, dimensions modified, ...), the connector configuration may become outdated. This could lead to uncorrelated resources for newly added profiles.

For now, the only option is to re-create a connection and re-run the configuration wizard to regenerate the connector configuration

:::

### Local Mode vs Remote Mode

#### Local Mode (Self-Management)

In Local mode, the source and target instances are the same. This is the simplest configuration. No manual configuration is needed, all elements will be computed. This can always be updated in the created rules.


:::note
Only the correlation rule with the highest confidence rate is used to compute the bindings for query and correlation rules.

:::

#### Remote Mode

In Remote mode, the source and target instances are different.

The wizard cannot automatically determine how to map identities between the source and the target Identity Manager instances. The following steps must therefore be performed:

* Locate Placeholder Expressions (for Query and Correlation Rule): Placeholders contain the text "PLACEHOLDER" and include guidance.
* Update Query Rules: For each Resource Type, replace the placeholder with an expression that returns the target instance user identifier.

  For example:

  ```csharp
  C#:userRecord: return userRecord.User?.Identifier.ToString();
  ```
* Update Correlation Rules: For each Resource Type, with the same logic as for Query Rules, modify to correlate users between instances.
* Test the Configuration:
  * Run an Export job to verify data is exported correctly
  * Run a Synchronization job to import the data
  * Run a ComputeRoleModel job to test correlation
  * Verify that profile assignments are being correlated correctly
  * If correlation fails (0 matches found), review and correct the user binding expressions


:::warning
In Remote mode, if placeholder expressions are not replaced, the connector will appear to work (Export and Synchronization jobs complete successfully), but no correlation will occur.

:::

## Export

For a configured NIM Profile connection, this connector exports profile assignments from the target Identity Manager instance.

### What is Exported

The connector exports:

* **Profile Metadata**: Profile definitions and their parameters (from `UA_Profiles` table)
* **Assignment Context**: Profile parameter values and context (from `UA_ProfileContexts` table)
* **User Associations**: Links between profiles and users (from `UA_AssignedProfiles` table)
* **Dimension Values**: Parameter values for parameterized profiles

### Configuration

The connection configuration is created through the UI during connector setup.

For Local mode, no additional connection settings are required beyond selecting "Local" mode.

For Remote mode, you must specify:

This process is configured through a Connection in the UI and/or the XML configuration, and in the `*appsettings.agent.json* > Connections` section:

```json
*appsettings.agent.json*
{
  ...
  "Connections": {
    ...
    "<ConnectionIdentifier>": {
      "Mode": "Remote",
      "ServerUrl": "https://target.instance.com",
      "ClientId": "your-client-id",
      "ClientSecret": "your-client-secret"
    }
  }
}
```

#### Setting Attributes

| Name | Type | Description |
|------|------|-------------|
| Mode<br/>*required* | String | Connection mode: `Local` or `Remote`. |
| ServerUrl<br/>*Required for Remote mode* | String | The URL of the target Identity Manager instance to manage. Not required for Local mode. |
| ClientId<br/>*Required for Remote mode* | String | OAuth client ID for authenticating with the target instance API. Not required for Local mode. |
| ClientSecret<br/>*Required for Remote mode* | String | OAuth client secret for authenticating with the target instance API. Not required for Local mode. |

### Output Details

This connector is meant to generate a file named `<connectionIdentifier>_AssignedProfile.csv`, with columns for:

* **NimId**: Target instance assignment ID
* **StartDate**: Assignment start date
* **EndDate**: Assignment end date
* **UserId**: Reference to the assigned user
* **ProfileId**: Reference to the assigned profile
* **Parameter dimension values**: For each profile parameter

Additional CSV files are generated for related entities:

* Profile definitions
* Dimension values
* User identities

## Fulfill

This connector provisions profile assignments to the target Identity Manager instance.


:::note
The `BlockProvisioning` property is set to `true` on generated Resource Types, meaning assignments cannot be made manually through the UI. All provisioning must occur through the Role Model engine based on Single Role assignments.

:::

### Configuration

The fulfillment configuration is automatically generated by the wizard and includes:

* **Resource Type Mappings**: Type `NimResourceTypeMapping` linked to the NIM Profile connection
* **Provisioning Rules**: Navigation rules for profile and parameter values, Scalar rules for dates
* **Correlation Rules**: Rules to match existing assignments and avoid duplicates

### Output Details

The connector:

* Creates new `UA_AssignedProfiles` and `UA_ProfileContexts` for granted assignments
* Updates existing records for modified assignments
* Deletes records for revoked assignments
* Generates historization in both source and target instances

## Best Practices

### Before Deployment

* **Review target instance schema**: Ensure profiles are properly configured with correct parameters
* **Plan identity correlation**: In Remote mode, document the user mapping strategy before running the wizard
* **Test in non-production**: Deploy and test the connector in a development environment first

### After Deployment

* **Validate correlation**: Run test exports and synchronization to verify correlation is working correctly
* **Monitor provisioning**: Review initial provisioning operations to ensure assignments are created correctly
* **Document expressions**: If using Remote mode, document the user binding expressions for future reference

## Troubleshooting

### Export completes but no data is synchronized

| Possible cause | Resolution |
|----------------|------------|
| Incorrect connection URL or credentials (Remote mode) | Verify connection settings in `appsettings.agent.json` |
| Target instance has no profile assignments | Check target instance `UA_Profiles` table |
| Export filter excluding all assignments | Review export job logs for errors |

### No correlation occurs

| Possible cause | Resolution |
|----------------|------------|
| Placeholder expressions not replaced (Remote mode) | Check Query Rules and Correlation Rules for "PLACEHOLDER" text |
| Incorrect user binding expressions | Verify user binding expressions return valid identifiers |
| User data not synchronized to source instance | Synchronize before correlating profile assignments |

### Fulfillment operations are not executed

| Possible cause | Resolution |
|----------------|------------|
| `BlockProvisioning` preventing manual assignments | Check approval workflows for pending operations |
| No Single Roles assigned to users | Verify users have appropriate Single Role assignments |
| Role Model not computed | Run the Compute Role Model job to generate provisioning operations |

### Computed profiles display as non-conforming

[ProfileRules](../../../toolkit/xml-configuration/access-control/profilerulecontext/index.md) will continue to be computed. To ensure that computed profiles are properly recognized by the Compute Role Model job and do not display as non-conforming, profile rules should be written through Single Role rules as for other connectors, rather than using ProfileRules.

## Authentication

### Password Reset

This connector does not reset passwords.

### Credential Protection

Data protection can be ensured through:

* [RSA Encryption](../../../../integration-guide/network-configuration/agent-configuration/rsa-encryption/index.md) configured in the `appsettings.encrypted.agent.json` file
* An [Azure Key Vault](../../../../integration-guide/network-configuration/agent-configuration/azure-key-vault/index.md) safe

For Remote mode connections, consider storing API credentials in:

* A [CyberArk's AAM Credential Providers](../../../../integration-guide/network-configuration/agent-configuration/cyberark-application-access-manager-credential-providers/index.md) able to store the target instance URL and API credentials