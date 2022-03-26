// Import redux
import { useSelector } from 'react-redux';

const NavBar = () => {
  const state = useSelector((state) => {
    console.log(state.counter);
  });
  return <nav></nav>;
};

export default NavBar;
