import { click } from '@testing-library/user-event/dist/click';
import React from 'react'

const ClickablePicture = ({img,imgClicked}) => {

    const [image, setImage] = useState(img);
    const [Iclick, setIclick] = useState(true);
    function click(e) {
        e.preventDefault();

        if(Iclick)
        {
            setImage(imgClicked);
            setIclick(false);

        }
        else {
            setImage(img);
            setIclick(true);
        }
      }

  return (
    <div>
        <img src={image} onClick={ () => click }> </img>
    </div>
  )
}

export default ClickablePicture