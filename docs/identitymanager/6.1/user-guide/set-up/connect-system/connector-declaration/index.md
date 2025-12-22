---
title: "Create the Connector"
description: "Create the Connector"
sidebar_position: 20
---

# Create the Connector

How to declare the technical container of a
[connector](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/connectors/connector/index.md).

## Overview

Here, you will learn how to create a connector: the shell that harbors entity types and connections
related to a single managed system.

Keep in mind that a Usercube installation can have more than one
[agent](/docs/identitymanager/6.1/introduction-guide/architecture/index.md). Connectors
should be created with a specific agent in mind since the agent needs to physically connect to the
managed system's data. Fortunately, you don't need to worry about that right now, since you are
starting with the agent provided with Usercube's SaaS environment.

## Participants and Artifacts

For a given managed system, integrators may need the help of the application owner who knows the
purpose of the application.

| Input | Output          |
| ----- | --------------- |
| -     | Empty connector |

## Create a Connector Container

Create a connector container by proceeding as follows:

1. On the home page in the **Configuration** section, click on the **Connectors** button.

    ![Home page - Connectors](/images/identitymanager/6.1/user-guide/set-up/synchronization/home_connectors_v602.webp)

    You will see all existing connectors.

2. Click on the addition icon and fill in the information fields.

    ![Addition Icon](/images/identitymanager/6.1/user-guide/set-up/categorization/classification/iconadd_v602.svg)

    ![Connector creation](/images/identitymanager/6.1/user-guide/set-up/connect-system/connector-declaration/connectorcreation_declaration_v602.webp)

    - `Identifier`: must be unique among connectors, without any whitespace, start with a letter,
      and contain only letters, numbers, `.` and/or `-`.
    - `Name`: will be displayed in the UI to identify the connector.
    - `Agent`:
      [agent](/docs/identitymanager/6.1/introduction-guide/architecture/index.md) that
      the connector is supposed to use.

        NETWRIX recommends choosing the provided SaaS agent.

    - `Complete Job`:
      [job](/docs/identitymanager/6.1/integration-guide/tasks-jobs/jobs/index.md)
      scheduled to perform a set of tasks, including
      complete[synchronization and/or provisioning](/docs/identitymanager/6.1/user-guide/set-up/connect-system/index.md)
      for all the connectors, for which you selected the corresponding checkbox.
    - `Incremental Job`:
      [job](/docs/identitymanager/6.1/integration-guide/tasks-jobs/jobs/index.md)
      scheduled to perform frequently a set of tasks, including
      incremental[synchronization and/or provisioning](/docs/identitymanager/6.1/user-guide/set-up/connect-system/index.md)
      for all the connectors, for which you selected the corresponding checkbox.

3. Click on **+ Create** to get on the connector's overview page:

    ![Connector page](/images/identitymanager/6.1/user-guide/set-up/connect-system/connector-declaration/connectorcreation_connectorpage_v602.webp)

## Verify the Connector Declaration

In order to verify the process, check that the connector has been added to the connectors list with
the right name and identifier.

![Test Connector](/images/identitymanager/6.1/user-guide/set-up/connect-system/connector-declaration/connectorcreation_test_v602.webp)
