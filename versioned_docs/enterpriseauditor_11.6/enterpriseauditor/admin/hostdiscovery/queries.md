# Host Discovery Queries

The Host Discovery Queries Pane contains a list of previously-configured queries.

![Host Discovery Queries Pane](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/hostdiscovery/queries.png)

The list of previously configured queries is provided in a table format with the following columns:

- Name – Displays the name assigned to the query during creation
- Query Source – Identifies where the query searches for hosts
- Query State – Displays the query’s current status (active or idle)
- Last count – Identifies the number of hosts found from the last scan
- Last Queried – Displays the date and time stamp for the last running of the query
- Connection Profile – Identifies the Connection Profile assigned to the query for access to the
  Query Source
- ID – GUID of the query task
- SANode – Name of the Enterprise Auditor Console server
- Snapshot mode – Identifies the type of discovery query:

    - Cumulative – Grows the host list by appending newly discovered hosts with each query execution
    - Snapshot – Only shows host found during the most recent query execution

    **NOTE:** The Snapshot mode is configured on the Options page of the Host Discovery Wizard.

## View Hidden Columns

Follow the steps to view the hidden columns in the table:

**Step 1 –** Right-click a header in the table, which opens a context menu.

![Field Chooser option on context menu](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/hostdiscovery/queriesfieldchooser.png)

**Step 2 –** Select **Field Chooser**, which opens the Customization window.

![Customization window](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/hostdiscovery/queriescustomizationwindow.png)

**Step 3 –** Select the **Columns** tab.

![Drag hidden colum into table](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/hostdiscovery/queriesaddhiddencolumn.png)

**Step 4 –** Drag and drop the desired column between any header of the table.

![Host Discovery Queries table with column added](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/hostdiscovery/querieshiddencolumnadded.png)

The header is now present in the table.
