# Documentation Index

This index is the entry point for the UI audit and CSS optimization documentation.

## Start here

| Document | Use it for |
|---|---|
| [Quickstart Guide](QUICKSTART_GUIDE.md) | Running the ERP locally, navigation shortcuts, and common commands |
| [Completion Report](COMPLETION_REPORT.md) | Session scope, completed work, validation status, and limitations |
| [Audit Report](AUDIT_REPORT.md) | Findings, dispositions, accessibility notes, and recommended follow-up |

## Project references

- [Project README](README.md) — product overview, modules, deployment links, and runtime guidance
- [UI design rules](AGENTS.md) — color, typography, tables, forms, navigation, and CRUD conventions
- `css/app.css` — canonical shared stylesheet and optimization summary
- `index.html` — source application entry point
- `standalone.html` — generated standalone artifact
- `js/` — application modules, components, views, and demo data

## Suggested reading paths

- **New developer:** Quickstart → README → UI design rules
- **Reviewer:** Audit Report → Completion Report → `css/app.css`
- **Release check:** Completion Report → Quickstart validation commands → browser smoke test

## Document maintenance

Update the Completion Report and Audit Report when a future UI optimization changes the documented scope or validation status. Keep this index limited to stable navigation links.
