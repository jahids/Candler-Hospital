import React, { useEffect, useState } from 'react';
import { Col, Container, Navbar, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const Detiles = () => {
    
    const {id} = useParams();
    const [dtl,setdtl] = useState([]);

    useEffect(()=>{
        
        fetch('/fakedb.json')
        .then(res => res.json())
        .then(data => setdtl(data))


    },[])

    const fullDls = dtl?.find(details => details?.id == id);
   
    


    

    return (
        <div class="container p-5">

            <Navbar/>
            <Container className="p-5">
                <Row className="d-flex align-items-center">
                    <Col lg={6} md={6} xs={12}>
                        <img className="rounded mw-100 w-100" src={fullDls?.img} alt="" />



                  </Col>
                    <Col lg={6} md={6} xs={12}>
                        <h1>{fullDls?.title}</h1>
                        <h4>{fullDls?.body}</h4>
                         
                        <p>{fullDls?.detalis}</p>
                    </Col>
                </Row>
            </Container>  
         </div>
        

    

      


    );
};

export default Detiles;