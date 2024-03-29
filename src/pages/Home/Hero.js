import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Homeservice from '../Ourservice/Homeservice';


const img1 = "https://i.ibb.co/Z6gscFK/Doctor-with-a-stethoscope-in-the-hands-and-hospital-background.jpg";
const img2 = "https://i.ibb.co/F75YVnS/5438645.jpg";
const img3 = "https://i.ibb.co/Qd8JsXQ/doctor-standing-with-folder-stethoscope.jpg";


const Hero = () => {
    const [product, setproduct] = useState([]);

    useEffect(()=> {
        
        fetch('./fakedb.json')
        .then(res => res.json())
        .then(data => setproduct(data))


    },[])


    return (
        <>
         
            <Carousel className="mb-4 bg-dark ">
                <Carousel.Item >
                    <img
                        className="d-block h-70 w-100 rounded"
                        src="https://i.ibb.co/b549f6B/blood-g3b2ff7911-1280.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/SwxBwz2/human-skeleton-gdf43e5413-1280.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block  w-100"
                        src="https://i.ibb.co/bgdrVsF/dna-g335f3f09b-1920.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

      
    <h2> Our services</h2>
    {/* <div class="row row-cols-1 row-cols-md-3 g-4"> */}
    <div className="container">
    <div class=" row row-cols-12 row-cols-md-3 g-5">
           
            {
                product.map(datas => <Homeservice
                    key={datas.id}
                    post={datas}
                   ></Homeservice>)
                
            }
     
       </div>
       </div>
  
   



<div class="container"> 
        <div class="row justify-content-md-center align-items-center text-center mb-lg-5 mb-4 pb-lg-5 aos-init aos-animate" data-aos="fade-left" data-aos-easing="linear" data-aos-delay="50">
            <div class="col-md-6 px-md-5"> 
				<i class="fab fa-connectdevelop display-4 text-primary mb-4"></i> 
                <h2 class="mb-md-4 mt-3">We are Top Medical in the World</h2>
                <p class="text-muted">At Imperial Hospital we begin by hiring the best available personnel in all professional categories. But, we go beyond that in the interest of our customers (patients, physicians, other providers and the public) and our personnel. Imperial Hospital provides its employees initial orientation and training beyond the scope usually found in Bangladesh hospitals. Then each employee is provided a Continuing Education Program profile specific to the duties, roles and responsibilities of their job. This Staff Training and Development is provided to all clinical and non-clinical personnel.

This “Training and Development Mentality” within Imperial Hospital ensures our entire human resource base is prepared at all times to provide great Customer Service to their internal and external customers. No less important, our hospital is committed to helping its entire staff see themselves as true hospital and health service professionals.</p>
                <div class="mb-md-5 mb-4">
                    <a href="#" class="btn btn-primary btn-pill">Read More</a>
                </div>
            </div>
            <div class="col-md-6">
                <img class="rounded mw-100" src="https://media-exp1.licdn.com/dms/image/C4D1BAQHtpb-POyxhEg/company-background_10000/0/1617126402893?e=2159024400&v=beta&t=Jyo7hJCea4UcJFn_D5erQMRCLaANOkfaneBqBYha11k" alt=""/>
            </div>
        </div> 
        
    </div>


  
        </>
    );
};

export default Hero;