'use client';

import { useState } from 'react';
import { ContactFormData } from '@/types';

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    comment: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Decorative Plant Graphic */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-96 h-96 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-l from-emerald-500 to-green-600 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-4 text-white">
            Готовы преобразить ваш офис?
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12">
            Оставьте заявку и мы свяжемся с вами в течение часа
          </p>
          
          <form onSubmit={handleSubmit} className="glass-effect rounded-3xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Имя
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors"
                  placeholder="Ваше имя"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-gray-300 mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors"
                  placeholder="+7 (___)-___-__-__"
                  required
                />
              </div>
            </div>
            
            <div className="mb-8">
              <label htmlFor="comment" className="block text-gray-300 mb-2">
                Комментарий
              </label>
              <textarea
                id="comment"
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                rows={4}
                className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                placeholder="Расскажите о вашем проекте..."
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-emerald-600 hover:to-green-700 transition-all duration-300 smooth-shadow"
            >
              Отправить заявку
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}