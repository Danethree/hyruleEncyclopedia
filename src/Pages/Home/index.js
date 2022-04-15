import {Container,Row,Col,Figure,Button} from 'react-bootstrap'

import Header from '../../Components/Header';
import zelda from "../../images/botw.jpg"
import Image from 'react-bootstrap/Image'

export default function Home() {
  return (
    <>
   
      <Container fluid >       
      <Container  	
      >
        <br/>  
        <Col sm={12}>
         
          <h2>
        
         
           Welcome to Hyrule Encyclopedia!
       
        
          </h2>
         
          <br/>
    
        </Col>
       
        <Col sm={12}>
        
        <p className="text-body">
        You find a variety of creatures that surround the Hyrule field on 
             The Legend of Zelda: Breath of the wild.
            
          </p>
       
     
        
         
        </Col>
        <Col sm={12}>
        <Figure.Image className = "rounded" fluid src = {zelda}
        
        />
        <Figure.Caption>
         The Legend of Zelda: Breath of the Wild - 2017
  </Figure.Caption>
        </Col>
       <br/>
      
    
    </Container>
  
   
    </Container>
    </>
  );
}

