---
title: "Integration API"
description: "Integration API"
sidebar_position: 40
---

# Integration API

The Integration API enables external access to Customization and Change Request objects. Third party
application are able to integrate via these APIs.

- **Customizations**
- **Change Requests** can be created, updated, retrieved and deleted.
- **ERD** and **Impact Analysis** tools are available.

- [Customizations API](/docs/platgovnetsuite/ticketingintegrations/apioverview/customizationsapi/customizations_api.md) can be retrieved from your NetSuite account and can be
  added and removed from your Change Requests. Here is the Customization API command:

    - [Get Customizations](/docs/platgovnetsuite/ticketingintegrations/apioverview/customizationsapi/get_customizations.md): Returns customizations based on your filters.

- [Change Request API](/docs/platgovnetsuite/ticketingintegrations/apioverview/changerequestapi/change_request_api.md) can be created, updated, retrieved and deleted. The
  ERD and Impact Analysis tools are available. Here are the Change Request API commands:

    - [Get Change Request](/docs/platgovnetsuite/ticketingintegrations/apioverview/changerequestapi/get_change_request.md): Returns the change request associated with an
      External ID.
    - [Add/Update Customizations in a Change Request](/docs/platgovnetsuite/ticketingintegrations/apioverview/changerequestapi/add_update_change_request.md): adds/updates
      customization and/or proposed customizations.
    - [Delete Customizations in a Change Request](/docs/platgovnetsuite/ticketingintegrations/apioverview/changerequestapi/delete_customizations_change_request.md): removes
      customizations and/or proposed customizations.
    - [Get ERD](/docs/platgovnetsuite/ticketingintegrations/apioverview/changerequestapi/get_erd.md): returns ERD URL links for each customization.
    - [Get Impact Analysis](/docs/platgovnetsuite/ticketingintegrations/apioverview/changerequestapi/get_impact_analysis.md): returns the impact analysis data for each
      customization. Customizations are categorized as _Safe to Modify_, _Not Safe to Modify_, and
      _Inactive_.
    - [Push Change Request](/docs/platgovnetsuite/ticketingintegrations/apioverview/changerequestapi/push_change_request.md): pushes the external ticket details and creates
      an equivalent change request.

## Postman Links

Both the Customizations and Change Requests API documentation are published in
[Postman](http://postman.com/). You can try out the API commands in the Postman interface.

- [Customizations](https://documenter.getpostman.com/view/30883336/2s9YeABubu) API
- [Change Requests](https://documenter.getpostman.com/view/30883336/2s9YeABubr) API
