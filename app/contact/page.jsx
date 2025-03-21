'use client';

import { FloatingDock } from '@/components/ui/floating-dock'
import MagneticButton from '@/components/ui/MagneticButton'
import React, { useState } from 'react'
import { IconBrandGithub, IconBrandGmail, IconBrandInstagram, IconBrandLinkedin, IconBrandWhatsapp, IconMail, IconSend } from "@tabler/icons-react";
import toast, { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';

const Contact = () => {

  const sosmed = [
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/patrickrrh",
    },
    {
      title: "Email",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://mail.google.com/mail",
    },
    {
      title: "Whatsapp",
      icon: (
        <IconBrandWhatsapp className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://wa.link/gxgzgr",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "www.linkedin.com/in/patrick-roberto-halim",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/patrickrrh/",
    },
  ]

  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  })

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;
    setLoading(true);

    const newErrors = {};
    if (!form.name) newErrors.name = "Name is required.";
    if (!form.email) newErrors.email = "Email is required.";
    if (!form.message) newErrors.message = "Message is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    setErrors({});

    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Failed to send email.");

      toast.success("Email sent successfully.");
      setForm({ name: "", email: "", service: "", message: "" });
    } catch (err) {
      toast.error("Failed to send email. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  console.log('form', form);
  console.log("error", errors);

  return (
    <section className='min-h-screen pt-12 xl:pt-16'>

      <Toaster position='top-center' reverseOrder={false} />

      <div className='container mx-auto'>

        <div className='flex flex-col space-y-4 md:flex-row'>
          <h1 className='h1 max-w-full md:max-w-2/3 text-center md:text-left'>Let's Build Something Great Together</h1>
          <img
            src="/images/foto-open-to-work.jpg"
            alt="foto"
            className='w-32 h-32 md:w-[150px] md:h-[150px] rounded-full object-cover mx-auto md:mx-0 mt-5 md:mt-0'
          />
        </div>

        <div className='flex flex-col-reverse md:flex-row md:mt-12'>
          <div className="flex-2 mt-12 md:mt-0">
            <form className="space-y-8">
              <div className='space-y-4'>
                <h2 className="h2">What's your name?</h2>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe *"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full md:w-3/4 border-b pb-2 border-neutral-300 bg-transparent text-md focus:outline-none placeholder-neutral-500"
                  disabled={loading}
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>

              <div className='space-y-4'>
                <h2 className="h2">What's your email?</h2>
                <input
                  type="email"
                  name='email'
                  placeholder="johndoe@mail.com *"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full md:w-3/4 border-b pb-2 border-neutral-300 bg-transparent text-md focus:outline-none placeholder-neutral-500"
                  disabled={loading}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              <div className='space-y-4'>
                <h2 className="h2">What services are you looking for?</h2>
                <input
                  type="text"
                  name='service'
                  placeholder="Fullstack development, Mobile app development ..."
                  value={form.service}
                  onChange={handleChange}
                  className="w-full md:w-3/4 border-b pb-2 border-neutral-300 bg-transparent text-md focus:outline-none placeholder-neutral-500"
                  disabled={loading}
                />
              </div>

              <div className='space-y-4'>
                <h2 className="h2">Your message</h2>
                <input
                  type='text'
                  name='message'
                  placeholder="Hello Patrick, I would like to ... *"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full md:w-3/4 border-b pb-2 border-neutral-300 bg-transparent text-md focus:outline-none placeholder-neutral-500"
                  disabled={loading}
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>

              <div className='mt-12 flex justify-center md:w-3/4 md:justify-end items-end'>
                <div>
                  <MagneticButton text="Send Message" size='lg' icon={<IconSend />} iconPosition='right' onClick={handleSubmit} disabled={loading} />
                </div>
                <div className={`flex ml-3 ${loading ? "block" : "hidden"}`}>
                  {[...Array(3)].map((_, i) => (
                    <motion.span
                      key={i}
                      className="text-3xl"
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    >
                      .
                    </motion.span>
                  ))}
                </div>
              </div>
            </form>
          </div>

          <div className='flex-1 mt-12 md:mt-0'>
            <div className='border border-primary rounded-lg p-6 space-y-4'>
              <p className='text-sm font-mono text-neutral-500'>Contact Details</p>
              <p>patrickrhalim@gmail.com</p>
              <p>+62 821 2277 2286</p>
              <div className='mt-4 md:mt-8'>
                <p className='text-sm font-mono text-neutral-500 mb-2 md:mb-0'>Social Media</p>
                <div className='flex'>
                  <FloatingDock items={sosmed} />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="flex justify-center mt-12 md:mt-28 mb-8">
        <p className="desc text-center">© 2025 Patrick Roberto Halim</p>
      </div>
    </section>
  );
}

export default Contact;
