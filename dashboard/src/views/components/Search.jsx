const Search = ({ setPerPage, placeholder, setSearchQuery, searchQuery }) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <select
        className="px-4 py-2 hover:border-indigo-300 outline-none bg-indigo-200 border border-slate-500 rounded-md text-black"
        onChange={(e) => setPerPage(parseInt(e.target.value))}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>

      <input
        type="text"
        className="px-2 py-2 outline-none bg-transparent border border-[#e0e0e0] rounded-md min-w-[200px] text-[#030818] text-sm"
        placeholder={`Search by ${placeholder}`}
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery}
      />
    </div>
  );
};

export default Search;
