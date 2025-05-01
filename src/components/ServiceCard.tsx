
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/Icon";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  linkText?: string;
  linkUrl?: string;
  imageUrl?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  linkText = "Подробнее",
  linkUrl = "#",
  imageUrl,
}) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
      {imageUrl && (
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
          />
        </div>
      )}
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-primary/10 p-2 rounded-full">
            <Icon name={icon} size={20} className="text-primary" />
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button variant="outline" asChild className="gap-2">
          <a href={linkUrl}>
            {linkText}
            <Icon name="ArrowRight" size={16} />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
