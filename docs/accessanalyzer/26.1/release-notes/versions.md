---
title: Release and Installer Versions
description: The dspm-installer, k3s, and ArgoCD versions that ship with each Access Analyzer release.
sidebar_position: 20
---

The latest Access Analyzer release is {{appVersion}}. It ships with `dspm-installer` {{installerVersion}}.

{{installerTable}}

- **Installer** is a stable `dspm-installer` release. **Latest release at the time** is the newest Access Analyzer release that existed on the installer's date. An installer doesn't belong to one release. It installs the newest release available. Upgrades from the **Settings** page and automatic updates run the installer that the latest release pins.
- **k3s** and **ArgoCD** are the versions a new install with that installer runs. An upgrade updates ArgoCD but keeps the k3s version the server was installed with.

Before you install or upgrade from the host, [download the latest installer](../install/upgrade-to-a-new-version.md#download-the-latest-installer). The download always returns the newest stable installer, so you never pick an installer version yourself.

For the new features and fixes in each release, see [What's new](index.md).
