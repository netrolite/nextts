import { Dispatch, SetStateAction } from "react";

interface DesktopSearchProps {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
}

export default function DesktopSearch({ query, setQuery }: DesktopSearchProps) {
  return (
    <div className="hidden md:block">
      <form className="max-w-[250px] flex-grow">
        <input
          type="text"
          placeholder="Search..."
          className="w-full rounded bg-c-gray-200 px-3 py-1 text-black duration-200 placeholder:font-light placeholder:text-c-gray-800 dark:bg-zinc-800 dark:text-white"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </div>
  );
}
