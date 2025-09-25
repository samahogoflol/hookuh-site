interface AcardionProps {
  title: string;
  description: string;
}

const Acardion: React.FC<AcardionProps> = ({ title, description }) => {
  return (
    <>
    <h2>test changes</h2>
      <section className="shadow-lg p-6 mt-10">
        <h2 className="text-2xl font-medium  mb-7">
          <span className="opacity-30 font-bold">+</span> {title}
        </h2>
        <p>{description}</p>
      </section>
      <h1></h1>
    </>
  );
};

export default Acardion;
