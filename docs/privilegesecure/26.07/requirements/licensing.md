---
title: "Licensing"
description: "Learn how user count sets your Privilege Secure license, what the trial license includes, and what happens when you exceed the user count."
sidebar_position: 80
---

# Licensing

A license file sets how many users Netwrix Privilege Secure for Access Management allows. The file provides a number of credits, and each credit allows one user.

## What uses a license

A user who has provisioned access consumes a license after their first sign-in. This applies to every user, regardless of role.

When the number of licensed users reaches the number of credits, a user who signs in for the first time can't sign in, because Privilege Secure can't create the user. The same happens when the trial license has expired or when the license service isn't reachable. Users who already have a license can still sign in, but they can't start sessions.

The sign-in page shows one of these messages:

- When the licensed user count is reached: "License count exceeded, please contact NPS Administrator."
- When the trial license has expired: "License has expired, please contact NPS Administrator."
- When the license service isn't reachable: "License service is offline, please contact NPS Administrator."

The license counts users. The number of resources doesn't affect it.

## Trial license

A new installation includes a trial license. The trial allows at least 10 users. {/* TODO verify: the trial user count on a 26.07.3 trial install. */}

{/* TODO verify: the trial duration. The Netwrix EULA says the term for trial software is 30 days from installation, but the expiry in the embedded trial key hasn't been checked against it. */}

## Viewing license information

To see the license, select **User Options** > **About**. The About page shows **Version**, **License Type** (**Trial** or **Full**), **Active Licenses**, and **Customer Info**. For a trial license, it also shows **License Expires**. When the license has credit entries, the page lists each entry's **Expiration Date** and **Licenses Applied**. The number of licenses in use shows in the **Licenses** counter (used / total) on the **Users & Groups** page.

To apply a license file, see [Activate a license](/docs/privilegesecure/26.07/install/activate-license.md).

## Expired licenses

{/* TODO verify: whether the credit count of an expired subscription license drops to 0, as it does for an expired trial. The licensing library that computes credits isn't public. */}

When the trial license has expired, Privilege Secure can't create new users, and no user can start a session. Users who already have a license can still sign in. A license that reports no credits has the same effect. A banner tells users that the license has expired or the license service is offline, and administrators get a link to the **About** page. Import a valid license file before the trial or subscription license expires. To import a file, see [Activate a license](/docs/privilegesecure/26.07/install/activate-license.md).

## Removing users

Removing a user deletes the user's sign-in record, which frees the license that the user used. Privilege Secure marks the user as deleted instead of erasing it, so the user's past sessions and activity history stay available. See [Users and groups](/docs/privilegesecure/26.07/admin/users-groups/users-groups.md).
