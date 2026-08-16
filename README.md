<div align="center">

# 📄 Paper Generator

### AI-Powered Multi-Paper Research Workspace & Academic Synthesis Engine

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MySQL](https://img.shields.io/badge/MySQL-Database-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![Google Gemini](https://img.shields.io/badge/Gemini_AI-3.6_Flash-8E75B2?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)
[![Vercel](https://img.shields.io/badge/Deployed-Vercel-000000?style=for-the-badge&logo=vercel)](https://ai-paper-summarizer-ten.vercel.app/)

<p align="center">
An intelligent research assistant that allows users to upload multiple academic papers, extract structured insights, generate detailed summaries, perform cross-paper comparison matrix & gap analysis, and generate comprehensive academic paper drafts.
</p>

<p align="center">
  <a href="https://ai-paper-summarizer-ten.vercel.app/"><strong>🌐 Live Website</strong></a> •
  <a href="https://github.com/Azizul-Islam-Efath/Ai-Paper-Summarizer"><strong>📂 GitHub Repository</strong></a>
</p>

</div>

---

## 📖 Overview

**Paper Generator** is a full-stack web application built to streamline academic literature reviews and research paper synthesis. Instead of manually spending hours reading dozens of lengthy PDFs, researchers can upload multiple PDF papers into dedicated project workspaces, receive AI-generated structured summaries, compare methodologies, uncover research gaps, and automatically draft synthesized academic papers formatted in IEEE, Springer, Elsevier, or APA styles.

---

## ✨ Key Features

- 📄 **Multi-PDF Upload & Processing**: Upload and process 1–20 research papers per project.
- 🤖 **Structured AI Summaries**: Extract abstract summaries, research problems, methodology, datasets, algorithms, results, limitations, and future work.
- 📊 **Cross-Paper Comparison Matrix**: Analyze similarities, method variations, and trade-offs across multiple papers.
- 🔍 **Research Gap Analysis**: Identify unsolved problems, dataset weaknesses, and potential research opportunities.
- 📝 **Full Paper Draft Generator**: Generate formatted research paper drafts in IEEE, Springer, Elsevier, or APA formats.
- 🔒 **Secure Authentication**: JWT-based authentication with secure cookie management and password reset via Gmail SMTP.
- 🎨 **Modern Glassmorphic Interface**: Dark mode, dynamic animations powered by Framer Motion, and fully responsive layouts.

---

## 🛠️ Technology Stack

| Component | Technologies |
|-----------|--------------|
| **Frontend** | React 19, Vite, Tailwind CSS, Framer Motion, Axios, React Hook Form, Lucide Icons |
| **Backend** | Node.js, Express.js, Prisma ORM, Multer, PDF-Parse, JWT |
| **Database** | Cloud MySQL (Aiven for MySQL) |
| **AI Engine** | Google Gemini 3.6 Flash |
| **Deployment** | Vercel (Frontend), Render (Backend), Aiven Cloud (MySQL) |

---

## 📂 Project Structure

```
research-paper-summarizer/
│
├── frontend/                       # React + Vite Client
│   ├── src/
│   │   ├── components/             # Reusable UI Components
│   │   ├── context/                # Auth & App State Context
│   │   ├── pages/                  # Landing, Login, Dashboard, Papers, Projects
│   │   └── services/               # Axios API Services
│   ├── vercel.json                 # Vercel SPA Routing Configuration
│   └── package.json
│
├── backend/                        # Node.js + Express API Server
│   ├── prisma/
│   │   └── schema.prisma           # Prisma MySQL Database Schema
│   ├── src/
│   │   ├── config/                 # Env Validation & Prisma Client
│   │   ├── controllers/            # Auth, Paper, Summary, Project Controllers
│   │   ├── middleware/             # Auth, Rate Limiter, Error Handling
│   │   ├── routes/                 # Express API Endpoints
│   │   └── services/               # Gemini AI & Email Services
│   └── package.json
│
├── render.yaml                     # Render Blueprint Deployment Configuration
└── README.md
```

---

## 🚀 Local Development Setup

### 1. Prerequisites
- Node.js (v18+)
- MySQL Database

### 2. Clone Repository
```bash
git clone https://github.com/Azizul-Islam-Efath/Ai-Paper-Summarizer.git
cd Ai-Paper-Summarizer
```

### 3. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder:
```env
PORT=5000
NODE_ENV=development
DATABASE_URL="mysql://USER:PASSWORD@localhost:3306/research_workspace"
JWT_SECRET="your_jwt_secret"
JWT_REFRESH_SECRET="your_refresh_secret"
JWT_EXPIRES_IN="15m"
JWT_REFRESH_EXPIRES_IN="7d"
GEMINI_API_KEY="your_gemini_api_key"
FRONTEND_URL="http://localhost:5173"
```

Initialize Database Schema:
```bash
npx prisma generate
npx prisma db push
```

Start Backend Server:
```bash
npm run dev
```

### 4. Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```

The frontend will run at `http://localhost:5173`.

---

## 👨‍💻 Developer & Copyright

**Developer**: Azizul Islam Efath  
**GitHub**: [https://github.com/Azizul-Islam-Efath](https://github.com/Azizul-Islam-Efath)

```
© 2026 Azizul Islam · All Rights Reserved
```
