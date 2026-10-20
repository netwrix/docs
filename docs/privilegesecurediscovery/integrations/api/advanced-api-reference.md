---
title: "Advanced API reference"
description: "Learn the query syntax of the Netwrix Privilege Secure for Discovery advanced API: paging, sorting, field selection, operators, and date filters."
sidebar_position: 10
---

:::warning[Screenshot needs attention: remove before publishing]
TODO: The old page referred to four screenshots of the Access Risk Segregation page and of the JSON results that don't exist in the repository. The references are removed. Add screenshots if they are needed.
:::

:::warning[Needs dev input: remove before publishing]
TODO: Confirm which endpoints support the advanced query syntax at 26.09.1 (the old page listed computers, users, and groups) and how the advanced flag is passed (the examples use ?advanced). Evidence: none.

TODO: Confirm that the relative date operators round as described in the Relative date format table (the old table was corrupted by pipe characters and was reconstructed). Evidence: none.
:::

The Netwrix Privilege Secure for Discovery advanced API supports Boolean logic, date queries, field selection, and other query operators. Use it to retrieve exactly the records that you need, for example in reports and scripts. The advanced API is case-sensitive.

All requests require authentication. See [Authenticate with an API key](./authenticate-with-an-api-key.md).

## Compare the advanced API with the standard API

The standard (non-advanced) API behaves differently:

- It isn't case-sensitive. This breaks Boolean filters. For example, `?policy.scan=false` is treated as a regular expression, which is truthy, so it also matches `{'policy.scan': true}`.
- It doesn't work for date or number fields.
- It allows regular expression characters. For example, `?cn=vm.*p2` becomes `{'cn': /^vm.*p2/i}`. A complex regular expression has a large performance cost.
- It supports pagination and sorting.
- It doesn't support field selection or operators. All operations use a prefix regular expression.
- It doesn't validate queries consistently across all endpoints.

## Supported endpoints

- `/api/v1/computers`
- `/api/v1/users`
- `/api/v1/groups`

## Page results

- `?limit=20` returns the first 20 documents. The default is `100`.
- `?limit=20&page=2` returns the next 20 documents.

The response headers contain the paging information. All values are strings.

| Header | Description |
| --- | --- |
| `X-Pagination-Count` | The number of records in the current response |
| `X-Pagination-Max-Count` | The maximum number of records in a response |
| `X-Pagination-Page` | The current page number |
| `X-Pagination-Pages` | The total number of pages |
| `X-Pagination-Total` | The total number of records |

The response doesn't include a links header. To include the paging information in the response body, add `inlinePageInfo`, for example `?limit=20&inlinePageInfo`. The response has the following shape.

```json
{ "limit": 20, "page": 1, "pages": 2, "total": 25, "docs": [] }
```

## Sort results

`?sort=foo,-bar` sorts by the field `foo` in ascending order, and then by the field `bar` in descending order.

## Select fields

`?select=foo,bar` returns only the fields `foo` and `bar`.

- Without `select`, the API returns all fields that the default query selects.
- You can't select private fields.

## Query terms

### Match terms

| Operation | Query string | Query object |
| --- | --- | --- |
| equal | `?foo=bar` | `{foo: 'bar'}` |
| equal | `?foo=bar baz` | `{foo: 'bar baz' }` |
| unequal | `?foo=!bar` | `{foo: { $ne: 'bar' } }` |
| exists | `?foo=` | `{ foo: { $exists: true }}` |
| not exists | `?foo=!` | `{ foo: { $exists: false }}` |
| greater than | `?foo=>10` | `{ foo: { $gt: 10 }}` |
| greater than or equal | `?foo=>=10` | `{ foo: { $gte: 10 }}` |
| less than | `?foo=<10` | `{ foo: { $lt: 10 }}` |
| less than or equal | `?foo=<=10` | `{ foo: { $lte: 10 }}` |
| starts with | `?foo=^bar` | `{foo: /^bar/i }` |
| ends with | `?foo=$bar` | `{foo: /bar$/i }` |
| contains | `?foo=~bar` | `{foo: /bar/i }` |
| in array | `?foo[]=bar&foo[]=baz` | `{ foo: { $in: ['bar', 'baz'] }}` |
| not in array | `?foo[]=!bar&foo[]=!baz` | `{ foo: { $nin: ['bar', 'baz'] }}` |

### Numbers

- The API parses string integers and floats as numbers for fields of type Number.
- It supports the equal, unequal, greater than, greater than or equal, less than, and less than or equal operations.
- Example: `?foo=12.3` becomes `{foo: 12.3}`.

### Booleans

- The API parses string Booleans as Booleans for fields of type Boolean.
- Example: `?foo=true` becomes `{foo: true}`.
- Example: `?foo=false` becomes `{foo: false }`.
- Example: `?foo=!true` becomes `{foo: {$ne: true} }`. This form is useful if the value is optional.

