import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [selectedPuppet, setSelectedPuppet] = useState<number | null>(null);

  const puppets = [
    {
      id: 1,
      name: "Арлекин",
      description: "Традиционный персонаж комедии дель арте",
      image: "https://cdn.poehali.dev/projects/bd0ff140-0317-464a-aa49-d99b05b8d046/files/963273d3-ce6b-4b23-ab1e-397fc8e38363.jpg",
      details: "Ручная роспись, дубовое дерево, шёлковые нити"
    },
    {
      id: 2,
      name: "Лесная фея",
      description: "Волшебное создание из старинной сказки",
      image: "https://cdn.poehali.dev/projects/bd0ff140-0317-464a-aa49-d99b05b8d046/files/04f09f61-cb7e-4eb6-870b-0e7da8cabde9.jpg",
      details: "Кедр, натуральные ткани, бисер"
    },
    {
      id: 3,
      name: "Старый мудрец",
      description: "Хранитель древних знаний и историй",
      image: "https://cdn.poehali.dev/projects/bd0ff140-0317-464a-aa49-d99b05b8d046/files/cf21129a-272a-4397-9fc1-2e261fce76c7.jpg",
      details: "Липа, натуральная шерсть, металлическая фурнитура"
    },
    {
      id: 4,
      name: "Принцесса",
      description: "Изящная героиня сказочных историй",
      image: "https://cdn.poehali.dev/projects/bd0ff140-0317-464a-aa49-d99b05b8d046/files/4f86a375-2f4f-4f78-b671-7a78f742e9c9.jpg",
      details: "Берёза, бархат, золотые нити"
    },
    {
      id: 5,
      name: "Военный офицер",
      description: "Доблестный страж порядка и дисциплины",
      image: "https://cdn.poehali.dev/projects/bd0ff140-0317-464a-aa49-d99b05b8d046/files/e5b64b09-b537-41cf-9074-0a810bdcfbff.jpg",
      details: "Дерево, текстиль, авторская роспись"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Замысел",
      description: "Обсуждаем характер, историю и образ будущей марионетки. Создаём эскизы."
    },
    {
      number: "02",
      title: "Скульптура",
      description: "Вырезаю детали из натурального дерева, придавая каждой части уникальную форму."
    },
    {
      number: "03",
      title: "Оживление",
      description: "Соединяю части специальными шарнирами, создаю систему нитей для управления."
    },
    {
      number: "04",
      title: "Облачение",
      description: "Шью костюм вручную из натуральных тканей, добавляю аксессуары и детали."
    },
    {
      number: "05",
      title: "Характер",
      description: "Расписываю лицо, добавляя мимику и душу. Финальные штрихи создают личность."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-muted to-background overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 py-20 relative z-10 text-center animate-fade-in">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-6xl md:text-8xl font-bold text-foreground tracking-tight">
              Мастерская<br />
              <span className="text-primary">марионеток</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Каждая кукла — это живая история, созданная вручную с любовью к древнему искусству
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Заказать марионетку
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-2"
                onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Посмотреть работы
              </Button>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <Icon name="ChevronDown" size={32} className="text-muted-foreground" />
          </div>
        </div>
      </section>

      <section id="gallery" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">Галерея работ</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Каждая марионетка уникальна. Создана вручную с использованием традиционных техник
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {puppets.map((puppet, index) => (
              <Card 
                key={puppet.id}
                className="group overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl animate-scale-in border-2"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedPuppet(selectedPuppet === puppet.id ? null : puppet.id)}
              >
                <div className="aspect-[3/4] bg-muted relative overflow-hidden">
                  <img 
                    src={puppet.image} 
                    alt={puppet.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">{puppet.name}</h3>
                  <p className="text-muted-foreground">{puppet.description}</p>
                  
                  {selectedPuppet === puppet.id && (
                    <div className="pt-4 border-t border-border mt-4 animate-fade-in">
                      <p className="text-sm text-muted-foreground italic">{puppet.details}</p>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6 animate-fade-in">
                <div className="w-20 h-1 bg-primary"></div>
                <h2 className="text-5xl font-bold text-foreground">История мастера</h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Более 15 лет я посвятил изучению древнего искусства создания марионеток. 
                    Каждая кукла для меня — это не просто изделие, а живое существо с характером и душой.
                  </p>
                  <p>
                    Я работаю только с натуральными материалами: дерево, ткани, металл. 
                    Использую традиционные техники резьбы и старинные способы крепления, 
                    которые передавались из поколения в поколение.
                  </p>
                  <p className="font-semibold text-primary italic">
                    "Марионетка — это мост между реальностью и сказкой, 
                    способ рассказать историю без слов"
                  </p>
                </div>
              </div>
              
              <div className="relative animate-scale-in">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/bd0ff140-0317-464a-aa49-d99b05b8d046/files/a5e8048f-af8f-4802-8960-e7770f12d691.jpg" 
                    alt="Мастер за работой"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-lg -z-10"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/10 rounded-lg -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">Процесс создания</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              От первого эскиза до оживления — путь длиною в несколько недель
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto space-y-8">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className="flex gap-8 items-start group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <span className="text-2xl font-bold text-primary group-hover:text-primary-foreground transition-colors">
                      {step.number}
                    </span>
                  </div>
                </div>
                
                <div className="flex-1 pb-8 border-b border-border last:border-0">
                  <h3 className="text-3xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">Оформить заказ</h2>
              <p className="text-xl text-muted-foreground">
                Расскажите о вашей идее, и мы создадим уникальную марионетку
              </p>
            </div>
            
            <Card className="p-8 md:p-12 shadow-2xl border-2 animate-scale-in">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Ваше имя</label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border-2 border-border focus:border-primary focus:outline-none transition-colors bg-background"
                    placeholder="Как к вам обращаться?"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Контакты</label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border-2 border-border focus:border-primary focus:outline-none transition-colors bg-background"
                    placeholder="Телефон или email"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Опишите идею</label>
                  <textarea 
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border-2 border-border focus:border-primary focus:outline-none transition-colors resize-none bg-background"
                    placeholder="Расскажите о персонаже, его характере, истории..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full text-lg py-6 bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Отправить заявку
                </Button>
              </form>
              
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex flex-col sm:flex-row gap-6 justify-center text-center sm:text-left">
                  <div className="flex items-center gap-3 justify-center sm:justify-start">
                    <Icon name="Mail" size={24} className="text-primary" />
                    <span className="text-muted-foreground">master@puppets.ru</span>
                  </div>
                  <div className="flex items-center gap-3 justify-center sm:justify-start">
                    <Icon name="Phone" size={24} className="text-primary" />
                    <span className="text-muted-foreground">+7 (900) 123-45-67</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">Мастерская марионеток</p>
          <p className="text-sm opacity-80">Ручная работа с 2009 года</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;