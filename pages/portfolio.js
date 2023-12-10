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
      <PortfolioGallery />
      <Footer />
    </div>
  );
};

export default Portfolio;
