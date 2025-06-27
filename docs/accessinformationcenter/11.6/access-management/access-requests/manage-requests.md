# Cancel Request Window

The Cancel Request window opens from the Request History Page of the Your Access portal when you
select to cancel an access request. See the
[Request History Page](/docs/accessinformationcenter/11.6/access-management/access-requests/request-history.md)
topic for additional information. Follow the steps to cancel an access request.

**Step 1 –** On the Request History Page of the Your Access portal, select the desired request and
click **Cancel**. The Cancel Request window opens to confirm the action.

![Cancel Request window](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/accessrequests/window/cancelrequest.webp)

**Step 2 –** Click **Yes** to cancel the request.

**NOTE:** You can click **No** to keep the pending request and close the Cancel Request window.

![Cancel Request window request has been cancelled message](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/accessrequests/window/cancelrequestcomplete.webp)

**Step 3 –** The Access Information Center starts the action. When the action completes
successfully, click **OK** to close the Cancel Request window.

The request remains on the Request History page, but is no longer pending. Its status is set to
Canceled, with you as the Reviewer.

# Changes Window

Select the desired request on the
[Request History Tab](/docs/accessinformationcenter/11.6/access-management/access-requests/overview.md#request-history-tab)
of the Access Requests interface and click **View Changes**. The Changes window opens.

![Changes window](/img/product_docs/accessanalyzer/11.6/install/application/upgrade/changes.webp)

The table displays the following information for selected trustee:

- Event Time – Date timestamp of when the change was committed
- Status – Icon indicates the decision made by the owner on the request: Accepted (green check
  mark), Declined (red **x**), or Canceled (orange circle with slash)
- Group Name – Name of the group where membership was modified to process the change in Active
  Directory. Access to File System and SharePoint resources are controlled through Access Groups.
  See the
  [Access Groups](/docs/accessinformationcenter/11.6/access-management/resource-owners/access-groups.md)
  topic for additional information.
- Update Type – Indicates if group membership was added or removed to process the change
- Member Name – sAMAccountName associated with the domain user whose membership was being changed

**NOTE:** The table data grid functions the same way as other Access Information Center table grids.
See the
[Data Grid Features](/docs/accessinformationcenter/11.6/reference/data-grid.md) topic
for additional information.

Click **OK** to close the window.

# Decline Access Window

The Decline Access window opens from the Pending Access Requests Page of the Owner portal when you
select to decline an access request to your resource. See the
[Pending Access Requests](/docs/accessinformationcenter/11.6/access-management/access-requests/pending-requests.md)
topic for additional information. Follow the steps to decline an access request.

**Step 1 –** On the Pending Access Requests Page, select the desired request and click **Decline**.
The Decline Access window opens.

![Decline Access window](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/accessrequests/window/declineaccess.webp)

**Step 2 –** Optionally enter a reason for denying the request, which will be included in the
notification sent to the requester.

**Step 3 –** Click **Decline** to cancel the request.

**NOTE:** You can click **Cancel** to close the window without denying the request.

![Saving Request window](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/accessrequests/window/savingrequest.webp)

**Step 4 –** The Access Information Center starts the action with the status displayed in the Saving
request window. When the action completes successfully, click **OK** to close the Saving request
window.

The access request has been declined and the requester sent an email notification informing them.
The request is visible on the Access Request History Page. See the
[Access Request History](/docs/accessinformationcenter/11.6/access-management/access-requests/request-history.md)
topic for additional information.

# Remove Access Window

The Remove Access window opens from the Your Access portal when you select to remove your existing
access to a resource. Follow the steps to remove your access.

**Step 1 –** In the Your Access portal, select the desired resource from the list of current access
and click **Remove Access**. The Remove Access window opens to confirm the action.

![Remove Access window](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/accessrequests/window/removeaccess.webp)

**Step 2 –** Click **Yes** to cancel the remove your access for the selected resource.

**NOTE:** You can click **No** to keep the access and close the Remove Access window.

![Remove Access window access removed message](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/accessrequests/window/removeaccesscomplete.webp)

**Step 3 –** The Access Information Center starts the action. When the action completes
successfully, click **OK** to close the Remove Access window.

Your access to the resource was removed. The removal action appears on the Request History page. Its
status is set to Canceled, with you as the Reviewer.
