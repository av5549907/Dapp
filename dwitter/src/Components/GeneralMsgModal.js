import React from 'react';

const GeneralMsgModal = () => {
  return (
    <div id="generalMsgModal" className="modal fade" style={{ zIndex: 999999 }}>
      <div className="modal-dialog modal-confirm">
        <div className="modal-content">
          <div className="modal-header justify-content-center">
            <div className="icon-box">
              <i className="material-icons">&#xE5CD;</i>
            </div>
            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
              &times;
            </button>
          </div>
          <div className="modal-body text-center">
            <h4>Ooops!</h4>
            <p id="generalModalMessage">Error!!!!</p>
            {/* <button className="btn btn-success" data-dismiss="modal">
              Try Again
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralMsgModal;
