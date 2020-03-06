
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './signup.scss';
import { Mutation } from 'react-apollo';
import { ApolloProvider } from '@apollo/react-hooks';
import {POST_MUTATION, client} from '../../library/Graphql';
import Message from './signupmsg';
import Form from 'react-bootstrap/Form';


export default  class SignUp extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { modal: false, verboseName: '', email:'',phoneNo:'', address:'', description:'', submit:false };
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
      modal: !this.state.modal,
      
    });
  }

  handleChangeName(event){
    this.setState({
      verboseName: event.target.value
    });

  }
  handleChangeEmail(event){
    this.setState({email: event.target.value});
  }
  handleChangeTelephone(event) {
    this.setState({phoneNo: event.target.value});
  }
  handleChangeAddress(event) {
    this.setState({address: event.target.value});
  }
  handleChangeDescription(event){
    this.setState({description:event.target.value});
  }
  handleSubmit(event) {
    this.setState({submit: !this.state.submit})
    // var e=document.getElementById('form');
    // e.remove();
    console.log(this.state);
  }

  showMessage=()=> {
      return(
        <div className="form-element">
        <p className="error">This is Website</p>
      </div>
      )

  }

render() {
        const{verboseName,email,phoneNo,address, description}=this.state;
        return (
  <ApolloProvider client={client}>
        <div >
        <a href="#"  onClick={this.toggle}>Sign Up</a>
    <Modal isOpen={this.state.modal}>

      {/* {this.state.submit? <Message/>:null} */}
        <form id="form">
            <ModalHeader>New User Sign Up</ModalHeader>
            <ModalBody>
            <Form.Text className="text-danger">
            <this.showMessage/>
           </Form.Text>
          <div className="row">
            <div className="form-group col-md-4">
            <label>Full Name:</label>
            <input type="text" value={this.state.verboseName} onChange= {this.handleChangeName} className="form-control"  required />
            </div>
            </div>

            <div className="row">
            <div className="form-group col-md-4">
            <label>Email:</label>
            <input type="email"  value={this.state.email} onChange={this.handleChangeEmail} className="form-control" required/>
            </div>
            </div> 

            <div className="row">
            <div className="form-group col-md-4">
            <label>Telephone:</label>
            <input type="text" value={this.state.phoneNo} onChange={this.handleChangeTelephone} className="form-control" required/>
            </div>
            </div>

            <div className="row">
            <div className="form-group col-md-4">
            <label>Address:</label>
            <input type="text"  value={this.state.address} onChange={this.handleChangeAddress} className="form-control" required />
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
          <Mutation mutation={POST_MUTATION}  variables={{ address, description, email, phoneNo, verboseName }}>
            {postMutation => <button onClick={postMutation} className='btn btn-success'>SignUp</button>}
          </Mutation>
            <Button color="danger" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
      </form>
   </Modal>
            </div>

        </ApolloProvider>
    );
  }
}
