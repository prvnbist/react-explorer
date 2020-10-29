import React from 'react'

import { Button } from '../../components'
import { useLayout } from '../../context'
import { FiSidebar } from 'react-icons/fi'

export const Navbar = () => {
   const { toggle_sidebar } = useLayout()
   return (
      <nav>
         <Button.Icon border={{ r: true }} onClick={toggle_sidebar}>
            <FiSidebar size="20px" />
         </Button.Icon>
      </nav>
   )
}
