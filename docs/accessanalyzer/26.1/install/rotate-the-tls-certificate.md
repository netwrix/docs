---
title: Rotate the TLS Certificate
description: Replace the TLS certificate on a running Access Analyzer installation with dspm-installer update-cert, and roll back to a previous certificate if needed.
sidebar_position: 5
---

Rotate the TLS certificate with `update-cert`, a subcommand of the same `dspm-installer` binary you used to install Access Analyzer. `update-cert` and its counterpart, `rollback-cert`, talk to the cluster directly with `kubectl` instead of through the product API, so they work even when `platform-service` is failing because it doesn't trust the current certificate.

Run both commands with `sudo`. The default kubeconfig at `/etc/rancher/k3s/k3s.yaml` is readable only by root, so without `sudo`, `kubectl` falls back to `localhost:8080` and fails with "connection refused."

## When to Rotate the Certificate

Use `update-cert` when:

- The current certificate is expiring or has expired.
- An internal certificate authority (CA) issued the current certificate and pods are failing because they don't trust it, even though the install itself completed.
- You want to replace a self-signed demo certificate with a CA-issued one.

:::warning
Don't re-run the installer to change the certificate. The installer only writes the certificate and key Secret—it doesn't update the CA bundle every pod trusts, and ArgoCD reverts a manual edit on its next sync. `update-cert` updates both and waits for the cluster to pick them up.
:::

## Before You Start

1. Stage the new certificate and key on the install host. The conventional paths are:

   ```bash
   /etc/dspm/tls.crt    # PEM, full chain, leaf certificate first
   /etc/dspm/tls.key    # PEM private key matching the certificate
   ```

   Both files must be PEM. If you received a PFX or P12 file, convert it first:

   ```bash
   openssl pkcs12 -in cert.pfx -clcerts -nokeys -out /etc/dspm/tls.crt
   openssl pkcs12 -in cert.pfx -nocerts -nodes  -out /etc/dspm/tls.key
   ```

2. If a private CA issued the certificate, get the issuing root CA in PEM form too, for example `/etc/dspm/internal-root-ca.pem`. A certificate from a private CA requires this: a full-chain PEM omits the root by convention, so the certificate file alone gives the installer nothing to derive a trust anchor from. Only a self-signed certificate can skip this.

3. Confirm the certificate covers the installed hostname. `update-cert` reads the hostname from `/etc/dspm/installer.yaml` and stops if the certificate's Subject Alternative Names don't cover it.

## Rotate the Certificate

1. Run a dry run first. It validates the files and prints what would change without touching the cluster, so you can run it without cluster access.

   ```bash
   sudo dspm-installer update-cert \
     --tls-cert /etc/dspm/tls.crt \
     --tls-key /etc/dspm/tls.key \
     --ca-bundle /etc/dspm/internal-root-ca.pem \
     --dry-run
   ```

   Leave out `--ca-bundle` for a self-signed certificate. The output shows the hostname, the fingerprint of the replacement certificate, where the CA bundle comes from, and, if the cluster is reachable, the fingerprint the cluster serves. Fix the certificate or key files if validation fails here—`update-cert` hasn't written anything yet.

2. Run the rotation.

   ```bash
   sudo dspm-installer update-cert \
     --tls-cert /etc/dspm/tls.crt \
     --tls-key /etc/dspm/tls.key \
     --ca-bundle /etc/dspm/internal-root-ca.pem
   ```

   `update-cert` validates the certificate and key pair, confirms the certificate covers the hostname, and (with `--ca-bundle`) confirms the certificate chains to the bundle. It then snapshots the certificate the cluster serves to `/etc/dspm/cert-snapshots/<timestamp>/`, applies the new certificate and CA bundle, restarts every workload that mounts the CA bundle, and verifies the ingress serves the new certificate before it exits. On success, it prints `New certificate applied and verified (leaf <sha256>)`.

3. Confirm the certificate from a client machine.

   ```bash
   openssl s_client -connect dspm.corp.example.com:443 -servername dspm.corp.example.com </dev/null 2>/dev/null \
     | openssl x509 -noout -subject -issuer -dates -fingerprint -sha256
   ```

   The fingerprint should match the `leaf` value `update-cert` printed.

