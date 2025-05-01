
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/Icon";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";

interface Flight {
  id: string;
  flightNumber: string;
  airline: string;
  destination: string;
  departureTime: string;
  status: "По расписанию" | "Задерживается" | "Отменен" | "Вылетел" | "Прибыл";
  terminal: string;
  gate?: string;
}

const arrivalFlights: Flight[] = [
  {
    id: "1",
    flightNumber: "SU1422",
    airline: "Аэрофлот",
    destination: "Санкт-Петербург",
    departureTime: "10:30",
    status: "Прибыл",
    terminal: "B",
    gate: "12"
  },
  {
    id: "2",
    flightNumber: "S72502",
    airline: "S7 Airlines",
    destination: "Сочи",
    departureTime: "11:15",
    status: "По расписанию",
    terminal: "D",
    gate: "4"
  },
  {
    id: "3",
    flightNumber: "U6178",
    airline: "Уральские Авиалинии",
    destination: "Екатеринбург",
    departureTime: "12:45",
    status: "Задерживается",
    terminal: "C",
    gate: "7"
  },
  {
    id: "4",
    flightNumber: "TK414",
    airline: "Turkish Airlines",
    destination: "Стамбул",
    departureTime: "13:50",
    status: "По расписанию",
    terminal: "F",
    gate: "15"
  },
];

const departureFlights: Flight[] = [
  {
    id: "5",
    flightNumber: "SU1621",
    airline: "Аэрофлот",
    destination: "Казань",
    departureTime: "09:45",
    status: "Вылетел",
    terminal: "B",
    gate: "3"
  },
  {
    id: "6",
    flightNumber: "EK132",
    airline: "Emirates",
    destination: "Дубай",
    departureTime: "10:30",
    status: "По расписанию",
    terminal: "E",
    gate: "22"
  },
  {
    id: "7",
    flightNumber: "AF1045",
    airline: "Air France",
    destination: "Париж",
    departureTime: "12:20",
    status: "Задерживается",
    terminal: "D",
    gate: "8"
  },
  {
    id: "8",
    flightNumber: "LH713",
    airline: "Lufthansa",
    destination: "Франкфурт",
    departureTime: "14:10",
    status: "По расписанию",
    terminal: "C",
    gate: "5"
  },
];

const FlightSchedule: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filterFlights = (flights: Flight[]) => {
    if (!searchTerm) return flights;
    
    return flights.filter(
      flight => 
        flight.flightNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        flight.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
        flight.airline.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const getStatusColor = (status: Flight["status"]) => {
    switch(status) {
      case "По расписанию": return "text-green-600";
      case "Вылетел": 
      case "Прибыл": return "text-blue-600";
      case "Задерживается": return "text-amber-600";
      case "Отменен": return "text-red-600";
      default: return "";
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row gap-4 mb-6 items-center">
        <div className="relative flex-1">
          <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={16} />
          <Input
            placeholder="Поиск по номеру рейса, направлению или авиакомпании"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline" onClick={() => setSearchTerm("")}>
          <Icon name="RefreshCcw" size={16} className="mr-2" />
          Обновить
        </Button>
      </div>

      <Tabs defaultValue="departures" className="w-full">
        <TabsList className="w-full grid grid-cols-2 mb-6">
          <TabsTrigger value="departures" className="text-base">
            <Icon name="PlaneTakeoff" size={18} className="mr-2" />
            Вылет
          </TabsTrigger>
          <TabsTrigger value="arrivals" className="text-base">
            <Icon name="PlaneLanding" size={18} className="mr-2" />
            Прилет
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="departures" className="mt-0">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Рейс</TableHead>
                  <TableHead>Авиакомпания</TableHead>
                  <TableHead>Направление</TableHead>
                  <TableHead>Время</TableHead>
                  <TableHead>Терминал</TableHead>
                  <TableHead>Выход</TableHead>
                  <TableHead>Статус</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filterFlights(departureFlights).map((flight) => (
                  <TableRow key={flight.id}>
                    <TableCell className="font-medium">{flight.flightNumber}</TableCell>
                    <TableCell>{flight.airline}</TableCell>
                    <TableCell>{flight.destination}</TableCell>
                    <TableCell>{flight.departureTime}</TableCell>
                    <TableCell>{flight.terminal}</TableCell>
                    <TableCell>{flight.gate}</TableCell>
                    <TableCell className={getStatusColor(flight.status)}>{flight.status}</TableCell>
                  </TableRow>
                ))}
                {filterFlights(departureFlights).length === 0 && (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-4 text-slate-500">
                      Рейсы не найдены
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
        
        <TabsContent value="arrivals" className="mt-0">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Рейс</TableHead>
                  <TableHead>Авиакомпания</TableHead>
                  <TableHead>Откуда</TableHead>
                  <TableHead>Время</TableHead>
                  <TableHead>Терминал</TableHead>
                  <TableHead>Выход</TableHead>
                  <TableHead>Статус</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filterFlights(arrivalFlights).map((flight) => (
                  <TableRow key={flight.id}>
                    <TableCell className="font-medium">{flight.flightNumber}</TableCell>
                    <TableCell>{flight.airline}</TableCell>
                    <TableCell>{flight.destination}</TableCell>
                    <TableCell>{flight.departureTime}</TableCell>
                    <TableCell>{flight.terminal}</TableCell>
                    <TableCell>{flight.gate}</TableCell>
                    <TableCell className={getStatusColor(flight.status)}>{flight.status}</TableCell>
                  </TableRow>
                ))}
                {filterFlights(arrivalFlights).length === 0 && (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-4 text-slate-500">
                      Рейсы не найдены
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FlightSchedule;
