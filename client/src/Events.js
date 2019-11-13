import React, { Component } from 'react';
import {
    ListGroup, ListGroupItem, InputGroup,
    InputGroupAddon, Button, Input,
} from 'reactstrap';
import API from "./utils/API"



class Events extends Component {
    state = {
        events: [],
        comments: [],
        value: ""
    }

    comments = [{
        name: "Aaron",
        comment: "Sup dude?"

    }, {
        name: "A-A-Ron",
        comment: "Sup wit you dude?"
    }, {
        name: "Ron",
        comment: "We meeting up after the show brah?"
    }]



    componentDidMount() {
        this.getEvents();
        this.getComments();
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.postComment(this.state.value);
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

    postComment = function (comment) {
        API.postComment(comment)
    }

    getComments = () => {
        API.getComments()
            .then(res => {
                this.setState({
                    comments: res.data
                })
                console.log(this.state.comments)
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <ListGroup>
                    {this.state.events.map(eve => (
                        <ListGroupItem key={eve._id}>
                            <strong style={{ fontSize: "24px" }}>{eve.title}</strong> <br></br>
                            <hr></hr>
                            Description: {eve.description} <br></br>
                            Location: {eve.location} <br></br>
                            Date: {eve.date} <br></br>
                        </ListGroupItem>
                    ))}

                </ListGroup>
                <br></br>
                <InputGroup>
                    <InputGroupAddon addonType="prepend"><Button>Search Events</Button></InputGroupAddon>
                    <Input />
                </InputGroup>
                <div>
                    <h3>Comments</h3>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>

                    {this.comments.map(item => <li>{item.comment} - {item.name}</li>)}
                    {this.state.comments.map(item => <li>{item.comment} - {item.name}</li>)}


                </div>
            </div>
        )
    }
}

export default Events;