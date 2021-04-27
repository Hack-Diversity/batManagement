import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';

class Welcome extends Component{

  componentDidMount(){
    this.setState({
      companyName: []
    });
  }


  render(){
    const {companyName} = this.state || {};
    const welcomeMessage = `Welcome ${companyName}`
    return(
      <Container className="create-account-container">
      <section className="create-account-form-top">
        <h3 className="title">{welcomeMessage}</h3>
      </section>
      </Container>
    )
  }
}

export default Welcome;
