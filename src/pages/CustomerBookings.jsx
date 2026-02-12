import React from 'react';
import { 
  LogOut, CreditCard, Calendar, Plus, Car, CheckCircle, Clock, User, Settings, Search 
} from 'lucide-react';

const THEME = {
  accent: "#f6c23e",
  darkBg: "#1c1e22", // Main background
  containerBg: "#23262b", // Section container background
  white: "#ffffff",
  textGray: "#9ca3af"
};

const CustomerBookings = () => {
  return (
    <div className="min-h-screen text-white font-sans pb-12" style={{ backgroundColor: THEME.darkBg }}>
      
      {/* --- TOP NAVIGATION BAR --- */}
      <nav className="flex items-center justify-between px-6 py-4 bg-[#1c1e22] border-b border-gray-800">
        <div className="flex items-center gap-2">
          <Car size={24} className="text-white" />
        </div>
        
        <div className="flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#" className="hover:text-white">Home</a>
          <div className="relative py-2">
            <a href="#" className="text-white">My Bookings</a>
            <div className="absolute bottom-0 left-0 w-full h-[2px]" style={{ backgroundColor: THEME.accent }}></div>
          </div>
          <a href="#" className="hover:text-white">My Bookings</a>
          <a href="#" className="hover:text-white">My Payments</a>
          <a href="#" className="hover:text-white flex items-center gap-2">
            <Clock size={16} /> Profile
          </a>
          <a href="#" className="hover:text-white flex items-center gap-2">
            <Car size={16} /> Logout
          </a>
          <Settings size={18} className="cursor-pointer hover:text-white" />
        </div>
      </nav>

      <main className="max-w-6xl mx-auto mt-8 space-y-6 px-4">
        
        {/* --- WELCOME SECTION --- */}
        <section className="rounded-xl p-8 flex items-center justify-between shadow-2xl" style={{ backgroundColor: THEME.containerBg }}>
          <div className="flex items-center gap-6">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150" 
                className="w-24 h-24 rounded-full border-4 border-[#3a3f47] object-cover" 
                alt="Profile" 
              />
            </div>
            <h1 className="text-4xl font-semibold tracking-tight">Hi, Alex Thompson</h1>
          </div>
          <button 
            className="flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-black hover:opacity-90 transition-all"
            style={{ backgroundColor: THEME.accent }}
          >
            New Booking <Car size={20} />
          </button>
        </section>

        {/* --- MY BOOKINGS SECTION --- */}
        <section className="rounded-xl overflow-hidden shadow-lg" style={{ backgroundColor: THEME.containerBg }}>
          <div className="px-6 py-4 flex justify-between items-center">
            <h2 className="text-xl font-bold">My Bookings</h2>
            <Settings size={18} className="text-gray-500" />
          </div>

          <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Image Card */}
            <div className="bg-white rounded-lg overflow-hidden h-56 shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=500" 
                className="w-full h-full object-cover" 
                alt="Tesla" 
              />
            </div>

            {/* Tesla Details Card */}
            <div className="bg-white rounded-lg p-5 text-black flex flex-col justify-between shadow-md">
              <div>
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold uppercase tracking-tight">Tesla Model S</h3>
                  <img src="https://pngimg.com/uploads/tesla_car/tesla_car_PNG24.png" className="w-14 grayscale opacity-80" alt="car icon" />
                </div>
                <div className="mt-4 text-[13px] space-y-1 text-gray-700 font-medium">
                  <p>Start Date: 2024 &nbsp; 2024-10-30</p>
                  <p>End Date: 2024-36-10-30 <span className="text-blue-600 font-bold ml-1">✔</span></p>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <span className="bg-[#56c683] text-white px-4 py-1.5 rounded-full text-[11px] font-bold uppercase">Confirmed</span>
                <span className="bg-[#4a90e2] text-white px-4 py-1.5 rounded-full text-[11px] font-bold uppercase flex items-center gap-1">
                  <CheckCircle size={12} /> Pending
                </span>
              </div>
            </div>

            {/* Ford Details Card */}
            <div className="bg-white rounded-lg p-5 text-black flex flex-col justify-between shadow-md">
              <div>
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold uppercase tracking-tight">Ford Murtang</h3>
                  <div className="flex gap-1">
                    <img src="https://www.pngall.com/wp-content/uploads/12/White-Ford-Mustang-PNG-Photo.png" className="w-10 grayscale" alt="icon" />
                    <img src="https://www.pngall.com/wp-content/uploads/12/Ford-Mustang-PNG-File.png" className="w-10" alt="icon" />
                  </div>
                </div>
                <div className="mt-4 text-[13px] space-y-1 text-gray-700 font-medium">
                  <p>Start Date: 2026 &nbsp; 2024-10-30</p>
                  <p className="flex items-center gap-1">End Date: 2024-36 Status <span className="text-yellow-600 font-black">3</span></p>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <span className="bg-[#fbc02d] text-white px-4 py-1.5 rounded-full text-[11px] font-bold uppercase flex items-center gap-1">
                  <CheckCircle size={12} /> Pending
                </span>
                <span className="bg-[#4a90e2] text-white px-4 py-1.5 rounded-full text-[11px] font-bold uppercase">Completed</span>
              </div>
            </div>
          </div>
        </section>

        {/* --- MY PAYMENTS SECTION --- */}
        <section className="rounded-xl overflow-hidden shadow-lg" style={{ backgroundColor: THEME.containerBg }}>
          <div className="px-6 py-4 flex justify-between items-center">
            <h2 className="text-xl font-bold">My Payments</h2>
            <Settings size={18} className="text-gray-500" />
          </div>

          <div className="bg-white mx-6 mb-6 rounded-lg overflow-hidden border border-gray-100">
            <table className="w-full text-left text-black text-sm">
              <thead className="border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 font-bold">Amount</th>
                  <th className="px-6 py-4 font-bold text-center">Status</th>
                  <th className="px-6 py-4 font-bold text-center">Status</th>
                  <th className="px-6 py-4 font-bold text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">$120.00</td>
                  <td className="px-6 py-4 text-center">Paid</td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center text-green-500">
                      <CheckCircle size={20} fill="#56c683" className="text-white" />
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right"></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">$80.00</td>
                  <td className="px-6 py-4 text-center text-gray-600">Pending</td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center text-yellow-500">
                      <Clock size={20} />
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button 
                      className="px-6 py-2 rounded-lg font-bold text-xs uppercase shadow-sm active:scale-95 transition-transform"
                      style={{ backgroundColor: THEME.accent }}
                    >
                      Pay Now
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">$80.00</td>
                  <td className="px-6 py-4 text-center text-gray-600">Pending</td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center text-yellow-500">
                      <Clock size={20} />
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CustomerBookings;