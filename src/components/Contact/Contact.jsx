// import { useDispatch } from "react-redux";
// import { deleteContact } from "../../redux/contactsSlice";
// import { IoIosContact } from "react-icons/io";
// import { BsTelephoneFill } from "react-icons/bs";
// import { AiFillDelete } from "react-icons/ai";
// import styles from "./Contact.module.css";

// const Contact = ({ id, name, number }) => {
//   const dispatch = useDispatch();

//   const handleDelete = () => {
//     dispatch(deleteContact(id));
//   };

//   return (
//     <li className={styles.list_style}>
//       <div className={styles.container_style}>
//         <div>
//           <IoIosContact size={40} className={styles.icon_style} />
//           <span className={styles.span_style}>{name}</span>
//         </div>
//         <div>
//           <BsTelephoneFill size={24} className={styles.icon_style} />
//           <span>{number}</span>
//         </div>
//       </div>
//       <div className={styles.button_style}>
//         <button onClick={handleDelete}>
//           <AiFillDelete size={24} />
//           DELETE
//         </button>
//       </div>
//     </li>
//   );
// };

// export default Contact;
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import { IoIosContact } from "react-icons/io";
import { BsTelephoneFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import styles from "./Contact.module.css";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  console.log("Rendering Contact:", { id, name, number });

  return (
    <>
      <div className={styles.container_style}>
        <div>
          <IoIosContact size={40} className={styles.icon_style} />
          <span className={styles.span_style}>{name}</span>
        </div>
        <div>
          <BsTelephoneFill size={24} className={styles.icon_style} />
          <span>{number}</span>
        </div>
      </div>
      <div className={styles.button_style}>
        <button onClick={handleDelete}>
          <AiFillDelete size={24} />
          DELETE
        </button>
      </div>
    </>
  );
};

export default Contact;
