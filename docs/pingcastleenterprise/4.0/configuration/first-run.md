---
sidebar_position: 1
sidebar_label: First run
---
# First run

## Initial startup

When the application first runs, it creates the database. If an error
occurs with the database (missing right, invalid connection string)
or hosting, the application won't display the next screen.

For security reasons, PingCastle Enterprise has no default account or password.

When the application has no configured user, a special screen appears
to create the first user. This user receives the \"Admin\" role.

![First user creation screen](/images/pingcastleenterprise/4.0/install/image79.webp)

## Scheduling your first scan

PingCastle Enterprise runs scheduled scans through **Configuration** > **Scheduler**. See [Active Directory scan scheduling](./first-scan/ad-scan-scheduling.md) for the full field reference.

:::note
The scheduled scan wizard labels the credential profile field "execution profile." Credential profile and execution profile refer to the same thing.
:::

### Scheduling an Active Directory scan

1. If the domain isn't already in PingCastle Enterprise, go to **Infrastructure** > **Domains** and create it with just the name. PingCastle Enterprise populates the domain's SID automatically the first time it processes a report for that domain, whether from a scheduled scan or a manual import.
2. Go to **Configuration** > **Scheduler**.
3. Click **Credential Profiles**, then **Create profile**.
4. Enter a profile name, select **Active Directory** as the scan type, select the Agent (use the default Agent), and select the domain. Toggle the run-as account switch if you're using a custom account, and add a description if needed.
5. Click **Create profile** to save the profile.
6. Click **Scheduled scans**, then **Create schedule**.
7. Enter a unique job name, select the execution profile you just created, set the scan frequency and time, toggle **Privileged Scan** depending on whether you want to run a privileged scan, set any advanced options you need, then click **Create schedule**.

After the job runs, its report appears on the domain's page in PingCastle Enterprise.

### Scheduling an Entra scan

Entra scans follow a different process for tenant setup. Go to [Entra scanning](./first-scan/entra-scanning.md) and use the **Add tenant** wizard to connect your tenant — the wizard includes its own scheduling step, so you can create the schedule as part of setup.

If you skip that step, or need to add another schedule for a tenant you've already connected, see [Scheduling an Entra scan](./first-scan/entra-scanning.md#scheduling-an-entra-scan).

## What's next

- **Authentication** — Configure Windows Authentication, OpenID Connect, SAML2, or a combination. See [Authentication](./settings/authentication.md#authentication).
- **Email** — Configure SMTP or Microsoft Graph for notifications. See [Email](./settings/email.md#email).
- **Entities and permissions** — Group domains and control who can see and act on them. See [Entities](../admin/entities.md#entities).
- **Agent deployment** — For domains a security or network boundary keeps the scheduler from reaching. See [Agent deployment](./agent-deployment.md).
- **Synchronization** — For multi-instance security zone deployments. See [Synchronization](./synchronization.md).
- **Decryption keys** — For decrypting reports agents encrypt before upload. See [Decryption keys](./decryption-keys.md).
- **Settings** — Authentication, notifications, data retention, and more. See [Settings](./settings/index.md).
