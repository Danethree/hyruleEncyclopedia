import {Container,Row,Col,Figure,Button} from 'react-bootstrap'

import Header from '../../Components/Header';

import zelda from "../../images/botw.jpg"
import menu from "../../images/menu-toolbar.png"
import searchImg from "../../images/search-field.png"
import searchResult from "../../images/results.png"
import Image from 'react-bootstrap/Image'

export default function Home() {
  return (
    <>
   
      <Container fluid >       
      <Container  	
      >
        <br/>  
        <Col sm={12}>
          <h2> Welcome to Hyrule Encyclopedia!</h2>  <br/>
        </Col>
        <Col sm={12}>
        <Figure.Image thumbnail className = "rounded" fluid src = {zelda}
        
        />
        <Figure.Caption>
         The Legend of Zelda: Breath of the Wild - 2017
  </Figure.Caption>
        </Col>
        <br/> 
        <Col sm={12}>
        <p className="lead">
            You will find a variety of creatures, monsters and items that surround the Hyrule field on 
            The Legend of Zelda: Breath of the wild.  
        </p>
        </Col>

        <Col sm={12}>
          <h3> How do I browse on website?</h3>  <br/>
          <p className="lead">
           To browse on website is very simple. On <b>menu toolbar</b> click on <b>Search </b>
            to start the search:

        </p>
        <Figure.Image className = "shadow-lg p-3 mb-5 bg-white" rounded fluid src = {menu}
          width={600}
          height={600}
        />

        <p className="lead">
           After that, yor have five categories to search:
        </p>
        <ul>
            <li className = 'lead'>
                Creatures
            </li>
            <li className = 'lead'>
                Equipment
            </li>
            <li className = 'lead'>
                Materials
            </li>
            <li className = 'lead'>
                Monsters
            </li>
            <li className = 'lead'>
                Treasure
            </li>
        </ul>
        <p className="lead">
           Choose one of these and type an element that belongs to the chosen category: 
        </p>
        <Figure.Image className = "shadow-lg p-3 mb-5 bg-white" rounded fluid 
        src = {searchImg}
        width={500}
        height={300}
        />
        <p className = 'lead'>
        After that you may be able to see the results:
        </p>
        <Figure.Image className = "shadow-lg p-3 mb-5 bg-white" rounded fluid 
        src = {searchResult}
        width={700}
        height={600}
        />
        </Col>


     
       <br/>
      
    
    </Container>
  
   
    </Container>
    </>
  );
}

