
import React from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/Icon";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Plane" size={24} className="text-primary" />
              <span className="font-bold text-xl text-white">SkySphere</span>
            </div>
            <p className="text-slate-400 mb-4">
              Международный аэропорт SkySphere – современный авиационный комплекс, 
              обеспечивающий высокий уровень комфорта и безопасности пассажиров.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-primary">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-primary">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-primary">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-primary">
                <Icon name="Telegram" size={20} fallback="MessageCircle" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-white mb-4">Пассажирам</h3>
            <ul className="space-y-2">
              <li><Link to="/schedule" className="text-slate-400 hover:text-primary">Расписание рейсов</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-primary">Услуги аэропорта</Link></li>
              <li><Link to="/baggage" className="text-slate-400 hover:text-primary">Правила багажа</Link></li>
              <li><Link to="/faq" className="text-slate-400 hover:text-primary">Часто задаваемые вопросы</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-white mb-4">Об аэропорте</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-slate-400 hover:text-primary">О нас</Link></li>
              <li><Link to="/news" className="text-slate-400 hover:text-primary">Новости</Link></li>
              <li><Link to="/partners" className="text-slate-400 hover:text-primary">Партнеры</Link></li>
              <li><Link to="/career" className="text-slate-400 hover:text-primary">Вакансии</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-white mb-4">Контакты</h3>
            <div className="space-y-2 text-slate-400">
              <p className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                <span>Россия, г. Москва, ул. Авиационная, 1</span>
              </p>
              <p className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <span>+7 (800) 123-45-67</span>
              </p>
              <p className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <span>info@skysphere-airport.ru</span>
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-slate-700" />

        <div className="flex flex-col md:flex-row gap-4 justify-between items-center text-sm text-slate-500">
          <p>© 2025 SkySphere Аэропорт. Все права защищены.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-primary">Политика конфиденциальности</Link>
            <Link to="/terms" className="hover:text-primary">Условия использования</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
