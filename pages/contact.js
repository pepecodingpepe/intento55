// /pages/contact.js
import Header from '@/components/common/Header';
import Footer from '../components/common/Footer';
import CustomHead from '../components/common/CustomHead'; // Importa el componente CustomHead
import FormularioComp from '../components/contact/FormularioComp';

const Contact = () => {
  return (
    <div>
      <CustomHead />
      <Header />
      <section className="p-8">
        <img src="https://iili.io/JIrTVu1.png" alt="Portada" className="w-full h-auto mb-8" />


        <FormularioComp />

        



        
        <div className="flex justify-between mt-4">
          <button className="bg-cyan-600 text-white px-4 py-2 rounded-xl font-bold ">Conoce nuestro portafolio</button>
          <button className="bg-lime-500 text-white px-4 py-2 rounded-xl font-bold ">Agenda una cita 1 a 1</button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
