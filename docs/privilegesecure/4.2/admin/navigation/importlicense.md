---
title: "Import the License File"
description: "Import the License File"
sidebar_position: 30
---

# Import the License File

Netwrix Privilege Secure comes with a temporary 30-day trial license. a banner at the top indicates
the expiration date of a license about to expire.

![Dashboard interface showing an expiration banner and pointint to the User Options menu with the About page](/images/privilegesecure/4.2/accessmanagement/admin/expirationbanner.webp)

However, you can import your license file on the About page (User Options > About). An expired
license doesn't necessarily prevent users from logging in. If a license is expired, and the login
attempt doesn't exceed the license count, users is still able to log in. If a license is
expired, and the login attempt does exceed the license count, Privilege Secure prevents the
login.

Licensing is done according to user count. Any user who has provisioned access consumes a
license after their first login. This is true for all users, regardless of role.

:::warning
If your license is expired, and you can still log in, you can't create
activity sessions or add new users.
:::


To import the license key file.

**Step 1 –** log in to the Privilege Secure console as an administrator.

**Step 2 –** Click the User icon in the upper-right corner beside your login name to open the User
Options menu.

**Step 3 –** Select About. The About page opens.

![About page showing trial license details](/images/privilegesecure/4.2/accessmanagement/admin/triallicensedetails.webp)

**Step 4 –** In the Upload License File section, click Import License.

**Step 5 –** Navigate to the license file and click Open to import the license.

![About page showing successful upload of a license](/images/privilegesecure/4.2/accessmanagement/admin/licenseimportsuccess.webp)

A message indicates the license file uploaded successfully. The license information displays at the
top of the page, and the expiration banner disappears from the top. See the
[About Page](/docs/privilegesecure/4.2/admin/navigation/aboutpage.md) topic for additional details available on this page.
