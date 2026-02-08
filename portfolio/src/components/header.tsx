import React from 'react'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const Header = () => {

     const smoothScroll = () => {

     }

     return (
          <header className='w-full'>
               <NavigationMenu>
                    <NavigationMenuItem>
                         <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                              <a href="#docs">About</a>
                         </NavigationMenuLink>
                         <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                              <a href="#docs">Education</a>
                         </NavigationMenuLink>
                         <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                              <a href="#docs">Project</a>
                         </NavigationMenuLink>
                         <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                              <a href="#docs">Contact</a>
                         </NavigationMenuLink>
                    </NavigationMenuItem>
               </NavigationMenu>
          </header>
     )
}

export default Header;