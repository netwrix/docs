# Documentation section guide: what goes where

Source of truth: the Xchange page "Documentation Section Guide: What Goes Where"
(https://xchange.netwrix.com/doc/documentation-section-guide-what-goes-where-JEaLpMEBNQ), copied here on
2026-10-06 so agents can read it offline. If the Xchange page and this file disagree, the page wins; tell the
user so this file can be updated.

Every product's docs share the same top-level sidebar sections, in the same order. Each section is a **zone**:
a top-level sidebar grouping such as Getting Started, Requirements, or Install. A zone is usually one folder.
It can also be a **position band**: several sibling categories for distinct feature areas (Administration).

Use this when you write new content, decide where a page should live, or structure a new directory.

## Zones, in sidebar order

| # | Zone | Required? | Reader's question |
|---|---|---|---|
| 1 | Release Notes / What's New | conditional | What changed in this version? |
| 2 | Getting Started | required | What is this product? How is it useful to me? What do I need to do to get started? |
| 3 | Requirements | required | What do I need in place before I can install this? |
| 4 | Install and Update | required | How do I get this installed and running? |
| 5 | Migration | conditional | How do I move to this from an older version or a competing product? |
| 6 | Configuration | required | How do I set up this product to perform task X? |
| 7 | Administration | required | How do I operate and manage this product day to day? |
| 8 | User Guide | conditional | How do I use this as an end user, not an admin? |
| 9 | Integrations & API | conditional | How do I connect this to my other systems, or automate it via the API? |
| 10 | Troubleshooting | conditional | How do I diagnose and fix this problem? |
| 11 | Knowledge Base | moving to Zendesk | (keep at position 999 until it moves) |

Place a page by the reader's question it answers, not by the feature it mentions.

## What each zone holds

**1. Release Notes / What's New (conditional).** One page that links to the Netwrix Community. Apply it when there
are release notes or what's-new information for current users. It comes first, before Getting Started, because
current users want it immediately and new users skip it at no cost. The page says:

- Header: `What's New`
- Body: `Release notes for <product> are published on the Netwrix Community. See the [<product> release notes](<link to Community>) for new features, improvements, and fixes in the current release.`

**2. Getting Started (required).** Describes what the product does, optionally how it works (architecture), and
how someone starts using it, with links to the documents for each next step. The landing page introduces the
reader to the product and is the jumping-off point to install, configure, and use it. It can include a quick-start
guide, the fastest path to value.
- Includes: product overview/introduction, key concepts, architecture and how it fits in the Netwrix ecosystem, quick-start guide (if available), a jumping-off point with links to next steps.
- Excludes: system requirements, deployment steps, ongoing settings, standalone commercial pages (for example a "Free Trial" page). **These documents never give installation steps, requirements, or settings.**

**3. Requirements (required).** What has to be true before you install the base product: hardware, software,
network, permissions, and licensing prerequisites.
- Includes: system requirements, supported platforms and versions, network and firewall rules, account and permission prerequisites.
- Excludes: requirements for a specific module or feature within a product (those live with that module).

**4. Install and Update (required).** The steps to get the product running, plus deployment mechanics.
- Includes: installation steps, initial setup wizards, licensing activation, upgrade paths that aren't substantial enough to need their own Migration zone.
- Excludes: setup steps for a specific module or feature within a product.

**5. Migration (conditional).** Steps to move from an old version or a competing product to the current version.
Apply it when users must follow a migration process, such as moving between major versions with data or
configuration translation. A routine point-release upgrade stays in Install and Update.

**6. Configuration (required).** One-time or infrequent setup after installation that users need before they can
perform regular tasks.
- Includes: data source and connector setup, initial policy definitions, environment-specific settings.
- Excludes: how to perform regular tasks with the product.

**7. Administration (required).** Day-to-day operation and management. This is not always a single folder. It can
be a position band holding several sibling categories for distinct feature areas.
- Includes: the core `admin` category (dashboards, alerts, user and role management, reporting) and product-specific feature categories substantial enough to deserve their own top-level spot.
- Rule for siblings: don't flatten large distinct features into one generic bucket, and don't invent extra categories for content that fits naturally under `admin`.
- Minimum: the `admin` category itself is always present.
- Example: Change Tracker's Administration zone has `admin` at position 400 and sibling categories Agents (440), Compliance (460), Baseline (480), and Cloud (500), each a distinct feature area, not buried under one generic `admin/` folder.

**8. User Guide (conditional).** Content for the actual end user of a self-service surface, not the administrator.
Includes end-user portal walkthroughs, such as a self-service password reset flow or an access request portal.
Apply it when the product has an end-user-facing surface distinct from the admin console.

**9. Integrations & API (conditional).** How to connect the product to other systems, and the REST/API reference
if one exists. Includes third-party integrations (SIEM, ITSM, ticketing), webhooks, SDKs, API authentication and
reference docs. If the API reference is substantial, make it its own top-level section instead of folding it into
Integrations. A substantial reference is an OpenAPI spec, like Change Tracker's at
https://docs.netwrix.com/docs/changetracker/api/reference/. Apply the zone when the product offers ways to integrate.

**10. Troubleshooting (conditional).** Helps users diagnose and resolve problems: common error conditions,
diagnostic steps, log locations. Distinct from the Knowledge Base, which is driven by customer support cases.
Apply it only when real troubleshooting content exists. Never create an empty section.

**11. Knowledge Base.** Moving to Zendesk. Keep it at position 999 until it moves.

## Rules that apply to every new directory

- Include every required zone. Include a conditional zone only when its "when it applies" condition is met and you have real content for it. Don't create empty sections.
- Keep zones in the order above. Release Notes goes first.
- Keep a module's own requirements, install, and setup with that module. A licensed add-on with its own install, admin, and end-user surfaces gets its own sibling category, and the same zone logic can repeat one level down inside it (install, admin, user-guide).
- Merge duplicates (for example a top-level `whats-new.md` and an `overview/whatsnew.md`) into the one page the zone calls for.
- Group many parallel connectors under Integrations by kind (for example SIEM, ITSM, cloud, security, storage, other) instead of one flat folder.

## Worked example: Auditor 10.9

Before, the product had a flat mix: `overview/`, `requirements/`, `install/`, `configuration/`, `admin/`,
`accessreviews/`, `accountlockoutexaminer/`, `tools/`, `addon/` (about 20 connector folders, no grouping), and
`api/`. Applying the guide gave:

```text
docs/auditor/10.9/
├── release-notes/whats-new.md        # Release Notes: first position; merges the two what's-new duplicates
├── getting-started/                  # overview, product editions, landing page (orientation only)
├── requirements/
├── install/                          # upgrade.md stays here: a routine point-release upgrade, so no Migration zone
├── configuration/
├── admin/                            # Administration: core category
├── access-reviews/                   # Administration: sibling (substantial add-on module)
│   ├── overview.md, install/, admin/
│   └── user-guide/                   #   its reviewers are business resource owners, so User Guide recurs one level down
├── account-lockout-examiner/         # Administration: sibling (named, self-contained)
├── tools/                            # Administration: sibling (five independent utilities)
└── integrations/                     # Integrations & API
    ├── overview.md
    ├── siem/, itsm/, cloud/, security/, storage/, other/
    └── api/                          # nested here because it isn't a substantial reference
```

8 of the 11 zones applied (no Migration, no standalone Troubleshooting). The Administration band ended up with
four siblings: `admin`, `access-reviews`, `account-lockout-examiner`, and `tools`.

## Positions

The guide fixes only these numbers: Administration `admin` at 400 with sibling categories at 440, 460, 480, and
500 in Change Tracker, and the Knowledge Base at 999. Existing products still use older positions (Change
Tracker's `admin` category is at 50 today), so match a product's existing numbers when you add to it. For a new
directory, give zones ascending positions in the order above, with gaps so later zones can slot in, put the
Administration core at 400 with siblings at 440, 460, and so on, and state the positions you chose.
