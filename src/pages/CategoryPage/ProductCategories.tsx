import { Link, useLocation } from "react-router-dom";
import type { Category } from "../../types/data";

interface CategoriesProps {
  categories?: Category[];
}

const Categories: React.FC<CategoriesProps> = ({ categories }) => {
  const location = useLocation();

  return (
    <>
      {categories
        ? categories.map((i) => (
            <Link key={i.slug} to={`${location.pathname}/${i.slug}`}>
              <div className="flex hover:bg-gray-100 items-center cursor-pointer gap-3 mb-5 ml-3">
                <img src={i.imgUrl} alt={i.title} width={45} />
                <p>{i.title}</p>
              </div>
            </Link>
          ))
        : null}
    </>
  );
};

export default Categories;
