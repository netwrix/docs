---
title: "Advanced API Reference"
description: "Advanced API Reference"
sidebar_position: 30
---

# Advanced API Reference

Advanced API Reference

# Advanced API Reference

The Privilege Secure Advanced API:

- is designed to fulfill the needs of new UI and Insights expansions
- also designed to be suitable to be called directly by customers (public api)
- is case sensitive
- supports boolean logic and date queries as well as other advanced queries (see below)

## Simple API Notes (current non-advanced api)

- is not case sensitive

    - this breaks booleans ex. `?policy.scan=false` since regex is truthy it matches
      `{'policy.scan': true}`
    - doesn’t work for date or number fields
    - regex chars are allowed, ex. `?cn=vm.*p2` → `{'cn': /^vm.*p2/i}`
    - regex causes a big performance hit, if a complex regex is used

- pagination and sorting support
- no field selection support
- no operators, all operations use the prefix regex
- lacking consistent query validation across all endpoints

## Supported Endpoints

- `/api/v1/computers`
- `/api/v1/users`
- `/api/v1/groups`

## Paging and Limit

- `?limit=20` - get the first 20 documents (default is `100` if unspecified)
- `?limit=20&page=2` - get the next 20 documents
- response headers: (note: all values are strings)

    - `X-Pagination-Count` — Total number of records being returned in the current response/page
    - `X-Pagination-Max-Count` - Max number of records returned in a response/page
    - `X-Pagination-Page` — Current page number
    - `X-Pagination-Pages` - Total number of pages available
    - `X-Pagination-Total` - Total number of records available

- _Remember,_ the links header is not included.
- use `inlinePageInfo` to include page info in response body ex. `?limit=20&inlinePageInfo`
- `{ limit: 20, page: 1, pages: 2, total: 25, docs: [...] }`

## Sorting

- `?sort=foo,-bar` -- sort by field `foo` ascending, then by field `bar` descending

## Page Info

- An easier to consume alternative to is to include `inlinePageInfo` ex. `?limit=20&inlinePageInfo`

## Field Selection

- `?select=foo,bar` -- return only fields `foo` and `bar` from documents.
- Without a `select` param, we return all fields that are selected when a `Model.find(...)` is
  performed
- A user may not select private fields (schema has select:false, or when we select certain fields in
  the schema hooks)

**NOTE:** Select could be enhanced, relatively easily, to allow for dropping fields from the default
selection. ex. `?select=-foo,-bar`

## Queries

### Term Matching

| operation    | query string             | query object                       |
| ------------ | ------------------------ | ---------------------------------- |
| equal        | `?foo=bar`               | `{foo: 'bar'}`                     |
| equal        | `?foo=bar baz`           | `{foo: 'bar baz' }`                |
| unequal      | `?foo=!bar`              | `{foo: { $ne: 'bar' } }`           |
| exists       | `?foo=`                  | `{ foo: { $exists: true }}`        |
| not exists   | `?foo=!`                 | `{ foo: { $exists: false }}`       |
| gt           | `?foo=>10`               | `{ foo: { $gt: 10 }}`              |
| gte          | `?foo=>=10`              | `{ foo: { $gte: 10 }}`             |
| lt           | `?foo=<10`               | `{ foo: { $lt: 10 }}`              |
| lte          | `?foo=<=10`              | `{ foo: { $lte: 10 }}`             |
| starts with  | `?foo=^bar`              | `{foo: /^bar/i }`                  |
| ends with    | `?foo=$bar`              | `{foo: /bar$/i }`                  |
| contains     | `?foo=~bar`              | `{foo: /bar/i }`                   |
| in array     | `?foo[]=bar&foo[]=baz`   | `{ foo: { $in: ['bar', 'baz'] }}`  |
| not in array | `?foo[]=!bar&foo[]=!baz` | `{ foo: { $nin: ['bar', 'baz'] }}` |

### Numbers

- string integers/floats are parsed as Numbers (for fields of type Number)
- equal, unequal, gt, gte, lt, lte operations supported
- ex. `?foo=12.3` -> `{foo: 12.3}`

### Booleans

- String booleans are parsed as Booleans (for fields of type Boolean)
- ex. `?foo=true` -> `{foo: true}`
- ex. `?foo=false` -> `{foo: false }`
- ex. `?foo=!true` -> `{foo: {$ne: true} }` (useful if value is optional)

### Dates

- Parsed as `Date()` for fields of type Date
- Various date formats are supported

    - Unix TS - `?created=>=1561852800`
    - JS TS - `?created=>=1561852800000`
    - ISO - `?created=>=2019-06-30T00:00:00.000Z`
    - any datestring accepted by JS `Date` constructor - `?created=>2019-06-30`
    - relative - `?created=>=now-1d`

- Ranges - `?created=>=2019-06-01&created=<=2019-06-30`

    - Ideally, this should be enhanced to be something simpler like:
      `?created=2019-06-01|2019-06-30`

### Relative Date Format

