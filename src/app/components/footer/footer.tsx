import { IoLogoTwitter } from "react-icons/io";
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import Image from "next/image";
import NewsLetter from "../newsletter/newsletter";

export default function Footer() {
  return (
    <>
      <NewsLetter />
      <div className="bg-[#F0F0F0] w-full px-4 sm:px-8 lg:px-20">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between items-start lg:h-[499px] gap-12 pt-16 pb-8">
          {/* Company Info Section */}
          <div className="flex flex-col gap-4 items-start">
            <h3 className="font-satoshi text-2xl sm:text-3xl font-bold">SHOP.CO</h3>
            <p className="font-satoshi text-sm sm:text-base text-[#00000099]">
              We have clothes that suit your style and which you’re proud to wear. From women to men.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: IoLogoTwitter, bg: "bg-white" },
                { Icon: RiFacebookFill, bg: "bg-black text-white" },
                { Icon: FaInstagram, bg: "bg-white" },
                { Icon: IoLogoGithub, bg: "bg-white" },
              ].map(({ Icon, bg }, index) => (
                <div
                  key={index}
                  className={`h-[40px] w-[40px] ${bg} rounded-full flex justify-center items-center`}
                >
                  <Icon className="text-xl" />
                </div>
              ))}
            </div>
          </div>

          {/* Links Section */}
          <div className="flex flex-wrap justify-between gap-8 lg:w-3/4">
            {[
              { title: "COMPANY", links: ["About", "Features", "Works", "Career"] },
              { title: "HELP", links: ["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"] },
              { title: "FAQ", links: ["Account", "Deliveries", "Orders", "Payments"] },
              { title: "RESOURCES", links: ["Free eBooks", "Developer Tutorials", "How-to Blogs", "YouTube Playlists"] },
            ].map((section, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/4">
                <h5 className="font-satoshi text-lg font-semibold mb-4">{section.title}</h5>
                <ul className="font-satoshi text-sm sm:text-base text-[#00000099] space-y-2">
                  {section.links.map((link, idx) => (
                    <li key={idx}>{link}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#0000001A] my-4"></div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center">
          <div className="font-satoshi text-sm text-[#00000099]">
            Shop.co © 2000-2023, All Rights Reserved
          </div>
          <Image
            src="/paylogo.png"
            alt="Payment Logos"
            height={30}
            width={281}
            className="h-auto w-auto"
          />
        </div>
      </div>
    </>
  );
}
