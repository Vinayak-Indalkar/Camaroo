# Quickstart Guide

## Purpose
Devi Fisheries ERP is a standalone browser-based fisheries processing and export ERP demonstration.

## Run locally

```powershell
# Static server (recommended)
python -m http.server 8080

# Or use the Node server
npm start
```

Open `http://localhost:8080` (or the port shown by the selected server). The application can also be opened through VS Code Live Server.

## First steps

1. Sign in with one of the demo personas on the login screen.
2. Use the left navigation to select a module and page.
3. Use `Ctrl+K` for global search, the `+` menu for quick creation, and breadcrumbs to move up the hierarchy.
4. Begin QC exploration at `#/quality/dashboard/overview`.

## Main modules

- Dashboard and executive analytics
- Purchase and raw-material operations
- Pre-processing
- Quality control and HACCP
- Production and freezing
- Coldstore
- Inventory and consumables
- Sales and exports
- Reports and configuration

## Development commands

```powershell
npm run build   # regenerate standalone.html
npm start       # serve through server.js
```

Demo data is client-side. QC changes are stored in browser localStorage under `dfl_qc_demo_v1` and are not shared between users or devices.

## Related documentation

- [Audit Report](AUDIT_REPORT.md)
- [Completion Report](COMPLETION_REPORT.md)
- [Documentation Index](DOCUMENTATION_INDEX.md)
