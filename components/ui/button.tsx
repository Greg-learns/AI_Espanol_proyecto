export function Button({ children, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-600 text-white px-4 py-2 rounded-2xl hover:bg-blue-700 shadow-md"
    >
      {children}
    </button>
  );
}
