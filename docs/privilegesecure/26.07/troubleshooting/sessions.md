---
title: "Sessions fail or get stuck"
description: "Find the cause and fix when a session won't provision, stays in Provisioning, doesn't deprovision, or is rejected for multifactor authentication or policy reasons."
sidebar_position: 40
---

# Sessions fail or get stuck

Use this page when a session doesn't start, stays in a transitional status, or doesn't end cleanly. Each entry gives the symptom, the cause, and the fix.

Session actions run through the Action Service. Check the Action Service log first. See [Log files](/docs/privilegesecure/26.07/admin/audit-reporting/log-files.md) and [Start with the logs](/docs/privilegesecure/26.07/troubleshooting/overview.md#start-with-the-logs).

## A session stays in Provisioning

**Symptom:** A session stays in the **Provisioning** status and never becomes active.

**Cause:** The services can't call the web service, or the **NPS Rest URL** ends with a trailing slash.

**Fix:**

1. Select **Configuration** > **Service Nodes**, and confirm the Action and Scheduler services are online. See [Services not running or not registered](/docs/privilegesecure/26.07/troubleshooting/services.md).
1. Select **System Settings** > **Services**, and remove any trailing slash from **NPS Rest URL**. Click **Save** and **Register Services**. See [Set the NPS REST URL and register services](/docs/privilegesecure/26.07/configuration/system-settings/services-url.md).
1. Read the Action Service log for errors at the time of the request.

If the session stays in **Provisioning** after an upgrade, also see [Troubleshoot installation and upgrade](/docs/privilegesecure/26.07/install/troubleshoot-installation.md).

If provisioning finishes but takes more than 30 seconds, see [Long Provisioning Times in Privilege Secure](/docs/kb/privilegesecure/troubleshooting-and-errors/long-provisioning-times-in-privilege-secure).

## A session stays in Deprovisioning

**Symptom:** A session ends, but its status stays at **Deprovisioning**. The temporary account or group membership isn't removed. In **Configuration** > **Service Nodes** > **Scheduler Service**, the action queue shows the activity as **Cancelling**.

**Fix:** Upgrade to 26.07.3, which fixes two causes of a queue stuck in **Cancelling**. In an earlier release, cancelling a Running or Queued DisableUser action could reschedule in a loop, and the last action in a queue was compared against the action group template, so it was never detected as the last action. If the session still stays in **Deprovisioning**, check the Action Service log for the failed step. On Linux, see [Linux deprovisioning fails because the account is still in use](#linux-deprovisioning-fails-because-the-account-is-still-in-use). For other targets, contact [Netwrix Support](https://www.netwrix.com/support.html) with the Action Service log.

## Linux deprovisioning fails because the account is still in use

**Symptom:** After a Linux session ends, the temporary user and the home directory remain, and the console shows an error. The log shows that `userdel` found the account still in use.

**Cause:** Deprovisioning ran before the user's processes finished ending. The command works a few seconds later.

**Fix:** Upgrade to 26.07.3 or later. From 26.07.3, the Linux remove-user step runs `userdel -r` up to 10 times, 3 seconds apart, until the account is gone. On an earlier release, the step runs `userdel` once. If the session stays on the **Active** tile, select it and select **End Session** again until it leaves the tile. See [Active sessions](/docs/privilegesecure/26.07/admin/sessions/active-sessions.md). If the temporary account remains after the session ends, contact [Netwrix Support](https://www.netwrix.com/support.html) with the Action Service log.

## Group removal is reported incorrectly during a bulk deprovision

**Symptom:** A bulk deprovision of many accounts finishes with a successful activity, but the log reports errors about removing a user from a group. Or the log reports a group, role, or user as "not found (may have been deleted)" when the lookup failed for another reason.

**Cause:** The cleanup step that removes users from Active Directory groups, Microsoft Entra ID groups, and SQL Server and Oracle roles never fails the activity, even when a removal fails. Several messages that look harmless, such as "not found (may have been deleted)" and "user may not exist in tenant (cleanup complete)", count the item as removed even when a permissions or connection problem caused the result.

**Fix:** Don't rely on the activity status. In the Action Service log, search for these entries:

- `Failed to remove user from <type> <group name>` followed by the reason, where the type is AD, Entra, SQL, or Oracle.
- `Group/role removal complete: N succeeded, M failed`, which summarizes the run.
- `All group/role removals failed (cleanup incomplete)` or `Completed with partial failures`.

Check the group membership of the affected accounts on the target, and remove any membership that remains. For Entra ID groups, the error "No credential available for Entra ID group" means the Entra ID tenant has no managed resource with credentials configured.

## The session request returns "Unable to find policy"

**Symptom:** A user requests a session and gets the message "Unable to find policy for activity: `<activity>`, with resource: `<resource>`. Contact the NPS Administrator to request access." For a session on a credential, the message says "with credential: `<credential>`" instead of the resource.

**Cause:** No access policy includes the activity and applies to both the user and the resource. If more than one policy matches, Privilege Secure uses the first in alphabetical order by name.

**Fix:**

1. Open the access policy that should grant the access. See [Access policies](/docs/privilegesecure/26.07/configuration/access-policies/overview.md).
1. Confirm that it includes the activity named in the message.
1. Confirm that the user, or a group or collection the user belongs to, is in the policy.
1. Confirm that the resource is in the policy, either directly or through a resource collection. A collection that is tied to the resource's platform also matches. For a session on a credential, confirm that the credential is in the policy.
1. Confirm that the policy is enabled. Disabled and deleted policies never match.

## An error mentions a null PlatformID

If a scan or session fails with a null platform ID error, see [Troubleshoot installation and upgrade](/docs/privilegesecure/26.07/install/troubleshoot-installation.md).

## Multifactor authentication rejects the code on the first attempts

**Symptom:** A user who connects with a Remote Desktop Protocol (RDP) file enters a valid multifactor authentication (MFA) code, and the console reports a wrong code. The code is accepted on the third or fourth attempt.

**Fix:** Ask the user to try again. Confirm that the Privilege Secure server and the user's device have synchronized clocks, for example with a network time protocol (NTP) source. The problem can occur without any clock drift. If the code is still rejected, contact [Netwrix Support](https://www.netwrix.com/support.html).

## Related topics

- [Troubleshooting](/docs/privilegesecure/26.07/troubleshooting/overview.md)
- [Known issues in 26.07](/docs/privilegesecure/26.07/troubleshooting/known-issues.md)
