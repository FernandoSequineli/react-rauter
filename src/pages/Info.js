import { useParams } from "react-router-dom";

const Info = () => {
  const { id } = useParams();

  return (
    <div>
      <h4>More information about product ID: {id}</h4>
    </div>
  );
};

export default Info;
