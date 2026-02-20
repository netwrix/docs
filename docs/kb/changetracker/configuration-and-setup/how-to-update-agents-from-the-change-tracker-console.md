---
description: >-
  Comprehensive guide for updating Netwrix Change Tracker agents from the Hub
  console, including download instructions, upload procedures, deployment
  scheduling, phased rollout strategies, testing recommendations, and
  troubleshooting.
keywords:
  - Netwrix Change Tracker
  - agent update
  - Agent Updates
  - Agent Software Updates
  - Groups
  - Gen 7
  - Auto Updates
  - Hub
  - deployment
  - phased rollout
products:
  - change-tracker
sidebar_label: Updating Agents From the Console
tags: []
title: Updating Agents From the Change Tracker Console
---

# Updating Agents From the Change Tracker Console

## Overview

When a new Netwrix Change Tracker agent version is released, you can deploy it automatically from the Change Tracker Hub console. This article provides a comprehensive guide for downloading, uploading, and deploying agent updates, along with best practices for phased rollouts and troubleshooting common issues.

> **Note:** For the most current agent update procedures and screenshots, refer to the official documentation: [Agent Updates](/docs/changetracker/8.0/admin/settingstab/agentsanddevices/agentupdates.html)

> **END OF SUPPORT NOTICE**
>
> Gen 7 Agent v7.0.0 reached End of Support on **October 1, 2024**.
>
> Ensure all agents are upgraded to Gen 7 Agent v7.1 or later for continued support and security updates.

## Prerequisites

Before updating agents, ensure you have:

1. **Downloaded the agent update files** from the Netwrix customer portal:
   - **Path:** Netwrix > Members > Member Downloads > Latest Versions of Software and Support Information for Existing Customers > 01. Netwrix Change Tracker Gen 7 > Hub and Agent Downloads

2. **Required files:**
   - Netwrix Change Tracker Gen 7 Windows Agent Only Installer (`.zip`)
   - Netwrix Change Tracker Gen 7 Windows Agent Control File for Auto Updates (`.upd` file)

3. **Important:** Do NOT extract the zip files. They must be uploaded as zip archives to the Change Tracker console.

4. **Permissions:** Administrator access to the Change Tracker console and IIS (for troubleshooting)

## Security Considerations

- **Update Integrity:** The `.upd` control file cryptographically signs the update to prevent tampering.
- **HTTPS Communication:** All agent-to-Hub communication is encrypted via HTTPS.
- **Scheduled Updates:** Consider deploying during maintenance windows to minimize disruption.
- **Network Security:** Ensure only authorized agents can access the Hub (use IP restrictions or VPN if needed).
- **Credential Protection:** Agent credentials are encrypted in HubDetails.xml.

## Instructions

### Step 1: Upload Agent Update Files

1. Log in to the **Change Tracker console** through a web browser.

2. Navigate to **Settings > Agent Updates**.

3. Click the **Actions** button and select **Upload an Agent Update**.

4. In the upload dialog, select both files:
   - The agent installer `.zip` file
   - The agent control `.upd` file

5. Click **Open**, then click **Upload files**.

6. Verify that both files appear in the Agent Updates list.

