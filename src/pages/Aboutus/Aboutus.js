import React from 'react';
import { Carousel, Col, Container, Navbar, Row } from 'react-bootstrap';

const img = `https://radiustheme.com/demo/wordpress/themes/digeco/wp-content/uploads/2020/01/feature1.png`;

const img1 = `https://i.pinimg.com/originals/b5/9d/b1/b59db1bd3ca872d2077cf5c9ccb8598c.jpg`;
const img4 = `https://w7.pngwing.com/pngs/76/198/png-transparent-medicine-health-care-clinic-therapy-disease-medical-technology-background-black-stethoscope-blue-hand-people.png`;
const img2 = "https://cdn.pixabay.com/photo/2016/11/08/05/29/surgery-1807541__340.jpg";
const img3 = "https://storage-prtl-co.imgix.net/endor/articles/1801/images/1539001698_medicine%20pic%201.jpg?max-w=660&max-h=532&fit=crop&auto=format,compress&q=40";


const Aboutus = () => {
    return (
        

      <div>

            <Navbar/>
            <Container className="p-5">
                <Row className="d-flex align-items-center">
                    <Col lg={6} md={6} xs={12}>
                        <img className="w-100" src={img1} alt="" />



                  </Col>
                    <Col lg={6} md={6} xs={12}>
                        <h3>About Us</h3>
                        <p>Coder Townsville learning, is the delivery of learning and training through digital resources. Although eLearning is based on formalized learning, it is provided through electronic devices such as computers, tablets and even cellular phones that are connected to the internet. E-learning definition is defined as providing Training and development to the Students/Employees through various Electronic media such as the Internet, audio, video etc. Web-based learning is meant by e-learning which commonly referred to as electronic learning or Virtual learning.</p>
                    </Col>
                </Row>
            </Container>  
         </div>
        
    
    );
};

export default Aboutus;