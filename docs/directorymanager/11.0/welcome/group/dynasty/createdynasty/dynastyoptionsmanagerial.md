---
title: "Dynasty Options page (Managerial Dynasty)"
description: "Dynasty Options page (Managerial Dynasty)"
sidebar_position: 10
---

# Dynasty Options page (Managerial Dynasty)

On the **Dynasty Options** page, select whether you want to create separate Smart Groups for the
direct reports of the top manager and sub-level managers, or add all direct reports of the top
manager and sub-level managers as members of a single group. In any case, you must specify a top
manager to work as the starting point for the Dynasty.

On the Dynasty Options page:

1. Use the **Top Manager** field to specify the top-level manager, and thus, the start location for
   the Dynasty.

    Click the ellipsis button and use the
    [Find Dialog Box](/docs/directorymanager/11.0/welcome/generalfeatures/find.md) to select a top
    manager.

2. Select an option from **Dynasty Type** to specify the type of managerial Dynasty you want to
   create.

    - **Managerial List**

        Construct a managerial Dynasty structure by first creating a Smart Group containing all
        direct reports of the top-level manager as members, then creating separate Smart Groups for
        the direct reports (with their respective direct reports as members). This Dynasty structure
        continues till a Smart Group is created for all managers and sub-managers with their
        respective direct reports as members.

        **Example:**

        Take the following data set:

        - Paul is the top manager with three direct reports: Sam, Eric and Don.
        - Sam has two direct reports, Peter and Sean.
        - Eric has no direct report.
        - Don has three direct reports: Ashley, Jason and Tanya.
        - Jason has a direct report, April.

        GroupID would create a Dynasty with the following child groups:

        - Direct reports of Paul

            Members: Sam, Eric, Don

        - Direct reports of Sam

            Members: Peter, Sean

        - Direct reports of Don

            Members: Ashley, Jason, Tanya

        - Direct reports of Jason

            Members: April

    - **Flat Managerial List**

        A flat managerial list is one in which all direct reports of the top manager and sub-level
        managers are added as members of a single group; no separate groups are created for
        different levels of managers.

        Referring the data set used for a Managerial List, a flat managerial list would consist of
        one Smart Group for Paul, with all users as members.

        On selecting this option button, some options on this page get disabled since they do not
        apply to a flat managerial list.

    - **Recursive Flat Managerial List**

        Use a recursive flat managerial list to create a Smart Group for each manager and
        sub-manager. For members, each group would contain the respective manager’s direct reports,
        the direct reports of those direct reports, thus continuing till the nth level.

        Referring to the data set used for a Managerial List, the following child groups will be
        created:

        - Direct reports of Paul

            Members: Sam, Eric, Don, Peter, Sean, Ashley, Jason, Tanya, April

        - Direct reports of Sam

            Members: Peter, Sean

        - Direct reports of Don

            Members: Ashley, Jason, Tanya, April

        - Direct reports of Jason

            Members: April

        On the
        [Query Designer](/docs/directorymanager/11.0/welcome/group/querydesigner/overview.md)
        page, you can also specify a criterion to filter the managers for whom you want to create
        child groups in the Dynasty.

3. Select the **Include manager as member** check box to include the manager as a member of their
   group along with their direct reports, while creating groups for the managerial structure. With
   this check box selected, the manager receives a copy of any email sent to the direct reports
   group.

    By default, this check box is not selected, indicating that the manager of each level of direct
    reports is not included in their respective group.

4. Select the **Set Manager as owner** check box to set the top manager as the primary owner of the
   parent Dynasty.

    On the **Owners** page of the wizard, the top manager would be displayed as the primary owner.
    If you change it, the new recipient would be the owner, even with the **Set manager as owner**
    check box selected.

    In case the Dynasty is not a flat managerial Dynasty, the manager of each child Dynasty will be
    set as its respective owner.

5. For a hierarchical managerial Dynasty, by default, the Dynasty structure adds a sub-level
   manager’s Smart Groups in the membership of the top-level manager’s Smart Groups. Select the
   **Exclude nested lists of direct reports** check box to exclude them from the membership.
