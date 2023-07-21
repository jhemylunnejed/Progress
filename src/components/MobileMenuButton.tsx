"use client"

import { MenuContext } from '@/context/MenuContext'
import React, { useContext } from 'react'

const MobileMenuButton = () => {

    const {clicked, setClicked} = useContext(MenuContext)

    const genericHamburgerLine = `h-1 w-6 mt-1 rounded-full bg-black dark:bg-whitegit  transition ease transform duration-300`;

  return (
    <button
      className="md:hidden flex-col h-12 w-12 justify-center items-center group flex"
      onClick={() => setClicked(!clicked)}
    >
      <div
        className={`${genericHamburgerLine} ${
          clicked
            ? "rotate-45 translate-y-1 group-hover:opacity-100"
            : "group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          clicked ? "opacity-0" : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          clicked
            ? "-rotate-45 -translate-y-3 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
    </button>
  )
}

export default MobileMenuButton