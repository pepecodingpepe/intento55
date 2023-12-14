import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import CustomHead from '../components/common/CustomHead';
import Logina from '../components/common/Logina';

const login2 = () => {
    return (
      <div>
        <CustomHead />
        <Header />

        <p className=" flex-wrap font-serif text-7xl text-center font-bold mb-2 py-2 mx-12 px-36 mt-28">
                Ingresa a tu <span class="text-transparent bg-clip-text bg-gradient-to-r to-fuchsia-600 from-orange-400">Dashboard</span> y revisa los detalles de tu proyecto 
              </p>

        <Logina />
  
   
        
  
        
  
  <Footer />
  
  
      </div>
    );
  };
  
  export default login2;