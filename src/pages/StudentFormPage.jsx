import StudentForm from '../components/StudentForm';
export default function StudentFormPage({ student, onSave }) {
// An existing student means edit mode; no student means add mode.
const isEditing = Boolean(student);
return (
<main className="page form-page">
<p className="eyebrow">STUDENT DETAILS</p>
<h1>{isEditing ? 'Edit student' : 'Add a student'}</h1>
<p className="intro">Fill in the details below.</p>
<StudentForm student={student} onSave={onSave} />
</main>
);
}