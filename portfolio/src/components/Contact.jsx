export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">

      <div className="max-w-3xl mx-auto">

        <h2 className="text-center text-5xl font-bold">
          Let's Connect
        </h2>

        <form className="mt-12 space-y-5">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-2xl bg-white/5 border border-white/10"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-4 rounded-2xl bg-white/5 border border-white/10"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
            className="w-full p-4 rounded-2xl bg-white/5 border border-white/10"
          />

          <button
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500"
          >
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}