import React from 'react';

const AdminDashboard = () => {
  return (
    <html lang="en">
      <head>
        {/* ... Your head content ... */}
      </head>
      <body>
        {/* Loader */}
        <div id="loader" className="text-white text-center">
          <h2>Connecting You to Decentralised Social Network</h2>
          <br />
          <h4 id="msg"></h4>
        </div>

        {/* General Modal */}
        <div id="generalMsgModal" className="modal fade" style={{ zIndex: 999999 }}>
          {/* ... General Modal content ... */}
        </div>

        {/* Contract Balance Modal */}
        <div id="contractBalanceModal" className="modal fade" style={{ zIndex: 999999 }}>
          {/* ... Contract Balance Modal content ... */}
        </div>

        {/* Maintainer Modal */}
        <div id="maintainerModal" className="modal fade" style={{ zIndex: 999999 }}>
          {/* ... Maintainer Modal content ... */}
        </div>

        {/* Reported Dweet Details Modal */}
        <div id="reportedDweetModal" className="modal fade" style={{ zIndex: 999999 }}>
          {/* ... Reported Dweet Details Modal content ... */}
        </div>

        {/* Advertisements Details Modal */}
        <div id="advertisementModal" className="modal fade" style={{ zIndex: 999999 }}>
          {/* ... Advertisements Details Modal content ... */}
        </div>

        {/* Top Navbar Fixed starts */}
        <nav className="navbar navbar-expand-lg navbar-light">
          {/* ... Your navbar content ... */}
        </nav>

        <div className="main-content" id="panel">
          {/* ... Your main content ... */}
        </div>

        {/* Footer Starts */}
        <footer className="footer">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-auto">
                <p>© Copyright 2020</p>
              </div>
            </div>
          </div>
        </footer>

        {/* Your scripts */}
        <script src='https://npmcdn.com/tether@1.2.4/dist/js/tether.min.js'></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.6/js/bootstrap.min.js'></script>
        <script src="/public/assets_admin/vendor/js-cookie/js.cookie.js"></script>
        <script src="/public/assets_admin/vendor/jquery.scrollbar/jquery.scrollbar.min.js"></script>
        <script src="public/assets_admin/js/argon.js?v=1.2.0"></script>
        <script src="./public/web3.min.js"></script>
        <script src="https://unpkg.com/ipfs-api@9.0.0/dist/index.js" integrity="sha384-5bXRcW9kyxxnSMbOoHzraqa7Z0PQWIao+cgeg327zit1hz5LZCEbIMx/LWKPReuB" crossorigin="anonymous"></script>
        <script src="https://bundle.run/buffer@5.2.1"></script>
        <script src="./app2.js"></script>
      </body>
    </html>
  );
};

export default AdminDashboard;
