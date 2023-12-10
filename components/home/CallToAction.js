// /components/home/CallToAction.js
import Link from 'next/link';

const CallToAction = () => {
  return (
    <section className="bg-blue-500 text-white text-center p-8">
      <h2 className="text-3xl font-bold mb-4">¡Trabajemos Juntos!</h2>
      <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec urna eget libero vestibulum rhoncus.</p>
      <Link href="/contact">
        <a className="bg-white text-blue-500 px-4 py-2 rounded-md">Contacto</a>
      </Link>
    </section>
  );
};

export default CallToAction;
