"use client";

import { usePathname } from 'next/navigation'
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Install lucide-react for icons

import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { id: 1, text: 'Book', path: '/Book', linkId: 10 },
    { id: 2, text: 'About', path: '/About', linkId: 20 },
    { id: 3, text: 'Contact', path: '/Contact', linkId: 30 },
  ];
  const currentPath = usePathname();
  const isActive = (path) => { console.log(currentPath); return currentPath === path }
  const navItemClassName = 'p-3 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black list-none';
  const navItemMobileClassName = 'block px-4 py-2 bg-black text-white hover:bg-[#00df9a]';
  return (

    <nav className='bg-black text-white'>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <a className='flex items-center ' href='/'>
            <Image src='/logo.svg' alt='site logo' width={32} height={32} className='max-h-8 m-2' />
            <h3 className={'inline-block ' }>ThisBuchanan.com</h3>
          </a>
          <div className="max-w-7xl  px-4 sm:px-6 lg:px-8 ">
            <div className="flex justify-between h-16 items-center">

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-gray-800 hover:text-gray-600 focus:outline-none"
                >
                  {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-6">
                {navItems.map(item => (
                  <Link href={item.text} key={item.linkId}>
                    <li
                      key={item.id}
                      className={isActive(item.path) ? navItemClassName + " font-bold underline" : navItemClassName}
                    >{item.text}</li>
                  </Link>

                ))}
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden pt20 bg-white shadow-md">
          {navItems.map(item => (
            <Link href={item.text} key={item.linkId}>
              <li
                key={item.id}
                className={isActive(item.path) ? navItemMobileClassName + " font-bold underline" : navItemMobileClassName}
                onClick={() => setIsOpen(!isOpen)}
              >{item.text}</li>
            </Link>

          ))}
        </div>

      )}
    </nav>
  );
}
