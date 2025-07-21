import { AcardionButton } from "../Buttons/Buttons";

const Filters = () => {
  return (
    <div>
      <AcardionButton children="Фільтр" />
      <div className="mb-5 mt-3 max-w-65 ">
        <select className="w-65 h-7 text-center border-gray-200 border-1 rounded opacity-80 focus:border-blue-400 mb-5 " name="" id="">
          <option value="">За ціною (зростання)</option>
          <option value="">За ціною (зменшення)</option>
          <option value="">За рейтингом (зростання)</option>
          <option value="">За рейтингом (зменшення)</option>
        </select>

        <AcardionButton children="Країна виробник" />
        <AcardionButton children="Смак " />
        <AcardionButton children="Димність " />
        <AcardionButton children="Кислість " />
        <AcardionButton children="Міціність " />
        <AcardionButton children="Пряність " />
        <AcardionButton children="Свіжість " />
        <AcardionButton children="Сладкість " />
        <AcardionButton children="Статус наявності " />
        <AcardionButton children="Рейтинг " />
      </div>
    </div>
  );
};

export default Filters;
