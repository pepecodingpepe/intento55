/* eslint-disable @next/next/no-img-element */
/* @next/next/no-html-link-for-pages*/

import Header from '../components/common/Header';
import HomeBanner from '../components/home/HomeBanner';
import ServiceCard from '../components/home/ServiceCard';
import Footer2 from '../components/common/Footer2';
import CustomHead from '../components/common/CustomHead'; // Importa el componente CustomHead



const Home = () => {
  return ( 

  
  <div className="bg-white">


  <CustomHead />
      <Header /> 


  <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Boost your productivity.
        <br />
        Start using our app today.
      </h2>
      <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
        Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur
        commodo do ea.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <a
          href="#"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Get started
        </a>
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          Learn more <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  </div>

  <Footer2 />


</div>
)
}

      



export default Home;
