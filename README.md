# 🧩 **Browser Extensions Manager & Credit Card Form**

A sleek React + Next.js application for managing browser extensions and simulating credit card form submission with a modern UI.

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-13%2B-blue?logo=next.js" />
  <img src="https://img.shields.io/badge/React-18-lightblue?logo=react" />
  <img src="https://img.shields.io/badge/Responsive-Design-success" />
</p>

---

## 📄 **Overview**

This project includes three main components:

- 🔹 **Browser Extensions Manager** – View, filter, and theme-switch browser extensions  
- 🔹 **Credit Card Form** – Collect and validate card information in real time  
- 🔹 **Credit Card Completion** – Confirmation screen after form submission

Built using **Next.js**, **React**, and modern responsive practices.

---

## 🧱 **Project Structure**

<pre>
src/
├── components/
│   ├── logo/                  # Reusable Logo component
│   └── card-preview/          # Credit card visual component
├── app/
│   ├── extensions/            # Browser Extensions Manager page
│   ├── credit-form/           # Credit Card Form page
│   └── credit-complete/       # Confirmation page
├── assets/
│   └── images/                # Logos and card images
└── data/
    └── data.json              # Browser extension data
</pre>

🔌 1. Browser Extensions Manager

📄 page.jsx

A modern UI to view and filter browser extensions with theme support.

<pre>
🌟 Key Features
  
	•	🌗 Light/dark theme toggle with localStorage persistence
	•	🔍 Filter by status: All, Active, or Inactive
	•	🧩 Responsive grid layout
	•	📦 Data from data.json

🛠️ Implementation
  
	•	URL-driven filter via useSearchParams
	•	Theme toggled using document.documentElement.classList
	•	Reusable components (e.g., Logo)
</pre>

💳 2. Credit Card Form

📄 page.jsx

A real-time validated form for collecting card details.

<pre>
🌟 Key Features
  
	•	💳 Live card preview that updates as user types
	•	✅ Form validation includes:
	•	Required Cardholder Name
	•	16-digit card number with auto-formatting
	•	Valid MM/YY
	•	3-digit CVC
	•	💾 Form state saved in localStorage
	•	➡️ Redirect to completion page on submit

🛠️ Implementation
  
	•	Controlled inputs using useState
	•	Real-time error validation and formatting
	•	Fully responsive layout with images
</pre>
⸻

✅ 3. Credit Card Completion

📄 page.jsx

A success page confirming form submission.

<pre>
🌟 Key Features
  
	•	🎉 Success message and submitted data preview
	•	🔁 Shared card preview component
	•	⛔ “Continue” button (placeholder)

🛠️ Implementation
  
	•	Retrieves data from localStorage
	•	Clean, centered confirmation UI
</pre>
⸻

🗃️ data.json Sample

Example structure for extension data:

<pre>

  [
  {
    "name": "AdBlock Plus",
    "logo": "/images/adblock.svg",
    "description": "Block annoying ads",
    "status": "active"
  },
  ...
]
</pre>

⚙️ Shared Features

<pre>
 Feature                      Description
🧠 State Management           React useState, useEffect
🖼 Optimized Images           Uses next/image
🌍 Routing                    Next.js useRouter, useSearchParams
🧩 Component Design           Modular, reusable React components
📱 Responsive Design          Fully responsive for mobile and desktop
</pre>

 🚀 Getting Started

📦 Install dependencies

npm install
npm run dev
Then open: http://localhost:3000

<pre>
📦 Dependencies
	•	Next.js
	•	React
	•	next/navigation
	•	next/image
</pre>
Note: Ensure image files are located in assets/images/, and path aliases like @/components/logo are properly set in your jsconfig.json or tsconfig.json.



🤝 Contributing

Contributions are welcome!
Fork the repo and submit a PR with improvements or fixes.

⸻

📬 Contact

For questions or suggestions:
📧 ibikunleogunbanwo@gmail.com









