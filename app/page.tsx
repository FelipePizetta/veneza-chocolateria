'use client';
import Link from "next/link";
import Image from "next/image";
import React, {Suspense, useState} from "react";

import ChocolateBar from "../public/img/chocolate-bar.png";
import ChocolateBonbon from "../public/img/chocolate-bonbon.png";
import ChocolateRum from "../public/img/chocolate-rum.png";

export default function Home() {
  const [selected, setSelected] = React.useState(1);

  return (
    <>
    <header className="bg-hero bg-cover bg-no-repeat bg-left-bottom lg:bg-bottom ease-out duration-300">
      <div className="mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center min-h-screen max-w-screen-xl px-3 py-20 md:px-12 md:py-20 lg:px-24 lg:py-0 gap-10">
        <div className="flex flex-col gap-16">
          <span className="flex flex-col gap-10">
            <h1 className="font-mono font-normal text-7xl text-center md:text-start tracking-wider md:tracking-widest">VENEZA<br/>CHOCOLATES</h1>
            <h3 className="font-serif text-2xl text-center tracking-wider">CHOCOLATES & PRESENTES</h3>
          </span>
          <Link className="bg-red-orange flex flex-row justify-center items-center w-full md:w-fit text-lg font-bold text-center md:px-20 py-4 rounded-xl select-none" href={'/'} aria-label="">COMPRE AGORA</Link>
        </div>
        <ul className="flex flex-row md:flex-col text-del-rio font-lato text-base gap-6 select-none">
          <li className={`hover:text-white hover:text-xl ease-in duration-300 ${selected === 1 ? "text-white font-bold" : "text-del-rio"}`}><button onClick={() => setSelected(1)}>1</button></li>
          <li className={`hover:text-white hover:text-xl ease-in duration-300 ${selected === 2 ? "text-white font-bold" : "text-del-rio"}`}><button onClick={() => setSelected(2)}>2</button></li>
          <li className={`hover:text-white hover:text-xl ease-in duration-300 ${selected === 3 ? "text-white font-bold" : "text-del-rio"}`}><button onClick={() => setSelected(3)}>3</button></li>
          <li className={`hover:text-white hover:text-xl ease-in duration-300 ${selected === 4 ? "text-white font-bold" : "text-del-rio"}`}><button onClick={() => setSelected(4)}>4</button></li>
        </ul>
      </div>
    </header>
    <main className="mx-auto min-h-full max-w-screen-xl px-3 md:px-12 md:py-20 lg:px-24 lg:py-0 gap-10">
      <section className="grid grid-cols-1 xl:grid-cols-6 min-w-full py-12 md:py-20 lg:py-28 gap-10">
        <div className="flex flex-col justify-between col-span-3 gap-16">
          <h2 className="font-serif text-5xl">Mais Vendidos</h2>
          <p>Nossos best-sellers apresentam uma variedade de sabores e texturas, cuidadosamente elaborados para satisfazer os desejos de todos os amantes de chocolate. Desde nossas trufas de chocolate ao leite, suaves e sedosas, até nossa rica casca de chocolate amargo com sal marinho, temos uma variedade deliciosa para você descobrir</p>
          <Link className="flex flex-row items-center justify-between text-carnation hover:text-sweet-pink duration-300" href={'/'}>Conheça os Favoritos do Público<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="inline-block h-4 w-4 shrink-0" aria-hidden="true" aria-label=""><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></Link>
        </div>
        <div className="grid col-span-3 grid-flow-row sm:grid-flow-col w-full max-h-full px-3 sm:px-0 gap-10 sm:gap-3.5">
          <Image src={ChocolateBonbon} className='rounded' quality={75} style={{objectFit: 'cover', width: '100vw', height: '50vh'}} alt=''></Image>
          <Image src={ChocolateBar} className='rounded' quality={75} style={{objectFit: 'cover', width: '100vw', height: '50vh'}} alt=''></Image>
          <Image src={ChocolateRum} className='rounded' quality={75} style={{objectFit: 'cover', width: '100vw', height: '50vh'}} alt=''></Image>
        </div>
      </section>
      <section className='flex flex-col min-w-full lg:min-h-screen min-h-full items-center py-12 md:py-20 lg:py-28 gap-20'>
        <span className='flex flex-col h-full text-center gap-8'>
          <h3 className='text-5xl font-mono -tracking-wide'>Sinfonia de Sabores</h3>
          <p className='max-w-screen-md text-base tracking-wide leading-relaxed'>A Veneza Chocolateria é um convite a uma deliciosa viagem pelos sabores da Itália. Inspirada na beleza e magia da cidade dos canais, oferecemos uma experiência sensorial única através de chocolates artesanais elaborados com os melhores ingredientes e técnicas tradicionais.</p>
        </span>
        <Suspense fallback={<p className='text-del-rio text-md'>Carregando...</p>}>
          <iframe className='rounded-2xl' width='100%' height='550' src='https://www.youtube.com/embed/hymVP5KABE8?controls=0' loading='lazy' allowFullScreen></iframe>
        </Suspense>
      </section>
    </main>
    </>
  );
}
