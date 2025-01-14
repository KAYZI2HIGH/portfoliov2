'use client'

import { Github, Instagram, Mail, Twitter } from 'lucide-react';
import React from 'react'

const Footer = () => {
  return (
    <section className="sm:flex justify-between items-center w-full px-10 py-6 bg-[#EFEFF1] dark:bg-[#0d1018]">
      <div className="flex gap-4 *:cursor-pointer">
        <Github size={18} onClick={() => {
          window.location.href = "https://github.com/KAYZI2HIGH"
        }}/>
        <Instagram size={18} onClick={() => {
           window.location.href = "https://www.instagram.com/kayzi.2high/"
        }}/>
        <Twitter size={18} onClick={() => {
          window.location.href = "https://x.com/KayziGucci"
        }}/>
        <Mail size={18} onClick={() => {
          window.location.href = 'mailto:dadavictory2000@gmail.com'
        }}/>
      </div>

      <h1 className="small_text tracking-wide">
        &copy; 2025 Kayode Dada. All right reserverd.
      </h1>
    </section>
  );
}

export default Footer