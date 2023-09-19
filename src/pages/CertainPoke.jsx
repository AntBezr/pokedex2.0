import "./style/CertainPoke.css";

import React, { useEffect, useState } from "react";

import Loader from "../components/UI/Loader";
import ParallaxPoke from "../components/ParallaxPoke";
import axios from "axios";
import { useParams } from "react-router-dom";

function CertainPoke() {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [pokeData, setData] = useState([]);
  const [pokeImage, setImage] = useState()

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${params.certainPoke}`)
      .then((res) => {
        setData(res.data);
        if (res.data.sprites?.other.dream_world.front_default == null) { setImage(res.data.sprites?.other.home.front_default) }
        else { setImage(res.data.sprites?.other.dream_world.front_default) }
      });


    setIsLoading(false);
  }, []);



  if (isLoading) {
    return (<Loader />)
  } else
    return (
      <div className="aboutPoke">
        <ParallaxPoke
          image={pokeImage}
          name={pokeData.name}
          pokeData={pokeData}
        />
      </div >
    );
}

export default CertainPoke;
