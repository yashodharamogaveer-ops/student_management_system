import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import StudentsPage from './pages/StudentsPage';
import StudentFormPage from './pages/StudentFormPage';
import './App.css';

const STORAGE_KEY = 'student-management-students';

function readStudents() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return [];
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    // Recover safely if browser storage contains invalid JSON.
    return [];
  }
}

function App() {
  const [students, setStudents] = useState(readStudents);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
    } catch (error) {
      console.error('Could not save student records in browser storage:', error);
    }
  }, [students]);

  // This small project uses simple pathname-based navigation (no router dependency).
  const path = window.location.pathname;
  const editMatch = path.match(/^\/edit\/([^/]+)$/);
  const studentToEdit = editMatch
    ? students.find((student) => student.id === decodeURIComponent(editMatch[1]))
    : null;

  function addStudent(studentDetails) {
    const newStudent = {
      ...studentDetails,
      id: globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    };
    setStudents((current) => [...current, newStudent]);
    window.location.href = '/students';
  }

  function updateStudent(updatedStudent) {
    setStudents((current) =>
      current.map((student) =>
        student.id === updatedStudent.id ? updatedStudent : student,
      ),
    );
    window.location.href = '/students';
  }

  function deleteStudent(id) {
    if (window.confirm('Delete this student?')) {
      setStudents((current) => current.filter((student) => student.id !== id));
    }
  }

  let page;
  if (path === '/students') {
    page = <StudentsPage students={students} onDelete={deleteStudent} />;
  } else if (path === '/add-student') {
    page = <StudentFormPage onSave={addStudent} />;
  } else if (editMatch && studentToEdit) {
    page = <StudentFormPage key={studentToEdit.id} student={studentToEdit} onSave={updateStudent} />;
  } else if (editMatch) {
    page = (
      <main className="page">
        <section className="empty-state">
          Student not found. <a className="text-button" href="/students">Back to students</a>
        </section>
      </main>
    );
  } else {
    page = <HomePage studentCount={students.length} />;
  }

  return (
    <>
      <Navbar />
      {page}
    </>
  );
}

export default App;
