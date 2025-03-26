import React from "react";
import Image from "next/image";
import Link from "next/link";

const contactInfo = [
  "Always Here for You",
  "Call Us: 16469 (9am-9pm, Everyday)",
  "Email Us: queries@acilogistics.net",
  "ACI SHWAPNO E-COMMERCE LIMITED",
];

const infoLinks = [
  { href: "/office-address", label: "Office Address" },
  { href: "/shipping-returns", label: "Shipping & Returns" },
  { href: "/about", label: "About Us" },
  { href: "/terms-condition", label: "Terms & Condition" },
];

const customerServiceLinks = [{ href: "/contact", label: "Contact Us" }];

const paymentMethods = [
  {
    src: "/assets/home/payment-methods.png",
    alt: "Payment Methods",
    width: 300,
    height: 80,
  },
];

const ResponsiveFooter = () => {
  return (
    <footer className="py-20 bg-[url(/assets/background/footer-img.png)] bg-[#133E87] bg-cover object-cover">
      <div className="container mx-auto">
        <div className="flex justify-between gap-[30px] flex-col sm:flex-row flex-wrap w-full">
          <div className="w-full sm:w-[25%]">
            <Image
              src={"/shwapno_logo.png"}
              alt="TabseerShop logo"
              width={120}
              height={80}
            />

            {/* Contact info */}
            <div className="flex flex-col mt-5">
              {contactInfo.map((info, i) => (
                <p key={i}>{info}</p>
              ))}
            </div>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-[1.2rem] font-semibold text-[#424242] mb-2">
              Information
            </h3>
            <div className="flex text-black flex-col gap-[10px]">
              {infoLinks.map((link, i) => (
                <Link key={i} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* customer Service Links */}
          <div>
            <h3 className="text-[1.2rem] font-semibold text-[#424242] mb-2">
              Customer Service
            </h3>
            <div className="flex text-black flex-col gap-[10px]">
              {customerServiceLinks.map((link, i) => (
                <Link key={i} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* paymentMethods */}
          <div>
            <h3 className="text-[1.2rem] font-semibold text-[#424242] mb-2">
              Pay With
            </h3>
            <div className="flex text-black flex-col gap-[10px]">
              {paymentMethods.map((method, i) => (
                <Image
                  key={i}
                  src={method.src}
                  alt={method.alt}
                  width={method.width}
                  height={method.height}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ResponsiveFooter;
