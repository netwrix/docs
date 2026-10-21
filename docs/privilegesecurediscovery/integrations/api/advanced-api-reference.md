---
title: "Advanced API reference"
description: "Learn the query syntax of the Netwrix Privilege Secure for Discovery advanced API: paging, field selection, operators, and date filters."
sidebar_position: 10
---

:::warning[Needs dev input: remove before publishing]
TODO: With the advanced flag, the `sort` parameter has no effect on computers, users, and groups (the results always come back in database order), and the standard query rejects `select`. Confirm whether this is intended. Evidence: docker/node/packages/lib-api-common/utils/paginateAggregate.js:21-27 passes the option as `sortBy`, but mongoose-aggregate-paginate-v2 reads `options.sort`. A request with `?advanced&sort=-cn` returned the same order as `?advanced&sort=cn` on the 26.09.1 test stack.
:::

The Netwrix Privilege Secure for Discovery advanced API supports comparison operators, date queries, and field selection on query strings. Use it to retrieve exactly the records that you need, for example in reports and scripts. All requests require authentication. See [Authenticate with an API key](./authenticate-with-an-api-key.md).

## Choose the advanced or the standard query

Add the `advanced` parameter to a request to switch from the standard query to the advanced query. The following endpoints support it:

- `/api/v1/computers`
- `/api/v1/users`
- `/api/v1/groups`
- `/api/v1/bulk-actions/jobs`

Without `advanced`, the API runs the standard query, which works differently:

- A text value matches the start of the field and ignores case. `?cn=app` matches `APP01`.
- A value can contain regular expression characters. `?cn=AP.*01` matches `APP01`. A complex expression slows the query.
- Operators such as `>` and `!` aren't available.
- A date or number field with an operator fails with a `CastError` message.
- The `select` parameter fails with the message `field "select": field name or value not allowed`.

The advanced query is case-sensitive: `?advanced&cn=app01` finds nothing, and `?advanced&cn=APP01` finds the computer. Use the `^`, `$`, or `~` operators for case-insensitive matching. The advanced query returns an `InvalidQuery` error for a field that doesn't exist.

The following request returns the computers whose names start with `APP`, in the advanced form.

```bash
curl --request GET "https://<server-fqdn>/api/v1/computers?advanced&cn=^APP&limit=3" \
  --header "X-Access-Token: <access-token>"
```

## Page results

- `?limit=20` returns at most 20 records. The default is `100`.
- `?limit=20&page=2` returns the second page of 20 records.

The response headers describe the paging. All values are strings.

| Header | Description |
| --- | --- |
| `X-Pagination-Count` | The number of records on the page. In an advanced query, this value is the `limit` value. |
| `X-Pagination-Max-Count` | The `limit` value. The standard query returns this header. |
| `X-Pagination-Page` | The current page number |
| `X-Pagination-Pages` | The total number of pages |
| `X-Pagination-Total` | The total number of records |
| `Link` | The URLs of the first, last, next, and previous pages |

To put the paging information in the response body, add `inlinePageInfo`. The response then has the following shape.

```json
{ "limit": 3, "page": 1, "pages": 3, "total": 8, "links": {}, "docs": [] }
```

## Select fields

`?advanced&select=cn,last_ip` returns only the fields `cn`, `last_ip`, and the record ID.

- Without `select`, the API returns the default fields of the record type.
- You can select only fields that are in the default set. The API ignores other names without an error. The exception for computers is `admins.current`, which you can select explicitly.
- You can select a child field, for example `policy.scan`.

## Query terms

Put the operator at the start of the value. For a field that appears several times, the API combines the conditions.

| Operation | Query string | Meaning |
| --- | --- | --- |
| equal | `?cn=APP01` | The field equals `APP01`. |
| unequal | `?cn=!APP01` | The field doesn't equal `APP01`. |
| exists | `?lastScan.msg=` | The field has a value. |
| not exists | `?lastScan.msg=!` | The field has no value. |
| greater than | `?lastScan.duration=>30` | The field is greater than 30. |
| greater than or equal | `?lastScan.duration=>=30` | The field is greater than or equal to 30. |
| less than | `?lastScan.duration=<30` | The field is less than 30. |
| less than or equal | `?lastScan.duration=<=30` | The field is less than or equal to 30. |
| starts with | `?cn=^APP` | The field starts with `APP`. Case doesn't matter. |
| ends with | `?cn=$01` | The field ends with `01`. Case doesn't matter. |
| contains | `?cn=~SQL` | The field contains `SQL`. Case doesn't matter. |
| in list | `?cn[]=APP01&cn[]=DC01` | The field equals one of the values. |
| not in list | `?cn[]=!APP01&cn[]=!DC01` | The field equals none of the values. |

Regular expression characters in a `^`, `$`, or `~` value match literally. The API escapes them.

