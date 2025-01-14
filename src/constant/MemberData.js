


// office images
import president_img from "../assets/officerImg/Foojan.jpg"
import publicRelation_img from "../assets/officerImg/Jose.png"
import EventCordinate_img from "../assets/officerImg/Joshua_Nwabuzor.jpg"
import Treasure from "../assets/officerImg/Shrawak.png"
import VicePresident from "../assets/officerImg/Shaun_Lim.jpg"

import FacultyAd_1 from "../assets/image/advisorImg/Ava_Hedayatipour.jpg"
import FacultyAd_2 from "../assets/image/advisorImg/Debra.jpeg"
import FacultyAd_3 from "../assets/image/advisorImg/Amin.png"

import ClubAd_1 from "../assets/image/advisorImg/matt-circleimage.png"
import ClubAd_2 from "../assets/image/advisorImg/Dr_Mehdrad Aliasgari.jpg"

import IndustAd_1 from "../assets/image/advisorImg/Chetan.png"

import ClubMentor_1 from "../assets/image/advisorImg/Misha.jpeg"
import ClubMentor_2 from "../assets/image/advisorImg/Rahul.jpeg"


const Current_Member = [
    {
        Membername:"Fozhan Babaeiyan",
        position:"President",
        MemberImg :president_img,
        
        Linkedin:"https://www.linkedin.com/in/fozhan-babaeiyan/",
        GitHub:"https://github.com/foojanbabaeeian/foojanbabaeeian",
        Email:"babaeeianwork@gmail.com"
    },

    {
        Membername:"Shaum Lim",
        position:"Treasure",
        MemberImg :VicePresident,
        
        Linkedin:"https://www.linkedin.com/in/shaunmlim/",
        GitHub:"https://github.com/Shaun-L",
        Email:"shaunlim1214@gmail.com"
    },

    {
        Membername:"Jose L.Avila",
        position:"Publics Relations Officer",
        MemberImg :publicRelation_img,
        
        Linkedin:"https://www.linkedin.com/in/jose-l-avila",
        GitHub:"",
        Email:"jose.avila02@student.csulb.edu"
    },

    {
        Membername:"Joshua Nwabuzor",
        position:"Events Coordinator",
        MemberImg :EventCordinate_img,
        
        Linkedin:"https://www.linkedin.com/in/joshua-nwabuzor-aa11b1217/",
        GitHub:"",
        Email:"Jnwab2004@gmail.com"
    },

    {
        Membername:"Shrawak Shakya",
        position:"Treasure",
        MemberImg :Treasure,
        
        Linkedin:"https://www.linkedin.com/in/shrawak-shakya-a69922185/",
        GitHub:"https://github.com/Kharacha",
        Email:"shrawak@gmail.com"
    },
]


const Falculty_Advisor = [
    {
        Advisorname:"Dr.Ava Hedayatipour",
        position:"Falculty Advisor",
        MemberImg :FacultyAd_1,
        
        Linkedin:"https://www.linkedin.com/in/ava-hedayatipour/",
        Email:"ava.hedayatipou@csulb.edu"
    },

    {
        Advisorname:"Debra Satterfield",
        position:"ISSIP AI Collab Lead",
        MemberImg :FacultyAd_2,
        
        Linkedin:"https://www.linkedin.com/in/debra-satterfield-6257078/",
        Email:"Debra.Satterfield@csulb.edu"
    },

    {
        Advisorname:"Dr.Admin Rezaei",
        position:"Falculty Advisor",
        MemberImg :FacultyAd_3,
        
        Linkedin:"https://www.linkedin.com/in/amin-rezaei/",
        Email:"Amin.Rezaei@csulb.edu"
    },

]

const Club_Advsior = [
    {
        Advisorname:"Dr Matt Carbera",
        position:"Advisor",
        MemberImg :ClubAd_1,
        
        Linkedin:"",
        Email:"matt.cabrera@csulb.edu"
    },

    {
        Advisorname:"Dr.Mehdrad Aliasgai",
        position:"Advisor",
        MemberImg :ClubAd_2,
        
        Linkedin:"https://www.linkedin.com/in/mehrdad-aliasgari-a77b3365/",
        Email:"mehrdad.aliasgari@csulb.edu"
    },
]

const Industrial_Advisor = [
    {
        Advisorname:"Chetan Honnenhalli",
        position:"Industry Advisor",
        MemberImg :IndustAd_1,
        
        Linkedin:"",
        Email:"matt.cabrera@csulb.edu"
    },
]

const Club_Mentors = [
    {
        Advisorname:"Misha Ghosh",
        position:"Chief Mentor",
        MemberImg :ClubMentor_1,
        
        Linkedin:"https://www.linkedin.com/in/mishaghosh/",
        Email:"misha.ghosh@idiyas.com"
    },

    {
        Advisorname:"Rahul Vishwakarma",
        position:"Mentor",
        MemberImg :ClubMentor_2,
        
        Linkedin:"https://www.linkedin.com/in/rahulvishwakarma/",
        Email:"rahuldeo.vishwakarma01@student.csulb.edu"
    },
]


const MemberData = {
    Current_Member,
    Falculty_Advisor,
    Club_Advsior,
    Industrial_Advisor,
    Club_Mentors
}

export default MemberData;