export function Textarea({ ...props }) {
  return (
    <textarea
      {...props}
      className="w-full p-2 border border-gray-300 rounded-2xl min-h-[100px]"
    />
  );
}
