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
                title: 'Транспортная инфраструктура карьера',
                description: 'Комплексное проектирование транспортной инфраструктуры карьера «Восточный» (2 тома)',
                icon: 'Truck',
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
              Проектирование капитального ремонта ВПП длиной 1625 м с усилением конструкции покрытия и модернизацией инфраструктуры аэропорта
            </p>

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
              Комплексное проектирование цехов и логистической схемы промышленного комплекса на территории 2.9 Га с размещением производственных объектов капитального строительства
            </p>

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
              Проектирование многофункционального пространства для реабилитации и развития детей с комплексным благоустройством территории
            </p>

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