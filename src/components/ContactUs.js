import React, { Component } from 'react';
import Email from './Email';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
              <p className="lead">
              Feel free to contact me for any work or suggestions below
              </p>
          </div>
                <Email/>
        </section>
        );
  }
}