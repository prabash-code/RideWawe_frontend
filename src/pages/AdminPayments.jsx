import React from 'react'
import AdminNavbar from '../components/AdminNavbar'

function AdminPayments() {
  return (
    <>
    <AdminNavbar/>
  
  {/* search payments */}
      <div className="d-flex justify-content-end align-items-center mb-3" style={{ gap: "10px" }}>
        <input
          type="search"
          className="form-control form-control-dark"
          placeholder="Search Payments.."
          aria-label="Search"
          style={{ width: "300px" }}
        />
        <button type="button" className="btn btn-warning fw-bold m-3">
          Search
        </button>
      </div>

      {/* Table */}
      <div className="container my-5">
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>TRANSACTIONS</th>
              <th>CUSTOMER</th>
              <th>AMOUNT</th>
              <th>METHOD</th>
              <th>STATUS</th>
              <th>DATE</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {/*add body here  */}
          </tbody>
        </table>

      </div>


    </>
    
  )
}

export default AdminPayments