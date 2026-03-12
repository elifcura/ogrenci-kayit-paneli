import React, { useState } from 'react';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';

function App() {
  // Tüm öğrencilerin tutulduğu ana state
  const [students, setStudents] = useState([]);

  // YENİ ÖĞRENCİ EKLEME: StudentForm'dan gelen veriyi alır
  const addStudent = (newStudent) => {
    // Benzersiz bir ID oluşturmak için Date.now() kullanıyoruz
    const studentWithId = { ...newStudent, id: Date.now() };
    // Mevcut listeyi bozmadan yenisini ekleyerek state'i güncelliyoruz
    setStudents([...students, studentWithId]);
  };

  // ÖĞRENCİ SİLME: StudentList'ten gelen ID'ye göre listeyi filtreler
  const deleteStudent = (id) => {
    // Seçilen ID dışındaki tüm öğrencileri tutan yeni bir dizi oluşturur
    const filteredStudents = students.filter(student => student.id !== id);
    setStudents(filteredStudents);
  };

  return (
    <div className="container py-5">
      {/* Sayfa Başlığı */}
      <header className="text-center mb-5">
        <h1 className="display-4 fw-bold text-primary">Öğrenci Kayıt Paneli</h1>
        <p className="lead text-muted">
          Kayıtlı Toplam Öğrenci: <span className="badge bg-dark">{students.length}</span>
        </p>
      </header>
      
      <div className="row g-4">
        {/* Sol Sütun: Form Bileşeni */}
        <div className="col-lg-5">
          <StudentForm onAddStudent={addStudent} />
        </div>

        {/* Sağ Sütun: Liste Bileşeni */}
        <div className="col-lg-7">
          <StudentList 
            students={students} 
            onDeleteStudent={deleteStudent} 
          />
        </div>
      </div>
    </div>
  );
}

export default App; 













 