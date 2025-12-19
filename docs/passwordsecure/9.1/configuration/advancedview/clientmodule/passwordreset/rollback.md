---
title: "Rollback"
description: "Rollback"
sidebar_position: 60
---

# Rollback

## What is a rollback?

If an error occurs while running a script, a rollback is initiated. This ensures that the original
password is restored.

## When does a rollback run?

The following diagram shows when and according to which criteria a rollback is initiated:

![rollback run](/images/passwordsecure/9.1/configuration/advanced_view/clientmodule/passwordreset/rollback/rollback_1-en.webp)

## Procedure

If a rollback needs to be run, all scripts for the Password Reset are executed once again. The last
password in the history is used for this process. No new historical entry is created after the
rollback.

## Logbook

The logbook can be used to see if a rollback has been run and if it was successful. After a
rollback, the password should be checked once again as a precaution.
