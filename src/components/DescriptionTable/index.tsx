interface DescriptonTableProps {
  title: string;
  description: string;
}

const DescriptionTable: React.FC<DescriptonTableProps> = ({ title, description }) => {
  return (
    <>
      <section className="flex justify-between ">
        <h2>{title}</h2>
        <p className="font-bold">{description}</p>
      </section>
      <hr className="border-gray-200 mb-1" />
    </>
  );
};

export default DescriptionTable;
