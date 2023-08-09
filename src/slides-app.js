import './App.css';
import { useState } from 'react';
import { slides } from './slides';


function SpainSlides() {
    const [photo, setPhoto] = useState(3);
    const {id, title, image} = slides[photo];

    const previousPhoto = () =>  {
        setPhoto((photo => {
            photo--;
            if(photo < 0) {
                return slides.length -1 ;
            }
            return photo;
        }))
    }

    const nextPhoto = () => {
        setPhoto((photo => {
            photo++;
            if(photo > slides.length -1) {
                photo = 0;
            }
            return photo;
        }))
    }

    return(
        <div key={id} className='image-slides'>
            
            <div>
            <button onClick={previousPhoto} className='previousBtn'>⇦</button>
            </div>

            <div>
                <img src={image} width="400px" height="550px" alt='spain' />
                <p className='heading'>{title}</p>
            </div>

            <div>
                <button onClick={nextPhoto} className='nextBtn'>⇨</button>
            </div>
        </div>
    )
}

export default SpainSlides;