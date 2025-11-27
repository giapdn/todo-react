import { Search } from "lucide-react";

export default function SearchInput() {
  return (
    <div className="relative mt-3">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />

      <input
        type="text"
        placeholder="Search..."
        className="w-full pl-10 rounded-sm pr-3 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
    </div>
  );
}
