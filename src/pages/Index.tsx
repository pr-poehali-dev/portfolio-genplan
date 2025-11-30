import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      id: '03',
      year: '2025',
      type: 'Group Project',
      title: 'CycleHaus | Real Estate Development of Herzoggrplatz | BauHaus Universität Weimar',
      images: [
        'https://cdn.poehali.dev/files/485f935f-eb23-4b6b-9f32-78d889d5c6cd.jpeg',
      ],
    },
    {
      id: '04',
      year: '2024',
      type: 'Individual Work',
      title: 'Sustainability-Oriented Development Plan | Gemmerek, Aydın (Diploma Project) | ITU Istanbul Technical University',
      images: [
        'https://cdn.poehali.dev/files/a2e5edee-d39b-44d5-b4cb-22e0aabef437.jpeg',
        'https://cdn.poehali.dev/files/2bb53ac8-8bbf-40f5-a57b-8252cfab137b.jpeg',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
        <div className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-heading font-semibold text-neutral-800 tracking-tight">
              Усов Артём Игоревич
            </h1>
            <div className="hidden md:flex gap-8">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'about', label: 'Обо мне' },
                { id: 'projects', label: 'Портфолио' },
                { id: 'skills', label: 'Компетенции' },
                { id: 'contact', label: 'Контакты' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-xs font-medium uppercase tracking-wider transition-colors hover:text-neutral-900 ${
                    activeSection === item.id ? 'text-neutral-900' : 'text-neutral-500'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center pt-20 bg-neutral-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <p className="text-neutral-500 font-light text-sm uppercase tracking-widest mb-3">
                Инженер-проектировщик генплана
              </p>
              <h2 className="text-5xl md:text-6xl font-heading font-light text-neutral-900 mb-6 leading-tight">
                Усов Артём<br />Игоревич
              </h2>
              <p className="text-base text-neutral-600 mb-6 leading-relaxed font-light">
                Комплексное проектирование генеральных планов, транспортной и инженерной инфраструктуры промышленных и социальных объектов
              </p>
              <div className="flex items-center gap-3 mb-8 pb-6 border-b border-neutral-200">
                <div className="flex items-center gap-2 text-xs text-neutral-600 font-light">
                  <span className="w-1 h-1 bg-neutral-400 rounded-full"></span>
                  <span>AutoCAD</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-600 font-light">
                  <span className="w-1 h-1 bg-neutral-400 rounded-full"></span>
                  <span>Civil 3D</span>
                </div>
              </div>
              <div className="flex gap-4">
                <Button 
                  onClick={() => scrollToSection('contact')} 
                  size="lg"
                  className="bg-neutral-900 hover:bg-neutral-800 text-white font-light"
                >
                  Связаться
                </Button>
                <Button 
                  onClick={() => scrollToSection('projects')} 
                  variant="outline" 
                  size="lg"
                  className="border-neutral-300 text-neutral-700 hover:bg-neutral-100 font-light"
                >
                  Портфолио
                </Button>
              </div>
            </div>
            <div className="animate-fade-in flex justify-center">
              <img
                src="https://cdn.poehali.dev/projects/aeceb9ca-0a0e-4df5-8c7c-552f235d5efc/files/4a2f22bb-a796-441f-b4bf-2e3e00bc2650.jpg"
                alt="Усов Артём Игоревич"
                className="rounded-sm shadow-xl max-w-md w-full grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <h3 className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-4">
                  01 — Обо мне
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed font-light">
                  Инженер-проектировщик с опытом разработки комплексных решений для промышленных объектов, транспортной инфраструктуры и социальных учреждений.
                </p>
              </div>
              
              <div className="md:col-span-8 space-y-8">
                <div className="border-l-2 border-neutral-200 pl-8">
                  <h4 className="text-sm font-medium uppercase tracking-wider text-neutral-900 mb-6">
                    Программное обеспечение
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-xs text-neutral-400">—</span>
                        <p className="font-medium text-sm text-neutral-900">AutoCAD, Civil 3D</p>
                      </div>
                      <p className="text-xs text-neutral-500 font-light ml-5">3D-моделирование территорий</p>
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-xs text-neutral-400">—</span>
                        <p className="font-medium text-sm text-neutral-900">Автоматизация</p>
                      </div>
                      <p className="text-xs text-neutral-500 font-light ml-5">Работа с геоданными</p>
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-xs text-neutral-400">—</span>
                        <p className="font-medium text-sm text-neutral-900">Трассирование</p>
                      </div>
                      <p className="text-xs text-neutral-500 font-light ml-5">Линейные объекты</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6 pt-6">
                  <div className="border-l-2 border-neutral-900 pl-4">
                    <div className="text-3xl font-light text-neutral-900 mb-1">7+</div>
                    <div className="text-xs text-neutral-500 uppercase tracking-wider font-light">Крупных проектов</div>
                  </div>
                  <div className="border-l-2 border-neutral-900 pl-4">
                    <div className="text-3xl font-light text-neutral-900 mb-1">2.9</div>
                    <div className="text-xs text-neutral-500 uppercase tracking-wider font-light">Га территорий</div>
                  </div>
                  <div className="border-l-2 border-neutral-900 pl-4">
                    <div className="text-3xl font-light text-neutral-900 mb-1">1625</div>
                    <div className="text-xs text-neutral-500 uppercase tracking-wider font-light">Метров ВПП</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 bg-neutral-50">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h3 className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-2">
              02 — Портфолио
            </h3>
            <h2 className="text-4xl font-heading font-light text-neutral-900">Избранные проекты</h2>
          </div>

          <div className="space-y-24">
            {projects.map((project, index) => (
              <div key={project.id} className="animate-fade-in">
                <div className="mb-6 flex items-baseline justify-between border-b border-neutral-200 pb-4">
                  <div className="flex items-baseline gap-4">
                    <span className="text-4xl font-light text-neutral-300">{project.id}.</span>
                    <h4 className="text-xl font-light text-neutral-900 max-w-2xl">
                      {project.title}
                    </h4>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-neutral-500 font-light">{project.year} / {project.type}</p>
                  </div>
                </div>
                
                <div className="grid gap-4">
                  {project.images.map((image, imgIndex) => (
                    <div 
                      key={imgIndex}
                      className="bg-white border border-neutral-200 rounded-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    >
                      <img
                        src={image}
                        alt={`${project.title} - изображение ${imgIndex + 1}`}
                        className="w-full h-auto"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-12">
              03 — Компетенции
            </h3>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-lg font-medium text-neutral-900 mb-6 border-b border-neutral-200 pb-3">
                  Проектирование
                </h4>
                <div className="space-y-4">
                  {[
                    'Генеральные планы промышленных объектов',
                    'Транспортная инфраструктура',
                    'Благоустройство территорий',
                    'Инженерные сети и коммуникации',
                  ].map((skill, index) => (
                    <div key={index} className="flex items-start gap-3 group">
                      <span className="text-xs text-neutral-300 mt-1 group-hover:text-neutral-900 transition-colors">→</span>
                      <span className="text-sm text-neutral-700 font-light">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium text-neutral-900 mb-6 border-b border-neutral-200 pb-3">
                  Технические навыки
                </h4>
                <div className="space-y-4">
                  {[
                    'AutoCAD, Civil 3D — 3D-моделирование',
                    'Работа с геоданными и топографией',
                    'Трассирование линейных объектов',
                    'Расчет объемов земляных работ',
                  ].map((skill, index) => (
                    <div key={index} className="flex items-start gap-3 group">
                      <span className="text-xs text-neutral-300 mt-1 group-hover:text-neutral-900 transition-colors">→</span>
                      <span className="text-sm text-neutral-700 font-light">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-neutral-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h3 className="text-xs font-medium uppercase tracking-widest text-neutral-500 mb-4">
                  04 — Контакты
                </h3>
                <h2 className="text-3xl font-heading font-light text-white mb-8">
                  Свяжитесь со мной
                </h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-neutral-300">
                    <Icon name="Mail" size={18} className="text-neutral-500" />
                    <a href="mailto:usov.artyom@example.com" className="hover:text-white transition-colors font-light text-sm">
                      usov.artyom@example.com
                    </a>
                  </div>
                  <div className="flex items-center gap-4 text-neutral-300">
                    <Icon name="Phone" size={18} className="text-neutral-500" />
                    <a href="tel:+79001234567" className="hover:text-white transition-colors font-light text-sm">
                      +7 (900) 123-45-67
                    </a>
                  </div>
                  <div className="flex items-center gap-4 text-neutral-300">
                    <Icon name="MapPin" size={18} className="text-neutral-500" />
                    <span className="font-light text-sm">Москва, Россия</span>
                  </div>
                </div>
              </div>

              <form className="space-y-6">
                <div>
                  <Input
                    type="text"
                    placeholder="Ваше имя"
                    className="bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500 font-light"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    className="bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500 font-light"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Сообщение"
                    className="bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500 min-h-[120px] font-light"
                  />
                </div>
                <Button className="w-full bg-white text-neutral-900 hover:bg-neutral-100 font-light">
                  Отправить сообщение
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-neutral-950 py-8 border-t border-neutral-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-neutral-600 font-light">
              © 2024 Усов Артём Игоревич. Все права защищены.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors font-light">
                Telegram
              </a>
              <a href="#" className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors font-light">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
