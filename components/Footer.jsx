import { IconArrowDownLeft } from "@tabler/icons-react"
import { Card } from "./ui/card"
import MagneticButton from "./ui/MagneticButton"
import { FloatingDock } from "./ui/floating-dock"
import { IconBrandGithub, IconBrandGmail, IconBrandInstagram, IconBrandLinkedin, IconBrandWhatsapp, IconCode, IconGlobe, IconLocation, IconMail, IconPin, IconPinFilled } from "@tabler/icons-react";

const Footer = () => {

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

  return (
    <footer>
      <div className="container mx-auto space-y-10 md:space-y-20">
        <div className="space-y-8 md:space-y-16">
          <hr className="border-t border-gray-300" />
          <div className="flex flex-col md:flex-row justify-between gap-10">
            <div className="flex flex-col md:flex-row gap-x-10 items-center md:items-start text-center md:text-left">
              <div>
                <Card className="w-[200px] sm:w-[250px] md:w-[300px] h-[200px] sm:h-[250px] md:h-[300px] overflow-hidden relative">
                  <img
                    src="/images/foto-home.jpg"
                    alt="Image home"
                    className="w-full h-full object-cover"
                  />
                </Card>
              </div>
              <div className="mt-5 md:mt-0">
                <h2 className="text-4xl xl:text-[75px] xl:leading-[80px] tracking-[-1px] font-mono max-w-2xl mx-16 md:mx-0">Let's build something great</h2>
                <div className="flex flex-col md:flex-row gap-x-6 mt-6 md:mt-12 space-y-4">
                  <MagneticButton text="patrickrhalim@gmail.com" size="lg" rounded="full" variant="outlined" link={"https://mail.google.com/mail"} />
                  <MagneticButton text="+62 821 2277 2286" size="lg" rounded="full" variant="outlined" link={"https://wa.link/gxgzgr"} />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between items-end md:mb-8">
              <IconArrowDownLeft size={30} />
              <div className="self-end mt-6 md:mt-0">
                <MagneticButton text="Contact Me" size="lg" rounded="full" link={"/contact"} />
              </div>
              <div className="self-start mt-8 md:mt-0">
                <FloatingDock items={sosmed} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mb-8">
          <p className="desc">© 2025 Patrick Roberto Halim</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer