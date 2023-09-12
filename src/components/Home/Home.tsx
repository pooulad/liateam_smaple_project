import { ICategoryRequest } from "../../types";
import "./styles/home.css";

type HomeProps = {
  categories: ICategoryRequest[];
};

export default function Home(props: HomeProps) {
  console.log("s", props.categories);
  return (
    <div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
    </div>
  );
}
