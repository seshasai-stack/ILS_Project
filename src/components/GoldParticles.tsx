export function GoldParticles({ count = 18 }: { count?: number }) {
  const particles = Array.from({ length: count });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {particles.map((_, i) => {
        const left = (i * 53) % 100;
        const duration = 14 + ((i * 7) % 18);
        const delay = (i * 1.3) % 16;
        const size = 1 + ((i * 3) % 4);
        return (
          <span
            key={i}
            className="gold-particle"
            style={{
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              animationDuration: `${duration}s`,
              animationDelay: `-${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
}