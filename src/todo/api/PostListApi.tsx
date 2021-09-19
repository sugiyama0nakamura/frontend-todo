// import React from "react";
import axios from "axios";
import { setTokenSourceMapRange } from "typescript";
import { setMaxListeners } from "process";
import { listSubheaderClasses } from "@material-ui/core";

// /**
//  * axiosでList作成のコンポーネント
//  */

// const handleChange = (e) => {
//   setName(e.target.value)
// }

// /**
//  *  POSTでlistの作成
//  *  param: {
//  *   boardId: ボード番号
//  *   listName: リスト名
//  *   deadlineStartDate: 開始日
//  *   deadlineEndDate: 終了日
//  * }
//  */
// const createNewList = () => {
//   axios.post('http://localhost:8080/api/v1/lists'
//   , {
//     boardId: boardId,
//     listName: listName,
//     deadlineStartDate: deadlineStartDate,
//     deadlineEndDate: deadlineEndDate
//   })
//   .then(res => {
//     setMaxListeners([...lists, res.data])
//   })
//   .catch(error => {
//     console.log(error);
//   })
// }
