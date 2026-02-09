import { 
	Avatar, 
	AvatarFallback, 
	AvatarImage 
} from "@/components/ui/avatar"

export default function AboutSection() {
  return (
    <section id="about">
			<div className="wrapper">
				<h1>Chamroeun Puthirith</h1>
				<Avatar>
					<AvatarImage src="" />
					<AvatarFallback>CP</AvatarFallback>
				</Avatar>
			</div>
    </section>
  )
}