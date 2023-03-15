
import './App.css';
//import img1 from './images/solapur.jpg';
function App() {
  return (
      <br>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">PRASHANT ENTERPRISES</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">About</a>
        </li>
         <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Contact</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
  </nav>
  <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>           
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./images/p1(1).JFIF" class="d-block w-100" alt="..."/>
          </div>

          <div className="carousel-item">
            <img src="./images/ttt1.png" class="d-block w-100" alt="..."/>
          </div> 
          
          <div className="carousel-item">
            <img src="./images/ppp.PNG" class="d-block w-100" alt="..."/>
          </div>

          <div class="carousel-item">
            <img src="./images/jh3.png" class="d-block w-100" alt="..."/>
          </div>
          
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
       <br></br>
      <center><div className="welcome"><h1>WELCOME TO PRASHANT ENTERPRISES</h1></div></center>
      <br></br>
      
      <div className="row"/>
      <center>  <div className="card" >
            <img src="./images/2.jpg" class="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Photo Frame</h5>
              <b>Price: 300/-</b>
              <p className="card-text">Art Street Photo Frame For Wall Set of 8 Black Picture Frame For Home Decoration </p>
              <a href="/" className="btn btn-primary">Order Now</a>
            </div>
          </div>

          <div className="row"/>
        <div className="card" >
            <img src="./images/yg.jpeg" class="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Photo Album</h5>
              <b>Price: 300/-</b>
              <p className="card-text">Photo albums are a great way to preserve your special memories with style and finesse.</p>
              <a href="/" className="btn btn-primary">Order Now</a>
            </div>
          </div>

          <div className="row"/>
        <div className="card" >
            <img src="./images/pin.png" class="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">HD Photo Painting</h5>
              <b>Price: 300/-</b>
              <p className="card-text">Color Painting Full HD Wallpapers for (274cm x 213cm) online at low price in India</p>
              <a href="/" className="btn btn-primary">Order Now</a>
            </div>
          </div>
          </center>


  <footer class="ftco-footer ftco-bg-dark ftco-section"/>
  <div class="container">
  
    <div class="row"/>
      <div class="col-md-12 text-center">
         
          <h3>Prashant Udata</h3>  
    
      <div class="social-icons pull-center">
        <a title="Facebook" href="#"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
      <a title="Twitter" href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
      <a title="Pinterest" href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a>
      <a title="Instagram" href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
      <a title="Skype" href="#"><i class="fa fa-skype" aria-hidden="true"></i></a>
      <a title="Dribbble" href="#"><i class="fa fa-dribbble" aria-hidden="true"></i></a>
      </div>
      <ul class="contact"/>
         <a href="/" /><li class="fa fa-phone" aria-hidden="true"> Phone No: 9822638577</li><br></br>
          <a href="/" /><li class="fa fa-gmil" aria-hidden="true"> Email : uprashant121@gmil.com</li><br>
     
    </div>
    </div>
  
   </>
   );
}

export default App;
