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

**Fix:** Check the Action Service log for the failed step. On Linux, see [Linux deprovisioning fails because the account is still in use](#linux-deprovisioning-fails-because-the-account-is-still-in-use). For other targets, contact [Netwrix Support](https://www.netwrix.com/support.html) with the Action Service log.

{/* TODO: Stuck deprovisioning (PSAM-1406) is open with no workaround in Jira. Ask the SME whether it is specific to SQL Server or PostgreSQL, then add the cause and workaround. */}

## Linux deprovisioning fails because the account is still in use

**Symptom:** After a Linux session ends, the temporary user and the home directory remain, and the console shows an error. The log shows that `userdel` found the account still in use.

**Cause:** Deprovisioning ran before the user's processes finished ending. The command works a few seconds later.

**Fix:** Upgrade to 26.07.3 or later. On an earlier release, wait a few seconds after the session ends and then retry the deprovisioning.

{/* TODO verify: the control that retries deprovisioning, and that the userdel race fix (PSAM-639, PSAM-1338) shipped in 26.07.3 */}

A bulk deprovision of many accounts can log a misleading error about removing a user from a group, even though the user is removed. Check the target before you deprovision again.

{/* TODO verify: the exact wording of the bulk deprovision log message and the first 26.07 release that corrects it (PSAM-1460, 26.07.3). */}

## The session request returns "Unable to find policy"

**Symptom:** A user requests a session and gets the message "Unable to find policy for activity: `<activity>`, with resource: `<resource>`. Contact the NPS Administrator to request access."

**Cause:** No access policy includes the activity and applies to both the user and the resource. If more than one policy matches, Privilege Secure uses the first in alphabetical order by name.

**Fix:**

1. Open the access policy that should grant the access. See [Access policies](/docs/privilegesecure/26.07/configuration/access-policies/overview.md).
1. Confirm that it includes the activity named in the message.
1. Confirm that the user, or a group or collection the user belongs to, is in the policy.
1. Confirm that the resource, or a collection or credential that includes it, is in the policy.

{/* TODO verify: the scope of resource matching (collections and credentials). */}

## An error mentions a null PlatformID

If a scan or session fails with a null platform ID error, see [Troubleshoot installation and upgrade](/docs/privilegesecure/26.07/install/troubleshoot-installation.md).

## Multifactor authentication rejects the code on the first attempts

**Symptom:** A user who connects with a Remote Desktop Protocol (RDP) file enters a valid multifactor authentication (MFA) code, and the console reports a wrong code. The code is accepted on the third or fourth attempt.

**Fix:** Ask the user to try again. Confirm that the Privilege Secure server and the user's device have synchronized clocks, for example with a network time protocol (NTP) source. The problem can occur without any clock drift.

{/* TODO verify: status of the intermittent MFA code rejection when connecting through RDP files (PSAM-1319, marked for 26.07.1, awaiting verification). Don't call it fixed until the SME confirms. */}

## Related topics

- [Troubleshooting](/docs/privilegesecure/26.07/troubleshooting/overview.md)
- [Known issues in 26.07](/docs/privilegesecure/26.07/troubleshooting/known-issues.md)
