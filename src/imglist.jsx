import React from "react";
import photo1 from './photo1.jpg';
import { base64Photo } from './Contant';
export default function ImgList() {
    return(
        <div>
            <div>
            Đây là hướng dẫn dùng ảnh trong ReactJS
            </div>
            <img src={photo1} width="200" height = "100" className='img'></img>

            <div className='require-title'>Đây là ảnh dùng require</div>
            <img src ={require('./photo1.jpg')} width="200" height = "100" className='img2'/>

            <div>Day la anh dung link</div>
            <img src ='https://i.imgur.com/0BJobQo.jpg'width="200" height = "100" className='img2'></img>

            <div>Đây là ảnh dùng base64</div>
            <img src={base64Photo} className='img3'width="200" height = "100"/>
    
    </div>
    );
}