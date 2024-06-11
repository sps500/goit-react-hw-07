import styles from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <input
      type="text"
      onChange={handleChange}
      placeholder="Search contacts"
      className={styles.searchBox}
    />
  );
};

export default SearchBox;
