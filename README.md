# Catholic Youth Conference 2027 (CYC 2027) • Registration Web App

A clean, light-mode React web application built for the **Catholic Youth Conference 2027** (*"Rooted in Faith, United in Hope"*).

## ✨ Simplified Registration Form

The registration form contains **only the essential fields**:
- **Names**: First Name & Last Name
- **Contact**: Email address
- **Phone Number**: Mobile phone number
- **Age**: Attendee age
- **City**: City of residence
- **State**: US State dropdown selection (all 50 states + DC + PR)
- **⚡ 1-Click Auto-Fill Demo**: Instantly test the registration flow with realistic sample data.

## 🎟️ App Features

- **Live Holographic Pass Preview**:
  - Updates in real time with the attendee's first name, full name, age, city & state, contact, phone, and QR check-in code.
- **Registration Confirmation**:
  - Confetti celebration modal.
  - Generates unique Pass ID (e.g. `CYC-2027-7824`).
  - Add to Calendar (`.ics` download compatible with Apple Calendar, Google Calendar, Outlook).
  - Print / Save Pass view.
- **Conference Itinerary**:
  - 3-day schedule breakdown covering Daily Holy Mass, Eucharistic Adoration, Sacrament of Reconciliation, keynote workshops, and fellowship send-off.
- **FAQ Section**:
  - Practical answers regarding parish groups, Sacraments, and logistics.

## 🚀 Running the App

### Development Server
```bash
npm run dev
```
Open `http://localhost:3001/` (or `http://localhost:3000/`).

### Production Build
```bash
npm run build
npm run preview
```
