---
title: "Final Tasks"
description: "Final Tasks"
sidebar_position: 70
---

# Final Tasks

## Reviewing Critical and Non Critical Sheets

**Critical sheets** include all customizations that use bundle components. Review what these bundle components do and analyze the risks of removing them. Specifically, review the customizations from scenarios 3 and 6: Scenario 3 covers non-bundle components used by bundle components, so there may be fields set by scripts, workflows, or searches that belong to the bundle. Scenario 6 covers non-bundle components that use at least one bundle component, so their functionality or display may break.

**Non critical sheets** include all the customizations from scenarios 1, 2, 4, and 5.

## Testing

Test in the sandbox environment first. Retest functionality after the bundle removal to confirm everything works as expected. Run the [Comparing Environments](/docs/platgovnetsuite/changemanagement/comparing_environments.md) tool to see all the differences after the bundle removal (sandbox vs. production). This helps you determine what needs to be moved to the production environment.

After you remove the bundle from your production environment, run a post deployment check to make
sure everything is the same between the sandbox and production environments.
