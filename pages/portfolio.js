// /pages/portfolio.js
import Header from '../components/common/Header';
import PortfolioGallery from '../components/portfolio/PortfolioGallery';
import Footer from '../components/common/Footer';
import CustomHead from '../components/common/CustomHead'; // Importa el componente CustomHead

const Portfolio = () => {
  return (
    <div>
      <CustomHead />
      <Header />
      <section className="min-h-screen flex items-center justify-center">
      <p className="flex-wrap font-serif text-7xl text-center font-bold mb-2 py-10 mx-44">Página en construcción </p>
      

 
      </section>
      
      <Footer />
    </div>
  );
};

export default Portfolio;
