import { useState, useEffect } from "react";
import supabase from "../utils/init_supabase";
import { getAllHomeWorkOf } from "../utils/utils";

export default function TableAllHomeWorks() {
  const [listHomework, setListHomework] = useState([]);
  const [isLoadingList, setIsLoadingList] = useState(true);
  const [selectedStudent, setSelectedStudent] = useState({});
  useEffect(() => {
    supabase
      .from("students")
      .select("Cedula,Nombres,Apellidos")
      .order("Nombres")
      .then(({ data: students }) => {
        let data = students.map((student) => {
          let homeworks = getAllHomeWorkOf(student.Nombres, student.Apellidos);
          return {
            ...student,
            homeworks,
          };
        });
        setIsLoadingList(false);
        setListHomework(data);
      });
  }, []);

  return (
    <div className="container-all-works">
      <select
        className="dropdown"
        onChange={(event) => {
          const selectedCedula = event.target.value;
          const student = listHomework.find(
            (student) => student.Cedula === Number(selectedCedula)
          );
          setSelectedStudent(student);
        }}
      >
        <option value="hola">Selecciona un estudiante</option>
        {isLoadingList ? (
          <option>loading ...</option>
        ) : (
          listHomework.map((student, index) => (
            <option key={index} value={student.Cedula}>
              {student.Nombres} {student.Apellidos}
            </option>
          ))
        )}
      </select>
      <div className="table-container">
        {isLoadingList ? (
          <h1>...loading</h1>
        ) : JSON.stringify(selectedStudent) !== JSON.stringify({}) ? (
          <>
            <h1>Name and Last Name</h1>
            <div key={selectedStudent.Cedula}>
              <h3>
                {selectedStudent.Nombres} {selectedStudent.Apellidos}
              </h3>
              {selectedStudent.homeworks.map((work) => {
              return (
                <div key={work.id}>
                  <h3>{work.name}</h3>
                  {work.publicURL && (
                    <iframe
                      src={work.publicURL}
                      title={work.name}
                      className="homework-iframe"
                      width="auto"
                      height="500px"
                      ></iframe>
                  )}
                  </div>
                  );
                })}
            </div>
          </>
        ) : (
          <h3>Seleccion un estudiante</h3>
        )}
      </div>
    </div>
  );
}
