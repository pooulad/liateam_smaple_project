import { ICategoryRequest } from "../../types";
import logo from "../../assets/images/loader.png";
import { Link } from "react-router-dom";
import "./styles/pageHeader.css";
import { isLinkActive } from "../../utils/ActiveLink";
import { useLocation } from "react-router-dom";
import { CartIcon } from "../../assets/ts";

type PageHeaderProps = {
  categories: ICategoryRequest[];
};

export default function PageHeader(props: PageHeaderProps) {
  const location = useLocation();
  return (
    <div className="header">
      <Link to={"/"}>
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <div className="header_bottom">
        <div className="header_links">
          {props.categories.map((item) => {
            return (
              <div key={item.id}>
                <Link
                  className={
                    isLinkActive(`/category/${item.id}`)
                      ? "active_header_link"
                      : "header_link"
                  }
                  to={`/category/${item.id}`}
                >
                  {item.name}
                </Link>
              </div>
            );
          })}
        </div>
        <div className="cart_div">
          <button type="button" className="cart_btn">
            <CartIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
