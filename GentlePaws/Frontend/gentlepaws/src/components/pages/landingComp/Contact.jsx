export function Contact () {
  return (
    <section id="contact" className="py-16">
      <h1 className="text-2xl font-bold text-center">Contact Us</h1>
      <form className="max-w-lg mx-auto">
        <div className="flex flex-col space-y-4">
          <input type="text" placeholder="Name" className="p-2 border rounded" required />
          <input type="email" placeholder="Email" className="p-2 border rounded" required />
          <input type="tel" placeholder="Phone" className="p-2 border rounded" required />
          <textarea placeholder="Message" className="p-2 border rounded" required></textarea>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
        </div>
      </form>
    </section>
  );
};
