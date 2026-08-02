import { useParams } from "react-router-dom";
import servicesData from "../data/servicesData";

export default function ServiceDetails() {
  const { slug } = useParams();

  const service = servicesData.find((item) => item.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">Service Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Hero */}
        <section className="rounded-3xl bg-gradient-to-r from-[#235784] via-[#1A425F] to-[#40A8C4] px-10 py-20 text-white shadow-2xl">
          <span className="inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-semibold uppercase tracking-wider">
            Bootstack Services
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-extrabold">
            {service.title}
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-8 text-white/90">
            {service.subtitle}
          </p>
        </section>

        {/* About */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-[#235784]">
            {service.about.heading}
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            {service.about.description}
          </p>
        </section>

        {/* Why It Matters */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-[#235784]">
            {service.whyItMatters.heading}
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            {service.whyItMatters.description}
          </p>
        </section>

        {/* Why Bootstack */}
        <section className="mt-20 rounded-3xl bg-[#EEF6F7] p-10">
          <h2 className="text-3xl font-bold text-[#235784]">
            {service.whyBootstack.heading}
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            {service.whyBootstack.description}
          </p>
        </section>

        {/* What We Do Best */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-[#235784]">
            What We Do Best
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {service.services.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <h3 className="text-xl font-semibold text-[#235784]">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* Our Process */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-[#235784]">
            Our Process
          </h2>

          <div className="mt-10 space-y-6">
            {service.process.map((step, index) => (
              <div
                key={index}
                className="flex items-center gap-5 rounded-2xl bg-[#EEF6F7] p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#235784] text-lg font-bold text-white">
                  {index + 1}
                </div>

                <h3 className="text-xl font-semibold text-[#235784]">
                  {step}
                </h3>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}