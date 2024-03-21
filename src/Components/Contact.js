import React from "react";
import "./Contact.css";
import { useState } from "react";

function Contact() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState();
    // const [email, setEmail] = useState();
    const [date, setDate] = useState();
    const [message, setMessage] = useState();




    const sendmessage=async(e)=>{
        e.preventDefault();
        const data = {
            name: name, 
            number: number,  
            // email: email,  
            date: date,  
            message: message
          };
        
          try{
            const response=fetch('https://dummy.restapiexample.com/api/v1/create', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
                
            });
          }catch(error){
            console.error('Error:', error);
          }
          }

 console.log(name,'name')









 
 
    const handlDate = (e) => {
        setDate(e.target.value)
    }
    const handleChange = (e) => {
        setName(e.target.value)
        // console.log(e.target.value,'value')
    }

    const handleNumber = (e) => {
        setNumber(e.target.value)
    };
    const handlenumber = (e) => {
        setNumber(e.target.value)
    };


    const clear = (e) => {
        // e.preventDefault();
        setName('');
        setNumber('');
        setDate('');


    }

    const handlemsg=(e) => {setMessage(e.target.value)}

    console.log(number, 'number')




    // console.log(name, 'name')
    return (
        <>
            {/* contact compopnent */}
            <div className="contact">
                <div id="rr">
                    <h1>Contact</h1>
                    <div class="c1 " style={{ fontSize: "15px", fontFamily: "serif", marginTop: "5px" }}>
                        We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us
                    </div>
                    <h2 className="c1 l"> Catering Service, 42nd Living St, 43043 New York, NY/h
                    </h2>
                    <p className="c1 pl">  You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:</p>
                    {/* fomr creation */}
                    <div className="Form c1">
                        <form id="form">
                            <input type="text" value={name} onChange={handleChange} /><br />
                            <input type="text" id="name" className="c2 cr" Type="number" placeholder="How many people are there " onChange={handleNumber} value={number} /><br />
                            <input type="text" id="name" className="c2" placeholder="what is you phn number  " onChange={handlenumber} value={number} /><br />
                            {/* //calander */}

                            <input onChange={handlDate} type="datetime-local" id="date" className="c2" placeholder="Date and time"  value={date}/><br />
                            <input type="text" id="message" className="c2" placeholder="Message" value={message}  onChange={handlemsg}  /><br />
                            <div className="Button">
                                <button onClick={clear} >clear Button</button>
                                <button onClick={sendmessage} >Send Message </button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    );

    }
export default Contact;