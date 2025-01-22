import { Blog } from "@/types/blog";
import { title } from "process";

const BlogDetailsData = [
  {
    _id: 1,
    mainImage: "/images/blog/blog-01.png",
    title: "Afirmativas e Inclusivas",
    metadata: "Vagas Afirmativas e Inclusivas: Um Caminho para a Transformação Social e Empresarial",
    details: {
      author: "Michelle Cunha" ,
      date: "Janeiro 20, 2025" ,
      category: "Inclusão" ,
    }
    ,
    mainText:{
      textOne :"Em um mundo cada vez mais conectado e diverso, as empresas têm a oportunidade e a responsabilidade de construir ambientes de trabalho que reflitam a pluralidade da sociedade. É nesse contexto que as vagas afirmativas e inclusivas ganham relevância estratégica e social.",
      textTwo :"Elas não apenas abrem portas para pessoas historicamente excluídas, mas também fortalecem a inovação e a competitividade das organizações. Vamos explorar a importância desse tema, como ele pode ser implementado e como símbolos representativos podem reforçar a comunicação."
    },
    images: {
      imageOne:"",
      imageTwo:""
    },
    subtitle: "O Que São Vagas Afirmativas e Inclusivas?",
    secondText: {
      textOne :"As vagas afirmativas são posições de trabalho direcionadas a grupos sub-representados no mercado de trabalho, como pessoas negras, LGBTQIA+, com deficiência (PCD), mulheres em áreas predominantemente masculinas e outras minorias.",
      textTwo :"Já as vagas inclusivas ampliam a acessibilidade para qualquer pessoa, garantindo que os processos seletivos sejam estruturados para acolher todas as diversidades.",
      textThree :"Essas estratégias são fundamentadas em legislações importantes, como a Lei de Cotas (Lei 8.213/1991), que estabelece a inclusão de PCDs, e a Lei 12.711/2012, que trata das ações afirmativas no ensino superior e serve como inspiração para o mercado de trabalho."
    },

  },
  {
    _id: 2,
    mainImage: "/images/blog/blog-02.png",
    title: "Por Que Implementar Vagas Afirmativas?",
    metadata:"Por Que Implementar Vagas Afirmativas?",
    details: {
        author: "Michelle Cunha" ,
        date: "Janeiro 20, 2025" ,
        category: "Inclusão" ,
    },
    mainText:{
      List:{
        titleOne:"1. Promove Equidade",
        textOne:"Os dados são claros: segundo o IBGE (2022), a taxa de desemprego entre pessoas negras e pardas é 70% maior do que entre brancos. As vagas afirmativas ajudam a corrigir esse desequilíbrio, oferecendo oportunidades reais e transformando histórias de vida.",
        titleTwo:"2. Estimula a Inovação",
        textTwo:"A diversidade fomenta a criatividade e a solução de problemas. Estudos do Boston Consulting Group (2018) mostram que empresas com equipes diversas têm 19% mais receita proveniente da inovação.",
        titleThree:"3. Melhora a Reputação da Marca",
        textThree:"Consumidores e investidores estão atentos. Uma pesquisa da Deloitte (2021) revelou que 80% dos consumidores preferem marcas que demonstram compromisso com causas sociais.",
        titleFour:"4. Fortalece o Engajamento",
        textFour:"Ambientes inclusivos geram pertencimento e reduzem o turnover. Funcionários que se sentem valorizados são mais produtivos e engajados.",
      }
    },
  },
  {
    _id: 3,
    mainImage: "/images/blog/blog-03.png",
    title: "Como Estruturar um Processo Seletivo Afirmativo e Inclusivo?",
    metadata:"Como Estruturar um Processo Seletivo Afirmativo e Inclusivo?",
    details: {
      author: "Michelle Cunha" ,
      date: "Janeiro 20, 2025" ,
      category: "Inclusão" ,
    },
    mainText:{
      List :{
        titleOne:"1. Diagnóstico Interno",
        textOne:"Avalie a composição da equipe e identifique lacunas de diversidade.",
        titleTwo:"2. Comunicação Clara",
        textTwo:"Divulgue as vagas afirmativas de forma transparente, explicando o propósito da ação. Utilize canais como LinkedIn, portais especializados e redes de apoio a minorias.",
        titleThree:"3. Parcerias Estratégicas",
        textThree:"Conecte-se com ONGs, associações e instituições que atuam com grupos específicos, como a Rede Mulher Empreendedora ou a AFROPython.",
        titleFour:"4. Capacitação de Recrutadores",
        textFour:"Invista na formação da equipe de RH para evitar vieses inconscientes e garantir uma seleção justa.",
        titleFive:"4. Adaptações Necessárias",
        textFive:"Certifique-se de que os processos e o ambiente de trabalho sejam acessíveis. Ferramentas como HandTalk podem ser usadas para traduzir conteúdo em Libras, por exemplo.",
      },
    }
  },
  // {
  //   _id: 4,
  //   mainImage: "/images/blog/blog-03.png",
  //   title: "Principais Símbolos Representativos das Vagas Afirmativas",
  //   metadata:"Para ajudar na identificação das vagas afirmativas e inclusivas, utilize os seguintes símbolos:",
  //   details: [
  //       { author: "Michelle Cunha" },
  //       { date: "Janeiro 20, 2025" },
  //       { category: "Inclusão" },
  //   ],
  //   icons: [
  //       {subTitleOne:"1. Pessoa com Deficiência (PCD)"},
  //       {imageOne:"cadeirante icone"},
  //       {textOne: "Uso: Indique vagas destinadas a PCDs."},

  //       {subTitleTwo:"2. Gênero e Diversidade"},
  //       {imageTwo:"Ícone: Representações de gênero, como bandeiras LGBTQIA+."},
  //       {textTwo: "Uso: Destaque vagas que incentivem a equidade de gênero."}, 

  //       {subTitleThree:"3. Raça e Etnia"},
  //       {imageThree:"Ícone: Ícones com tons de pele variados."},
  //       {textThree: "Uso: Identifique programas de ações afirmativas para grupos raciais sub-representados.."}, 

  //       {subTitleFour:"4. Idade e Experiência"},
  //       {imageFour:"Ícone: Pessoas de diferentes idades (jovens e idosos)."},
  //       {textFour: "Uso: Ressalte oportunidades para idosos ou jovens aprendizes."},

  //       {subTitleFour:"5. Mulheres em Áreas Técnicas"},
  //       {imageFour:"Ícone: Mulher segurando ferramentas ou laptops."},
  //       {textFour: "Uso: Incentive a presença feminina em setores como tecnologia e engenharia."},
  //   ],
  // },

  // {
  //   _id: 5,
  //   mainImage: "/images/blog/blog-04.png",
  //   title: "9 simple ways to improve your design skills",
  //   metadata:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit convallis tortor.",
  // },
  // {
  //   _id: 6,
  //   mainImage: "/images/blog/blog-01.png",
  //   title: "Tips to quickly improve your coding speed.",
  //   metadata:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit convallis tortor.",
  // },
];

export default BlogDetailsData;
