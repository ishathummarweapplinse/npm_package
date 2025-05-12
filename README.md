# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Getting Started


## 📦 Installation

Install via npm or yarn:

```bash
npm install my-date-package
# or
yarn add my-date-package
```

---

## 🚀 Getting Started

Import and use the `formatDate` function in your project:

```js
import { formatDate } from 'my-date-package';

// Today’s date in full format
formatDate(new Date(), 'LLLL');
// ➤ "Monday, May 12, 2025 10:40 AM"

// Custom format: D-MM-YYYY
formatDate('2025-05-09', 'D-MM-YYYY');
// ➤ "9-05-2025"

// ISO timestamp to readable format
formatDate("2025-04-30T11:31:10.096Z", 'LLLL');
// ➤ "Wednesday, April 30, 2025 5:01 PM"

// Full timestamp
formatDate('2025-05-09', 'D MM YYYY HH:mm:ss');
// ➤ "9 05 2025 05:30:00"
```

---

## 🧩 Supported Format Tokens

| Token | Description              | Example  |
|-------|--------------------------|----------|
| YYYY  | 4-digit year             | 2025     |
| YY    | 2-digit year             | 25       |
| MMMM  | Full month name          | May      |
| MMM   | Short month name         | May      |
| MM    | Month with leading zero  | 05       |
| M     | Month (1 or 2 digits)    | 5        |
| DD    | Day with leading zero    | 09       |
| D     | Day (1 or 2 digits)      | 9        |
| dddd  | Full weekday name        | Monday   |
| ddd   | Short weekday name       | Mon      |
| HH    | Hours (00–23)            | 17       |
| H     | Hours (0–23)             | 5        |
| hh    | Hours (01–12)            | 05       |
| h     | Hours (1–12)             | 5        |
| mm    | Minutes (2 digits)       | 07       |
| ss    | Seconds (2 digits)       | 03       |
| A     | AM/PM                    | AM       |
| a     | am/pm                    | am       |
| Z     | Timezone offset (+05:30) | +05:30   |
| ZZ    | Timezone offset (+0530)  | +0530    |

---

## 🔁 Predefined Format Aliases

| Alias  | Format                         |
|--------|--------------------------------|
| LT     | h:mm A                         |
| LTS    | h:mm:ss A                      |
| L      | MM/DD/YYYY                     |
| LL     | MMMM D, YYYY                   |
| LLL    | MMMM D, YYYY h:mm A            |
| LLLL   | dddd, MMMM D, YYYY h:mm A      |
| l      | M/D/YYYY                       |
| ll     | MMM D, YYYY                    |
| lll    | MMM D, YYYY h:mm A             |
| llll   | ddd, MMM D, YYYY h:mm A        |

---

## 🔧 Example in React Component

```jsx
import React from 'react';
import { formatDate } from 'my-date-package';

const DateOutput = () => {
  return (
    <div>
      <p><strong>Today:</strong> {formatDate(new Date(), 'LLLL')}</p>
      <p><strong>Selected Date:</strong> {formatDate('2025-05-09', 'D-MM-YYYY')}</p>
      <p><strong>Formatted Timestamp:</strong> {formatDate("2025-04-30T11:31:10.096Z", 'LLLL')}</p>
      <p><strong>Full Timestamp:</strong> {formatDate('2025-05-09', 'D MM YYYY HH:mm:ss')}</p>
    </div>
  );
};

export default DateOutput;


# 👤 Author

- **Name:** Isha Thummar  


# 🪪 License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.

