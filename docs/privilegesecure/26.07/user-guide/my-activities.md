---
title: "My Activities"
description: "Find, filter, and group the activities that your access policies grant, and start a session request from an activity card."
sidebar_position: 40
---

# My Activities

The **My Activities** page lists the activities that your access policies grant to you. An activity is a defined set of actions that Privilege Secure runs before, during, and after a session, such as adding you to a local group on a server. Select **My Activities** in the navigation menu to open the page.

Each activity appears as a card. If your access policies contain only one activity, the console opens that card automatically.

{/* TODO screenshot: the My Activities page with activity cards (needs a user who belongs to an access policy) */}

## Search and group activities

The page has two controls:

- **Search activities...**: type part of an activity name to filter the cards.
- **Group by**: choose how to organize the cards.
  - **Activities (a-z)** lists the cards alphabetically. This is the default.
  - **Access Policy (a-z)** groups the cards under the access policy that grants them.

If two access policies grant you the same activity, the console merges them into one card when you sort by activity. When you request a session, you can still choose which access policy to use. When you group by access policy, an activity appears under every policy that includes it.

For example, if the access policies `<policy-a>` and `<policy-b>` both grant the same activity, grouping by **Activities (a-z)** shows one card. Grouping by **Access Policy (a-z)** shows the activity under both policies.

{/* TODO screenshot: the Group by menu */}

## Start a session from an activity

Expand a card to see your sessions for that activity and to create a new one. Select **+** (**Create a session**) on the card to open the **Configure session** dialog. The activity is already selected. Choose the access policy and the resources, enter any notes or ticket number that the policy requires, and select **Start Session**. This dialog is shorter than the **Activity Request** wizard that **Create Session** on the Dashboard opens, which takes you through activity, group, and resource selection, notes, scheduling, and a review step. See [Request a session](/docs/privilegesecure/26.07/user-guide/request-session.md).

When a session is ready, you launch it from the card or from the Dashboard. See [Connect to a session](/docs/privilegesecure/26.07/user-guide/connect-session.md). What you can do after you connect, such as viewing a password, depends on the connection profile in your access policy. See [Connection profiles](/docs/privilegesecure/26.07/configuration/access-policies/connection-profiles.md).

Each card shows the activity name and, below it, the name of the resource. Select a card to expand a panel under it. When you have no session for the activity, the panel shows "Create your first session!", the note "The session will be recorded and created with temporary credentials", and a **Create session** button.

When you have sessions for the activity, the panel shows a tile for each session, with a **+** (**Create a session**) button beside the tiles. A card that has a session also shows a green dot. Each tile shows the resource name, the login account, when the session started and when it ends, and its status, such as "Waiting for approval". The **...** menu on a tile that waits for approval has **Copy username** and **Stop session**.

{/* TODO verify: the menu on a tile for a running session, and the tile for a session that has started. The lab sessions are still waiting for approval. */}
{/* TODO screenshot: an expanded activity card with a session */}

## When the page is empty

If the page shows no cards, you don't belong to an access policy that grants an activity. Ask your Privilege Secure administrator to add you to an access policy.
