import React, {useReducer, useState} from "react";
import Modal from './Modal'

const reducer = (state, action) => { 
    if (action.type === "ADD_ITEM") {
      const newPeople = [...state.people, action.payload]
      console.log(newPeople)
      return {
        ...state,
        people: newPeople,
        isModalOpen: true,
        modalContent: "item added",
      };
    };
    if (action.type === "NO_VALUE") {
      return {
        ...state, 
        isModalOpen: true,
        modalContent: "Novalue, Kindly input your values "
      }
    }
    if (action.type === 'CLOSE_MODAL') {
      return {
        ...state, 
        isModalOpen: false
      }
    } if (action.type === 'REMOVE_ITEM') {
      const newPeople = state.people.filter((person) => 
      person.id !== action.payload)
  
      return {
        ...state,
        people:newPeople
      }
    }
    throw new Error ('no matching action type ')
    // return state;
  };
  const defaultState = {
    people: [],
    isModalOpen: false,
    modalContent: "helloe world",
  };
  
 const ContactForm = () => {
    //reducer function
  
    // const [name, setName] = useState("");
    const [userDetails, setUserDetails] = useState({firstName: "", lastname: "", phone: "", email: "", message: ""})
    const [state, dispatch] = useReducer(reducer, defaultState);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserDetails({ ...userDetails, [name]: value });
      };

      
    const handleSubmit = (e) => {
      e.preventDefault();
    //   console.log(userDetails)
      if (userDetails.email && userDetails.firstName && userDetails.lastname && userDetails.message && userDetails.phone) {
        const newItem = {id:new Date().getTime().toString(), ...userDetails}
        dispatch({ type: "ADD_ITEM", payload: newItem});

      } else {
        dispatch({type: "NO_VALUE"})
      }
    };
  
    const closeModal = () => {
      dispatch({type: 'CLOSE_MODAL'})
    }
    return (
      <>
        {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent} />}
  
        <form onSubmit={handleSubmit}>
          <div className="contact-form">
            <input
              type="text"
              placeholder="firstname"
              name="firstName"
              value={userDetails.firstName}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="lastname"
              name="lastname"
              value={userDetails.lastname}
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="email"
              name="email"
              value={userDetails.email}
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="number"
              name="phone"
              value={userDetails.phone}
              onChange={handleChange}
            />
            <input
              type="text"
              name="message"
              placeholder="message"
              value={userDetails.message}
              onChange={handleChange}
            />
          </div>
          <button>Submit</button>
          </form>
  
        {state.people.map((person) => {
          return (
            <div key={person.id}>
              <h4>{person.firstName}</h4>
              <h4>{person.lastname}</h4>
              <h4>{person.phone}</h4>
              <button  onClick={() => {
            dispatch({type: 'REMOVE_ITEM', payload: person.id})
          }}>remove</button>
            </div>
          );
        })}
      </>
    );
  };

  export default ContactForm