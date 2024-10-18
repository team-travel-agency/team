import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

function UserProfil() {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState(() => localStorage.getItem('profileImage') || ""); 
  const [users, setUsers] = useState([]);

  const uploadImage = async () => {
    const form = new FormData();
    form.append('file', file);
    form.append('upload_preset', 'Ghaith');

    try {
      const result = await axios.post('http://api.cloudinary.com/v1_1/ddzemd9ff/upload', form);
      const imageUrl = result.data.secure_url;
      setUrl(imageUrl);
      localStorage.setItem('profileImage', imageUrl); 
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/getUser");
        setUsers(response.data);
      } catch (error) {
        console.log("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div class="fixed inset-20 flex items-center justify-center">
      <nav  className="w-full bg-white shadow-md fixed top-0 z-10">
        <ul className="flex justify-around p-4">
          <li>
            <Link to="/trips" className="text-blue-500 hover:text-blue-700 transition duration-300">Home</Link>
          </li>
          <li>
            <Link to="/Pannier" className="text-blue-500 hover:text-blue-700 transition duration-300">reservation</Link>
          </li>
          <li>
            <Link to="/User" className="text-blue-500 hover:text-blue-700 transition duration-300">User</Link>
          </li>
        </ul>
      </nav>
      <div class="fixed inset-5 flex items-center justify-center">
  
    <div className="flex flex-col items-center m-4 p-4 bg-white rounded-lg shadow-md">
      <input type="file" onChange={(e) => setFile(e.target.files[0])} className="mb-4" />
      {url && <img src={url} alt="Uploaded" className="h-24 w-24 rounded-full mb-4" />}
      <p className="text-xl font-bold text-gray-900 mb-2">zaid</p>
      <p className="text-sm text-gray-600">zaid@gmail.com</p>
      <button onClick={uploadImage} className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300">Upload!</button>

    </div>
 
</div>
     
      
    </div>
  );
}

export default UserProfil;
