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
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
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

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-heading font-bold text-primary">Усов Артём Игоревич</h1>
            <div className="hidden md:flex gap-8">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'about', label: 'Обо мне' },
                { id: 'experience', label: 'Опыт' },
                { id: 'projects', label: 'Проекты' },
                { id: 'skills', label: 'Компетенции' },
                { id: 'contact', label: 'Контакты' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    activeSection === item.id ? 'text-accent' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <p className="text-secondary font-medium mb-2">Инженер-проектировщик генплана</p>
              <h2 className="text-5xl md:text-6xl font-heading font-bold text-primary mb-4">
                Усов Артём Игоревич
              </h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Комплексное проектирование генеральных планов, транспортной и инженерной инфраструктуры промышленных и социальных объектов
              </p>
              <div className="flex items-center gap-2 mb-8">
                <Icon name="Laptop" className="text-accent" size={20} />
                <p className="text-sm font-medium text-foreground">
                  AutoCAD • Civil 3D
                </p>
              </div>
              <div className="flex gap-4">
                <Button onClick={() => scrollToSection('contact')} size="lg">
                  Связаться
                </Button>
                <Button onClick={() => scrollToSection('projects')} variant="outline" size="lg">
                  Мои проекты
                </Button>
              </div>
            </div>
            <div className="animate-fade-in flex justify-center">
              <img
                src="https://cdn.poehali.dev/projects/aeceb9ca-0a0e-4df5-8c7c-552f235d5efc/files/4a2f22bb-a796-441f-b4bf-2e3e00bc2650.jpg"
                alt="Усов Артём Игоревич"
                className="rounded-lg shadow-2xl max-w-md w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-heading font-bold text-primary mb-12 text-center">
            Обо мне
          </h3>
          <div className="max-w-4xl mx-auto">
            <Card className="animate-fade-in">
              <CardContent className="p-8">
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  Инженер-проектировщик с опытом разработки комплексных решений для промышленных объектов, транспортной инфраструктуры и социальных учреждений. Специализируюсь на генеральном планировании, благоустройстве территорий и проектировании дорог.
                </p>
                <div className="bg-accent/5 border border-accent/20 rounded-lg p-6 mb-6">
                  <h4 className="text-base font-semibold text-primary mb-4 flex items-center gap-2">
                    <Icon name="Laptop" size={20} />
                    Программное обеспечение
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-2">
                      <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-0.5" size={16} />
                      <div>
                        <p className="font-medium text-sm">AutoCAD, Civil 3D</p>
                        <p className="text-xs text-muted-foreground">3D-моделирование территорий</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-0.5" size={16} />
                      <div>
                        <p className="font-medium text-sm">Автоматизация чертежей</p>
                        <p className="text-xs text-muted-foreground">Работа с геоданными</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-0.5" size={16} />
                      <div>
                        <p className="font-medium text-sm">Трассирование</p>
                        <p className="text-xs text-muted-foreground">Линейные объекты</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center p-6 bg-background rounded-lg">
                    <div className="text-4xl font-heading font-bold text-accent mb-2">7+</div>
                    <div className="text-sm text-muted-foreground">Крупных проектов</div>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg">
                    <div className="text-4xl font-heading font-bold text-accent mb-2">2.9</div>
                    <div className="text-sm text-muted-foreground">Га освоенных территорий</div>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg">
                    <div className="text-4xl font-heading font-bold text-accent mb-2">1625</div>
                    <div className="text-sm text-muted-foreground">Метров ВПП</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="experience" className="py-24">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-heading font-bold text-primary mb-12 text-center">
            Опыт работы и достижения
          </h3>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                year: '2023 - 2024',
                position: 'Ведущий инженер-проектировщик',
                company: 'Проектное бюро',
                achievements: [
                  'Разработка генплана транспортной инфраструктуры карьера (2 тома)',
                  'Проектирование комплекса цехов на территории 2.9 Га',
                  'Капитальный ремонт ВПП 1625м с усилением конструкции',
                ],
              },
              {
                year: '2021 - 2023',
                position: 'Инженер-проектировщик',
                company: 'Архитектурное бюро',
                achievements: [
                  'Создание образовательной экосистемы на открытом воздухе',
                  'Проектирование многофункционального реабилитационного центра',
                  'Разработка торговой зоны с организацией парковочного пространства',
                ],
              },
            ].map((exp, index) => (
              <Card key={index} className="animate-fade-in">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-heading font-bold text-primary">{exp.position}</h4>
                      <p className="text-secondary">{exp.company}</p>
                    </div>
                    <div className="text-accent font-medium">{exp.year}</div>
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-1" size={16} />
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-heading font-bold text-primary mb-12 text-center">
            Избранные проекты
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Капитальный ремонт ВПП 1625м',
                description: 'Усиление конструкции взлётно-посадочной полосы с увеличением срока эксплуатации',
                icon: 'Plane',
                details: [
                  'Длина: 1625 метров',
                  'Усиление покрытия',
                  'Модернизация освещения',
                  'Дренажная система',
                ],
              },
              {
                title: 'Комплекс цехов 2.9 Га',
                description: 'Проектирование промышленной территории с двумя производственными корпусами',
                icon: 'Factory',
                details: [
                  'Площадь: 2.9 гектара',
                  '2 производственных корпуса',
                  'Транспортная инфраструктура',
                  'Инженерные коммуникации',
                ],
              },
              {
                title: 'Реабилитационный центр',
                description: 'Многофункциональное пространство для детской реабилитации с ландшафтным дизайном',
                icon: 'Heart',
                details: [
                  'Зона реабилитации',
                  'Игровые площадки',
                  'Зелёные зоны',
                  'Доступная среда',
                ],
              },
              {
                title: 'Образовательная экосистема',
                description: 'Открытая образовательная среда с интеграцией природных элементов',
                icon: 'GraduationCap',
                details: [
                  'Учебные зоны на открытом воздухе',
                  'Экологические тропы',
                  'Амфитеатр',
                  'Ботанический сад',
                ],
              },
              {
                title: 'Торговая зона',
                description: 'Комплексная разработка коммерческой территории с парковкой',
                icon: 'ShoppingBag',
                details: [
                  'Торговые площади',
                  'Парковка на 50 мест',
                  'Пешеходные зоны',
                  'Благоустройство',
                ],
              },
              {
                title: 'Транспортная инфраструктура карьера (2 тома)',
                description: 'Генплан транспортной сети для добывающего предприятия',
                icon: 'Truck',
                details: [
                  'Дорожная сеть',
                  'Разгрузочные зоны',
                  'Система водоотведения',
                  '2 тома проектной документации',
                ],
              },
            ].map((project, index) => (
              <Card key={index} className="animate-fade-in hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Icon name={project.icon} className="text-accent" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-heading font-bold text-primary mb-2">{project.title}</h4>
                      <p className="text-muted-foreground text-sm">{project.description}</p>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {project.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-xs text-muted-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-24">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-heading font-bold text-primary mb-12 text-center">
            Компетенции
          </h3>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Генеральное планирование',
                icon: 'Map',
                skills: [
                  'Разработка генеральных планов',
                  'Зонирование территорий',
                  'Организация транспортных потоков',
                  'Размещение объектов',
                ],
              },
              {
                title: 'Транспортная инфраструктура',
                icon: 'Route',
                skills: [
                  'Проектирование дорог',
                  'Организация парковок',
                  'Транспортные развязки',
                  'Пешеходные зоны',
                ],
              },
              {
                title: 'Благоустройство',
                icon: 'Trees',
                skills: [
                  'Ландшафтное проектирование',
                  'Озеленение территорий',
                  'Малые архитектурные формы',
                  'Освещение',
                ],
              },
              {
                title: 'Инженерные сети',
                icon: 'Workflow',
                skills: [
                  'Водоснабжение и водоотведение',
                  'Ливневая канализация',
                  'Электроснабжение',
                  'Теплоснабжение',
                ],
              },
            ].map((category, index) => (
              <Card key={index} className="animate-fade-in">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-accent/10 p-2 rounded-lg">
                      <Icon name={category.icon} className="text-accent" size={20} />
                    </div>
                    <h4 className="text-lg font-heading font-bold text-primary">{category.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                        <span className="text-muted-foreground text-sm">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-heading font-bold text-primary mb-12 text-center">
            Контакты
          </h3>
          <div className="max-w-2xl mx-auto">
            <Card className="animate-fade-in">
              <CardContent className="p-8">
                <div className="space-y-6 mb-8">
                  <div className="flex items-center gap-4">
                    <Icon name="Mail" className="text-accent" size={20} />
                    <a href="mailto:usov.artyom@example.com" className="text-foreground hover:text-accent transition-colors">
                      usov.artyom@example.com
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Icon name="Phone" className="text-accent" size={20} />
                    <a href="tel:+79001234567" className="text-foreground hover:text-accent transition-colors">
                      +7 (900) 123-45-67
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Icon name="MapPin" className="text-accent" size={20} />
                    <span className="text-foreground">Москва, Россия</span>
                  </div>
                </div>
                <form className="space-y-4">
                  <div>
                    <Input type="text" placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Email" />
                  </div>
                  <div>
                    <Textarea placeholder="Сообщение" className="min-h-[120px]" />
                  </div>
                  <Button className="w-full">Отправить сообщение</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/80 text-sm">
              © 2024 Усов Артём Игоревич. Все права защищены.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Icon name="Mail" size={18} />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Icon name="Linkedin" size={18} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
