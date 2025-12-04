import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import Logo from "../ui/Logo";
import NavLink from "../ui/NavLink";
import Link from "next/link";
import Button from "../ui/Button";
import { BsSend } from "react-icons/bs";

const footerColumns = [
  {
    title: "About Us",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
  },
  {
    title: "Contact Info",
    content: [
      "123 Street Name",
      "City, Country",
      "Phone: +123 456 789",
      "Email: info@directgold.com",
    ],
  },
  {
    title: "Important Link",
    links: [
      { href: "#", label: "Privacy Policy" },
      { href: "#", label: "Terms & Conditions" },
      { href: "#", label: "FAQ" },
    ],
  },
];

const socialLinks = [
  { name: "Facebook", icon: "facebook" },
  { name: "Twitter", icon: "twitter" },
  { name: "YouTube", icon: "youtube" },
  { name: "Behance", icon: "behance" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[var(--color-dark-bg)] text-[var(--color-secondary-text)]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {footerColumns.map((column, index) => (
            <div key={index}>
              <h3 className="text-white font-bold text-lg mb-4 uppercase">
                {column.title}
              </h3>
              {column.content && (
                <div className="space-y-2 text-sm">
                  {column.content.map((item, itemIndex) => {
                    // Check if item is email and make it a link
                    if (item.includes("Email:") || item.includes("@")) {
                      const emailMatch = item.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/);
                      if (emailMatch) {
                        const email = emailMatch[1];
                        const prefix = item.replace(email, "");
                        return (
                          <p key={itemIndex}>
                            {prefix}
                            <a
                              href={`mailto:${email}`}
                              className="text-gray-400 hover:text-gray-300 footer-link"
                            >
                              {email}
                            </a>
                          </p>
                        );
                      }
                    }
                    return <p key={itemIndex} className="text-gray-400">{item}</p>;
                  })}
                </div>
              )}
              {column.links && (
                <div className="space-y-2">
                  {column.links.map((link, linkIndex) => (
                    <div key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-400 footer-link"
                      >
                        {link.label}
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}


          <div>
            <h3 className="text-white font-bold text-lg mb-4 uppercase">
              Newsletter
            </h3>
            <form className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-6 py-3 pr-16 bg-[var(--color-input-bg)] text-[var(--color-input-text)] rounded-full focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-gold)]"
              />
              <button
                type="submit"
                aria-label="Submit newsletter"
                className="absolute right-1 top-1/2 -translate-y-1/2 w-10 h-10 bg-[var(--color-primary-gold)] rounded-full flex items-center justify-center hover:bg-[var(--color-primary-gold-dark)] transition-colors text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary-gold)]"
              >
                <BsSend />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-400 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-400 text-center md:text-left">
              Copyright ©{new Date().getFullYear()} All rights reserved |{" "}
              <span className="text-[var(--color-primary-gold)] font-bold">DIRECTGOLD</span>
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="text-white hover:text-[var(--color-primary-gold)] transition-colors"
                  aria-label={social.name}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {social.icon === "facebook" && (
                      <FaFacebook />
                    )}
                    {social.icon === "twitter" && (
                      <FaTwitter />
                    )}
                    {social.icon === "youtube" && (
                      <FaYoutube />
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
