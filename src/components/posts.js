import {CgProfile} from "react-icons/cg";
import images from "../data/images";


const Posts = ()=>
{
    return(
        <div className="posts-container">
            <div className="posts-details">

                <CgProfile className="post-item-logo" />
            
             <span>   <h3>#Random</h3>
                <p><span>1,23,45,678</span>views</p>
                <button className="follow-btn">Follow</button></span>
            </div>
         
        <div className="sardar">
            {images.map(e=>{
                return(
                    <div>
                        <img className="imgs" src={e.download_url}/>                    
                        <p> Author:{e.author}</p>    
                    </div>
                )
            })

            }
   </div>
            
        </div>
    )
}

export default Posts;