Based upon [Grafana’s Time Range Syntax](https://grafana.com/docs/reference/timerange/)  
Units: `s`, `m`, `h`, `d`, `w`, `M`, `y`

| Notation   | Alt.    | Result                                          |
| ---------- | ------- | ----------------------------------------------- | ----------------------------------- | ----------------------------------------------------- |
| `now+1d`   | `+1d`   | Add one day to now                              |
| `now+1M2d` | `+1M2d` | Add one month and two days to now (2.15 → 3.17) |
| `now-1d`   | `-1d`   | Subtract one day from now                       |
| ```now-1d  | d```    | ```-1d                                          | d```                                | Subtract one day from now, round down to start of day |
| `now+1d/d` | `+1d/d` | Add one day to now, round up to end of day      |
| `now`      |         | Just returns the date corresponding to now      |
| ```now     | d```    |                                                 | Rounds down to todays start of day. |
| `now/d`    |         | Rounds up to todays end of day.                 |

Notes:

- a Week starts on Sunday. “Start of X”, “End of X” see
  [https://momentjs.com/docs/#/manipulating/start-of/](https://momentjs.com/docs/#httpsmomentjscomdocsmanipulatingstart-of)
- `-1M` is not 30 days, it will try to keep the same date for the previous month, clamping if can
  not

- `2019-03-15``````-1M` → `2019-02-15`
- `2019-03-31``````-1M` → `2019-02-28` (clamped)

Common date ranges (suitable for dropdowns)

| Range                | from   | to    |
| -------------------- | ------ | ----- | ------- |
| Today                | ```now | d```  | `now/d` |
| Today so far         | ```now | d```  | `now`   |
| This week            | ```now | w```  | `now/w` |
| This week so far     | ```now | w```  | `now`   |
| This month           | ```now | M```  | `now/M` |
| This year            | ```now | y```  | `now/y` |
| Yesterday            | ```-1d | d```  | `-1d/d` |
| Day before yesterday | ```-2d | d```  | `-2d/d` |
| This day last week   | ```-7d | d```  | `-7d/d` |
| Previous week        | ```-1w | w```  | `-1w/w` |
| Previous month       | ```-1M | M```  | `-1M/M` |
| Previous year        | ```-1y | y```  | `-1y/y` |
| Last 30 seconds      | `-30s` | `now` |
| Last 5 minutes       | `-5m`  | `now` |
| Last 1 hour          | `-1h`  | `now` |
| Last 7 days          | `-7d`  | `now` |
| Last 6 months        | `-6M`  | `now` |
| Last 1 year          | `-1y`  | `now` |

Examples:

- computers enrolled this week: `/api/v1/computers?advanced&inserted_ts=>=now|w`
- computers enrolled in the previous week:
  `/api/v1/computers?advanced&inserted_ts=>=-1w|w&inserted_ts=<=-1w/w`

## Additional Examples

Reporting via Access Risk

In our 2.12.0 [Minor] release of Privilege Secure the Risk Access Dashboard was added to give an
improve visual of standing privilege and admin sprawl of scanned systems within Privilege Secure. As
with all of our other features

Access Risk > Segregation page, one being the"Groups with Access on Multiple System Types" section
and the next being the "Users with Access on Multiple System Types" section. The data pulled in
these sections are via the base API URLs below:

- Groups with Access on Multiple System Types = /api/v1/access-risk/group-access?

    - The full API call URL example is =
      /api/v1/access-risk/group-access?query_date=1665363600000&domain=CSTEST (this call will
      generate the data in the screenshot below, which is from our internal Customer Success test
      environment for the last 90 days of the CSTEST domain.

- Users with Access on Multiple System Types = /api/v1/access-risk/direct-access?

    - The full API call URL example is =
      /api/v1/access-risk/direct-access?query_date=1665363600000&domain=CSTEST (similarly as above
      this is from our internal test environment for the last 90 days of a single domain CSTEST)

- The filtering within the UI and API calls is done via the "domain" and date variables. In the UI
  those are the dropdown list at the top of this Access Risk > Segregation page (image below). For
  API calls, that is within the URL as "query_date" and "domain" fields.

These 2 calls will pull a complete list of user and group data from the specified time period, which
is being referenced by the Unix timestamp of "1665363600000", in both URLs which equates to the
available filtering by domain and date + range (see image #3 above). This can be converted into a
human readable timestamp through a conversion site such
as [https://www.epochconverter.com/](https://www.epochconverter.com/). From the screenshots above we
can see 5 total group entries in the first image and 64 user entries in the second image, both being
the total user and group matches for that filtering criteria applied.

Below I have run the same API calls that are displayed in the UI via the URLs also provided above to
show what the authenticated call results would look like in JSON returned output. This can be done
with any toolset or direct code to leverage the same API features.

- Group Access
- Direct Access

These calls do require authentication to successfully execute them so a Privilege Secure
Administrator linked API key/authentication will need to be used for access to this information.
Below are the API articles that give more details on creating and authenticating using API keys for
such processes.

- [API Key Management](/docs/privilegesecurediscovery/integrations/api/apikeymanagement.md)
- [Postman: Authenticate using an API key](/docs/privilegesecurediscovery/integrations/api/postmanauthenticate.md)
