---
title: "Licensing"
description: "Learn how user count sets your Privilege Secure license, what the trial license includes, and what happens when you exceed the user count."
sidebar_position: 80
---

# Licensing

A license file sets how many users Netwrix Privilege Secure for Access Management allows. The file provides a number of credits, and each credit allows one user.

## What uses a license

A user who has provisioned access consumes a license after their first sign-in. This applies to every user, regardless of role.

When the number of licensed users reaches the number of credits, a user who signs in for the first time can't sign in, because Privilege Secure can't create the user. The same happens when the trial license has expired or when the license service isn't reachable.

{/* TODO verify: the error text that the user sees at sign-in. */}

The license counts users.

{/* TODO verify: that resource count has no effect on licensing (BE 18 open item). */}

## Trial license

A new installation includes a trial license. The trial allows at least 10 users.

{/* TODO verify: the trial duration. The 26.03 pages say 30 days. */}

## Viewing license information

To see the license, select **User Options** > **About**. The About page shows **Version**, **License Type**, **Active Licenses**, and **Customer Info**. The number of licenses in use shows in the **Licenses** counter (used / total) on the **Users & Groups** page.

{/* TODO verify: whether License Expires shows for a trial or subscription license in 26.07. */}

To apply a license file, see [Activate a license](/docs/privilegesecure/26_07/install/activate-license).

## Expired licenses

{/* TODO SME: behavior after the license expires. install/overview says only the built-in Admin account can sign in. importlicense and login say sign-in continues while the user count isn't exceeded, but sessions and new users are blocked. The lab didn't settle it. Describe one behavior after the SME confirms. */}

Import a valid license file before the trial or subscription license expires.

## Removing users

{/* TODO SME: whether removing a user frees a license, and how the count treats removed and disabled users. A community thread reports a Users page count that doesn't match the Licenses column. */}

Removing a user also removes the user's history. See [Users and groups](/docs/privilegesecure/26_07/admin/users-groups).
