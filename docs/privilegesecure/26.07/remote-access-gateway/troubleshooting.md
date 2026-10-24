---
title: "Troubleshoot the Remote Access Gateway"
description: "Find the cause and fix for Remote Access Gateway sign-in errors, portal load failures, and failed sessions, and where to find the logs."
sidebar_position: 60
---

# Troubleshoot the Remote Access Gateway

Use this page when users can't sign in to the portal, the portal doesn't load, or a session doesn't open. Each entry gives the symptom, the cause, and the fix.

## Log files

| Component | Log | Location |
|---|---|---|
| Gateway | `PAM-RagGateway*.log` | `C:\ProgramData\Stealthbits\PAM\Log` |
| Portal | `PAM-RagPortal*.log` | `C:\ProgramData\Stealthbits\PAM\Log` |
| Portal web server (nginx) | `nginx-access.log` | `C:\ProgramData\Stealthbits\PAM\Log` |
| Apache Guacamole daemon (guacd) | Output of `docker logs <container>` | Inside Windows Subsystem for Linux (WSL) on the gateway server |

The gateway log is empty until the gateway receives its first request. The portal log also holds the nginx error output.

To find the guacd container name, run `docker ps` inside WSL. For the logs of the other Privilege Secure services, see [Log files](/docs/privilegesecure/26_07/admin/audit-reporting/log-files).

## The sign-in page says the license has expired

![Portal sign-in page with a red banner about the license](/images/privilegesecure/26.07/remote-access-gateway/portal-login-license-banner.webp)

**Symptom:** The sign-in page shows the banner "The license has expired or the license service is offline".

**Cause:** The Privilege Secure license is expired, isn't valid, or the license service isn't running. The portal reads the license state from Privilege Secure.

**Fix:** Correct the license in the Privilege Secure console. See [Activate a license](/docs/privilegesecure/26_07/install/activate-license).

## A user belongs to no access policy

![Activity Request wizard with a message that the user belongs to no access policies](/images/privilegesecure/26.07/remote-access-gateway/portal-no-access-policy.webp)

**Symptom:** The **Activity Request** wizard shows "You do not appear to belong to any access policies, please contact your Netwrix Privilege Secure administrator for assistance".

**Cause:** The user isn't a member of any access policy.

**Fix:** Add the user to an access policy that includes the activity and the resource. See [Access policies](/docs/privilegesecure/26_07/configuration/access-policies/overview).

## The sign-in page rejects the login method

**Symptom:** The sign-in page rejects the user with "Cannot use this login method".

**Cause:** The `AllowedLoginMethods` setting doesn't allow the method. The default value, `0`, allows single sign-on (SSO) only. With value `1`, the portal also rejects a username that contains `\` or `@`.

**Fix:** Ask the user to use an allowed method, or change the setting. See [Configure sign-in for the portal](/docs/privilegesecure/26_07/remote-access-gateway/configuration/authentication).

## A connector can't be used through the gateway

**Symptom:** The sign-in fails with "The authentication method: '\<name\>' cannot be used via Remote Access Gateway".

**Cause:** The connector isn't enabled for the portal. A connector with **Use Remote Access Gateway** selected works only through the portal. A connector without it works only on the console.

**Fix:** Create or edit a connector for the portal, and select **Use Remote Access Gateway**. See [Configure sign-in for the portal](/docs/privilegesecure/26_07/remote-access-gateway/configuration/authentication).

## ERRCONNECT_LOGON_FAILURE after you enter the target password

![Live Sessions page with a logon failure message](/images/privilegesecure/26.07/remote-access-gateway/portal-logon-failed.webp)

**Symptom:** The **Live Sessions** page shows "ERRCONNECT_LOGON_FAILURE" and "Failed to connect to target server. Logon failed."

**Cause:** The target rejected the sign-in. Check these causes:

- **Wrong password.** The password isn't the one for the account that the activity uses on the target.
- **Wrong account type.** The activity uses the **Requester** login account, and the user signed in to the portal with a local Privilege Secure user. The target receives that username, and a domain-joined Windows target has no such account. Sign in with a domain user, or ask the administrator to use a different login account on the activity.

**Fix:** Enter the correct password, or fix the login account. The prompt takes only a password, so you can't enter a different username at connect time.

{/* TODO verify: the supported guidance for a Requester login account with a local Privilege Secure user. The lab confirmed the error but not which cause applied. */}

## The portal refuses to connect while the service is running

**Symptom:** The browser reports that the portal "refused to connect". The **NPS Rag Portal** service shows **Running**.

**Cause:** nginx can't bind port 80, and the service keeps restarting it. Another program, usually the IIS Default Web Site, uses port 80. The portal log shows this line:

```text
bind() to 0.0.0.0:80 failed (10013: An attempt was made to access a socket in a way forbidden by its access permissions)
```

