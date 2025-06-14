# Hierarchy in Configuration Files

Every configuration's element falls under the ` urn:schemas-usercube-com:configuration` namespace.
Element `<ConfigurationFile>` is the root element of each configuration file.

```

<ConfigurationFile xmlns="urn:schemas-usercube-com:configuration">    ...
<ConfigurationFile>

```

Each configuration element matches to an entry in the database. Detailed description of the element
can be found in the
[Data model part of this documentation](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/index.md).

For exemple, structure of the `<Connector>` element wil be found
[here](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/connectors/index.md).

In some case, the element name will not match directly the data model type name.

For exemple, the element `<Entry>` in the following XML fragment is a
[AccessControlEntry](/versioned_docs/usercube_6.1/usercube/integration-guide/toolkit/xml-configuration/access-control/accesscontrolrule/index.md)
item in the database.

```

<AccessControlRule Profile="Administrator" EntityType="Resource" Identifier="Administrator_Resource" DisplayName_L1="Administrator_Resource">  <Entry Permission="/Connectors/SynchronizeSession" CanExecute="true" />  <Entry Permission="/Connectors/ProvisioningSession" CanExecute="true" /></AccessControlRule>

```
