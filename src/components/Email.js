import React from 'react'
import Swal from 'sweetalert2'
import {Flex} from './Flex'

class Email extends React.Component{
    constructor(props) {
        super(props);
        this.state = { feedback: '',
                      name: '',
                      email: '' 
                     };
      }
      // saves the user's name entered to state
      nameChange = (event) => {
        this.setState({name: event.target.value})
      }
      
      // saves the user's email entered to state
      emailChange = (event) => {
        this.setState({email: event.target.value})
      }

      // saves the user's subject entered to state
      subjectChange = (event) => {
        this.setState({subject: event.target.value})
      }

      // saves the user's message entered to state
      messageChange = (event) => {
        this.setState({feedback: event.target.value})
      }

      //onSubmit of email form
      handleSubmit = (event) => {
        event.preventDefault();

        //This templateId is created in EmailJS.com
        const templateId = 'template_FDKMdGRu';
    
        //This is a custom method from EmailJS that takes the information 
        //from the form and sends the email with the information gathered 
        //and formats the email based on the templateID provided.
        this.sendFeedback(templateId, {
                                        message: this.state.feedback, 
                                        name: this.state.name, 
                                        email: this.state.email,
                                        subject: this.state.subject
                                       }
                         )

      }
    
      //Custom EmailJS method
      sendFeedback = (templateId, variables) => {
        window.emailjs.send(
          'gmail', templateId,
          variables,
          process.env.REACT_APP_EMAILJS
          ).then(res => {
            // Email successfully sent alert
            Swal.fire({
              title: 'Email Successfully Sent',
              icon: 'success'
            })
          })
          // Email Failed to send Error alert
          .catch(err => {
            Swal.fire({
              title: 'Email Failed to Send',
              icon: 'error'
            })
            console.error('Email Error:', err)
          })
      }
    
      render() {
        return (
          
          //Form layout that requires a Name, Email, and message
          <form className="test-mailing" onSubmit={this.handleSubmit}>

            <br/>
            <Flex container flexDirection={"column"} justifyContent={"center"}>
              <Flex container flexDirection={"row"} justifyContent={"center"}>
                  <label htmlFor="name">Name</label>
                  <input className="form-control email-inputs" placeholder="John Smith" name="user_name" type="text" 
                    id="name" onChange={this.nameChange} required/>
              </Flex>

              <Flex container flexDirection={"row"} justifyContent={"center"}>
                  <label htmlFor="email">Email</label>
                  <input className="form-control email-inputs" placeholder="John.Smith@gmail.com" name="user_email" type="mail"
                    id="email" onChange={this.emailChange} required/>
              </Flex>
              
              <Flex container flexDirection={"row"} justifyContent={"center"}>
                  <label htmlFor="subject">Subject</label>
                  <input className="form-control email-inputs" placeholder="Put your subject here" name="user_subject" type="text"
                    id="subject" onChange={this.subjectChange} required/>
              </Flex>

              <Flex container flexDirection={"row"} justifyContent={"center"}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  onChange={this.messageChange}
                  placeholder="Put your message here"
                  required
                  className="email-text-area form-control"
                  rows="15"
                  cols="20"
                />
              </Flex>

              <Flex container flexDirection={"row"} justifyContent={"center"}>
              <label></label>
              <input type="submit" value="Submit" className="btn btn-outline-light hover" />
              </Flex>

            </Flex>

          </form>
        )
      }
}

export default Email