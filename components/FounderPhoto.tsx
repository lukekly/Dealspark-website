'use client';

export default function FounderPhoto() {
  return (
    <div className="relative w-full h-full min-h-[240px] bg-accent/5 flex items-center justify-center overflow-hidden">
      <img
        src="/luke-kelly.jpg"
        alt="Luke Kelly, Founder of DealSpark"
        className="absolute inset-0 w-full h-full object-cover object-top"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = 'none';
        }}
      />
      {/* Fallback shown when no photo present */}
      <span className="text-4xl font-bold text-accent/20 select-none" aria-hidden="true">
        LK
      </span>
    </div>
  );
}
