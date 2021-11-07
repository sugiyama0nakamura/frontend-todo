import React from 'react'
import ListItem from './ListItem'
import { ListForm } from './ListForm'

type Props = {
  lists: ListForm[]
  setLists: React.Dispatch<React.SetStateAction<ListForm[]>>
}


const ListList: React.FC<Props> = ({ lists, setLists }) =>  {
  const handleDone =  (list: ListForm) => {
      setLists(prev => prev.map((t) => {
          if(t.listid === list.listid){
              return { ...list, done: !list.done }
          } else {
              return t
          }
      }))
  }

  const handleDelete = (list: ListForm) => {
      setLists(prev => prev.filter((t) => {
          return t.listid !== list.listid
      }))
  }

  return (
      <div className="list-container">
          {
              lists.length <= 0 ? 
              'タスクの登録がありません'
              :
              <ul>
                  {
                      lists.map(list => (
                          <ListItem 
                            key={list.listid}
                            list={list}
                            handleDone={handleDone}
                            handleDelete={handleDelete}
                          />
                      )) 
                  }
              </ul>
          } 
      </div>
  )
}

export default ListList
