import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../common/data.json'

class AnimateBg extends React.Component {


 render(){

   const defaultOptions = {
     loop: true,
     autoplay: true,
     animationData: animationData,
     rendererSettings: {
       preserveAspectRatio: 'xMidYMid slice'
     }
   };

   return(
     <div className="heroBg">
       <Lottie options={defaultOptions}
       />
     </div>
   )
 }
}

export default AnimateBg