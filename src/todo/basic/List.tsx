import React, {Component} from "react";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import Header from "../common/Header";
import ListInputFormat from "./List/ListInputFormat";
import GetListApi from "../api/GetListApi";
import json from "../api/SampleList.json";
// import SampleJson from "../api/SampleJson";
import { ListForm } from "./List/ListForm";
import { string } from "yargs";

type Props = {
  lists: ListForm[];
}

export default class List extends Component<{}, Props>{
  constructor(props: Props){
    super(props);
    this.state = {
      lists: []
    };
    this.listAdd = this.listAdd.bind(this);
  }

  listAdd(e: any){
    console.log(e.target.listName.value);
    // リダイレクト防止
    e.preventDefault();
    // フォームから受け取ったデータをオブジェクトに挿入して、stateのlists配列に追加
    // this.state.lists.push(lists: e.target.listName.value);
    // this.state.lists.push( listNmae: e.target.lists );
    // setStateを使ってstateを上書き
    this.setState({ lists: this.state.lists })
    e.target.listName.value = '';
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
            <ListInputFormat listAdd={this.listAdd}/>
            {/* <SampleJson lists={this.state.lists}/> */}
            {/* <SampleJson lists={this.state.lists}/> */}
          </div>
        </div>
      )
    }
}