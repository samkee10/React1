import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import  Card from './components/Card';
import Footer from './components/Footer'


function App() {
  return (
    <>
        <Header title="Adopta un perrito"/>
        <div className='adopta'>
          <Card  
 imagen= "https://images.pexels.com/photos/16623474/pexels-photo-16623474/free-photo-of-adopta-un.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
 nombre="Bartolo"
 descripcion="Lleno de energía y listo para jugar. ¡Dale a Bartolo el hogar amoroso que se merece!"
 texto="cachupin"
 colorFondo="success"
 />

 <Card
 imagen="https://images.pexels.com/photos/3687770/pexels-photo-3687770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
 nombre='Messi'
 descripcion='Lleno de energía y listo para jugar. ¡Dale a Messi el hogar amoroso que se merece!'
 texto='pomerania'
 colorFondo='primary'
 />

 <Card
 imagen="https://images.pexels.com/photos/5122188/pexels-photo-5122188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
 nombre='Gohan'
 descripcion='Lleno de energía y listo para jugar. ¡Dale a Gohan el hogar amoroso que se merece!' 
 texto='corgi'
 colorFondo='danger'
 />

 <Card
 imagen= "https://images.pexels.com/photos/5617166/pexels-photo-5617166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
 nombre='Princesa'
 descripcion='Lleno de energía y listo para jugar. ¡Dale a Princesa el hogar amoroso que se merece!'
 texto='chihuahua'
 colorFondo='warning'
 />
</div>
<Footer/>
</>
  );
  }
  export default App;
