import SearchIcon from "@material-ui/icons/Search";

/**
 * カードの検索
 * @returns 検索コンポーネント
 */
export default function Search(){
    return(
      <div className="search" >
        <div className="search_bar">
          <SearchIcon/>
          <input className="search_bar_input" placeholder="Search"/>
        </div>
      </div>
    )
}