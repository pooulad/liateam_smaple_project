import { ICategoryRequest } from "../../types";
import logo from "../../assets/images/loader.png";
import { Link } from "react-router-dom";
import "./styles/pageHeader.css";
import { isLinkActive } from "../../utils/ActiveLink";

type PageHeaderProps = {
  categories: ICategoryRequest[];
};

export default function PageHeader(props: PageHeaderProps) {
  console.log(props.categories);

  return (
    <div className="header">
      <img src={logo} alt="logo" />
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
        <div className="cart_div"></div>
      </div>
    </div>
  );
}
