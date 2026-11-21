import StudentTable from '../components/StudentTable';
export default function StudentsPage({ students, onDelete }) {
// Pass the student data and delete handler down to the table component.
return (
<main className="page">
<div className="page-heading">
<div>
<p className="eyebrow">RECORDS</p>
<h1>Students</h1>
<p className="intro">
There {students.length === 1 ? 'is' : 'are'} {students.length}{' '}
student{students.length === 1 ? '' : 's'}.
</p>
</div>
<a className="button" href="/add-student">
Add student
</a>
</div>
<StudentTable students={students} onDelete={onDelete} />
</main>
);
}