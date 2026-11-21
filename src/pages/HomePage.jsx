export default function HomePage({ studentCount }) {
// studentCount arrives from App as a prop and keeps the summary up to date.
return (
<main className="page">
<section className="welcome-card">
<p className="eyebrow">STUDENT MANAGEMENT</p>
<h1>Keep your student records in one place.</h1>
<p className="intro">
Add, view, update, and remove student details with this simple app.
</p>
<div className="home-actions">
<a className="button" href="/students">
View students
</a>
<a className="button secondary-button" href="/add-student">
Add a student
</a>
</div>
</section>
<section className="summary-card">
<span className="summary-label">Students registered</span>
<strong>{studentCount}</strong>
</section>
</main>
);
}