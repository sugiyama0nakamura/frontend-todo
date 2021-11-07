import { render } from "@testing-library/react";
import React,{ useState } from 'react'
import { ListForm } from "./ListForm";

type Props = {
  setLists: React.Dispatch<React.SetStateAction<ListForm[]>>
  lists: ListForm[]
}

const ListInputFormat: React.FC<Props> = ({ setLists,lists }) => {
  const [inputTitle, setInputTitle] = useState<string>('')
  const [count, setCount] = useState<number>(lists.length + 1)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputTitle(e.target.value)
  }

  const handleSubmit = () => {
      setCount(count + 1)

      const newList:ListForm = {
          listid:count,
          listName: inputTitle,
          done:false
      }

      setLists([
          newList, 
          ...lists 
      ])

      setInputTitle('')
  }


  return (
      <div className="input-form">
              <div className="input-cotainer">
                  <input className="list-input" type="text" value={inputTitle} onChange={ handleInputChange } />
                  <button className="input-btn" onClick={ handleSubmit }  >
                      追加
                  </button>
              </div>
      </div>
  )
}

export default ListInputFormat










// const ListInputFormat = (props: any) =>{
//   return(
//     <form onSubmit={props.listAdd} action="http://localhost:8080/api/v1/cards" method="post">
//     <h2>カード追加</h2>
//     <div className="form-group">
//       <input type="text" name="listName"/>
//     </div>
//     <button type="submit" onClick={props.addList}>追加</button>
//   </form>
//   )
// }
// export default ListInputFormat;