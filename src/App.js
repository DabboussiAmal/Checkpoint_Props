import './App.css';
import Profile from './profile/Profile';
import image from './Images/MyPhoto.jpg'
function App() {

  let handleClick= ()=>{
    alert('hiii')
  }
  return (
   
    <div className="App"
     style={{display: 'flex' ,border:'solid 1px transparent' , width:'800px', marginRight:'auto',marginTop:'30px',marginLeft:'auto',background: 'rgb(34,193,195)',
     background: 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)' }}>
      <Profile  fullName="Dabboussi Amal"  age="21"  bio="Etudiante en 3éme année à ISLAIB, spécialisté génie logiciels et système d'informations" handleClick= {handleClick}>
        <img src={image} alt="Photo"style={{width:'300px', height:'300px', marginLeft:'auto', marginRight:'auto' ,marginTop:'10px',marginBottom:'10px'}} />
      </Profile>
    </div>
  );
}

export default App;