### Dates

The API parses values as dates for fields of type Date. It supports the following formats:

- Unix timestamp: `?created=>=1561852800`
- JavaScript timestamp (milliseconds): `?created=>=1561852800000`
- ISO 8601: `?created=>=2019-06-30T00:00:00.000Z`
- Any date string that the JavaScript `Date` constructor accepts: `?created=>2019-06-30`
- Relative: `?created=>=now-1d`

To query a range, repeat the field: `?created=>=2019-06-01&created=<=2019-06-30`.

### Relative date format

The relative date format is based on the Grafana time range syntax. The units are `s`, `m`, `h`, `d`, `w`, `M`, and `y`. The `|` operator rounds down to the start of the unit, and the `/` operator rounds up to the end of the unit.

| Notation | Alternative | Result |
| --- | --- | --- |
| `now+1d` | `+1d` | Adds one day to now |
| `now+1M2d` | `+1M2d` | Adds one month and two days to now |
| `now-1d` | `-1d` | Subtracts one day from now |
| `now-1d\|d` | `-1d\|d` | Subtracts one day from now, and rounds down to the start of the day |
| `now+1d/d` | `+1d/d` | Adds one day to now, and rounds up to the end of the day |
| `now` | | Returns the date and time of now |
| `now\|d` | | Rounds down to the start of today |
| `now/d` | | Rounds up to the end of today |

Notes:

- A week starts on Sunday. For the meaning of "start of" and "end of" a unit, see the [Moment.js documentation](https://momentjs.com/docs/#/manipulating/start-of/).
- `-1M` doesn't represent a fixed 30-day interval. It keeps the same day of the month in the previous month and clamps the day when needed. For example, `2019-03-15` with `-1M` gives `2019-02-15`, and `2019-03-31` with `-1M` gives `2019-02-28`.

The following table lists common date ranges, for example for a list of ranges.

| Range | From | To |
| --- | --- | --- |
| Today | `now\|d` | `now/d` |
| Today so far | `now\|d` | `now` |
| This week | `now\|w` | `now/w` |
| This week so far | `now\|w` | `now` |
| This month | `now\|M` | `now/M` |
| This year | `now\|y` | `now/y` |
| Yesterday | `-1d\|d` | `-1d/d` |
| Day before yesterday | `-2d\|d` | `-2d/d` |
| This day last week | `-7d\|d` | `-7d/d` |
| Previous week | `-1w\|w` | `-1w/w` |
| Previous month | `-1M\|M` | `-1M/M` |
| Previous year | `-1y\|y` | `-1y/y` |
| Last 30 seconds | `-30s` | `now` |
| Last 5 minutes | `-5m` | `now` |
| Last 1 hour | `-1h` | `now` |
| Last 7 days | `-7d` | `now` |
| Last 6 months | `-6M` | `now` |
| Last 1 year | `-1y` | `now` |

Examples:

- Computers enrolled this week: `/api/v1/computers?advanced&inserted_ts=>=now|w`
- Computers enrolled in the previous week: `/api/v1/computers?advanced&inserted_ts=>=-1w|w&inserted_ts=<=-1w/w`

## Example: retrieve Access Risk segregation data

The **Access Risk > Segregation** page shows two sections: **Groups with Access on Multiple System Types** and **Users with Access on Multiple System Types**. The following API endpoints return the data of these sections.

| Section | Endpoint |
| --- | --- |
| Groups with Access on Multiple System Types | `/api/v1/access-risk/group-access` |
| Users with Access on Multiple System Types | `/api/v1/access-risk/direct-access` |

The interface and the API filter by domain and date. In the interface, you use the lists at the top of the page. In the API, you use the `domain` and `query_date` parameters. The `query_date` value is a Unix timestamp in milliseconds. For example, the value `1665363600000` is 2022-10-10 01:00:00 UTC. You can convert a timestamp with a tool such as [Epoch Converter](https://www.epochconverter.com/).

The following request returns the group data for a domain.

```bash
curl --request GET "https://<server-fqdn>/api/v1/access-risk/group-access?query_date=<unix-ms-timestamp>&domain=<domain>" \
  --header "X-Access-Token: <access-token>"
```

The following request returns the user data for a domain.

```bash
curl --request GET "https://<server-fqdn>/api/v1/access-risk/direct-access?query_date=<unix-ms-timestamp>&domain=<domain>" \
  --header "X-Access-Token: <access-token>"
```

Each request returns the complete list of users or groups for the selected domain and time period as JSON. You can use any tool or code to call the same endpoints.

## Related information

- [Create and manage API keys](./api-key-management.md)
- [Authenticate with an API key](./authenticate-with-an-api-key.md)
