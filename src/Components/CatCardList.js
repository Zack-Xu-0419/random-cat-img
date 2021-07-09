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

        var randomStart = Math.floor(Math.random()*10+1)


        for (var i = randomStart; i < randomStart+10; i++) {
            axios.get("https://thatcopy.pw/catapi/restId/"+ String(i)).then(function (response) {
                var theCats = self.state.cats
                theCats.push(response.data)
                self.setState({cats: theCats})
            })
        }

    }

    render() {
        console.log(this.state.cats)
        const self = this
        return (
            <div>
                {
                    <Grid columns={5}>
                        {
                            self.state.cats.map(function (item) {
                                console.log(item)
                                return (<GridColumn>
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