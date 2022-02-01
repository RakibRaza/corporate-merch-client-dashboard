import Link from 'next/link';
import { useRouter } from "next/router";
import { useState } from 'react';
import { FaCaretDown, FaCircle, FaTimes } from 'react-icons/fa';

const ClientSidebar = ({ showSidebar, removeSidebar }) => {
  const router = useRouter();
  const [showSubMenu, setShowSubMenu] = useState(false)

  const handleClick = () => {
    setShowSubMenu(false);
    removeSidebar();
  }
  const handleSubMenu = (e) => {
    e.preventDefault();
    setShowSubMenu(!showSubMenu);
  }
  return (
    <div className={`sidebar__area sidebar__area--bg ${showSidebar ? "show-sidebar" : ""}`}>
      <Link href="/">
        <a className="sidebar__brand">
          <img src="/images/logo/logo.png" alt="Logo" />
        </a>
      </Link>
      <button onClick={removeSidebar} className="sidebar__close">
        <FaTimes />
      </button>

      <ul className="sidebar__menu">
        <li onClick={handleClick}>
          <Link href="/">
            <a className={router.pathname == "/" ? "active" : ""}>
              <span className="menu-icon">
                <img src="/images/icons/sidebar-menu/Category.svg" alt="" />
              </span>
              <span className="menu-title">Dashboard</span>
            </a>
          </Link>
        </li>
        <li onClick={handleClick}>
          <Link href="/my-products">
            <a className={router.pathname.startsWith("/my-products") ? "active" : ""}>
              <span className="menu-icon">
                <img src="/images/icons/sidebar-menu/bookmark.svg" alt="" />
              </span>
              <span className="menu-title">My Products</span>
            </a>
          </Link>
        </li>
        <li onClick={handleClick}>
          <Link href="/redemption">
            <a className={router.pathname.startsWith("/redemption") ? "active" : ""}>
              <span className="menu-icon">
                <img src="/images/icons/sidebar-menu/fi_link.svg" alt="" />
              </span>
              <span className="menu-title">Redemption</span>
            </a>
          </Link>
        </li>
        <li onClick={handleClick}>
          <Link href="/contacts">
            <a className={router.pathname == "/contacts" ? "active" : ""}>
              <span className="menu-icon">
                <img src="/images/icons/sidebar-menu/user-square.svg" alt="" />
              </span>
              <span className="menu-title">Contacts</span>
            </a>
          </Link>
        </li>
        <li onClick={handleClick}>
          <Link href="/manage-order">
            <a className={router.pathname.startsWith("/manage-order") ? "active" : ""}>
              <span className="menu-icon">
                <img src="/images/icons/sidebar-menu/Document.svg" alt="" />
              </span>
              <span className="menu-title">Manage Order</span>
            </a>
          </Link>
        </li>
        <li onClick={handleClick}>
          <Link href="/shipments">
            <a className={router.pathname == "/shipments" ? "active" : ""}>
              <span className="menu-icon">
                <img src="/images/icons/sidebar-menu/airplane-square.svg" alt="" />
              </span>
              <span className="menu-title">Shipments</span>
            </a>
          </Link>
        </li>
        <li className={`dropdown ${showSubMenu ? "has-clicked" : ""}`}>
          <a onClick={handleSubMenu} className="nav-link sub-menu-toggle" href="#">
            <span className="menu-icon">
              <img src="/images/icons/sidebar-menu/people.svg" alt="" />
            </span>
            <span className="menu-title">Teams</span>
            <span className="menu-arrow">
              <FaCaretDown className="toggle-icon" />
            </span>
          </a>
          {showSubMenu && (
            <ul className="sub-menu">
              <li>
                <Link href="/teams">
                  <a className={router.pathname == "/teams" ? "active" : ""}>
                    <FaCircle />
                    All Team
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/teams/user-management">
                  <a className={router.pathname.startsWith("/teams/user-management") ? "active" : ""}>
                    <FaCircle />
                    User management
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/teams/approval">
                  <a className={router.pathname == "/teams/approval" ? "active" : ""}>
                    <FaCircle />
                    Approval
                  </a>
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li onClick={handleClick}>
          <Link href="/shopify">
            <a className={router.pathname == "/shopify" ? "active" : ""}>
              <span className="menu-icon">
                <img src="/images/icons/sidebar-menu/icons8-shopify 1.svg" alt="" />
              </span>
              <span className="menu-title">Shopify</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/billing-center">
            <a className={router.pathname == "/billing-center" ? "active" : ""}>
              <span className="menu-icon">
                <img src="/images/icons/sidebar-menu/receipt-text.svg" alt="" />
              </span>
              <span className="menu-title">Billing Center</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/templates">
            <a className={router.pathname.startsWith("/templates") ? "active" : ""}>
              <span className="menu-icon">
                <img src="/images/icons/sidebar-menu/subtitle.svg" alt="" />
              </span>
              <span className="menu-title">Templates</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/carbon-offsets">
            <a className={router.pathname == "/carbon-offsets" ? "active" : ""}>
              <span className="menu-icon">
                <img src="/images/icons/sidebar-menu/Compiling.svg" alt="" />
              </span>
              <span className="menu-title">Carbon Offsets</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/resouces">
            <a className={router.pathname == "/resouces" ? "active" : ""}>
              <span className="menu-icon">
                <img src="/images/icons/sidebar-menu/note-favorite.svg" alt="" />
              </span>
              <span className="menu-title">Resources</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/settings">
            <a className={router.pathname == "/settings" ? "active" : ""}>
              <span className="menu-icon">
                <img src="/images/icons/sidebar-menu/Setting.svg" alt="" />
              </span>
              <span className="menu-title"> Settings</span>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default ClientSidebar;
