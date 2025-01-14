import React from 'react'

import './MemberContainer.css'
import { VscGithubAlt } from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";
import { CiMail } from "react-icons/ci";


const MemberContainer = ({memberName, memberPosition, memberImg,githubLink,emailLink,linkedinLink, specialStyle }) => (
    <div class="member-slide-content">
            <div className="card swiper-slide">
                <div className="image-content">

                    <span className = "overlay"></span>
                    <div className="card-image">
                        <img src={memberImg} alt="" class = "card-img"/>
                    </div>
                </div>
                
                <div className="card-content">
                    <h2 className="name">{memberName}</h2>
                    <p className="description">{memberPosition}</p>
                    <div className="link-container">
                        {githubLink && (
                            <a href={githubLink} target="_blank" rel="noopener noreferrer">
                                <VscGithubAlt fontSize={27} style={{ color: 'black' }}/>
                            </a>
                        )}

                        {linkedinLink && (
                            <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                                <SlSocialLinkedin fontSize={27} style={{ color: 'black' }}/>
                            </a>
                        )}

                        {emailLink && (
                            <a href={`mailto:${emailLink}`} target="_blank" rel="noopener noreferrer">
                                <CiMail fontSize={30} style={{ color: 'black' }} />
                            </a>
                        )}
                    
                    
                    </div>
                </div>

            </div>
    </div>
  );


export default MemberContainer;