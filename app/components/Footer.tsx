import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
type ColumnProps = {
  title: string;
  links: Array<string>;
};
const FooterColumn = ({ title, links }: ColumnProps) => (
  <div className="footer_column">
    {title}
    <ul className="flex flex-col gap-2 font-normal">
      {links.map((link) => (
        <Link href={"/"} key={link}>
          {link}
        </Link>
      ))}
    </ul>
  </div>
);
const Footer = () => {
  return (
    <footer className="flexStart footer">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex items-start flex-col">
          <Image
            src={"/logo-purple.svg"}
            alt="Flexxible"
            height={38}
            width={115}
          />
          <p className="text-start text-sm font-normal mt-5 max-w-xs">
            Flexxible is the world's largest platform to share your Project
          </p>
        </div>
        <div className="flex flex-wrap gap-12">
          {/* 1st Column */}
          <FooterColumn
            title={footerLinks[0].title}
            links={footerLinks[0].links}
          />
          {/* 2nd Column */}
          <div className="flex-1 flex flex-col gap-4">
            <FooterColumn
              title={footerLinks[1].title}
              links={footerLinks[1].links}
            />
            <FooterColumn
              title={footerLinks[2].title}
              links={footerLinks[2].links}
            />
          </div>
          {/* 3rd Column */}
          <FooterColumn
            title={footerLinks[3].title}
            links={footerLinks[3].links}
          />
          {/* 4th Column */}
          <div className="flex-1 flex flex-col gap-4">
            <FooterColumn
              title={footerLinks[4].title}
              links={footerLinks[4].links}
            />
            <FooterColumn
              title={footerLinks[5].title}
              links={footerLinks[5].links}
            />
          </div>
          {/* 5th Column */}
          <FooterColumn
            title={footerLinks[5].title}
            links={footerLinks[5].links}
          />
        </div>
      </div>
      <div className="flexBetween footer_copyright">
        <p>@ 2023 Flexibble. All Rights Reserved</p>
        <p className="text-gray">
          <span className="text-black font-semibold">10, 214</span>
          Projects Submitted
        </p>
      </div>
    </footer>
  );
};

export default Footer;
