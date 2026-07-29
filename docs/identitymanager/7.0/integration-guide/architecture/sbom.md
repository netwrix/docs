---
title: "Software Bill of Materials"
description: "Understanding the SBOM included with releases"
sidebar_position: 50
---

# Software Bill of Materials

## Overview

Starting in version 6.1, Identity Manager includes a Software Bill of Materials (SBOM) file in every release. The SBOM is a complete inventory of all software components and dependencies included in the product.

**File location**: `Runtime/nim-bom.json`

## What's Included

The SBOM contains:
- All backend (.NET) dependencies
- All frontend (npm) dependencies
- Component versions
- License information
- Cryptographic hashes for verification

## SBOM Format

The SBOM uses the **CycloneDX JSON format (version 1.6)**, which is a widely-adopted standard that can be consumed by most security scanning and compliance tools.

## Common Use Cases

### Security Scanning
Import the SBOM into vulnerability scanning tools (such as Dependency-Track or OWASP Dependency-Check) to identify known vulnerabilities in dependencies.

### Compliance Documentation
The SBOM provides evidence of software composition for security audits and compliance requirements.

### License Review
Extract license information for all components included in the product.

## Migration from LICENSES.txt

**Previous versions**: Included a `LICENSES.txt` file listing license information.

**Version 6.3+**: The `LICENSES.txt` file has been replaced by `nim-bom.json`, which provides more comprehensive information in a machine-readable format.

## Additional Resources

For more information about the CycloneDX format: https://cyclonedx.org
