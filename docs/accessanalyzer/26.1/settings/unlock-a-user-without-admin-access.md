---
title: Unlock a User Without Admin Access
description: Unlock a locked-out account directly through Zitadel when no Admin or User admin can sign in to clear it from the Users tab.
sidebar_position: 3.5
---

If an Admin or User admin can still sign in, clear the lock from **Settings > Users** instead; see [Unlock a user](users.md#unlock-a-user). Use the steps on this page only when every Admin and User admin account has a lockout, or no one has those credentials, so nobody can reach the **Users** tab at all.

This talks to Zitadel, the identity provider behind Access Analyzer sign-in, directly with `kubectl` and `curl` instead of through the product API. It needs `kubectl` access to the cluster Access Analyzer is installed on, but not a working Access Analyzer session.

There's no bulk unlock. Repeat the lookup and unlock steps once per locked account.

## Before You Start

You need the installed hostname to reach Zitadel—it validates the request's `Host` header against this value and rejects anything else with "Instance not found," even once the connection itself succeeds. This is the Fully Qualified Domain Name (FQDN) you chose during installation, so it applies the same whether or not the host is domain-joined. Read it from the install host:

```bash
grep hostname /etc/dspm/installer.yaml
```

## Unlock the Account

1. Get the Zitadel admin token and open a tunnel to Zitadel. Run both in the same terminal session, and leave the second one running.

   ```bash
   PAT=$(kubectl get secret iam-admin-pat -n access-analyzer -o jsonpath='{.data.pat}' | base64 -d)
   kubectl port-forward svc/zitadel 8085:8080 -n access-analyzer
   ```

   Run the remaining steps from the same machine, in a second terminal. The tunnel only answers on `localhost` on the machine that opened it.

2. Look up the locked account by sign-in name. Substitute your hostname for `<hostname>` and the account's sign-in name for `<login-name>`.

   ```bash
   curl -s -X POST http://localhost:8085/v2/users \
     -H "Host: <hostname>" \
     -H "Authorization: Bearer $PAT" \
     -H "Content-Type: application/json" \
     -d '{"query": {"offset": "0", "limit": 100}, "queries": [{"loginNameQuery": {"loginName": "<login-name>"}}]}'
   ```

   If this returns no results, the sign-in name doesn't match what Zitadel has on record. Drop the `queries` filter to list every account instead, and find the one you need in the output:

   ```bash
   curl -s -X POST http://localhost:8085/v2/users \
     -H "Host: <hostname>" \
     -H "Authorization: Bearer $PAT" \
     -H "Content-Type: application/json" \
     -d '{"query": {"offset": "0", "limit": 100}}'
   ```

   Note the account's `userId`, and confirm its `state` reads `USER_STATE_LOCKED`.

3. Unlock it.

   ```bash
   curl -s -X POST http://localhost:8085/v2/users/<userId>/unlock \
     -H "Host: <hostname>" \
     -H "Authorization: Bearer $PAT" \
     -H "Content-Type: application/json" \
     -d '{}'
   ```

   A response with no error means the unlock succeeded.

4. Repeat step 2's lookup. The account's `state` should now read `USER_STATE_ACTIVE`. Have the user sign in again.

:::note
This clears the lockout only. It doesn't reset the password. If the user has also forgotten their password, an Admin or User admin still needs to run **Actions > Reset password** from the **Users** tab once someone can sign in—see [Reset a password](users.md#reset-a-password).
:::

## Remove a Lost Authenticator App

A user stuck on the two-factor verification step because they lost their authenticator app isn't locked out, but the **Users** tab has no action to remove another user's authenticator app either. Remove it the same way, using the `userId` from step 2 above:

```bash
curl -s -X DELETE http://localhost:8085/v2/users/<userId>/totp \
  -H "Host: <hostname>" \
  -H "Authorization: Bearer $PAT"
```

The user can then sign in with their password alone and set up a new authenticator app from **Security settings**; see [Set up an authenticator app](users.md#set-up-an-authenticator-app).
