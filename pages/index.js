/* eslint-disable @next/next/no-img-element */

import Header from '../components/common/Header';
import HomeBanner from '../components/home/HomeBanner';
import ServiceCard from '../components/home/ServiceCard';
import Footer from '../components/common/Footer';
import CustomHead from '../components/common/CustomHead'; // Importa el componente CustomHead



const Home = () => {
  return (
    <div>
      <CustomHead />
      <Header />

    <section className="text-center p-8">
              <p className="flex-wrap font-serif text-9xl text-center font-bold mb-2 py-5 mx-28 pt-20 ">¡Hola! </p>
              <h1 className="font-normal italic text-4xl font-bold py-3 mb-2 ">Bienvenido a Dopamina Visual</h1>

 </section>



              <p className="flex-wrap font-serif text-7xl text-center font-bold mb-2 py-8 mx-44 px-36">
                Diseñamos estrategias y soluciones <span class="text-transparent bg-clip-text bg-gradient-to-r to-fuchsia-600 from-sky-400">visuales</span> para emprendedores
              </p>

                



   <div className="flex justify-center items-center py-12">

              <figure class="relative h-auto max-w-3xl transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
        <a href="/contact">
          <img class="rounded-lg" src="https://ici.net.au/blog/wp-content/uploads/2018/04/ICI-Jobs-for-People-with-Creative-Minds.jpg" alt="image description"/>
          </a>
           <figcaption class="absolute px-4 text-2xl text-white bottom-6">
            <p className="font-mono items-center">Hagamos crecer tu negocio</p>
          </figcaption>
            </figure>

    </div>

    <section className="text-center p-8">
              <h1 className="font-normal italic text-4xl font-bold py-3 mb-2 ">Nuestros Servicios</h1>

 </section>

  
      
      <div className=" flex flex-wrap justify-center p-8 mx-0.5 mx-3.5">
            <div className="mx-7 w-96 "> <ServiceCard imageUrl="https://assets-prd.ignimgs.com/2021/12/16/sale-309437-article-image-1639680628904.jpeg" 
            title="Diseño gráfico en tiempo real" 
            description="Servicio para quienes tienen una idea clara y precisa de lo que necesitan diseñar, desde un logotipo, hasta una etiqueta o un poster para un evento. " 
            ctaText="Mas información" ctaLink="/services" /></div>

            <div className="mx-7 w-96"> <ServiceCard imageUrl="https://www.cetys.mx/noticias/wp-content/uploads/2022/04/Foto-1.jpg" 
            title="Consultoría 1 a 1 para emprendedores" 
            description="Si lo que necesitas es atención personalizada para atender tus necesidades específicas, este servicio es para tí." ctaText="Mas información" ctaLink="/services" /></div>

            <div className="mx-7 w-96"> <ServiceCard imageUrl="https://tanyadigital.com/wp-content/uploads/2022/11/sales-growth-adalah.jpg" 
            title="Estrategias de expansión comercial" 
            description="Incrementa las ventas de tu negocio con los recursos que tienes a la mano, nosotros nos encargamos de armar una estrategia a tu medida." ctaText="Mas información" ctaLink="/services" /></div>

            <div className="mx-7 w-96"> <ServiceCard imageUrl="https://www.highdigital.co.uk/wp-content/uploads/2022/02/iStock-915188574.jpg" 
            title="Modelador de negocios: comienza desde cero" 
            description="¿Estas a punto de abandonar tu trabajo fijo para comenzar un negocio? Te ayudamos en cada paso para que lo logres sin contratiempos" ctaText="Mas información" 
            ctaLink="/services" /></div>



       
        
        
        
      </div>
      

<Footer />


    </div>
  );
};

export default Home;
