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
        <div className=" container py-10 mx-auto lg:max-w-6xl">

          <div className=" flex justify-between flex-col md:flex-row px-6">
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
              className="w-[14rem] md:w-[26rem] h-[48px] pl-8 bg-transparent p-4 border-white border-b-2 outline-none cursor-pointer text-sm text-slate-100 placeholder:text-slate-200"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-4 justify-between gap-5 sm:px-16 px-6 py-10">

            <div className="">
              <h3 className="font-bold">About Us</h3>

              <p className=" text-sm py-4">We are dedicated to sourcing a variety of ceramic & porcelain tiles & provide Quality Control services to off shore clients from India.</p>
              <div className="flex">
                <div className=" basis-1/6 flex items-center">
                  <Image 
                  src={`/undefined27.png`}
                  height={20}
                  width={20}
                  alt=""
                  />
                </div>
                <div className=" basis-5/6">
                  <p>T: +919106 223226</p>
                  <p>F: +919664 617220</p>
                </div>
              </div>
            </div>

            {footerLinks.map((item) => (
              <div key={item.title}>
                <h3 className="font-bold pb-4">{item.title}</h3>

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

            <div>
              <h3 className="font-bold">Our Office</h3>

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