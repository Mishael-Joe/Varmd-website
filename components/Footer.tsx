"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { footerLinks } from "@/config/constant";
import { siteConfig } from "@/config/site";

const Footer = () => {
  const [email, setEmail] = useState('');

  return (
    <footer className=' bg-[url(/undefined26.png)] flex flex-col text-black py-10 mt-5 border-t border-gray-100'>
      <div className=" container mx-auto lg:max-w-6xl">

        <div className=" flex justify-between">
          <div className=" flex flex-col">
            <span className=' font-extrabold'>{siteConfig.name}</span>
            <span className=' font-thin text-sm'>{siteConfig.subName}</span>
          </div>

          <div>
            <input
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Your Email Address"
            className="w-[26rem] h-[48px] pl-8 bg-transparent p-4 border-white border-b-2 outline-none cursor-pointer text-sm text-slate-100 placeholder:text-slate-200"
            />
          </div>
        </div>

        <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">

          {footerLinks.map((item) => (
            <div key={item.title}>

              <h3 className="font-bold">{item.title}</h3>

              <div className="flex flex-col gap-5">
                {item.links.map((link) => (
                  <Link 
                  key={link.title}
                  href={link.url}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div>
          <p className=" text-center border-t-2">{siteConfig.siteRight}</p>
        </div>
      </div>
    </footer>
  )
};

export default Footer;