'use client'
import React from 'react';
import Image from 'next/image';
import { Formik } from 'formik';

//humans
import human1 from '../../../../public/images/human/point.png';

export default function Presentation() {
  return (
    <section className="relative" style={{ fontFamily: 'Roboto, sans-serif' }}>


      <div className="h-screen w-full bg-[#14151a]">
        {/* Header */}
        <div className="h-20 w-full bg-dark flex items-center justify-center">
          <Image 
            src="/images/logo/logo-dark.svg" 
            alt="logo" 
            width={100} 
            height={100} 
            layout="intrinsic"
            objectFit="contain"
          />
        </div>

        <div className="h-full w-full flex items-center justify-center ">
          
          {/* Form */}
          <div className="h-full w-1/2  flex items-center justify-center">
            <div className="bg-gradient-to-t bg-primary rounded-3xl h-4/6 w-5/6">
              
              <Formik
                initialValues={{
                  name1: '',
                  email: '',
                  phone: '',
                  position: ''
                }}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                {({ handleChange, handleSubmit, values }) => (
                  <form onSubmit={handleSubmit} className='flex flex-col gap-4 p-6 bg-gradient-to-b from-[#fde047] to-[#fbbf24] rounded-3xl shadow-lg'>
                    <h2 className='text-center text-2xl font-bold text-white mb-4'>Solicitar Demonstração</h2>
                    <p className='text-center text-white mb-6'>Preencha o formulário abaixo e entraremos em contato:</p>
                    <div className='flex flex-col gap-3'>
                      <input
                        type="text"
                        id="name1"
                        name="name1"
                        placeholder='Nome*'
                        className='bg-white rounded-full p-3 text-black'
                        onChange={handleChange}
                        value={values.name1}
                      />
                    </div>
                    <div className='flex flex-col gap-3'>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder='E-mail Corporativo*'
                        className='bg-white rounded-full p-3 text-black'
                        onChange={handleChange}
                        value={values.email}
                      />
                    </div>
                    <div className='flex flex-col gap-3'>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder='Número de Telefone com DDD ou WhatsApp*'
                        className='bg-white rounded-full p-3 text-black'
                        onChange={handleChange}
                        value={values.phone}
                      />
                    </div>
                    <div className='flex flex-col gap-3'>
                      <select
                        id="position"
                        name="position"
                        className='bg-white rounded-full p-3 text-black'
                        onChange={handleChange}
                        value={values.position}
                      >
                        <option value="" disabled>Selecione seu Cargo*</option>
                        <option value="manager">Gerente</option>
                        <option value="developer">Desenvolvedor</option>
                        <option value="designer">Designer</option>
                      </select>
                    </div>
                    <p className='text-center text-white text-sm mt-4'>
                      Ao enviar este formulário, declaro que li e aceito a <a href="#" className='underline'>Política de Privacidade</a>.
                    </p>
                    <button type="submit" className='bg-[#f59e0b] text-white rounded-full p-3 mt-6'>
                      SOLICITAR DEMONSTRAÇÃO
                    </button>
                  </form>
                )}
              </Formik>
            </div>
          </div>

          {/* Call */}
          <div className="h-full w-1/2 flex items-center justify-start">

            <div className="flex flex-col justify-between w-5/6 h-3/6">

              <div className="flex h-1/4 w-full items-center justify-start mb-8">
                <div className='flex flex-col text-center '>
                  <h1 className="text-1xl font-bold text-primary">Solicite uma demonstração</h1>
                  <span className='text-primary font-extrabold text-2xl border border-primary rounded-full px-4 py-2'>
                    GRATUITA
                  </span>
                </div>
                <Image src={human1} alt="human" className='mt-8' width={200} height={150} />
              </div>

              <div>
                <p className="text-primary font-bold text-3xl w-5/6 ">
                  Reduza o tempo gasto na contratação de novos colaboradores com um software de admissão digital
                </p>
              </div>


              <div className='flex flex-col gap-2 mt-3'>
                  <h1 className='text-primary font-bold text-xl'>O que você vai ganhar?</h1>
                  <p className='text-primary font-light'>possibilite o processo completo de admissão do novo colaborador em um único sistema e garanta praticidade, segurança dos dados e economia de tempo.</p>
              </div>

            </div>

          </div>


        </div>
      </div>




      <div className="h-screen w-full bg-white">

      </div>
    </section>
  );
}
