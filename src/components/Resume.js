import React, { Component } from 'react';
import { renderMultilineTextWithLinks } from '../utils/textParser';

export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    
    return (
      <section id="resume">
        {/* Work Section */}
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>
          
          <div className="nine columns main-col">
            {resumeData.work && resumeData.work.map((item, index) => {
              return (
                <div key={index} className="row item">
                  <div className="twelve columns">
                    <h3>{item.CompanyName} <span>&bull;</span> {item.Location}</h3>
                    <p className="info">
                      {item.specialization}
                      <span>&bull;</span> 
                      <em className="date">
                        {item.MonthOfJoining} {item.YearOfJoining} - {item.MonthOfLeaving} {item.YearOfLeaving}
                      </em>
                    </p>
                    <div className="line-break">
                      {renderMultilineTextWithLinks(item.Achievements)}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Education Section */}
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          
          <div className="nine columns main-col">
            {resumeData.education && resumeData.education.map((item, index) => {
              return (
                <div key={index} className="row item">
                  <div className="twelve columns">
                    <h3>{item.UniversityName}</h3>
                    <p className="info">
                      {item.specialization}
                      <span>&bull;</span> 
                      <em className="date">
                        {item.MonthOfJoining} {item.YearOfJoining} - {item.MonthOfPassing} {item.YearOfPassing}
                      </em>
                    </p>
                    <div className="line-break">
                      {renderMultilineTextWithLinks(item.Achievements)}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Skills Section */}
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          
          <div className="nine columns main-col">
            <div className="skills-list">
              <ul className="skills">
                {resumeData.skills && resumeData.skills.map((item, index) => {
                  return (
                    <li key={index}>
                      <span>
                        {renderMultilineTextWithLinks(item.skillname)}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* Interests Section */}
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Interests</span></h1>
          </div>
          
          <div className="nine columns main-col">
            <div className="skills-list">
              <ul className="skills">
                {resumeData.interests && resumeData.interests.map((item, index) => {
                  return (
                    <li key={index}>
                      <span>
                        {renderMultilineTextWithLinks(item.interest)}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}