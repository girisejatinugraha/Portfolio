import Link from "next/link";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <h2 className="font-titleFont text-5xl font-semibold">Contact Me</h2>
      <p className="max-w-[600px] text-center text-textDark">
      If you have any questions or just want to say hello, I will do my best to reply to you!
      </p>

      <a href="mailto:girisejatinugraha@gmail.com">
        <button className="w-40 h-14 border border-yellow-500 mt-6 font-titleFont text-sm text-yellow-500 tracking-wider rounded-md hover:bg-hoverColor duration-300">
          Email
        </button>
      </a>
    </section>
  );
};

export default Contact; 