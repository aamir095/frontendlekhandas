
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './signup.scss';


export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modal: false, name: '', email:'',telephone:'', address:'', description:'' };
    this.toggle = this.toggle.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeTelephone = this.handleChangeTelephone.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleChangeName(event){
    this.setState({
      name: event.target.value
    });

  }
  handleChangeEmail(event){
    
    this.setState({
      email: event.target.value
    });
    

  }
  handleChangeTelephone(event) {
    this.setState({telephone: event.target.value});
  }
  handleChangeAddress(event) {
    this.setState({address: event.target.value});
  }
  handleChangeDescription(event){
    this.setState({description:event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const data=this.state;
    console.log(data);
     }


  render() {
    return (

        <div>
        <a href="#"  onClick={this.toggle}>Sign Up</a>
        <Modal isOpen={this.state.modal}>
        <form onSubmit={this.handleSubmit}>
          <ModalHeader>New User Sign Up</ModalHeader>
          <ModalBody>
        
           <div className="row">
            <div className="form-group col-md-4">
            <label>Full Name:</label>
            <input type="text" value={this.name} onChange= {this.handleChangeName} className="form-control" />
              </div>
              </div>

              <div className="row">
             <div className="form-group col-md-4">
              <label>Email:</label>
                <input type="email" value={this.state.email} onChange={this.handleChangeEmail} className="form-control" />
               </div>
              </div> 

            <div className="row">
             <div className="form-group col-md-4">
            <label>Telephone:</label>
                <input type="text" value={this.state.team} onChange={this.handleChangeTelephone} className="form-control" />
               </div>
              </div>

            <div className="row">
             <div className="form-group col-md-4">
              <label>Address:</label>
                <input type="text" value={this.state.address} onChange={this.handleChangeAddress} className="form-control" />
               </div>
              </div>

              <div className="row">
             <div className="form-group col-md-9">
              <label>Description:</label>
                <textarea type="text" value={this.state.description} onChange={this.handleChangeDescription} className="form-control" rows="4" cols="100" />
               </div>
              </div>

              
         </ModalBody>
          <ModalFooter>
            <input type="submit" value="Submit" color="primary" className="btn btn-primary" />
            <Button color="danger" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
          </form>
        </Modal>
        </div>
      
    );
  }
}