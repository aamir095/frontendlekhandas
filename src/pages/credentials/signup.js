
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modal: false,name: '',team :'' ,country: '', individualAccount:false};

    this.toggle = this.toggle.bind(this);
    this.changeAccountType = this.changeAccountType.bind(this);
    this.handleChangeTeam = this.handleChangeTeam.bind(this);
    this.handleChangeCountry = this.handleChangeCountry.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  changeAccountType(event){
    this.setState({
      accountType:event.target.value,
      individualAccount:true
    });

    console.log(this.state.accountType);

  }
  handleChangeTeam(event) {
    this.setState({team: event.target.value});
  }
  handleChangeCountry(event) {
    this.setState({country: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
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
            <label>Sign Up As:</label>
            {/* <input type="text" value={this.state.name} onChange={this.handleChangeName} className="form-control" /> */}
            <select  id="account-type" className="form-control" onChange={this.changeAccountType} >
                <option value="individual">Individual</option>
                <option value="organization">organization</option>
            </select>
              </div>
              </div>

          {this.state.individualAccount}
          <div className="row">
            <div className="form-group col-md-4">
            <label>Username:</label>
            <input type="text" value={this.state.name} onChange={this.handleChangeName} className="form-control" />
              </div>
              </div>
            <div className="row">
             <div className="form-group col-md-4">
            <label>Password:</label>
                <input type="password" value={this.state.team} onChange={this.handleChangeTeam} className="form-control" />
               </div>
              </div>
            <div className="row">
             <div className="form-group col-md-4">
              <label>Full Name:</label>
                <input type="text" value={this.country} onChange={this.handleChangeCountry} className="form-control" />
               </div>
              </div>

              <div className="row">
             <div className="form-group col-md-4">
              <label>email:</label>
                <input type="email" value={this.country} onChange={this.handleChangeCountry} className="form-control" />
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