**Fix:** Install the portal on a dedicated server with ports 80 and 443 free. See [Remote Access Gateway requirements](/docs/privilegesecure/26_07/remote-access-gateway/requirements).

## The portal returns a 502 error or a blank page

**Symptom:** The portal loads but returns a 502 error or a blank page.

**Cause:** The portal can't reach the gateway on port 6550. Check these causes:

- The IIS site **NPS Gateway Web Service** on the gateway server is stopped.
- A firewall blocks port 6550 between the portal server and the gateway server.
- The nginx upstream still holds the placeholder `nps-gatewayhost` because `Configure-Nginx.ps1` didn't run.

**Fix:** Start the IIS site, open port 6550, or run `Configure-Nginx.ps1 <gateway-server>` on the portal server. See [Install the portal](/docs/privilegesecure/26_07/remote-access-gateway/install/install-portal).

## The gateway runs with default settings

**Symptom:** Sessions fail. `appsettings.json` doesn't exist in `C:\ProgramData\Stealthbits\PAM\RagGateway`, or `NPS.Uri` points to `localhost` and `Guacd.ServerThumbprint` holds "Guacd:ServerThumbprint not set!". For the file location, see [Gateway settings reference](/docs/privilegesecure/26_07/remote-access-gateway/configuration/gateway-settings).

**Cause:** `Configure-Gateway.ps1` didn't finish. The script exits without writing `appsettings.json` when it can't reach guacd on port 4822, so the file might not exist.

**Fix:** Start guacd, and confirm that it listens on port 4822. Then run `Configure-Gateway.ps1` again. See [Install the gateway and guacd](/docs/privilegesecure/26_07/remote-access-gateway/install/install-gateway#configure-the-gateway).

## A session closes or stays blank as soon as it opens

**Symptom:** A session closes, or the page stays blank, right after it opens. The guacd log might show "wrong security type?", or the gateway log might show "One time use token ... not found or revoked".

**Cause:** One of these causes applies:

- The **RDP Proxy Host** or **SSH Proxy Host** on the connection profile of the access policy can't be reached from guacd, or is set to `localhost`. From inside the guacd container, `localhost` is the container, not the Privilege Secure server.
- The one-time token for the session expired or was revoked.

**Fix:** Set the proxy host to an address that guacd can reach, and then start the session again from the dashboard.

{/* TODO verify: the connection profile field names and the cause and fix on 26.07.3. */}

## The gateway reports a certificate thumbprint mismatch

**Symptom:** The gateway log shows "Certificate thumbprint mismatch" when a session starts.

**Cause:** The guacd certificate changed after the gateway stored its thumbprint.

**Fix:** Run `Configure-Gateway.ps1` again so that it stores the new thumbprint. See [Portal and gateway certificates](/docs/privilegesecure/26_07/remote-access-gateway/configuration/certificates#regenerate-the-guacd-certificate).

## Sessions fail after the server restarts

**Symptom:** Users sign in to the portal and request sessions, but the sessions don't open after the gateway server restarts.

**Cause:** WSL stopped, so guacd is down. WSL doesn't start by itself after a restart, and it stops when it is idle.

**Fix:**

1. On the gateway server, run `wsl -l -v`. If the distribution shows **Stopped**, start it.
2. Run `Test-NetConnection <guacd-host> -Port 4822` and confirm that `TcpTestSucceeded` is `True`.

If the address of the WSL instance changed, run `Configure-Gateway.ps1` again with the new `-NPSGuacdHost` value.

If WSL doesn't start by itself, see [Start WSL automatically](/docs/privilegesecure/26_07/remote-access-gateway/install/install-gateway#start-wsl-automatically).

{/* TODO verify: the supported way to keep WSL running after a restart. SME review is pending. */}
{/* TODO verify: that the WSL address can change after a restart. The lab address stayed the same after one restart. */}

## Colors look wrong in an RDP session

**Symptom:** Colors in an RDP session look wrong, such as red and blue swapped.

**Cause:** A guacd version that doesn't match the portal can cause this. Release 26.07.3 requires guacd 1.6.0.

**Fix:** In WSL, run `docker ps` and confirm that the guacd image is exactly `guacamole/guacd:1.6.0`. If it isn't, upgrade guacd. See [Upgrade the Remote Access Gateway](/docs/privilegesecure/26_07/remote-access-gateway/install/upgrade#match-the-guacd-version).

{/* TODO verify: PSAM-1442. Colors looked correct in the lab on 26.07.3 with guacd 1.6.0, but the fix is awaiting verification. Don't call it fixed until the SME confirms. */}
{/* TODO verify: keyboard known issues (numeric keypad, AltGr, special characters) after SME review. */}
{/* TODO verify: whether the pointer artifacts on guacd 1.6.0 remain in 26.07.3. */}
