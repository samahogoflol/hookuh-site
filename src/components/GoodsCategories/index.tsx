interface CategoryItem {
  id: string;
  name: string;
  imgURL: string;
}

interface GoodsCategoriesProps {
  categories: CategoryItem[];
}

const GoodsCategories = ({ categories }: GoodsCategoriesProps) => {
  return (
    <div className="grid grid-cols-4 pb-1 pr-5 pl-2 pt-5 border border-gray-200 items-center">
      {categories.map((item) => (
        <div key={item.id} className="flex hover:bg-gray-100 items-center cursor-pointer gap-3 mb-5 ml-3">
          <img src={item.imgURL} alt={item.name} width={45} />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default GoodsCategories;
