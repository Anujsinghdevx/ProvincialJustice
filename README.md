# Provincial Justice

Provincial Justice is a web application designed to provide users with easy access to Indian laws. It features search option, allowing users to explore criminal laws and their respective provinces efficiently.

## Features

- **Search Functionality:** Quickly find laws by keywords.
- **User-Friendly Interface:** Clean and intuitive design for effortless navigation.

## Technologies Used

- **Frontend:**
  - Next.js (latest version)
  - Typescript
  - Tailwind CSS

- **Backend:**
  - Node.js

- **Database:**
  - MongoDB (using MongoDB Compass for database management)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Anuj-0-3/ProvincialJustice
   ```

2. Navigate to the project directory:
   ```bash
   cd provincial-justice
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up MongoDB Atlas:
   - Ensure MongoDB Atlas connection.
   - Create a database named `data`.
   - Insert data into a collection named `laws`.

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Folder Structure

```
provincial-justice/
├── .next/                # Build output (auto-generated)
├── node_modules/         # Dependencies (auto-generated)
├── public/               # Static assets
├── src/                  # Source code
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
│   │   ├── Footer.tsx    # Footer component
│   │   └── Navbar.tsx    # Navbar component
│   └── lib/              # Utility functions
│       └── dbConnect.ts  # MongoDB connection utility
├── .env                  # Environment variables
├── .gitignore            # Git ignore rules
├── eslint.config.mjs     # ESLint configuration
├── next-env.d.ts         # Next.js environment types
├── next.config.ts        # Next.js configuration
├── package-lock.json     # Dependency lockfile
├── package.json          # Project dependencies and scripts
├── postcss.config.js     # PostCSS configuration
├── README.md             # Project documentation
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```


```

## Future Enhancements

- Add user authentication for personalized experiences.
- Include additional legal categories beyond criminal laws.
- Integrate advanced analytics to track user interactions.
- Responsive Design: Fully optimized for both desktop and mobile devices.
-Filter Options: Narrow down results based on specific provinces or categories.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature/bug fix:
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
5. Open a pull request.

## Contact

For questions or feedback, please contact:

- **GitHub:** https://github.com/Anuj-0-3

