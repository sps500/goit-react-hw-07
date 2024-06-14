// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchContacts } from "../../redux/contactsOps";
// import {
//   selectFilteredContacts,
//   selectLoading,
//   selectError,
// } from "../../redux/contactsSlice"; // Проверяем импорт селекторов
// import Contact from "../Contact/Contact";
// import styles from "./ContactList.module.css";

// const ContactList = () => {
//   const dispatch = useDispatch();
//   const contacts = useSelector(selectFilteredContacts);
//   const loading = useSelector(selectLoading);
//   const error = useSelector(selectError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);
//   console.log("Contacts in ContactList:", contacts); // Лог контактов
//   console.log("Loading state:", loading); // Лог состояния загрузки
//   console.log("Error state:", error); // Лог состояния ошибки

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   return (
//     <ul className={styles.list}>
//       {contacts.map((contact) => (
//         <Contact key={contact.id} {...contact} />
//       ))}
//     </ul>
//   );
// };

// export default ContactList;
// ContactList.jsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { fetchContacts } from "../../redux/contactsOps";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import styles from "./ContactList.module.css";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector((state) => state.contacts.loading);
  const error = useSelector((state) => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <ul className={styles.list}>
      {contacts.map((contact) => (
        <li key={contact.id} className={styles.listItem}>
          <Contact {...contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
