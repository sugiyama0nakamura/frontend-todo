import React from "react";
import axios from "axios";
import {ListForm} from "../basic/List/ListForm";
import json from "./SampleList.json"


// const List = (props: any) => (
//   <div>
//     {props.lists.map(lists => (
//       <li key={lists.listId}>{lists.listName}</li>
//     ))};
//   </div>
// );

// export default List;
// interface ListsProps {
//   lists: { listId: number, listName: String}[];
// }
// /**
//  * axiosでListの取得コンポーネント
//  */
//  export default class SampleJson extends React.Component<{}, ListsProps> {
//   constructor(props: ListsProps){
//     super(props);
//     this.state = {
//       lists: []
//     };
//   }
//   render(){
//     return(
//       <div>
//         {this.state.lists.map(lists => (
//           <li key={lists.listId}>{lists.listName}</li>
//         ))}
//     </div>
//     )
//   }

//   componentDidMount(){
//     console.log(json)
//     const lists = json.data.map((list) => 
//     <div key={list.listId}>
//       <div>{list.listName}</div>
//       <div hidden>{list.boardId}</div>
//       <div hidden>{list.listId}</div>
//     </div>
//     );
//     this.setState({ lists: this.state.lists })
//   }
// }