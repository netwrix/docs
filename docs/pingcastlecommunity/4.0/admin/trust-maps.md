---
sidebar_position: 5
sidebar_label: Trust maps
description: Read the full, simplified, and Hilbert maps that PingCastle generates.
---
# Trust Relationship Maps

PingCastle generates interactive HTML maps visualizing trust relationships between domains. These maps use color coding to display healthcheck scores and SID Filtering status.

## Full Domain Map

**File**: `xxx_full_node_map.html`

The full domain map displays all trust relationships between discovered domains. With this dynamic, interactive map, you can:
- Drag and reposition nodes for better visualization
- View domain names by hovering over nodes
- See trust details in a popup by hovering over trust connections
- Identify scanned domains (colored by score) versus discovered domains (purple border)

## Simplified Domain Map

**File**: `xxx_simple_node_map.html`

The simplified map presents a cleaner, hierarchical view where each domain appears only once, connected by a single trust relationship. PingCastle automatically places the domain with the most trusts at the center, though you can specify this manually if needed.

## Hilbert Map

**File**: `xxx_hilbert_map.html`

The Hilbert map provides a visual representation of network IP address space using fractal functions to compress IP addresses into a 2D visualization. Each square represents a network, so you can identify unused address space or overlapping networks.

**Report Layout**:
- **Network Overview**: High-level view of all networks
- **Zoom View**: Detailed view of a selected network
- **Network List**: Complete list of discovered networks
- **Domain Controller List**: All identified domain controllers

**Interactive Features**:
- Filter by source to avoid overlapping visualizations
- Hover over IP addresses to see network details
- Search function to locate specific IP addresses
