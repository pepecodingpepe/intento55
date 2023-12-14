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




      <section className="min-h-screen flex items-center justify-center py-16">
      
      <figure class="relative h-auto max-w-6xl transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
<a href="">
<img class="rounded-lg" src="https://i.postimg.cc/qMn4b4BM/CV-01.jpg" alt="image description"/>
</a>
<figcaption class="absolute px-4 text-2xl text-white bottom-6">
<p className="font-mono items-center"></p>
</figcaption>
</figure>
 
      </section>

      



      <section className="min-h-screen flex items-center justify-center py-16">
      
      <figure class="relative h-auto max-w-6xl transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
<a href="">
<img class="rounded-lg" src="https://i.postimg.cc/SxhqH3jL/CV-02.jpg" alt="image description"/>
</a>
<figcaption class="absolute px-4 text-2xl text-white bottom-6">
<p className="font-mono items-center"></p>
</figcaption>
</figure>
 
      </section>

      



      <section className="min-h-screen flex items-center justify-center py-16">
      
      <figure class="relative h-auto max-w-6xl transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
<a href="">
<img class="rounded-lg" src="https://i.postimg.cc/Pq6jpqyK/CV-03.jpg" alt="image description"/>
</a>
<figcaption class="absolute px-4 text-2xl text-white bottom-6">
<p className="font-mono items-center"></p>
</figcaption>
</figure>
 
      </section>

      



      <section className="min-h-screen flex items-center justify-center py-16">
      
      <figure class="relative h-auto max-w-6xl transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
<a href="">
<img class="rounded-lg" src="https://i.postimg.cc/jjqTSfHL/CV-04.jpg" alt="image description"/>
</a>
<figcaption class="absolute px-4 text-2xl text-white bottom-6">
<p className="font-mono items-center"></p>
</figcaption>
</figure>
 
      </section>


      



      <section className="min-h-screen flex items-center justify-center py-16">
      
      <figure class="relative h-auto max-w-6xl transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
<a href="">
<img class="rounded-lg" src="https://i.postimg.cc/XYk3WLyR/CV-05.jpg" alt="image description"/>
</a>
<figcaption class="absolute px-4 text-2xl text-white bottom-6">
<p className="font-mono items-center"></p>
</figcaption>
</figure>
 
      </section>


      



      <section className="min-h-screen flex items-center justify-center py-16">
      
      <figure class="relative h-auto max-w-6xl transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
<a href="">
<img class="rounded-lg" src="https://i.postimg.cc/sXqCm0th/CV-06.jpg" alt="image description"/>
</a>
<figcaption class="absolute px-4 text-2xl text-white bottom-6">
<p className="font-mono items-center"></p>
</figcaption>
</figure>
 
      </section>




      
      <Footer />
    </div>
  );
};

export default Portfolio;
