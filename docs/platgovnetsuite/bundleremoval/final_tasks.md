---
title: "Final Tasks"
description: "Final Tasks"
sidebar_position: 70
---

# Final Tasks

## Reviewing Critical and Non Critical Sheets

**Critical sheets** include all customizations that make use of the bundle components. You should
make sure you are aware of what these bundle components are doing and analyze the risks of removing
them. Specifically, you should review the customizations from scenarios 3 and 6: Scenario 3: are
non-bundle components that are used by bundle components, so there may be fields that are set by
scripts, workflows or searches that belong to the bundle. Scenario 6: are non-bundle components that
use at least one bundle component for something, so their functionality and/or display may be
broken.

**Non critical sheets** include all the customizations from scenarios 1, 2, 4 and 5.

## Testing

Testing should occur in the sandbox environment first. Retest functionality after the bundle removal
to ensure everything is working as expected. As part of the testing, run the
[Comparing Environments](/docs/platgovnetsuite/changemanagement/comparing_environments.md) tool to see all the
differences after the bundle removal (sandbox vs. production). It helps you determine what needs to
be moved to the production environment.

After you remove the bundle from your production environment, run a post deployment check to make
sure everything is the same between the sandbox and production environments.