### Numbers and Booleans

For number fields, the API reads whole numbers and decimals, for example `?lastScan.duration=>=40&lastScan.duration=<=45`. For Boolean fields, use `true` or `false`, for example `?policy.scan=true`. To include records where the field is missing or different, use `!true` or `!false`.

### Dates

For date fields, the API accepts the following formats:

- Unix timestamp in seconds: `?last_scanned=>=1760000000`
- Timestamp in milliseconds: `?last_scanned=>=1760000000000`
- ISO 8601: `?last_scanned=>=2026-10-01T00:00:00.000Z`
- A date string, such as `?last_scanned=>=2026-10-01`
- A relative date: `?last_scanned=>=now-7d`

To query a range, repeat the field: `?last_scanned=>=2026-10-01&last_scanned=<=2026-10-31`.

### Relative dates

A relative date has an offset from now, and it can round to the start or the end of a unit. The units are `s` (seconds), `m` (minutes), `h` (hours), `d` (days), `w` (weeks), `M` (months), and `y` (years). Units are case-sensitive: `m` is minutes and `M` is months. The `|` character rounds down to the start of the unit, and the `/` character rounds up to the end of the unit. Dates use UTC, and a week starts on Sunday.

| Notation | Result |
| --- | --- |
| `now` | The current date and time |
| `now+1d` or `+1d` | One day from now |
| `now-1d` or `-1d` | One day ago |
| `+1M2d` | One month and two days from now |
| `now\|d` | The start of today |
| `now/d` | The end of today |
| `-1d\|d` | The start of yesterday |
| `+1d/d` | The end of tomorrow |

The unit `M` keeps the day of the month where possible. For example, `-1M` from March 31 gives February 28 or 29.

The following table lists common ranges. Use the `From` value with `>=` and the `To` value with `<=`.

| Range | From | To |
| --- | --- | --- |
| Today | `now\|d` | `now/d` |
| This week | `now\|w` | `now/w` |
| This month | `now\|M` | `now/M` |
| This year | `now\|y` | `now/y` |
| Yesterday | `-1d\|d` | `-1d/d` |
| Previous week | `-1w\|w` | `-1w/w` |
| Previous month | `-1M\|M` | `-1M/M` |
| Previous year | `-1y\|y` | `-1y/y` |
| Last 5 minutes | `-5m` | `now` |
| Last 1 hour | `-1h` | `now` |
| Last 7 days | `-7d` | `now` |
| Last 6 months | `-6M` | `now` |

The following request returns the computers that a scan reached yesterday.

```bash
curl --request GET "https://<server-fqdn>/api/v1/computers?advanced&last_scanned=>=-1d|d&last_scanned=<=-1d/d&select=cn,last_scanned" \
  --header "X-Access-Token: <access-token>"
```

## Example: retrieve Access Risk segregation data

The **Insight** > **Access Risk** > **Segregation** page shows two tables: **Groups with Access on Multiple System Types** and **Users with Access on Multiple System Types**. The following endpoints return the data of these tables. They support `limit` and `page`, and they return the records with the highest system total first.

| Table | Endpoint |
| --- | --- |
| Groups with Access on Multiple System Types | `/api/v1/access-risk/group-access` |
| Users with Access on Multiple System Types | `/api/v1/access-risk/direct-access` |

Both endpoints take the following parameters.

| Parameter | Description |
| --- | --- |
| `domain` | The DNS name of the domain, for example `corp.example.test`. `GET /api/v1/access-risk/get-domains` returns the list. |
| `query_date` | The time of one daily snapshot, as a Unix timestamp in milliseconds. The value must match a snapshot exactly. |

To find the snapshot times, request `GET /api/v1/access-risk/privileged-trend` with the `startDate` and `endDate` parameters, as millisecond timestamps, and the `domain` parameter. The `labels` list in the response contains one timestamp for each snapshot.

```bash
curl --request GET "https://<server-fqdn>/api/v1/access-risk/privileged-trend?startDate=<start-ms>&endDate=<end-ms>&domain=<domain>" \
  --header "X-Access-Token: <access-token>"
```

Then request the group data or the user data for one snapshot.

```bash
curl --request GET "https://<server-fqdn>/api/v1/access-risk/group-access?query_date=<snapshot-ms>&domain=<domain>" \
  --header "X-Access-Token: <access-token>"
```

```bash
curl --request GET "https://<server-fqdn>/api/v1/access-risk/direct-access?query_date=<snapshot-ms>&domain=<domain>" \
  --header "X-Access-Token: <access-token>"
```

Add `direct_only=true` to the user request to return only the users that have direct access to at least one system. A request with a `query_date` that doesn't match a snapshot returns an empty list.

## Related information

- [Create and manage API keys](./api-key-management.md)
- [Authenticate with an API key](./authenticate-with-an-api-key.md)
