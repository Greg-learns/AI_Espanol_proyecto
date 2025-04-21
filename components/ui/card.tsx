export function Card({ children, className = "" }: any) {
  return (
    <div className={`bg-white shadow-md rounded-2xl p-4 mb-4 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children }: any) {
  return <div>{children}</div>;
}
