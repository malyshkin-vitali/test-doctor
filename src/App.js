import "./styles.css";
import _ from "lodash";
import Item from "./Item";
import {useState} from "react";
import Editor from "./Editor";

export default function App() {

    const [data, setData] = useState();
    const [rows, setRows] = useState(_.range(1));
    const [columns, setColumns] = useState(_.range(1));
    const [selectedCell, setSelectedCell] = useState(null);
    const [cellValue, setCellValue] = useState("");

    const handleColumnAdd = () => {
        setColumns([...columns, columns.length]);
    };

    const handleRowAdd = () => {
        setRows([...rows, rows.length]);
    };

    const handleCellClick = (i, j) => {
        setSelectedCell({ i, j });
        setCellValue(data?.[i]?.[j] || "");
    };

    const handleCellValueChange = (event) => {
        setCellValue(event.target.value);
    };

    const handleSaveCellValue = () => {
        const newData = _.cloneDeep(data) || [];
        newData[selectedCell.i] = newData[selectedCell.i] || [];
        newData[selectedCell.i][selectedCell.j] = cellValue;
        setData(newData);
        setSelectedCell(null);
        setCellValue("");
    };

    return (
        <div className="App">
            <h1>Таблица</h1>
            <Editor value={cellValue}  onChange={handleCellValueChange} onClick={handleSaveCellValue} isSelected={selectedCell}/>
            <div className="list">
                <div className="header">
                    {_.map(columns, (j) => (
                        <div className="column" key={j}>
                            {j}
                        </div>
                    ))}
                    <button className="column-add" onClick={handleColumnAdd}>
                        +
                    </button>
                </div>
                {_.map(rows, (i) => (
                    <div className="row" key={i}>
                        <div className="row-index">{i}</div>
                        {_.map(columns, (j) => (
                            <Item
                                key={`${i}-${j}`}
                                onClick={() => handleCellClick(i, j)}
                                isSelected={selectedCell?.i === i && selectedCell?.j === j}
                                value={data?.[i]?.[j]}
                            />
                        ))}
                    </div>
                ))}
                <div className="row">
                    <button className="row-add" onClick={handleRowAdd}>
                        +
                    </button>
                </div>
            </div>
        </div>
    );
}
