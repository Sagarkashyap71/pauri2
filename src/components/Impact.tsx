import { useEffect, useState, useRef } from 'react';
import { TreePine, Droplets, Users, CalendarCheck, Award, Mountain } from 'lucide-react';

const stats = [
  { icon: TreePine, value: 10000, suffix: '+', label: 'Trees Planted', color: 'from-green-500 to-emerald-600' },
  { icon: Droplets, value: 15, suffix: '+', label: 'Rivers Cleaned', color: 'from-blue-500 to-cyan-600' },
  { icon: Users, value: 500, suffix: '+', label: 'Active Volunteers', color: 'from-purple-500 to-violet-600' },
  { icon: CalendarCheck, value: 25, suffix: '+', label: 'Events Organized', color: 'from-orange-500 to-amber-600' },
  { icon: Award, value: 5, suffix: '', label: 'Awards Won', color: 'from-yellow-500 to-yellow-600' },
  { icon: Mountain, value: 30, suffix: '+', label: 'Villages Covered', color: 'from-teal-500 to-emerald-600' },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-3xl sm:text-4xl font-bold text-white">
      {count.toLocaleString()}{suffix}
    </div>
  );
}

export default function Impact() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-eco-800 via-eco-700 to-eco-800 overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-eco-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-eco-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Our <span className="text-eco-300">Impact</span> So Far
          </h2>
          <p className="text-eco-100/70 max-w-xl mx-auto leading-relaxed">
            Every number represents countless hours of dedication from our eco warriors.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 group"
            >
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${stat.color} mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className="text-eco-100/60 text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
