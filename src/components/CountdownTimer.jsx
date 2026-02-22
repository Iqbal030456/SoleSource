/**
 * ============================================================
 * CountdownTimer Component
 * ============================================================
 *
 * PURPOSE:
 *   Shows a countdown to the next sneaker drop date.
 *   Displays days and hours remaining.
 *
 * CONFIG:
 *   To change the target date, edit the `nextDrop` object
 *   in `src/data/products.js`. Set the year, month, day, hour, minute.
 *   NOTE: Months are 0-indexed (January = 0, February = 1, etc.)
 *
 * HOW TO EDIT:
 *   - Timer update frequency: change `1000 * 60` below (currently every 60 seconds)
 *   - To also show minutes/seconds, add them to the `timeLeft` state object
 *     and create additional display boxes in the JSX
 *   - Box styling: change `bg-white rounded-lg` classes
 * ============================================================
 */

import { useState, useEffect } from 'react';
import { nextDrop } from '../data/products';

const CountdownTimer = () => {
    // State holds the remaining time (days and hours)
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0 });

    useEffect(() => {
        /**
         * Calculates the time remaining until the target drop date.
         * Called immediately on mount and then every 60 seconds.
         */
        const calculateTimeLeft = () => {
            // Difference in milliseconds between target date and now
            const difference = nextDrop.targetDate - new Date();

            if (difference > 0) {
                setTimeLeft({
                    // Convert milliseconds to days
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    // Convert remaining milliseconds to hours
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                });
            }
        };

        // Run once immediately when the component first renders
        calculateTimeLeft();

        // Then run every 60 seconds (60,000 milliseconds)
        const timer = setInterval(calculateTimeLeft, 1000 * 60);

        // Cleanup: stop the timer when the component is removed from the page
        // This prevents memory leaks
        return () => clearInterval(timer);
    }, []); // Empty array = only run this effect once on mount

    return (
        <div className="bg-navy rounded-2xl p-6 text-center min-h-[200px] flex flex-col justify-center">
            <h3 className="text-white font-bold text-xl mb-4">{nextDrop.label}</h3>
            <div className="flex justify-center gap-4">
                {/* Days Box */}
                <div className="bg-white rounded-lg px-4 py-3 min-w-[60px]">
                    {/* padStart(2, '0') ensures single digits show as "01", "02", etc. */}
                    <div className="text-navy text-3xl font-bold">{String(timeLeft.days).padStart(2, '0')}</div>
                    <div className="text-navy/60 text-xs uppercase">Days</div>
                </div>
                {/* Hours Box */}
                <div className="bg-white rounded-lg px-4 py-3 min-w-[60px]">
                    <div className="text-navy text-3xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
                    <div className="text-navy/60 text-xs uppercase">Hours</div>
                </div>
            </div>
        </div>
    );
};

export default CountdownTimer;
