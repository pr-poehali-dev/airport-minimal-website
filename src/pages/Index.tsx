
import React from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/Icon";
import ServiceCard from "@/components/ServiceCard";
import FlightSchedule from "@/components/FlightSchedule";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-slate-900 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1610642434928-574f0684bdd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Современный аэропорт" 
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/50"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              SkySphere Аэропорт
            </h1>
            <p className="text-xl text-slate-200 mb-8">
              Современный международный аэропорт, открывающий путь в любую точку мира
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2">
                <Icon name="Search" size={18} />
                Найти рейс
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20 gap-2">
                <Icon name="Info" size={18} />
                Об аэропорте
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Flight Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-6 mb-10">
            <div className="flex items-center gap-3">
              <div className="h-10 w-1 bg-primary rounded-full"></div>
              <h2 className="text-3xl font-bold">Онлайн-табло</h2>
            </div>
            <p className="text-slate-500 max-w-3xl">
              Актуальная информация о прилетах и вылетах в аэропорту SkySphere. 
              Отслеживайте статус рейса, время вылета и прилета, номер терминала и выхода на посадку.
            </p>
          </div>
          
          <FlightSchedule />
          
          <div className="mt-8 text-center">
            <Button variant="outline" size="lg" asChild>
              <a href="/schedule">
                Полное расписание рейсов
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-6 mb-10">
            <div className="flex items-center gap-3">
              <div className="h-10 w-1 bg-primary rounded-full"></div>
              <h2 className="text-3xl font-bold">Услуги для пассажиров</h2>
            </div>
            <p className="text-slate-500 max-w-3xl">
              Мы стремимся сделать ваше пребывание в аэропорту максимально комфортным.
              Воспользуйтесь широким спектром услуг, чтобы ваше путешествие началось приятно.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard 
              icon="ShoppingBag"
              title="Магазины Duty Free"
              description="Огромный выбор товаров по выгодным ценам без уплаты налогов и пошлин."
              imageUrl="https://images.unsplash.com/photo-1580993123109-63726bd5e323?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            />
            
            <ServiceCard 
              icon="UtensilsCrossed"
              title="Рестораны и кафе"
              description="Разнообразие кухонь мира и быстрое обслуживание для путешественников."
              imageUrl="https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            />
            
            <ServiceCard 
              icon="Wifi"
              title="Бесплатный Wi-Fi"
              description="Высокоскоростной доступ в интернет на всей территории аэропорта."
              imageUrl="https://images.unsplash.com/photo-1580795479225-c0ab7bd3b771?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            />
            
            <ServiceCard 
              icon="Sofa"
              title="VIP-залы ожидания"
              description="Комфортные условия для отдыха и работы перед полетом."
              imageUrl="https://images.unsplash.com/photo-1630415598534-c6d730168fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            />
            
            <ServiceCard 
              icon="Car"
              title="Парковка и аренда авто"
              description="Удобные парковочные места и услуги аренды автомобилей от ведущих компаний."
              imageUrl="https://images.unsplash.com/photo-1580039191767-ea578e8cf9d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            />
            
            <ServiceCard 
              icon="Shield"
              title="Страхование путешествий"
              description="Широкий выбор страховых продуктов для вашего спокойствия в поездке."
              imageUrl="https://images.unsplash.com/photo-1627163439134-7a8c47e08208?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            />
          </div>
          
          <div className="mt-10 text-center">
            <Button variant="outline" size="lg" asChild>
              <a href="/services">
                Все услуги аэропорта
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-primary/5 rounded-xl p-8 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Icon name="Map" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Как добраться</h3>
              <p className="text-slate-600 mb-4">
                Различные варианты транспорта для комфортного прибытия в аэропорт
              </p>
              <Button variant="link" asChild>
                <a href="/location">Посмотреть маршруты</a>
              </Button>
            </div>
            
            <div className="bg-primary/5 rounded-xl p-8 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Icon name="Clock" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Минимальное время</h3>
              <p className="text-slate-600 mb-4">
                Рекомендации по времени прибытия в аэропорт для разных типов рейсов
              </p>
              <Button variant="link" asChild>
                <a href="/timing">Подробнее</a>
              </Button>
            </div>
            
            <div className="bg-primary/5 rounded-xl p-8 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Icon name="HelpCircle" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Помощь пассажирам</h3>
              <p className="text-slate-600 mb-4">
                Специальные услуги для пассажиров с ограниченными возможностями
              </p>
              <Button variant="link" asChild>
                <a href="/assistance">Узнать больше</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Быстрая регистрация на рейс</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Экономьте время при прохождении регистрации с помощью нашего мобильного приложения
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-slate-900 hover:bg-slate-100 gap-2">
              <Icon name="AppStore" fallback="Apple" size={20} />
              App Store
            </Button>
            <Button className="bg-white text-slate-900 hover:bg-slate-100 gap-2">
              <Icon name="PlayStore" fallback="SmartphoneNfc" size={20} />
              Google Play
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
