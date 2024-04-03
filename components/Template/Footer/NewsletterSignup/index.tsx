"use client";
import React, { useState } from "react";
import {motion} from "framer-motion";
import { database } from "@/utils/database";
import { collection, addDoc } from "firebase/firestore";

async function salvarEmail(email: string) {
  try {
    await addDoc(collection(database, 'contato'), {
      email: email,
    });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const added = await salvarEmail(email);
    if (added) {
      setEmail('');
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    }
  };

  const SucessVariants = {
    hidden: {
      y: '-100%',
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  return(
    <div className='flex flex-col gap-5'>
        <h4 className='text-3xl font-bold tracking-tight'>Assine nossa Newsletter</h4>
        <p className='leading-relaxed'>Inscreva-se em nosso boletim informativo. Fique em contato com as últimas notícias e ofertas especiais, etc.</p>
        <form onSubmit={handleSubmit} className='flex flex-col xl:flex-row gap-4'>
            <div className='flex flex-row items-center border border-oil px-5 py-3 rounded gap-3.5'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' fill='currentColor' className='text-neutral-200 inline-block h-4 w-4 shrink-0' aria-hidden='true'><path d='M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z'/></svg>
                <input id="email" type="email" onChange={(e) => setEmail(e.target.value)} value={email} className='bg-transparent text-white placeholder:text-neutral-200 xl:w-56 w-full outline-none' placeholder='Insira seu e-mail'></input>
            </div>
            <button className='bg-green-700 hover:bg-green-800 duration-300 font-bold xl:w-fit w-full h-full px-5 py-3 rounded uppercase tracking-wide shadow-lg'>Inscrever-se</button>
        </form>
        {showNotification &&    
          <motion.div initial='hidden' className="text-green-500 flex flex-row justify-center lg:justify-start items-center px-2 py-1 gap-3" animate={showNotification ? 'visible' : 'hidden'} variants={SucessVariants}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill='currentColor' className='inline-block h-4 w-4 shrink-0' aria-hidden='true'><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
            <label className='text-sm font-medium'>Seu e-mail foi cadastrado com sucesso!</label>
          </motion.div>
        }
    </div>
  );
}

export default NewsletterSignup;