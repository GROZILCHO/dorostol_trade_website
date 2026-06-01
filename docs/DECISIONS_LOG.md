# Decisions Log

| ID | Date | Status | Decision | Rationale |
| --- | --- | --- | --- | --- |
| DEC-001 | - | Accepted | GitHub repository root is the project source of truth. | Provides one controlled location for frontend, unresolved backend, and project documentation. |
| DEC-002 | - | Accepted | Treat the current project as a frontend-focused React/Vite corporate website prototype. | Prevents the generated Flask prototype from defining architecture prematurely. |
| DEC-003 | 2026-06-01 | Accepted | Set the existing Flask/Python backend status to archived legacy/reference code. It must not be extended, deployed, or connected to frontend features. Backend strategy remains open for future decision if forms, CRM, catalog, admin, API, or automation requirements justify backend work. | Keeps the current work frontend-focused, avoids architecture confusion while backend requirements are unresolved, and preserves possible future reference value. |
| DEC-004 | - | Accepted | Treat `docs/design-reference/` screenshots as references only. | Runtime asset use and design-system rules require explicit approval. |
| DEC-005 | - | Accepted | Block implementation until minimum documentation is reviewed. | Business, content, SEO, design, and architecture inputs remain unresolved. |
