---
sidebar_label: License
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# PingCastle Enterprise License

PingCastle Enterprise licenses use one of two models: a legacy per-domain model or the current per-user model.

Configuration > Settings > Licensing shows which model the current license uses, along with usage against the licensed limit. You can also identify the model from the first three characters of the license key: **PC2** for a per-domain license, **PC3** for a per-user license.

<Tabs>
<TabItem value="user" label="Per-user licensing" default>

Per-user licenses are based on the number of users managed.

![](/images/pingcastle/enterpriselicense/License-userbased.webp)

</TabItem>
<TabItem value="domain" label="Per-domain licensing (legacy)">

Per-domain licenses are based on the number of domains managed, with licenses available up to unlimited. The number of domains includes subdomains of a forest.

- Domain Controllers aren't counted for licensing purposes, only domains
- Licenses are bundled in packs of 10 domains, up to 60, with an unlimited license thereafter

**Example**: If you have `contoso.com` with two subdomains called `uk.contoso.com` and `us.contoso.com`, this would require a 10-domain licensing pack.

![](/images/pingcastle/enterpriselicense/License-domainview.webp)

</TabItem>
</Tabs>

## Updating your license

Configuration > Settings > Licensing shows the current license and lets you apply a new one.

- **Status** — A read-only display of the license status, edition, and current usage against the licensed limit.
- **Upload license** — Upload a new license file to replace the current one.
