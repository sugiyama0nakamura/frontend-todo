import { render } from "@testing-library/react";
import React from "react";
import SampleJson from "../../api/SampleJson";

export default class ListInputFormat extends React.Component{
  state = {
    listName: ''
  }

  addList = () => {
    const {listName} = this.state;
    this.setState({
      listName
    })
  }

  render(){
    return(
      <form onSubmit={(event) => event.preventDefault()} action="http://localhost:8080/api/v1/cards" method="post">
        <h2>カード追加</h2>
        <div className="form-group">
          <input type="text" name="list-name"/>
        </div>
        <button type="submit" onClick={this.addList}>追加</button>
      </form>
    );
  }
}