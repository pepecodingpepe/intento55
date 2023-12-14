// /components/common/Footer.js
import { useEffect, useState } from 'react';

const Footer = () => {


  return (
    <footer className="bg-gradient-to-r from-white to-zinc-100  shadow dark:bg-gray-900 m-0">
    <div className="w-full max-w-screen-2xl mx-auto p-4 md:py-8">
    <div className="flex justify-between items-center">
        <div>
          {/* Agrega iconos de redes sociales */}
          <a href="#" className="font-mono text-gray-400 mr-4 hover:text-gray-600">Facebook</a>
          <a href="#" className="font-mono text-gray-400 mr-4 hover:text-gray-600">Instagram</a>
          <a href="#" className="font-mono text-gray-400 mr-4 hover:text-gray-600">Whatsapp</a>
        </div>

        <div className=" text-center">
        <p className="text-base text-gray-600" > Agencia de consultoría y servicios profesionales de diseño gráfico</p>
          <p className="text-sm font-mono text-gray-400" >Chihuahua, Chih. Mexico © 2024</p>
          </div>

        <div>
          <a href="/login2" className="bg-slate-600 text-white font-black text-lg px-4 py-3 rounded-xl mr-8 mt-px-8 hover:bg-lime-500">LOG IN</a>

        </div>
      </div>
    </div>
</footer>
  );
};

export default Footer;
