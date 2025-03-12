"use client";

import {Dialog, Transition, TransitionChild, DialogPanel, DialogTitle} from "@headlessui/react";
import {Fragment, useState} from "react";

export default function Modal() {
const [isOpen , setIsOpen] = useState(false);
const [firstName, setFirstName] = useState(""); //Name Input
const [surname, setSurname] = useState(""); //Surname Input
const [email, setEmail] = useState(""); //Email Input
const [phone, setPhone] = useState(""); //Phone Input
const [attendance, setAttendance] = useState(""); //Attendance radio button
const [errors, setErrors] = useState({}); //Validation Management

function closeModal() {
    setIsOpen(false); //Modal is set to close
}

function openModal() {
    setIsOpen(true); //Modal is set to open
}

function validationForm() {
    const newErrors = {};
    if (firstName.trim().length < 3) newErrors.firstName = "You must assign your name"; //If the name has less than three letters, then throw an error
    if (surname.trim().length < 3) newErrors.surname = "You must assign your surname"; //If the name has less than three letters, then throw an error
    if (!email.match(/^\S+@\S+\.\S+$/)) newErrors.email = "You must assign your email"; //If the email does not include either of these symbols, then throw an error
    if (!phone.match(/^\d{10,15}$/)) newErrors.phone = "You must assign your phone number"; //If the number does not include either of these symbols (including digits between 10 and 15), then throw an error
    if (!attendance) newErrors.attendance = "Please select your attendance"; //If this option is not selected, then throw an error
 
 setErrors(newErrors); //updates the error state with the validation messages
 return Object.keys(newErrors).length === 0; // checks if there are any errors
 //If there are any errors, newErrors will return the value 'false' and prevent the form from submitting
 //If there are no errors whatsoever, then newErrors will return the value 'true', and will allow the form to submit
 }

 function handleSubmit(e) {
    e.preventDefault();
    if (validationForm()) {
        alert("Thank You");
        closeModal();
        //If the form has been filled out correctly, set an alert and close the modal
    }
 }
 
 return (
    <div className = "modal">
    <button onClick={openModal} className="px-4 py-2 bg-red-800 text-white rounded-md">
        Join Us
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <div className="fixed inset-0 bg-black bg-opacity-50" />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <TransitionChild as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
              <DialogPanel className="w-full max-w-md bg-white p-6 rounded-lg shadow-xl">
                <DialogTitle className="text-lg text-black font-bold">RSVP Form</DialogTitle>

                <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm text-black font-medium">First Name (Required)</label>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="w-full border p-2 rounded" />
                    {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                  </div>

                  <div>
                    <label className="block text-sm text-black font-medium">Surname (Required)</label>
                    <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} className="w-full border p-2 rounded" />
                    {errors.surname && <p className="text-red-500 text-sm">{errors.surname}</p>}
                  </div>

                  <div>
                    <label className="block text-sm text-black font-medium">Email (Required)</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border p-2 rounded" />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-sm text-black font-medium">Phone Number (Required)</label>
                    <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full border p-2 rounded" />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-sm text-black font-medium">Attendance (Required)</label>
                    <div className="flex gap-4">
                      <label className="text-black flex items-center gap-2">
                        <input type="radio" name="attendance" value="attending" onChange={(e) => setAttendance(e.target.value)} />
                        Yes
                      </label>
                      <label className=" text-black flex items-center gap-2">
                        <input type="radio" name="attendance" value="notAttending" onChange={(e) => setAttendance(e.target.value)} />
                       No
                      </label>
                    </div>
                    {errors.attendance && <p className="text-red-500 text-sm">{errors.attendance}</p>}
                  </div>

                  <div className="flex justify-end space-x-2">
                    <button type="button" onClick={closeModal} className="px-4 py-2 bg-gray-300 rounded-md">
                      Cancel
                    </button>
                    <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded-md">
                      Submit
                    </button>
                  </div>
                </form>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
   </div>    
 )
};