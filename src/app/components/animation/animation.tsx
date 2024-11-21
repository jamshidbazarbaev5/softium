'use client';

import { useEffect, useState, useRef } from 'react';
import './animation.css'

const stats = [
    { value: 50, suffix: '+', label: 'Проектов, которыми мы гордимся!' },
    { value: 5, label: 'Лет на рынке информационных технологий' },
    { value: 21, label: 'Специалистов в нашей команде!' },
    { value: 100, suffix: '%', label: 'Довольных клиентов' },
];

export default function Animation() {
    const [counts, setCounts] = useState(stats.map(() => 0));
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<number[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    startCountAnimation();
                } else {
                    setIsVisible(false);
                    resetCounts();
                }
            },
            { 
                threshold: 0.1,
                rootMargin: '-50px'
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            observer.disconnect();
            animationRef.current.forEach(id => clearInterval(id));
        };
    }, []);

    const resetCounts = () => {
        setCounts(stats.map(() => 0));
        animationRef.current.forEach(id => clearInterval(id));
        animationRef.current = [];
    };

    const startCountAnimation = () => {
        stats.forEach((stat, index) => {
            const duration = 2000;
            const steps = 60;
            const increment = stat.value / steps;
            let current = 0;

            const timerId = window.setInterval(() => {
                current += increment;
                if (current >= stat.value) {
                    current = stat.value;
                    clearInterval(timerId);
                    const newIds = animationRef.current.filter(id => id !== timerId);
                    animationRef.current = newIds;
                }
                setCounts(prev => {
                    const newCounts = [...prev];
                    newCounts[index] = Math.floor(current);
                    return newCounts;
                });
            }, duration / steps);

            animationRef.current.push(timerId);
        });
    };

    return (
        <div 
            className={`stats-container ${isVisible ? 'visible' : ''}`} 
            ref={containerRef}
        >
            <h2 className="stats-title">НАШИ ПРЕИМУЩЕСТВА</h2>
            <div className="stats-grid">
                {stats.map((stat, index) => (
                    <div 
                        key={index} 
                        className={`stat-item ${isVisible ? 'visible' : ''}`}
                        style={{ transitionDelay: `${index * 0.2}s` }}
                    >
                        <div className="stat-number">
                            {counts[index]}
                            {stat.suffix}
                        </div>
                        <div className="stat-label">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}