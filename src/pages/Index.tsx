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
            <h1 className="text-xl font-heading font-bold text-primary">Иван Петров</h1>
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
              <p className="text-secondary font-medium mb-2">Генеральный директор</p>
              <h2 className="text-5xl md:text-6xl font-heading font-bold text-primary mb-4">
                Иван Петров
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Стратегическое развитие бизнеса, трансформация компаний и создание эффективных управленческих систем
              </p>
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
                alt="Иван Петров"
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
                  Опытный руководитель с более чем 15-летним опытом управления крупными компаниями в различных отраслях. Специализируюсь на стратегическом планировании, операционной эффективности и развитии корпоративной культуры.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center p-6 bg-background rounded-lg">
                    <div className="text-4xl font-heading font-bold text-accent mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">Лет опыта</div>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg">
                    <div className="text-4xl font-heading font-bold text-accent mb-2">50+</div>
                    <div className="text-sm text-muted-foreground">Реализованных проектов</div>
                  </div>
                  <div className="text-center p-6 bg-background rounded-lg">
                    <div className="text-4xl font-heading font-bold text-accent mb-2">12</div>
                    <div className="text-sm text-muted-foreground">Стран присутствия</div>
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
                year: '2020 - настоящее время',
                position: 'Генеральный директор',
                company: 'ООО "ТехноИнвест"',
                achievements: [
                  'Увеличение выручки компании на 250% за 3 года',
                  'Успешный выход на международные рынки (Европа, Азия)',
                  'Внедрение цифровой трансформации всех бизнес-процессов',
                ],
              },
              {
                year: '2015 - 2020',
                position: 'Операционный директор',
                company: 'АО "Промышленная группа"',
                achievements: [
                  'Оптимизация операционных расходов на 35%',
                  'Построение системы управления качеством ISO 9001',
                  'Реорганизация производственной структуры 5 заводов',
                ],
              },
              {
                year: '2010 - 2015',
                position: 'Директор по развитию',
                company: 'ЗАО "Инновационные решения"',
                achievements: [
                  'Запуск 3 новых направлений бизнеса',
                  'Привлечение инвестиций на сумму 500 млн рублей',
                  'Формирование стратегии развития на 10 лет',
                ],
              },
            ].map((item, index) => (
              <Card key={index} className="animate-fade-in hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                        <Icon name="Briefcase" className="text-accent" size={28} />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="text-sm text-accent font-medium mb-2">{item.year}</div>
                      <h4 className="text-xl font-heading font-semibold text-primary mb-1">
                        {item.position}
                      </h4>
                      <p className="text-muted-foreground mb-4">{item.company}</p>
                      <ul className="space-y-2">
                        {item.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-0.5" size={16} />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-heading font-bold text-primary mb-12 text-center">
            Реализованные проекты
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Цифровая трансформация',
                description: 'Внедрение ERP-системы и автоматизация ключевых бизнес-процессов',
                icon: 'Laptop',
                result: 'Экономия 40% времени',
              },
              {
                title: 'Международная экспансия',
                description: 'Открытие представительств в 8 странах Европы и Азии',
                icon: 'Globe',
                result: '+180% выручка',
              },
              {
                title: 'M&A сделки',
                description: 'Успешное слияние с 3 компаниями в смежных отраслях',
                icon: 'TrendingUp',
                result: 'Синергия 25%',
              },
              {
                title: 'Развитие команды',
                description: 'Создание корпоративного университета и системы обучения',
                icon: 'Users',
                result: '500+ сотрудников',
              },
              {
                title: 'Устойчивое развитие',
                description: 'Внедрение ESG-стандартов и зеленых технологий',
                icon: 'Leaf',
                result: '-60% выбросов CO2',
              },
              {
                title: 'Инновационный центр',
                description: 'Создание R&D подразделения и запуск 10 новых продуктов',
                icon: 'Lightbulb',
                result: '15% доля инноваций',
              },
            ].map((project, index) => (
              <Card key={index} className="animate-fade-in hover:shadow-xl transition-all group">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon name={project.icon as any} className="text-accent" size={28} />
                  </div>
                  <h4 className="text-xl font-heading font-semibold text-primary mb-3">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="pt-4 border-t border-border">
                    <span className="text-sm font-medium text-accent">{project.result}</span>
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
            Профессиональные компетенции
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  category: 'Стратегическое управление',
                  skills: [
                    'Долгосрочное планирование',
                    'Анализ рынков и конкурентов',
                    'M&A и корпоративное развитие',
                    'Управление изменениями',
                  ],
                },
                {
                  category: 'Операционное управление',
                  skills: [
                    'Оптимизация бизнес-процессов',
                    'Контроль качества',
                    'Supply chain management',
                    'Lean и Six Sigma',
                  ],
                },
                {
                  category: 'Финансовый менеджмент',
                  skills: [
                    'Бюджетирование и планирование',
                    'Привлечение инвестиций',
                    'Финансовая аналитика',
                    'Управление рисками',
                  ],
                },
                {
                  category: 'Лидерство и развитие',
                  skills: [
                    'Управление командами',
                    'Корпоративная культура',
                    'Наставничество и коучинг',
                    'Управление талантами',
                  ],
                },
              ].map((item, index) => (
                <Card key={index} className="animate-fade-in">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Icon name="Award" className="text-accent" size={24} />
                      <h4 className="text-lg font-heading font-semibold text-primary">
                        {item.category}
                      </h4>
                    </div>
                    <ul className="space-y-3">
                      {item.skills.map((skill, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                          <span className="text-foreground">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-heading font-bold mb-4 text-center">Контакты</h3>
            <p className="text-center text-primary-foreground/80 mb-12">
              Открыт для обсуждения новых проектов и сотрудничества
            </p>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-primary-foreground" size={20} />
                  </div>
                  <div>
                    <div className="font-medium mb-1">Email</div>
                    <a href="mailto:ivan.petrov@example.com" className="text-primary-foreground/80 hover:text-primary-foreground">
                      ivan.petrov@example.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-primary-foreground" size={20} />
                  </div>
                  <div>
                    <div className="font-medium mb-1">Телефон</div>
                    <a href="tel:+79991234567" className="text-primary-foreground/80 hover:text-primary-foreground">
                      +7 (999) 123-45-67
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-primary-foreground" size={20} />
                  </div>
                  <div>
                    <div className="font-medium mb-1">Местоположение</div>
                    <div className="text-primary-foreground/80">Москва, Россия</div>
                  </div>
                </div>
                <div className="flex gap-4 pt-4">
                  <a href="#" className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                    <Icon name="Linkedin" size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                    <Icon name="Facebook" size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                    <Icon name="Twitter" size={20} />
                  </a>
                </div>
              </div>
              <Card className="bg-primary-foreground text-foreground">
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Имя</label>
                      <Input placeholder="Ваше имя" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <Input type="email" placeholder="your@email.com" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Сообщение</label>
                      <Textarea placeholder="Расскажите о вашем проекте" rows={5} />
                    </div>
                    <Button className="w-full" size="lg">
                      Отправить сообщение
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          © 2024 Иван Петров. Все права защищены.
        </div>
      </footer>
    </div>
  );
};

export default Index;
