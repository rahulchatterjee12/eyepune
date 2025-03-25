import Link from "next/link";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

const SocialLinks = () => {
  const socialLinks = [
    {
      href: "https://www.instagram.com/eyepune/",
      icon: (
        <FaInstagram className="text-pink-500 hover:text-pink-600 transition-all" />
      ),
      label: "Instagram",
    },
    {
      href: "https://www.linkedin.com/company/eyepune/posts/?feedView=all",
      icon: (
        <FaLinkedin className="text-blue-600 hover:text-blue-700 transition-all" />
      ),
      label: "LinkedIn",
    },
    {
      href: "https://www.facebook.com/EyEPunE?locale=en_GB#",
      icon: (
        <FaFacebook className="text-blue-500 hover:text-blue-600 transition-all" />
      ),
      label: "Facebook",
    },
  ];

  return (
    <div className="flex space-x-6 justify-center py-4">
      {socialLinks.map((social, index) => (
        <Link
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-2xl cursor-pointer">{social.icon}</span>
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
