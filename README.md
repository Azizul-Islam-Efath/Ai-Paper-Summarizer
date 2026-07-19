<div align="center">

# 📄 AI Paper Summarizer

### Transform Multiple Research Papers into Intelligent Summaries & Comprehensive Synthesized Reports

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MySQL](https://img.shields.io/badge/MySQL-Database-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed-Vercel-000000?style=for-the-badge&logo=vercel)](https://ai-paper-summarizer-ten.vercel.app/)

<p align="center">
An AI-powered research assistant that enables users to upload multiple research papers, generate concise summaries for each document, and automatically create a unified synthesized research paper from the combined knowledge.
</p>

<p align="center">
  <a href="https://ai-paper-summarizer-ten.vercel.app/"><strong>🌐 Live Demo</strong></a> •
  <a href="https://github.com/Azizul-Islam-Efath/Ai-Paper-Summarizer"><strong>📂 Repository</strong></a>
</p>

</div>

---

## 📖 Overview

**AI Paper Summarizer** is a full-stack web application developed to simplify academic literature review. Instead of manually reading dozens of research papers, users can upload multiple PDF documents, receive AI-generated summaries for each paper, and generate a comprehensive synthesized report highlighting the key findings, methodologies, and conclusions across all uploaded papers.

The application is designed for researchers, university students, educators, and professionals who need to efficiently analyze large volumes of academic literature.

---

## ✨ Key Features

- 📄 Upload **1–20 research papers** simultaneously
- 🤖 AI-powered document summarization
- 👀 View individual summaries for every uploaded paper
- 📝 Generate a comprehensive synthesized research paper
- 📚 Extract important concepts and insights
- ⚡ Fast and intuitive user experience
- 📱 Fully responsive interface
- 🎨 Clean and modern UI

---

## 🏗️ System Workflow

```text
Upload Research Papers
          │
          ▼
PDF Processing & Text Extraction
          │
          ▼
AI Analysis
          │
          ▼
Individual Paper Summaries
          │
          ▼
Combined Knowledge Synthesis
          │
          ▼
Generated Research Report
```

---

# 🛠️ Technology Stack

| Category | Technologies |
|----------|--------------|
| **Frontend** | React.js, JavaScript, HTML5, Tailwind CSS |
| **Backend** | Node.js, Express.js |
| **Database** | MySQL |
| **Authentication** | JWT |
| **AI Integration** | Large Language Model (LLM) API |
| **Deployment** | Vercel |

---

# 📂 Project Structure

```
AI-Paper-Summarizer
│
├── client/
│   ├── public/
│   ├── src/
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── services/
│   ├── uploads/
│   └── package.json
│
├── prisma/
│
├── README.md
│
└── package.json
```

---

# 🚀 Getting Started

## Prerequisites

Before running the project, ensure the following are installed:

- Node.js (v18 or above)
- npm
- MySQL
- Git

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/Azizul-Islam-Efath/Ai-Paper-Summarizer.git
```

```bash
cd Ai-Paper-Summarizer
```

---

### Install Backend Dependencies

```bash
cd server
npm install
```

---

### Install Frontend Dependencies

```bash
cd ../client
npm install
```

---

## Environment Variables

Create a `.env` file inside the backend directory.

```env
PORT=5000

DATABASE_URL=your_database_url

JWT_SECRET=your_jwt_secret

JWT_REFRESH_SECRET=your_refresh_secret

AI_API_KEY=your_ai_api_key
```

---

# ▶️ Running the Application

### Start Backend

```bash
cd server
npm run dev
```

### Start Frontend

```bash
cd client
npm start
```

The application will be available at

```
http://localhost:3000
```

---

# 📋 Application Workflow

1. Upload one or multiple research papers (PDF).
2. The server extracts text from each uploaded document.
3. AI processes the extracted content.
4. Individual summaries are generated.
5. Users can review each summary separately.
6. The AI synthesizes all summaries into a comprehensive research report.
7. The generated report can be viewed and utilized for further research.

---

# 🎯 Future Enhancements

- AI-powered Question & Answer with uploaded papers
- Citation generation (APA, IEEE, MLA)
- Research similarity detection
- Semantic search
- Export summaries to PDF & DOCX
- User dashboard
- Research history
- Team collaboration
- Cloud storage integration

---

# 📸 Screenshots

> Add screenshots after deployment.

```
screenshots/

├── Home.png
├── Upload.png
├── Summary.png
├── Report.png
└── Dashboard.png
```

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository.

2. Create a feature branch.

```bash
git checkout -b feature/new-feature
```

3. Commit your changes.

```bash
git commit -m "Add new feature"
```

4. Push to GitHub.

```bash
git push origin feature/new-feature
```

5. Open a Pull Request.

---

# 👨‍💻 Developer

**Azizul Islam Efath**

Computer Science & Engineering Student

GitHub:
https://github.com/Azizul-Islam-Efath

---

# 📜 License

This project is licensed under the **MIT License**.

---

<div align="center">

### ⭐ If you found this project useful, please consider giving it a Star.

It helps support future development and increases the project's visibility.

</div>
