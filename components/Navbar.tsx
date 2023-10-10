"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react';

import { siteConfig } from '@/config/site'


function GiHamburgerMenu(props: any) {
  return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" height="1em" width="1em" {...props}><path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z" /></svg>;
}

function AiOutlineClose(props: any) {
  return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 1024 1024" height="1em" width="1em" {...props}><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" /></svg>;
}

const BottomNav = () => {
    const [isOpen, setIsOpen] = useState(false)
    
    const handleClick = ():any =>{
        setIsOpen(!isOpen)
    }

    return (
        <>
        <button className=' absolute top-14 right-6' onClick={handleClick}> {!isOpen && (<GiHamburgerMenu />)} </button>
        {isOpen && (
            <div className='px-4 inset-0 bg-black/50 fixed z-10 w-full h-full'>
                <i className=' absolute top-5 right-5 z-50' onClick={handleClick}><AiOutlineClose /></i>
                <div className='px-4 w-[40vw] h-full bg-slate-100 absolute right-0'>
                    <ul className='flex flex-col gap-4 pt-10 font-semibold'>
                        <li onClick={handleClick}><Link href={'/'}>Home</Link></li>

                        <li onClick={handleClick}><Link href={'/about'}>About Us</Link></li>

                        <li onClick={handleClick}><Link href={'/products'}>Products</Link></li>

                        <li onClick={handleClick}><Link href={'/services'}>Services</Link></li>

                        <li onClick={handleClick}><Link href={'contact-us'}>Contact Us</Link></li>
                    </ul>
                </div>
            </div>
        )}
        </>
    )
}

function ResizedNav() {
    const [windowWidth, setWindowWidth] = useState(0)

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        }

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    return <>{windowWidth < 640 && (<BottomNav />)}</>
}

const Navbar = () => {
  return (
    <nav className='flex flex-col justify-between'>
        <div className=' bg-gray-600 text-slate-100 sm:px-16 px-6 py-2 flex justify-between'>
            <div className='flex justify-between gap-x-4'>
                <span className='flex justify-between gap-x-2 text-xs'>
                    <Image
                    src={'/undefined1.png'}
                    width={20}
                    height={10}
                    alt=''
                    className=' w-6'
                    />
                    Morbi, India
                </span>

                <span className='flex justify-between gap-x-2 text-xs'>
                    <Image
                    src={'/undefined2.png'}
                    width={20}
                    height={10}
                    alt=''
                    className=' w-6'
                    />
                    6 Days a week
                </span>
            </div>

            <div>
                <span className='flex justify-between gap-x-2 text-xs'>
                    <Image
                    src={'/undefined3.png'}
                    width={20}
                    height={10}
                    alt=''
                    className=' w-6'
                    />
                    info@varmd.com
                </span>
            </div>
        </div>

        <div className='px-6 sm:px-14 py-1 flex justify-between items-center gap-2'>
            <div className='flex flex-col'>
                <h2 className=' font-extrabold'>{siteConfig.name}</h2>
                <h4 className=' font-light text-sm'>{siteConfig.subName}</h4>
            </div>

            <div>
                <ul className='sm:flex text-sm lg:text-base gap-x-4 font-semibold hidden'>
                    <li><Link href={'/'}>Home</Link></li>

                    <li><Link href={'/about'}>About Us</Link></li>

                    <li><Link href={'/products'}>Products</Link></li>

                    <li><Link href={'/services'}>Services</Link></li>

                    <li><Link href={'contact-us'}>Contact Us</Link></li>
                </ul>
            </div>
        </div>

        <><ResizedNav /> </>
    </nav>
  )
}

export default Navbar