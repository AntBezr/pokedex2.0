import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './style/ParallaxPoke.css'
import PokeInfo from './PokeInfo'
import { useNavigate } from 'react-router-dom';
import stones from '../images/parallax/1stones.png' 
import field from '../images/parallax/2field.png' 
import lake from '../images/parallax/3lake2.png' 
import rock from '../images/parallax/4rock.png' 
import forest from '../images/parallax/5forest.png' 
import mountains from '../images/parallax/6mountains.png' 
import clouds from '../images/parallax/7clouds.png' 
import sky from '../images/parallax/8sky2.png' 

const ParallaxPoke = ({ image, name, pokeData }) => {
  const navigation = useNavigate()

  return (
    <div  >
    <Parallax pages={2} className='animation' style={{height: "80vh"}} > 

       <ParallaxLayer offset={0} speed={0} className='animationLayer parallax' id='sky'> 
          <img src={sky} className='parallaxPic' alt="sky" />
         </ParallaxLayer> 

        <ParallaxLayer offset={0} speed={0.1} className='animationLayer parallax' id='clouds'>
        <img src={clouds} className='parallaxPic' alt="clouds" />
        </ParallaxLayer> 

         <ParallaxLayer offset={0} speed={0.2} className='animationLayer parallax' id='mountains'> 
        <img src={mountains} className='parallaxPic' alt="mountains" />
         </ParallaxLayer> 

         <ParallaxLayer offset={0} speed={0.4} className='animationLayer parallax' id='forest'> 
        <img src={forest} className='parallaxPic' alt="forest" />
        </ParallaxLayer> 
 
        <ParallaxLayer offset={0} speed={0.6} className='animationLayer parallax' id='rock'> 
        <img src={rock} className='parallaxPic' alt="rock" />
         </ParallaxLayer> 

        <ParallaxLayer offset={0} speed={0.7} className='animationLayer parallax' id='lake'> 
        <img src={lake} className='parallaxPic' alt="lake" />
        </ParallaxLayer> 

        <ParallaxLayer offset={0} speed={0.8} className='animationLayer parallax' id='field'> 
        <img src={field} className='parallaxPic' alt="field" />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.9} className='animationLayer parallax' id='pokemon'> 
          <img
            src={image}
            alt={name}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1} className='animationLayer parallax' id='stones'> 
        <img src={stones} className='parallaxPic' alt="stones" />
         </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0} className='animationLayer parallax' id='info'> 
          <div className="description">
            <PokeInfo
              stats={pokeData.stats}
              types={pokeData.types}
              name={pokeData.name}
            />
            <button onClick={() => navigation("/pokedex")}>Go back </button>
          </div>
      </ParallaxLayer> 
     </Parallax> 
    </div>
  );
};

export default ParallaxPoke;


