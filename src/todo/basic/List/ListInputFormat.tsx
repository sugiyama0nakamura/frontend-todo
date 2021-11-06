import { render } from "@testing-library/react";
import React from "react";

const ListInputFormat = (props: any) =>{
  return(
    <form onSubmit={props.listAdd} action="http://localhost:8080/api/v1/cards" method="post">
    <h2>カード追加</h2>
    <div className="form-group">
      <input type="text" name="listName"/>
    </div>
    <button type="submit" onClick={props.addList}>追加</button>
  </form>
  )
}
export default ListInputFormat;