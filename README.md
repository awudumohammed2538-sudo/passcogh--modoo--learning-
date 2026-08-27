# PASSCOGH-MODOO COMPLETE MASTER

This is the clean replacement build.

## Structure
- public/index.html — touch-first frontend
- server.js — Express backend/API
- data/curriculum.json — curriculum architecture and learning layer
- data/institutions.json — tertiary guidance data
- scripts/sync-nacca.js — conservative NaCCA source metadata refresh
- package.json — Render-ready Node configuration

## Render
Build command:
npm install && npm run sync

Start command:
npm start

## Important
Official NaCCA documents remain authoritative. Do not represent generated/expanded learning content as an official NaCCA transcription unless it has been verified against the relevant document.

GTEC accreditation and programme status can change. Always verify before application.

Payment provider keys must be added as server environment variables and must never be placed in public/index.html.
