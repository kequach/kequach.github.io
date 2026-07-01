import React, { Component } from 'react';
import { renderMultilineTextWithLinks } from '../utils/textParser';

export default class Testimonials extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1><span>Feedback</span></h1>
            </div>
            <div className="ten columns main-col">
              <p className="feedback-note">Feedback below is summarized and paraphrased for clarity.</p>
              <div className="feedback-list">
                {
                  resumeData.testimonials && resumeData.testimonials.map((item, index)=>{
                    return(
                      <blockquote key={index}>
                        <p>{renderMultilineTextWithLinks(item.description)}</p>
                        <cite>{item.name}</cite>
                      </blockquote>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </section>
        );
  }
}
