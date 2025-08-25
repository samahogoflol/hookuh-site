import type { Category } from "../../types/data";
import Delivery from "../../components/Delivery";

interface ProductsDescriptionProps {
  findRightCategory: Category;
}

const ProductsDescription: React.FC<ProductsDescriptionProps> = ({ findRightCategory }) => {
  console.log(findRightCategory);
  return (
    <>
      {findRightCategory.description?.map((item, index) => (
        <div key={index}>
          {item.imgUrl ? (
            <>
              <h2 className="text-center mt-5 mb-5 text-3xl font-medium">{item.header}</h2>
              <div className="grid grid-cols-[1000px_1fr]">
                <div>
                  <p className="mb-5 mt-5">{item.description1}</p>
                  {item.description2 && <p>{item.description2}</p>}
                  {item.description3 && <p>{item.description3}</p>}
                  {item.listItems && (
                    <ul className="flex flex-col gap-1 list-disc mt-5 mb-5 pl-10 ">
                      {item.listItems.liItem1 && <li>{item.listItems.liItem1}</li>}
                      {item.listItems.liItem2 && <li>{item.listItems.liItem2}</li>}
                      {item.listItems.liItem3 && <li>{item.listItems.liItem3}</li>}
                      {item.listItems.liItem4 && <li>{item.listItems.liItem4}</li>}
                      {item.listItems.liItem5 && <li>{item.listItems.liItem5}</li>}
                      {item.listItems.liItem6 && <li>{item.listItems.liItem6}</li>}
                      {item.listItems.liItem7 && <li>{item.listItems.liItem7}</li>}
                    </ul>
                  )}
                </div>
                <div>{item.imgUrl && <img src={item.imgUrl} alt="Табак для кальяну" width={280}></img>}</div>
              </div>
              <div>
                {item.conclusion1 && <p>{item.conclusion1}</p>}
                {item.conclusion2 && <p>{item.conclusion2}</p>}
              </div>
            </>
          ) : (
            <>
              <h2 className="text-center mt-10 mb-5 text-3xl font-medium">{item.header}</h2>
              <p>{item.description1}</p>
              {item.description2 && <p>{item.description2}</p>}

              {item.listItems && (
                <ul className="flex flex-col gap-3 list-disc mt-5 mb-5 pl-10 ">
                  {item.listItems.liItem1 && <li>{item.listItems.liItem1}</li>}
                  {item.listItems.liItem2 && <li>{item.listItems.liItem2}</li>}
                  {item.listItems.liItem3 && <li>{item.listItems.liItem3}</li>}
                  {item.listItems.liItem4 && <li>{item.listItems.liItem4}</li>}
                  {item.listItems.liItem5 && <li>{item.listItems.liItem5}</li>}
                  {item.listItems.liItem6 && <li>{item.listItems.liItem6}</li>}
                  {item.listItems.liItem7 && <li>{item.listItems.liItem7}</li>}
                </ul>
              )}
              {item.imgUrl && <img src={item.imgUrl} width={300}></img>}
              {item.conclusion1 && <p>{item.conclusion1}</p>}
              {item.conclusion2 && <p>{item.conclusion2}</p>}
            </>
          )}
        </div>
      ))}
      <Delivery />
    </>
  );
};

export default ProductsDescription;
