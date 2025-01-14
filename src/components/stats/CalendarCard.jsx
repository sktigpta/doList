import React from 'react';
import { Calendar } from 'lucide-react';
import { Card, CardContent } from '../ui/Card';

export const CalendarCard = () => {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const currentDay = today.getDate();

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const startDay = firstDayOfMonth.getDay();

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  return (
    <Card>
      <CardContent>
        <div className="flex items-center space-x-2">
          <Calendar className="w-5 h-5 text-gray-500" />
          <h3 className="text-lg font-semibold">Calendar</h3>
        </div>

        <div className="mt-4">
          <div className="grid grid-cols-7 gap-1 text-center text-sm">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="text-gray-500">{day}</div>
            ))}
            {Array.from({ length: startDay }, (_, i) => (
              <div key={`empty-${i}`} className="text-transparent">-</div>
            ))}

            {Array.from({ length: daysInMonth }, (_, i) => (
              <div
                key={i + 1}
                className={`aspect-square flex items-center justify-center rounded-full cursor-pointer 
                  ${i + 1 === currentDay ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
