---
title: "Services not running or not registered"
description: "Fix the service-not-registered banner, a Host Scan service that shows offline while it runs, and services that fail after Register Services."
sidebar_position: 30
---

# Services not running or not registered

Privilege Secure runs several services next to the web service: Action, Email, Host Scan, Proxy, Scheduler, and Security Information and Event Management (SIEM). Use this page when a service shows as offline or partial, or when the console shows the banner "Action Service is not running or registered."

Start by checking the status of each service on the **Configuration** > **Service Nodes** page. See [Service nodes](/docs/privilegesecure/26.07/admin/service-nodes/service-nodes.md).

## Where the logs are

Service logs are in `C:\ProgramData\Stealthbits\PAM\Log` on the server that runs the service. See [Start with the logs](/docs/privilegesecure/26.07/troubleshooting/overview.md#start-with-the-logs).

Open the log for the failing service, such as `PAM-HostScanService<yyyymmdd>.log`. You can also read the logs in the console. See [Log files](/docs/privilegesecure/26.07/admin/audit-reporting/log-files.md). For Remote Access Gateway logs, see [Troubleshoot the Remote Access Gateway](/docs/privilegesecure/26.07/remote-access-gateway/troubleshooting.md).

## The banner says the Action Service isn't running or registered

**Symptom:** The console shows "Action Service is not running or registered." at the top of the page.

**Fix:**

1. Open the Windows Services console on the server, and confirm that the Privilege Secure services are running. Start any that are stopped.
1. Select **System Settings** > **Services**, and confirm that **NPS Rest URL** has the form `https://<nps-server>:6500`, with no trailing slash.
1. Click **Save**, and then click **Register Services**.

See [Set the NPS REST URL and register services](/docs/privilegesecure/26.07/configuration/system-settings/services-url.md) for the fields and the second **Register Services** button under **User Options** > **Settings**.

## Services return HTTP 500, or sessions stay in Provisioning

**Symptom:** After you register services, every service returns HTTP 500, or sessions stay in the Provisioning status.

**Cause:** The **NPS Rest URL** ends with a slash, for example `https://<nps-server>:6500/`.

**Fix:** Remove the trailing slash, click **Save**, and click **Register Services** again. Check this setting after an upgrade if sessions stick in Provisioning. Release 26.07.3 removes the trailing slash automatically. See [Set the NPS REST URL and register services](/docs/privilegesecure/26.07/configuration/system-settings/services-url.md).

## A high availability secondary server shows no nodes

**Symptom:** After an upgrade, the primary console shows no nodes for the secondary server, and the secondary is in an unhealthy state.

**Fix:** Register the services from the secondary server's own console.

1. Sign in to the web console on the secondary server.
1. Select **System Settings** > **Services**.
1. In **NPS Rest URL**, enter the fully qualified domain name (FQDN) URL of the secondary server, such as `https://<secondary-server>:6500`.
1. Click **Save**, and then click **Register Services**.

The secondary node then appears in the primary console. If high availability doesn't work after the upgrade, reconfigure it. See [High availability](/docs/privilegesecure/26.07/install/high-availability.md).

{/* TODO verify: the secondary-server steps and the need to reconfigure high availability after an upgrade. The source is a support resolution, not a lab test. */}

## Host Scan service shows offline but the Windows service is running

**Symptom:** On the **Service Nodes** page, the Host Scan service shows a red status, and the node shows **Partial**. In Windows Services, the Host Scan service (`SbPAMHostScan`) is running. Other services are online.

**Cause:** The status dot shows the result of the service heartbeat, not whether the process runs. When the heartbeat can't connect, the service shows as offline even though the scan worker can still run jobs.

To confirm, open the newest `PAM-HostScanService<yyyymmdd>.log` file. It repeats this warning about every 15 seconds:

```text
Heartbeat unable to connect: The SSL connection could not be established, see inner exception.
```

The log rarely records the inner exception. To find it, search all `PAM-HostScanService*.log` files for `RemoteCertificate`. A line that contains `RemoteCertificateNameMismatch` means that the certificate on port 6500 doesn't include a name the service uses to connect.

### Reissue the certificate with every name

If the log shows `RemoteCertificateNameMismatch`, reissue the certificate bound to the console website on port 6500 so that it lists every name the services use. Include the FQDN of the Privilege Secure server, the short name, and the FQDN of each service node. Bind the new certificate and restart the services.

1. Request a certificate that lists each name in the Subject Alternative Name (SAN) field. See [Replace the web console certificate](/docs/privilegesecure/26.07/configuration/certificates.md).
1. Bind the certificate to the **SbPAM Web Service** website in Internet Information Services (IIS), and run `iisreset`.
1. In **System Settings** > **Services**, confirm **NPS Rest URL** uses a name on the certificate, and click **Register Services**.
1. Restart the `SbPAMHostScan` service from Windows Services on each node that runs Host Scan.
1. On the **Service Nodes** page, confirm that the Host Scan service shows **Online**.

{/* TODO verify: certificate reissue fixes heartbeat */}

If the Host Scan service connects to the web service by a name you can't predict, such as an IP address or `localhost`, include that name in the SAN field too.

{/* TODO verify: which names the Host Scan heartbeat uses to connect, and whether IP addresses are needed in the SAN field. The lab saw a name mismatch for the node FQDN and localhost on 6500. */}

### Restart the service from Windows Services

**Register Services** may not restart the Host Scan service. After you register services, restart `SbPAMHostScan` from Windows Services on the server, and check the **Service Nodes** page again.

{/* TODO verify: whether Register Services restarts the Host Scan service when it is running. Seen once, with Host Scan already offline. */}

### Accept untrusted certificates only as a last resort

If the service can't trust the certificate because the certificate authority (CA) isn't trusted, fix the trust first. Install the CA certificate in the Trusted Root store on each service node. See [Replace the web console certificate](/docs/privilegesecure/26.07/configuration/certificates.md).

Only when you can't fix the trust, the services can skip certificate validation. Check **Ignore HTTPS Certificate Errors** in **System Settings** > **Services**, and click **Register Services**. This sets `RestService.InsecureSkipVerify` to `true` in the `appsettings.user.json` file of each service that uses the **NPS Rest URL**: Action, Email, Host Scan, Proxy, Scheduler, and SIEM. Skipping validation exposes the connection to impersonation. Don't use it for a name mismatch, which a reissued certificate fixes.

Releases before 26.03.0 overwrote `appsettings.user.json` during service registration, so a manual `InsecureSkipVerify` setting was lost after an upgrade. From 26.03.0, the file is preserved.

{/* TODO verify: that Register Services is needed after the checkbox changes. */}

## Connection refused on port 6500 during a restart

**Symptom:** The Action Service log shows an error such as "actively refused" for port 6500, for example on a token renewal request.

**Cause:** IIS and the services were restarting. The web service isn't listening for a short time during a restart.

**Fix:** No action is needed. These messages are expected during a restart. If they continue after the restart finishes, check that the **SbPAM Web Service** website is started in IIS and that **NPS Rest URL** is correct.

## Related topics

- [Troubleshooting](/docs/privilegesecure/26.07/troubleshooting/overview.md)
- [Troubleshoot installation and upgrade](/docs/privilegesecure/26.07/install/troubleshoot-installation.md)
- [Active Directory sync and scan problems](/docs/privilegesecure/26.07/troubleshooting/ad-sync-and-scans.md)
- [Services Are Not Running](/docs/kb/privilegesecure/troubleshooting-and-errors/services-are-not-running)
