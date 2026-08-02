import { useParams } from "react-router-dom";

import Hero from "../components/our-service-details/Hero";
import WhatItIs from "../components/our-service-details/WhatItIs";
import Importance from "../components/our-service-details/Importance";
import ConsultationProcess from "../components/our-service-details/ConsultationProcess";
import WhyItMatters from "../components/our-service-details/WhyItMatters";
import BusinessImpact from "../components/our-service-details/BusinessImpact";

import services from "../ServiceContent/services.config";

export default function OurServiceDetails() {
  const { slug } = useParams();

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return <h1>Service Not Found</h1>;
  }

  return (
  <>
  <Hero data={service.hero} />

  <WhatItIs
    title={service.hero.title}
    data={service.whatItIs}
  />

  <Importance
    data={service.importance}
  />

  <ConsultationProcess
    data={service.consultationProcess}
  />

  <WhyItMatters
  data={service.whyitMatters}
/>

   <BusinessImpact
  data={service.businessImpact}
/>

</>
  );
}