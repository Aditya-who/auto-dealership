# Auto Dealership Website

A full-stack web application for browsing and purchasing vehicles with authentication and 3D car viewer.

## 📋 Project Stack

- **Frontend**: Next.js, React
- **Backend**: Node.js, Express
- **Database**: Supabase (PostgreSQL)
- **Deployment**: Vercel (Frontend), Render/Railway (Backend)

---

## 🚀 Local Development Setup

### Prerequisites
- Node.js (v14+)
- Git

### 1. Clone Repository
```bash
git clone <repo-url>
cd auto-dealership
```

### 2. Backend Setup
```bash
cd backend
npm install
```
Create `.env`:
```
PORT=5000
DATABASE_URL=postgresql://user:password@db.supabase.co:5432/postgres
JWT_SECRET=your-secret-key
```
Start server:
```bash
npm start
```

### 3. Frontend Setup
```bash
cd frontend
npm install
```
Create `.env.local`:
```
NEXT_PUBLIC_API=http://localhost:5000/api
```
Start dev server:
```bash
npm run dev
```

---

## 🗄️ Database Setup (Supabase)

1. Create Supabase project: [supabase.com](https://supabase.com)
2. Go to SQL Editor → Run `database/schema.sql`
3. Copy `DATABASE_URL` from project settings → Database → URI
4. Add to backend `.env`

---

## 🌐 Final Deployment

### Backend (Render/Railway)
1. Push code to GitHub
2. Connect repo to Render/Railway
3. Set environment variables (`DATABASE_URL`, `JWT_SECRET`, `PORT`)
4. Deploy from `backend` directory
5. Copy production URL

### Frontend (Vercel)
1. Connect repo to Vercel
2. Set build settings: Framework = Next.js, Root = `frontend`
3. Add environment variable: `NEXT_PUBLIC_API=<backend-url>/api`
4. Deploy

---

## ✨ Features

- User authentication & authorization
- Car catalog with filtering
- 3D rotating car viewer
- REST API backend
- Responsive design
- Secure JWT-based auth