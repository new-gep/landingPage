"use client";
import React from "react";
import Image from "next/image";
import { Formik } from "formik";

//humans
import human1 from "../picture/pose_50.png";
import laptop from "../../../../public/images/sales/laptop.png";
import check from "../icon/check.png";
import cloud from "../icon/cloud.svg";
import ping from "../icon/ping.svg";
import signature from "../icon/signature.svg";
import phone from "../picture/phone.svg";
import human from "../picture/human.svg";
import shield from "../icon/shield.svg"

import facebook from "../icon/facebook.png";
import instagram from "../icon/instagram.png";
import linkedin from "../icon/linkedin.png";
import whatsapp from "../icon/whatsapp.png";

export default function Presentation() {
  return (
    <section className="relative" style={{ fontFamily: "Roboto, sans-serif" }}>
      <div id="form" className="flex h-screen w-full flex-col bg-[#f0eaf1]">
        <div className="bg-[#f0eaf1] h-full md:h-5/6">
          {/* Header */}
          <div className="flex h-20 w-full absolute md:relative items-center justify-between rounded-b-3xl bg-black ">
            <div className="px-5">
              <h1 className="text-2xl font-bold text-primary ">New Gep</h1>
            </div>

            <Image
              src="/images/logo/logo-dark.svg"
              alt="logo"
              width={100}
              height={100}
              layout="intrinsic"
              objectFit="contain"
            />
          </div>

          <div className="mt-5 h-full flex md:h-5/6 w-full flex-col items-center bg-[#f0eaf1] md:flex-row justify-center">
            {/* Form */}
            <div className="flex md:h-6/6 justify-center md:w-1/2 md:items-center ">
              <Formik
                initialValues={{
                  name1: "",
                  email: "",
                  phone: "",
                  position: "",
                }}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                {({ handleChange, handleSubmit, values }) => (
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col h-6/6 md:h-4/4 gap-4 rounded-3xl bg-black px-10 py-5 shadow-lg"
                  >
                    <div>
                      <h2 className="text-center font-bold text-primary md:text-4xl">
                        Solicitar Demonstração
                      </h2>
                      <p className="text-center text-gray-500 ">
                        Preencha o formulário abaixo e entraremos em contato:
                      </p>
                    </div>
                    <div className="flex flex-col gap-3">
                      <input
                        type="text"
                        id="name1"
                        name="name1"
                        placeholder="Nome*"
                        className="rounded-full bg-white p-3 text-black"
                        onChange={handleChange}
                        value={values.name1}
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="E-mail Corporativo*"
                        className="rounded-full bg-white p-3 text-black"
                        onChange={handleChange}
                        value={values.email}
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Número de Telefone com DDD ou WhatsApp*"
                        className="rounded-full bg-white p-3 text-black"
                        onChange={handleChange}
                        value={values.phone}
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <select
                        id="position"
                        name="position"
                        className="rounded-full bg-white p-3 text-black"
                        onChange={handleChange}
                        value={values.position}
                      >
                        <option value="" disabled>
                          Selecione seu Cargo*
                        </option>
                        <option value="manager">Gerente</option>
                        <option value="developer">Desenvolvedor</option>
                        <option value="designer">Designer</option>
                      </select>
                    </div>
                    <p className="mt-4 text-center text-sm text-white">
                      Ao enviar este formulário, declaro que li e aceito a{" "}
                      <a href="#" className="text-primary underline">
                        Política de Privacidade
                      </a>
                      .
                    </p>
                    <div className="flex justify-center">
                      <button
                        type="submit"
                        className="w-fit rounded-full border border-primary bg-primary/40 p-3 font-bold text-primary"
                      >
                        Solicitar Demonstração
                      </button>
                    </div>
                  </form>
                )}
              </Formik>
            </div>

            <div className="md:flex hidden h-full md:h-5/6 items-center justify-center md:p-12 duration-700 animate-in fade-in md:w-1/2 ">
              <div className="items-center justify-center flex mb-20 md:mb-0" >
                <Image src={human1} alt="human" className="md:h-full md:w-full md:p-20 h-2/4 w-2/4 " />
              </div>
            </div>
          </div>
        </div>
        <div className="h-1/6 w-full rounded-t-3xl bg-black">
          <div className="text-center p-3">
            <div className="flex flex-col gap-2 justify-between">
              <h1 className="font-bold text-primary flex items-center justify-between"> <Image src={shield} alt="background" className="text-primary bg-primary rounded-full h-8 w-8 p-1 mr-2"/>Lorem ipsum dolor sit amet  <span></span> </h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ex quas voluptatum, fugit </p>
            </div>
            <div>

            </div>
          </div>
        </div>
      </div>

      <div className="relative h-screen w-full bg-black">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0.3) 70%, rgba(0, 0, 0, 0) 100%), url('/images/human/background.gif')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="h-full w-full items-center justify-center md:flex">
          <div className="relative hidden h-full items-center justify-center md:flex md:w-1/2">
            <div className="mb-20 flex w-full flex-col items-center gap-5 md:justify-center">
              <Image
                src={laptop}
                alt="background"
                className="h-full w-full object-cover"
              />
              <button
                onClick={() => {
                  document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
                }}
               className="w-1/2 cursor-pointer rounded-full bg-primary py-2 font-bold text-black transition-all duration-300 hover:scale-105 focus:outline-none"
              >
                Solicitar Demonstração
              </button>
            </div>
          </div>

          <div className="relative flex h-full items-center justify-center md:w-1/2">
            <div className="flex w-full flex-col gap-5 px-5 py-3 ">
              <div className="flex flex-col gap-3">
                <h1 className="text-center text-3xl font-bold text-primary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h1>
                <p className="font-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  sint, similique dolores sapiente consequuntur illo sed modi
                  eveniet dolorum assumenda voluptatum ex quibusdam animi! Quia
                  ipsam pariatur impedit facilis animi.
                </p>
              </div>

              <ul className="flex list-disc flex-col gap-5 text-white">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
                  dolor obcaecati, dolorum soluta minus{" "}
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
                  dolor obcaecati, dolorum soluta minus{" "}
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
                  dolor obcaecati, dolorum soluta minus{" "}
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
                  dolor obcaecati, dolorum soluta minus{" "}
                </li>
              </ul>

              <div className="mt-10 flex items-center justify-center md:hidden">
                <button className="w-1/2 cursor-pointer rounded-full bg-primary py-2 font-bold text-black transition-all duration-300 hover:scale-105 hover:opacity-70 focus:outline-none">
                  Solicitar Demonstração
                </button>
              </div>

              <ul className="flex-column mt-10 flex items-center justify-center gap-3 text-primary">
                <li className="font-semibold">Admissão</li>
                <li className="font-semibold">Demissão</li>
                <li className="font-semibold">Holerite</li>
                <li className="font-semibold">Ponto</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="h-screen bg-primary">
        <div className="flex h-1/4 flex-col items-center justify-center text-center">
          <h1 className="text-3xl font-extrabold text-black md:text-4xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h1>
          <p className="font-light text-black md:w-1/2 md:text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            quaerat molestiae ad totam, accusamus quo accusantium{" "}
          </p>
        </div>
        <div className="flex h-3/4 w-full flex-col items-center gap-4 px-5 md:flex-row md:justify-around">
          <div className="flex flex-col items-center justify-center md:w-1/4 md:gap-5 ">
            <Image
              src={check}
              alt="background"
              className="w-10 transform-gpu object-cover transition-transform duration-300 hover:scale-110 md:h-25 md:w-25"
            />
            <h4 className="px-3 text-center text-2xl font-bold text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            </h4>
            <p className="text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              maiores doloribus facilis praesentium assumenda aliquam explicabo
              qui dicta,{" "}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center  md:w-1/4 md:gap-5 ">
            <Image
              src={check}
              alt="background"
              className="w-10 transform-gpu object-cover transition-transform duration-300 hover:scale-110 md:h-25 md:w-25"
            />
            <h4 className="px-3 text-center text-2xl font-bold text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            </h4>
            <p className="text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              maiores doloribus facilis praesentium assumenda aliquam explicabo
              qui dicta,{" "}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center md:w-1/4 md:gap-5">
            <Image
              src={check}
              alt="background"
              className="w-10 transform-gpu object-cover transition-transform duration-300 hover:scale-110 md:h-25 md:w-25"
            />
            <h4 className="px-3 text-center text-2xl font-bold text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            </h4>
            <p className="text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              maiores doloribus facilis praesentium assumenda aliquam explicabo
              qui dicta,{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="h-screen bg-black md:flex">
        <div className="flex h-full flex-col gap-10 md:w-1/2 md:gap-5">
          <div className="px-5 py-4 text-center font-extrabold text-primary md:text-4xl">
            <h1>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
              natus, architecto doloribus necessitatibus labore et iste
            </h1>
          </div>

          <div className="px-5 text-center">
            <h2 className="font-bold text-white ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
            </h2>
            <p className="px-2 md:px-10">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
              beatae quasi sed animi velit modi dignissimos enim exercitationem
              repellendus nemo! Fuga magni, sit dolores iusto delectus libero
              vel sapiente saepe!
            </p>
          </div>

          <div className="flex w-full flex-col items-center justify-center gap-15 px-10 md:gap-5">
            <div className={"w-4/4 flex items-center justify-center"}>
            <div className="z-10 -mr-5 flex items-center justify-center rounded-full border-2 border-primary bg-primary/90 hover:bg-primary md:-mr-24 md:h-30 md:w-30 transition-colors duration-300">
                <Image
                  src={signature}
                  alt="background"
                  className="w-15 object-cover md:h-15 md:w-15"
                />
              </div>
              <div className="w-5/6 rounded-3xl bg-white py-1 pl-10 shadow shadow-white md:pl-25">
                <p>
                  <span className="font-bold text-black">Assinatura</span>
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti
                </p>
              </div>
            </div>

            <div className={"w-4/4 flex items-center justify-center"}>
              <div className="z-10 -mr-5 flex items-center justify-center rounded-full border-2 border-primary bg-primary/90 hover:bg-primary md:-mr-24 md:h-30 md:w-30 transition-colors duration-300">
                <Image
                  src={ping}
                  alt="background"
                  className="w-15 object-cover md:h-15 md:w-15"
                />
              </div>
              <div className="w-5/6 rounded-3xl bg-white py-1 pl-10 shadow shadow-white md:pl-25">
                <p>
                  <span className="font-bold text-black">Economia</span>
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti
                </p>
              </div>
            </div>

            <div className={"w-4/4 flex items-center justify-center"}>
              <div className="z-10 -mr-5 flex items-center justify-center rounded-full border-2 border-primary bg-primary/90 hover:bg-primary md:-mr-24 md:h-30 md:w-30 transition-colors duration-300">
                <Image
                  src={cloud}
                  alt="background"
                  className="w-15 object-cover md:h-15 md:w-15"
                />
              </div>
              <div className="w-5/6 rounded-3xl bg-white py-1 pl-10 shadow shadow-white md:pl-25">
                <p>
                  <span className="font-bold text-black">Nuvem</span>
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden h-full w-1/2 items-center justify-center md:flex">
          <Image
            src={phone}
            alt="background"
            className="h-4/6 w-4/6 object-cover "
          />
        </div>
      </div>

      <div className="flex md:flex-row flex-col h-screen items-start md:justify-end bg-primary">

        <div className=" flex md:h-5/6 md:w-1/2 items-center justify-center px-3 py-5">
          {" "}
          <Image
            src={human}
            alt="background"
            className="md:h-5/6 md:w-11/12 rounded-3xl bg-white object-cover" // Modificado
          />
        </div>

        <div className="flex h-5/6 md:w-1/2 flex-col items-center md:justify-center gap-3">
          <div className="px-2">
            <h1 className="text-center text-5xl font-bold text-black">
              Lorem ipsum
            </h1>
            <p className="text-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              facilis neque culpa
            </p>
          </div>

          <div>
            <p className="p-5 text-xl md:text-2xl text-black">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur eligendi enim veniam odio! Blanditiis cupiditate
              ratione, expedita rerum earum repellendus unde temporibus,
              explicabo asperiores, quaerat error ut harum animi aut?
            </p>
          </div>

          <div
            className="flex flex-col gap-3
          "
          >
            <h1 className="font-extrabold text-black">Lorem ipsum dolor</h1>
            <div className="flex justify-between gap-2">
              <Image
                src={facebook}
                alt="background"
                className="h-10 w-10 cursor-pointer transition-opacity duration-300 hover:opacity-70"
              />

              <Image
                src={instagram}
                alt="background"
                className="h-10 w-10 cursor-pointer transition-opacity duration-300 hover:opacity-70"
              />

              <Image
                src={linkedin}
                alt="background"
                className="h-10 w-10 cursor-pointer transition-opacity duration-300 hover:opacity-70"
              />
            </div>
          </div>
        </div>

        <div className="h-1/12 absolute bottom-0 left-0 flex w-full bg-black">
          <div className="hidden md:flex md:w-2/6 items-center justify-center">
            <Image
              src="/images/logo/logo-dark.svg"
              alt="logo"
              width={150}
              height={150}
              layout="intrinsic"
              objectFit="contain"
            />
          </div>
          <div className="flex md:w-4/6 items-center justify-center">
            <p className="px-2 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum hic
              dicta aut rem ut voluptatem iste excepturi aperiam et doloribus
              eius distinctio, consequuntur qui, nemo voluptas corporis, aliquid {"\n"}
              <span className="font-bold text-primary">reprehenderit.</span>
            </p>
          </div>
        </div>
      </div>

      <div className="fixed bottom-10 right-5">
        <Image
          src={whatsapp}
          alt="background"
          className="h-15 w-15 cursor-pointer opacity-70 transition-opacity duration-300 hover:opacity-100"
        />
      </div>
    </section>
  );
}
