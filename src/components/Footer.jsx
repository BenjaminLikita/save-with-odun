import React, { useEffect } from 'react'
import logo from "../assets/SWOWhite.png"
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTelegram, FaWhatsapp } from 'react-icons/fa'


function Footer() {
  useEffect(() => {
    // document.querySelectorAll(".link-tr").forEach(item => {
    //   item.children?.forEach(elem => {
    //     console.log(elem);
    //   });
    // })
  })
  return (
    <footer className='border-t mt-5 bg-theme-color text-white relative top-0'>
      <div className="flex flex-col">
        <img src={logo} className='w-10 my-5 mx-12' alt="" />
        <div className="w-[80%] md:w-[90%] m-auto py-5 text-xs">
          {/* <div className="flex items-start justify-between"> */}
          <div className="grid grid-cols-2 md:grid-cols-4">
            <div>
              <h1 className="py-5 font-semibold text-lg">Company</h1>
              <ul className='flex flex-col gap-2 link-tr'>
                <Link to={"/"}>About Us</Link>
                <Link to={"/"}>Press</Link>
                <Link to={"/"}>Carriers</Link>
                <Link to={"/"}>Ambassadors</Link>
                <Link to={"/"}>Pivacy</Link>
                <Link to={"/"}>Terms</Link>
              </ul>
            </div>
            <div>
              <h1 className="py-5 font-semibold text-lg">Product</h1>
              <ul className='flex flex-col gap-2 link-tr'>
                <Link to={"/"}>Saving Plans</Link>
                <Link to={"/"}>Investment Plans</Link>
                <Link to={"/"}>Saving Boxes</Link>
                <Link to={"/"}>Stash</Link>
                <Link to={"/"}>Partnership Oppurtunities</Link>
                <Link to={"/"}>Sprout</Link>
                <Link to={"/"}>Circles</Link>
                <Link to={"/"}>Got a suggestion?</Link>
              </ul>
            </div>
            <div>
              <h1 className="py-5 font-semibold text-lg">Resources</h1>
              <ul className='flex flex-col gap-2 link-tr'>
                <Link to={"/"}>Customer Stories</Link>
                <Link to={"/"}>Media</Link>
                <Link to={"/"}>FAQs</Link>
                <Link to={"/"}>Security</Link>
                <Link to={"/"}>Estimate your Interest</Link>
                <Link to={"/"}>Plan Education</Link>
                <Link to={"/"}>Blog</Link>
                <Link to={"/"}>Help Center</Link>
              </ul>
            </div>
            <div>
              <h1 className="py-5 font-semibold text-lg">Contact</h1>
              <ul className='flex flex-col'>
                <div className="flex gap-[10%] h-10 mb-3">
                  <FaWhatsapp className='text-3xl hover:text-4xl transition-all duration-500 cursor-pointer' />
                  <FaFacebook className='text-3xl hover:text-4xl transition-all duration-500 cursor-pointer' />
                  <FaInstagram className='text-3xl hover:text-4xl transition-all duration-500 cursor-pointer' />
                  <FaTelegram className='text-3xl hover:text-4xl transition-all duration-500 cursor-pointer' />
                </div>
                <Link to={"/"}>support@savewtithodun.com</Link>
              </ul>
            </div>
          </div>
            <p className='pt-7 font-medium'>SaveWithOdun | 2023</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
