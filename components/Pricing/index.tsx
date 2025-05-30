"use client";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const messageClient = "Olá! Gostaria de saber mais sobre o plano Client.";
const whatsappClientLink = `https://wa.me/5511984051096?text=${encodeURIComponent(messageClient)}`;

const messageCompany = "Olá! Gostaria de saber mais sobre o plano Client.";
const whatsappCompanyLink = `https://wa.me/5511984051096?text=${encodeURIComponent(messageCompany)}`;

const Pricing = () => {
  return (
    <>
      <div id="price" className="mb-25"></div>
      {/* <!-- ===== Pricing Table Start ===== --> */}
      <section className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `Plano e Preços`,
                subtitle: `Plano Client`,
                description: `Nosso plano Client é ideal para empresas únicas e sem filiais,
                 que buscam otimizar seus processos de forma prática e eficiente. 
                 Com uma estrutura de preços acessível e adaptada para operações centralizadas, 
                 oferecemos soluções sob medida que atendem às necessidades exclusivas de negócios 
                 independentes, garantindo alta qualidade e resultados mensuráveis.`,
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        </div>

        <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="absolute -bottom-15 -z-1 h-full w-full">
            <Image
              fill
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap xl:gap-12.5">
            {/* <!-- Pricing Item --> */}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                R$25{" "}
                <span className="text-regular text-waterloo dark:text-manatee">
                  /mensal
                </span>
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                Pacote Mensal
              </h4>
              <p>O custo é de apenas R$25 mensais por colaborador.</p>
              <p className="mt-2 text-xs text-primary">Acima de 10 colaboradores <br/> temos melhores condições</p>
              <div className="mt-9 border-t border-stroke pt-9 dark:border-strokedark">
                <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                  Serviços
                </h4>
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      Admissão Digital
                    </li>
                    <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      Demissão Digital
                    </li>
                    <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      Holerite Digital
                    </li>
                    <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      Ponto Digital
                    </li>
                    <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      Saúde Ocupacional
                    </li>
                </ul>
              </div>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                  Plataformas
                </h4>
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Dashboard
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Aplicativo do colaborador
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Suporte
                  </li>
                </ul>
              </div>

              <button
                aria-label="Get the Plan button"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
              >
                <a href={whatsappClientLink} className="duration-300 group-hover/btn:pr-2">
                  Obter o Plano
                </a>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>

            {/* <!-- Pricing Item --> */}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <div className="absolute -right-3.5 top-7.5 -rotate-90 rounded-bl-full rounded-tl-full bg-primary px-4.5 py-1.5 text-metatitle font-medium uppercase text-black">
                popular
              </div>

              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                $20{" "}
                <span className="text-regular text-waterloo dark:text-manatee">
                  /trimestral
                </span>
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                Pacote Trimestral
              </h4>
              <p>O custo é de apenas R$20 mensais por colaborador.</p>
              <p className="mt-2 text-xs text-primary">Acima de 10 colaboradores <br/> temos melhores condições</p>
              <div className="mt-9 border-t border-stroke pt-9 dark:border-strokedark">
                <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                  Serviços
                </h4>
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      Admissão Digital
                    </li>
                    <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      Demissão Digital
                    </li>
                    <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      Holerite Digital
                    </li>
                    <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      Ponto Digital
                    </li>
                    <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      Saúde Ocupacional
                    </li>
                </ul>
              </div>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                  Plataformas
                </h4>
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Dashboard
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Aplicativo do colaborador
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Suporte
                  </li>
                </ul>
              </div>

              <button
                aria-label="Get the Plan button"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
              >
                <a href={whatsappClientLink} className="duration-300 group-hover/btn:pr-2">
                  Obter o Plano
                </a>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>

            {/* <!-- Pricing Item --> */}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                R$15{" "}
                <span className="text-regular text-waterloo dark:text-manatee">
                  /anual
                </span>
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                Pacote Anual
              </h4>
              <p>O custo é de apenas R$15 mensais por colaborador.</p>
              <p className="mt-2 text-xs text-primary">Acima de 10 colaboradores <br/> temos melhores condições</p>
              <div className="mt-9 border-t border-stroke pt-9 dark:border-strokedark">
                <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                  Serviços
                </h4>
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      Admissão Digital
                    </li>
                    <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      Demissão Digital
                    </li>
                    <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      Holerite Digital
                    </li>
                    <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      Ponto Digital
                    </li>
                    <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      Saúde Ocupacional
                    </li>
                </ul>
              </div>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                  Plataformas
                </h4>
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Dashboard
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Aplicativo do colaborador
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Suporte
                  </li>
                </ul>
              </div>

              <button
                aria-label="Get the Plan button"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
              >
                <a href={whatsappClientLink} className="duration-300 group-hover/btn:pr-2">
                  Obter o Plano
                </a>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top mx-auto text-center mt-10">
            <SectionHeader
              headerInfo={{
                subtitle: `Plano Company`,
                description: `Nosso plano é especialmente desenvolvido para empresas com filiais, proporcionando ferramentas 
                e soluções integradas que facilitam a gestão e o controle de operações em múltiplas unidades. Com uma estrutura 
                de preços flexível e escalável, oferecemos suporte para empresas que precisam centralizar informações e otimizar 
                processos entre várias localidades, garantindo consistência e eficiência em toda a rede de filiais.`,
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        </div>

        <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="absolute -bottom-15 -z-1 h-full w-full">
            <Image
              fill
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap xl:gap-12.5">
            {/* <!-- Pricing Item --> */}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                R$20{" "}
                <span className="text-regular text-waterloo dark:text-manatee">
                  /mensal
                </span>
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                Pacote Mensal
              </h4>
              <p>O custo é de apenas R$20 mensais por colaborador.</p>
              <p className="mt-2 text-xs text-primary">Acima de 10 colaboradores <br/> temos melhores condições</p>

              <div className="mt-9 border-t border-stroke pt-9 dark:border-strokedark">
                <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                  Serviços
                </h4>
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      Admissão Digital
                    </li>
                    <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      Demissão Digital
                    </li>
                    <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      Holerite Digital
                    </li>
                    <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      Ponto Digital
                    </li>
                    <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      Saúde Ocupacional
                    </li>
                </ul>
              </div>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                  Plataformas
                </h4>
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Dashboard
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Aplicativo do colaborador
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Suporte
                  </li>
                </ul>
              </div>

              <button
                aria-label="Get the Plan button"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
              >
                <a href={whatsappCompanyLink} className="duration-300 group-hover/btn:pr-2">
                  Obter o Plano
                </a>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>

            {/* <!-- Pricing Item --> */}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <div className="absolute -right-3.5 top-7.5 -rotate-90 rounded-bl-full rounded-tl-full bg-primary px-4.5 py-1.5 text-metatitle font-medium uppercase text-black">
                popular
              </div>

              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                $16{" "}
                <span className="text-regular text-waterloo dark:text-manatee">
                  /trimestral
                </span>
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                Pacote Trimestral
              </h4>
              <p>O custo é de apenas R$16 mensais por colaborador.</p>
              <p className="mt-2 text-xs text-primary">Acima de 10 colaboradores <br/> temos melhores condições</p>
              <div className="mt-9 border-t border-stroke pt-9 dark:border-strokedark">
                <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                  Serviços
                </h4>
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      Admissão Digital
                    </li>
                    <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      Demissão Digital
                    </li>
                    <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      Holerite Digital
                    </li>
                    <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      Ponto Digital
                    </li>
                    <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      Saúde Ocupacional
                    </li>
                </ul>
              </div>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                  Plataformas
                </h4>
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Dashboard
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Aplicativo do colaborador
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Suporte
                  </li>
                </ul>
              </div>

              <button
                aria-label="Get the Plan button"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
              >
                <span className="duration-300 group-hover/btn:pr-2">
                  Obter o Plano
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>

            {/* <!-- Pricing Item --> */}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                R$13{" "}
                <span className="text-regular text-waterloo dark:text-manatee">
                  /anual
                </span>
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                Pacote Anual
              </h4>
              <p>O custo é de apenas R$13 mensais por colaborador.</p>
              <p className="mt-2 text-xs text-primary">Acima de 10 colaboradores <br/> temos melhores condições</p>
              <div className="mt-9 border-t border-stroke pt-9 dark:border-strokedark">
                <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                  Serviços
                </h4>
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      Admissão Digital
                    </li>
                    <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      Demissão Digital
                    </li>
                    <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      Holerite Digital
                    </li>
                    <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      Ponto Digital
                    </li>
                    <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                      Saúde Ocupacional
                    </li>
                </ul>
              </div>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                  Plataformas
                </h4>
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Dashboard
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Aplicativo do colaborador
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Suporte
                  </li>
                </ul>
              </div>

              <button
                aria-label="Get the Plan button"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
              >
                <span className="duration-300 group-hover/btn:pr-2">
                  Obter o Plano
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Pricing Table End ===== --> */}
    </>
  );
};

export default Pricing;
