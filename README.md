# Student Management System

A beginner-friendly React + Vite project for adding, viewing, editing, and deleting student records.

## Requirements
- Node.js 20.19+ (or 22.12+)
- npm

## Run on Windows PowerShell

Open PowerShell in this project folder and run:

```powershell
npm.cmd install
npm.cmd run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`).

If PowerShell blocks `npm.ps1`, use `npm.cmd` as shown above. This avoids changing the PowerShell execution policy.

## Other commands

```powershell
npm.cmd run build
npm.cmd run preview
```

## Features
- Dashboard with registered-student count
- Add student (name, email, course, year)
- View student records
- Edit and delete records
- Browser `localStorage` persistence

## Important limitation
This is a learning project. Records are stored only in the current browser on the current device. It has no database, login, multi-user sync, or server-side backup. Clearing browser storage can delete the records.
