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
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Комплексное проектирование генеральных планов, транспортной и инженерной инфраструктуры промышленных и социальных объектов
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
                  'Создание образовательной экосистемы под открытым небом',
                  'Проектирование многофункционального реабилитационного центра',
                  'Комплексное освоение территории под розничную торговлю',
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
                id: 'vpp',
                title: 'Капитальный ремонт ВПП',
                description: 'Капитальный ремонт ВПП 1625 м с усилением конструкции и модернизацией инфраструктуры',
                icon: 'Plane',
                result: 'Аэропорт РФ',
              },
              {
                id: 'factory',
                title: 'Проектирование цехов',
                description: 'Комплексное проектирование цехов и логистической схемы на территории 2.9 Га',
                icon: 'Factory',
                result: 'Промышленный комплекс',
              },
              {
                id: 'rehab',
                title: 'Реабилитационный центр',
                description: 'Многофункциональное пространство для реабилитации и развития детей',
                icon: 'Heart',
                result: 'Социальный объект',
              },
              {
                id: 'edu',
                title: 'Образовательная экосистема',
                description: 'Создание современной образовательной экосистемы под открытым небом',
                icon: 'GraduationCap',
                result: 'Образование',
              },
              {
                id: 'retail',
                title: 'Торговая зона',
                description: 'Комплексное освоение территории под розничную торговлю',
                icon: 'ShoppingCart',
                result: 'Ретейл',
              },
              {
                id: 'quarry',
                title: 'Транспортная инфраструктура карьера — Том 1',
                description: 'Обеспечение транспортной доступности участка вскрышных работ Западной траншеи',
                icon: 'Truck',
                result: 'Горная промышленность',
              },
              {
                id: 'quarry2',
                title: 'Транспортная инфраструктура карьера — Том 2',
                description: 'Создание единой транспортной сети для доступности ключевых объектов карьера',
                icon: 'Route',
                result: 'Горная промышленность',
              },
            ].map((project, index) => (
              <Card key={index} className="animate-fade-in hover:shadow-xl transition-all group cursor-pointer" onClick={() => scrollToSection(`project-${project.id}`)}>
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
                  <div className="pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-sm font-medium text-accent">{project.result}</span>
                    <Icon name="ChevronRight" className="text-accent" size={20} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="project-vpp" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <Button onClick={() => scrollToSection('projects')} variant="outline" className="mb-8">
              <Icon name="ArrowLeft" size={20} />
              <span className="ml-2">Все проекты</span>
            </Button>
            
            <h3 className="text-4xl font-heading font-bold text-primary mb-4">
              Капитальный ремонт взлётно-посадочной полосы
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Капитальный ремонт ВПП 1625 м с усилением конструкции и модернизацией инфраструктуры
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                    <Icon name="Target" size={20} />
                    Задача
                  </h4>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Ремонт ВПП (1625 м), рулёжки и перрона</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Замена асфальта и деформационных швов</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Устройство армированного покрытия</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Нанесение маркировки</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-accent/5 border-accent/20">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                    <Icon name="CheckCircle" size={20} />
                    Решения и выполненные работы
                  </h4>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Демонтаж изношенного покрытия и фрезерование асфальтобетона</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Усиление дорожной одежды геосеткой</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Устройство нового асфальтобетонного покрытия</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Восстановление деформационных швов</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Нанесение светоотражающей разметки</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardContent className="p-0">
                  <img 
                    src="https://cdn.poehali.dev/files/7e7b061b-86fd-415f-8ca6-0296ab72e1cd.jpeg" 
                    alt="Фрагмент плана ВПП №1-2" 
                    className="w-full h-auto rounded-t-lg"
                  />
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">Фрагмент плана №1 (ПК00÷ПК2+77)</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-0">
                  <img 
                    src="https://cdn.poehali.dev/files/500fd4ec-4b0e-4956-a198-1152dfb61bf1.jpeg" 
                    alt="Фрагмент плана ВПП №3-4" 
                    className="w-full h-auto rounded-t-lg"
                  />
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">Фрагмент плана №3 (ПК6+07÷ПК9+32)</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-0">
                  <img 
                    src="https://cdn.poehali.dev/files/af59fd81-af5d-4e18-a1be-b478faa1d244.jpeg" 
                    alt="Фрагмент плана рулёжной дорожки №7" 
                    className="w-full h-auto rounded-t-lg"
                  />
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">Фрагмент плана №7 (рулёжная дорожка)</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-0">
                  <img 
                    src="https://cdn.poehali.dev/files/806baa2d-0647-4fd2-ac0e-c0fc49f32abc.jpeg" 
                    alt="Фрагмент плана №6" 
                    className="w-full h-auto rounded-t-lg"
                  />
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">Фрагмент плана №6 (ПК15+79÷ПК16+25)</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-8">
              <CardContent className="p-0">
                <img 
                  src="https://cdn.poehali.dev/files/4d504bef-12b2-46e3-9dcb-c456580895d1.jpeg" 
                  alt="Фрагмент плана №5" 
                  className="w-full h-auto rounded-lg"
                />
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">Фрагмент плана №5 (ПК12+59÷ПК15+79)</p>
                </div>
              </CardContent>
            </Card>

            <h4 className="text-2xl font-heading font-bold text-primary mb-6">
              Технико-экономические показатели
            </h4>
            
            <Card>
              <CardContent className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 font-semibold text-foreground">Наименование показателя</th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">Единица измерения</th>
                        <th className="text-right py-3 px-4 font-semibold text-foreground">Значение</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border hover:bg-muted/50">
                        <td className="py-3 px-4">Длина ВПП</td>
                        <td className="py-3 px-4">м</td>
                        <td className="py-3 px-4 text-right font-medium">1 625</td>
                      </tr>
                      <tr className="border-b border-border hover:bg-muted/50">
                        <td className="py-3 px-4">Ширина ВПП</td>
                        <td className="py-3 px-4">м</td>
                        <td className="py-3 px-4 text-right font-medium">42</td>
                      </tr>
                      <tr className="border-b border-border hover:bg-muted/50">
                        <td className="py-3 px-4">Площадь покрытия ВПП</td>
                        <td className="py-3 px-4">м²</td>
                        <td className="py-3 px-4 text-right font-medium">68 250</td>
                      </tr>
                      <tr className="border-b border-border hover:bg-muted/50">
                        <td className="py-3 px-4">Длина рулёжной дорожки</td>
                        <td className="py-3 px-4">м</td>
                        <td className="py-3 px-4 text-right font-medium">450</td>
                      </tr>
                      <tr className="border-b border-border hover:bg-muted/50">
                        <td className="py-3 px-4">Ширина рулёжной дорожки</td>
                        <td className="py-3 px-4">м</td>
                        <td className="py-3 px-4 text-right font-medium">18</td>
                      </tr>
                      <tr className="border-b border-border hover:bg-muted/50">
                        <td className="py-3 px-4">Площадь рулёжной дорожки</td>
                        <td className="py-3 px-4">м²</td>
                        <td className="py-3 px-4 text-right font-medium">8 100</td>
                      </tr>
                      <tr className="border-b border-border hover:bg-muted/50">
                        <td className="py-3 px-4">Толщина асфальтобетонного покрытия</td>
                        <td className="py-3 px-4">см</td>
                        <td className="py-3 px-4 text-right font-medium">18</td>
                      </tr>
                      <tr className="border-b border-border hover:bg-muted/50">
                        <td className="py-3 px-4">Толщина основания из щебня</td>
                        <td className="py-3 px-4">см</td>
                        <td className="py-3 px-4 text-right font-medium">25</td>
                      </tr>
                      <tr className="border-b border-border hover:bg-muted/50">
                        <td className="py-3 px-4">Класс прочности покрытия (PCN)</td>
                        <td className="py-3 px-4">-</td>
                        <td className="py-3 px-4 text-right font-medium">55/R/B/W/T</td>
                      </tr>
                      <tr className="hover:bg-muted/50">
                        <td className="py-3 px-4 font-semibold">Общая площадь проектирования</td>
                        <td className="py-3 px-4">Га</td>
                        <td className="py-3 px-4 text-right font-bold text-accent">7.64</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Icon name="Ruler" className="text-accent mx-auto mb-3" size={32} />
                  <div className="text-2xl font-bold text-primary mb-1">1625 м</div>
                  <div className="text-sm text-muted-foreground">Длина ВПП</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Icon name="Layers" className="text-accent mx-auto mb-3" size={32} />
                  <div className="text-2xl font-bold text-primary mb-1">43 см</div>
                  <div className="text-sm text-muted-foreground">Толщина покрытия</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Icon name="MapPin" className="text-accent mx-auto mb-3" size={32} />
                  <div className="text-2xl font-bold text-primary mb-1">7.64 Га</div>
                  <div className="text-sm text-muted-foreground">Общая площадь</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="project-factory" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <Button onClick={() => scrollToSection('projects')} variant="outline" className="mb-8">
              <Icon name="ArrowLeft" size={20} />
              <span className="ml-2">Все проекты</span>
            </Button>
            
            <h3 className="text-4xl font-heading font-bold text-primary mb-4">
              Проектирование промышленных цехов
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Комплексное проектирование цехов и логистической схемы на территории 2,9 Га
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                    <Icon name="Target" size={20} />
                    Задача
                  </h4>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Площадь участка: 2.9 Га</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Разместить 2 цеха и запроектировать подъезды к ним</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Спроектировать дороги и тротуары</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Рассчитать земляные работы</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Организовать отвод воды с территории</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Разместить газоны и инженерные сети</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-accent/5 border-accent/20">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                    <Icon name="CheckCircle" size={20} />
                    Решения и выполненные работы
                  </h4>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Разработка генерального плана с размещением объектов</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Проектирование транспортной и пешеходной инфраструктуры</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Вертикальная планировка с организацией водоотвода</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Земляные работы с балансом грунта</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Благоустройство территории и озеленение</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardContent className="p-0">
                  <img 
                    src="https://cdn.poehali.dev/files/5a54d544-5775-4f0b-ab49-12c5b0a25b7e.jpeg" 
                    alt="Ситуационный план земельного участка" 
                    className="w-full h-auto rounded-t-lg"
                  />
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">Ситуационный план земельного участка М1:2000</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-0">
                  <img 
                    src="https://cdn.poehali.dev/files/0fb22995-23e9-43d1-a2e9-79cd3bfcf873.png" 
                    alt="Генеральный план промышленного комплекса" 
                    className="w-full h-auto rounded-t-lg"
                  />
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">Генеральный план с размещением цехов №1, №2 и МАФ №3-8</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-6">
              <CardContent className="p-0">
                <img 
                  src="https://cdn.poehali.dev/files/87fd304f-2f15-48b3-8a2a-0e04e2037095.jpeg" 
                  alt="План озеленения территории" 
                  className="w-full h-auto rounded-lg"
                />
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">План озеленения территории с размещением зелёных насаждений</p>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardContent className="p-0">
                  <img 
                    src="https://cdn.poehali.dev/files/654de20c-69a4-4122-9703-13cf5394f8c0.png" 
                    alt="План благоустройства территории" 
                    className="w-full h-auto rounded-t-lg"
                  />
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">План благоустройства территории</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-0">
                  <img 
                    src="https://cdn.poehali.dev/files/7019e305-3501-4f20-a368-8d372baba845.png" 
                    alt="Узел А: Сопряжение покрытия с газоном" 
                    className="w-full h-auto rounded-t-lg"
                  />
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">Узел А: Сопряжение покрытия тротуара с газоном</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-0">
                  <img 
                    src="https://cdn.poehali.dev/files/27854838-74e2-4b53-a422-660217030036.jpeg" 
                    alt="Узлы В и Б: Сопряжение покрытий" 
                    className="w-full h-auto rounded-t-lg"
                  />
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">Узлы В и Б: Сопряжение покрытий с проездом</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h4 className="text-2xl font-heading font-bold text-primary mb-6">
              Технико-экономические показатели
            </h4>
            
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 font-semibold text-foreground">Наименование объекта</th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">Единица измерения</th>
                        <th className="text-right py-3 px-4 font-semibold text-foreground">Значение</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border hover:bg-muted/50">
                        <td className="py-3 px-4 font-semibold" colspan="3">Цех №1 (здание промышленного назначения)</td>
                      </tr>
                      <tr className="border-b border-border hover:bg-muted/50">
                        <td className="py-3 px-4 pl-8">Площадь застройки</td>
                        <td className="py-3 px-4">м²</td>
                        <td className="py-3 px-4 text-right font-medium">9 214</td>
                      </tr>
                      <tr className="border-b border-border hover:bg-muted/50">
                        <td className="py-3 px-4 pl-8">Площадь здания</td>
                        <td className="py-3 px-4">м²</td>
                        <td className="py-3 px-4 text-right font-medium">134 149</td>
                      </tr>
                      <tr className="border-b border-border hover:bg-muted/50">
                        <td className="py-3 px-4 pl-8">Строительный объём</td>
                        <td className="py-3 px-4">м³</td>
                        <td className="py-3 px-4 text-right font-medium">134 149</td>
                      </tr>
                      <tr className="border-b border-border hover:bg-muted/50">
                        <td className="py-3 px-4 font-semibold" colspan="3">Цех №2 (здание промышленного назначения)</td>
                      </tr>
                      <tr className="border-b border-border hover:bg-muted/50">
                        <td className="py-3 px-4 pl-8">Площадь застройки</td>
                        <td className="py-3 px-4">м²</td>
                        <td className="py-3 px-4 text-right font-medium">4 701</td>
                      </tr>
                      <tr className="border-b border-border hover:bg-muted/50">
                        <td className="py-3 px-4 pl-8">Площадь здания</td>
                        <td className="py-3 px-4">м²</td>
                        <td className="py-3 px-4 text-right font-medium">134 824</td>
                      </tr>
                      <tr className="border-b border-border hover:bg-muted/50">
                        <td className="py-3 px-4 pl-8">Строительный объём</td>
                        <td className="py-3 px-4">м³</td>
                        <td className="py-3 px-4 text-right font-medium">134 824</td>
                      </tr>
                      <tr className="border-b border-border hover:bg-muted/50">
                        <td className="py-3 px-4 font-semibold" colspan="3">Малые архитектурные формы</td>
                      </tr>
                      <tr className="border-b border-border hover:bg-muted/50">
                        <td className="py-3 px-4 pl-8">МАФ №3-8</td>
                        <td className="py-3 px-4">шт</td>
                        <td className="py-3 px-4 text-right font-medium">6</td>
                      </tr>
                      <tr className="border-b border-border hover:bg-muted/50">
                        <td className="py-3 px-4 font-semibold" colspan="3">Покрытия и благоустройство</td>
                      </tr>
                      <tr className="border-b border-border hover:bg-muted/50">
                        <td className="py-3 px-4 pl-8">Асфальтобетонное покрытие проездов</td>
                        <td className="py-3 px-4">м²</td>
                        <td className="py-3 px-4 text-right font-medium">8 500</td>
                      </tr>
                      <tr className="border-b border-border hover:bg-muted/50">
                        <td className="py-3 px-4 pl-8">Тротуары (бетонная обойма)</td>
                        <td className="py-3 px-4">м²</td>
                        <td className="py-3 px-4 text-right font-medium">1 200</td>
                      </tr>
                      <tr className="border-b border-border hover:bg-muted/50">
                        <td className="py-3 px-4 pl-8">Озеленение территории</td>
                        <td className="py-3 px-4">м²</td>
                        <td className="py-3 px-4 text-right font-medium">4 500</td>
                      </tr>
                      <tr className="hover:bg-muted/50">
                        <td className="py-3 px-4 font-semibold">Общая площадь участка</td>
                        <td className="py-3 px-4">Га</td>
                        <td className="py-3 px-4 text-right font-bold text-accent">2.9</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Icon name="Factory" className="text-accent mx-auto mb-3" size={32} />
                  <div className="text-2xl font-bold text-primary mb-1">2 цеха</div>
                  <div className="text-sm text-muted-foreground">Производственные здания</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Icon name="Square" className="text-accent mx-auto mb-3" size={32} />
                  <div className="text-2xl font-bold text-primary mb-1">268 973 м²</div>
                  <div className="text-sm text-muted-foreground">Общая площадь зданий</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Icon name="MapPin" className="text-accent mx-auto mb-3" size={32} />
                  <div className="text-2xl font-bold text-primary mb-1">2.9 Га</div>
                  <div className="text-sm text-muted-foreground">Территория участка</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="project-rehab" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <Button onClick={() => scrollToSection('projects')} variant="outline" className="mb-8">
              <Icon name="ArrowLeft" size={20} />
              <span className="ml-2">Все проекты</span>
            </Button>
            
            <h3 className="text-4xl font-heading font-bold text-primary mb-4">
              Многофункциональный реабилитационный центр
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Многофункциональное пространство для реабилитации и развития детей
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                    <Icon name="Target" size={20} />
                    Задача
                  </h4>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Благоустройство территории центра</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>2 детские площадки для разных возрастов (3-7 и 7-14 лет)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Спортивная зона с тренажерами</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Доступная среда для маломобильных детей</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Освещение и ливневая канализация</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Озеленение и установка МАФ</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-accent/5 border-accent/20">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                    <Icon name="CheckCircle" size={20} />
                    Решения и выполненные работы
                  </h4>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Вертикальная планировка территории</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Устройство различных типов покрытий</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Создание детских и спортивных зон</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Монтаж инженерных систем</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Благоустройство и озеленение</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <Card>
                  <CardContent className="p-0">
                    <img 
                      src="https://cdn.poehali.dev/files/1d7fba1f-ed76-4969-8959-229ee837b27d.png" 
                    alt="Схема расположения функциональных зон" 
                    className="w-full h-auto rounded-t-lg"
                  />
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">Схема расположения функциональных зон на территории центра</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-0">
                  <img 
                    src="https://cdn.poehali.dev/files/282d414e-3215-4817-957b-9102b831848c.png" 
                    alt="План благоустройства территории" 
                    className="w-full h-auto rounded-t-lg"
                  />
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">План благоустройства территории с зонированием</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardContent className="p-0">
                  <img 
                    src="https://cdn.poehali.dev/files/e5d9f8b9-f34f-49c6-a7ce-abd90edf26ce.png" 
                    alt="Схема нанесения разметки волейбольного поля" 
                    className="w-full h-auto rounded-t-lg"
                  />
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">Схема нанесения разметки волейбольного поля</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-0">
                  <img 
                    src="https://cdn.poehali.dev/files/a02219fc-2826-4b18-9264-901877a6faa8.png" 
                    alt="План коммуникаций" 
                    className="w-full h-auto rounded-t-lg"
                  />
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">План размещения инженерных коммуникаций</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-6">
              <CardContent className="p-0">
                <img 
                  src="https://cdn.poehali.dev/files/491ef8ed-5287-460f-9f0a-286e81c75bda.png" 
                  alt="Развивочная схема детской площадки" 
                  className="w-full h-auto rounded-lg"
                />
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">Развивочная схема МАФ на детской площадке для детей 3-7 лет</p>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardContent className="p-0">
                  <img 
                    src="https://cdn.poehali.dev/files/1866fe78-3497-4512-8b7f-4cd9990abd36.png" 
                    alt="Развивочная схема детской площадки 7-14 лет" 
                    className="w-full h-auto rounded-t-lg"
                  />
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">Развивочная схема МАФ на детской площадке 7-14 лет</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-0">
                  <img 
                    src="https://cdn.poehali.dev/files/1e72ac00-47b0-463d-bd31-943ca87b8127.png" 
                    alt="Развивочная схема спортивной площадки" 
                    className="w-full h-auto rounded-t-lg"
                  />
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">Развивочная схема МАФ на спортивной площадке</p>
                  </div>
                </CardContent>
              </Card>
              </div>

              <h4 className="text-2xl font-heading font-bold text-primary mb-6">
                Детализация конструктивных решений
              </h4>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardContent className="p-0">
                  <img 
                    src="https://cdn.poehali.dev/files/56be61fc-e676-447d-af81-bf61a9957a75.png" 
                    alt="Узлы устройства бортового камня" 
                    className="w-full h-auto rounded-t-lg"
                  />
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">Узел 1-2: Устройство бортового камня между покрытиями и тротуаром</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-0">
                  <img 
                    src="https://cdn.poehali.dev/files/00788632-0e54-4999-a04b-1e86c2393869.png" 
                    alt="Узлы устройства покрытий" 
                    className="w-full h-auto rounded-t-lg"
                  />
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">Узел 3-4: Устройство бортового камня между площадками и газоном</p>
                  </div>
                </CardContent>
              </Card>
            </div>

              <Card className="mb-12">
                <CardContent className="p-0">
                  <img 
                    src="https://cdn.poehali.dev/files/57bf9541-fae5-4af5-9e69-7e38fd285db9.png" 
                    alt="Узел устройства пониженного бортового камня" 
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">Узел 5: Устройство пониженного бортового камня в местах проезда колясочников</p>
                  </div>
                </CardContent>
              </Card>

              <h4 className="text-2xl font-heading font-bold text-primary mb-6">
                Технико-экономические показатели
              </h4>
            
            <Card className="mb-8 overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-primary/5">
                        <th className="text-left py-4 px-6 font-semibold text-primary text-sm w-20">Поз.</th>
                        <th className="text-left py-4 px-6 font-semibold text-primary text-sm">Наименование</th>
                        <th className="text-center py-4 px-6 font-semibold text-primary text-sm w-28">Ед.изм.</th>
                        <th className="text-right py-4 px-6 font-semibold text-primary text-sm w-32">Кол.</th>
                        <th className="text-right py-4 px-6 font-semibold text-primary text-sm w-24">%</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/50 hover:bg-accent/5 transition-colors">
                        <td className="py-4 px-6 text-center font-medium text-muted-foreground">1</td>
                        <td className="py-4 px-6 text-foreground">Площадь участка в границах благ-ва</td>
                        <td className="py-4 px-6 text-center text-muted-foreground">м²</td>
                        <td className="py-4 px-6 text-right font-semibold text-foreground">5 693</td>
                        <td className="py-4 px-6 text-right">
                          <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-accent/10 text-accent font-semibold text-sm">
                            100%
                          </span>
                        </td>
                      </tr>
                      <tr className="border-b border-border/50 hover:bg-accent/5 transition-colors">
                        <td className="py-4 px-6 text-center font-medium text-muted-foreground">2</td>
                        <td className="py-4 px-6 text-foreground font-medium">Площадь застройки, в том числе:</td>
                        <td className="py-4 px-6 text-center text-muted-foreground">м²</td>
                        <td className="py-4 px-6 text-right font-semibold text-foreground">4 675,75</td>
                        <td className="py-4 px-6 text-right">
                          <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                            82%
                          </span>
                        </td>
                      </tr>
                      <tr className="border-b border-border/50 hover:bg-accent/5 transition-colors">
                        <td className="py-4 px-6 text-center font-medium text-muted-foreground">3</td>
                        <td className="py-4 px-6 pl-12 text-foreground">Площадь покрытий</td>
                        <td className="py-4 px-6 text-center text-muted-foreground">м²</td>
                        <td className="py-4 px-6 text-right font-semibold text-foreground">2 722,75</td>
                        <td className="py-4 px-6 text-right">
                          <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-muted text-foreground font-semibold text-sm">
                            48%
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-accent/5 transition-colors">
                        <td className="py-4 px-6 text-center font-medium text-muted-foreground">4</td>
                        <td className="py-4 px-6 pl-12 text-foreground">Площадь озеленения</td>
                        <td className="py-4 px-6 text-center text-muted-foreground">м²</td>
                        <td className="py-4 px-6 text-right font-semibold text-foreground">1 953</td>
                        <td className="py-4 px-6 text-right">
                          <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-muted text-foreground font-semibold text-sm">
                            34%
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Icon name="Heart" className="text-accent mx-auto mb-3" size={32} />
                    <div className="text-2xl font-bold text-primary mb-1">Реабилитация</div>
                    <div className="text-sm text-muted-foreground">Многофункциональный центр</div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 text-center">
                    <Icon name="Users" className="text-accent mx-auto mb-3" size={32} />
                    <div className="text-2xl font-bold text-primary mb-1">Для детей</div>
                    <div className="text-sm text-muted-foreground">Развитие и социализация</div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 text-center">
                    <Icon name="Trees" className="text-accent mx-auto mb-3" size={32} />
                    <div className="text-2xl font-bold text-primary mb-1">Озеленение</div>
                    <div className="text-sm text-muted-foreground">Комплексное благоустройство</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="project-edu" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <Button onClick={() => scrollToSection('projects')} variant="outline" className="mb-8">
              <Icon name="ArrowLeft" size={20} />
              <span className="ml-2">Все проекты</span>
            </Button>
            
            <h3 className="text-4xl font-heading font-bold text-primary mb-4">
              Образовательная экосистема под открытым небом
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Создание современной образовательной экосистемы под открытым небом
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                    <Icon name="Target" size={20} />
                    Задача
                  </h4>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Комплексное благоустройство территории площадью 10 330 м²</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Создание многофункционального пространства для учебы, спорта и отдыха</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Организация безопасной среды для учащихся разных возрастных групп</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Устройство современной спортивной инфраструктуры</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Обеспечение доступной среды для маломобильных групп населения</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Разработка инженерных систем освещения и водоотвода</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-accent/5 border-accent/20">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                    <Icon name="CheckCircle" size={20} />
                    Решения и выполненные работы
                  </h4>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Демонтаж существующих покрытий и построек</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Земляные работы и вертикальная планировка</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Устройство различных типов покрытий</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Монтаж спортивного оборудования и МАФ</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Обустройство инженерных систем</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardContent className="p-0">
                  <img 
                    src="https://cdn.poehali.dev/files/7e52a34c-3f74-4285-bbac-693d8129523f.png" 
                    alt="План благоустройства территории образовательной экосистемы" 
                    className="w-full h-auto rounded-t-lg"
                  />
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">План благоустройства территории с зонированием</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-0">
                  <img 
                    src="https://cdn.poehali.dev/files/13f7ea9e-6fbb-43ff-8ff6-4b244a9a7e61.png" 
                    alt="Генеральный план образовательной экосистемы" 
                    className="w-full h-auto rounded-t-lg"
                  />
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">Генеральный план с размещением спортивных и игровых зон</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-6">
              <CardContent className="p-0">
                <img 
                  src="https://cdn.poehali.dev/files/5d0b724c-2006-4735-bb7b-b0660026a47e.png" 
                  alt="Генеральный план организации территории" 
                  className="w-full h-auto rounded-lg"
                />
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">Генеральный план организации территории М1:500</p>
                </div>
              </CardContent>
            </Card>

            <h4 className="text-2xl font-heading font-bold text-primary mb-6">
              Детализация спортивных объектов
            </h4>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardContent className="p-0">
                  <img 
                    src="https://cdn.poehali.dev/files/8251cd8f-9e0e-4983-93a9-b648993ce2ec.png" 
                    alt="Разбивочная схема нанесения разметки на баскетбольное поле" 
                    className="w-full h-auto rounded-t-lg"
                  />
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">Разбивочная схема нанесения разметки на баскетбольное (волейбольное) поле</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-0">
                  <img 
                    src="https://cdn.poehali.dev/files/dac0e466-bc4c-4ca8-baa1-8f284abbce2f.png" 
                    alt="Разбивочная схема МАФ на детской площадке" 
                    className="w-full h-auto rounded-t-lg"
                  />
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">Разбивочная схема МАФ на детской площадке начальных классов</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h4 className="text-2xl font-heading font-bold text-primary mb-6">
              Конструктивные решения
            </h4>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Card>
                <CardContent className="p-0">
                  <img 
                    src="https://cdn.poehali.dev/files/29578d19-5359-4f14-892d-5af254d8b547.png" 
                    alt="Узел 1: Устройство бортового камня между асфальтобетонным покрытием и пешеходным тротуаром" 
                    className="w-full h-auto rounded-t-lg"
                  />
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">Узел 1: Устройство бортового камня между асфальтобетонным покрытием и пешеходным тротуаром</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-0">
                  <img 
                    src="https://cdn.poehali.dev/files/e7067eeb-940d-4a31-a860-53ef6041c166.png" 
                    alt="Узел 2-3: Устройство бортового камня между покрытиями" 
                    className="w-full h-auto rounded-t-lg"
                  />
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">Узел 2-3: Устройство бортового камня между покрытием детской (спортивной) площадки и газоном</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardContent className="p-0">
                  <img 
                    src="https://cdn.poehali.dev/files/6b2e5bd5-3048-47a0-b193-86dc9b854d31.png" 
                    alt="Узел 4: Устройство бортового камня между газоном и местом для прыжков в длину" 
                    className="w-full h-auto rounded-t-lg"
                  />
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">Узел 4: Устройство бортового камня между газоном и местом для прыжков в длину</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-0">
                  <img 
                    src="https://cdn.poehali.dev/files/c8e01527-0607-43ed-b403-499e66442071.png" 
                    alt="Узел 5: Устройство пониженного бортового камня" 
                    className="w-full h-auto rounded-t-lg"
                  />
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">Узел 5: Устройство пониженного бортового камня между асфальтобетонным покрытием и пешеходным тротуаром</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-0">
                  <img 
                    src="https://cdn.poehali.dev/files/bc427b96-b2b1-4422-92ab-ad5b655b488f.png" 
                    alt="Узел 6: Устройство бортового камня между тротуаром и площадкой" 
                    className="w-full h-auto rounded-t-lg"
                  />
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">Узел 6: Устройство бортового камня между тротуаром и площадкой для памятника культурного наследия</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h4 className="text-2xl font-heading font-bold text-primary mb-6">
              Технико-экономические показатели
            </h4>
            
            <Card className="mb-8 overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-primary/5">
                        <th className="text-left py-4 px-6 font-semibold text-primary text-sm w-20">Поз.</th>
                        <th className="text-left py-4 px-6 font-semibold text-primary text-sm">Наименование</th>
                        <th className="text-center py-4 px-6 font-semibold text-primary text-sm w-28">Ед.изм.</th>
                        <th className="text-right py-4 px-6 font-semibold text-primary text-sm w-32">Кол.</th>
                        <th className="text-right py-4 px-6 font-semibold text-primary text-sm w-24">%</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/50 hover:bg-accent/5 transition-colors">
                        <td className="py-4 px-6 text-center font-medium text-muted-foreground">1</td>
                        <td className="py-4 px-6 text-foreground">Площадь участка в границах благ-ва</td>
                        <td className="py-4 px-6 text-center text-muted-foreground">м²</td>
                        <td className="py-4 px-6 text-right font-semibold text-foreground">11 708</td>
                        <td className="py-4 px-6 text-right">
                          <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-accent/10 text-accent font-semibold text-sm">
                            100%
                          </span>
                        </td>
                      </tr>
                      <tr className="border-b border-border/50 hover:bg-accent/5 transition-colors">
                        <td className="py-4 px-6 text-center font-medium text-muted-foreground">2</td>
                        <td className="py-4 px-6 text-foreground font-medium">Площадь застройки, в том числе:</td>
                        <td className="py-4 px-6 text-center text-muted-foreground">м²</td>
                        <td className="py-4 px-6 text-right font-semibold text-foreground">6 864,05</td>
                        <td className="py-4 px-6 text-right">
                          <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                            59%
                          </span>
                        </td>
                      </tr>
                      <tr className="border-b border-border/50 hover:bg-accent/5 transition-colors">
                        <td className="py-4 px-6 text-center font-medium text-muted-foreground">3</td>
                        <td className="py-4 px-6 pl-12 text-foreground">Площадь покрытий</td>
                        <td className="py-4 px-6 text-center text-muted-foreground">м²</td>
                        <td className="py-4 px-6 text-right font-semibold text-foreground">4 846,05</td>
                        <td className="py-4 px-6 text-right">
                          <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-muted text-foreground font-semibold text-sm">
                            41%
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-accent/5 transition-colors">
                        <td className="py-4 px-6 text-center font-medium text-muted-foreground">4</td>
                        <td className="py-4 px-6 pl-12 text-foreground">Площадь озеленения</td>
                        <td className="py-4 px-6 text-center text-muted-foreground">м²</td>
                        <td className="py-4 px-6 text-right font-semibold text-foreground">2 018</td>
                        <td className="py-4 px-6 text-right">
                          <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-muted text-foreground font-semibold text-sm">
                            18%
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Icon name="GraduationCap" className="text-accent mx-auto mb-3" size={32} />
                  <div className="text-2xl font-bold text-primary mb-1">Образование</div>
                  <div className="text-sm text-muted-foreground">Современная экосистема</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Icon name="Dumbbell" className="text-accent mx-auto mb-3" size={32} />
                  <div className="text-2xl font-bold text-primary mb-1">Спорт</div>
                  <div className="text-sm text-muted-foreground">Баскетбол и волейбол</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Icon name="Users" className="text-accent mx-auto mb-3" size={32} />
                  <div className="text-2xl font-bold text-primary mb-1">Детские зоны</div>
                  <div className="text-sm text-muted-foreground">Игровые площадки</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="project-retail" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <Button onClick={() => scrollToSection('projects')} variant="outline" className="mb-8">
              <Icon name="ArrowLeft" size={20} />
              <span className="ml-2">Все проекты</span>
            </Button>
            
            <h3 className="text-4xl font-heading font-bold text-primary mb-4">
              Комплексное освоение территории под розничную торговлю
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Проектирование торговой зоны с полным комплексом работ
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                    <Icon name="Target" size={20} />
                    Задача
                  </h4>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Подготовка территории 0.55 Га под строительство</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Демонтаж старых построек и покрытий</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Вертикальная планировка с балансом грунта</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Организация проездов и инфраструктуры</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Координатная привязка объектов</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-accent/5 border-accent/20">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                    <Icon name="CheckCircle" size={20} />
                    Решения и выполненные работы
                  </h4>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Демонтаж существующих сооружений и покрытий</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Вертикальная планировка территории</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Геодезические работы и разбивка</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Разработка проектной документации</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Проектирование инфраструктуры</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardContent className="p-0">
                  <img 
                    src="https://cdn.poehali.dev/files/e85f189e-4546-465c-9059-66fab42d6509.png" 
                    alt="План демонтажа М1:500" 
                    className="w-full h-auto rounded-t-lg"
                  />
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">План демонтажа М1:500 - ранее возводившиеся части зданий</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-0">
                  <img 
                    src="https://cdn.poehali.dev/files/2bb1b0a6-1953-4f45-95fd-0cb180517796.png" 
                    alt="Разбивочные планы и план вертикальной планировки М1:500" 
                    className="w-full h-auto rounded-t-lg"
                  />
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">Разбивочные планы и план вертикальной планировки М1:500</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-6">
              <CardContent className="p-0">
                <img 
                  src="https://cdn.poehali.dev/files/4d20f5bf-17c7-48f2-a857-b1bc75268f74.png" 
                  alt="Картограмма земляных масс М1:500" 
                  className="w-full h-auto rounded-lg"
                />
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">Картограмма земляных масс М1:500</p>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-12">
              <CardContent className="p-0">
                <img 
                  src="https://cdn.poehali.dev/files/314517be-4a2d-4f3a-8570-86f767fe8f51.png" 
                  alt="Планы дорожного движения и транспортная инфраструктура" 
                  className="w-full h-auto rounded-lg"
                />
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">Планы дорожного движения и транспортная инфраструктура на территории</p>
                </div>
              </CardContent>
            </Card>

            <h4 className="text-2xl font-heading font-bold text-primary mb-6">
              Технико-экономические показатели
            </h4>
            
            <Card className="mb-8 overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-primary/5">
                        <th className="text-left py-4 px-6 font-semibold text-primary text-sm w-20">Поз.</th>
                        <th className="text-left py-4 px-6 font-semibold text-primary text-sm">Наименование</th>
                        <th className="text-center py-4 px-6 font-semibold text-primary text-sm w-28">Ед.изм.</th>
                        <th className="text-right py-4 px-6 font-semibold text-primary text-sm w-32">Кол.</th>
                        <th className="text-right py-4 px-6 font-semibold text-primary text-sm w-24">%</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/50 hover:bg-accent/5 transition-colors">
                        <td className="py-4 px-6 text-center font-medium text-muted-foreground">1</td>
                        <td className="py-4 px-6 text-foreground">Площадь участка в границах благ-ва</td>
                        <td className="py-4 px-6 text-center text-muted-foreground">м²</td>
                        <td className="py-4 px-6 text-right font-semibold text-foreground">5 543</td>
                        <td className="py-4 px-6 text-right">
                          <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-accent/10 text-accent font-semibold text-sm">
                            100%
                          </span>
                        </td>
                      </tr>
                      <tr className="border-b border-border/50 hover:bg-accent/5 transition-colors">
                        <td className="py-4 px-6 text-center font-medium text-muted-foreground">2</td>
                        <td className="py-4 px-6 text-foreground font-medium">Площадь застройки, в том числе:</td>
                        <td className="py-4 px-6 text-center text-muted-foreground">м²</td>
                        <td className="py-4 px-6 text-right font-semibold text-foreground">2 870,1</td>
                        <td className="py-4 px-6 text-right">
                          <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                            52%
                          </span>
                        </td>
                      </tr>
                      <tr className="border-b border-border/50 hover:bg-accent/5 transition-colors">
                        <td className="py-4 px-6 text-center font-medium text-muted-foreground">3</td>
                        <td className="py-4 px-6 pl-12 text-foreground">Площадь покрытий</td>
                        <td className="py-4 px-6 text-center text-muted-foreground">м²</td>
                        <td className="py-4 px-6 text-right font-semibold text-foreground">2 870,1</td>
                        <td className="py-4 px-6 text-right">
                          <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-muted text-foreground font-semibold text-sm">
                            52%
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-accent/5 transition-colors">
                        <td className="py-4 px-6 text-center font-medium text-muted-foreground">4</td>
                        <td className="py-4 px-6 pl-12 text-foreground">Площадь озеленения</td>
                        <td className="py-4 px-6 text-center text-muted-foreground">м²</td>
                        <td className="py-4 px-6 text-right font-semibold text-foreground">0</td>
                        <td className="py-4 px-6 text-right">
                          <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-muted text-foreground font-semibold text-sm">
                            0%
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Icon name="ShoppingCart" className="text-accent mx-auto mb-3" size={32} />
                  <div className="text-2xl font-bold text-primary mb-1">Ретейл</div>
                  <div className="text-sm text-muted-foreground">Торговая зона</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Icon name="Car" className="text-accent mx-auto mb-3" size={32} />
                  <div className="text-2xl font-bold text-primary mb-1">Транспорт</div>
                  <div className="text-sm text-muted-foreground">Инфраструктура</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Icon name="MapPin" className="text-accent mx-auto mb-3" size={32} />
                  <div className="text-2xl font-bold text-primary mb-1">Благоустройство</div>
                  <div className="text-sm text-muted-foreground">Комплексное освоение</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="project-quarry" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <Button onClick={() => scrollToSection('projects')} variant="outline" className="mb-8">
              <Icon name="ArrowLeft" size={20} />
              <span className="ml-2">Все проекты</span>
            </Button>
            
            <h3 className="text-4xl font-heading font-bold text-primary mb-4">
              Транспортная инфраструктура карьера «Восточный» — Том 1
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Обеспечение транспортной доступности участка вскрышных работ Западной траншеи
            </p>

            <Card className="bg-primary/5 border-primary/20 mb-8">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                  <Icon name="Target" size={20} />
                  Задача
                </h4>
                <ul className="space-y-2 text-sm text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Обеспечение транспортной доступности участка вскрышных работ Западной траншеи</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Строительство дороги IV категории протяженностью 520,58 м для движения тяжелой техники</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Внедрение усиленной конструкции дорожной одежды с применением геосинтетических материалов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Организация эффективного поверхностного водоотвода для защиты земляного полотна</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Снижение будущих эксплуатационных затрат за счет повышения долговечности покрытия</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="max-w-3xl mx-auto space-y-6 mb-12">
              <Card>
                <CardContent className="p-0">
                  <img 
                    src="https://cdn.poehali.dev/files/28974f0f-a4af-4e64-9fd2-817a31f2db92.png" 
                    alt="План автодорог и заездов проезда" 
                    className="w-full h-auto rounded-t-lg"
                  />
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">План автодорог и заездов проезда — схема расположения дорожных знаков</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-0">
                  <img 
                    src="https://cdn.poehali.dev/files/50471bcf-0ac1-4832-8484-4d9388e0fc41.png" 
                    alt="Схема криволинейного съезда" 
                    className="w-full h-auto rounded-t-lg"
                  />
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">Схема криволинейного съезда с детализацией конструкции</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            </div>

            <div className="flex justify-center gap-4">
              <Card>
                <CardContent className="p-6 text-center">
                  <Icon name="Truck" className="text-accent mx-auto mb-3" size={32} />
                  <div className="text-2xl font-bold text-primary mb-1">520,58 м</div>
                  <div className="text-sm text-muted-foreground">Протяженность дороги</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Icon name="Route" className="text-accent mx-auto mb-3" size={32} />
                  <div className="text-2xl font-bold text-primary mb-1">IV категория</div>
                  <div className="text-sm text-muted-foreground">Тяжелая техника</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Icon name="Shield" className="text-accent mx-auto mb-3" size={32} />
                  <div className="text-2xl font-bold text-primary mb-1">Геосинтетика</div>
                  <div className="text-sm text-muted-foreground">Усиленная конструкция</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="project-quarry2" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <Button onClick={() => scrollToSection('projects')} variant="outline" className="mb-8">
              <Icon name="ArrowLeft" size={20} />
              <span className="ml-2">Все проекты</span>
            </Button>
            
            <h3 className="text-4xl font-heading font-bold text-primary mb-4">
              Транспортная инфраструктура карьера «Восточный» — Том 2
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Создание единой транспортной сети для доступности ключевых объектов карьера
            </p>

            <Card className="bg-accent/5 border-accent/20 mb-8">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                  <Icon name="Target" size={20} />
                  Задача
                </h4>
                <ul className="space-y-2 text-sm text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Создание единой транспортной сети для 100% доступности ключевых объектов карьера</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Обеспечение круглогодичной эксплуатации дорог при интенсивном движении тяжелой техники</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Внедрение ресурсосберегающих технологий для снижения капитальных и эксплуатационных затрат</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Защита инфраструктуры от подтопления через организацию комплексного водоотвода</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Минимизация воздействия на окружающую среду</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="max-w-3xl mx-auto space-y-6 mb-12">
              <Card>
                <CardContent className="p-0">
                  <img 
                    src="https://cdn.poehali.dev/files/28974f0f-a4af-4e64-9fd2-817a31f2db92.png" 
                    alt="Схема дорожной сети карьера" 
                    className="w-full h-auto rounded-t-lg"
                  />
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">Генеральная схема дорожной сети карьера «Восточный»</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center gap-4">
              <Card>
                <CardContent className="p-6 text-center">
                  <Icon name="Network" className="text-accent mx-auto mb-3" size={32} />
                  <div className="text-2xl font-bold text-primary mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">Доступность объектов</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Icon name="Calendar" className="text-accent mx-auto mb-3" size={32} />
                  <div className="text-2xl font-bold text-primary mb-1">Круглый год</div>
                  <div className="text-sm text-muted-foreground">Эксплуатация</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Icon name="Leaf" className="text-accent mx-auto mb-3" size={32} />
                  <div className="text-2xl font-bold text-primary mb-1">Экология</div>
                  <div className="text-sm text-muted-foreground">Защита среды</div>
                </CardContent>
              </Card>
            </div>
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
                  category: 'Проектирование генпланов',
                  skills: [
                    'Разработка генеральных планов',
                    'Планировка территорий',
                    'Градостроительное проектирование',
                    'Зонирование территорий',
                  ],
                },
                {
                  category: 'Транспортная инфраструктура',
                  skills: [
                    'Проектирование дорог',
                    'Транспортные узлы',
                    'Логистические схемы',
                    'Аэродромные покрытия',
                  ],
                },
                {
                  category: 'Благоустройство',
                  skills: [
                    'Ландшафтное проектирование',
                    'Озеленение территорий',
                    'Малые архитектурные формы',
                    'Пешеходные пространства',
                  ],
                },
                {
                  category: 'Инженерные сети',
                  skills: [
                    'Водоснабжение и канализация',
                    'Электроснабжение',
                    'Теплоснабжение',
                    'Ливневая канализация',
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
                    <a href="mailto:artem.usov@example.com" className="text-primary-foreground/80 hover:text-primary-foreground">
                      artem.usov@example.com
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
          © 2024 Усов Артём Игоревич. Все права защищены.
        </div>
      </footer>
    </div>
  );
};

export default Index;