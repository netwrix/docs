---
title: "Finalize the Installation"
description: "Finalize the Installation"
sidebar_position: 50
---

# Finalize the Installation

This guide shows how finalize the installation of the agent.

## Overview

This page describes the last few steps that the production agent needs for Identity Manager to run
correctly.

## Finalize the Installation

Finalize the installation of the agent by proceeding as follows:

1. Install
   [Windows' hosting bundle for ASP.Net Runtime](https://dotnet.microsoft.com/en-us/download/dotnet/8.0).

    If the bundle was installed before
    [Configure the Pool and Site](/docs/identitymanager/saas/user-guide/deploy/production-agent-installation/iis-configuration/index.md), then IIS might not display the
    AspNetCore module and Identity Manager will not run. In this case, relaunch the bundle's
    installation executable to perform a repair.

2. When using a proxy, adjust the configuration accordingly. See the
   [Reverse Proxy](/docs/identitymanager/saas/installation-guide/reverse-proxy/index.md)topic for additional
   information.

## Next Steps

To continue, follow the instructions to verify the agent's installation. See the
[Install the Production Agent](/docs/identitymanager/saas/user-guide/deploy/production-agent-installation/index.md) topic for additional information.
