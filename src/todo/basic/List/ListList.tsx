import React from "react";
import GetListApi from "../../api/GetListApi";
import SampleJson from "../../api/SampleJson";

export default function ListList (){
  return(
    <div>
      <h2>Todo一覧</h2>
      <ul>
        <GetListApi/>
        <SampleJson/>
      </ul>
    </div>
  )
}