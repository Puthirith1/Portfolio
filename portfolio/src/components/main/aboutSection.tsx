import { 
	Avatar, 
	AvatarFallback, 
	AvatarImage 
} from "@/components/ui/avatar"

export default function AboutSection() {
  return (
    <section id="about" className="preahvihear-regular">
			<div className="wrapper mt-10 md:mt-20">
				<div className="flex flex-col md:flex-row justify-center items-center">
					<Avatar className="size-80">
						<AvatarImage src="/profile.jpg" />
						<AvatarFallback className="text-7xl">CP</AvatarFallback>
					</Avatar>
					<div className="md:ml-15 flex flex-col justify-center">
						<p className="mt-4">Hello! I am <span className="text-primary">Chamroeun Puthirith</span></p>
						<p className="mt-2">Currently, working as IT supervisor at Polyna Pharmacy and working on Quik Technology, a SasS platform providing POS and Inventory Management.</p>
					</div>
				</div>
				<h1 className="mt-8 text-4xl! md:text-5xl!">WEB DEVELOPER</h1>
				<p className="mt-4 text-center text-balance text-sm! md:text-base!">
					I'm a self-taught developer with hands-on experience building, shipping, and maintaining production SaaS platforms. Skilled in JavaScript/TypeScript with experience across React, Node.js, REST APIs, and database design.
				</p>
			</div>
    </section>
  )
}