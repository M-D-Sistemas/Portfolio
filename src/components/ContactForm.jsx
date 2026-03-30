import { useState } from 'react';

const initialState = {
  name: '',
  email: '',
  message: '',
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData(initialState);
  };

  return (
    <section id="contact" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-8 rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-black/20 md:grid-cols-[0.9fr_1.1fr] md:p-8">
        <div>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Contacto</h2>
          <p className="mt-4 text-slate-300">
            Completá el formulario y coordinemos una conversación sobre tu próximo desarrollo.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-200">
              Nombre
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Tu nombre"
              className="w-full rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="tu@empresa.com"
              className="w-full rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Contanos qué necesitás construir..."
              className="w-full rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            Enviar consulta
          </button>
        </form>
      </div>
    </section>
  );
}