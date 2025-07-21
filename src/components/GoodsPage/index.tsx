import Acardion from "../Acardion";
import Delivery from "../Delivery";
import Filters from "../Filters";
import GoodsCategories from "../GoodsCategories";
import GoodsList from "../GoodsList";

const GoodsPage = () => {
  return (
    <>
      <h2 className="text-center text-3xl font-medium mt-10 mb-10">Електронні сигарети</h2>
      <div className="grid grid-cols-[250px_1fr] gap-x-7">
        <div className="col-span-1">
          <Filters />
        </div>
        <div className="flex flex-col">
          <GoodsCategories />
          <GoodsList />
        </div>
      </div>
      <Delivery />
      <Acardion />
    </>
  );
};

export default GoodsPage;
