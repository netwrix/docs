---
title: "Custom Group Name Prefix"
description: "Restrict agent registration to device groups that follow a configured naming convention using the CustomGroupNamePrefix setting"
sidebar_position: 20
---

# Custom Group Name Prefix

The `CustomGroupNamePrefix` setting adds a validation gate to the device registration process. When set, at least one group returned by the device registration script (see [Device Discovery and Registration](./devicediscoveryregistration.md)) must start with the configured prefix and exist in the directory. If that condition isn't met, the system holds the device in the **New Devices** group and creates an audit event.

This setting is intended for environments where a naming convention requires every device to belong to a customer-prefixed group — for example, `XYZ123_Linux Redhat 9`.

---

## Configure the custom group name prefix

**Step 1 –** Navigate to **Settings > System Settings**.

**Step 2 –** In **System Settings**, scroll to the **Advanced Configuration** grid.

**Step 3 –** Locate the `CustomGroupNamePrefix` key. If it doesn't exist, add a new entry.

**Step 4 –** Set the value to the prefix string exactly as it should appear at the start of group names. The match is case-sensitive. For example, entering `XYZ123_` matches `XYZ123_Linux Redhat 9` but not `xyz123_Linux Redhat 9`.

**Step 5 –** Save the settings.

To disable the feature, set the value back to an empty string.

:::note
`CustomGroupNamePrefix` is configured in the same Advanced Configuration grid as the `AllRegistrationGroupsExist` flag. The two settings are independent and can be enabled together. See [Relationship to AllRegistrationGroupsExist](#relationship-to-allregistrationgroupsexist).
:::

---

## How prefix validation works

When a device registers and the registration script returns group names, the prefix gate runs after the system has resolved which of those groups exist in the directory.

1. The registration script returns a list of group display names (for example, `["XYZ123_Linux Redhat 9", "Linux Redhat 9"]`).
2. The system resolves each name against the directory to find which groups exist.
3. If `CustomGroupNamePrefix` is set and the script returned at least one group name, the system filters the returned names to those that start with the prefix.
4. If no returned name starts with the prefix, the system holds the device in **New Devices** and creates an audit event listing the returned groups.
5. If at least one name starts with the prefix, the system checks whether any of those prefix-matching groups exist in the directory.
6. If all prefix-matching groups are missing from the directory, the system holds the device in **New Devices** and creates an audit event listing the missing group names.
7. If at least one prefix-matching group exists in the directory, the gate passes. The system adds the device to every script-returned group that exists in the directory — the same behavior as standard registration.

:::note
Groups that don't match the prefix, such as the default OS-type group, are still assigned normally. The prefix check only validates that at least one prefix-matching group is present and exists.
:::

---

## Behavior reference

| Prefix set | Groups returned by script | Prefix group exists in directory | Outcome |
|---|---|---|---|
| No | Any | — | Standard behavior — no gate applied |
| Yes | No groups match the prefix | — | Device stays in New Devices + audit event listing returned groups |
| Yes | Groups match prefix | None exist | Device stays in New Devices + audit event listing the missing groups |
| Yes | Groups match prefix | At least one exists | Device added to all valid script groups (gate passes) |
| Yes | Script returns empty list | — | Device stays in New Devices — no audit event (not an error) |

**Example**: An organization uses the convention `XYZ123_` for all device groups. The registration script returns `["XYZ123_Linux Redhat 9", "Linux Redhat 9"]`. If `XYZ123_Linux Redhat 9` exists in the directory, the gate passes and the device is placed in both groups. If the group was created with a typo — for example, `XYZ123_Redhat 9` — the gate blocks registration and creates an audit event identifying the missing group.

---

## Audit events

When the gate blocks a registration, Change Tracker creates an audit event under **Device Administration** events. The event message identifies both the device and the specific group names involved so you can correct the misconfiguration without inspecting log files.

**No prefix group in script results**:

> Device 'MyServer' has no registration group with prefix 'XYZ123_'. Groups returned: \[Linux Redhat 9\]

**Prefix group returned but not found in directory**:

> Device 'MyServer' registration groups with prefix 'XYZ123_' not found in directory: \[XYZ123_Linux Redhat 9\]

---

## Relationship to AllRegistrationGroupsExist

`AllRegistrationGroupsExist` is a separate setting that blocks registration if any group returned by the script doesn't exist in the directory.

The two settings apply different checks:

- `AllRegistrationGroupsExist` applies to every group returned by the script.
- `CustomGroupNamePrefix` applies only to groups whose names start with the prefix.

Both can be enabled at the same time. If either check blocks registration, the device stays in **New Devices**.

---

## Troubleshooting

### Device stuck in New Devices with a prefix-related audit event

1. Open the audit event to read the exact group names listed.
2. Compare the name in the audit event against the groups in the directory.
3. Common causes:
   - Group was created with a typo (for example, `XYZ123_Redhat 9` instead of `XYZ123_Linux Redhat 9`).
   - Group hasn't been created in the directory yet.
   - The prefix value in settings doesn't match the convention used in the script — the match is case-sensitive.
4. After the group name in the directory matches what the script returns, re-register the device or assign it to the group manually.

### Prefix gate isn't triggering

- Verify the `CustomGroupNamePrefix` value is saved in System Settings — an empty value disables the gate.
- Verify the registration script is returning group names. If the script returns an empty list, the gate doesn't apply.
- Confirm the prefix value matches the exact case and characters used in the group names returned by the script.
- Enable DEBUG logging for `CollateComplianceReportDataBackgroundTaskWorker` to see the full list of groups returned by the registration script and the prefix check results. See [Device Registration Logging](./devicediscoveryregistration.md#device-registration-logging) for how to enable DEBUG logging on this component.
