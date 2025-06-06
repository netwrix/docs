# 2-AAD\_Exceptions Job

The 2-AAD\_Exceptions Job identifies toxic conditions that exist within Microsoft Entra ID which may leave environments at risk or add unnecessary administrative overhead.

## Analysis Tasks for the 2-AAD\_Exceptions Job

Navigate to the __.Entra ID Inventory__ > __2-AAD\_Exceptions__ > __Configure__ node and select __Analysis__. Analysis tasks with configuration parameters that define security concerns can be modified.

__CAUTION:__ Most of these analysis tasks are preconfigured and should not be modified and not be deselected. There are a few which are deselected by default, as they are for troubleshooting purposes.

![Analysis Tasks for 2-AAD_Exceptions Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/entraidinventory/exceptionsanalysistasks.png)

The default analysis tasks are:

- Create Exception Type Table – Creates a processing table in the database for use by downstream analysis and report generation
- Large Groups
  - Identifies groups that exceed the defined threshold for effective group membership
  - Populates processing tables in the database for use by downstream analysis and report generation
  - This analysis task has configurable parameters
    - Definition of a larger group can be customized
- Deeply Nested Groups
  - Identifies groups that exceed the defined threshold of deep levels of membership nesting
  - Populates processing tables in the database for use by downstream analysis and report generation
  - This analysis task has configurable parameters
    - Definition of a deeply nested group can be customized
- Circular Nesting
  - Identifies groups with circular references in their effective membership
  - Populates processing tables in the database for use by downstream analysis and report generation
- Empty Groups
  - Identifies groups with no membership
  - Populates processing tables in the database for use by downstream analysis and report generation
- Single Member Groups
  - Identifies groups with a single direct member
  - Populates processing tables in the database for use by downstream analysis and report generation
- Stale Users
  - Identifies user accounts that are disabled or exceed the defined threshold of inactivity
  - Populates processing tables in the database for use by downstream analysis and report generation
  - This analysis task has configurable parameters
    - Definition of a stale user can be customized
- Stale Membership
  - Identifies groups with a high percentage of effective members that are stale users
  - Populates processing tables in the database for use by downstream analysis and report generation
  - This analysis task has configurable parameters
    - Definition of a stale membership can be customized
- Display Exceptions View – Creates the SA\_AzureADInventory\_ExceptionsView accessible under the job’s Results node

### Customize Analysis Parameters for the 2-AAD\_Exceptions Job

The default values for parameters that can be customized are:

| Analysis Task | Customizable Parameter Name | Default Value | Value Indicates |
| --- | --- | --- | --- |
| Large Groups | @LARGE\_THRESHOLD | 1000 | A group object with 1000 members or more |
| Deeply Nested Groups | @NESTING\_THRESHOLD | 10 | A group object nested 10 levels or deeper within another group object |
| Stale Users | @STALE\_THRESHOLD | 30 | A user object that has been inactive for 30 days or more |
|  | @INCLUDE\_DISABLED | True | A user object that has been disabled |
| Stale Membership | @STALE\_THRESHOLD | 10 | A group where 10% of its effective members are stale users |

See the [Configure the Analysis Tasks for the 2-AAD\_Exceptions Job](#Configure-the-Analysis-Tasks-for-the-2-AAD_Exceptions-Job) section for instructions to modify parameters. See the [AzureADInventory Exception Types Translated](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/azureadinventory/standardtables.md#AzureADInventory-Exception-Types-Translated) topic for an explanation of Exception Types.

### Configure the Analysis Tasks for the 2-AAD\_Exceptions Job

Customizable parameters enable Access Analyzer users to set the values used to classify user and group objects during this job’s analysis. The parameters can be customized and are listed in a section at the bottom of the SQL Script Editor. Follow the steps to customize an analysis task’s parameters.

__CAUTION:__ Modifying these parameters affects solutions with .Entra ID Inventory Job Group dependency.

__Step 1 –__ Navigate to the __.Entra ID Inventory__ > __2-AAD\_Exceptions__ > __Configure__ node and select __Analysis__.

![Analysis Configuration option on Analysis Selection page](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/entraidinventory/exceptionsanalysisconfiguration.png)

__Step 2 –__ In the Analysis Selection view, select an analysis task and click __Analysis Configuration__. The SQL Script Editor opens.

__Step 3 –__ Click Parameters to open the Parameters section.

![Change Parameter Value in SQL Script Editor](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/entraidinventory/exceptionssqlscripteditor.png)

__Step 4 –__ Double-click in a field in the Value column and enter a custom value.

__CAUTION:__ Do not change any parameters where the Value states __Created during execution__.

__Step 5 –__ Click __Save and Close__ to finalize the customization and close the SQL Script Editor.

Repeat these steps to customize other analysis tasks for this job.
