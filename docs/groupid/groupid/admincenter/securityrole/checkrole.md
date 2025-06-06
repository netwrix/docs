# Check the Roles of a User

As discussed in the [Assign Distinct Roles to a User in Directory Manager Clients](/docs/product_docs/groupid/groupid/admincenter/securityrole/overview.md#Assign-Distinct-Roles-to-a-User-in-Directory-Manager-Clients) topic, a user in an identity store can have different security roles assigned
to it in different Directory Manager clients. Moreover, a user can also have multiple roles in a client, in which case the highest priority role takes precedence when the user logs into that specific client. See [Priority](/docs/product_docs/groupid/groupid/admincenter/securityrole/manage.md#Priority).

Directory Manager enables you to view the highest priority role of a user in a client. This role identifies the access level of that user in the client. Select a client and specify a user. Directory Manager fetches the highest priority role of the user with respect to the client.

## View the Highest Priority Role of a User in a Directory Manager Client

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit.__
3. Click __Security Roles__ under __Settings__ in the left pane.
4. On the __Security Roles__ page, click __Check Security Roles__. The __Check Security Roles__ dialog box is displayed.
5. In the __Client name__ drop-down list, select a Directory Manager client to view the highest priority role of a user within it. For example, select a Directory Manager portal to view the highest priority role that a user has in the
   portal.  
   This list displays the names of the deployed clients only. If a client, such as the Directory Manager portal, is not deployed for the identity store, it will not be listed.  
   To view the highest privileged role that a user has in the identity
   store, select _None_ in the __Client Name__ list.
6. In the box below, specify a user.

   - Enter a search string and press __Enter__. User names starting with the string are displayed. Select the required user.

     OR
   - Click __Advanced__ to search a user by different parameters, such as name, department, company, and email. Enter a search string and click __Search__. Users matching the string are displayed. Select the required user.

   To remove the selected user, click __Remove__ for
   it.
7. On selecting a user, its highest priority role within the selected client is displayed along with the role priority number.  
   For _None_, the highest privileged role of the user in th identity store is displayed, irrespective
   of any client.
8. Click __Close__ to close the dialog box.

See Also

- [Security Roles](/docs/product_docs/groupid/groupid/admincenter/securityrole/overview.md)
- [Manage Security Roles](/docs/product_docs/groupid/groupid/admincenter/securityrole/manage.md)
