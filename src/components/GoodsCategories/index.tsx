import { brandStaticContent } from "../../data/tabakContent";

const GoodsCategories = () => {
  return (
    <div className="grid grid-cols-4 pb-1 pr-5 pl-2 pt-5 border border-gray-200">
      {brandStaticContent.map((item) => (
        <div className="flex hover:bg-gray-100 items-center cursor-pointer gap-3 mb-5 ml-3" key={item.id}>
          <img src={item.imgURL} alt={item.name} width={45} />
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default GoodsCategories;
