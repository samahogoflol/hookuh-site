import { Link } from "react-router-dom";

const CleverHeader = () => {
  return (
    <>
      <nav className="flex mt-1">
        <ul className="flex gap-8 font-bold text-[1.1rem] justify-start cursor-pointer">
          <Link to={`/electonnicCigarette`}>
            <li>Електронні сигарети</li>
          </Link>
          <Link to={`/tabacco`}>
            <li>Тютюн</li>
          </Link>
          <Link to={`/liquids`}>
            <li>Рідини</li>
          </Link>
          <Link to={`/hookahs`}>
            <li>Кальяни</li>
          </Link>
          <Link to={`/coal`}>
            <li>Вугілля</li>
          </Link>
          <Link to={`/hookah-accessories`}>
            <li>Аксесуари для кальяну</li>
          </Link>
          <Link to={`/hookah-shafts`}>
            <li>Шахти для кальяну</li>
          </Link>
          <Link to={`/snus`}>
            <li>Снюс</li>
          </Link>
        </ul>
        <span className=" font-bold text-[1.1rem] ml-62 cursor-pointer">Пошук</span>
      </nav>
      <hr className=" mt-2 opacity-10  h-0.5 bg-black" />
    </>
  );
};

export default CleverHeader;
