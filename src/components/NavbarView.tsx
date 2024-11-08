function NavbarView() {
  return (
      <nav className=" navbar navbar-expand-lg bg-info ">
          <div className="container-fluid">
              <a className="container navbar-brand " href="#">VideoAnyWhere</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="container collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                      <li className="nav-item ">
                          <a className="nav-link active text-white" aria-current="page" href="#">YouTube Downloader</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link text-white" href="#">AnyWhere Downloader</a>
                      </li>
                  </ul> 
              </div>
          </div>
      </nav>
  );
}

export default NavbarView;
