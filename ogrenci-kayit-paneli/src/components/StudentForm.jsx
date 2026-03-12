import React, { useState } from 'react';

const StudentForm = ({ onAddStudent }) => {
  const [formData, setFormData] = useState({ name: '', surname: '', age: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.surname && formData.age) {
      onAddStudent(formData); 
      setFormData({ name: '', surname: '', age: '' }); // Formu temizle
    }
  };

  return (
    <div className="card p-4 shadow-sm">
      <h4 className="mb-3">Yeni Öğrenci Kaydı</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input name="name" value={formData.name} onChange={handleChange} 
            className="form-control" placeholder="Öğrencinin Adı" required />
        </div>
        <div className="mb-3">
          <input name="surname" value={formData.surname} onChange={handleChange} 
            className="form-control" placeholder="Öğrencinin Soyadı" required />
        </div>
        <div className="mb-3">
          <input name="age" type="number" value={formData.age} onChange={handleChange} 
            className="form-control" placeholder="Yaş" required />
        </div>
        <button type="submit" className="btn btn-success w-100">Listeye Ekle</button>
      </form>
    </div>
  );
};

export default StudentForm;