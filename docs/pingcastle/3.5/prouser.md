# PingCastle Pro User Manual

## Description

PingCastle Pro is a tool designed to improve and follow the Active
Directory overall security level. This software has been developed to be
compatible with most of the possible existing configurations. The goal
(when the tool was created) was not to aim for perfection, but to
provide reliable data to present the situation to the management, thus
improving over time.

# PingCastle built-in security

PingCastle Pro is a tool dedicated to improve the AD security, so
security has been a major priority alongside every step of the creation
and improvement.

First, the application has been designed in a framework where most
common attacks such as XSS or SQL Injection are prohibited by design.

Because such protections can be sometimes avoided, the application has
an additional layer of protection with all known HTTP security headers
and including the header \"Content Security Policy\" in strict mode.
That means that all the JavaScript code of the application is stored in
separate files and that JavaScript included in the page via injection
will not run in the browser. This protection can be checked via third
party service such as \"security headers\". It means that
\"unsafe-inline\" and \"unsafe-eval\" are not accepted.

![](/images/pingcastle/prouser/image3.webp)

The application uses enforced controls which force parameters to be
checked twice against a model (in the browser then in the server
application) and all queries to the database are parameterized. There is
no SQL string built by the application.

Then each access to the database is verified by a filter which controls
the data to be queried before a database query is sent. This code is
tested by unit tests to lower the risk of a misconception in the filter.

The application is based mainly on the following frameworks:

- asp.net core 3.1

- bootstrap 4

- jQuery 3

- vis.js

- chart.js

# Authentication and user management

PingCastle Pro provides authentication through:

- Windows Auth

- EntraID (formerly AzureAD)

# Ping Castle Pro features

**Main pages overview**

The application is divided is 2 different areas:

- The Audit data view

- The configuration

> ![A logo with a triangle and dots Description automatically
generated](/images/pingcastle/prouser/image4.webp)

# Technical view (\"Audit data\")

The technical view also named \"Audit Data\" is based on a main domain
and its data.

## Domains

**Detail information on a domain**

This view displays detailed information on the domain, as well as many
other information such the results of the last report, some history,
timeline and cartography. This can be modified by selecting a tab.

Last report tab:

![](/images/pingcastle/prouser/image5.webp)

The full detail of the last report performed is accessible in this tab,
though it is not shown here.

History tab:

![](/images/pingcastle/prouser/image6.webp)

Timeline tab:

![](/images/pingcastle/prouser/image7.webp)

The events that you can view are the following:

Domain event:

There has been a change on a domain within a specific perimeter in the
PingCastle Pro solution. It can be a domain that has been added by a
user, a domain that has been discovered after importing a report, a
status change, etc.

Risk event:

There has been a change in the risks followed by the PingCastle Pro
solution. It either means that a new risk has been discovered and that
it should be followed by the user, or that a risk has been cleared and
that the overall level of security improved. It can also mean that a
risk is set on an exception status.

Trust event:

There has been a change in the trust between several domains monitored.
It implies that a new trust between two domains has been established,
that an existing trust between two domains has been deleted, or even
that an existing trust has been modified.

Technical event:

There has been a significant technical change modifying the global level
of security, but which is not yet covered by the existing rules. This is
a very rare event and it is not likely that you have this kind of event.

Cartography tab:

![](/images/pingcastle/prouser/image8.webp)

# Tool configuration (\"Configuration\")

The \"Configuration\" view of the PingCastle Pro application allows the
user to set up all the tool in order to be able to use it completely. It
is also in this view that the user will be able to personalize settings
so that the tool fits more the Company needs.

## Exceptions management

This part enables administrator to configure PingCastle Pro so that it
adapts to the company specific context. It is indeed possible to
configure how PingCastle Pro handles exceptions specific to your
perimeter.

![](/images/pingcastle/prouser/image9.webp)

**Rule exceptions**

\"Rule exceptions\" can be set in order to completely disable a rule
within a specific domain. It means that this rule will not be applied
for a certain period, that you have to specify. This should be use only
when for very specific reasons, such as when a rule does not apply in
your organization. Do not hesitate to contact the PingCastle editors if
you have doubts or require extra assistance regarding how the exceptions
are managed.

**Migration**

In the same idea you can set exceptions for specific domain, you can
inform it in the application when one of your domains is migrating. It
will automatically put in place a set of exceptions during the timetable
the migration is happening.

## Importing data

PingCastle Pro is tool that will allow the administrators to easily and
efficiently consult all the data from reports, as well as take decisions
and such.

1.  Therefore, it is not yet possible to launch scans and so directly
    from the application, so it is required to launch the PingCastle
    tool in standalone mode and to then import the report that are
    produced that way.

There are two way for doing so:

- Option 1: Importing the file manually

From the \"Configuration\" tab, open \"Import one or more report(s).
Once you are on the page, you can simply drag and drop any file produced
by the PingCastle standalone executable and it will upload in the
PingCastle Pro solution.

Once it is down, the file will be marked with either a success or a
failure.

In case of a failure, a mouse over can display the associated error
message to help you in the process of uploading the file.

Import **page**

![](/images/pingcastle/prouser/image10.webp)

![](/images/pingcastle/prouser/image11.webp)

- Option 2: Importing the file automatically through the Agent mode

From the \"Configuration\" tab, you first need to get an API key using
the \"Agents\" page and configurate the PingCastle agent accordingly.

![](/images/pingcastle/prouser/image12.webp)

The first step is to create an Agent API key. Click on the create button
to reach the creation page.

![](/images/pingcastle/prouser/image13.webp)

To map the agent to a responsible, the Owner field must be completed. It
can be an entity or a domain, such as the \"default\" entity.

The API key is generated automatically but can be changed if the
complexity requirements are met

Once this is set up correctly, it is possible to directly upload reports
automatically using the command:

```bash
pingcastle --healthcheck --api-endpoint <endpoint> --api-key <key>
```

![](/images/pingcastle/prouser/image14.webp)

:::note
By default, all detailed information will be filtered.
To avoid this behavior, the command line can to be changed as follows.
:::

```bash
pingcastle --healthcheck --api-endpoint <endpoint> --api-key <key> --level Full
```

The API can be browsed using the link found in the agent page:

![](/images/pingcastle/prouser/image15.webp)
