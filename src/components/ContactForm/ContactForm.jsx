// import { useState } from "react";
// import styles from "./ContactForm.module.css";
// import { useDispatch } from "react-redux";
// import { addContact } from "../../redux/contactsSlice";

// const ContactForm = () => {
//   const [name, setName] = useState("");
//   const [number, setNumber] = useState("");
//   const [errors, setErrors] = useState({});
//   const dispatch = useDispatch();

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const newErrors = validateForm();
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     const newContact = {
//       id: Date.now().toString(),
//       name,
//       number,
//     };
//     dispatch(addContact(newContact));
//     setName("");
//     setNumber("");
//     setErrors({});
//   };

//   const validateForm = () => {
//     const errors = {};
//     if (!name) {
//       errors.name = "Name is required";
//     }
//     if (!number) {
//       errors.number = "Number is required";
//     } else if (!/^[0-9 ()+-]*$/.test(number)) {
//       errors.number = "Number must be 10 digits long";
//     }
//     return errors;
//   };

//   return (
//     <form onSubmit={handleSubmit} className={styles.form}>
//       <div>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Name"
//         />
//         {errors.name && <span className={styles.error}>{errors.name}</span>}
//       </div>
//       <div>
//         <input
//           type="text"
//           value={number}
//           onChange={(e) => setNumber(e.target.value)}
//           placeholder="Number"
//         />
//         {errors.number && <span className={styles.error}>{errors.number}</span>}
//       </div>
//       <button type="submit">Add Contact</button>
//     </form>
//   );
// };

// export default ContactForm;
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addContact({ name, phoneNumber }));
    setName("");
    setPhoneNumber("");
  };

  const handlePhoneNumberChange = (event) => {
    const inputValue = event.target.value;
    if (/^[0-9 ()+-]*$/.test(inputValue) || inputValue === "") {
      setPhoneNumber(inputValue);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Phone Number:
        <input
          type="tel"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          required
        />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
