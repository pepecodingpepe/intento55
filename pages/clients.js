
import Header from '../components/common/Header';
import CustomHead from '../components/common/CustomHead'; // Importa el componente CustomHead

import Footer from '../components/common/Footer';

const Clients = () => {
  return (
    <div>
      <CustomHead />
      <Header />
      <section className="p-8">
        <h2 className="text-3xl font-bold mb-4">Nuestros Clientes</h2>
        <p className="mb-4 text-lg font-mono">Aquí va el contenido del blog sobre tu negocio de consultoría.</p>
        {/* Agrega más párrafos, imágenes y otros elementos según sea necesario */}
      </section>
      <Footer />
    </div>
  );
};

export default Clients;
