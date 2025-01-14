import React from 'react'
import "./OfficerPage.css"
import { MemberContainer } from '../../component'
import {data} from '../../constant'


// OFFICER + ADVISOR + MENTOR
const OfficerPage = () => (
  
    <section id="members">
        <div class="members box__container flex__center">
            <div class="member-header">
                <h1 class="section-title">OFFICERS</h1>
                
            </div>

            <div className='member-slide-container'>

              
            {data.map((group) => 
                group.Current_Member.map((currentInfo) => (
                    <MemberContainer
                        key={currentInfo.Email} // Add a unique key for each component
                        memberImg={currentInfo.MemberImg}
                        memberName={currentInfo.Membername} // Adjusted to match the correct key
                        memberPosition={currentInfo.position}
                        githubLink={currentInfo.GitHub}
                        emailLink={currentInfo.Email}
                        linkedinLink={currentInfo.Linkedin}
                        specialStyle={currentInfo.specialStyle}
                    />
                ))
              )
            }

            </div>
        </div>


        <div class="members box__container flex__center" id= "advisor">
            <div class="member-header">
                <h1 class="section-title">FACULTY ADVISOR</h1>
                
            </div>

            <div className='member-slide-container'>

              
            {data.map((group) => 
                group.Falculty_Advisor.map((currentInfo) => (
                    <MemberContainer
                        key={currentInfo.Email} // Add a unique key for each component
                        memberImg={currentInfo.MemberImg}
                        memberName={currentInfo.Advisorname} // Adjusted to match the correct key
                        memberPosition={currentInfo.position}
                        githubLink={currentInfo.GitHub}
                        emailLink={currentInfo.Email}
                        linkedinLink={currentInfo.Linkedin}
                        specialStyle={currentInfo.specialStyle}
                    />
                ))
              )
            }

            </div>
        </div>


        <div class="members box__container flex__center">
            <div class="member-header">
                <h1 class="section-title">CLUB ADVISORS</h1>
                
            </div>

            <div className='member-slide-container'>

              
            {data.map((group) => 
                group.Club_Advsior.map((currentInfo) => (
                    <MemberContainer
                        key={currentInfo.Email} // Add a unique key for each component
                        memberImg={currentInfo.MemberImg}
                        memberName={currentInfo.Advisorname} // Adjusted to match the correct key
                        memberPosition={currentInfo.position}
                        githubLink={currentInfo.GitHub}
                        emailLink={currentInfo.Email}
                        linkedinLink={currentInfo.Linkedin}
                        specialStyle={currentInfo.specialStyle}
                    />
                ))
              )
            }

            </div>
        </div>
        <div class="members box__container flex__center">
            <div class="member-header">
                <h1 class="section-title">INDUSTRIAL ADVISORS</h1>
                
            </div>

            <div className='member-slide-container'>

              
            {data.map((group) => 
                group.Industrial_Advisor.map((currentInfo) => (
                    <MemberContainer
                        key={currentInfo.Email} // Add a unique key for each component
                        memberImg={currentInfo.MemberImg}
                        memberName={currentInfo.Advisorname} // Adjusted to match the correct key
                        memberPosition={currentInfo.position}
                        githubLink={currentInfo.GitHub}
                        emailLink={currentInfo.Email}
                        linkedinLink={currentInfo.Linkedin}
                        specialStyle={currentInfo.specialStyle}
                    />
                ))
              )
            }

            </div>
        </div>
        <div class="members box__container flex__center">
            <div class="member-header">
                <h1 class="section-title">CLUB MENTORS</h1>
                
            </div>

            <div className='member-slide-container'>

              
            {data.map((group) => 
                group.Club_Mentors.map((currentInfo) => (
                    <MemberContainer
                        key={currentInfo.Email} // Add a unique key for each component
                        memberImg={currentInfo.MemberImg}
                        memberName={currentInfo.Advisorname} // Adjusted to match the correct key
                        memberPosition={currentInfo.position}
                        githubLink={currentInfo.GitHub}
                        emailLink={currentInfo.Email}
                        linkedinLink={currentInfo.Linkedin}
                        specialStyle={currentInfo.specialStyle}
                    />
                ))
              )
            }

            </div>
        </div>

    </section>
  
)

export default OfficerPage