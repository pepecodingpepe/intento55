// /components/contact/ContactBanner.js
import Link from 'next/link';

const ContactBanner = () => {
  return (
    <section className="bg-gray-300 text-center p-8">
      <h2 className="text-3xl font-bold mb-4">¿Listo para comenzar?</h2>
      <p className="mb-4">Contáctanos hoy para obtener más información.</p>
      <Link href="/contact">
        <a className="bg-blue-500 text-white px-4 py-2 rounded-md">Contacto</a>
      </Link>
    </section>
  );
};

export default ContactBanner;
