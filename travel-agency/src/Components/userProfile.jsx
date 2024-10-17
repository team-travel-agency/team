import React ,{ useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

function UserProfil() {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState (() => localStorage.getItem('profileImage') || ""); 

  const uploadImage = async () => {
    const form = new FormData();
    form.append('file', file);
    form.append('upload_preset', 'Ghaith');

    await axios.post('http://api.cloudinary.com/v1_1/ddzemd9ff/upload', form)
      .then(result => {
        const imageUrl = result.data.secure_url;
        setUrl(imageUrl);
        localStorage.setItem('profileImage', imageUrl); 
      });
  };

  return (
    <div>
            <nav className="w-full bg-white shadow-md">
        <ul className="flex justify-around p-4">
          <li>
            <Link to="/trips" className="text-blue-500 hover:text-blue-700 transition duration-300">Home</Link>
          </li>
          <li>
            <Link to="/Pannier" className="text-blue-500 hover:text-blue-700 transition duration-300">Pannier</Link>
          </li>
          <li>
            <Link to="/User" className="text-blue-500 hover:text-blue-700 transition duration-300">User</Link>
          </li>
         
        </ul>
      </nav>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <br />
      <button onClick={uploadImage}>Upload!</button>
      <img src={url} alt="Uploaded" />
    </div>
  );
}

export default UserProfil;