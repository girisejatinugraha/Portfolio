import { useRef } from "react";
import { logo } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { TbBrandGithub } from "react-icons/tb";
import {
  SlSocialLinkedin,
  SlSocialInstagram,
} from "react-icons/sl";
import { MdOutlineClose } from "react-icons/md";
import { motion } from "framer-motion";

const Navbar = () => {
  const ref = useRef<string | any>("");
  const [show, setShow] = useState(false);
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setShow(false);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
    // Update the class name of the clicked link
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  function handleClick(e: any) {
    if (e.target.contains(ref.current)) {
      // do something with myRef.current
      setShow(false);
    }
  }
  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4">
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between ">
        {/* ============ Logo Start here ============ */}
        <Link href="/">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
          >
            <Image className="w-20" src={logo} alt="logo" />
          </motion.div>
        </Link>
        {/* ============ Logo End here ============== */}
        {/* ============ ListItem Start here ======== */}
        <div className="hidden mdl:inline-flex items-center gap-7">
          <ul className="flex text-[13px] gap-7">
            <Link
              className="flex items-center gap-1 font-medium text-textDark hover:text-yellow-500 cursor-pointer duration-300 nav-link"
              href="#home"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1 }}
              >
                Home
              </motion.li>
            </Link>

            <Link
              className="flex items-center gap-1 font-medium text-textDark hover:text-yellow-500 cursor-pointer duration-300 nav-link"
              href="#about"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}
              >
                About
              </motion.li>
            </Link>
            <Link
              className="flex items-center gap-1 font-medium text-textDark hover:text-yellow-500 cursor-pointer duration-300 nav-link"
              href="#education"
              onClick={handleScroll}
              >
                <motion.li
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.3, ease: "easeIn" }}
                >
                  Education & Experience
                </motion.li>
              </Link>
            {/*<Link
              className="flex items-center gap-1 font-medium text-textDark hover:text-yellow-500 cursor-pointer duration-300 nav-link"
              href="#experience"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.2 }}
              >
                Experience
              </motion.li>
            </Link>*/}
            <Link
              className="flex items-center gap-1 font-medium text-textDark hover:text-yellow-500 cursor-pointer duration-300 nav-link"
              href="#project"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.3 }}
              >
                Project
              </motion.li>
            </Link>
            <Link
              className="flex items-center gap-1 font-medium text-textDark hover:text-yellow-500 cursor-pointer duration-300 nav-link"
              href="#contact"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.4 }}
              >
                Contact
              </motion.li>
            </Link>
          </ul>
          <a href="https://wa.me/6282115623877" target="_blank">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="px-4 py-2 rounded-md text-yellow-500 text-[13px] border border-yellow-500 hover:bg-hoverColor duration-300"
            >
              WhatsApp
            </motion.button>
          </a>
        </div>
        {/* ============== Small Icon Start here =========== */}
        <div
          onClick={() => setShow(true)}
          className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-yellow-500 cursor-pointer overflow-hidden group"
        >
          <span className="w-full h-[2px] bg-yellow-500 inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-yellow-500 inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-yellow-500 inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>
        {show && (
          <div
            ref={(node) => (ref.current = node)}
            onClick={handleClick}
            className="absolute mdl:hidden top-0 right-0 w-full h-screen  bg-black bg-opacity-50 flex flex-col items-end"
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="w-[80%] h-full overflow-y-scroll scrollbarHide bg-[#112240] flex flex-col items-center px-4 py-10 relative"
            >
              <MdOutlineClose
                onClick={() => setShow(false)}
                className="text-3xl text-yellow-500 cursor-pointer hover:text-red-500 absolute top-4 right-4"
              />
              <div className="flex flex-col items-center gap-7">
                <ul className="flex flex-col text-base gap-7">
                  <Link
                    className="flex items-center gap-1 font-medium text-textDark hover:text-yellow-500 cursor-pointer duration-300 nav-link"
                    href="#home"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.1, ease: "easeIn" }}
                    >
                      Home
                    </motion.li>
                  </Link>

                  <Link
                    className="flex items-center gap-1 font-medium text-textDark hover:text-yellow-500 cursor-pointer duration-300 nav-link"
                    href="#about"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.2, ease: "easeIn" }}
                    >
                      About
                    </motion.li>
                  </Link>
                  <Link
                    className="flex items-center gap-1 font-medium text-textDark hover:text-yellow-500 cursor-pointer duration-300 nav-link"
                    href="#education"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.3, ease: "easeIn" }}
                    >
                      Education & Experience
                    </motion.li>
                  </Link>
                 {/*===== <Link
                    className="flex items-center gap-1 font-medium text-textDark hover:text-yellow-500 cursor-pointer duration-300 nav-link"
                    href="#experience"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.3, ease: "easeIn" }}
                    >
                      Experience
                    </motion.li>
                  </Link>*/}
                  <Link
                    className="flex items-center gap-1 font-medium text-textDark hover:text-yellow-500 cursor-pointer duration-300 nav-link"
                    href="#project"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.4, ease: "easeIn" }}
                    >
                      Project
                    </motion.li>
                  </Link>
                  <Link
                    className="flex items-center gap-1 font-medium text-textDark hover:text-yellow-500 cursor-pointer duration-300 nav-link"
                    href="#contact"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.5, ease: "easeIn" }}
                    >
                      Contact
                    </motion.li>
                  </Link>
                </ul>
                <a href="https://wa.me/6282115623877" target="_blank">
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, ease: "easeIn" }}
                    className="w-32 h-10 rounded-md text-yellow-500 text-[13px] border border-yellow-500 hover:bg-hoverColor duration-300"
                  >
                    WhatsApp
                  </motion.button>
                </a>
                <div className="flex gap-4">
                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, ease: "easeIn" }}
                    href="https://github.com/girisejatinugraha"
                    target="_blank"
                  >
                    <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-yellow-500 text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-yellow-500 cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <TbBrandGithub />
                    </span>
                  </motion.a>
                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9, ease: "easeIn" }}
                    href="https://www.linkedin.com/in/giri-sejati-nugraha/"
                    target="_blank"
                  >
                    <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-yellow-500n text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-yellow-500 cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <SlSocialLinkedin />
                    </span>
                  </motion.a>
                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, ease: "easeIn" }}
                    href="https://www.instagram.com/gs.nugraha16/"
                    target="_blank"
                  >
                    <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-yellow-500 text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-yellow-500 cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <SlSocialInstagram />
                    </span>
                  </motion.a>
                </div>
              </div>

              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, ease: "easeIn" }}
                className="text-sm w-72 tracking-widest text-yellow-500 text-center mt-4"
                href="mailto:girisejatinugraha@gmail.com"
              >
                <p>girisejatinugraha@gmail.com</p>
              </motion.a>
            </motion.div>
          </div>
        )}
        {/* ============== Small Icon End here ============= */}

        {/* ============ ListItem End here ========== */}
      </div>
    </div>
  );
};

export default Navbar;
