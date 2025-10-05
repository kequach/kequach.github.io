import React, { Component } from 'react';
import { renderMultilineTextWithLinks } from '../utils/textParser';

export default class Portfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="three columns header-col">
            <h1><span>Projects</span></h1>
          </div>
          
          <div className="nine columns main-col">
            {resumeData.portfolio && resumeData.portfolio.map((item, index) => {
              return (
                <div key={index} className="row item">
                  <div className="twelve columns">
                    {item.logo ? (
                      <div className="project-with-logo">
                        <img 
                          className="project-logo"
                          src={item.logo} 
                          alt={`${item.name} logo`}
                        />
                        <div className="project-content">
                          <h3>{item.name}</h3>
                          <p className="line-break">
                            {renderMultilineTextWithLinks(item.description)}
                          </p>
                          {item.github && (
                            <div className="project-links">
                              <a 
                                href={item.github} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="project-button"
                              >
                                <i className="fa fa-github"></i> Code
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div>
                        <h3>{item.name}</h3>
                        <p className="line-break">
                          {renderMultilineTextWithLinks(item.description)}
                        </p>
                        {item.github && (
                          <div className="project-links">
                            <a 
                              href={item.github} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="project-button"
                            >
                              <i className="fa fa-github"></i> Code
                            </a>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}