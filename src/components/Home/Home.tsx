import { ICategoryRequest } from "../../types";
import "./styles/home.css";
import "../styles/common.css";
import { dictionary } from "../../dictionary";
import config from "../../config.json";
import { Link } from "react-router-dom";

type HomeProps = {
  categories: ICategoryRequest[];
};

export default function Home(props: HomeProps) {
  console.log("s", props.categories);
  return (
    <div className="client_div">
      <span className="page_title">{dictionary.home.title}</span>
      <div className="category_section">
        {props.categories.map((item: ICategoryRequest) => {
          return (
            <Link
              to={`/category/${item.id}`}
              key={item.id}
              className="category_item"
            >
              <img src={`${config.domain}/${item.image}`} alt="category_img" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
