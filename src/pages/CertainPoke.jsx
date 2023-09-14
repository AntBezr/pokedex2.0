import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loader from "../components/UI/Loader";
import "./style/CertainPoke.css";
import ParallaxPoke from "../components/ParallaxPoke";

function CertainPoke() {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [pokeData, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${params.certainPoke}`)
      .then((res) => {
        setData(res.data);

      });

    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="aboutPoke">
      <ParallaxPoke
        image={pokeData.sprites?.other.dream_world.front_default}
        name={pokeData.name}
        pokeData={pokeData} />
    </div >
  );
}

export default CertainPoke;
