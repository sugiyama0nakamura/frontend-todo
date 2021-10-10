import React from "react";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import Header from "../common/Header";
import ListForm from "./List/ListInputFormat";
import ListList from "./List/ListList";
import GetListApi from "../api/GetListApi";
import ListInputFormat from "./List/ListInputFormat";
import json from "../api/SampleList.json";

export default class List extends React.Component{
  state = {
    lists: [],
    listName: ''
  }

  componentDidMount(){
    const lists = json.data.map((list) => 
    <div key={list.listId}>
       <div>{list.listName}</div>
       <div hidden>{list.boardId}</div>
       <div hidden>{list.listId}</div>
    </div>
    );
    this.setState({ lists })
  }

  addList = () => {
    const {listName} = this.state;
    this.setState({
      listName
    })
  }

    render(){
      return(
        <div>
          {/* ヘッダ */}
          <div id="header">
            <Header/>
          </div>
          {/* メイン */}
          <div id="main">
            <h1>List</h1>
            {/* カード作成 */}
            <form onSubmit={(event) => event.preventDefault()} action="http://localhost:8080/api/v1/cards" method="post">
              <h2>カード追加</h2>
              <div className="form-group">
                <input type="text" name="listName"/>
              </div>
              <button type="submit" onClick={this.addList}>追加</button>
            </form>
            
            {/* カード表示 */}
            <ul>
              { this.state.lists}
            </ul>
          </div>
        </div>
      )
    }
}