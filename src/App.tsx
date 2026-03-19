import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  Instagram, 
  Phone, 
  MapPin, 
  Clock, 
  ChevronRight, 
  Baby, 
  Sparkles, 
  ShieldCheck, 
  Smile,
  MessageCircle
} from 'lucide-react';

// WhatsApp Link Helper
const WHATSAPP_LINK = "https://wa.me/5551986064798";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre Mim', href: '#sobre' },
    { name: 'Especialidades', href: '#especialidades' },
    { name: 'Estrutura', href: '#estrutura' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#inicio" className="text-xl md:text-2xl font-bold text-brand-primary tracking-tight">
            Dra. Manoela <span className="text-brand-secondary">Spohr</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium hover:text-brand-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-secondary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg"
            >
              Agendar Avaliação
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 md:hidden"
            >
              <div className="flex flex-col p-6 space-y-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-medium text-gray-700 hover:text-brand-primary"
                  >
                    {link.name}
                  </a>
                ))}
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-secondary text-white px-6 py-3 rounded-xl text-center font-semibold"
                >
                  Agendar Avaliação
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://instagram.fpoa35-1.fna.fbcdn.net/v/t51.75761-15/503438875_18507876886009656_4583824472721521646_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ig_cache_key=MzY1ODU1NTAwNTM3Nzc0NTg1NA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEzNTB4MTY4OC5zZHIuQzMifQ%3D%3D&_nc_ohc=dOfeCcNq5Z0Q7kNvwFWnBoN&_nc_oc=AdonmITljCU_LAs6L6Q9bFMD-Gl-1LVadt2Sd-Hi1_iVOHhwc504JNr_EbqZaE74aM7DKYsT-7t2qQ9_P2vPyKGH&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fpoa35-1.fna&_nc_gid=QWteQzxU5LpZybgyGYOibQ&_nc_ss=8&oh=00_AfzqzqoR8OouEhXtrM3oEB3F8X2XMA7-DyO_UmAVVL3eDw&oe=69C19AC8" 
            alt="Dra. Manoela Spohr"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block bg-brand-accent text-brand-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Ortodontia & Odontopediatria
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Transformando Sorrisos com <span className="text-brand-primary">Cuidado</span> e Especialização.
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Atendimento humanizado para adultos e crianças em Tramandaí. O cuidado certo faz toda a diferença no seu sorriso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-primary text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-transform"
              >
                <MessageCircle size={20} />
                Agende sua Consulta
              </a>
              <a 
                href="#especialidades"
                className="bg-white text-gray-800 border border-gray-200 px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
              >
                Conheça os Serviços
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 bg-brand-nude">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2"
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-secondary rounded-full opacity-20 blur-2xl"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-primary rounded-full opacity-20 blur-2xl"></div>
                <img 
                  src="https://instagram.fpoa39-1.fna.fbcdn.net/v/t51.82787-15/526034637_18515285947009656_1593546552964043586_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ig_cache_key=MzY4ODQyNzMxOTMwODYzNDIyNQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=ri02oAdcTHQQ7kNvwHtYBVc&_nc_oc=AdrbY0OKw3n6SEX2eLRo8BkJn4HtbRZajvAGdr-NievCjvD8VkHEAIIXvmsO1zTEm71y2dDZ2N4gOJEMH_ptRNUv&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fpoa39-1.fna&_nc_gid=QWteQzxU5LpZybgyGYOibQ&_nc_ss=8&oh=00_Afyq87X5EW33vaztJPljejVMNiq2M2kLoaFQhJBs56lSfg&oe=69C1917B" 
                  alt="Dra. Manoela Spohr"
                  className="rounded-3xl shadow-2xl relative z-10 w-full aspect-[4/5] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Dra. Manoela Luiza Spohr</h2>
              <p className="text-brand-primary font-semibold mb-4">Ortodontista e Odontopediatra</p>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Minha missão é muito mais do que cuidar de dentes; é sobre amar transformar vidas. Acredito que um sorriso saudável é a porta de entrada para a confiança e o bem-estar.
                </p>
                <p>
                  Com especialização em Ortodontia e Odontopediatria, dedico meu dia a dia a oferecer tratamentos modernos e eficazes, sempre com um olhar atento às necessidades individuais de cada paciente, desde os primeiros passos até a vida adulta.
                </p>
                <p>
                  Em meu consultório em Tramandaí, priorizo um atendimento acolhedor, seguro e humanizado, garantindo que cada visita seja uma experiência positiva e tranquila para toda a família.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Paciente" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <p className="text-sm font-medium text-gray-500">+500 sorrisos transformados</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section id="especialidades" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossas Especialidades</h2>
            <p className="text-gray-600">Oferecemos soluções completas para a saúde e estética do seu sorriso, com tecnologia e carinho.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Ortodontia',
                desc: 'Aparelhos fixos e estéticos para um alinhamento perfeito e funcional.',
                icon: <Smile className="text-brand-primary" size={32} />,
                color: 'bg-blue-50'
              },
              {
                title: 'Odontopediatria',
                desc: 'Cuidado especializado e lúdico para a saúde bucal das crianças.',
                icon: <Baby className="text-brand-secondary" size={32} />,
                color: 'bg-pink-50'
              },
              {
                title: 'Clareamento',
                desc: 'Procedimentos seguros para um sorriso mais branco e iluminado.',
                icon: <Sparkles className="text-yellow-500" size={32} />,
                color: 'bg-yellow-50'
              },
              {
                title: 'Prevenção',
                desc: 'Manutenção da saúde bucal para evitar problemas futuros.',
                icon: <ShieldCheck className="text-green-500" size={32} />,
                color: 'bg-green-50'
              }
            ].map((spec, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all group"
              >
                <div className={`w-16 h-16 ${spec.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {spec.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{spec.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{spec.desc}</p>
                <a href={WHATSAPP_LINK} className="mt-6 inline-flex items-center text-brand-primary font-semibold text-sm hover:gap-2 transition-all">
                  Saiba mais <ChevronRight size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Structure Section */}
      <section id="estrutura" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop" 
                  alt="Consultório" 
                  className="rounded-2xl h-64 w-full object-cover shadow-lg"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070&auto=format&fit=crop" 
                  alt="Equipamentos" 
                  className="rounded-2xl h-64 w-full object-cover shadow-lg mt-8"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Nossa Estrutura</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Projetamos um ambiente que une tecnologia de ponta e o máximo de conforto para você e sua família.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-primary">
                    <Baby size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Espaço Kids</h4>
                    <p className="text-sm text-gray-500">Sala de atendimento exclusiva e lúdica para as crianças, garantindo que elas se sintam seguras.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-primary">
                    <Smile size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Atendimento Adulto</h4>
                    <p className="text-sm text-gray-500">Ambiente sofisticado e tranquilo para procedimentos ortodônticos e estéticos.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">O que dizem nossos pacientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Carla Silveira",
                text: "A Dra. Manoela é maravilhosa! Meu filho tinha pavor de dentista e hoje ele adora ir nas consultas. O atendimento é muito carinhoso.",
                role: "Mãe do Pedro"
              },
              {
                name: "Ricardo Mendes",
                text: "Iniciei meu tratamento ortodôntico e estou impressionado com a atenção aos detalhes. O consultório é impecável.",
                role: "Paciente de Ortodontia"
              },
              {
                name: "Juliana Costa",
                text: "Fiz clareamento e o resultado ficou incrível. Super natural e sem sensibilidade. Recomendo muito a clínica!",
                role: "Paciente de Estética"
              }
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex text-yellow-400 mb-4">
                  {[1, 2, 3, 4, 5].map(s => <i key={s} className="fas fa-star text-xs"></i>)}
                </div>
                <p className="text-gray-600 italic mb-6">"{t.text}"</p>
                <div>
                  <p className="font-bold text-gray-900">{t.name}</p>
                  <p className="text-xs text-brand-primary uppercase tracking-wider font-semibold">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contato" className="bg-gray-900 text-white pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold mb-6">Dra. Manoela <span className="text-brand-secondary">Spohr</span></h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                "Ser dentista é sobre amar transformar vidas. O cuidado certo faz toda a diferença no seu sorriso."
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/dentistamanoela" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-500 transition-colors"
                >
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Contato</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-brand-primary flex-shrink-0" />
                  <span>Fernando Amaral 134 - Tramandaí, RS</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-brand-primary flex-shrink-0" />
                  <span>(51) 98606-4798 / (51) 3661-4798</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Horários</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li className="flex items-center gap-3">
                  <Clock size={18} className="text-brand-primary flex-shrink-0" />
                  <span>Segunda a Sexta: 08h às 18h</span>
                </li>
                <li className="flex items-center gap-3 opacity-50">
                  <Clock size={18} className="text-gray-600 flex-shrink-0" />
                  <span>Sábado e Domingo: Fechado</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Localização</h4>
              <div className="rounded-xl overflow-hidden h-40 bg-gray-800">
                {/* Placeholder for map */}
                <div className="w-full h-full flex items-center justify-center text-gray-500 text-xs text-center p-4">
                  <MapPin size={24} className="mb-2 block mx-auto" />
                  Fernando Amaral 134, Tramandaí
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-xs">
            <p>&copy; {new Date().getFullYear()} Dra. Manoela Luiza Spohr. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform animate-bounce"
        aria-label="WhatsApp"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
}
