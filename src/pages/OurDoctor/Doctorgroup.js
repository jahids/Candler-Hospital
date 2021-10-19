import React from 'react';

const Doctorgroup = (props) => {
    const   {name, dgree, medical, time, img} = props.Alldoctor;
    return (
        <div class="col-md-4 mb-5 h-100">
                <div class="card-sl">
                    <div class="card-image">
                        <img
                            src={img}/>
                    </div>

                    <a class="card-action" href="#"><i class="fa fa-heart"></i></a>
                    <div class="card-heading">
                       {name}
                    </div>
                    <div class="card-text">
                        {medical}
                    </div>
                    <div class="card-text">
                        {dgree}
                    </div>

                    <div class="card-text">
                        {time}
                    </div>

                   
                    <a href="#" class="card-button">Contact</a>
             
        </div>  
        </div>
    );
};

export default Doctorgroup;