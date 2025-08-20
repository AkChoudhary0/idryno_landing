import { services } from "../data/services";

export default function Services() {
  return (
    <section id="services" className="py-24 px-8 bg-gray-950">
      <h3 className="text-3xl font-bold text-center mb-12">Our Services</h3>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <div key={i} className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center">
            <service.icon className="w-12 h-12 mx-auto text-blue-500 mb-4" />
            <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
            <p className="text-gray-400">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
