//External Lib  imports
import React from "react";
import {
  AiOutlineUnorderedList,
  AiOutlineUser,
  AiOutlineBank,
  AiOutlineSetting,
} from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import {
  BsBagPlus,
  BsBagX,
  BsBox,
  BsCartPlus,
  BsCircle,
  BsGraphUp,
  BsPeople,
} from "react-icons/bs";
import { IoCreateOutline } from "react-icons/io5";
import { RiDashboardLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { MdPassword, MdOutlineBackup } from "react-icons/md";

//Internal Lib  imports
import sidebarLogo from "../../assets/images/logo.svg";

function SideBar({ openMenu }) {
  const sidebarItems = [
    {
      title: "Dashboard",
      icon: <RiDashboardLine className="side-bar-item-icon" />,
      url: "/",
      subMenu: [],
    },
    {
      title: "Customer",
      icon: <BsPeople className="side-bar-item-icon" />,
      url: "/Customer",
      subMenu: [
        {
          title: "New Customer",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/CustomerCreateUpdatePage",
        },
        {
          title: "Customer List",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/CustomerListPage",
        },
      ],
    },
    {
      title: "Supplier",
      icon: <TbTruckDelivery className="side-bar-item-icon" />,
      url: "/Supplier",
      subMenu: [
        {
          title: "New Supplier",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/SupplierCreateUpdatePage",
        },
        {
          title: "Supplier List",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/SupplierListPage",
        },
      ],
    },
    {
      title: "Expense",
      icon: <AiOutlineBank className="side-bar-item-icon" />,
      url: "/Expense",
      subMenu: [
        {
          title: "New Expense Type",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/ExpenseTypeCreateUpdatePage",
        },
        {
          title: "Expense Type List",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/ExpenseTypeListPage",
        },
        {
          title: "New Expense",
          icon: <IoCreateOutline size={16} className="side-bar-subitem-icon" />,
          url: "/ExpenseCreateUpdatePage",
        },
        {
          title: "Expense List",
          icon: (
            <AiOutlineUnorderedList
              size={16}
              className="side-bar-subitem-icon"
            />
          ),
          url: "/ExpenseListPage",
        },
      ],
    },
    {
      title: "Product",
      icon: <BsBox className="side-bar-item-icon" />,
      url: "/Product",
      subMenu: [
        {
          title: "New Brand",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/BrandCreateUpdatePage",
        },
        {
          title: "Brand List",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/BrandListPage",
        },
        {
          title: "New Category",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/CategoryCreateUpdatePage",
        },
        {
          title: "Category List",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/CategoryListPage",
        },
        {
          title: "New Product",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/ProductCreateUpdatePage",
        },
        {
          title: "Product List",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/ProductListPage",
        },
      ],
    },
    {
      title: "Purchase",
      icon: <BsBagPlus className="side-bar-item-icon" />,
      url: "/Purchase",
      subMenu: [
        {
          title: "New Purchase",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/PurchaseCreateUpdatePage",
        },
        {
          title: "Purchase List",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/PurchaseListPage",
        },
      ],
    },
    {
      title: "Sale",
      icon: <BsCartPlus className="side-bar-item-icon" />,
      url: "/Sale",
      subMenu: [
        {
          title: "New Sale",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/SalesCreateUpdatePage",
        },
        {
          title: "Sale List",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/SalesListPage",
        },
      ],
    },
    {
      title: "Return",
      icon: <BsBagX className="side-bar-item-icon" />,
      url: "/Return",
      subMenu: [
        {
          title: "New Return",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/ReturnCreateUpdatePage",
        },
        {
          title: "Return List",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/ReturnListPage",
        },
      ],
    },
    {
      title: "Report",
      icon: <BsGraphUp className="side-bar-item-icon" />,
      url: "/Report",
      subMenu: [
        {
          title: "Sale Report",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/SaleReportPage",
          subMenu: [
            {
              title: "Sale Report",
              icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
              url: "/SaleReportPage",
            },
          ],
        },
        {
          title: "Return Report",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/ReturnReportPage",
        },
        {
          title: "Purchase Report",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/PurchaseReportPage",
        },
        {
          title: "Expense Report",
          icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
          url: "/ExpenseReportPage",
        },
      ],
    },
    {
      title: "Setting",
      icon: <AiOutlineSetting className="side-bar-item-icon" />,
      url: "/Setting",
      subMenu: [
        {
          title: "Profile",
          icon: <AiOutlineUser size={16} className="side-bar-subitem-icon" />,
          url: "/profile",
        },
        {
          title: "Change Password",
          icon: <MdPassword size={16} className="side-bar-subitem-icon" />,
          url: "/change-password",
        },
        {
          title: "Database Backup",
          icon: <MdOutlineBackup size={16} className="side-bar-subitem-icon" />,
          url: "/database-backup",
        },
      ],
    },
  ];

  const isSidebarAccordionActive = () => {
    let urlList = [];
    sidebarItems.map((item) => {
      urlList.push(
        item.subMenu.map((subItem) => {
          return subItem?.url;
        }),
      );
    });

    return urlList.findIndex((items) =>
      items.includes(window.location.pathname),
    );
  };

  return (
    <div className={openMenu ? "side-nav-open" : "side-nav-close"}>
      <div className="side-nav-top text-center">
        <Link to="/" className="text-center">
          <img alt="" className="side-nav-logo" src={sidebarLogo} />
        </Link>
      </div>

    </div>
  );
}

export default SideBar;
