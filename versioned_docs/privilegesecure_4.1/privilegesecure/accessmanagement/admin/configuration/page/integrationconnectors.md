# Integration Connectors Page

The Integration Connectors page is accessible from the Navigation pane under Configuration. It shows
the configured integration settings with other products.

![Integration Connectors Page](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/configuration/page/integrationconnectorspage.png)

The pane on the left side of the page displays a list of the configured integration connectors. This
pane has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Green + button — Create a new connector
- Trashcan icon — Deletes the connector. Icon appears when activity is hovered over. A confirmation
  window will display.

The selected connector details display at the top of the main pane:

- Name — Displays the name of the authentication connector
- Description — Description of the policy
- Connector Type — Indicates the type of integration:

    - BYOV — Configure integration with any vault, or Bring Your Own Vault. See the
      [Bring Your Own Vault (BYOV) Integration](/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/configuration/add/integrationbyov.md)
      topic for additional information.
    - CyberArk — Configure integration with CyberArk. See the
      [CyberArk Integration](/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/configuration/add/integrationcyberark.md)
      topic for additional information.
    - HashiCorp — Configure integration with HashiCorp. See the
      [HashiCorp Integration](/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/configuration/add/integrationhashicorp.md)
      topic for additional information.
    - LAPS — Configure integration with LAPS. See the
      [LAPS Integration](/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/configuration/add/integrationlaps.md)
      topic for additional information.
    - StealthAUDIT — Configure integration with Netwrix Enterprise Auditor. See the
      [StealthAUDIT Integration](/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/configuration/add/integrationaccessgovernance.md)
      topic for additional information.

    **NOTE:** The remaining fields vary based on the type selected.

If any of these settings are modified, Save and Cancel buttons are displayed. Click **Save** to
commit the modifications. Click **Cancel** to discard the modifications.
