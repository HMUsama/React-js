import React,{Component} from 'react';
import { Prompt } from 'react-router-dom';
import firebase from '../../config/Firebase';
import Juice from '../../images/Cocktail1.jpg';
import './Dashbord.css';


import { withScriptjs,withGoogleMap,GoogleMap,Marker} from 'react-google-maps';


class Dashbord extends Component{
    constructor(props){
        super(props);
        this.state={
            isChanged:false,
            infoForm:false,
            isImage:false,
            radioGroup:{
                Coffee:false,
                Juice:false,
                Cocktail:false
            },
            checkedboxGroup:{
                twenty_minutes:false,
                sixty_minutes:false,
                eighty_minutes:false
            },
            coords: {},
            isBeverage:false
        }
        this.radioHandler=this.radioHandler.bind(this);
        this.submitImage=this.submitImage.bind(this);
        this.checkHandler=this.checkHandler.bind(this);
        this.updateCoords = this.updateCoords.bind(this);
        this.SelectBox = this.SelectBox.bind(this);
    }                                      
    // LogOut Function
    logOut() {
        firebase.auth().signOut();
        this.setState({
          isUser: false
        })
        console.log("log OUt");
        window.location.replace('/');
      }

      //************ Form Information  **************//
form(){
    console.log("Routes");
    this.setState({
        infoForm:true
    })
}

infoForm(){

    return <div>
    <img className="image1" alt="meeting" 
     src={Juice}
    />
    <h1>Short Infomation</h1>
    <Prompt when={this.state.isChanged} 
            message="Are you Sure You Want To Leave" 
     />
    <label>
        Nick Name   
        <input 
        type="text" 
        placeholder="Nick Name"
        onChange={()=>{this.setState({
                isChanged:true
                }) 
            }}
        />
    </label><br/>
    <label>
        Phone Number  
        <input 
        type="text"
        placeholder="Phone Number"
        onChange={()=>{this.setState({
                isChanged:true
                }) 
            }
        }
    />
    </label><br/><br/>  
    <button onClick={this.form.bind(this)}>Next. . ..</button>
    
    </div>
}



//********uploadImage *************/
submitImage(){
    console.log("Submit Image");
    this.setState({
        isImage:true
    })
    // console.log(isImage);
}
uploadImage(){
    return(
        <div>
            <h1>Upload Image</h1>
            <input type="file" /><br/>
            <input type="file" /><br/>
            <input type="file" /><br/><br/><br/>
            <button className="btn-btn"
            onClick={this.submitImage}
            >Next . . ..</button>
        </div>
    )
}






//********Beverages inside a function *************/
radioHandler(e){
    let radioGroup=this.state.radioGroup;
    console.log(e);
    for(var key in radioGroup){
        radioGroup[key]=false
    }
    radioGroup[e.target.value]=e.target.checked;
    this.setState({
        radioGroup:radioGroup
    })
    console.log('radio Group',radioGroup);
}
//********Beverages *************/
checkHandler(e){
    console.log("Check Box",e.target.value);
    const {checkedboxGroup  } = this.state;
    let checkbox=checkedboxGroup;
    checkbox[e.target.value]=e.target.checked;

    this.setState({
        checkedboxGroup:checkbox
    })
}
SelectBox(){
    const {isBeverage}=this.state;
    this.setState({
        isBeverage:true
    })
    console.log('isBeverage',isBeverage);
}
Beverages(){
    return(
        <div>
                <h1>Form Submit</h1>
            <label>
    <img className="image1" alt="meeting" 
     src={Juice}/>
            Coffee<input type='radio' value='Coffee'
             checked={this.state.radioGroup['Coffee']} 
             onChange={this.radioHandler}/>
            </label>
    {/* <img className="image1" alt="meeting" 
     src={juice1}/> */}
            <label>
            Juice   <input type='radio' value='Juice'
             checked={this.state.radioGroup['Juice']} 
             onChange={this.radioHandler}/>
            </label>
            <label>
    {/* <img className="image1" alt="meeting" 
     src={Juice}/> */}
            Cocktail <input type='radio' value='Cocktail'
             checked={this.state.radioGroup['Cocktail']} 
             onChange={this.radioHandler}/>
            </label>

     {/*        Check Box Area           */}
            <div>
                <h1>"Duration of Meeting”</h1>
                <label>
                20 min <input type='checkbox' value='20-min'
             checked={this.state.checkedboxGroup['20 min']} 
             onChange={this.checkHandler}/>
                </label>
                <label>
                60 min <input type='checkbox' value='60-min'
             checked={this.state.checkedboxGroup['60 min']} 
             onChange={this.checkHandler}/>
                </label>
                <label>
                80 min <input type='checkbox' value='80-min'
             checked={this.state.checkedboxGroup['80 min']} 
             onChange={this.checkHandler}/>
                </label>
            <button className="btn-btn"
            onClick={this.SelectBox}
            >Next . . ..</button>
            </div>
        </div>
    )
}




// **************Map MAP MAP MAP  map *****//


componentDidMount() {
    this.setPosition();
  }

  setPosition() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({coords: position.coords})
    });
  }

  updateCoords({latitude, longitude}) {
    this.setState({coords: {latitude, longitude}})
  }

maps_location(){
const {coords} = this.state;
return(
    <div>
        <h1> Set  Location</h1>
        <span className="App">
            {coords.latitude && <MyMapComponent
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `70%` }} />}
            containerElement={<div style={{ height: `70vh` }} />}
            mapElement={<div style={{ height: `70%` }} />}
            coords={coords}
            updateCoords={this.updateCoords.bind(this)}
            />}
        <button 
        
        > Submit </button>
        </span> 
    </div>
    );
}   




    render(){
        const { infoForm ,isImage,isBeverage} =this.state;
        return(
            <div>
                <center>
                <button onClick={this.logOut.bind(this)}> Logout </button>
                 </center>
                 <center>
                { 
                    infoForm !== true ?
                    (this.infoForm() ) 
                    :
                    <div>   
                        {
                        isBeverage !== true ?  
                        (this.Beverages())
                        :
                        <div>
                          {
                         isImage !==true ?
                         (this.uploadImage()):
                        (this.maps_location())
                          }
                        </div>
                        }
                    </div>
                 }
                 </center>
            </div>
        )
    }
}
const MyMapComponent = withScriptjs(withGoogleMap((props) =>
<GoogleMap
  defaultZoom={15}
  center={{ lat: props.coords.latitude, lng: props.coords.longitude }}
  >
  {props.isMarkerShown && <Marker 
  position={{ lat: props.coords.latitude, lng: props.coords.longitude }} 
  draggable={true}
  onDragEnd={pos => {
    props.updateCoords({latitude: pos.latLng.lat(), longitude: pos.latLng.lng()})
    console.log('props.updateCoords',props);
  }}
  />}
</GoogleMap>
))

export default Dashbord;
