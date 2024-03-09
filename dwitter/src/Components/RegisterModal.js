import React from 'react';

const RegisterModal = () => {
  return (
    <div className="modal" id="registerModal" style={{ zIndex: 99999 }}>
      <div className="modal-dialog">
        <div className="modal-content">
          {/* Modal Header */}
          <div className="modal-header">
            <h4 className="modal-title">Register Here to access Website</h4>
            <button type="button" className="close" data-dismiss="modal">
              &times;
            </button>
          </div>

          {/* Register body */}
          <div className="modal-body">
            <form action="">
              <div className="form-group">
                <label htmlFor="ethaddress">Ethereum Address Detected</label>
                <span id="ethAddressForRegisterModal"></span>
              </div>
              <div className="form-group">
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  aria-describedby="usernameHelp"
                  placeholder="Enter Username"
                />
                <small id="usernameHelp" className="form-text text-muted"></small>
              </div>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Name" />
              </div>
              <div className="form-group">
                <label htmlFor="profileImg">Profile Image</label>
                <input type="file" className="form-control" id="profileImg" />
              </div>
              <div className="form-group">
                <label htmlFor="coverImg">Cover Image</label>
                <input type="file" className="form-control" id="coverImg" />
              </div>
              <div className="form-group">
                <label htmlFor="bio">Bio</label>
                <input type="text" className="form-control" id="bio" placeholder="Bio" />
              </div>
              <h3 id="registerModalMsg" style={{ alignSelf: 'center', color: '#e85e6c' }}></h3>
              <button type="button" id="registerBtn" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>

          {/* Modal footer */}
          {/* <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              id="closeRegisterModal"
              data-dismiss="modal"
            >
              Close
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
