# View Template

Creates the view for the given entity as well as the rights for the given profile.

The scaffolding generates the following scaffoldings:

- [
  Entity Type Display Name
  ](/docs/product_docs/usercube_saas/usercube/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/entitytypes/entitytypes/entitytypedisplayname/index.md): Computes a default value for resources' internal display names.
- [
  Entity Type Display Table
  ](/docs/product_docs/usercube_saas/usercube/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/entitytypes/entitytypes/entitytypedisplaytable/index.md): Creates a display table for the given entity.
- [
  View Access Control Rules
  ](/docs/product_docs/usercube_saas/usercube/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/resources/viewaccesscontrolrules/index.md): Generates the permissions to view an entity type's resources.

## Examples

The following example implements a default display name for resources from the ```Directory_PresenceState``` entity type, displays the resources in a table, and gives to the ```Administrator``` profile the permissions to view the resources.

```

<ViewTemplate EntityType="Directory_UserCategory" Profile="Administrator"/>

```

## Properties

| Property | Details |
| --- | --- |
| EntityType   optional | __Type__    String   __Description__   Identifier of the entity type involved in the scaffolding. |
| Profile   optional | __Type__    String   __Description__   Identifier of the profile involved in the scaffolding. |
| Property   optional | __Type__    String   __Description__   Identifier of the property involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<EntityTypeDisplayName Id="102" EntityType="Directory_UserCategory" /><EntityTypeDisplayTable Id="120" EntityType="Directory_UserCategory" /><ViewAccessControlRules Id="160" EntityType="Directory_UserCategory" Profile="Administrator" />

```
