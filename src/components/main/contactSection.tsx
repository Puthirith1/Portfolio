import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Mail } from "lucide-react";


export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
  setForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
  <section id="contact" className="wrapper mt-20">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-base! text-primary">Contact</h2>
      <p className="mt-2 mb-8">
        Interested in working together or have a question? Send a message.
      </p>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="rounded-2xl">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>c.puthirith01@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FaGithub size={18} />
                <a
                  href="https://github.com/Puthirith1"
                  className="underline"
                  target="_blank"
                >
                  github.com/Puthirith1
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaLinkedin size={18} />
                <a
                  href="https://www.linkedin.com/in/puthirith-chamroeun-37113a2b9/"
                  className="underline"
                  target="_blank"
                >
                  linkedin.com/in/puthirith-chamroeun-37113a2b9
                </a>
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardContent className="p-6">
              <p className="mb-5 font-bold text-center italic">Mailing feature currently in development</p>
              {submitted ? (
                <div className="text-sm">Message sent successfully.</div>
              ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Your name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  disabled
                />
                <Input
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  disabled
                />
                <Textarea
                  placeholder="Your message"
                  name='message'
                  value={form.message}
                  onChange={handleChange}
                  required
                  disabled
                />
                <Button disabled className="w-full" type="submit">
                  Send Message
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </motion.div>
  </section>
  )
}