

import {Container,InputGroup,FormControl,Button,Figure} from 'react-bootstrap'
import {useState,useEffect} from 'react'
import api from '../../services/api'
export default function Search()
{
    const [text,setText] = useState(''); 
    const [result,setResult] = useState(null)
    const  [click,setClick] = useState(false);

    function handleChange (e)
    {
        setText(e.target.value)
        {console.log(text)}
    }
    
  function handleClick()
  {

     async function loadApi(){
        const response = await api.get(`entry/${text}`)
       
        setResult(response.data);
        console.log(result.data.description);
      
    }

    loadApi();
   
  }
  
    return(
        <Container fluid>
            <br/> <br/>
            <Container fluid = 'md' >
         
          <InputGroup className="mb-3" size = "lg">
                <InputGroup.Text id="inputGroup-sizing-default">

                <span class="material-icons">
                    search
                    </span>
                    
                </InputGroup.Text>
                <FormControl 
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                placeHolder = "Search for anything about Hyrule. Example: horse"
                value = {text}
                onChange = {handleChange}
                >
            
                </FormControl>
                <Button variant="dark"
                onClick = {handleClick}
                
                >Search</Button>{' '}
                </InputGroup>
               
                 <br/> <br/>      <br/> <br/>

          </Container>

        <Container 
        style = {{
                  display:'flex',
                  justifyContent:'center'}}>
        {result ? (
          <Figure>
          <Figure.Image className = 'rounded'
            width={280}
            height={280}
            alt="171x180"
            src={result.data.image}
          />
          <Figure.Caption>
           <h1> {result.data.name}</h1> <br/>
           <h4>Description:</h4> <br/>
            <p className = 'lead'>{result.data.description} </p>
            <h4>Locations:</h4> <br/>
            <p className = 'lead'>
            {result.data.common_locations} </p>
          </Figure.Caption>
        </Figure>
      


        ):null}
                             
                         
            
        </Container>

            
        </Container>
    )
}