const Item = ({ value, onClick, isSelected }) => {

    return (
        <div
            className={`item ${isSelected ? "selected" : ""}`}
            onClick={onClick}
        >
            {value}
        </div>
    );
};

export default Item;

