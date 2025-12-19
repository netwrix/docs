---
title: "Pagination"
description: "Pagination"
sidebar_position: 30
---

# Pagination

Each function returning a list of items supports pagination. This pagination is based on the
PageSize and ContinuationToken parameters.

The principle is to call the function with the ContinuationToken obtained from the previous call.

![Pagination sequence diagram](/images/identitymanager/saas/integration-guide/api/pagination/pagination.webp)

:::note
Pagination is optional. If PageSize is not specified, the function will return all items
or use the limit specified in the squery parameter. If PageSize is specified, no limit must be
specified in the squery parameter.
:::


A DefaultPageSize as well as a MaxPageSize can be defined in the Applicative configuration settings.
If the given PageSize or squery limit is above the MaxPageSize, the limit of the MaxPageSize` is
used. See the
[Application Settings](/docs/identitymanager/saas/integration-guide/network-configuration/server-configuration/general-purpose/index.md)
topic for additional information.
