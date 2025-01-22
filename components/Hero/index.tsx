"use client";
import Image from "next/image";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Hero = () => {


  const validationSchema = Yup.object({
    email: Yup.string()
      .email("E-mail inválido")
      .required("E-mail é obrigatório"),
  });

  const handleSubmit = (values: { email: string }) => {
    const message = `Olá, eu gostaria de conhecer um pouco mais. Meu e-mail é ${values.email}`;
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "5511947893123";

    return `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                🔥 New Gep - Nova Gestão Estratégica de Pessoas
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-primary xl:text-hero ">
                  {/* Soluções Digitais{"   "} */}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-primary dark:before:bg-titlebgdark ">
                  Soluções Digitais
                </span>
              </h1>
              <p className="text-justify">  
                A New Gep é uma Startup que atua no setor de tecnologia, com foco em 
                soluções digitais para Gestão Estratégica de Pessoas. A Nossa 
                missão é simplificar processos, otimizar resultados e transformar 
                a forma como as empresas fazem a gestão dos seus talentos.
              </p>

              <div className="mt-10">
                {/* <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      placeholder="Adicione seu e-mail"
                      className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    />
                    <button
                      aria-label="get started button"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      Conheça
                    </button>
                  </div>
                </form> */}

                <Formik
                  initialValues={{
                    email: "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={(values, { setSubmitting, resetForm }) => {
                    // Gera o link mailto: e abre em uma nova janela/aba
                    const whatsappLink = handleSubmit(values);
                    window.open(whatsappLink, "_blank");
                   
                    // Opcional: você pode limpar o formulário e definir um estado de sucesso/erro aqui
                    resetForm();
                    // setSubmitting(false);
                  }}
                >
                  {({ isSubmitting }) => (
                    <Form>
                      <div className="flex flex-wrap gap-5">
                        {/* <input
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          type="text"
                          placeholder="Adicione seu e-mail"
                          className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                        /> */}
                        <div className="flex flex-col">
                          <Field
                              type="text"
                              name="email"
                              placeholder="Adicione seu e-mail"
                              className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                            />
                            
                            <ErrorMessage
                              name="email"
                              component="p"
                              className="text-red-500 text-sm mt-1 ml-5"
                            />
                            
                        </div>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          aria-label="get started button"
                          className="flex text-center items-center justify-center rounded-full bg-black w-28 px-2 h-12 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                        >
                          Conheça
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>

                <p className="mt-5 text-black dark:text-white">
                  Em breve entramos em contato
                </p>
              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <div className=" relative aspect-[700/444] w-full">
                  <Image
                    className="shadow-solid-l dark:hidden"
                    src="/images/hero/hero-light.svg"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="hidden shadow-solid-l dark:block"
                    src="/images/hero/hero-dark.svg"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
