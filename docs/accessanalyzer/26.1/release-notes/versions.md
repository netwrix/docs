---
title: Release and Installer Versions
description: The dspm-installer, k3s, and ArgoCD versions that ship with each Access Analyzer release.
sidebar_position: 20
---

The latest Access Analyzer release is {{appVersion}}. It ships with `dspm-installer` {{installerVersion}}.

{{releaseTable}}

- **Installer** is the `dspm-installer` version the release ships with. Upgrades from the **Settings** page and automatic updates run this version inside the cluster.
- **k3s** and **ArgoCD** are the versions a new install of the release runs. An upgrade updates ArgoCD but keeps the k3s version the server was installed with.

Before you install or upgrade from the host, [download the latest installer](../install/upgrade-to-a-new-version.md#download-the-latest-installer). The download always returns the newest stable installer, so you never pick an installer version yourself.

For the new features and fixes in each release, see [What's new](index.md).
