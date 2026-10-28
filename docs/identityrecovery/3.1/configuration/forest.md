---
title: "Connect a Forest"
description: "Add an Active Directory forest so that Identity Recovery can back it up and recover it."
sidebar_position: 50
---

# Connect a Forest

Use the Forest tab of the Configuration interface to add an Active Directory forest so that Identity
Recovery can back it up and recover it.

## Add a Forest

You must add a forest before you can back it up or recover it.

![ Forest configurations ](/images/identityrecovery/3.1/product/configuration/forest/forest_configuration.png)

**Step 1 –** On the Forest Configuration page, click the **Add Forest** button. The Add Forest window opens.

![ Add Forest window](/images/identityrecovery/3.1/product/configuration/forest/forest_configuration_page1.png)

**Step 2 –** In the Domain field, enter the name of the root domain in the forest
[example.domain.com].

**Step 3 –** Enter the account username [DOMAIN\USERNAME] for connecting to the forest in the
Account field. Ensure that the account has privileges to access the domain.

**Step 4 –** Enter the password for the account in the Password field.

**Step 5 –** Click **Save**.

Identity Recovery adds the forest to the system.
