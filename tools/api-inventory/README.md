# API inventory and public OpenAPI spec

These scripts build the public REST API reference for Netwrix Privilege Secure for Access Management from the product source code. The old Swagger file was a 2024 snapshot and is not trusted.

## Output

Two files come out of one run of `build_spec.py`:

- `plans/api-inventory/spec/privilegesecure-26.07.3.full.openapi.json` is the full spec and the source. It holds all routes of the backend (969 operations from 970 routes); every operation that is not in the public set carries `x-internal: true` and an `x-internal-reason` (`hidden-by-review`, `cautioned-not-published`, `hidden-after-review`, `internal-plumbing`), and its text starts with "Internal. Not part of the public API." It is internal: never publish it, copy it to the docs site or send it to a customer.
- `plans/api-inventory/spec/privilegesecure-26.07.3.openapi.json` is the one public spec. It is filtered from the full file (drop the `x-internal` operations, the paths they leave empty and the schemas nothing reaches; drop every `x-internal` key and `info.x-internal-note`). It is the only file that is published:

- Copy it to `static/openapi/privilegesecure-<version>.json` for the docs site. `npm run build` runs `scripts/prepare-privilegesecure-spec.mjs`, which writes a derived copy to `.generated/` for the Docusaurus plugin. The derived copy is never published.
- The same file goes to the public `netwrix/privilege-secure` repository.
- One file per docs version. For a new release, copy the generator inputs forward and write a new file; leave the old version's file alone.

## Pipeline (run in this order)

1. `extract_routes.py` reads the controllers at the release ref (`origin/release/<version>` in the backend repo) and lists every route.
2. `extract_models.py` and `diff_schemas.py` parse the models and compare them with the previous spec. Only each correction's `definition` goes into the public spec.
3. `extract_console_calls.py` and `build_callers_v2.py` find which routes the web console and services call.
4. Audience panel: three reviewers (security, support, customer value) vote each route public or hidden. Contested routes stay public only if the dev team already publishes them. Result: `plans/api-inventory/audience/audience.json`.
5. Descriptions: workers draft a description per public route and a second pass verifies it against the code. Result: `plans/api-inventory/descriptions/descriptions.json`.
6. `build_spec.py` builds the public operations from `descriptions/route-list.json` (the final public set), the descriptions, the corrections, the enum map (enums go over the wire as integers) and the response overrides in `spec/response-fixes/`, adds the internal operations (from `routes.json`, `audience/audience.json`, `audience/facts.json` and the base and supplement shapes), writes the full spec, and then derives the public spec from it with `filter_public()`. The run fails if the filtered public text differs from the directly built public text.

The public set for 26.07.3 is the panel's public routes, minus the cautioned routes the dev team does not publish, minus a few routes hidden after review (anonymous routes that return personal data, routes with unreliable responses).

## Rules

- Hidden routes are not in the public file at all. Do not mark them with a tag or a flag in a published spec; the JSON is public. The flags (`x-internal`) live only in the full file, and the filter removes them.
- The leak scan runs on the public output. The full file gets structural checks only (references resolve, unique operationIds, path parameters, every route present, every non-public operation flagged) plus a scan for tokens, e-mail addresses, lab hosts, ticket IDs, non-documentation addresses, GUIDs and SIDs.
- The public file contains no internal text: no ticket IDs, file paths, class or code names, evidence, confidence values, host names or lab data. `build_spec.py` fails the build on those patterns; add a pattern when a new leak type turns up.
- Check the generated file against the release code, not the old spec. The old spec's response shapes are wrong in many places.
- Internal inputs (`findings.md`, correction notes, audience votes, judge reports) stay out of the repository and out of every public pull request.
- Build and validate in the container: `docker compose run --rm -T privilegesecure ...`. Do not install Node packages on the host.

## Rebuild

The full spec is the source; the public spec is filtered from it.

```
python3 tools/api-inventory/build_spec.py            # writes the full spec, the public spec and BUILD-REPORT.md
python3 tools/api-inventory/build_spec.py --out-dir DIR   # same, into another folder
# the public file alone, from the full file (no plans/ inputs needed):
python3 tools/api-inventory/build_spec.py --filter-public plans/api-inventory/spec/privilegesecure-26.07.3.full.openapi.json plans/api-inventory/spec/privilegesecure-26.07.3.openapi.json
cp plans/api-inventory/spec/privilegesecure-<version>.openapi.json static/openapi/privilegesecure-<ver>.json
docker compose run --rm -T privilegesecure npm run openapi:sync
```

The base spec the build reads is the pinned copy `plans/api-inventory/in/base-spec-2024.json` (the old generated description with the `SbPAM.*` schema names, taken from commit 2139568da). It does not depend on `static/openapi/privilegesecure-26.07.json`, so copying the public spec over that path (the publish step above) does not change the output and a rebuild after publishing gives the same result. Pass `--base PATH` to use another file.

A run writes the full spec, the public spec and `BUILD-REPORT.md`. Internal operations have summaries of the form `<Action> (internal)`, and their status code list comes from the generated API description and may be incomplete.

`BUILD-REPORT.md` is internal; do not publish it. The full spec is internal too.
