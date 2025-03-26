import React from "react";

const offices = [
  {
    id: 1,
    companyName: "XYZ Pvt. Ltd.",
    address: "123 Business Street, Suite 456, New York, NY 10001",
    email: "contact@xyz.com",
    phone: "+1 123-456-7890",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.970395486794!2d-74.00601548459513!3d40.71277527933071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a31664b8e1d%3A0x2bbecbd730a6fda3!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1620909088826!5m2!1sen!2sin",
  },
  {
    id: 2,
    companyName: "ABC Corporation",
    address: "789 Business Ave, Los Angeles, CA 90012",
    email: "support@abc.com",
    phone: "+1 987-654-3210",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27427919564!2d-118.74139097526066!3d34.020608474536404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c63e5db2b569%3A0x1c5d29a62d6d5a51!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1620909088826!5m2!1sen!2sin",
  },
];

const OfficeAddressPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Our Offices</h1>

      {offices.map((office) => (
        <div
          key={office.id}
          className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full text-center mb-6"
        >
          <p className="text-gray-600 mb-2">
            <strong>Company Name:</strong> {office.companyName}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Address:</strong> {office.address}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Email:</strong> {office.email}
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Phone:</strong> {office.phone}
          </p>

          {/* Embedded Google Map */}
          <div className="rounded-lg overflow-hidden">
            <iframe
              className="w-full h-56"
              src={office.mapUrl}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OfficeAddressPage;
