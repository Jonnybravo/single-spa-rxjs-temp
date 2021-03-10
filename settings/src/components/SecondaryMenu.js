import React, { useState, useEffect } from "react";
import { useHistory, useLocation, NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export default function SecondaryMenu() {
  let { push } = useHistory();
  let { hash } = useLocation();
  const [activeItem, setActiveItem] = useState(hash);

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [hash]);
  return (
    <Menu secondary>
      <Menu.Item
        name="List of Application"
        active={activeItem === "/settings/" || activeItem === "/settings"}
        onClick={() => push(`./`)}
      />
      <Menu.Item
        name="Add New App"
        active={activeItem === "/settings/add"}
        onClick={() => push(`/add`)}
      />
    </Menu>
    // <div>
    //   <NavLink to="/" activeClassName="active" exact="true">List</NavLink>
    //      <NavLink to="/add" activeClassName="active" exact="true">Detail</NavLink>
    // </div>
  );
}
