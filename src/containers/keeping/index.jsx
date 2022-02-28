import React from 'react';
import "./index.css"
import {Card} from 'react-bootstrap' 
import Img from './salom.jpg'
function Index() {
    
    return (
        <div >
            <Card className="bg-dark text-white" style={{textAlign:'end', borderRadius:"0px", border:'none', marginTop:"50px", marginBottom:"30px"}}>
                <Card.Img src={Img} style={{height:'580px', opacity:"0.3"}} alt="Card image" />
                <Card.ImgOverlay style={{paddingRight:'80px', paddingTop:'120px'}}>
                    <Card.Title style={{fontSize:'50px'}}>How we're keeping you <br/> safe during COVID-19</Card.Title>
                    <Card.Text style={{fontSize:'20px'}}>
                    As an outdoor shop, we've taken precautionary <br /> measures to ensure the safety of all our <br /> customers and team members.
                    </Card.Text>
                    <Card.Text><button id="but" style={{fontWeight:'600', width:"240px", height:"40px", padding:'0px 5px', fontSize:"15px", border:'none', borderRadius:'5px'}}>Read Our Statement</button></Card.Text>
                </Card.ImgOverlay>
                </Card>
        </div>
    );
}

export default Index;