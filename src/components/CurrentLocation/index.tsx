import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"

import "./index.css"

const BreadcrumbTrail = () => {
const location = useLocation()

if (location.pathname === "/") {
    return null;
}else {
  const path = location.pathname.split("/")
  return path.map((item ) => (
    <div>
        <Link to={location.pathname}>{item}</Link>
    </div>
  ))
}
}

export default BreadcrumbTrail;