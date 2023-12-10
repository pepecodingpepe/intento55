// /components/home/ServiceCard.js
const ServiceCard = ({ title, description, ctaText }) => {
    return (
      <div className=" bg-white p-10 py-px-10   shadow-md rounded-b-lg mb-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4 text-xl">{description}</p>
        <button className="font-mono font-bold bg-cyan-500 text-white px-4 py-2 rounded-xl">{ctaText}</button>
      </div>
    );
  };
  
  export default ServiceCard;
  