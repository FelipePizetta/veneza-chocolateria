'use client';
import CarouselImage from "@/components/CarouselImage";
import Template from "@/components/Template";
import Link from "next/link";
import React, {Suspense} from "react";

export default function Home() {
  return (
    <Template>
    <header className="bg-hero bg-cover bg-no-repeat bg-left-bottom lg:bg-bottom ease-out duration-300">
      <div className="mx-auto flex flex-col md:flex-row justify-center md:justify-start items-center min-h-screen max-w-screen-xl px-3 py-20 md:px-12 md:py-20 lg:px-24 lg:py-0 gap-10">
        <div className="flex flex-col gap-16">
          <span className="flex flex-col gap-10">
            <h1 className="font-mono font-normal text-7xl text-center md:text-start tracking-wider md:tracking-widest">VENEZA<br/>CHOCOLATES</h1>
            <h5 className="font-serif text-2xl text-center tracking-wider">CHOCOLATES & PRESENTES</h5>
          </span>
          <Link className="bg-red-orange hover:bg-tamarillo duration-300 drop-shadow-mexican flex flex-row justify-center items-center w-full md:w-fit text-lg font-bold text-center md:px-20 py-4 rounded-xl select-none" href={'/'} aria-label="">COMPRE AGORA</Link>
        </div>
      </div>
    </header>
    <main className="mx-auto min-h-full max-w-screen-xl px-3 md:px-12 md:py-20 lg:px-24 lg:py-0 gap-10">
      <section className="grid grid-cols-1 xl:grid-cols-6 min-w-full py-12 md:py-20 lg:py-28 gap-10">
        <div className="flex flex-col justify-between col-span-3 gap-16">
          <h2 className="text-5xl font-bold tracking-tighter">Mais Vendidos</h2>
          <p>Nossos best-sellers apresentam uma variedade de sabores e texturas, cuidadosamente elaborados para satisfazer os desejos de todos os amantes de chocolate. Desde nossas trufas de chocolate ao leite, suaves e sedosas, até nossa rica casca de chocolate amargo com sal marinho, temos uma variedade deliciosa para você descobrir</p>
          <Link className="flex flex-row items-center justify-between text-carnation hover:text-sweet-pink duration-300" href={'/'}>Conheça os Favoritos do Público<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="inline-block h-4 w-4 shrink-0" aria-hidden="true" aria-label=""><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></Link>
        </div>
        <CarouselImage></CarouselImage>
      </section>
      <section className='flex flex-col min-w-full lg:min-h-screen min-h-full items-center py-12 md:py-20 lg:py-28 gap-20'>
        <span className='flex flex-col h-full text-center gap-8'>
          <h3 className='text-5xl font-mono tracking-wide'>Sinfonia de Sabores</h3>
          <p className='max-w-screen-md text-base tracking-wide leading-relaxed'>A Veneza Chocolateria é um convite a uma deliciosa viagem pelos sabores da Itália. Inspirada na beleza e magia da cidade dos canais, oferecemos uma experiência sensorial única através de chocolates artesanais elaborados com os melhores ingredientes e técnicas tradicionais.</p>
        </span>
        <Suspense fallback={<p className='text-del-rio text-md'>Carregando...</p>}>
          <iframe className='rounded-2xl' width='100%' height='550' src='https://www.youtube.com/embed/hymVP5KABE8?controls=0' loading='lazy' allowFullScreen></iframe>
        </Suspense>
      </section>
    </main>
    </Template>
  );
}
