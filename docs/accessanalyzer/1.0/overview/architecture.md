---
title: "Architecture Overview"
description: "Core components and how they work together"
sidebar_position: 20
---

# Architecture Overview

Access Analyzer runs as a set of containerized services on a single-node Kubernetes cluster (K3s), managed by ArgoCD for automated deployment and updates.

## Component Architecture

| Component | Technology | Purpose |
| --- | --- | --- |
| **Core API** | Ruby on Rails 8 | Business logic, REST API, session management |
| **Web Application** | React 18, TypeScript | User interface and dashboards |
| **Connector API** | Go | Manages connector execution as Kubernetes Jobs |
| **PostgreSQL** | v14.18 | Primary relational database for configuration and scan metadata |
| **ClickHouse** | v25.8.13 | Analytics database for scan results, logs, and traces |
| **Redis** | v8.4.0 | Session storage, job queues, and caching |
| **Metabase** | Embedded (airgap) | Dashboard and reporting engine |
| **Traefik** | Ingress controller | TLS termination and request routing |
| **ArgoCD** | v3.2.0 | GitOps-based application lifecycle management |
| **K3s** | v1.33.4 | Lightweight Kubernetes distribution |
| **OpenTelemetry** | Collector | Observability data pipeline (traces and logs) |
| **Prometheus** | v3.8.0 | Metrics collection and alerting |

## Communication Flow

Access Analyzer operates in three phases:

### Phase 1 — Installation

The installer deploys K3s and ArgoCD on the target VM. ArgoCD connects to the Netwrix OCI registry to pull application Helm charts.

### Phase 2 — Application Sync

ArgoCD deploys applications in ordered sync waves:

| Wave | Components |
| --- | --- |
| **Wave -5** | Secrets initialization (auto-generated database passwords, API keys) |
| **Wave 1** | Infrastructure: PostgreSQL, ClickHouse, Redis, OpenTelemetry, Prometheus, Traefik |
| **Wave 2** | Core services: Core API, Web Application, Connector API, Metabase |
| **Wave 3** | Functions and database seeds |

### Phase 3 — Ongoing Operations

- **Traefik** routes incoming requests: `/api/` → Core API, `/metabase` → Metabase, `/` → Web Application
- **Core API** processes user requests and schedules scan jobs via Sidekiq (Redis-backed job queues)
- **Connector API** executes connectors as Kubernetes Jobs to scan data sources
- **Metabase** provides embedded dashboards with JWT-based single sign-on from Core API
- **ArgoCD** continuously monitors the OCI registry for updates and applies changes automatically

## Namespace Layout

| Namespace | Contents |
| --- | --- |
| `access-analyzer` | All application workloads (Core API, databases, connectors, Metabase, observability) |
| `argocd` | ArgoCD server, application controller, and repo server |
| `kube-system` | Traefik ingress controller, K3s system components |

## Data Stores

| Database | Data Stored |
| --- | --- |
| **PostgreSQL** | Users, sources, scans, service accounts, connector state, configuration |
| **ClickHouse** | Scan results, analytics, OpenTelemetry traces and logs |
| **Redis** | User sessions, Sidekiq job queues, application cache |
