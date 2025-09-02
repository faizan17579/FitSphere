

# 👔 Wardrobe Controller App

A modern, feature-rich wardrobe management and outfit simulation application built with **Next.js (App Router)**, **Node.js**, and **MongoDB**. Organize your wardrobe, generate outfit combinations, simulate looks in 2D/3D, and collaborate with friends to share and compare styles.

---

## ✨ Features

### 👗 Wardrobe Management
- Add, edit, and delete clothing items by category (e.g., shirts, pants, shoes, accessories)
- Store metadata: color, size, material, brand, and custom tags
- Upload images for each clothing item
- Advanced search and filter functionality (by category, color, tags, etc.)

### 🔐 Authentication
- Secure user registration and login
- JWT-based sessions or Auth0 integration
- User profiles with avatars and customizable details

### 🎨 Outfit Simulation
- AI-driven outfit suggestions based on wardrobe items
- 2D/3D visual previews using Three.js or Ready Player Me API
- Save and organize favorite outfit combinations

### 👥 Friends & Sharing
- Send and accept friend requests
- Compare wardrobes with friends
- Share outfit ideas and suggestions

### 🧠 AI Recommendations
- Generate outfit ideas tailored to specific occasions (e.g., "Job interview," "Casual party")
- Personalized style recommendations based on user preferences

---

## 🛠 Tech Stack

- **Frontend**: Next.js (App Router) with TypeScript
- **Backend**: Node.js with Express-style API routes
- **Database**: MongoDB (via Mongoose or Prisma)
- **3D Rendering**: Three.js or Ready Player Me API
- **Authentication**: Auth0 or JWT-based authentication
- **Styling**: Tailwind CSS for responsive, modern UI
- **Deployment**: Vercel (recommended) or custom server

---

## 📂 Project Structure

```plaintext
/src
├── /app                    # Next.js frontend pages
│   ├── /auth               # Authentication pages
│   │   ├── login/page.tsx
│   │   ├── register/page.tsx
│   │   └── layout.tsx
│   ├── /dashboard/page.tsx # User dashboard
│   ├── /wardrobe/page.tsx  # Wardrobe management
│   ├── /simulation/page.tsx # Outfit simulation
│   ├── /friends/page.tsx   # Friends and sharing
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Landing page
│
├── /api                    # API routes (backend)
│   ├── /auth               # Authentication endpoints
│   │   ├── login.ts
│   │   ├── register.ts
│   │   └── logout.ts
│   ├── wardrobe.ts         # Wardrobe CRUD operations
│   ├── friends.ts          # Friends and sharing endpoints
│   └── outfits.ts          # Outfit generation and simulation
│
├── /components             # Reusable React components
├── /lib                    # Database connection, utilities
├── /models                 # MongoDB schemas (Mongoose/Prisma)
└── /styles                 # Global styles (Tailwind CSS)
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or cloud instance, e.g., MongoDB Atlas)
- npm or yarn

### Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/wardrobe-app.git
   cd wardrobe-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env.local` file in the root directory and add:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   AUTH0_DOMAIN=your_auth0_domain
   AUTH0_CLIENT_ID=your_auth0_client_id
   AUTH0_CLIENT_SECRET=your_auth0_client_secret
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```
   The app will be available at: [http://localhost:3000](http://localhost:3000)

---

## ✅ Roadmap

- [ ] User authentication (login, registration, profile management)
- [ ] Wardrobe item CRUD operations
- [ ] Outfit simulation engine (2D/3D rendering)
- [ ] Friends system and wardrobe comparison
- [ ] AI-driven outfit recommendations
- [ ] Integration with Ready Player Me for 3D avatars
- [ ] Mobile responsiveness and PWA support

---

## 🤝 Contributing

Contributions are welcome! To contribute:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m "Add your feature"`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

For major changes, please open an issue first to discuss your ideas.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE) © 2025.

