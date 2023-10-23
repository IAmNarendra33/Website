import React from 'react';
import Slider from '../inc/Slider'; 
import { Row ,Col,Card,Button } from 'react-bootstrap';


const Home = () => {
  return (
    <div>
      <Slider/>
      
      <Col>
      <Card.Text className='text-center bg-dark py-2 my-2 text-white'> NO PAIN, NO GAIN  </Card.Text>
      </Col>
      
    <Row className='py-4 '>
    <Col className=''>
         <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="https://stat4.bollywoodhungama.in/wp-content/uploads/2016/09/Vidyut-Jammwalnews.jpg" />
      <Card.Body>
        <Card.Title>Inpristion</Card.Title>
       
        <Card.Text >
        Vidyut Jammwal is an Indian film actor who predominantly works in Hindi films. He is also a trained martial artist, having learned Kalaripayattu (a martial art of Kerala) since the age of three. He is popularly known as "The New Age Action Hero of Bollywood". 
        He has also worked in Kollywood and Tollywood films.he is a good & kind person also Like everyone.Gym owners have a wide variety of responsibilities.They need to manage and motivate their staff.
        
        </Card.Text>
        <a href='https://www.imdb.com/name/nm4651098/ '>
          <Button variant="primary">Read More</Button>
          </a>
      </Card.Body>
    </Card>
    </Col>
    <Col>
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://p4.wallpaperbetter.com/wallpaper/524/512/963/bodybuilder-computer-hd-download-wallpaper-preview.jpg" />
      <Card.Body>
        <Card.Title>Owner</Card.Title>
        
        <Card.Text >
        Gym owners have a wide variety of responsibilities. They need to manage and motivate their staff, make sure the bills and staff wages are paid each month, and implement strategies to ensure that the gym obtains new members and retains current members .
        he is a good & kind person also Like everyone.Gym owners have a wide variety of responsibilities.They need to manage and motivate their staff.
        </Card.Text>
        <a href=' '>
          <Button variant="primary">GO PROFILE</Button>
          </a>
      </Card.Body>
    </Card>
    </Col>
    <Col>
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://hindi.starsunfolded.com/wp-content/uploads/2023/09/Ankit-Baiyanpuria.jpg" />
      <Card.Body>
        <Card.Title>Brand Ambassador</Card.Title>
        <Card.Text >
         Ankit Baiyanpuria, a former desi wrestler from Bayanpur, Sonipat, is a fitness influencer who has garnered 6.9 million followers on his Instagram profile.
         He is known for starting a 75-day hard challenge to imbibe the culture of fitness among the youth.
        
        </Card.Text>
        <a href='https://www.youtube.com/channel/UCSvoZtSPcju-jTBwxwh_29A '>
          <Button variant="primary">Read More</Button>
          </a>
      </Card.Body>
    </Card>
    </Col>
    {/* <Col>
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://hindi.starsunfolded.com/wp-content/uploads/2023/09/Ankit-Baiyanpuria.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text >
         Ankit Baiyanpuria, a former desi wrestler from Bayanpur, Sonipat, is a fitness influencer who has garnered 4.9 million followers on his Instagram profile.
         He is known for starting a 75-day hard challenge to imbibe the culture of fitness among the youth.
        
        </Card.Text>
        <a href='https://www.youtube.com/channel/UCSvoZtSPcju-jTBwxwh_29A '>
          <Button variant="primary">Read More</Button>
          </a>
      </Card.Body>
    </Card>
    </Col> */}
    </Row>
      
    </div>
  );
}

export default Home;
