import FastfoodIcon from '@mui/icons-material/Fastfood';


export default function({count}){

    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a className="navbar-brand" href="#"><h2>FoodBox<FastfoodIcon/></h2></a>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-nav-custom">
        <li className="nav-item me-4">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item me-4">
          <a className="nav-link" href="">About</a>
        </li>
        <li className="nav-item me-4">
          <a className="nav-link"  href="#">Contact</a>
        </li>
    </ul>
        <button className="btn btn-outline-success opacity-75" >Cart {count}</button>
    
    </div>
  </div>
</nav>
        </>
    )
}