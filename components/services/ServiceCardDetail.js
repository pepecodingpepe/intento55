// /components/services/ServiceCardDetail.js
const ServiceCardDetail = ({ type, availability, cost }) => {
    return (
      <div className="bg-white p-6 shadow-md rounded-md mb-4">
        <h2 className="text-xl font-bold mb-2">{type}</h2>
        <p className="text-gray-600 mb-2"><strong>Disponibilidad:</strong> {availability}</p>
        <p className="text-gray-600 mb-2"><strong>Costeo Aproximado:</strong> {cost}</p>
      </div>
    );
  };
  
  export default ServiceCardDetail;
  