import "./RadioBtn.css"

const RadioBtn = ({ stateGenerationChanger, selectedRadioBtn, updateSelectedBtn }) => {

  const generationObj = [
    { "limit": 151, "offset": 0 },
    { "limit": 100, "offset": 151 },
    { "limit": 135, "offset": 251 },
    { "limit": 107, "offset": 386 },
    { "limit": 156, "offset": 493 },
    { "limit": 72, "offset": 649 },
    { "limit": 88, "offset": 721 },
    { "limit": 96, "offset": 809 },
    { "limit": 10000, "offset": 905 }
  ]

  const radioBtnHandler = (e) => {

    stateGenerationChanger(generationObj[Number(e.target.id) - 1])
    updateSelectedBtn(Number(e.target.id))

  }
  return (
    <div className="radio">
      <h2>Choose generation: </h2>

      <input
        type="radio"
        id="1"
        name="generations"
        value="1"
        onChange={radioBtnHandler}
        defaultChecked={selectedRadioBtn === 1} />
      <label htmlFor='1'>1</label>
      <input
        type="radio"
        id="2"
        name="generations"
        value="2"
        onChange={radioBtnHandler}
        defaultChecked={selectedRadioBtn === 2} />
      <label htmlFor='2'>2</label>
      <input
        type="radio"
        id="3"
        name="generations"
        value="3"
        onChange={radioBtnHandler}
        defaultChecked={selectedRadioBtn === 3} />
      <label htmlFor='3'>3</label>
      <input
        type="radio"
        id="4"
        name="generations"
        value="4"
        onChange={radioBtnHandler}
        defaultChecked={selectedRadioBtn === 4} />
      <label htmlFor='4'>4</label>
      <input
        type="radio"
        id="5"
        name="generations"
        value="5"
        onChange={radioBtnHandler}
        defaultChecked={selectedRadioBtn === 5} />
      <label htmlFor='5'>5</label>
      <input
        type="radio"
        id="6"
        name="generations"
        value="6"
        onChange={radioBtnHandler}
        defaultChecked={selectedRadioBtn === 6} />
      <label htmlFor='6'>6</label>
      <input
        type="radio"
        id="7"
        name="generations"
        value="7"
        onChange={radioBtnHandler}
        defaultChecked={selectedRadioBtn === 7} />
      <label htmlFor='7'>7</label>
      <input
        type="radio"
        id="8"
        name="generations"
        value="8"
        onChange={radioBtnHandler}
        defaultChecked={selectedRadioBtn === 8} />
      <label htmlFor='8'>8</label>
      <input
        type="radio"
        id="9"
        name="generations"
        value="9"
        onChange={radioBtnHandler}
        defaultChecked={selectedRadioBtn === 9} />
      <label htmlFor='9'>9</label>
    </div>
  );
};

export default RadioBtn;