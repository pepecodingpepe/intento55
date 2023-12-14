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
          <img class="rounded-lg" src="https://www.druidai.com/hubfs/Imported_Blog_Media/business-process-automation-chatbot.jpg" alt="image description"/>
          </a>
           <figcaption class="absolute px-4 text-2xl text-white bottom-6">
            <p className="font-mono items-center">Hagamos crecer tu negocio</p>
          </figcaption>
            </figure>

    </div>

    <section className="text-center p-8">
              <h1 className="font-normal italic text-4xl font-bold py-3 mb-2 ">Nuestros Servicios</h1>

 </section>

  
      
      <div className="flex flex-wrap justify-center p-8 mx-0.5 mx-3.5">
            <div className="mx-7 "> <ServiceCard title="Diseño gráfico en tiempo real" description="Este servicio te servirá si tienes una idea clara y precisa de lo que quieres diseñar, no importa si es un logo, una etiqueta o un poster. " ctaText="mas información" /></div>
            <div className="mx-7"> <ServiceCard title="Consultoría 1 a 1 para emprendedores" description="Aquí va el detalle" ctaText="mas información" /></div>
            <div className="mx-7"> <ServiceCard title="Estrategias de expansión comercial" description="Aquí va el detalle" ctaText="mas información" /></div>
            <div className="mx-7"> <ServiceCard title="Modelador de negocios: comienza desde cero" description="Aquí va el detalle" ctaText="mas información" /></div>



       
        
        
        
      </div>
      

<Footer />


    </div>
  );
};

export default Home;
