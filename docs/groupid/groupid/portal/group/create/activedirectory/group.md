# Create Active Directory Groups

Using Directory Manager portal, you can create static groups and Smart Groups in an Active Directory identity store.

NOTE: If the Directory Manager administrator has specified the group creation action for review, the new group will be created after it is verified by an approver. See the [Requests](/docs/product_docs/groupid/groupid/portal/request/overview.md)topic for additional information.

## Create a Static Group

Follow the steps to create a static group.

1. In the Directory Manager portal, click the __Create New__ button in the left pane and select __Group__.

   The __Create Group__ wizard opens to the __Group Type__ page.

   Pages and fields on the Create Group wizard may vary, since the administrator can customize the wizard by adding or removing pages and fields.
2. On the [Group Type page](/docs/product_docs/groupid/groupid/portal/group/create/grouptype.md), select the __Static Group__ option button and click __Next__.
3. On the [General page](/docs/product_docs/groupid/groupid/portal/group/create/activedirectory/general.md), specify basic information about the group.
4. On the [Members page](/docs/product_docs/groupid/groupid/portal/group/create/activedirectory/members.md), specify members for the group.
5. On the [Owners page](/docs/product_docs/groupid/groupid/portal/group/create/activedirectory/owners.md), specify primary and additional owners for the group.
6. On the [Summary Page](/docs/product_docs/groupid/groupid/portal/user/create/activedirectory/summary.md), review the settings and then click Finish to complete the wizard.

## Create a Smart Group

A Smart Group is one that dynamically maintains its membership based on the rules applied by a user-defined query, such as an LDAP query.

Rather than specifying static user memberships, you can use a query (for example, "All full-time employees in my company") to dynamically build membership in a Smart Group. Managing memberships with queries significantly reduces administrative
costs.

Follow the steps to create a Smart Group:

1. In the Directory Manager portal, click the __Create New__ button in the left pane and select __Group__.

   The __Create Group__ wizard opens to the __Group Type__ page.

   Pages and fields on the Create Group wizard may vary, since the administrator can customize the wizard by adding or removing tabs and fields.
2. On the [Group Type page](/docs/product_docs/groupid/groupid/portal/group/create/grouptype.md), select the __Smart Group__ option button and click __Next__.
3. On the [General page](/docs/product_docs/groupid/groupid/portal/group/create/activedirectory/general.md), specify basic information about the group.
4. On the [ Smart Group page](/docs/product_docs/groupid/groupid/portal/group/create/activedirectory/smartgroup.md), review and modify the query for updating group membership.
5. On the [Owners page](/docs/product_docs/groupid/groupid/portal/group/create/activedirectory/owners.md), specify primary and additional owners for the group.

   When a Smart Group Update job runs on a group, the notification behavior is as follows:  
    Even when the __Do not Notify__ check box is selected, the additional owner will receive the notifications if the administrator has included its email address for job-specific notifications.
6. On the [1](/docs/product_docs/groupid/groupid/portal/user/create/activedirectory/summary.md), review the settings and then click Finish to complete the wizard.

## Create a Password Expiry Group

A password expiry group is a Smart Group whose membership contains users whose identity store account passwords are approaching their expiry dates. Members of this group are notified by email to reset their passwords. When they do so, they are automatically
removed from the group membership.

NOTE: Password Expiry group is not supported in Microsoft Entra ID.

Follow the steps to create a Password Expiry Group:

1. In the Directory Manager portal, click the __Create New__ button in the left pane and select __Group__.

   The __Create Group__ wizard opens to the __Group Type__ page.

   Pages and fields on the Create Group wizard may vary, since the administrator can customize the wizard by adding or removing tabs and fields.
2. On the [Group Type page](/docs/product_docs/groupid/groupid/portal/group/create/grouptype.md), select the __Password Expiry Group__ option button and click __Next__.
3. On the [General page](/docs/product_docs/groupid/groupid/portal/group/create/activedirectory/general.md), specify basic information about the group.
4. On the [ Smart Group page](/docs/product_docs/groupid/groupid/portal/group/create/activedirectory/smartgroup.md), review and modify the query for updating group membership.
5. On the [Owners page](/docs/product_docs/groupid/groupid/portal/group/create/activedirectory/owners.md), specify primary and additional owners for the group.

   When a Smart Group Update job runs on a group, the notification behavior is as follows:  
    Even when the __Do not Notify__ check box is selected, the additional owner will receive the notifications if the administrator has included its email address for job-specific notifications.
6. On the [Summary Page](/docs/product_docs/groupid/groupid/portal/user/create/activedirectory/summary.md), review the settings and then click Finish to complete the wizard.
