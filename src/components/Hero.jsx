import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="text-center py-32 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-6xl font-extrabold"
      >
        Strong Ideas. Stronger Tech.
      </motion.h2>
      <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
        iDryno blends <span className="text-blue-400">innovation</span> with the
        <span className="text-blue-400"> strength of a Rhino</span>, delivering reliable IT solutions to power your business.
      </p>
      <div className="mt-8 space-x-4">
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl">Explore Services</button>
        <button className="border border-gray-500 hover:border-blue-400 px-6 py-3 rounded-xl">Contact Us</button>
      </div>
    </section>
  );
}
