import React from 'react'
import "./ContactPage.css"
import email_icon from "../../assets/image/icon_contact/email.png"
import address_icon from "../../assets/image/icon_contact/address.png"
import linktree_icon from "../../assets/image/icon_contact/linktree.png"

const ContactPage = () => {
  return (
    <section id="contact">
        <div className="contact box__container flex__center">
            <div><h1 className = "section-title">Contact <span>Info</span></h1></div>
          <div className="contact-items">

              <div className="contact-item">
                  <div className="icon">
                      <img src={email_icon} alt=""/>
                  </div>
                  <div className="contact-info">
                      <h1>Email</h1>
                      <a href="mailto:ai.researchcsulb@gmail.com"><h2>ai.researchcsulb@gmail.com</h2></a>
                  </div>
              </div>

            
              <div className="contact-item">
                  <div className="icon">
                      <img src={address_icon} alt=""/>
                  </div>
                  <div className="contact-info">
                      <h1>Address</h1>
                      <h2>1250 N Bellflower Blvd, Long Beach, CA 90840</h2>
                  </div>
              </div>
              <div className="contact-item">
                  <div className="icon">
                      <img src={linktree_icon} alt=""/>
                  </div>
                  <div className="contact-info linktree">
                      <h1>Linktree</h1>
                      <a href="https://linktr.ee/csulbAIResearch" target="_blank"><h2>CLICK HERE!</h2></a>
                  </div>
              </div>
          </div>
        </div>
    </section>
  )
}

export default ContactPage