import { useEffect } from "react";
import { useParams } from "react-router-dom";

const PlayerPage = () => {
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
  }, [id]);

  return (
    <>
      <h1>Player Page</h1>
      <p>Player ID: {id}</p>
    </>
  );
};

export default PlayerPage;
