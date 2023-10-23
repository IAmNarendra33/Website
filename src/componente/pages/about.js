import React from 'react'
import { Col, Row , Card, Container} from 'react-bootstrap'



const About = () => {
  return (
    <div>
      <section className='section border-top'>
         <div className='container'>
          <div className='row'>
            <div>
              <div className='col-md-12 mb-4 text-center'>
               <h1 className='main-heading'>Our Servies</h1> 
               <div className='underline mx-auto '></div>
                </div>
                <Container>
                
                <Row>
                  <Col>
                  <Card.Img style={{ width: '30rem' }} src='https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?cs=srgb&dl=pexels-william-choquette-1954524.jpg&fm=jpg'/>
                     <Card.Body>
              <Card.Title>Runing Treadmill </Card.Title>
                  
               <Card.Text >
               A treadmill is a stationary exercise machine that features a walking or running belt designed for indoor cardio exercise. Many treadmills offer a range of speed and incline settings, making them accessible pieces of fitness equipment for individuals at any cardio fitness level
        
                 </Card.Text>
                </Card.Body>
                  </Col>
                
                  <Col>
                  <Card.Img style={{ width: '30rem' }} src='https://img.freepik.com/premium-photo/gym-with-bench-sign-that-says-gym_867452-2153.jpg '/>
                     <Card.Body>
              <Card.Title>Our Gym </Card.Title>
                  
               <Card.Text >
               Our gym is a place where people go to train and exercise, but also to unwind, socialize, and recharge. Therefore, a good gym is a facility that promotes physical activity, provides a safe, functional, and comfortable workout environment, and creates a pleasant and enjoyable atmosphere for recreation and socialization
        
                 </Card.Text>
                </Card.Body>
                  </Col>
                  <Col>
                  <Card.Img style={{ width: '30rem' }} src='https://i.pinimg.com/1200x/73/16/32/731632e44bdf21489d4d7632e59a8894.jpg '/>
                     <Card.Body>
              <Card.Title> Personal Trainer</Card.Title>
                  
               <Card.Text >
               Prospective Personal Trainers must have great people skills, a willingness to learn, and a strong desire to help others achieve optimal results. An ideal candidate must have a passion for fitness, demonstrate a drive for success, and a history of commitment, delivering results and motivating clients
        
                 </Card.Text>
                </Card.Body>
                  </Col>
                  <Col>
                  <Card.Img style={{ width: '30rem' }} src='https://5.imimg.com/data5/SELLER/Default/2022/10/DI/PI/GP/29338602/natural-mass-gainer-high-protein-supplement-powder-500x500.jpg '/>
                     <Card.Body>
              <Card.Title>Protein powder</Card.Title>
                  
               <Card.Text >
               Protein powders are powdered forms of protein that come from plants (soybeans, peas, rice, potatoes, or hemp), eggs, or milk (casein or whey protein). The powders may include other ingredients such as added sugars, artificial flavoring, thickeners, vitamins, and minerals.
        
                 </Card.Text>
                </Card.Body>
                  </Col>
                  <Col>
                  <Card.Img style={{ width: '25rem' }} src='https://ih1.redbubble.net/image.3172140129.2852/st,small,507x507-pad,600x600,f8f8f8.jpg'/>
                     <Card.Body>
              <Card.Title>Motivational Speaker </Card.Title>
                  
               <Card.Text >
               Motivational speakers give informative and inspirational speeches to large groups of people. They are hired by schools, government agencies or businesses to speak on topics such as achieving financial success, living a healthy lifestyle or creating balance between work and lifestyle
        
                 </Card.Text>
                </Card.Body>
                  </Col>
                  <Col>
                  <Card.Img style={{ width: '30rem' }} src='https://images4.alphacoders.com/112/1128335.jpg '/>
                     <Card.Body>
              <Card.Title>Good Vibes </Card.Title>
                  
               <Card.Text >
               
                   Sweat now, shine later. Rest when you're done! Stronger body, stronger mind. Someday your hardest workout will be your warmup
        
                 </Card.Text>
                </Card.Body>
                  </Col>
                </Row>
                
              </Container>
            </div>
          </div>
         </div>
      </section>
    </div>
  )
}

export default About
