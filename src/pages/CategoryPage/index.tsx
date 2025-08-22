import { useParams, Link } from "react-router-dom";
import { allCategoriesData } from "../../data/allCategoriesData";
import Filters from "../../components/Filters";
import BtnAddItemToCart from "../../components/Buttons/BtnAddItemToCart";
import GoodsCategories from "../../components/GoodsCategories";
import Page404 from "../404";
import GoodsList from "../../components/GoodsList";

const CategoryPage = () => {
  const { slugs } = useParams();
  const findRightWay = slugs?.split("/")[0];
  const currentCategory = allCategoriesData.find((category) => category.slug === findRightWay);

  console.log(allCategoriesData);

  return (
    <>
      {allCategoriesData.map((item) => (
        <div key={item.slug}>
          <h2 className="text-center mt-10 mb-5 text-3xl font-medium">{item.title}</h2>
          <div className="grid grid-cols-[280px_1fr]">
            <div>
              <Filters />
            </div>
            <div>
              <GoodsCategories />
              <div className="grid grid-cols-4">
                <GoodsList />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

{
  /* <div key={item.id} className="flex hover:bg-gray-100 items-center cursor-pointer gap-3 mb-5 ml-3">
<img src={item.imgURL} alt={item.name} width={45} />
<p>{item.name}</p> */
}

export default CategoryPage;

// import type { ContentBlock } from "../../types/data";
// import type { Product } from "../../types/product";
// import { useParams } from "react-router-dom";
// import { allCategoriesData } from "../../data/allCategoriesData";
// import GoodsList from "../../components/GoodsList";
// import Filters from "../../components/Filters";
// import Page404 from "../404";
// import GoodsCategories from "../../components/GoodsCategories";
// import usePagination from "../../customHooks/usePaginaton";
// import PaginationContainer from "../../components/PaginationContainer";
// import Delivery from "../../components/Delivery";
// import { tabacco420Category } from "../../data/tabacco/brands/420";

// const CategoryPage = () => {
//   const { categoryName } = useParams();
//   const categoryData = allCategoriesData[categoryName];
//   const { visibleItems, totalPages, currentPage, goToPage, onLoadMore, hasMoreOnCurrentPage, isLastPage } = usePagination<Product>(
//     categoryData.productContent,
//     20
//   );
//   if (!categoryData) {
//     return <Page404 />;
//   }

//   return (
//     <>
//       <h2 className="text-center mt-10 mb-5 text-3xl font-medium">{categoryData.title}</h2>
//       <div className="grid grid-cols-[280px_1fr]">
//         <div>
//           <Filters />
//         </div>
//         <div>
//           <GoodsCategories categories={categoryData.typeOfProducts} />
//           <div className="grid grid-cols-4 mt-3">
//             <GoodsList visibleItems={visibleItems} />
//           </div>
//           <div className="flex flex-col items-center mt-5">
//             <PaginationContainer
//               totalPages={totalPages}
//               currentPage={currentPage}
//               goToPage={goToPage}
//               onLoadMore={onLoadMore}
//               hasMoreOnCurrentPage={hasMoreOnCurrentPage}
//             />
//           </div>
//         </div>
//       </div>
//       <div>
//         <section>
//           {categoryData.description.map((block: ContentBlock, index: number) => (
//             <div className="text-[0.95rem]" key={index}>
//               {block.imgUrl ? (
//                 <>
//                   <h2 className="text-center mt-5 mb-5 text-3xl font-medium">{block.header}</h2>
//                   <div className="grid grid-cols-[1000px_1fr]">
//                     <div>
//                       <p className="mb-5 mt-5">{block.description1}</p>
//                       {block.description2 && <p className="mb-5">{block.description2}</p>}
//                       {block.description3 && <p className="mb-5">{block.description3}</p>}

//                       {block.listItems && (
//                         <ul className="flex flex-col gap-1 list-disc mt-5 mb-5 pl-10 ">
//                           {block.listItems.liItem1 && <li>{block.listItems.liItem1}</li>}
//                           {block.listItems.liItem2 && <li>{block.listItems.liItem2}</li>}
//                           {block.listItems.liItem3 && <li>{block.listItems.liItem3}</li>}
//                           {block.listItems.liItem4 && <li>{block.listItems.liItem4}</li>}
//                           {block.listItems.liItem5 && <li>{block.listItems.liItem5}</li>}
//                           {block.listItems.liItem6 && <li>{block.listItems.liItem6}</li>}
//                           {block.listItems.liItem7 && <li>{block.listItems.liItem7}</li>}
//                         </ul>
//                       )}
//                     </div>
//                     <div>{block.imgUrl && <img src={block.imgUrl} width={250}></img>}</div>
//                   </div>
//                   {block.conclusion1 && <p>{block.conclusion1}</p>}
//                   {block.conclusion2 && <p>{block.conclusion2}</p>}
//                 </>
//               ) : (
//                 <>
//                   <h2 className="text-center mt-10 mb-5 text-3xl font-medium">{block.header}</h2>
//                   <p>{block.description1}</p>
//                   {block.description2 && <p>{block.description2}</p>}
//                   {block.listItems && (
//                     <ul className="flex flex-col gap-3 list-disc mt-5 mb-5 pl-10 ">
//                       {block.listItems.liItem1 && <li>{block.listItems.liItem1}</li>}
//                       {block.listItems.liItem2 && <li>{block.listItems.liItem2}</li>}
//                       {block.listItems.liItem3 && <li>{block.listItems.liItem3}</li>}
//                       {block.listItems.liItem4 && <li>{block.listItems.liItem4}</li>}
//                       {block.listItems.liItem5 && <li>{block.listItems.liItem5}</li>}
//                       {block.listItems.liItem6 && <li>{block.listItems.liItem6}</li>}
//                       {block.listItems.liItem7 && <li>{block.listItems.liItem7}</li>}
//                     </ul>
//                   )}
//                   {block.imgUrl && <img src={block.imgUrl} width={300}></img>}
//                   {block.conclusion1 && <p>{block.conclusion1}</p>}
//                   {block.conclusion2 && <p>{block.conclusion2}</p>}
//                 </>
//               )}
//             </div>
//           ))}
//         </section>
//       </div>
//       <Delivery />
//     </>
//   );
// };

// export default CategoryPage;
