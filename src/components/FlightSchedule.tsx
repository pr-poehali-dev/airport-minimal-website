
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Icon from "@/components/ui/Icon";
import { Badge } from "@/components/ui/badge";

// Типы для рейсов
interface Flight {
  id: string;
  flightNumber: string;
  airline: string;
  destination: string;
  origin?: string;
  scheduledTime: string;
  actualTime?: string;
  terminal: string;
  gate?: string;
  status: "Вовремя" | "Задерживается" | "Отменен" | "Прибыл" | "Вылетел";
}

// Данные о рейсах
const departureFlights: Flight[] = [
  {
    id: "d1",
    flightNumber: "SU1546",
    airline: "Аэрофлот",
    destination: "Сочи",
    scheduledTime: "14:05",
    actualTime: "14:05",
    terminal: "B",
    gate: "23",
    status: "Вовремя"
  },
  {
    id: "d2",
    flightNumber: "S7 2112",
    airline: "S7 Airlines",
    destination: "Санкт-Петербург",
    scheduledTime: "14:30",
    actualTime: "15:10",
    terminal: "D",
    gate: "12",
    status: "Задерживается"
  },
  {
    id: "d3",
    flightNumber: "DP 154",
    airline: "Победа",
    destination: "Казань",
    scheduledTime: "15:00",
    terminal: "C",
    gate: "18",
    status: "Вовремя"
  },
  {
    id: "d4",
    flightNumber: "EK 134",
    airline: "Emirates",
    destination: "Дубай",
    scheduledTime: "15:45",
    terminal: "F",
    gate: "5",
    status: "Вовремя"
  },
  {
    id: "d5",
    flightNumber: "UT 321",
    airline: "Utair",
    destination: "Екатеринбург",
    scheduledTime: "16:15",
    actualTime: "",
    terminal: "B",
    status: "Отменен"
  }
];

const arrivalFlights: Flight[] = [
  {
    id: "a1",
    flightNumber: "SU1547",
    airline: "Аэрофлот",
    origin: "Сочи",
    destination: "Москва",
    scheduledTime: "13:35",
    actualTime: "13:28",
    terminal: "B",
    status: "Прибыл"
  },
  {
    id: "a2",
    flightNumber: "S7 2113",
    airline: "S7 Airlines",
    origin: "Санкт-Петербург",
    destination: "Москва",
    scheduledTime: "13:50",
    actualTime: "14:25",
    terminal: "D",
    status: "Задерживается"
  },
  {
    id: "a3",
    flightNumber: "LH 2534",
    airline: "Lufthansa",
    origin: "Франкфурт",
    destination: "Москва",
    scheduledTime: "14:20",
    terminal: "F",
    status: "Вовремя"
  },
  {
    id: "a4",
    flightNumber: "TK 415",
    airline: "Turkish Airlines",
    origin: "Стамбул",
    destination: "Москва",
    scheduledTime: "15:10",
    terminal: "E",
    status: "Вовремя"
  },
  {
    id: "a5",
    flightNumber: "FV 6342",
    airline: "Россия",
    origin: "Симферополь",
    destination: "Москва",
    scheduledTime: "15:45",
    actualTime: "15:35",
    terminal: "B",
    status: "Вовремя"
  }
];

// Цвета для статусов рейсов
const getStatusColor = (status: Flight["status"]) => {
  switch (status) {
    case "Вовремя":
      return "success";
    case "Задерживается":
      return "warning";
    case "Отменен":
      return "destructive";
    case "Прибыл":
    case "Вылетел":
      return "secondary";
    default:
      return "default";
  }
};

const FlightSchedule: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filterFlights = (flights: Flight[]) => {
    if (!searchTerm) return flights;
    
    return flights.filter(flight => 
      flight.flightNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      flight.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
      flight.airline.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (flight.origin && flight.origin.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  };
  
  const filteredDepartures = filterFlights(departureFlights);
  const filteredArrivals = filterFlights(arrivalFlights);

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="relative w-full sm:w-72">
          <Icon
            name="Search"
            size={18}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            placeholder="Поиск рейса..."
            className="w-full pl-10 h-10 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="text-sm text-slate-500 flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Вовремя</Badge>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">Задерживается</Badge>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">Отменен</Badge>
          </div>
        </div>
      </div>

      <Tabs defaultValue="departures" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="departures" className="text-base">
            <Icon name="PlaneTakeoff" size={18} className="mr-2" />
            Вылет
          </TabsTrigger>
          <TabsTrigger value="arrivals" className="text-base">
            <Icon name="PlaneLanding" size={18} className="mr-2" />
            Прилет
          </TabsTrigger>
        </TabsList>

        <TabsContent value="departures" className="bg-white rounded-md">
          <div className="overflow-x-auto">
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
                {filteredDepartures.length > 0 ? (
                  filteredDepartures.map((flight) => (
                    <TableRow key={flight.id}>
                      <TableCell className="font-medium">{flight.flightNumber}</TableCell>
                      <TableCell>{flight.airline}</TableCell>
                      <TableCell>{flight.destination}</TableCell>
                      <TableCell>
                        <div>{flight.scheduledTime}</div>
                        {flight.actualTime && flight.actualTime !== flight.scheduledTime && (
                          <div className="text-sm text-amber-600">{flight.actualTime}</div>
                        )}
                      </TableCell>
                      <TableCell>{flight.terminal}</TableCell>
                      <TableCell>{flight.gate || "—"}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusColor(flight.status) as any}>
                          {flight.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-8 text-slate-500">
                      Рейсы не найдены
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="arrivals" className="bg-white rounded-md">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Рейс</TableHead>
                  <TableHead>Авиакомпания</TableHead>
                  <TableHead>Откуда</TableHead>
                  <TableHead>Время</TableHead>
                  <TableHead>Терминал</TableHead>
                  <TableHead>Статус</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredArrivals.length > 0 ? (
                  filteredArrivals.map((flight) => (
                    <TableRow key={flight.id}>
                      <TableCell className="font-medium">{flight.flightNumber}</TableCell>
                      <TableCell>{flight.airline}</TableCell>
                      <TableCell>{flight.origin}</TableCell>
                      <TableCell>
                        <div>{flight.scheduledTime}</div>
                        {flight.actualTime && flight.actualTime !== flight.scheduledTime && (
                          <div className="text-sm text-amber-600">{flight.actualTime}</div>
                        )}
                      </TableCell>
                      <TableCell>{flight.terminal}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusColor(flight.status) as any}>
                          {flight.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-8 text-slate-500">
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