If verification fails, `update-cert` automatically restores the previous certificate from its snapshot and exits with a non-zero code. See [Exit codes](installer-reference.md#exit-codes) in the installer reference for what each code means and what to do next.

## If the Probe Fails Behind a Reverse Proxy

`update-cert` verifies the certificate by connecting to `<hostname>:<port>` from the install host. If a load balancer, reverse proxy, or split-horizon DNS sits in front of the cluster's ingress, that verification connects to the intermediary's certificate instead of the one you just installed, and `update-cert` rolls back a certificate that actually installed correctly. The error message names the expected fingerprint and points you to `--no-rollback`.

In that topology, run with `--no-rollback`, then verify the certificate yourself from a client that reaches the ingress directly, or read it from the Secret:

```bash
sudo dspm-installer update-cert \
  --tls-cert /etc/dspm/tls.crt \
  --tls-key /etc/dspm/tls.key \
  --ca-bundle /etc/dspm/internal-root-ca.pem \
  --no-rollback

sudo kubectl get secret dspm-tls -n kube-system -o jsonpath='{.data.tls\.crt}' \
  | base64 -d | openssl x509 -noout -fingerprint -sha256
```

If the new certificate turns out to be wrong, roll it back with `rollback-cert`.

## Roll Back a Certificate

Every rotation leaves a snapshot under `/etc/dspm/cert-snapshots/`. To restore a previous certificate:

1. List the available snapshots. This doesn't need cluster access.

   ```bash
   sudo dspm-installer rollback-cert --list
   ```

   The output shows the timestamp, hostname, leaf certificate fingerprint, and expiry of each snapshot.

2. Restore one.

   ```bash
   # the most recent snapshot
   sudo dspm-installer rollback-cert --latest

   # or a specific one
   sudo dspm-installer rollback-cert --snapshot /etc/dspm/cert-snapshots/2026-09-08T14-02-11Z
   ```

   `rollback-cert` restores the CA bundle along with the certificate and key, restarts the workloads that consume them, and verifies the result. On success, it prints `Restored and verified certificate from <dir>`.

:::note
Snapshots contain private key material. Access Analyzer writes them with restricted file permissions and never prunes them automatically. Remove ones you no longer need:

```bash
sudo ls -l /etc/dspm/cert-snapshots/
sudo rm -rf /etc/dspm/cert-snapshots/<timestamp>
```
:::

## Checking the Result

Confirm the cluster's state directly if an exit code left you unsure what happened:

```bash
# the certificate and key the ingress serves
sudo kubectl get secret dspm-tls -n kube-system -o jsonpath='{.data.tls\.crt}' \
  | base64 -d | openssl x509 -noout -subject -dates -fingerprint -sha256

# the CA bundle pods trust
sudo kubectl get configmap ca-bundle -n access-analyzer -o jsonpath='{.data}' | head -c 400

# ArgoCD application health
sudo kubectl get applications -n argocd

# platform-service came up after the restart
sudo kubectl rollout status deploy/platform-service -n access-analyzer
sudo kubectl logs deploy/platform-service -n access-analyzer --tail=50
```

Every application should show `Synced` and `Healthy`, and the `platform-service` log should show OpenID Connect (OIDC) discovery completing rather than exiting on a certificate error.

<details>
<summary>Troubleshooting: recovering when rollback-cert can't restore a snapshot</summary>

If `rollback-cert` itself can't apply a snapshot, the snapshot directory still holds everything you need to recover by hand. Each snapshot contains:

| File | Contents |
|---|---|
| `tls.crt` | The previous certificate chain. |
| `tls.key` | The previous private key. |
| `params.json` | The previous `customCaBundle` and `caBundle` Helm parameter values (`caBundle` is already base64-encoded). |
| `meta.yaml` | Timestamp, hostname, leaf certificate fingerprint, and expiry. |

Apply them directly:

```bash
SNAP=/etc/dspm/cert-snapshots/<timestamp>
sudo ls "$SNAP"

# 1. Restore the certificate and key Secret.
sudo kubectl create secret tls dspm-tls -n kube-system \
  --cert="$SNAP/tls.crt" --key="$SNAP/tls.key" \
  --dry-run=client -o yaml | sudo kubectl apply -f -

# 2. Restore the CA bundle parameters on the netwrix application.
#    List the parameters, find the 0-based positions of ingress.customCaBundle
#    and ingress.caBundle, and use them as N and M.
sudo kubectl get application netwrix -n argocd \
  -o jsonpath='{range .spec.source.helm.parameters[*]}{.name}{"\n"}{end}'
CUSTOM=$(sudo jq -r .customCaBundle "$SNAP/params.json")
BUNDLE=$(sudo jq -r .caBundle "$SNAP/params.json")
sudo kubectl patch application netwrix -n argocd --type json \
  -p "[{\"op\":\"replace\",\"path\":\"/spec/source/helm/parameters/N/value\",\"value\":\"$CUSTOM\"},
       {\"op\":\"replace\",\"path\":\"/spec/source/helm/parameters/M/value\",\"value\":\"$BUNDLE\"}]"

# 3. Force a refresh and restart the consumers.
sudo kubectl annotate application netwrix -n argocd argocd.argoproj.io/refresh=hard --overwrite
sudo kubectl rollout restart deploy/platform-service -n access-analyzer
sudo kubectl get applications -n argocd -w
```

</details>
