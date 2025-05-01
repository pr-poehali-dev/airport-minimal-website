
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/Icon";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-16 px-4">
        <div className="text-center max-w-md">
          <div className="relative mx-auto mb-6 w-32 h-32">
            <div className="absolute inset-0 bg-primary/10 rounded-full flex items-center justify-center">
              <Icon name="CloudOff" size={48} className="text-primary" />
            </div>
            <div className="absolute h-8 w-8 bottom-1 right-1 bg-white rounded-full flex items-center justify-center shadow-lg">
              <Icon name="PlaneCrash" fallback="Plane" size={16} className="text-primary" />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Страница не найдена</h2>
          <p className="text-slate-600 mb-8">
            Извините, запрашиваемая страница не существует или была перемещена. 
            Проверьте правильность URL или вернитесь на главную страницу.
          </p>
          
          <Button asChild>
            <Link to="/" className="flex items-center gap-2">
              <Icon name="Home" size={16} />
              Вернуться на главную
            </Link>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
