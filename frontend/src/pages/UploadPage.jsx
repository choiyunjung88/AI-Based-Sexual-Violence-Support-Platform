// src/pages/UploadPage.jsx
import React, { useState } from "react";
import { uploadChatFile } from "../api/upload"; // ✅ named import 사용

const UploadPage = () => {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    try {
      const response = await uploadChatFile(file); // 호출
      setStatus("✅ Upload successful: " + response);
    } catch (error) {
      console.error("Upload error:", error);
      setStatus("❌ Upload failed: " + error.message);
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4">📂 Upload Chat File</h2>
      <input
        type="file"
        accept=".txt"
        onChange={handleFileChange}
        className="mb-4 block w-full text-sm"
      />
      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Upload
      </button>
      <p className="mt-4 text-gray-600">{status}</p>
    </div>
  );
};

export default UploadPage;
