# Manage Group Lifecycle Settings

Directory Manager can effectively manage group life cycle through all stages, from creation to deletion. It enables you to define the following setting to control the group life cycle in an identity store:

- A default expiry policy for groups
- Exclude groups from expiration and deletion
- Prevent the expiry of security groups
- Wait period for deleting expired groups
- Group usage life cycle
- Group attestation
- Notifications for expiring groups

Of these, only the first setting, i.e., the group expiry policy, can be changed for individual groups. All other settings apply to all groups in the identity store and cannot be changed for individual groups.

The Group Life Cycle schedule defined for the identity store is responsible for applying the group life cycle settings to
groups. This schedule runs on containers you specify as its targets, to process the groups that reside therein. Groups that reside outside of the target containers will not be processed by the schedule; hence, the group life cycle policy is not applied to
them. See the [Group Life Cycle Schedule](/docs/product_docs/groupid/groupid/admincenter/schedule/grouplifecycle.md) topic.

NOTE: Before you specify a group life cycle policy for a Microsoft Entra ID identity store, see the [Group Expiration Policy](/docs/product_docs/groupid/groupid/admincenter/identitystore/advsentraid.md#Group-Expiration-Policy) section in the [Microsoft Entra ID vs. Active Directory Identity Stores](/docs/product_docs/groupid/groupid/admincenter/identitystore/advsentraid.md) topic.

What do you want to do?

- [Set a Default Expiry Policy for Groups](#Set-a-Default-Expiry-Policy-for-Groups)
- [Apply Policy on Specific Containers](#Apply-Policy-on-Specific-Containers)
- [Exempt Security Groups from Expiry](#Exempt-Security-Groups-from-Expiry)
- [Auto Delete Expired Groups](#Auto-Delete-Expired-Groups)
- [Enable Group Usage Lifecycle](#Enable-Group-Usage-Lifecycle)
- [Enable Group Attestation](#Enable-Group-Attestation)
- [Set Group Expiry Notifications](#Set-Group-Expiry-Notifications)

## Set a Default Expiry Policy for Groups

The expiry policy specifies the period for which a group remains active. When the period ends, the group expires.

When a group is created, it inherits the default expiry policy, but you can change it for individual groups. The Group Life Cycle schedule executes the Group Lifecycle policy as defined for the identity store, but monitors group expiry dates as determined
by each group’s expiry policy. This job expires groups according to their respective expiry policy.

__To set a default expiry policy:__

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Configurations__ under __Settings__ in the left pane. Then click __Group Lifecycle__.
4. In the __Default Expiration Policy__ drop-down list on the __Group Lifecycle__ page, select an expiration criterion that you want to set as default. Options are:

   - Never Expire
   - Expire Every 30 Days
   - Expire Every 60 Days
   - Expire Every 90 Days
   - Expire Every 120 Days
   - Expire Every 6 Months
   - Expire Every Year
   - Other: On selecting this, two boxes are displayed. Select a unit of time (years, months, days) from the second list and specify a number in the first box to set a custom period for group expiration.
5. Click __Save__.

## Apply Policy on Specific Containers

By default, the Group Life Cycle schedule evaluates all groups that reside in the container(s) specified as its targets, and processes them according to the group lifecycle policy. However, you can exempt containers from the Group Life Cycle schedule, so that
it does not process the groups in those containers.

__To limit the policy to specific containers:__

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Configurations__ under __Settings__ in the left pane. Then click __Group Lifecycle__.
4. On the __Group Lifecycle__ page, select one of the following options:

   - __Do not apply policy on following containers__

     1. Select this option and click __Add/Modify Container(s)__.
     2. On the __Add Container(s)__ dialog box, select the containers you want to exempt from the Group Lifecycle policy settings and click __Add__. The selected containers are displayed in the __Container(s)__ area. The Group Life Cycle schedule will not process the groups in these containers even when they are set as its targets.
   - __Apply policy only on following containers__

     1. Select this option and click __Add/Modify Container(s)__.
     2. In the __Add Container(s)__ dialog box, select the container(s) you want to apply the Group Lifecycle policy to, and click __Add__. The selected containers are displayed in the __Container(s)__ area. The Group Life Cycle schedule will only process groups in these containers in the identity store.
5. Click __Save__.

NOTE: If a container is set as target in a Group Life Cycle schedule while it is also listed as an exempted container in the Group Lifecycle policy, the schedule does not process it. As a result, different aspects of the Group Lifecycle policy, such as group
expiry and group attestation does not apply to groups in the container.

## Exempt Security Groups from Expiry

By default, security group expiration is disabled, indicating that security groups in the identity store cannot be expired either manually or by the Group Life Cycle schedule. You must enable it to expire security groups.

When a security group expires, its membership is cleared. However, Directory Manager keeps a backup of its membership in the database.

NOTE: In a Microsoft Entra ID identity store, the security group expiry option also applies to Office 365 groups.

__The security group expiration paradox__

A security group may grant or restrict access to network resources to its members. Enabling security group expiry may pose a problem; the members of an expired security group will get undesired access to network resources, or will be denied access
to resources that were assigned to it.

To manage this, make sure your critical security groups reside in the OU that the expiry policy does not apply to. Use the __Do not apply policy on following containers__ option to set the OU aside (see the [Apply Policy on Specific Containers](#Apply-Policy-on-Specific-Containers) topic).
In this way, those groups will not expire even if you enable the expiry of security groups.

__To enable security group expiry:__

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Configurations__ under __Settings__ in the left pane. Then click __Group Lifecycle__.
4. On the __Group Lifecycle__ page, select the __Expire Security Groups__ check box to allow the expiry of security groups in the identity store. (Security groups can be expired
   manually and by the Group Life Cycle schedule.)  
   Clear the check box to prevent the expiry of security group.
5. Click __Save__.

## Auto Delete Expired Groups

You can set Directory Manager to auto delete expired groups x number of days after expiry. These wait days apply to both auto expired and manually expired groups. The Group Life Cycle schedule is responsible for deleting expired groups. These auto deleted groups
are called logically deleted groups.

__To set wait days:__

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Configurations__ under __Settings__ in the left pane. Then click __Group Lifecycle__.
4. On the __Group Lifecycle__ page, select the __Delete Expired Groups__ check box and type the number of days after which you want an expired group to be deleted, starting from
   the expiry date.
5. Click __Save__.

## Enable Group Usage Lifecycle

You can set the expiry of mail-enabled distribution groups based on their usage. It is as:

- If an expiring group is used in the last x number of days, it will be renewed by reapplying the expiry policy to it.
- If a group is not used in the last x number of days, its life will be reduced to 7 days.

The Group Usage Service schedule time stamps each mail-enabled distribution group with respect to its last usage. The Group Life Cycle schedule extends or reduces the life of a group
based on this information.

__To enable group usage lifecycle:__

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Configurations__ under __Settings__ in the left pane. Then click __Group Lifecycle__.
4. On the __Group Lifecycle__ page, use the toggle button for __Extend__ __or reduce the life of mail-enabled groups__ to enable group usage lifecycle.
5. Select one of the following options:
   - __Extend group life if used in last x Days:__ select this option button and specify x number of days in the box to prevent your active mail-enabled distribution groups from expiry. If an expiring group is
     used in the last x number of days, the Group Life Cycle schedule will renew it by reapplying its expiry policy.
   - __Reduce group life if not used in last x Days:__ select this option button and specify x number of days in the box to reduce the life of mail-enabled distribution groups that have not received any email
     in the last x number of days.

     By default, this setting works for groups that are idle for 60 days since their creation, last renewal, or last usage. You can change the number of days anywhere from 1 to 360. The Group Life Cycle schedule will reduce the life of such
     groups to 7 days and send an email notification to the group owner or the default approver (for groups without owners), informing them of the approaching expiry. See the [Specify a Default Approver](/docs/product_docs/groupid/groupid/admincenter/workflow/advancedsettings.md#Specify-a-Default-Approver) topic.
6. Click __Save__.

## Enable Group Attestation

You can enforce group owners to review and validate the attributes and membership of expiring groups before renewing them. While enabling group attestation, consider the following:

- Group attestation does not apply to groups that have ‘Never Expire’ as their expiry policy.
- The Membership Life Cycle schedule must be defined for the identity store.
- Group attestation does not apply to excluded containers. See the [Apply Policy on Specific Containers](#Apply-Policy-on-Specific-Containers) topic.
- With group attestation enabled, the Group Usage Lifecycle settings cannot be applied. If those settings are already defined, they get disabled when you enable group attestation. See the the [Enable Group Usage Lifecycle](#Enable-Group-Usage-Lifecycle) topic.
- For attestation, group owners must use the Directory Manager portal.
- In the default portal template, a few fields (attributes) for group attestation are specified. You can add and remove fields to include those that you want group owners to validate and update.
- In case of a Dynasty, parent and child Dynasties have to be attested individually. Child Dynasties include both middle and leaf Dynasties. However, child Dynasties cannot be renewed after attestation, as they are renewed with their respective
  parent Dynasty.
- When attesting the membership of a parent Dynasty, child Dynasty, or a Smart Group, the members list does not include group objects for attestation. Only users and contacts are displayed. When attesting static groups, however, the members list
  also includes groups for attestation.

__To enable group attestation:__

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Configurations__ under __Settings__ in the left pane. Then click __Group Lifecycle__.
4. On the __Group Lifecycle__ page, use the toggle button for __Enforce group owners to attest expiring groups__ to enable group attestation for the identity store.
5. Select the __Enforce user to verify each member__ check box to enforce group owners to verify each group member one by one (by individually specifying the status of each member as _active_ or _inactive_). When this check box is not selected, group owners can select all members in a single click and specify their status as _active or inactive_.
6. You can specify the duration for which inactive members remain in group membership.

   - Select the __Specify member inactive period__ check box and specify a duration in days (for example, 5). When the status of a member is set to _inactive_, he or she is instantly removed from group membership in the directory. In Directory Manager, however, he or she remains a group member till the specified
     number of days, starting from the inactivation date. During this period, the member can be activated (added back to group membership). If the member is not activated, the Membership Life Cycle schedule removes it from group membership in Directory Manager when the specified number of days lapse.
   - If you want inactive members to be instantly removed from group membership in the directory and in Directory Manager, do one of the following:

     - Select the __Specify member inactive period__ check box and specify ‘0’ in the box.
     - Do not select the __Specify member inactive period__ check box.
7. Click __Save__.

## Set Group Expiry Notifications

You can choose to send email notifications 1 day, 7 days, or 30 days before a group expires, to inform the group owners (or the default approver when the group has no primary or additional
owners) about the approaching expiry.

__To set group expiry notifications:__

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Configurations__ under __Settings__ in the left pane. Then click __Group Lifecycle__.
4. In the __Notification Options__ section on the __Group Lifecycle__ page, select any of the following options to specify when group expiry notifications should be sent:

   - 1 day before group expiration
   - 7 days before group expiration
   - 30 days before group expiration
5. Click __Save__.

__Group expiry notifications and the Group Lifecycle schedule__

The Group Life Cycle schedule handles group expiry notifications as follows:

- When no option is selected for expiry notifications, the schedule expires the groups in the identity store without notifying anyone.
- When notifications are enabled, the schedule notifies the primary and additional owners of the group, or the default approver (in case the group has no owner) about the approaching
  expiry. In case the notification could not be sent or no recipient is available, the schedule extends the expiry date of the group by 7 days on the group’s expiry day. It continues to do so until the notification is sent.
- When the __1 day before group expiration__ option is selected for sending notifications and the Group Life Cycle schedule evaluates the group for the first time a day before its expiration date, Directory Manager will extend
  the group’s expiration date by 7 days.

__See Also__

- [Schedules](/docs/product_docs/groupid/groupid/admincenter/schedule/overview.md)
- [ Group Expiry and Deletion](/docs/product_docs/groupid/groupid/admincenter/identitystore/configure/directoryservice/groupexpirydeletion.md)
