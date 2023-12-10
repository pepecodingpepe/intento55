// /pages/services.js
import Header from '../components/common/Header';
import ServiceCard from '../components/home/ServiceCard';
import Footer from '../components/common/Footer';
import ServiceCardDetail from '../components/services/ServiceCardDetail';
import ServiceHeader1 from '../components/services/ServiceHeader1';

import CustomHead from '../components/common/CustomHead'; // Importa el componente CustomHead



const Services = () => {
  return (
    <div>
      <CustomHead />
      <Header />
      <section className="p-8">
      <p className="flex-wrap font-serif text-7xl text-center font-bold mb-2 py-10 mx-44">Desarrollamos soluciones creativas y sustentables </p>
        <h2 className="font-mono text-3xl text-center font-bold mb-4 mt">Adaptamos nuestros servicios a la medida de tus necesidades</h2>

        <div className="py-9 px-40 mx-72 flex-auto ">
          <ServiceHeader1 />
        <ServiceCard title="Ideal para quienes tienen una idea en mente" description="Aquí va el detalle" />
        <ServiceCardDetail />
        </div>

        <div className="py-9 px-24 ">
        <ServiceCard title="Servicio 2" description="Aquí va el detalle" />
        <ServiceCardDetail />
        </div>



        <ServiceCardDetail />
        {/* Agrega más ServiceCard según sea necesario */}
      </section>
      <Footer />
    </div>
  );
};

export default Services;
