import React, { useEffect, useState } from 'react'
import NavBar from '../component/navBar';
import axiosService from '../services/axiosService';

export default function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    loadHistory();
  }, [])

  const loadHistory = async () => {
    const response = await axiosService.Compute.load();
    console.log({ response })
    setHistory(response?.data)
  };

  const deleteRow = async (id) => {
    await axiosService.Compute.delete(id);
    loadHistory()
  };
  return (
    <>
      <NavBar />
      <section className="vh-99">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="card mt-5 shadow-2-strong rounded">
              <h3 className='text-center my-3'>History</h3>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">First Input</th>
                    <th scope="col">Operator</th>
                    <th scope="col">Second Input</th>
                    <th scope="col">Result</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {history && history?.length > 0 && history?.map((his, index) =>
                    <tr key={his.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{his.firstInput}</td>
                      <td>{his.operator}</td>
                      <td>{his.secondInput}</td>
                      <td>{his.result}</td>
                      <td><button className='btn btn-danger btn-sm' onClick={() => deleteRow(his.id)}>Delete</button></td>
                    </tr>
                  )}
                </tbody>
              </table>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
