---
sidebar_position: 4
sidebar_label: Domain discovery
description: Discover and map domains with automatic discovery, report consolidation, or cartography.
---
# Domain Discovery and Consolidation

PingCastle provides three methods for discovering and mapping domains in your environment:

## Option 1: Automatic Domain Discovery (Recommended)

Scan all reachable domains and automatically generate a consolidated report with cartography.

**Interactive Mode**: Run PingCastle in healthcheck mode and enter `*` when prompted for the domain.

**Command Line**:
```
PingCastle.exe --healthcheck --server *
```

This scans all reachable domains, enables reachable mode, and automatically creates a consolidation report. The process typically takes a few minutes to an hour depending on your environment size.

## Option 2: Report Consolidation

If you already have multiple XML healthcheck reports, you can consolidate them to generate overview reports and trust maps.

**Prerequisites**: All XML report files must be in the current directory (or subdirectories). If duplicate reports exist, PingCastle uses only the most recent.

**Interactive Mode**: Select "conso" from the menu.

**Command Line**:
```
PingCastle.exe --hc-conso
```

This consolidates all available XML reports and generates summary reports with trust relationship maps. You can combine XML reports generated from multiple locations to create a comprehensive view of your infrastructure.

:::note
PingCastle performs consolidation automatically when using `--server *` for automatic domain discovery.
:::

**Output Files**

Consolidation generates three HTML files:

- **ad_hc_summary.html**: Summary of all reports with the same structure as detailed reports but at a higher level. See an [example summary report](https://www.pingcastle.com/PingCastleFiles/ad_hc_summary.html).
- **ad_hc_summary_full_node_map.html**: Complete trust relationship map showing all discovered domains and trusts.
- **ad_hc_summary_simple_node_map.html**: Simplified trust relationship map for easier visualization.

## Option 3: Quick Domain Cartography

For a fast network map without full healthcheck scores (under 5 minutes), use the cartography mode.

**Interactive Mode**: Select "carto" from the menu.

**Command Line**:
```
PingCastle.exe --carto
```

This option discovers all reachable domains, performs a lightweight scan, and generates trust relationship maps. The SID Filtering status is accurate, but individual domain scores aren't available. Scans run in parallel for speed.

:::note
You can't combine cartography reports run from multiple locations. For comprehensive multi-location data, use Option 1 or Option 2 instead.
:::
