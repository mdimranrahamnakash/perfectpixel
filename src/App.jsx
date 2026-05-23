import { motion } from 'framer-motion';
import {
  Mail,
  MessageCircle,
  ArrowRight,
  Sparkles,
  Image,
  Layers,
} from 'lucide-react';

const portfolioItems = [
  {
    title: 'AI Product Visualization',
    category: 'Etsy AI Product',
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Luxury Fashion Mockup',
    category: 'Vinted Clothing',
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Premium Retouch',
    category: 'Photoshop Editing',
    image:
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full"></div>
      </div>

      <nav className="flex items-center justify-between px-6 md:px-14 py-6 border-b border-white/10 backdrop-blur-xl sticky top-0 z-50 bg-black/30">
        <div>
          <h1 className="text-2xl font-bold tracking-widest">
            PERFECT <span className="text-cyan-400">PIXEL</span>
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#portfolio" className="hover:text-white transition">Portfolio</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
      </nav>

      <section className="min-h-screen flex items-center px-6 md:px-14 py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 mb-6">
              <Sparkles size={16} />
              AI Cinematic Product Studio
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Transforming Products Into
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Cinematic Visuals
              </span>
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-10">
              Perfect Pixel creates high-end AI-generated product images,
              luxury mockups, cinematic ecommerce visuals, and professional Photoshop editing.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#portfolio" className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 font-semibold flex items-center gap-2 hover:scale-105 transition">
                View Portfolio <ArrowRight size={18} />
              </a>

              <a href="https://wa.me/8801775231270" className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
                Contact Me
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="relative"
          >
            <div className="relative rounded-[40px] overflow-hidden border border-white/10 backdrop-blur-xl bg-white/5 p-4 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?q=80&w=1200&auto=format&fit=crop"
                className="w-full h-[500px] object-cover rounded-[30px]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="px-6 md:px-14 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">My Services</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Premium AI and Photoshop solutions.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Image size={34} />,
                title: 'Photoshop Editing',
                desc: 'Professional retouching and enhancement.',
              },
              {
                icon: <Sparkles size={34} />,
                title: 'AI Product Images',
                desc: 'AI-generated ecommerce visuals.',
              },
              {
                icon: <Layers size={34} />,
                title: 'Fashion Mockups',
                desc: 'Clothing visualization and mockups.',
              },
            ].map((service, index) => (
              <motion.div key={index} whileHover={{ y: -10 }} className="rounded-[32px] border border-white/10 bg-white/5 p-8">
                <div className="mb-6 text-cyan-400">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-14 py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-10 text-center">Before & After</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {[1, 2].map((i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                <div className="grid grid-cols-2">
                  <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop" className="h-[300px] object-cover" />
                  <img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop" className="h-[300px] object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="px-6 md:px-14 py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-10">Featured Work</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="rounded-2xl overflow-hidden border border-white/10">
                <img src={item.image} className="h-[400px] w-full object-cover" />
                <div className="p-6">
                  <p className="text-cyan-400 text-sm">{item.category}</p>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 md:px-14 py-24 text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-10">Contact</h2>
        <p className="text-gray-400 mb-10">Let’s work together</p>
        <div className="flex justify-center gap-6 flex-wrap">
          <a href="mailto:imranrahamn@yahoo.com" className="px-6 py-3 bg-white/10 rounded-xl">Email</a>
          <a href="https://wa.me/8801775231270" className="px-6 py-3 bg-white/10 rounded-xl">WhatsApp</a>
          <a href="https://www.upwork.com/freelancers/~01be32305cf90d0cd3?mp_source=share" className="px-6 py-3 bg-white/10 rounded-xl">Upwork</a>
        </div>
      </section>

      <footer className="py-10 text-center text-gray-500 border-t border-white/10">
        © 2026 Perfect Pixel
      </footer>
    </div>
  );
}
