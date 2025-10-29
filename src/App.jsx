import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// "@/..." คือ เรียกไฟล์ภายใน folder src โดยตรง
// สามารถตั้งเป็น folder อื่นหรือ keyword อื่นได้ผ่าน vite.config.js
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import "./index.css" 
import { HeroSection } from './components/Herosection'
import { AboutSection } from './components/AboutSection'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
