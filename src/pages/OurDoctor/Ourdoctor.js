import React, { useEffect, useState } from 'react';
import Doctorgroup from './Doctorgroup';
import Detiles from '../../pages/Detiles'

const Ourdoctor = () => {
    const [doctor, setdoctor] = useState([]);

    useEffect(()=> {
        
        fetch('./doctordb.json')
        .then(res => res.json())
        .then(data => setdoctor(data))


    },[])
    return (
        <div>

            <div className="container mt-5 ">
    <div class=" row row-cols-12 row-cols-md-3 g-4">
           
            {
                doctor.map(doctors => <Doctorgroup
                    key={doctors.id}
                    Alldoctor={doctors}
                   ></Doctorgroup>)
                
            }
     
       </div>
       </div>

        </div>
    );
};

export default Ourdoctor;