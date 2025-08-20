export default function Contact() {
  return (
    <section id="contact" className="py-24 px-8 bg-gray-950">
      <h3 className="text-3xl font-bold text-center mb-8">Get in Touch</h3>
      <form className="max-w-2xl mx-auto grid gap-6">
        <input type="text" placeholder="Your Name" className="p-4 rounded-xl bg-gray-800 border border-gray-700" />
        <input type="email" placeholder="Your Email" className="p-4 rounded-xl bg-gray-800 border border-gray-700" />
        <textarea placeholder="Your Message" rows="5" className="p-4 rounded-xl bg-gray-800 border border-gray-700" />
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl">Send Message</button>
      </form>
    </section>
  );
}
