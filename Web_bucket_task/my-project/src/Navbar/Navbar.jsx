import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">Home</Link>
      </div>
    </nav>
  );
}

export default Navbar;
