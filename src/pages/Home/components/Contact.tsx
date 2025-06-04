import Container from "@/components/helpers/Container";
import { useTranslation } from "react-i18next";
import { useState, type FormEvent } from "react";
import axios from "axios";

import school_img from "../assets/about_school.png";
import toast from "react-hot-toast";

const Contact = () => {
  const { t } = useTranslation();

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    axios
      .post("https://bfs-api-inky.vercel.app/messages", {
        firstName: fname,
        lastName: lname,
        text: number,
      })
      .then(() => {
        toast.success("Message send ");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <section>
      <Container>
        <h1 className="relative font-bold text-8xl text-center text-bfs-gray">
          {t("pages.home.contact.main_title")}
          <span className="absolute text-4xl pointer-events-none left-1/2 -translate-x-1/2 translate-y-18 text-bfs-black">
            {t("pages.home.contact.main_title")}
          </span>
        </h1>
        <div className="bg-bfs-blue rounded-2xl p-12 mt-20 flex gap-[114px] max-xl:flex-col max-xl:items-center">
          <div className="text-white max-md:hidden">
            <h3 className="font-medium text-4xl">
              {t("pages.home.contact.title")}
            </h3>
            <ul className="flex flex-col mt-7 text-2xl gap-10">
              <li className="before:content-[''] before:size-5 before:bg-bfs-pink relative before:absolute pl-8 before:-translate-x-8">
                {t("pages.home.contact.address")}
              </li>
              <li className="before:content-[''] before:size-5 before:bg-bfs-pink relative before:absolute pl-8 before:-translate-x-8">
                {t("pages.home.contact.phone")}
              </li>
              <li className="before:content-[''] before:size-5 before:bg-bfs-pink relative before:absolute pl-8 before:-translate-x-8">
                {t("pages.home.contact.phone2")}
              </li>
            </ul>
            <img
              src={school_img}
              alt="School"
              className="h-[338px] min-w-[485px] object-cover mt-10"
            />
          </div>
          <form className="text-white" onSubmit={handleSubmit}>
            <h3 className="font-medium text-4xl">
              {t("pages.home.contact.title2")}
            </h3>
            <p className="max-w-[330px] mt-7">{t("pages.home.contact.desc")}</p>
            <input
              className="bg-bfs-white block h-[52px] rounded outline-none text-bfs-black pl-3 mt-5 w-[400px] max-md:max-w-[400px] max-md:w-full"
              type="text"
              placeholder={t("pages.home.contact.fname")}
              onChange={(e) => setFname(e.target.value)}
              value={fname}
              required
            />
            <input
              className="bg-bfs-white block h-[52px] rounded outline-none text-bfs-black pl-3 mt-5 w-[400px] max-md:max-w-[400px] max-md:w-full"
              type="text"
              placeholder={t("pages.home.contact.lname")}
              onChange={(e) => setLname(e.target.value)}
              value={lname}
              required
            />
            <textarea
              className="bg-bfs-white w-[400px] text-bfs-black outline-none rounded h-[262px] mt-5 pl-3 pt-5 block max-md:max-w-[400px] max-md:w-full"
              placeholder={t("pages.home.contact.number")}
              onChange={(e) => setNumber(e.target.value)}
              value={number}
              required
            ></textarea>
            <button
              type="submit"
              className="bg-bfs-white text-bfs-black font-medium text-2xl py-3 px-9 rounded mt-6 ml-auto block"
            >
              Send
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
