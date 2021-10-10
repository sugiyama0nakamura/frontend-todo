import React from "react";
import axios from "axios";
import type {ListForm} from "../basic/List/ListForm";
import json from "./SampleList.json"

/**
 * axiosでListの取得コンポーネント
 */
export default class SampleJson extends React.Component{
  //setStateで格納する
  state = {
    lists: [],
  }

  componentDidMount(){
    console.log(json)
    const lists = json.data.map((list) => 
    <div key={list.listId}>
      <div>{list.listName}</div>
      <div hidden>{list.boardId}</div>
      <div hidden>{list.listId}</div>
    </div>
    );
    this.setState({ lists })
  }

  //list情報の出力
  render(){
    return(
      <ul>
        { this.state.lists}
      </ul>
    )
  }

  
}