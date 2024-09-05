import React from 'react'; 
import { Image } from 'primereact/image';
import Image1 from '../assets/Img_2.jpg';

export default function PreviewDemo() {
    return (
        <div className="card flex justify-content-center">
            <Image src={Image1} alt="Image" width="250" preview />
        </div>
    )
}