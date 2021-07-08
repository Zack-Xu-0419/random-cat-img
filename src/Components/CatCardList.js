import axios from "axios"
import React from "react"
import { Grid, GridColumn } from "semantic-ui-react"
import CatCard from "./CatCard"

class CatCardList extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            cats: []
        }
    }

    componentDidMount() {
        const self = this

        var theCats = []

        for (var i = 0; i < 10; i++) {
            axios.get("https://thatcopy.pw/catapi/rest/").then(function (response) {
                theCats.push(response.data)
                console.log(response.data)
                self.setState({cats: theCats})
            })
        }

    }

    render() {
        const self = this
        return (
            <div>
                {/* {
                    self.state.cats.map(function(item){
                        return <CatCard imageSrc={item.url} id={item.id}/>
                    }) */}



                    <Grid columns={5}>
                        {
                            self.state.cats.map(function (item) {
                                return (<GridColumn key={item.id}>
                                     <CatCard imageSrc={item.url} id={item.id}/>
                                </GridColumn>)
                            })
                        }
                    </Grid>
                }
            </div>
        )
    }
}

export default CatCardList