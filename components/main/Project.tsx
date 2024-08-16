"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface UserData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  message: string;
}

const Contact: React.FC = () => {
  const [userData, setUserData] = useState<UserData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  const postUserData = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const submitData = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { firstName, lastName, phone, email, address, message } = userData;

    if (firstName && lastName && phone && email && address && message) {
      const res = await fetch(
        "https://contact-form-1c9de-default-rtdb.firebaseio.com/userDataRecords.json",
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

      if (res.ok) {
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
        alert("Please fill out the data correctly");
      }
    } else {
      alert("Please fill out the data correctly");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen  py-4 " id="Contact">
      <div className="w-full max-w-xl px-4 sm:px-0 ">
        <div className="shadow-lg rounded-lg p-4 sm:p-6 mt-2 ">
          <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-9 text-center">
            Contact Me
          </h1>
          <form method="POST" onSubmit={submitData}>
            <div className="flex flex-col sm:flex-row gap-2 mb-2">
              <input
                type="text"
                name="firstName"
                className="rounded-lg pl-2 border-2 bg-transparent border-purple-300 w-full h-[40px] p-2 text-white placeholder-white placeholder:text-sm"
                placeholder="First Name"
                value={userData.firstName}
                onChange={postUserData}
              />
              <input
                type="text"
                name="lastName"
                className="rounded-lg pl-2 border-2 bg-transparent border-purple-300 w-full h-[40px] p-2 placeholder-white text-white placeholder:text-sm"
                placeholder="Last Name"
                value={userData.lastName}
                onChange={postUserData}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-2 mb-2">
              <input
                type="text"
                name="phone"
                className="rounded-lg pl-2 border-2 bg-transparent border-purple-300 w-full h-[40px] p-2 text-white placeholder-white placeholder:text-sm"
                placeholder="Phone Number"
                value={userData.phone}
                onChange={postUserData}
              />
              <input
                type="email"
                name="email"
                className="rounded-lg pl-2 border-2 bg-transparent border-purple-300 w-full h-[40px] p-2 text-white placeholder-white placeholder:text-sm"
                placeholder="Email ID"
                value={userData.email}
                onChange={postUserData}
              />
            </div>

            <div className="mb-2">
              <textarea
                name="address"
                className="rounded-lg pl-2 border-2 bg-transparent border-purple-300 w-full h-[110px] p-2 text-white placeholder-white placeholder:text-sm"
                placeholder="Address"
                value={userData.address}
                onChange={postUserData}
              />
            </div>

            <div className="mb-2">
              <textarea
                name="message"
                className="rounded-lg pl-2 border-2 bg-transparent border-purple-300 w-full h-[110px] p-2 text-white placeholder-white placeholder:text-sm"
                placeholder="Enter Your Message"
                value={userData.message}
                onChange={postUserData}
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto bg-white text-black py-2 px-4 rounded-lg hover:bg-purple-600 transition duration-300 ease-in-out"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
