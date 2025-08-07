import BtnAccardion from "../Buttons/BtnAccardion";

const Filters = () => {
  return (
    <div>
      <BtnAccardion children="Фільтр" />
      <div className="mb-5 mt-3 max-w-65 ">
        <select className="w-65 h-7 text-center border-gray-200 border-1 rounded opacity-80 focus:border-blue-400 mb-5 " name="" id="">
          <option value="">За ціною (зростання)</option>
          <option value="">За ціною (зменшення)</option>
          <option value="">За рейтингом (зростання)</option>
          <option value="">За рейтингом (зменшення)</option>
        </select>

        <BtnAccardion children="Країна виробник" />
        <BtnAccardion children="Смак " />
        <BtnAccardion children="Вага" />
        <BtnAccardion children="Димність " />
        <BtnAccardion children="Жаростійкість" />
        <BtnAccardion children="Кислість " />
        <BtnAccardion children="Міціність " />
        <BtnAccardion children="Пряність " />
        <BtnAccardion children="Рекомендована Чаша " />
        <BtnAccardion children="Свіжість " />
        <BtnAccardion children="Сладкість " />
        <BtnAccardion children="Статус наявності " />
        <BtnAccardion children="Рейтинг " />
      </div>
    </div>
  );
};

export default Filters;
