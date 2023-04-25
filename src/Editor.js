const Editor = ({ isSelected, value, onChange, onClick }) => {
    return (
        <div className="cell-editor">
            <input
                type="text"
                value={value}
                onChange={onChange}
            />
            {isSelected && <button onClick={onClick}>Сохранить</button>}
        </div>
    )
};


export default Editor;
