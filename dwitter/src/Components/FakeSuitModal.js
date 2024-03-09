import React from 'react';

const FakeSuitModal = () => {
  return (
    <div id="fakeSuitModal" className="modal fade" style={{ zIndex: 999999 }}>
      <div className="modal-dialog modal-confirm">
        <div className="modal-content">
          <div className="modal-header justify-content-center">
            <div className="icon-box">
              <i className="material-icons">account_balance</i>
            </div>
            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
              &times;
            </button>
          </div>
          <div className="modal-body text-center">
            <h4>
              Fake Reporting Against You! <br />
              Reward Balance:
            </h4>
            <p id="suitBalance"></p>
            <button type="button" className="btn btn-success" id="withdrawSuitReward">
              Withdraw
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FakeSuitModal;
