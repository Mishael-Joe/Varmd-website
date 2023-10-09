import Link from 'next/link'
import Image from 'next/image'

import { siteConfig } from '@/config/site'

const Navbar = () => {
  return (
    <nav className='flex flex-col justify-between'>
        <div className=' bg-gray-600 text-slate-100 sm:px-16 px-6 py-2 flex justify-between'>
            <div className='flex justify-between gap-x-4'>
                <span className='flex justify-between gap-x-2'>
                    <Image
                    src={'/undefined1.png'}
                    width={20}
                    height={10}
                    alt=''
                    />
                    Morbi, India
                </span>

                <span className='flex justify-between gap-x-2'>
                    <Image
                    src={'/undefined2.png'}
                    width={20}
                    height={10}
                    alt=''
                    />
                    6 Days a week
                </span>
            </div>

            <div>
                <span className='flex justify-between gap-x-2'>
                    <Image
                    src={'/undefined3.png'}
                    width={20}
                    height={10}
                    alt=''
                    />
                    info@varmd.com
                </span>
            </div>
        </div>

        <div className='px-6 sm:px-16 py-1 flex justify-between '>
            <div className='flex flex-col'>
                <h2 className=' font-extrabold'>{siteConfig.name}</h2>
                <h4 className=' font-light text-sm'>{siteConfig.subName}</h4>
            </div>

            <div>
                <ul className='flex gap-x-4 font-semibold'>
                    <li><Link href={'/'}>Home</Link></li>

                    <li><Link href={'/about-us'}>About Us</Link></li>

                    <li><Link href={'/products'}>Products</Link></li>

                    <li><Link href={'/services'}>Services</Link></li>

                    <li><Link href={'contact-us'}>Contact Us</Link></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar