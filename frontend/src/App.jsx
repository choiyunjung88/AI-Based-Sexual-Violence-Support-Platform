import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UploadPage from "./pages/UploadPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UploadPage />} />
        {/* 이후 MyPage, ChatbotPage 등 다른 페이지도 여기에 연결 */}
      </Routes>
    </Router>
  );
}

export default App;
