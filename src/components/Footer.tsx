import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiMail,
  FiPhone,
  FiMapPin,
  FiArrowRight,
} from "react-icons/fi";

const Footer = () => {
  const footerLinks = {
    information: [
      { name: "About Us", href: "#about" },
      { name: "Our Portfolio", href: "#" },
      { name: "Design Process", href: "#" },
      { name: "Innovation", href: "#" },
    ],
    support: [
      { name: "Contact Us", href: "#contact" },
      { name: "FAQs", href: "#" },
      { name: "Gallery", href: "#" },
      { name: "Press", href: "#" },
    ],
    social: [
      { name: "Facebook", icon: FiFacebook, href: "#" },
      { name: "Instagram", icon: FiInstagram, href: "#" },
      { name: "Twitter", icon: FiTwitter, href: "#" },
    ],
  };

  return (
    <footer id="contact" className="bg-card pt-16 md:pt-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">
          {/* Brand */}
          <div className="space-y-4">
            <a
              href="#"
              className="font-heading text-2xl font-bold tracking-tight"
            >
              Camel <span className="text-muted-foreground">Stationery</span>
            </a>
            <p className="text-muted-foreground leading-relaxed">
              A portfolio showcasing exceptional stationary design and
              craftsmanship. Celebrating innovation in writing instruments and
              desk essentials.
            </p>
            <div className="flex gap-3">
              {footerLinks.social.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-background rounded-full flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">
              Information
            </h4>
            <ul className="space-y-3">
              {footerLinks.information.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">
              Stay Updated
            </h4>
            <p className="text-muted-foreground mb-4">
              Subscribe to receive updates on new designs and stationary
              innovations.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
              />
              <button type="submit" className="btn-primary w-full">
                Subscribe
                <FiArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-border py-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex flex-wrap gap-6">
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <FiPhone className="w-5 h-5" />
                <span>+1 (234) 567-890</span>
              </a>
              <a
                href="mailto:hello@stationex.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <FiMail className="w-5 h-5" />
                <span>hello@stationex.com</span>
              </a>
              <span className="flex items-center gap-2 text-muted-foreground">
                <FiMapPin className="w-5 h-5" />
                <span>123 Design Street, NY 10001</span>
              </span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} Stationex. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
