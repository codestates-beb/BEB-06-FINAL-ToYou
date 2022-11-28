import "./FilterButton.css"

const FilterButton = ({ board, active, handleBoard }) => {
  return (
    <button
      className={`btn hover ${active ? "active_btn" : null}`}
      onClick={() => handleBoard(board)}
    >
      {board}
    </button>
  );
}

export default FilterButton;