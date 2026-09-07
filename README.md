# ⚡ NIGHT_CITY // ATTENDANCE_CHECKER_V2.077

A high-octane, **Cyberpunk: Edgerunners** themed college attendance web application featuring real-time 3D grid/particle animations using **Three.js** and a serverless **Google Sheets** database backend via **Google Apps Script**.

---

## 🔥 Features

- **Cyberpunk UI/UX:** High-contrast Edgerunners visual aesthetic (`#fcee0a`, `#00f0ff`, `#ff003c`), glitch typography, and sci-fi angular layout.
- **3D Background Visuals:** Interactive Three.js wireframe floor and floating particle animation.
- **Serverless Database:** Real-time data logging directly into Google Sheets (No server maintenance required).
- **Mobile First:** Optimized layout and responsive components tailored for smartphone screens.

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **3D Graphics:** [Three.js](https://threejs.org/)
- **Backend / Database:** Google Apps Script + Google Sheets API

---

## 🚀 Quick Setup

1. **Google Sheets Setup:**
   - Create a Google Sheet with headers: `Timestamp`, `Student ID`, `Full Name`, `Department`, `Status`.
   - Go to **Extensions > Apps Script** and paste the backend script.
   - Deploy as a **Web App** (Access: *Anyone*). Copy the Web App URL.

2. **Frontend Configuration:**
   - Open `script.js`.
   - Update `SCRIPT_URL` with your Google Apps Script Web App URL:
     ```javascript
     const SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
     ```

3. **Run Application:**
   - Open `index.html` in any web browser or deploy directly using **GitHub Pages**.

---

## 📂 Project Structure

```text
├── index.html   # Main HTML structure & Three.js canvas
├── style.css    # Cyberpunk styling, animations & responsiveness
└── script.js    # Three.js 3D animation loop & Google Sheets POST integration
```

---

## 📄 License

Distributed under the MIT License. Feel free to modify and adapt for your own projects!
