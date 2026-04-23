export function SimpleLogo({ size = 40 }: { size?: number }) {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <img
        src="/circulo.png"
        className="absolute inset-0 w-full h-full object-contain"
        alt="Logo Enlazarte"
      />
      <img
        src="/jaguar.png"
        className="absolute inset-0 w-full h-full object-contain opacity-70"
        alt="Jaguar"
      />
    </div>
  );
}