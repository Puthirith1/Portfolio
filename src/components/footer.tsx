import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="mt-16 bg-[#1A0B2E]">
      <div className="flex p-10 gap-5">
        <a className="text-white!" href='https://github.com/Puthirith1'>
          <FaGithub size='30' />
        </a>
        <a className="text-white!" href='https://www.linkedin.com/in/puthirith-chamroeun-37113a2b9/'>
          <FaLinkedin size='30' />
        </a>
      </div>
    </footer>
  )
}