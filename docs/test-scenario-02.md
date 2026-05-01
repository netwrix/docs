---
title: "Test Scenario 02 — Broken same-file anchor"
description: "Expected: 1 error with Available list"
sidebar_position: 992
---

# Test Scenario 02

**Expected result:** 1 error. `#does-not-exist` isn't a heading in this file. Available list should be shown.

## Real Heading

This heading exists.

## Body

The [broken anchor](#does-not-exist) does not exist in this file.
