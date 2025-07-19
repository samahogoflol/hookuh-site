const CleverHeader = () => {
  return (
    <>
      <nav className="flex mt-1">
        <ul className="flex gap-8 font-bold text-[1.1rem] justify-start cursor-pointer">
          <li>Електронні сигарети</li>
          <li>Тютюн</li>
          <li>Рідини</li>
          <li>Кальяни</li>
          <li>Вугілля</li>
          <li>Аксесуари для кальяну</li>
          <li>Шахти для кальяну</li>
          <li>Снюс</li>
        </ul>
        <span className=" font-bold text-[1.1rem] ml-62 cursor-pointer">Пошук</span>
      </nav>
      <hr className=" mt-2 opacity-10  h-0.5 bg-black" />
    </>
  );
};

export default CleverHeader;
