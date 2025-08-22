import { allCategoriesData } from "../../data/allCategoriesData";
import { useParams, Link } from "react-router-dom";

const GoodsCategories = () => {
  const { slugs } = useParams();
  const findRightWay = slugs?.split("/")[0];
  const currentCategory = allCategoriesData.find((category) => category.slug === findRightWay);

  return (
    <>
      {currentCategory?.subcategories?.map((i) => (
        <div key={i.slug} className="flex hover:bg-gray-100 items-center cursor-pointer gap-3 mb-5 ml-3">
          <img src={i.imgUrl} alt={i.title} width={45} />
          <p>{i.title}</p>
        </div>
      ))}
    </>
  );
};

export default GoodsCategories;
