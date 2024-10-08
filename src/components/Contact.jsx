import { useState } from "react";
import "../assets/style/styles.css";
import Slider from "./Slider";
import "./formResponsive.css";
import emailjs from 'emailjs-com'

const Contact = () => {
  const [formData, setFormData] = useState({
    name:"",
    email: "",
    message: "",
    file: null,
  });

  const fileInputHandler = (e) => {
    setFile({
      ...formData,
      file: e.target.files[0],
    });
  };
  const InputHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const formHandler =(e)=>{
  e.preventDefault();

  fetch('https://formspree.io/f/myzgqrnn',{
    method:'POST',
    headers:{
      'content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  }).then((response)=>{
    if(response.ok){
      alert('email sent successfully');
    }else{
      alert('You can not send an email to us at this time, please try later!')
    }
  }).catch((err)=>{
    console.error('Eroor: ', err)
    alert('An error occured, try later.')
  });

  setFormData({
    name:"",
    email: "",
    message: "",
    file: null,
  })

  // emailjs.send( 'service_oozh2tq', 'template_s2iud1b', formData, 's9qqSX7CO_YQR83-I').then(
  //   (response)=>{
  //     console.log('SUCCESS!', response.status, response.text);
  //     alert('Email sent successfully')

  //     setFormData({
  //       name:"",
  //       email: "",
  //       message: "",
  //       file: null,
  //     })
  //   },
  //   (err)=>{
  //     console.log('Failed...', err);
  //     alert(' You can not send message to our email at this time, kindly try again later.')
  //   }
  // )

  
}

  const Testomonials = [
    {
      clientLogo: "Hallmark Global Nigeria Limited",
      projectBrief: "Business Diagnostic Review",
    },
    {
      clientLogo: "Connexus Corporation, USA",
      projectBrief:
        "Design of  Agribusiness Investment Brochure for the Government of Niger State, Nigeria, 2022",
    },
    {
      clientLogo: "CNFA, Abuja",
      projectBrief:
        "OPINA on a rice farming and processing business in Cross River State under USAID Agribusiness Investmentr Activity, 2022 ",
    },
    {
      clientLogo: " Greate Project and Logistic Limited ",
      projectBrief:
        " Design of a Feasibilit Studies Report for the Establish of a Logistics Business Support outfit in Lagos",
    },
    {
      clientLogo: "Orient Refinery and Petrochemicals PLC, Awka",
      projectBrief: "Support for private placement mob",
    },
    {
      clientLogo: " World Economic Forum",
      projectBrief:
        "Total Transportation and Logistics Study of the Lagos Port Complex,2018",
    },
    {
      clientLogo: "FDC of France & Alpha Consults of Milan, Italy.",
      projectBrief: "EGNOS Roll-Out in Africa, 2018.",
    },
    {
      clientLogo: "African Development Bank",
      projectBrief: "Agriculture Fast Track Fund, 2016 – 2019.",
    },
    {
      clientLogo: "Adam Smith International, UK / GEMS 3 Programme",
      projectBrief: "Tax Administration Studies in Katsina state, 2014.",
    },
    {
      clientLogo: "Adam Smith International, UK / GEMS 3 Programme.",
      projectBrief: "Land Administration Studies in Katsina state, 2014.",
    },
    {
      clientLogo: "The Nigerian Economic Summit Group Ltd / Gte.",
      projectBrief:
        "Socio-Economic Impact Survey of the Policies of the South-West Nigeria states & FCT, Abuja, 2013.",
    },
    {
      clientLogo: "World Bank Group.",
      projectBrief:
        "Investment Climate Studies in Lagos, Kano and Enugu states, 2010. Direct mandate.",
    },
    {
      clientLogo: "Akwa Savings and Loans Limited.",
      projectBrief: "Capacity Building & Board Retreat, 2008 - 2014.",
    },
    {
      clientLogo: "Human Dynamics of Austria.",
      projectBrief:
        "Bid Drafting Assistance on Water & Sanitation Sector Reforms in Nigeria, 2012",
    },
    {
      clientLogo: "The Royalty Hotels Limited, Eket",
      projectBrief:
        "Business Diagnostic Review and Design of a Complete Feasibility Studies Report, 2006.",
    },
    {
      clientLogo: "The Initiates Plc.",
      projectBrief: "Business Strategy Review, 2003.",
    },
    {
      clientLogo: "EU Contractors.",
      projectBrief:
        "Bid Support Services for various overseas contractors of EU eg pre-bid conference, bid opening, etc, 2015 – date.",
    },
    {
      clientLogo: "EU Contractors..",
      projectBrief:
        "Provision of Qualified Experts for various EU Assignments in West Africa, 2015 - date.",
    },
  ];
  return (
    <>
      <div id="contact" className="section contactPage mt-52">
      <h2 className="line-title"></h2>
        <div className="whiteBackground bg-white h-96">
          <Slider Testomonials={Testomonials} />
        </div>
        <div className="formContainer bg-white w-80">
          <form action="" onSubmit={formHandler} className="form">
            <p className="email  text-black">engage@sharon-consultative.com</p>
            <p className="">
              <a href="callto:+2349036800896" className="text-black">
                {" "}
                +234-815-899-4058{" "}
              </a>
            </p>
            <hr />
            <br />
            <h1 className="formHeader text-black"> Send Us an Email </h1>
            <input type="text" name="name" 
              value={formData.name} placeholder="Name" 
              onChange={InputHandler}  required />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              value={formData.email}
              onChange={InputHandler}
            />
            <textarea
              name="message"
              rows="8"
              placeholder="Your Message"
              value={formData.message}
              onChange={InputHandler}
            ></textarea>
            <input type="file" onChange={fileInputHandler} />
            <button type="submit" className="contactForm-btn">Submit</button>
            <br />
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;