![Agent update files](https://nwxcorp--c.na147.content.force.com/sfc/dist/version/download/?oid=00D7000000091pB&ids=0684u00000LdJrz&d=%2Fa%2F4u000000Lzsd%2FBurJF_bIoNw3JzJwCGWLeAlup_tkmAgHLN1IPXnwX_M&asPdf=false)

### Step 2: Create or Select a Device Group

For organized deployments, use device groups to control which agents receive updates and when.

1. Navigate to **Settings > Groups**.

2. Then, either select an existing group for the update, or click **+ Add** to create a new group.

   > **Note:** If creating a new group, provide a descriptive name that indicates the update phase or target devices (e.g., "Agent Update - Pilot").

### Step 3: Configure the Update Schedule

1. Navigate to the group you created or selected.

2. Click the **Agent Software Updates** tab.

3. Click **+ Define the update schedule**.

4. Configure the deployment:
   - **Agent version:** Select the uploaded agent version from the dropdown.
   - **Schedule:** Choose when the update should deploy:
     - **Immediate:** Updates deploy as soon as agents check in.
     - **Scheduled:** Specify a date and time for deployment.

5. Click **Update** to save the schedule.

![Agent update schedule](https://nwxcorp--c.na147.content.force.com/sfc/dist/version/download/?oid=00D7000000091pB&ids=0684u00000LdKHv&d=%2Fa%2F4u000000Lzn9%2F_1yH60.vjIMuX2cZFJxnW1pRRGEU2sHysN74dlIt6kY&asPdf=false)

### Step 4: Assign Agents to the Update Group

1. Navigate to **Settings > Agents & Devices**.

2. Locate the device(s) you want to update.

3. Click the **Edit** button for each device.

4. In the **Groups** field, add the update group you configured (e.g., "Agent Update - Pilot").

5. Click **Update** to save the changes.

6. The assigned agents will receive the update according to the defined schedule.

### Step 5: Verify Update Deployment

1. Navigate to **Settings > Agents & Devices**.

2. Check the **Devices** tab to monitor update progress.

3. Verify that updated agents show the new version number.

4. Check that agents remain online and are communicating with the Hub.

## Phased Rollout Strategy

For production environments, implement a phased rollout to minimize risk:

### Phase 1: Initial Pilot

- Select 3-5 test devices representing different OS versions and configurations.
- Create a group: "Agent Update - Pilot".
- Deploy updates immediately.
- Monitor agent status and logs before proceeding.

### Phase 2: Early Adopters

- Select 10-20% of production devices.
- Create a group: "Agent Update - Early Adopters".
- Schedule updates during a maintenance window.
- Monitor for issues before broader deployment.

### Phase 3: Staged Production Deployment

- Deploy to remaining devices in batches.
- Create multiple groups by department, location, or criticality.
- Stagger deployments to manage risk.

### Phase 4: Post-Deployment Verification

- Confirm all agents are updated.
- Review agent logs for issues.
- Document lessons learned.

## Testing Checklist

Before deploying to production, verify:

- [ ] Agent update files uploaded successfully
- [ ] Update schedule configured correctly
- [ ] Test devices assigned to pilot group
- [ ] Pilot devices updated successfully
- [ ] Updated agents communicate with Hub
- [ ] Policy templates apply correctly
- [ ] Compliance reports generate successfully
- [ ] Baseline data intact after update
- [ ] Event collection functioning normally
- [ ] Rolling logs show no errors

## Rollback Plan

If issues occur during deployment:

1. **Halt Deployment:**
   - Remove devices from update groups.
   - Delete or modify the update schedule.

2. **Assess Impact:**
   - Check affected agent rolling logs.
   - Review Hub server logs.
   - Identify common failure patterns.

3. **Manual Intervention:**
   - Uninstall problematic agent version.
   - Reinstall previous stable version.
   - Reconfigure HubDetails.xml if needed.

4. **Contact Support:**
   - Gather rolling logs from affected agents.
   - Document error messages.
   - Open a [support ticket with Netwrix](https://netwrix.com/en/support/).

## Troubleshooting

### Upload Fails with "System Error / An unknown error occurred"

**Symptom:**
- Upload fails with error: `System Error: An unknown error occurred`
- Message indicates: "X File(s) failed to upload"

**Cause:**
The default IIS maxAllowedContentLength is too low for agent update files.

**Resolution:**

1. Stop IIS services:
   ```bat
   iisreset /stop
   ```

2. Open the Web.config file:
   ```text
   C:\inetpub\wwwroot\Change Tracker Generation 7 (NetCore) Hub\Web.config
   ```

3. Modify the `<requestFiltering>` node:
   ```xml
   <requestFiltering>
       <requestLimits maxAllowedContentLength="250000000" />
   </requestFiltering>
   ```

4. Save the file and restart IIS:
   ```bat
   iisreset /start
   ```

5. Retry the upload in the Change Tracker console.

### Agents Not Receiving Updates

**Check:**
- Agent is assigned to the correct group
- Update schedule is active and not expired
- Agent can communicate with Hub (check agent status)
- Agent has sufficient disk space for update
- Review agent rolling-log.txt for errors

**Verify:**
- Hub server has outbound connectivity (if agents are remote)
- Firewall rules allow agent-to-Hub communication (port 443 by default)
- Agent service is running on target devices

### Update Fails on Specific Agents

**Common causes:**
- Insufficient disk space on agent system
- Antivirus blocking update installation
- Conflicting software or services
- OS version incompatibility

**Actions:**
1. Check agent rolling-log.txt for specific error messages.
2. Verify OS compatibility with new agent version.
3. Add Netwrix agent paths to antivirus exclusions.
4. Free up disk space (minimum 500MB recommended).

### Agent Goes Offline After Update

**Immediate steps:**
1. Check if agent service is running.
2. Review rolling-log.txt for startup errors.
3. Verify HubDetails.xml configuration is intact.
4. Test network connectivity to Hub.
5. Check Windows Event Viewer for service errors.

**If agent won't start:**
- Reinstall previous agent version.
- Verify .NET dependencies are installed.
- Check for conflicting software.

## Version Compatibility

| Agent Version | Hub Version | Release Date | Support Status |
|---------------|-------------|--------------|----------------|
| v7.1.x | v8.0, v8.1 | Jan 2024+ | ✅ Supported |
| v7.0.0.x | v7.x, v8.0 | 2017-2019 | ❌ EOS Oct 1, 2024 |
| v6.5.x | v6.5, v7.x | Pre-2017 | ❌ End of Life |

> **Important:** Always verify compatibility in the release notes before deploying updates.

## FAQ

**Q: Can I update Linux agents from the console?**
A: No, this process applies to Windows agents only. Linux agents must be updated manually using RPM packages.

**Q: How often should I update agents?**
A: Update agents when new versions address security vulnerabilities or critical bugs. Review release notes for each version.

**Q: Can I schedule updates for specific times?**
A: Yes, use the schedule feature in the Agent Software Updates tab to specify deployment date and time.

**Q: What happens if an agent is offline during the scheduled update?**
A: The agent will receive the update the next time it checks in with the Hub after the scheduled time.

**Q: Do agents need to reboot after updating?**
A: Typically no, the agent service restarts automatically. However, some updates may require a system reboot (check release notes).

**Q: Can I cancel an in-progress update?**
A: Once an agent begins installing an update, it cannot be cancelled. However, you can remove devices from the update group to prevent additional deployments.

**Q: Where can I see the current agent version?**
A: Navigate to Settings > Agents & Devices. The version is displayed in the Devices tab for each agent.

## Related Links

- [Agent Updates (Official Documentation)](/docs/changetracker/8.0/admin/settingstab/agentsanddevices/agentupdates)
- [Device Groups](/docs/changetracker/8.0/admin/settingstab/devicegroups)
- [Gen 7 Agent Deployment Options](/docs/changetracker/kb/gen-7-agent-deployment-options)
- [Agent and Device Ports](/docs/changetracker/8.0/requirements/agentdeviceports)
- [Component Release History](/docs/changetracker/8.0/componentreleases)