6. Specify a container for creating child groups. Options are:

    - **Create groups in same container as manager**: to create groups in the container the
      top-level manager resides in.
    - **Create groups in this container**: to specify a container or organizational unit for the
      child groups to be created in. Click **Browse** next to the **Child Dynasty Container** box to
      specify a container.

7. You can create a managerial Dynasty based on any attribute.

    Use the **Attributes** area to set a custom attribute, such as the XAdditonalManager attribute,
    to create a managerial lineage in the context of this attribute.

    By default, the ‘Manager’ attribute is selected to create a managerial lineage. This attribute
    involves the collaboration of two attributes: manager and direct reports, to create the
    Dynasty’s hierarchical structure.

    Some examples of a managerial Dynasty with a different set of attributes are give below:

    - To add another attribute, click **Add** and select the required attribute.
    - To remove an attribute, select it and click **Remove**.
    - To replace an attribute, select it and click **Edit**. Select another attribute as a
      replacement and click **OK**.
    - Specify the ‘XadditionalManager’ attribute in addition to the ‘Manager’ attribute to create a
      managerial lineage

        Here ‘Manager’ is the primary attribute to create the managerial lineage.)

        You select a top manager to create the Dynasty. The managerial hierarchy for this manager in
        a provider (such as Active Directory) is as follows:

        Top manager: Alan

        Alan is the manager of John, Jane, and Josephine

        John is the manager of Mark and Martin

        Mark is the manager of Sophia and Martin is the manager of Sarah

        John is also the additional manager of Sophia and Sarah

        When the Dynasty is updated:

        - ‘TestManagerial1’ is the parent Dynasty with child Dynasties such as:

            - Direct reports of John
            - Direct reports of Mark
            - Direct reports of Martin
            - Direct reports of Sophia

                (This child Dynasty will be a part of the Direct reports of John and Direct reports
                of Mark, since John is the additional manager and Mark is the primary manager.)

            - Direct reports of Sarah

                (This child Dynasty will be a part of the Direct reports of Martin.)

        If no user is set as additional manager, no child Dynasty will be created with the
        additional manager attribute.

    - Specify a single attribute, ‘XadditionalManager’

        Suppose the managerial hierarchy for the top manager in a provider (such as Active
        Directory) is as follows:

        Top manager: Alan

        Alan is the additional manager of John, Jane, and Josephine

        John is the additional manager of Mark and Martin

        Mark is the additional manager of Sophia and Martin is the additional manager of Sarah

        When the Dynasty is updated:

        - ‘TestManagerial1’ is the parent Dynasty with child Dynasties such as:
        - Direct reports of John
        - Direct reports of Mark
        - Direct reports of Martin

        When Alan is not the additional manager of any user, the parent Dynasty would be created
        without any child Dynasties.

    - Specify a custom attribute, ‘customattribute1’

        Let’s take employeeID as the custom attribute. Data will be as:

        Top manager: Alan with EmployeeId 1

        John (EmpID: 2, CA: 1); Jane (EmpID: 3, CA: 1); Josephine (EmpID: 4, CA: 1)

        Mark (EmpID: 5, CA: 2); Martin (EmpID: 6, CA: 2)

        Sophia (EmpID: 7, CA: 5); Sarah (EmpID: 8, CA: 6)

        When the Dynasty is updated:

        - ‘TestManagerial1’ is the parent Dynasty with child Dynasties such as:

            - Direct reports of John (having Mark and Martin)
            - Direct reports of Mark (having Sophia)
            - Direct reports of Martin (having Sarah)

    - Specify multiple attributes – ‘Manager’, ‘XadditionalManager’ and ‘customattribute1’

        Direct reports for users created with respect to additional manager and custom attribute 1
        are added in their respective managers and additional managers according to the custom
        attribute 1 data.

8. Click **Next**.

**See Also**

- [Create an Active Directory Dynasty](/docs/directorymanager/11.0/welcome/group/dynasty/createdynasty/createdynasty.md)
