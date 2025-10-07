const SortFilter = ({ value, onChange }) => (
  <div>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="text-sm py-2 border rounded p-1">
      <option value="">Sort By: Relevance</option>
      <option value="rating">Sort By: Rating</option>
      <option value="founded">Sort By: Year</option>
    </select>
  </div>
);

export default SortFilter;
