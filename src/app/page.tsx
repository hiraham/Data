"use client"; // Marks this file for client-side rendering in Next.js

import React from "react";
import Link from "next/link"; // Optional: If you want to link to other pages

const MainPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-slate-400">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
        Welcome to the Todo App
      </h1>
      <p className="text-lg text-center mb-4 text-gray-700">
        Manage your tasks effectively!
      </p>
      
      {/* Button to navigate to the Todos page */}
      <Link
        href="/FatchData"
        className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-600 transition duration-300 mb-4"
      >
        View Todo List
      </Link>

   
    </div>
  );
};

export default MainPage;
