import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

export default function Header() {
  return (
    <header className="border-b bg-[#1A0B2E]">
      <div className="wrapper h-16 flex items-center justify-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink 
                href="#about" 
                className={cn(
                  navigationMenuTriggerStyle(), 
                  'bg-transparent! text-white! hover:bg-white/10!'
                )}
              >
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink 
                href="#education" 
                className={cn(
                  navigationMenuTriggerStyle(), 
                  'bg-transparent! text-white! hover:bg-white/10!'
                )}
              >
                Education
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink 
                href="#experience" 
                className={cn(
                  navigationMenuTriggerStyle(), 
                  'bg-transparent! text-white! hover:bg-white/10!'
                )}
              >
                Experience
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink 
                href="#projects" 
                className={cn(
                  navigationMenuTriggerStyle(), 
                  'bg-transparent! text-white! hover:bg-white/10!'
                )}
              >
                Project
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink 
                href="#contact" 
                className={cn(
                  navigationMenuTriggerStyle(), 
                  'bg-transparent! text-white! hover:bg-white/10!'
                )}
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}