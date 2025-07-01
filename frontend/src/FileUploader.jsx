// src/components/FileUploader.jsx
import React, { useState } from 'react';
import axios from 'axios';

export default function FileUploader() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append('file', file);
    try {
      await axios.post('http://localhost:5000/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setMessage('File uploaded successfully');
      setFile(null);
    } catch (err) {
      setMessage('Failed to upload');
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow max-w-md mx-auto mt-6">
      <input
        type="file"
        accept=".pdh,.pdf,.txt,.json"
        onChange={handleChange}
        className="mb-4"
      />
      <button
        onClick={handleUpload}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Upload File
      </button>
      {message && <p className="mt-4 text-blue-600">{message}</p>}
    </div>
  );
}
