---
title: "SSL / TLS Configuration"
description: "Certificate auto-detection and custom CA bundle configuration for Access Analyzer"
sidebar_position: 60
---

# SSL / TLS Configuration

Access Analyzer uses HTTPS for all client-facing traffic, served through Traefik as the ingress controller. By default, a self-signed TLS certificate is generated during installation. This page covers certificate handling and custom CA bundle configuration.

## Default Behavior

After installation, Access Analyzer is accessible at `https://<SERVER_IP_OR_HOSTNAME>`. The default self-signed certificate causes browsers to display a security warning on first access.

## Certificate Auto-Detection

During installation, the installer scans for existing CA certificate bundles on the system. If a bundle is found, it is automatically mounted into ArgoCD components to enable TLS verification for outbound connections to the OCI registry and other external services.

The installer searches the following paths:

| Path | Description |
| --- | --- |
| `/etc/ssl/certs/ca-certificates.crt` | Debian/Ubuntu CA bundle |
| `/etc/pki/tls/certs/ca-bundle.crt` | RHEL/CentOS CA bundle |
| `/etc/ssl/ca-bundle.pem` | SUSE CA bundle |
| `/etc/pki/ca-trust/extracted/pem/tls-ca-bundle.pem` | RHEL trust store |
| `/etc/ssl/cert.pem` | Alpine/macOS CA bundle |
| `/usr/local/share/ca-certificates/` | Custom CA directory |

## Forcing CA Bundle Mounting

If the installer does not detect your CA bundle automatically, or if you are using a custom internal CA, force CA bundle mounting with the `FORCE_CA_MOUNT` environment variable:

```bash
export FORCE_CA_MOUNT=true
export LICENSE_KEY='<YOUR_LICENSE_KEY>'
curl -sLfo - "https://raw.pkg.keygen.sh/v1/accounts/netwrix/artifacts/dspm-install.sh?auth=license:$LICENSE_KEY" | bash -
```

## Adding Custom CA Certificates

To add a custom CA certificate to the system trust store before installation:

```bash
# Copy your CA certificate to the system trust directory
sudo cp your-ca-cert.crt /usr/local/share/ca-certificates/

# Update the system CA bundle
sudo update-ca-certificates
```

Run the installer after updating the trust store. The installer will automatically detect and mount the updated bundle.

## TLS for Internal Services

All internal service-to-service communication within the Kubernetes cluster uses the cluster's internal networking. Traefik handles TLS termination at the ingress layer and routes traffic to backend services.
