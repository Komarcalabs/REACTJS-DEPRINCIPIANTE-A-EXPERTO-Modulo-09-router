import { Link } from "react-router-dom";

function Nav() {
  return (
    <ul>
      <li>
        <Link to="/">Principal</Link>
      </li>
      <li>
        <Link to="/page">Otro</Link>
      </li>
    </ul>
  );
}
export default Nav;
