
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { withRouter } from 'react-router';

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modal: true, name: '',team :'' ,country: ''};

    this.toggle = this.toggle.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
    this.props.history.push("/");
  }
  handleChangeName(event) {
    this.setState({name: event.target.value});
  }
  handlePassword(event) {
    this.setState({password: event.target.value});
  }
  
  handleSubmit(event) {
    event.preventDefault();
     }


  render() {
    return (

        <div>
        
        <Modal isOpen={this.state.modal}>
        <form onSubmit={this.handleSubmit}>
          <ModalHeader>Login in Existing User</ModalHeader>
          <ModalBody>
          <div className="row">
              </div>
          </ModalBody>
          <ModalFooter>
            
            <Button color="danger" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
          </form>
        </Modal>
        </div>
      
    );
  }
}
export default  withRouter(Message);