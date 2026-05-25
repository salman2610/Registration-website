<div align="center">

<img src="https://i.postimg.cc/02SMH0MR/irw-m.png" alt="IRW Logo" width="180"/>

# IRW Member Registration

**A slick, mobile-first attendance kiosk — powered by Google Apps Script & Sheets.**

[![Made with Google Apps Script](https://img.shields.io/badge/Made%20with-Google%20Apps%20Script-4285F4?style=flat-square&logo=google&logoColor=white)](https://script.google.com)
[![HTML](https://img.shields.io/badge/Frontend-HTML%2FJS-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![Google Sheets](https://img.shields.io/badge/Backend-Google%20Sheets-34A853?style=flat-square&logo=google-sheets&logoColor=white)](https://sheets.google.com)

</div>

---

## What it does

Members walk up, type their ID, and they're registered. That's it.

Under the hood it looks them up in a Google Sheet, shows their details for confirmation, and marks their attendance with one tap. A live stats panel tracks the headcount — total, male, and female — in real time.

---

## Features

- 🔍 **Instant member lookup** — search by member ID, see name, gender, mobile, district & group
- ✅ **One-tap attendance** — marks the row in Google Sheets and resets for the next person
- 📊 **Live stats panel** — floating button reveals total / male / female counts
- 🎉 **Success popup** — confirms registration visually, then auto-clears after 2 seconds
- 📱 **Mobile-first** — large touch targets, works great on tablets and phones
- ⌨️ **Enter key support** — volunteers with a keyboard can fly through registrations

---

## How it works

```
Member types ID
      │
      ▼
 Google Apps Script (Code.js)
      │  looks up row in Google Sheet
      ▼
 Member details returned to frontend
      │
      ▼
 Volunteer confirms & taps REGISTER
      │
      ▼
 Apps Script marks attendance + updates counters
```

---

## Project structure

```
Registration-website/
├── Index.html          # Frontend UI (HTML + CSS + JS)
├── Code.js             # Backend (Google Apps Script)
├── appsscript.json     # Apps Script manifest
└── .clasp.json         # CLASP config for local development
```

---

## Setup

### 1. Copy the sheet

Create a Google Sheet with member data. Columns should include: **ID**, **Name**, **Gender**, **Mobile**, **District**, **Group**, and an **Attendance** column.

### 2. Deploy the script

1. Open [Google Apps Script](https://script.google.com) and create a new project
2. Paste in `Code.js` and `Index.html`
3. Update the Sheet ID in `Code.js` to point to your spreadsheet
4. Click **Deploy → New deployment → Web app**
5. Set access to *Anyone* (or *Anyone within your organisation*)
6. Copy the deployment URL — that's your registration kiosk link

### 3. (Optional) Develop locally with CLASP

```bash
npm install -g @google/clasp
clasp login
clasp clone <scriptId>   # from .clasp.json
# make changes, then:
clasp push
```

---

## Usage

1. Open the web app URL on any device
2. Type a member ID and hit **SEARCH MEMBER** (or press Enter)
3. Verify the details that appear
4. Tap **REGISTER ATTENDANCE** — done ✓
5. Tap **📊** in the top-left anytime to check the live headcount

---

## Tech stack

| Layer | Technology |
|---|---|
| Frontend | HTML, CSS, Vanilla JS |
| Backend | Google Apps Script |
| Database | Google Sheets |
| Hosting | Google Apps Script Web App |
| Deployment | CLASP (optional) |

---

<div align="center">

Built for IRW event operations · Contributions welcome

</div>
