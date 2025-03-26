import React from "react";
import Container from "../ui/Container";
import { Card } from "../ui/card";
import Image from "next/image";

type ServiceType = {
  imageUrl: string;
  title: string;
  service: string;
};

const services: ServiceType[] = [
  {
    imageUrl: "/assets/logos/delivery.svg",
    title: "60 mins delivery",
    service: "Free shipping over 1000Tk",
  },
  {
    imageUrl: "/assets/logos/administrator.svg",
    title: "Authorized Products",
    service: "within 30 days for an exchange",
  },
  {
    imageUrl: "/assets/logos/headphone.svg",
    title: "Customer Service Support",
    service: "9am to 9pm",
  },
  {
    imageUrl: "/assets/logos/payment.svg",
    title: "Flexible Payments",
    service: "Pay with multiple credit cards",
  },
];

const ServicesInfo = () => {
  return (
    <Container container="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {services.map((service, index) => (
          <Card key={index} className=" flex items-center gap-4">
            <Image
              src={service.imageUrl}
              alt={`${service.title} tabseer shop`}
              height={50}
              width={50}
            />
            <div className="text-center">
              <h2 className="font-semibold">{service.title}</h2>
              <p className="text-sm text-gray-600">{service.service}</p>
            </div>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default ServicesInfo;
