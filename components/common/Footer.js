// /components/common/Footer.js
const Footer = () => {
  
  return (
    <footer className="shadow-inner bg-gradient-to-r from-slate-950 to-slate-800 text-white p-6 fixed bottom-0 w-full">
      <div className="flex justify-between items-center">
        <div>
          {/* Agrega iconos de redes sociales */}
          <a href="#" className="font-mono text-gray-500 mr-4 hover:text-gray-300">Facebook</a>
          <a href="#" className="font-mono text-gray-500 mr-4 hover:text-gray-300">Instagram</a>
          <a href="#" className="font-mono text-gray-500 mr-4 hover:text-gray-300">Whatsapp</a>
        </div>

        <div className=" text-center">
        <p className="text-base font-mono text-gray-300" > Agencia de consultoría y servicios profesionales de diseño gráfico</p>
          <p className="text-sm font-mono text-gray-500" >Chihuahua, Chih. Mexico © 2024</p>
          </div>

        <div>
          <button className="bg-slate-600 text-white font-black text-lg px-6 py-3 rounded-xl mr-8 mt-px-8 hover:bg-lime-500">CONTACTO</button>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
