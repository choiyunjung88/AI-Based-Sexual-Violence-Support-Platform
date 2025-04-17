import React, {useState} from "react";
import axios from "axios";

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [status, setStatus] = useState("");

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) {
            alert("Please select a file first!");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await axios.post("/upload", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            setStatus("Upload successful : " + response.data.message);
        } catch (error) {
            console.error("Error uploading file:", error);
            setStatus("Upload failed : " + error.message);
        }
    };

    return (

    <div className="p-8 max-w-md mx-auto">
    <h2 className="text-xl font-bold mb-4">📂 Upload Chat File</h2>
    <input type="file" accept=".txt" onChange={handleFileChange} className="mb-4" />
    <button onClick={handleUpload} className="bg-blue-500 text-white px-4 py-2 rounded">
      Upload
    </button>
    <p className="mt-4 text-gray-700">{status}</p>
    </div>
    );
};

export default FileUpload;