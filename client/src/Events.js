import React from 'react';
import {
    ListGroup, ListGroupItem, InputGroup,
    InputGroupAddon, Button, Input} from 'reactstrap';


function Events() {

    return (
        <div>
            <ListGroup>
                <ListGroupItem  tag="a" href="#">Event 1</ListGroupItem>
                <ListGroupItem tag="a" href="#">Event 2</ListGroupItem>
                <ListGroupItem tag="a" href="#">Event 3</ListGroupItem>
                <ListGroupItem tag="a" href="#">Event 4</ListGroupItem>
                <ListGroupItem tag="a" href="#">Event 5</ListGroupItem>
            </ListGroup>
            <br></br>
            <InputGroup>
        <InputGroupAddon addonType="prepend"><Button>Search Events</Button></InputGroupAddon>
        <Input />
      </InputGroup>
        </div>
    )
}

export default Events;