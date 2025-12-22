---
title: "Managing Technical Debt"
description: "Managing Technical Debt"
sidebar_position: 120
---

# Managing Technical Debt

These articles are best practices for managing and, over time, resolving technical debt for every
organization in a Salesforce environment. The articles do not extensively focus on organizational
risk and governance.

We begin with a brief review of the root causes of technical debt and the general principles and
capabilities that may apply in a variety of situations. The majority of the document is focused on
systematically taking control of an SFDC org with varying degrees of complexity ranging from simple
to extreme. We move rapidly through critical stages of Salesforce org management maturity:

- Early stages rapidly deliver value with minimal allocation of effort or disruption of process.
- Later stages build on this base to streamline your account and change processes.

Each article ends with a link to the next topic in the **Managing Technical Debt** series.

::::tip
Tips provide optional background or details in these articles.
::::

_Technical debt_ (tech debt) is the cost of reworking a system to fix or work around implemented
solutions. A key cause of tech debt is solutions that were not fully engineered at the time they
were deployed. One of the great features of Salesforce is professional coders/developers are not
required for every system enhancement. The downside is inexperienced people inadvertently creating
tech debt.

There are many ways to classify tech debt but we can use three main categories:

1. Bad customization: It was a bad idea in the first place.
2. Base case customization: It was implemented to support a simple case but needs to evolve or
   extend to address new situations.
3. Aged customization: It was a good idea at the time but is no longer in use or fully utilized.

These customizations are littered amongst and intertwined with mission-critical portions of
virtually every org.

Salesforce tech debt is normal. It is not a reflection of team aptitude or level of competence. In
most cases, the changes made to the org were part of rapid, rational, responsible solutions to the
problems of the day. The incredible flexibility of the Salesforce platform enables an organization
to move forward with high velocity and in an agile manner. Over time, the cost of changing or adding
functionality grows at an exponential rate due to the rigor around changes, thus bottle-necking
enhancements. Training costs are inflated answering questions about outdated fields or reports. Team
turnover or org growth makes tribal knowledge unworkable and ongoing regression testing adds
significant cost and slows down innovation.

It is time to tackle your tech debt and unleash your team’s innovation on the task of delivering
great solutions to your business.

**Next Technical Debt Topic:** [Managing Orgs in the Real World](/docs/platgovsalesforce/techdebt/tech_debt_managing_orgs.md)
