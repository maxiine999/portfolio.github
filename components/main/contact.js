"use client"
import React, { useState } from "react";
import letscon from "@/letsCon.json"
import Lottie from "lottie-react"
const Contact = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });
  
  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    
    setUserData({ ...userData, [name]: value });
  };
  
  // connect with firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, lastName, phone, email, address, message } = userData;
    
    if (firstName && lastName && phone && email && address && message) {
      const res = fetch(
        'https://contact-form-1c9de-default-rtdb.firebaseio.com/userDataRecords.json',
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            phone,
            email,
            address,
            message,
          }),
        }
      );
      
      if (res) {
        setUserData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          address: "",
          message: "",
        });
        alert("Your form has been submitted");
      } else {
        alert("fill the data correctly");
      }
    } else {
      alert("fill the data correctly");
    }
  };
  

  return (
    <>
   
   <div className="container "
          id="Contact">
         <div
      className="flex flex-col items-center justify-center py-7"
      id="projects"
    >
      <h1 className="text-[40px]  font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 ">
        Contacts

      </h1>
        <div className="">

       <div className=" flex flex-cols items-center justify-center -mt-12 transform -translate-y-9  ">

               

          {/* right side contact form  */}

          <div
     className="flex items-center justify-center w-full rounded-md border-4  py-3 px-4 text-base outline-none focus:border-purple-500 focus:shadow-md
      "
      
      style={{
        backgroundColor: '', // Light background color
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Light shadow for depth
        transition: 'all 0.3s ease', // Smooth transition for hover effects
        margin: '20px 0', // Margin for spacing
        maxWidth: '500px', // Set a max-width for the container
        marginLeft: 'auto', // Center align the container
        marginRight: 'auto'
      }}>
          <div className=" text-[16px] ">
            <form method="POST">
            <div className="flex flex-col items-center justify-center w-full ">
  <div className="flex flex-row justify-center w-full max-w-lg ml-2 ">
  <div className="flex-1 rounded-lg border-2 border-purple-300   "
  style={{
    backgroundColor: '', // Light background color
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Light shadow for depth
    transition: 'all 0.3s ease', // Smooth transition for hover effects
    margin: '20px 0', // Margin for spacing
  }}>
  <input
    type="text"
    name="firstName"
    className="rounded-lg w-[216px] h-[30px]  " 
    placeholder="First Name"
    value={userData.firstName}
    onChange={postUserData}
  />
</div>

    <div className="flex-1 rounded-lg border-2 border-purple-300 ml-2"
      style={{
        backgroundColor: '', // Light background color
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Light shadow for depth
        transition: 'all 0.3s ease', // Smooth transition for hover effects
        margin: '20px 0', // Margin for spacing
      }}>
      <input
        type="text"
        name="lastName"
        className="rounded-lg w-[216px] h-[30px] "
        placeholder="Last Name"
        value={userData.lastName}
        onChange={postUserData}
      />
    </div>
  </div>
</div>

<div className="flex flex-col items-center justify-center w-full">
  <div className="flex flex-row justify-center w-full max-w-lg">
    <div className="flex-1 rounded-md border-2 border-purple-300 mr-2"
      style={{
        backgroundColor: '', // Light background color
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Light shadow for depth
        transition: 'all 0.3s ease', // Smooth transition for hover effects
        margin: '20px 0', // Margin for spacing
      }}>
      <input
        type="text"
        name="phone"
        className="rounded-lg w-[216px] h-[30px]"
        placeholder="Phone Number"
        value={userData.phone}
        onChange={postUserData}
      />
    </div>
    <div className="flex-1 rounded-md border-2 border-purple-300 ml-2"
      style={{
        backgroundColor: '', // Light background color
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Light shadow for depth
        transition: 'all 0.3s ease', // Smooth transition for hover effects
        margin: '20px 0', // Margin for spacing
      }}>
      <input
        type="text"
        name="email"
       className="rounded-lg w-[216px] h-[30px]"
        placeholder="Email ID"
        value={userData.email}
        onChange={postUserData}
      />
    </div>
  </div>
</div>

<div className="row w-full ">
  <div className="w-full rounded-md border-2 border-purple-300 "
       style={{
         backgroundColor: '', // Light background color
         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Light shadow for depth
         transition: 'all 0.3s ease', // Smooth transition for hover effects
         margin: '20px 0', // Margin for spacing
        }}>
    <textarea
      
      name="address"
      className="form-control w-full rounded-lg" // Added w-full class here
      placeholder="Address"
      value={userData.address}
      onChange={postUserData}
      rows="3"
      />
                </div>
              </div>
              <div className="w-full rounded-md border-2 border-purple-300"
  style={{
    backgroundColor: '', // Light background color
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Light shadow for depth
    transition: 'all 0.3s ease', // Smooth transition for hover effects
    margin: '20px 0', // Margin for spacing
  }}>
  <div className=""
  >
    <textarea
      name="message"
      className="form-control w-full rounded-lg"
      placeholder="Enter Your Message"
      value={userData.message}
      onChange={postUserData}
      rows="4" // Adjust the number of rows as needed
      />
  </div>
</div>
              {/* <div className="py-3 form-check form-checkbox-style">
                <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                />
                <label className=" form-check-label main-hero-para text-white">
                I agree that the thapatechnicalpay may contact me at the email address or phone number above
                </label>
                </div> */}

<button
  type="submit"
  className="py-2 bg-purple-500 rounded-md border-2 border-white-300 hover:bg-purple-600 text-center text-white
  
  cursor-pointer rounded-lg w-full max-w-[200px] transition duration-300 ease-in-out"
  onClick={submitData}>
  Submit
</button>
            </form>
            </div>
          </div>
              </div>
                  
            </div>
          </div>
        </div>
    
    
    </>
  );
};

export default Contact;
