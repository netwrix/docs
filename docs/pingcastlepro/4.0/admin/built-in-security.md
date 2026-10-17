---
title: "PingCastle built-in security"
description: "Review the security controls built into PingCastle Pro."
sidebar_position: 20
---

# PingCastle built-in security

PingCastle Pro is a tool dedicated to improving Active Directory security, so
security is a major priority at every step of creation and improvement.

First, the application uses a framework that prohibits most common
attacks such as cross-site scripting (XSS) or SQL injection by design.

Because attackers can sometimes bypass such protections, the application has
an additional layer of protection with all known HTTP security headers
and including the header \"Content Security Policy\" in strict mode.
That means the application stores all its JavaScript code in separate
files, and injected JavaScript will not run in the browser. You can
check this protection via a third-party service such as \"security
headers\". The application doesn't accept \"unsafe-inline\" and \"unsafe-eval\".

![](/images/pingcastlepro/4.0/prouser/image3.webp)

The application uses enforced controls that check parameters twice
against a model (in the browser then in the server
application) and parameterizes all database queries. The application never builds SQL strings.

Then a filter verifies each database access by checking the query before
PingCastle Pro sends it to the database. Unit tests cover this
code to lower the risk of a misconception in the filter.

The application mainly uses the following frameworks:

- asp.net core 3.1

- bootstrap 4

- jQuery 3

- vis.js

- chart.js
