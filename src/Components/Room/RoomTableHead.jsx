function RoomTableHead({ sortAsc, onClickSort }) {
  return (
    <thead>
      <tr>
        <th className="px-4 py-2">Name</th>
        <th className="px-4 py-2">Type</th>
        <th className="px-4 py-2">#Beds</th>
        <th onClick={onClickSort} className="px-4 py-2 cursor-pointer">
          Is Full {sortAsc ? "▼" : "▲"}
        </th>
        <th className="px-4 py-2">Actions</th>
      </tr>
    </thead>
  );
}

export default RoomTableHead;
