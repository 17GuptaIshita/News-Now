const Navbar = ({setCategory}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-black mb-0" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">NewsNow</span></a>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" onClick={()=>setCategory("technology")} href="#">Technology</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>setCategory("health")}  href="#">Health</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>setCategory("sports")}  href="#">Sports</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>setCategory("entertainment")} href="#">Entertainment</a>
        </li>
      </ul>
    </div>
  </div>
   <h4 className="text-center medium">Latest <span className="badge bg-danger">News</span></h4>
</nav>
  )
}

export default Navbar;