// import ContactForm from "./components/ContactForm/ContactForm";
// import ContactList from "./components/ContactList/ContactList";
// import SearchBox from "./components/SearchBox/SearchBox";
// import styles from "./App.module.css";

// const App = () => {
//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>Phonebook</h1>
//       <ContactForm />
//       <h2 className={styles.subtitle}>Contacts</h2>
//       <SearchBox />
//       <ContactList />
//     </div>
//   );
// };

// export default App;
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { fetchContacts } from "./redux/contactsOps";
import {
  selectFilteredContacts,
  selectLoading,
  selectError,
} from "./redux/contactsSlice";
import styles from "./App.module.css";

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  useEffect(() => {}, [contacts]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={styles.subtitle}>Contacts</h2>
      <SearchBox />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ContactList />
    </div>
  );
};

export default App;
