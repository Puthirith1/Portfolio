import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

export default function Header() {

	const smoothScroll = (event: React.MouseEvent<HTMLAnchorElement>) => {
		event.preventDefault();

    const target = event.currentTarget.getAttribute("href")
		const targetId = target?.replace("#", "")
    if (!targetId) return;

    const el = document.getElementById(targetId)
    if (!el) return

		if (targetId === 'about') {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
		} else {
			window.scrollTo({
				top: el.offsetTop - 64,
				behavior: 'smooth',
			});
		}
		globalThis.history.pushState(null, '', target);
	};

  return (
    <header className="h-16 border-b bg-[#1A0B2E] sticky top-0 z-10">
      <div className="wrapper h-full flex items-center justify-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink 
                href="#about" 
                className={cn(
                  navigationMenuTriggerStyle(), 
                  'bg-transparent! text-white! hover:bg-white/10!'
                )}
                onClick={smoothScroll}
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
                onClick={smoothScroll}
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
                onClick={smoothScroll}
              >
                Experience
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink 
                href="#project" 
                className={cn(
                  navigationMenuTriggerStyle(), 
                  'bg-transparent! text-white! hover:bg-white/10!'
                )}
                onClick={smoothScroll}
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
                onClick={smoothScroll}
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