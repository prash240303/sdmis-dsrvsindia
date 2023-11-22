import React from 'react';
import { FaBars } from 'react-icons/fa'; // Assuming you have a library for icons

const AdminDashboard = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Top Header */}
      <header className="bg-sdmis-primary-600 text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <button className="text-white">
          &#x1F354;
          </button>
          <h1 className="ml-2 font-bold text-lg">Company Name</h1>
        </div>
        <div>
          {/* User Profile or any other content */}
          User Profile
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-grow">
        {/* Sidebar */}
        <nav className="bg-sdmis-neutral-100 p-4 w-16">
          {/* Sidebar content goes here */}
        </nav>

        {/* Panel Content */}
        <main className="flex-grow p-4">
          {/* Random content in the main panel */}
          <h1 className="text-2xl font-bold mb-4">Welcome to the Admin Dashboard</h1>
          <p>This is some random content in the main panel.</p>
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;
