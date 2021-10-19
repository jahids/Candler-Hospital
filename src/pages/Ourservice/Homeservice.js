import React from 'react';
import { Link } from 'react-router-dom';
import "./homeservice.css";


const Homeservice = (props) => {
         const {title, body,img,detalis,id} = props.post;
    return (

       
            <div class="col-md-4 mb-5 ">
                <div class="card-sl">
                    <div class="card-image">
                        <img width="500px"
                        height="300px"
                            src={img}/>
                    </div>

                    <a class="card-action" href="#"><i class="fa fa-heart"></i></a>
                    <div class="card-heading">
                       {title}
                    </div>
                    <div class="card-text">
                        {body}
                    </div>
                    <div class="card-text">
                      
                    </div>
                    <Link to={`detiles/${id}`} >
                    <a  class="card-button">See All Detiles</a>
                    </Link>

                
        </div>  
        </div>


    );
};

export default Homeservice;