import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/files/data')
      .then(res => res.json())
      .then(data => {
        console.log(data); // Revisa la estructura de los datos aquí
        setData(data);
      })
      .catch(console.error);
  }, []);
  

  return (
    <div className="container mt-5">
      <h1>Archivos Procesados</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Archivo</th>
            <th>Texto</th>
            <th>Número</th>
            <th>Hex</th>
          </tr>
        </thead>
        <tbody>
          {data.map((file, fileIdx) => 
            file.lines.map((line, lineIdx) => (
              <tr key={`${fileIdx}-${lineIdx}`}>
                <td>{file.file}</td>
                <td>{line.text}</td>
                <td>{line.number}</td>
                <td>{line.hex}</td>
              </tr>
            ))
          )}
        </tbody>

      </Table>
    </div>
  );
}

export default App;
