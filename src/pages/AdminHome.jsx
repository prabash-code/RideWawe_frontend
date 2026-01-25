import AdminNavbar from "../components/AdminNavbar";

function App() {
  return (

    <div className="d-flex min-vh-100 bg-dark text-white">


      {/* SIDEBAR */}
      <div className="bg-black p-3" style={{ width: "240px" }}>
        <h4 className="text-warning fw-bold mb-4">🚗 RideWave</h4>

        <ul className="nav flex-column gap-2">
          <li><a class="nav-item bg-warning rounded px-3 py-2 m-3 text-dark fw-semibold" href="/CarListning">Car Listnings</a></li>
          <li><a class="nav-item bg-warning rounded px-3 py-2 m-3 text-dark fw-semibold" href="/CarListning">Analytics</a></li>
          <li><a class="nav-item bg-warning rounded px-3 py-2 m-3 text-dark fw-semibold" href="/CarListning">Message</a></li>
          <li><a class="nav-item bg-warning rounded px-3 py-2 m-3 text-dark fw-semibold" href="/CarListning">Settings</a></li>

        </ul>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-grow-1">
        <AdminNavbar />

        {/* TOP BAR */}
        <div className="d-flex align-items-center bg-dark px-4" style={{ height: "60px" }}>
          <input
            type="text"
            className="form-control w-50 bg-secondary border-0 text-white"
            placeholder="Search..."
          />
          <div className="ms-auto fw-semibold">Admin</div>
        </div>

        {/* CONTENT */}
        <div className="p-4">

          <h3 className="mb-4">Admin Dashboard</h3>

          {/* STAT CARDS */}
          <div className="row g-4 mb-4">
            <div className="col-md-3">
              <div className="card bg-warning text-dark border-0 rounded-4">
                <div className="card-body">
                  <small>Total Listings</small>
                  <h3 className="fw-bold">320</h3>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card bg-success text-dark border-0 rounded-4">
                <div className="card-body">
                  <small>New Bookings</small>
                  <h3 className="fw-bold">45</h3>
                  <small className="text-white">↑ 18%</small>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card bg-primary text-white border-0 rounded-4">
                <div className="card-body">
                  <small>Total Earnings</small>
                  <h3 className="fw-bold">$12,560</h3>
                  <small>↑ 12%</small>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card bg-info text-dark border-0 rounded-4">
                <div className="card-body">
                  <small>New Customers</small>
                  <h3 className="fw-bold">128</h3>
                  <small>↑ 25%</small>
                </div>
              </div>
            </div>
          </div>

          {/* RECENT BOOKINGS TABLE */}
          <div className="card bg-black border-0 rounded-4">
            <div className="card-body">
              <h5 className="mb-3">Recent Bookings</h5>

              <table className="table table-dark table-hover align-middle">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Customer</th>
                    <th>Car</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>RW2584</td>
                    <td>Emma Johnson</td>
                    <td>BMW 3 Series</td>
                    <td>Apr 24, 2024</td>
                    <td className="text-success">Confirmed</td>
                  </tr>
                  <tr>
                    <td>RW2583</td>
                    <td>Michael Lee</td>
                    <td>Audi A6</td>
                    <td>Apr 28, 2024</td>
                    <td className="text-warning">Pending</td>
                  </tr>
                  <tr>
                    <td>RW2582</td>
                    <td>Jessica Brown</td>
                    <td>Tesla Model 3</td>
                    <td>Apr 30, 2024</td>
                    <td className="text-danger">Cancelled</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
