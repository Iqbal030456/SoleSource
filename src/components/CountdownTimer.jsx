import { useState, useEffect } from 'react';
import { nextDrop } from '../data/products';

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0 });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = nextDrop.targetDate - new Date();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000 * 60); // Update every minute

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-navy rounded-2xl p-6 text-center min-h-[200px] flex flex-col justify-center">
            <h3 className="text-white font-bold text-xl mb-4">{nextDrop.label}</h3>
            <div className="flex justify-center gap-4">
                <div className="bg-white rounded-lg px-4 py-3 min-w-[60px]">
                    <div className="text-navy text-3xl font-bold">{String(timeLeft.days).padStart(2, '0')}</div>
                    <div className="text-navy/60 text-xs uppercase">Days</div>
                </div>
                <div className="bg-white rounded-lg px-4 py-3 min-w-[60px]">
                    <div className="text-navy text-3xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
                    <div className="text-navy/60 text-xs uppercase">Hours</div>
                </div>
            </div>
        </div>
    );
};

export default CountdownTimer;
