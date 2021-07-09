import React from "react"
import CatCardList from "./Components/CatCardList"

class App extends React.Component{
  render(){
    return(
      <div className="app">
        <CatCardList/>
      </div>
    )
  }
}

export default App