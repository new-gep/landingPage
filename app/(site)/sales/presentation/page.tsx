"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Formik } from "formik";
import { Default } from "@/api/post/lead";

//humans
import human1 from "../picture/pose_50.png";
import laptop from "../../../../public/images/sales/laptop.png";
import check from "../icon/check.png";
import close from "../icon/close.svg";
import cloud from "../icon/chat.svg";
import ping from "../icon/send.svg";
import policy from "../icon/policy.svg";
import signature from "../icon/signature.svg";
import phone from "../picture/phone.svg";
import human from "../picture/human.svg";
import shield from "../icon/shield.svg";

import facebook from "../icon/facebook.png";
import instagram from "../icon/instagram.png";
import linkedin from "../icon/linkedin.png";
import whatsapp from "../icon/whatsapp.png";

// Defina o tipo correto para os valores do formulário
type FormValues = {
  name: string;
  email: string;
  phone: string;
  role: string;
};

export default function Presentation() {
  const [isCadastre, setIsCadastre] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const validate = (values: FormValues) => {
    const errors: Partial<FormValues> = {};

    if (!values.name) {
      errors.name = "Obrigatório";
    } else {
      if (values.name.length < 2) {
        errors.name = "Nome deve conter mais de 2 caracteres";
      }
    }

    if (!values.email) {
      errors.email = "Obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Endereço de email inválido";
    }

    if (!values.phone) {
      errors.phone = "Obrigatório";
    } else if (!/^\(\d{2}\) \d{4,5}-\d{4}$/.test(values.phone)) {
      errors.phone = "Número de telefone inválido";
    }

    if (!values.role) {
      errors.role = "Obrigatório";
    }

    return errors;
  };

  const handleSubmit = async (
    values: FormValues,
    { resetForm }: { resetForm: () => void },
  ) => {
    const data = {
      name: values.name,
      email: values.email,
      phone: values.phone.replace(/\D/g, ""),
      role: values.role,
    };
    const response = await Default(data);
    if (response.status === 201) {
      setIsCadastre(true);
      resetForm();
    } else {
      console.log("Erro ao enviar lead");
    }
  };

  return (
    <section className="relative" style={{ fontFamily: "Roboto, sans-serif" }}>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <div className="relative h-full w-full lg:h-3/4 lg:w-3/4 lg:rounded-xl bg-white p-5 shadow-lg overflow-y-auto">
            <button
              className="absolute right-2 top-2 text-black"
              onClick={() => setIsModalOpen(false)}
            >
              <Image
                src={close}
                alt="background"
                className="w-10 transform-gpu object-cover transition-transform duration-300 hover:scale-110"
              />
            </button>
            <div className="flex items-center gap-2">
              {/* <Image src={policy} alt="policy" className="w-10 hidden " /> */}
              <h2 className="text-xl text-black font-bold">Política de Privacidade</h2>
            </div>
            <div className="px-2 lg:px-10 mt-10 text-justify flex flex-col gap-5">
              <p className="mt-2">
                A New Gep preza pela transparência quanto aos dados cadastrados no
                nosso sistema e nos preocupamos com sua privacidade e proteção.
                Sendo assim, você precisa conhecer e estar de acordo com a nossa
                Política de Privacidade, pois nela você vai encontrar informações
                claras sobre a coleta, uso, tratamento, armazenamento e proteção
                dos seus dados. Esta política se aplica a todos os nossos produtos
                e serviços, logo, ao utilizá-los você concorda com as regras
                estabelecidas conforme as definições abaixo. No âmbito deste
                documento, os termos e expressões a seguir destacados têm os
                seguintes significados:
              </p>
              <p className="mt-2">
                <strong>“Dados Pessoais”:</strong> são informações relacionadas à pessoa natural identificada ou identificável. Podem incluir, por exemplo, nome, endereço, e-mail, telefone, endereço IP e dados de geolocalização.
              </p>
              <p className="mt-2">
                <strong>“Cookies”:</strong> são pequenos arquivos criados por sites visitados e que são salvos no computador do usuário, por meio do navegador. Um cookie é um dado que o website solicita ao seu navegador para armazenar no seu computador ou dispositivo móvel. O cookie permite que o website “lembre” suas ações ou preferências ao longo do tempo.
              </p>
              <p className="mt-2">
                <strong>“Web Beacons”:</strong> os sinalizadores da web (também conhecidos como web bugs ou web beacons) são pequenas sequências de código que permitem a entrega de uma imagem gráfica em uma página da web com o objetivo de transferir dados de volta para nós.
              </p>
              <p className="mt-2">
                <strong>“PROFILER”:</strong> é um software de pesquisa, com base em métodos estatísticos de correlações, análises de variância e clusters para mapeamento de perfil.
              </p>
              <p className="mt-2">
                <strong>“Gestão”:</strong> software de automação de gestão de pessoas.
              </p>
              <p className="mt-2">
                <strong>“Jobs”:</strong> plataforma de recrutamento e seleção.
              </p>
              <p className="mt-2">
                <strong>“Controlador”:</strong> pessoa natural ou jurídica, de direito público ou privado, a quem competem as decisões referentes ao tratamento de dados pessoais.
              </p>
              <p className="mt-2">
                <strong>“Operador”:</strong> pessoa natural ou jurídica, de direito público ou privado, que realiza o tratamento de dados pessoais em nome do controlador.
              </p>
              <p className="mt-2">
                <strong>“Empresa, Empresas”:</strong> pessoa jurídica de direito público ou privado cliente da New Gep que contrata as soluções para automação do RH e departamento pessoal.
              </p>
              <p className="mt-2">
                <strong>1. COLETA DE DADOS PESSOAIS E INFORMAÇÕES</strong>
                <br />
                Coletamos informações que você nos fornece diretamente ao utilizar nossos softwares como o PROFILER, Gestão e Jobs. Nesse contexto, por exemplo, coletamos informações quando você cria uma conta nas nossas plataformas, atualiza seu perfil, participa de certos recursos interativos, preenche formulários, pesquisas, se candidata a alguma vaga dos nossos clientes, solicita atendimento do suporte do cliente ou se comunica conosco pelos nossos diversos canais de comunicação como redes sociais, e-mail e telefone. As informações que coletamos podem incluir nome, endereço de e-mail, telefone, interesses, empresa, cargo, localidade, CPF e outras informações necessárias para a interação com nosso software. Vale ressaltar que é de extrema importância para a New Gep a coleta, armazenamento e tratamento dos dados pessoais dos usuários, a fim de possibilitar a prestação dos nossos serviços ofertados através das nossas plataformas.
              </p>
              <p className="mt-2">
                <strong>2. USO DOS DADOS</strong>
                <br />
                Ao utilizar nossos produtos, os dados pessoais coletados, bem como demais informações, poderão ser armazenados, tratados e utilizados pela New Gep com as seguintes finalidades:
                <ul className="list-disc list-inside">
                  <li>possibilitar a prestação dos serviços ofertados pela New Gep, permitindo assim, a operacionalização das nossas plataformas;</li>
                  <li>desenvolver melhorias nos nossos serviços;</li>
                  <li>fornecer recomendações, conteúdos e recursos que correspondam com os interesses do usuário;</li>
                  <li>fornecer um atendimento cada vez melhor e eficaz;</li>
                  <li>entrar em contato com o intuito de apresentar novas oportunidades como vagas ou novos produtos que melhorem a experiência do usuário;</li>
                  <li>enviar-lhe conteúdo relevante sobre Recursos Humanos, Recrutamento e Seleção e a utilização de tecnologia nessas áreas;</li>
                  <li>convidá-lo a participar de nossas pesquisas;</li>
                  <li>monitorar nosso atendimento e nossas interações com você;</li>
                  <li>receber comunicação de produtos e serviços das empresas do grupo New Gep.</li>
                </ul>
              </p>
              <p className="mt-2">
                <strong>3. FUNDAMENTOS PARA A COLETA E AGENTES DE TRATAMENTO</strong>
                <br />
                A New Gep coleta seus dados pessoais para o exercício do recrutamento e seleção na plataforma Jobs baseada no legítimo interesse. Sendo assim, atua como controladora desses dados da plataforma. Além disso, a New Gep também atua como controladora dos dados do PROFILER que tem sua coleta fundamentada no consentimento. Por fim, os softwares que são para automação interna do RH e departamento pessoal das empresas, são baseados no cumprimento do contrato de trabalho e a New Gep atua como operadora desses dados, fornecendo a segurança e tecnologia para que a empresa insira os dados de seus colaboradores.
              </p>
              <p className="mt-2">
                <strong>4. TRATAMENTO DE DADOS DE CRIANÇAS E ADOLESCENTES</strong>
                <br />
                A New Gp não coleta dados pessoais de crianças e adolescentes em seus softwares. Ademais, caso tal situação venha acontecer, será utilizada a base legal do consentimento específico e em destaque, dado por ao menos um dos pais ou responsáveis conforme determina legislação brasileira vigente.
              </p>
              <p className="mt-2">
                <strong>5. SEUS DIREITOS</strong>
                <br />
                Você, enquanto titular de Dados Pessoais, possui os seguintes direitos relativos às suas informações pessoais:
                <ul className="list-disc list-inside">
                  <li>acessar, revisar, saber se realizamos algum tratamento com seus Dados Pessoais e requisitar uma cópia eletrônica da informação que temos sobre você; corrigir ou solicitar a correção de Dados Pessoais incompletos, inexatos ou desatualizados;</li>
                  <li>solicitar a anonimização, bloqueio ou eliminação de Dados Pessoais desnecessários e excessivos;</li>
                  <li>solicitar a portabilidade dos Dados Pessoais a outro fornecedor de produtos ou serviços similares;</li>
                  <li>solicitar a eliminação dos Dados Pessoais coletados e utilizados com base no seu consentimento;</li>
                  <li>obter informações sobre as entidades públicas ou privadas com as quais compartilhamos os seus Dados Pessoais;</li>
                  <li>quando a atividade de tratamento necessitar do seu consentimento, você pode se negar a consentir. Nesse caso, lhe informaremos sobre as consequências da não realização de tal atividade;</li>
                  <li>quando a atividade de tratamento necessitar do seu consentimento, a qualquer momento você poderá revogá-lo.</li>
                </ul>
                Acrescentamos ainda que quando disponíveis, nossos sites, aplicativos e serviços online podem ter uma função dedicada onde será possível você revisar e editar os seus Dados Pessoais. Ressaltamos que a New Gep solicita a validação de sua identidade usando, por exemplo, um sistema de login com senha de acesso ou recurso similar, antes de permitir o acesso ou a modificação de seus Dados Pessoais, dessa forma garantindo que não exista acesso não autorizado à sua conta e dados pessoais associados. A New Gep faz o máximo possível para poder atender todas as questões que você possa ter sobre a forma a qual processamos seus Dados Pessoais. Contudo, se você tiver preocupações não resolvidas, você tem o direito de reclamar às autoridades de proteção de dados competentes.
              </p>
              <p className="mt-2">
                <strong>6. COMPARTILHAMENTO COM TERCEIROS</strong>
                <br />
                A New Gep poderá realizar o compartilhamento dos seus dados com terceiros nas seguintes hipóteses:
                <ul className="list-disc list-inside">
                  <li>quando os dados forem coletados pela plataforma Job para cadastro em vagas oferecidas pelos nossos clientes. Diante disso, os dados serão compartilhados com a empresa que originou a vaga em questão;</li>
                  <li>quando os dados forem coletados através de uma ação de co-marketing. Nesse caso, no próprio conteúdo será descrito e informado que é uma parceria da New Gep com uma empresa específica;</li>
                  <li>quando a coleta dos seus dados não se enquadrar nesses casos descritos acima, eles não serão compartilhados com terceiros. Importante destacar que a New Gep não compartilha com terceiros os dados que são gerados no Profiler e os inseridos no software Gestão.</li>
                </ul>
              </p>
              <p className="mt-2">
                <strong>7. POLÍTICA DE COOKIES</strong>
                <br />
                Utilizamos cookies e web beacons para coletar informações de navegação. Os dados de navegação como IP, ISP, Browser, e outras informações são coletados apenas com a finalidade estatística de melhorar a usabilidade e relevância de nosso site para você. A coleta desses dados é feita pelo Analytics. Porém, você pode navegar anonimamente usando este recurso em seu browser. Usamos cookies para aprender como você interage com o nosso conteúdo e para melhorar sua experiência ao visitar o nosso website. Por exemplo, alguns cookies lembram o seu idioma ou preferências para que você não tenha que efetuar estas escolhas repetidamente sempre que visitar um dos nossos websites. Além disso, os cookies permitem que ofereçamos um conteúdo específico, tais como vídeos no(s) nosso(s) website(s). Podemos empregar o que aprendemos sobre o seu comportamento no(s) nosso(s) website(s) para oferecer anúncios direcionados em website(s) de terceiros em um esforço para apresentar novamente nossos produtos e serviços para você.
              </p>
              <p className="mt-2">
                <strong>8. SEGURANÇA</strong>
                <br />
                Desde o momento da inserção dos dados no sistema, até a sua finalidade, estes são armazenados em bancos de dados seguros, com acesso restrito apenas a funcionários com autorização para viabilizar as atividades com os referidos dados. Suas informações são armazenadas na nuvem, na Amazon Web Services, certificada com o certificado Privacy Shield. Cumpre mencionar que os dados utilizados na plataforma Jobs são monitorados e caso o usuário não realize nenhuma ação dentro das nossas plataformas por muito tempo, nós entraremos em contato para saber se ainda possui interesse em manter seus dados conosco, sendo assim, de acordo com o legítimo interesse. Nesse cenário, atuamos no sentido de implementar medidas de segurança que protejam nossos sistemas e bases de dados. Dentre as medidas de segurança que adotamos, estão a utilização de criptografia dos dados, o controle de acesso de informações, antivírus, a utilização de firewalls e a implementação de política interna de segurança da informação, arquitetura da solução de software com prevenção a invasão, utilização de HTTPS. No entanto, apesar de nossos esforços, considerando a natureza e arquitetura da internet, o que inclui elementos que não estão sob nosso controle, é impossível garantir que agentes mal-intencionados não conseguirão ter acesso ou fazer uso indevido de dados pessoais, pois se trata de um risco inerente à utilização de sistemas informatizados.
              </p>
              <p className="mt-2">
                <strong>9. ATUALIZAÇÃO DA POLÍTICA</strong>
                <br />
                A equipe da New Gep reserva-se no direito de alterar esta política sempre que necessário. Desse modo, recomendamos que a consulte e com regularidade para estar sempre atualizado. Qualquer dúvida, você poderá falar diretamente com a New Gep Technology ltda. (CNPJ 51.479.893/0001-30) acesse a Central de ajuda New Gep para suporte técnico.
              </p>
              <p className="mt-2">
                <strong>10. ENCARREGADO DOS DADOS</strong>
                <br />
                A New Gep é responsável ANPD (Autoridade Nacional de Proteção de Dados) e ao titular dos dados com transparência e responsabilidade. a New Gep, zela pelos seus dados e você poderá entrar em contato pelo e-mail privacidade@newgep.com.br.
              </p>
            </div>
          </div>
        </div>
      )}

      <div
        id="form"
        className="flex h-screen w-full flex-col justify-between bg-[#f0eaf1]"
      >
        <div className="h-full bg-[#f0eaf1] lg:h-5/6">
          {/* Header */}
          <div className="absolute flex h-15 w-full items-center justify-between rounded-b-3xl bg-black lg:relative lg:h-20 ">
            <div className="px-5">
              <h1 className="font-bold text-primary lg:text-2xl ">New Gep</h1>
            </div>

            <Image
              src="/images/logo/logo-dark.svg"
              alt="logo"
              className="h-12 w-12 lg:h-20 lg:w-20"
              width={100}
              height={100}
              layout="intrinsic"
              objectFit="contain"
            />
          </div>

          {!isCadastre ? (
            <div className="mt-8 flex h-full w-full flex-col items-center justify-center bg-[#f0eaf1] lg:mt-3 lg:h-5/6 lg:flex-row">
              {/* Form */}
              <div className="lg:h-6/6 flex h-4/6 justify-center px-2 lg:w-1/2 lg:items-center ">
                <Formik<FormValues>
                  initialValues={{
                    name: "",
                    email: "",
                    phone: "",
                    role: "",
                  }}
                  validate={validate}
                  onSubmit={handleSubmit}
                >
                  {({
                    handleChange,
                    handleSubmit,
                    handleBlur,
                    values,
                    touched,
                    errors,
                    isValid,
                  }) => (
                    <form
                      onSubmit={handleSubmit}
                      className="lg:h-4/4 flex flex-col justify-between rounded-3xl bg-black px-5 py-3 shadow-lg"
                    >
                      <div className="w-full">
                        <h2 className="text-center font-bold text-primary md:text-xl lg:text-2xl">
                          Solicitar Demonstração
                        </h2>
                        <p className=" text-center text-gray-500">
                          Preencha o formulário abaixo e entraremos em contato:
                        </p>
                      </div>

                      <div className="flex flex-col gap-2">
                        <div className="relative flex flex-col gap-1">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Nome*"
                            className="rounded-full bg-white p-1 px-2 text-black lg:p-2"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                          />
                          {touched.name && errors.name && (
                            <>
                              <div className="hidden text-sm font-extralight text-red-500 lg:block">
                                {errors.name}
                              </div>
                              <div className="absolute right-4 top-1/2 -translate-y-1/2 transform text-red-500 lg:hidden">
                                ✖
                              </div>
                            </>
                          )}
                        </div>
                        <div className="relative flex flex-col gap-1">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="E-mail*"
                            className="rounded-full bg-white p-1 px-2 text-black lg:p-2"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                          />
                          {touched.email && errors.email && (
                            <>
                              <div className="hidden text-sm font-extralight text-red-500 lg:block">
                                {errors.email}
                              </div>
                              <div className="absolute right-4 top-1/2 -translate-y-1/2 transform text-red-500 lg:hidden">
                                ✖
                              </div>
                            </>
                          )}
                        </div>
                        <div className="relative flex flex-col gap-1">
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Celular*"
                            className="rounded-full bg-white p-1 px-2 text-black lg:p-2"
                            onChange={(e) => {
                              const value = e.target.value.replace(/\D/g, "");
                              const maskedValue = value
                                .replace(/^(\d{2})(\d)/g, "($1) $2")
                                .replace(/(\d)(\d{4})$/, "$1-$2");
                              handleChange({
                                target: {
                                  name: e.target.name,
                                  value: maskedValue,
                                },
                              });
                            }}
                            onBlur={handleBlur}
                            value={values.phone}
                          />
                          {touched.phone && errors.phone && (
                            <>
                              <div className="hidden text-sm font-extralight text-red-500 lg:block">
                                {errors.phone}
                              </div>
                              <div className="absolute right-4 top-1/2 -translate-y-1/2 transform text-red-500 lg:hidden">
                                ✖
                              </div>
                            </>
                          )}
                        </div>
                        <div className="relative flex flex-col gap-1">
                          <select
                            id="role"
                            name="role"
                            className="rounded-full bg-white p-1 px-2 text-black lg:p-2"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.role}
                          >
                            <option value="" disabled>
                              Selecione seu Cargo*
                            </option>
                            <option value="manager">Gerente</option>
                            <option value="developer">Desenvolvedor</option>
                            <option value="designer">Designer</option>
                          </select>
                          {touched.role && errors.role && (
                            <>
                              <div className="hidden text-sm font-extralight text-red-500 lg:block">
                                {errors.role}
                              </div>
                              <div className="absolute right-4 top-1/2 -translate-y-1/2 transform text-red-500 lg:hidden">
                                ✖
                              </div>
                            </>
                          )}
                        </div>
                      </div>

                      <p className="text-center text-sm text-white lg:mt-2">
                        Ao enviar este formulário, declaro que li e aceito a{" "}
                        <a
                          href="#"
                          className="text-primary underline"
                          onClick={(e) => {
                            e.preventDefault();
                            setIsModalOpen(true);
                          }}
                        >
                          Política de Privacidade
                        </a>
                      </p>

                      <div className="flex justify-center">
                        <button
                          type="submit"
                          className="m-2 w-fit rounded-full border border-primary bg-primary/40 px-2 py-1 font-bold text-primary"
                        >
                          Solicitar Demonstração
                        </button>
                      </div>
                    </form>
                  )}
                </Formik>
              </div>

              <div className="hidden h-full items-center justify-center duration-700 animate-in fade-in lg:flex lg:h-5/6 lg:w-1/2 lg:p-12 ">
                <div className="mb-20 flex items-center justify-center lg:mb-0">
                  <Image
                    src={human1}
                    alt="human"
                    className="h-2/4 w-2/4 lg:h-full lg:w-full lg:p-20 "
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex h-full w-full items-center justify-center lg:h-5/6">
              <div className="flex flex-col items-center justify-center">
                <Image
                  src={check}
                  alt="background"
                  className="w-20 transform-gpu object-cover transition-transform duration-300 hover:scale-110 lg:h-25 lg:w-25"
                />
                <h1 className="mt-5 text-center text-4xl font-bold text-black lg:text-start">
                  Obrigado por se Cadastrar!
                </h1>
                <p className="text-center">
                  Breve entraremos em contato com você
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="lg:h-2/12 w-full rounded-t-3xl bg-black">
          <div className="p-3 text-center">
            <div className="flex flex-col justify-between gap-2">
              <h1 className="flex items-center justify-between font-bold text-primary">
                {" "}
                <Image
                  src={shield}
                  alt="background"
                  className="mr-2 h-8 w-8 rounded-full bg-primary p-1 text-primary"
                />
                Segurança da Informação <span></span>{" "}
              </h1>
              <p>
                Todos os dados são armazenados de forma segura e protegida pela
                New Gep.
              </p>
            </div>
            <div></div>
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

        <div className="h-full w-full items-center justify-center lg:flex">
          <div className="relative hidden h-full items-center justify-center lg:flex lg:w-1/2">
            <div className="mb-20 flex w-full flex-col items-center gap-5 lg:justify-center">
              <Image
                src={laptop}
                alt="background"
                className="h-full w-full object-cover"
              />
              <button
                onClick={() => {
                  document
                    .getElementById("form")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-1/2 cursor-pointer rounded-full bg-primary py-2 font-bold text-black transition-all duration-300 hover:scale-105 focus:outline-none"
              >
                Solicitar Demonstração
              </button>
            </div>
          </div>

          <div className="relative flex h-full items-center justify-center lg:w-1/2">
            <div className="flex w-full flex-col gap-5 px-5 py-3 ">
              <div className="flex flex-col gap-3">
                <h1 className="text-center font-bold text-primary lg:text-3xl">
                  Transforme a Gestão de Pessoas da sua Empresa com a New GEP
                </h1>
                <p className="hidden font-semibold lg:flex">
                  Digitalize Admissão ao Desligamento, economize tempo e
                  conecte-se ao colaborador com uma plataforma integrada e
                  inteligente.
                </p>
              </div>

              <ul className="flex list-disc flex-col items-center justify-center gap-5 text-justify text-white lg:text-start ">
                <li>
                  <span className="text-justify font-bold text-primary/80">
                    Dashboards Inteligentes
                  </span>{" "}
                  Visualize dados em tempo real para decisões estratégicas mais
                  rápidas.
                </li>
                <li>
                  <span className="font-bold text-primary/80">
                    Redução de Burocracia
                  </span>{" "}
                  Todos os documentos do colaborador digitalizados, assinaturas
                  eletrônicas e processos automatizados.
                </li>
                <li>
                  <span className="font-bold text-primary/80">
                    Mais Eficiência para o RH
                  </span>{" "}
                  Centralize admissões, demissões, holerites, ponto e
                  comunicação em um só lugar.
                </li>
                <li>
                  <span className="font-bold text-primary/80">
                    Integração Total
                  </span>{" "}
                  IA conectando empresa e colaborador via chat e notificações
                  automatizadas.
                </li>
              </ul>

              <div className="flex items-center justify-center lg:hidden">
                <button className="cursor-pointer rounded-full bg-primary px-2 py-2 font-bold text-black transition-all duration-300 hover:scale-105 hover:opacity-70 focus:outline-none lg:w-1/2">
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
        <div className="hidden h-1/4 flex-col items-center justify-center text-center lg:flex">
          <h1 className="font-extrabold text-black lg:text-4xl">
            Pare de perder tempo com papelada!
          </h1>
          <p className="font-light text-black lg:w-1/2 lg:text-center">
            Nossa tecnologia permite que todos os documentos dos colaboradores
            sejam enviados, organizados e acessados digitalmente.
          </p>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-around gap-4 px-5 py-5 text-center lg:mt-0 lg:h-3/4 lg:flex-row">
          <div className="flex flex-col items-center justify-center lg:w-1/4 lg:gap-5 ">
            <Image
              src={check}
              alt="background"
              className="w-10 transform-gpu object-cover transition-transform duration-300 hover:scale-110 lg:h-25 lg:w-25"
            />
            <h4 className="px-3 text-center font-bold text-black lg:text-2xl">
              Organização
            </h4>
            <ul className="g-2 text-black ">
              <li>
                <span>Processos 100% Digitais</span>
              </li>
              <li>
                <span>Otimização do Tempo</span>
              </li>
              <li>
                <span>Dados em Tempo Real</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center  lg:w-1/4 lg:gap-5 ">
            <Image
              src={check}
              alt="background"
              className="w-10 transform-gpu object-cover transition-transform duration-300 hover:scale-110 lg:h-25 lg:w-25"
            />
            <h4 className="px-3 text-center font-bold text-black lg:text-2xl">
              Segurança da Informação
            </h4>
            <ul className="g-2 text-black">
              <li>
                <span>Sigilo das Informações</span>
              </li>
              <li>
                <span>Eliminação da Papelada</span>
              </li>
              <li>
                <span>Lei de Proteção de Dados (LGPD)</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center lg:w-1/4 lg:gap-5">
            <Image
              src={check}
              alt="background"
              className="w-10 transform-gpu object-cover transition-transform duration-300 hover:scale-110 lg:h-25 lg:w-25"
            />
            <h4 className="px-3 text-center font-bold text-black lg:text-2xl">
              Serviço Amigo
            </h4>
            <ul className="g-2 text-black">
              <li>
                <span>Fácil Acesso</span>
              </li>
              <li>
                <span>Pagamento por Uso</span>
              </li>
              <li>
                <span>Escalável e Modular</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="h-screen bg-black lg:flex">
        <div className="flex h-full flex-col  lg:w-1/2 lg:gap-5">
          <div className="px-5 py-4 text-center font-extrabold text-primary  lg:text-2xl">
            <h1>App do Colaborador</h1>
          </div>

          <div className="flex flex-col items-center justify-center px-5 text-center">
            <h2 className="font-bold text-white ">Agilidade e Transparência</h2>
            <p className="px-2 text-center  lg:flex lg:px-10 ">
              Uma experiência digital que conecta empresas e colaboradores!
            </p>
          </div>

          <div className="flex h-full w-full flex-col items-center justify-center gap-15 px-10 lg:gap-5">
            <div className="flex w-full items-center justify-center">
              <div className="z-10 -mr-5 flex items-center justify-center rounded-full border-2 border-primary bg-primary/90 transition-colors duration-300 hover:bg-primary lg:-mr-22 lg:h-25 lg:w-25">
                <Image
                  src={signature}
                  alt="background"
                  className="w-15 object-cover lg:h-15 lg:w-15"
                />
              </div>
              <div className="w-5/6 rounded-3xl bg-white pl-12 shadow shadow-white lg:h-20 lg:pl-27">
                <p className="mt-1">
                  <span className="font-bold text-black">Assinatura</span>
                </p>
                <div>
                  <p>Melhor comodidade para assinaturas dos documentos</p>
                </div>
              </div>
            </div>

            <div className="flex w-full items-center justify-center">
              <div className="z-10 -mr-5 flex items-center justify-center rounded-full border-2 border-primary bg-primary/90 transition-colors duration-300 hover:bg-primary lg:-mr-22 lg:h-25 lg:w-25">
                <Image
                  src={ping}
                  alt="background"
                  className="w-15 object-cover lg:h-15 lg:w-15"
                />
              </div>
              <div className="w-5/6 rounded-3xl bg-white pl-12 shadow shadow-white lg:h-20 lg:pl-27">
                <p className="mt-1">
                  <span className="font-bold text-black">Envio</span>
                </p>
                <div className="lg:p-1">
                  <p>Aviso de ausências enviado direto pelo app</p>
                </div>
              </div>
            </div>

            <div className="flex w-full items-center justify-center">
              <div className="z-10 -mr-5 flex items-center justify-center rounded-full border-2 border-primary bg-primary/90 transition-colors duration-300 hover:bg-primary lg:-mr-22 lg:h-25 lg:w-25">
                <Image
                  src={cloud}
                  alt="background"
                  className="w-15 object-cover lg:h-15 lg:w-15"
                />
              </div>
              <div className="w-5/6 rounded-3xl bg-white pl-12 shadow shadow-white lg:h-20 lg:pl-27">
                <p className="mt-1">
                  <span className="font-bold text-black">Chat inteligente</span>
                </p>
                <div className="lg:p-1">
                  <p>Comunicação direta com o RH</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden h-full w-1/2 items-center justify-center lg:flex">
          <Image
            src={phone}
            alt="background"
            className="h-4/6 w-4/6 object-cover "
          />
        </div>
      </div>

      <div className="flex h-screen flex-col items-start bg-primary lg:flex-row lg:justify-end">
        <div className="flex items-center justify-center px-3 py-5 lg:h-5/6 lg:w-1/2">
          <Image
            src={human}
            alt="background"
            className="lg:h-6/6 rounded-3xl bg-white object-cover lg:w-10/12" // Modificado
          />
        </div>

        <div className="flex h-1/4 flex-col items-center justify-between lg:h-4/6 lg:w-1/2 lg:justify-center lg:gap-3">
          <div className="px-2">
            <h1 className="text-center text-3xl font-bold text-black lg:text-5xl">
              New Gep
            </h1>
            <p className="text-light px-5 text-center lg:text-start">
              Com o propósito de solucionar as dores da Gestão de Pessoas.
            </p>
          </div>

          <div className="hidden lg:flex">
            <p className="p-5 text-xl text-black lg:text-2xl">
              Venha conhecer nossa solução para admissão e demissão, com acesso
              ao app do colaborador e assinaturas eletrônicas.
            </p>
          </div>

          <div className="flex lg:hidden">
            <p className="px-5 py-2 text-center text-lg text-black lg:text-2xl">
              Estamos preparados e você?
            </p>
          </div>

          <div className="mt-15 flex flex-col gap-3 lg:mt-0">
            <h1 className="font-extrabold text-black">Venha nos conhecer</h1>
            <div className="flex justify-evenly gap-2">
              {/* <Image
								src={facebook}
								alt="background"
								className="h-10 w-10 cursor-pointer transition-opacity duration-300 hover:opacity-70"
							/> */}

              <Image
                src={instagram}
                alt="background"
                className="h-10 w-10 cursor-pointer transition-opacity duration-300 hover:opacity-70"
                onClick={() => {
                  window.open(
                    "https://www.instagram.com/newgepdigital/?hl=pt-br",
                    "_blank",
                  );
                }}
              />

              <Image
                src={linkedin}
                alt="background"
                className="h-10 w-10 cursor-pointer transition-opacity duration-300 hover:opacity-70"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/company/new-gep/",
                    "_blank",
                  );
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-1/12 absolute bottom-0 left-0 flex w-full bg-black">
        <div className="hidden items-center justify-center lg:flex lg:w-2/6">
          <Image
            src="/images/logo/logo-dark.svg"
            alt="logo"
            width={150}
            height={150}
            layout="intrinsic"
            objectFit="contain"
          />
        </div>
        <div className="flex items-center justify-center lg:w-4/6">
          <p className="px-2 text-white">
            Todos os direitos reservados. Nenhuma parte deste conteúdo pode ser
            copiada, distrbuída ou modificada sem autorização prévia. Protegido
            por leis de direitos autorais e propriedade intelectual {"\n"}
            <span className="font-bold text-primary">New Gep.</span>
          </p>
        </div>
      </div>

      <div className="fixed bottom-20 right-5">
        <Image
          src={whatsapp}
          alt="background"
          className="h-15 w-15 cursor-pointer opacity-70 transition-opacity duration-300 hover:opacity-100"
          onClick={() => {
            window.open("https://wa.me/5511947893123", "_blank");
          }}
        />
      </div>
    </section>
  );
}
