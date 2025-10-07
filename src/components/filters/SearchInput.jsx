const SearchInput = ({ value, onChange }) => (
  <div>
    <input
      type="text"
      placeholder="Search by company name..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="text-sm py-2 border rounded p-1 w-full"
    />
  </div>
);

export default SearchInput;
