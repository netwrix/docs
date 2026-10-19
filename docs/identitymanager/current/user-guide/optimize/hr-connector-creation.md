---
title: "Create an HR Connector"
description: "Create an HR Connector"
sidebar_position: 20
---
 
# Create an HR Connector
 
How to create a connector dedicated to the automation of identity management (creation, update, deletion), via the synchronization of HR data into Identity Manager and internal provisioning. See the[Connect to a Managed System](../../user-guide/set-up/connect-system/index.md)provisioning.
 
## Overview
 
### HR connector in the global process
 
<u>The HR connector is no priority but rather an optimization</u>, handled at the end of the configuration cycle.
 
The HR connector is sometimes the first created connector, used to develop the identity repository.
 
However, the HR connector requires a specific IT infrastructure (agent, proxy, Virtual Machine, etc.) which can take time to implement, and delay the project's progress.
 
Moreover, in the long run it poses a few problems as HR data usually misses crucial information such as contractor data, or the projects employees are working on. This can mean that:
 
- the identity repository is filled using <u>several sources</u>. And when creating identities
automatically from HR data and other sources, you need to specify which properties of each identity can be overwritten by a change in HR and which cannot. This is to avoid manually changed attributes being overwritten by the HR data by mistake. This is very tedious.
- the HR data is <u>rarely up to date</u> early enough to be really useful as a trigger for identity
creation and deletion. As a result, identities end up being created manually through workflows most of the time.
 
Hence we choose to build the first iteration of the project upon a manual data upload to [Create the Workforce Repository](../../user-guide/set-up/initial-identities-loading/index.md).
 
This way, we do not have to wait for the agent's implementation to create the first profiles and start connecting systems (AD, SAB, SAP, etc.). Thus <u>value is created faster</u> and we can <u>focus on IGA activities</u> such as the review of orphaned and unused accounts, <u>eliminating risk</u> earlier in the process.
 
We can still connect HR data, later on, to check consistency between our identity repository and HR data, through a certification-like process.
 
### Technical details
 
An HR connector is considered an <u>inbound</u> connector, as it writes to the central identity repository inside Identity Manager.
 
![<u>inbound</u> System=](/images/identitymanager/connectorcreation_inbound.webp)
 
As Identity Manager is able to feed all managed systems, it can also feed itself thanks to specific connections such as the [InternalWorkflow](../../integration-guide/connectors/references-connectors/internalworkflow.md) connection. It means that the corresponding connector is able to launch workflows within Identity Manager and keep track.
 
Typically, an HR connector with such a connection would be able to launch workflows inside Identity Manager for identity creation, update and deletion, based on HR files.
 
## Participants and Artifacts
 
This operation should be performed in cooperation with HR staff who can access HR data.
 
| Input | Output | 
| --- | --- | 
| Identity Repository. (required) | HR connector |
 
See the [Create the Workforce Repository](../../user-guide/set-up/initial-identities-loading/index.md)topic for additional information.
 
## Create an HR Connector
 
Create an HR connector by proceeding as follows:
 
1. Outside Identity Manager,
[Model the Data](../../user-guide/set-up/connect-system/connector-modeling.md)of your connector.
2. Declare an HR connector using your local agent. See the
[Create the Connector](../../user-guide/set-up/connect-system/connector-declaration.md) topic for additional information.
 
    ![HR Connector Declaration](/images/identitymanager/hr_connectordeclaration_v602.webp)
 
3. Create an Export CSV connection for each HR file to connect. See the
[Create a Connection](../../user-guide/set-up/connect-system/connection-creation.md) topic for additional information.
 
    ![HR Connection](/images/identitymanager/hr_connection_v602.webp)
 
4. [Create an Entity Type](../../user-guide/set-up/connect-system/entity-type-creation/index.md) corresponding
to your model. For example:
 
    ![HR Entity Type - Scalar Properties](/images/identitymanager/hr_entitytypes_v602.webp)
 
    ![HR Entity Type - Navigation Properties](/images/identitymanager/hr_entitytypen_v602.webp)
 
5. Don't forget to reload and [Synchronize Data](../../user-guide/set-up/synchronization.md) to access
HR data within Identity Manager.
 
    ![Reload](/images/identitymanager/entitytypecreation_reload_v522.webp)
 
    ![Synchronize Job](/images/identitymanager/synchro_executionjobs_v602.webp)
 
## Verify HR Connector Creation
 
In order to verify the process:
 
1. Launch synchronization.
2. Access the connector's logs (from **Job Results** on the connector's dashboard) to ensure that
synchronization completed successfully.
 
    ![Jobs Results](/images/identitymanager/synchro_results_v603.webp)
 
3. Check that the entity types have been added to the left menu of the home page.
 
    ![Test Entity Type](/images/identitymanager/hr_validatemenu_v600.webp)
 
4. Access the relevant entity types (from the menu items on the left of the home page) to check
synchronized resources, by navigating in the UI from the accounts through a sample of associations, via the Eye icon:
 
    ![Eye Icon](/images/identitymanager/iconeye_v600.svg)
 
You should seek configuration validation, not validation of the actual data being synchronized.