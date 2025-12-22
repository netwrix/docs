---
title: "Pagination"
description: "Pagination"
sidebar_position: 30
---

# Pagination

Each function returning a list of items supports pagination. This pagination is based on the
`PageSize` and `ContinuationToken` parameters.

The principle is to call the function with the `ContinuationToken` obtained from the previous call.

![Pagination sequence diagram](/images/identitymanager/6.1/integration-guide/api/pagination/pagination.webp)

Pagination is optional. If `PageSize` is not specified, the function will return all items or use
the limit specified in the `squery` parameter. If `PageSize` is specified, no limit must be
specified in the `squery` parameter.
