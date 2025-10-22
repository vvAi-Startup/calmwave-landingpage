// Componente de onda SVG inspirado no logo
export default function WaveLogo({ className = "" }) {
  return (
    <svg 
      viewBox="0 0 200 200" 
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Círculo externo */}
      <circle cx="100" cy="100" r="95" stroke="currentColor" strokeWidth="4" fill="none"/>
      
      {/* Onda inferior */}
      <path
        d="M 20 130 Q 50 110, 80 115 T 140 125 T 180 130 L 180 190 Q 100 195, 20 190 Z"
        fill="currentColor"
        opacity="0.9"
      />
      
      {/* Onda superior (splash) */}
      <path
        d="M 120 90 Q 140 70, 160 80 L 170 110 Q 150 95, 130 100 Z"
        fill="currentColor"
        opacity="0.7"
      />
    </svg>
  );
}
