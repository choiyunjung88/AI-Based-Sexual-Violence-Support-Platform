// src/api/upload.js
import axios from "axios";

// ✅ named export 사용!
export const uploadChatFile = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await axios.post(
    `${process.env.REACT_APP_API_BASE_URL}/api/upload`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};
