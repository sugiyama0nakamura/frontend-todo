import React from "react";
import axios from "axios";

/**
 * axiosでListの取得コンポーネント
 */
export default class GetListApi extends React.Component{
  //setStateで格納する
  state = {
    lists: []
  }

  //axiosでlist一覧を取得
  componentDidMount(){
    axios.get(`http://localhost:8080/api/v1/lists`)
    //axiosの処理が正常時処理
    .then(res => {
      //stateにlist情報を格納
      const lists = res.data;
      this.setState({ lists })
    })
    .catch(error => {
      console.log(error);
    })
  }

  //list情報の出力
  render(){
    return(
      <ul>
        { this.state.lists.map(list => <li>{ list }</li>)}
      </ul>
    )
  }
}