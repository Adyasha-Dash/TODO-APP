import React from "react";
import "../Components/Todo.css";
import { MdDeleteForever, MdCheck } from "react-icons/md";

export default function Todolist({ data, onHandleDelete, checked,  onHandleChecked }) {
  return (
    <li className="todo-item">
      <span className={checked ?"checkList":"notCheckList"}>{data}</span>
      <button className="check-btn" onClick={()=>onHandleChecked(data)}>
        <MdCheck />
      </button>
      <button className="delete-btn" onClick={() => onHandleDelete(data)}>
        <MdDeleteForever />
      </button>
    </li>
  );
}
