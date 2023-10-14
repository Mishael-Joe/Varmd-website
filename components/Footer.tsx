"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { footerLinks } from "@/config/constant";
import { siteConfig } from "@/config/site";

const Footer = () => {
  const [email, setEmail] = useState('');

  return (
    <footer className='bg-[url(/undefined26.png)] flex flex-col text-slate-100 mt-5 border-t border-gray-100'>
      <div className="inset-0 bg-black/50">
        <div className="py-10 mx-auto lg:max-w-7xl">

          <div className=" flex justify-between  md:flex-row px-6 gap-2 items-center">
            <div className=" flex flex-col font-Enriqueta">
              <span className=' font-extrabold md:text-[23px]'>{siteConfig.name}</span>
              <span className=' font-thin text-xs sm:text-sm'>{siteConfig.subName}</span>
            </div>

            <div className="relative">
              <Image 
              src={`/undefined30.png`}
              width={20}
              height={20}
              alt=""
              className="absolute right-3 top-4 sm:bottom-2"
              />

              <input
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Your Email Address"
              className="w-[10rem] md:w-[26rem] h-[48px] pl-1 sm:pl-4 bg-transparent p-4 border-white border-b-2 outline-none cursor-pointer text-sm text-slate-100 placeholder:text-slate-200"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 sm:px-10 px-6 py-10 text-sm sm:text-base">

            <div className="container max-w-sm mx-auto">
              <h3 className="font-bold text-2xl">About Us</h3>

              <p className=" text-sm py-4">We are dedicated to sourcing a variety of ceramic & porcelain tiles & provide Quality Control services to off shore clients from India.</p>
              <div className="flex">
                <div className=" basis-1/6 flex items-center">
                  <Image 
                  src={`/undefined27.png`}
                  height={20}
                  width={20}
                  alt=""
                  className=" w-10 md:w-8"
                  />
                </div>
                <div className=" basis-5/6">
                  <p>T: +919106 223226</p>
                  <p>F: +919664 617220</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 pt-4 sm:pt-0 gap-4 container max-w-lg mx-auto">
              {footerLinks.map((item) => (
                <div key={item.title}>
                  <h3 className="font-bold pb-4 text-2xl">{item.title}</h3>

                  <div className="flex flex-col gap-4">
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

            <div className="container max-w-[15rem] mx-auto">
              <h3 className="font-bold text-2xl">Our Office</h3>

              <div>
                <ul className="flex flex-col gap-y-4">
                  <li className="pt-4">Times Square 2, Sindhubhavan</li>
                  <li>Ahmedabad, Gujarat, India.</li>
                  <li>Info@Varmd.Com</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <p className=" text-center border-t-2">{siteConfig.siteRight}</p>
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;