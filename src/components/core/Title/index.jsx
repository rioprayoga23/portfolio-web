const CTitle = ({ name }) => {
  return (
    <h2
      className={`text-lg md:text-xl font-bold underline mb-3 uppercase hover`}
    >
      {name}
    </h2>
  );
};

export default CTitle;
