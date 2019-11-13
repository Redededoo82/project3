import React from "react";
import ReactDOM from "react-dom";


import { Jumbotron, Container } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">About</h1>
          <p className="lead">Leave No Trace is a web application that addresses logistical and attendence issues when trying to plan a party after a music event has ended.  It provides a web-based community that people can join to interact and plan with other people, to make the afterparty happen.</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

const Example = (props) => {
  return (
    <div>
      <Card inverse>
        <cardimg width="100%" src="/assets/318x270.svg" alt="Card image cap" /> 
        <CardImgOverlay>
          <CardTitle>Card Title</CardTitle>
          <CardText>...</CardText>
        </CardImgOverlay>
      </Card>
    </div>
     <div>
     <Card inverse>
       <cardimg width="100%" src="/assets/318x270.svg" alt="Card image cap" /> 
       <CardImgOverlay>
         <CardTitle>Card Title</CardTitle>
         <CardText>...</CardText>
       </CardImgOverlay>
     </Card>
   </div>
    <div>
    <Card inverse>
      <cardimg width="100%" src="/assets/318x270.svg" alt="Card image cap" /> 
      <CardImgOverlay>
        <CardTitle>Card Title</CardTitle>
        <CardText>...</CardText>
      </CardImgOverlay>
    </Card>
  </div>
  );
};

export default Example;