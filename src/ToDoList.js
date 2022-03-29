import "./ToDoList.css"
const ToDoListItem = (props) => {
    return(
        <div className="listItem">
            <input type="radio"/>
            <span className="item">{props.item}</span>
        </div>
    )
}

export default ToDoListItem;