// /pages/contact.js
/*  @next/next/no-img-element */

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

      <div className="flex justify-center items-center py-12">

<figure className="relative h-auto max-w-3xl transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
<a href="">
<img className="rounded-lg" src="https://www.gadens.com/wp-content/uploads/2017/08/Handshake_Banner-768x261.jpg" alt="image description"/>
</a>
<figcaption className="absolute px-4 text-2xl text-white bottom-6">
<p className="font-mono items-center"></p>
</figcaption>
</figure>

</div>

<section className="text-center p-2">

<h1 className="font-normal italic text-4xl font-bold py-3 mb-2 ">Nuestro negocio es que el tuyo sea exitoso</h1>
         </section>


      <p className="flex-wrap font-serif text-7xl text-center font-bold mb-2 py-8 mx-44 px-36">
                Agenda una cita y elevemos tu empresa al <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-lime-400">siguiente nivel</span> 
              
              </p>






        <FormularioComp />

        



        
      
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
