"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Contact = () => {
  // Esquema de validação com Yup
  const validationSchema = Yup.object({
    name: Yup.string().required("Nome é obrigatório"),
    email: Yup.string()
      .email("E-mail inválido")
      .required("E-mail é obrigatório"),
    subject: Yup.string().required("Assunto é obrigatório"),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Apenas números são permitidos")
      .required("Celular é obrigatório"),
    message: Yup.string().required("Mensagem é obrigatória"),
    consent: Yup.boolean().oneOf(
      [true],
      "Você deve aceitar os termos e condições"
    ),
  });

  // Função para gerar o link mailto: (modificada para receber os valores do Formik)
  const generateMailtoLink = (values) => {
    const defaultMessage = `${values.message} \n\n ${values.name} \n ${values.phone} \n ${values.email}`;
    const encodedSubject = encodeURIComponent(values.subject);
    const encodedMessage = encodeURIComponent(defaultMessage);
    const email = 'michelle@newgep.com.br'; // Coloque o e-mail de destino aqui

    // Link direto para compor um novo e-mail no Gmail
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodedSubject}&body=${encodedMessage}`;
  };

  return (
    <>
      {/* */}
      <section id="support" className="px-4 md:px-8 2xl:px-0">
        <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
          <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]"></div>
          <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
            <Image
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              fill
            />
            <Image
              src="./images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
              fill
            />
          </div>

          <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black md:w-3/5 lg:w-3/4 xl:p-15"
            >
              <h2 className="mb-15 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Envie uma mensagem
              </h2>

              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  subject: "",
                  phone: "",
                  message: "",
                  consent: false,
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  // Gera o link mailto: e abre em uma nova janela/aba
                  const mailtoLink = generateMailtoLink(values);
                  window.open(mailtoLink);

                  // Opcional: você pode limpar o formulário e definir um estado de sucesso/erro aqui
                  // resetForm();
                  // setSubmitting(false);
                }}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                      <div className="w-full lg:w-1/2">
                        <Field
                          type="text"
                          name="name"
                          placeholder="Nome completo"
                          className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                        />
                        <ErrorMessage
                          name="name"
                          component="p"
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>

                      <div className="w-full lg:w-1/2">
                        <Field
                          type="email"
                          name="email"
                          placeholder="E-mail"
                          className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                        />
                        <ErrorMessage
                          name="email"
                          component="p"
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>
                    </div>

                    <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                      <div className="w-full lg:w-1/2">
                        <Field
                          type="text"
                          name="subject"
                          placeholder="Assunto"
                          className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                        />
                        <ErrorMessage
                          name="subject"
                          component="p"
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>
                      <div className="w-full lg:w-1/2">
                        <Field
                          type="text"
                          name="phone"
                          placeholder="Celular"
                          className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                        />
                        <ErrorMessage
                          name="phone"
                          component="p"
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>
                    </div>

                    <div className="mb-11.5 flex">
                      <div className="w-full">
                        <Field
                          as="textarea"
                          name="message"
                          placeholder="Mensagem"
                          rows={4}
                          className="w-full border-b border-stroke bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                        />
                        <ErrorMessage
                          name="message"
                          component="p"
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 xl:justify-between ">
                      <div className="mb-4 flex md:mb-0">
                        <Field
                          type="checkbox"
                          name="consent"
                          id="consent"
                          className="peer sr-only"
                        />
                        <label
                          htmlFor="consent"
                          className="border-gray-300 bg-gray-100 text-blue-600 dark:border-gray-600 dark:bg-gray-700 group mt-2 flex h-5 min-w-[20px] items-center justify-center rounded peer-checked:bg-primary cursor-pointer"
                        >
                          <svg
                            className="opacity-0 peer-checked:group-[]:opacity-100"
                            width="10"
                            height="8"
                            viewBox="0 0 10 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M9.70704 0.792787C9.89451 0.980314 9.99983 1.23462 9.99983 1.49979C9.99983 1.76495 9.89451 2.01926 9.70704 2.20679L4.70704 7.20679C4.51951 7.39426 4.26521 7.49957 4.00004 7.49957C3.73488 7.49957 3.48057 7.39426 3.29304 7.20679L0.293041 4.20679C0.110883 4.01818 0.0100885 3.76558 0.0123669 3.50339C0.0146453 3.24119 0.119814 2.99038 0.305222 2.80497C0.490631 2.61956 0.741443 2.51439 1.00364 2.51211C1.26584 2.50983 1.51844 2.61063 1.70704 2.79279L4.00004 5.08579L8.29304 0.792787C8.48057 0.605316 8.73488 0.5 9.00004 0.5C9.26521 0.5 9.51951 0.605316 9.70704 0.792787Z"
                              fill="white"
                            />
                          </svg>
                        </label>
                        <label
                          htmlFor="consent"
                          className="flex max-w-[425px] cursor-pointer select-none pl-5"
                        >
                          Ao selecionar o check, você concorda em usar nossos
                          termos do “Formulário” e consente o uso de cookies no
                          navegador.
                        </label>
                      </div>
                      <ErrorMessage
                        name="consent"
                        component="p"
                        className="text-red-500 text-sm mt-1"
                      />

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        aria-label="send message"
                        className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark"
                      >
                        Enviar
                        <svg
                          className="fill-white"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                            fill=""
                          />
                        </svg>
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 2, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full md:w-2/5 md:p-7.5 lg:w-[26%] xl:pt-15"
            >
              <h2 className="mb-12.5 text-3xl font-semibold text-black dark:text-white :text-sectiontitle2">
                Encontre-nos
              </h2>

              <div className="5 mb-7">
                <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  Nossa Localização
                </h3>
                <p>Rua Tito 479, Primeiro Andar, SP, São Paulo</p>
              </div>
              <div className="5 mb-7">
                <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  E-mail
                </h3>
                <p>
                  <a href="#">michelle@newgep.com.br</a>
                </p>
              </div>
              <div>
                <h4 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  Celular
                </h4>
                <p>
                  <a href="#">+55 (11) 9 4789-3123</a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* */}
    </>
  );
};

export default Contact;