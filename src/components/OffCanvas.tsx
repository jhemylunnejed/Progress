"use client"

import { MenuContext } from '@/context/MenuContext'
import React, { useContext } from 'react'


const OffCanvas = () => {

  const {clicked} = useContext(MenuContext)

  return (
    <div >
          {clicked && (
            <div className={`fixed inset-y-0 left-0 z-50 w-full bg-white dark:bg-black`}>
            </div>
          )}
        </div>
  )
}

export default OffCanvas