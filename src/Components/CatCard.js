import React from "react"
import { Card, Icon, Image } from 'semantic-ui-react'

class CatCard extends React.Component {
    render() {
        return (
            <div className="CatCard">
                <Card>
                    <Image src={this.props.imageSrc} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Cat #{this.props.id}</Card.Header>
                        <Card.Meta>
                            <span className='date'>From {this.props.imageSrc}</span>
                        </Card.Meta>
                    </Card.Content>
                    <Card.Content extra>
                        <Icon name='user'/>
                        Cat Image
                    </Card.Content>
                </Card>
            </div>
        )
    }
}

export default CatCard