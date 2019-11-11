import React, {Component} from 'react';
import {
    ListGroup, ListGroupItem, InputGroup,
    InputGroupAddon, Button, Input
} from 'reactstrap';
import API from "./utils/API"


class Events extends Component {
    state = {
        events: []
    }

    componentDidMount() {
        this.getEvents();
    }

    getEvents = () => {
        API.getEvents()
            .then(res => {
                this.setState({
                    events: res.data
                })
                console.log(this.state.events)
            })
            .catch(err => console.log(err));
    }


    render() {
        return (
            <div>
                <ListGroup>
                    {this.state.events.map(eve => (
                        <ListGroupItem key={eve._id}>
                        <strong style={{fontSize: "24px"}}>{eve.title}</strong> <br></br>
                        <hr></hr>
                        Description: {eve.description} <br></br>
                        Location: {eve.location} <br></br>
                        Date: {eve.date} <br></br>
                        </ListGroupItem>
                    ))}
                    {/* <ListGroupItem tag="a" href="#">Event 1</ListGroupItem>
                    <ListGroupItem tag="a" href="#">Event 2</ListGroupItem>
                    <ListGroupItem tag="a" href="#">Event 3</ListGroupItem>
                    <ListGroupItem tag="a" href="#">Event 4</ListGroupItem>
                    <ListGroupItem tag="a" href="#">Event 5</ListGroupItem> */}
                </ListGroup>
                <br></br>
                <InputGroup>
                    <InputGroupAddon addonType="prepend"><Button>Search Events</Button></InputGroupAddon>
                    <Input />
                </InputGroup>
            </div>
        )
    }
}

export default Events;