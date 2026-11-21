
import { useState } from "react";
import Button from "./Button";

const emptyStudent = {
  name: "",
  email: "",
  course: "",
  year: "1st Year",
};

export default function StudentForm({ student, onSave }) {
  const [formData, setFormData] = useState(
    student || emptyStudent
  );

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const cleanedData = {
      ...formData,
      name: formData.name.trim(),
      email: formData.email.trim(),
      course: formData.course.trim(),
    };

    if (!cleanedData.name || !cleanedData.email || !cleanedData.course) {
      return;
    }

    onSave(cleanedData);
  }

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <label>
        Full name
        <input
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g. Asha Kumar"
          required
        />
      </label>

      <label>
        Email address
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="asha@example.com"
          required
        />
      </label>

      <label>
        Course
        <input
          name="course"
          type="text"
          value={formData.course}
          onChange={handleChange}
          placeholder="e.g. M.Sc Computer Science"
          required
        />
      </label>

      <label>
        Year
        <select
          name="year"
          value={formData.year}
          onChange={handleChange}
        >
          <option value="1st Year">1st Year</option>
          <option value="2nd Year">2nd Year</option>
          <option value="3rd Year">3rd Year</option>
        </select>
      </label>

      <div className="form-actions">
        <Button variant="secondary" href="/students">
          Cancel
        </Button>

        <Button type="submit">
          {student ? "Update Student" : "Save Student"}
        </Button>
      </div>
    </form>
  );
}
