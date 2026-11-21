export default function Navbar() {
// Shared navigation links for the app's pages.
return (
<header className="navbar">
<a className="brand" href="/">
Student Manager
</a>
<nav aria-label="Main navigation">
<a href="/">Home</a>
<a href="/students">Students</a>
<a className="nav-button" href="/add-student">
Add student
</a>
</nav>
</header>
);
}