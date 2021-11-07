import React from "react";
import { ListForm } from "./ListForm";

type Props = {
  list: ListForm
  handleDone: (list: ListForm) => void
  handleDelete: (list: ListForm) => void
}

const ListItem: React.FC<Props> = ({ list, handleDone, handleDelete}) => {
  return(
    <li className={ list.done ? 'done':'' }>
      <label>
        <input className="checkbox-input" type="checkbox" onClick={() => handleDone(list)} defaultChecked={list.done} />
        <span className="checkbox-label">{ list.listName }</span>
      </label>
      <button className="delete-btn" onClick={ () => handleDelete(list)}>削除</button>
    </li>
  )
}

export default ListItem