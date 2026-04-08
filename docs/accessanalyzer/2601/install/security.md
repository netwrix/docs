---
title: "Security Best Practices"
description: "Security hardening recommendations for Access Analyzer deployments"
sidebar_position: 90
---

# Security Best Practices

Follow these recommendations to harden your Access Analyzer deployment.

## License Key Protection

Your Netwrix license key provides access to the OCI package registry. Treat it as a credential:

- Do not commit license keys to version control
- Do not store license keys in plaintext configuration files
- Clear shell history after setting the `LICENSE_KEY` environment variable:

  ```bash
  history -c
  ```

## Network Security

- Restrict access to the K3s API server (port 6443) to trusted networks only
- Limit inbound access to the Access Analyzer web interface to authorized IP ranges
- Use firewall rules to allow only the minimum required outbound endpoints — see [Network Configuration](/docs/accessanalyzer/1_0/install/network)

## TLS / SSL

- Replace the default self-signed certificate with a certificate issued by a trusted CA for production use
- Ensure outbound TLS verification is enabled by mounting your organization's CA bundle — see [SSL / TLS Configuration](/docs/accessanalyzer/1_0/install/ssl)

## RBAC and Access Control

- Limit the number of administrator accounts
- Use the **Viewer** role for users who only need read access
- Review user accounts periodically and remove unused accounts

## Token and Credential Rotation

- Rotate the ArgoCD admin password after initial setup:

  ```bash
  kubectl -n argocd patch secret argocd-initial-admin-secret \
    -p '{"data": {"password": "'$(echo -n '<NEW_PASSWORD>' | base64)'"}}'
  ```

- Rotate service account credentials on a regular schedule

## Audit Logging

- Access Analyzer maintains an audit log of user actions — review it regularly in **Settings** > **Audit Logs**
- Monitor the installer log at `/var/log/dspm-installer.log` for installation-related events
- Monitor ArgoCD logs for application sync events:

  ```bash
  kubectl logs -n argocd deployment/argocd-server
  ```

## Kubernetes Security

- Secrets at rest are encrypted by default (K3s `--secrets-encryption` flag)
- Kubeconfig file permissions are set to `644` — restrict further if the VM is shared
- Regularly apply OS security patches to the host VM
