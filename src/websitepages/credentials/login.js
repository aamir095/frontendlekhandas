import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Mutation } from 'react-apollo';
import { ApolloProvider } from '@apollo/react-hooks';
import {LOGIN_MUTATION, client} from '../../library/Graphql';



export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modal: false,username: '',password :'',data: []};

    this.toggle = this.toggle.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  handleChangeName(event) {
    this.setState({username: event.target.value});
  }
  handlePassword(event) {
    this.setState({password: event.target.value});
  }
  
  handleSubmit(event) {
    
    
  }
render() {

  const data = this.state;
  
    return (
        <ApolloProvider client={client}>
         <div>
        <a href="#"  onClick={this.toggle}>Sign Up</a>
        <Modal isOpen={this.state.modal}>
          <Mutation mutation={LOGIN_MUTATION}> 
          {(loginMutation, {loading, error, data })=>(  
          <form>
        
          <ModalHeader>Login in Existing User</ModalHeader>
          <ModalBody>
          <div className="row">
              <div className="form-group col-md-4">
              <label>UserName:</label>
              <input type="text" value={this.state.username} onChange={this.handleChangeName} className="form-control" />
              </div>
                </div>
              <div className="row">
              <div className="form-group col-md-4">
              <label>Password:</label>
                  <input type="password" value={this.state.password} onChange={this.handlePassword} className="form-control" />
                </div>
                </div>
                {loading && <p>LOading...</p>}
                {error && <p> error</p>}
                
                
          </ModalBody>
          <ModalFooter>
            
            <Button className='btn btn-success' onClick={(event)=>{
            event.preventDefault();
            loginMutation({
                variables:{
                username:this.state.username,
                password:this.state.password
              }
              
            })
          }} > Login</Button>
          <Button color="danger" onClick={this.toggle}>Cancel</Button>
        
          </ModalFooter>
          
          </form>
          )}
         
          </Mutation>
        </Modal>

       
        </div>
        </ApolloProvider>
    );
  }
}