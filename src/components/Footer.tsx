import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import {SiVercel } from 'react-icons/si'

const Footer = () => {
  return (
    <div className="bg-[#212121] py-4 mt-10">
      <div className="flex flex-row gap-4 text-2xl py-2 text-green-600 items-center justify-center">
        <FaFacebook/>
        <FaTwitter/>
        <FaInstagram/>
        <FaGithub/>
        <FaLinkedin/>
        <SiVercel />
      </div>
        <div className="container text-white text-center py-2">
            <p> Created By AMIt | &copy;  2020 All rights reserved..</p>
        </div>
    </div>
  )
}

export default Footer
