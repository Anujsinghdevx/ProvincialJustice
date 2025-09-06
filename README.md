# ⚖️ Provincial Justice

Provincial Justice is a **web application** designed to provide users with easy access to **Indian laws**.  
It offers a powerful search system, enabling users to explore criminal laws and their respective provinces quickly and efficiently.  

---

## ✨ Features

- 🔍 **Search Functionality:** Find laws instantly using keywords.  
- 📑 **Organized Categories:** Access criminal laws with province-specific details.  
- 📱 **Responsive Design:** Optimized for both desktop and mobile.  
- 🧭 **User-Friendly Interface:** Clean, minimal, and easy to navigate.  

---

## 🛠️ Tech Stack

**Frontend**  
- Next.js (latest version)  
- TypeScript  
- Tailwind CSS  

**Backend**  
- Node.js  

**Database**  
- MongoDB (Atlas + Compass for management)  

---

## 🚀 Getting Started

### 1. Clone the repository:
```bash
git clone https://github.com/Anujsinghdevx/ProvincialJustice
```

### 2. Navigate to the project directory:
```bash
cd provincial-justice
```

### 3. Install dependencies:
```bash
npm install
```

### 4. Configure MongoDB:
- Set up a MongoDB Atlas cluster.  
- Create a database named **data**.  
- Add your collection named **laws**.  
- Store your connection string in `.env`.  

### 5. Run the development server:
```bash
npm run dev
```

### 6. Open in your browser:
```
http://localhost:3000
```

---

## 📂 Folder Structure

```
provincial-justice/
├── public/               # Static assets
├── src/                  
│   ├── app/              # Application pages
│   │   ├── about/        # About page
│   │   ├── api/          # API routes
│   │   ├── contact/      # Contact page
│   │   ├── privacy/      # Privacy policy page
│   │   ├── support/      # Support page
│   │   ├── globals.css   # Global styles
│   │   ├── layout.tsx    # Layout component
│   │   └── page.tsx      # Main page
│   ├── components/       # Reusable UI components
│   │   ├── Footer.tsx    
│   │   └── Navbar.tsx    
│   └── lib/              
│       └── dbConnect.ts  # MongoDB connection utility
├── .env                  # Environment variables
├── package.json          # Dependencies and scripts
├── next.config.ts        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

---

## 🔮 Future Enhancements

- 🔑 User authentication for personalized experiences.  
- 📚 Expand coverage beyond criminal laws to civil & constitutional laws.  
- 🗂️ Province/category filters for advanced search.  
- 📊 Analytics dashboard to track user interactions.  

---

## 🤝 Contributing

Contributions are welcome!  

1. Fork the repo  
2. Create a new branch:  
   ```bash
   git checkout -b feature-name
   ```  
3. Commit your changes:  
   ```bash
   git commit -m "Add feature-name"
   ```  
4. Push to your branch:  
   ```bash
   git push origin feature-name
   ```  
5. Open a pull request 🚀  

---

## 📬 Contact

- **GitHub:** [Anuj-0-3](https://github.com/anujsinghdevx)  
- **Portfolio:** [anuj-delta.vercel.app](https://anuj-delta.vercel.app)  

---
⭐ If you found this project useful, don’t forget to **star** the repo!
