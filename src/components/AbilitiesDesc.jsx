import { useEffect, useState } from "react"

import Loader from '../components/UI/Loader'
import axios from "axios";

const AbilitiesDesc = ({ abilName, url }) => {

  const [abilDescription, setAbilDescription] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    axios
      .get(`${url}`)
      .then((res) => {
        res.data.effect_entries?.map((effect) => { if (effect.language.name === "en") { setAbilDescription(effect.effect) } })
      });
    setIsLoading(false)
  }, [])

  if (isLoading) { <Loader /> }
  else
    return (
      <div>
        <h2>{abilName}</h2>
        <h3>{abilDescription}</h3>
      </div>
    );
};

export default AbilitiesDesc;