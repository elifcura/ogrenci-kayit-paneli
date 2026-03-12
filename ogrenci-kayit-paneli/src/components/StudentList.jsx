
import React from 'react';

const StudentList = ({ students, onDeleteStudent }) => {
  return (
    <div className="card p-4 shadow-sm">
      <h4 className="mb-3">Öğrenci Listesi</h4>
      {students.length === 0 ? (
        <div className="alert alert-info">Henüz kayıtlı bir öğrenci bulunmuyor.</div>
      ) : (
        <ul className="list-group">
          {students.map((student) => (
            <li key={student.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <strong>{student.name} {student.surname}</strong>
                <div className="text-muted small">{student.age} Yaş</div>
              </div>
              {/* Sil Butonu */}
              <button 
                onClick={() => onDeleteStudent(student.id)} 
                className="btn btn-outline-danger btn-sm"
              >
                Sil
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StudentList;