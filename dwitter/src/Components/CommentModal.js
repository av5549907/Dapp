import React from 'react';

const CommentModal = () => {
  return (
    <div id="commentModal" className="modal fade" style={{ zIndex: 999999 }}>
      <div className="modal-dialog modal-confirm">
        <div className="modal-content">
          <div
            className="modal-header justify-content-center"
            style={{ backgroundColor: '#e85e6c', height: '100px' }}
          >
            <div className="icon-box">
              <i className="material-icons">comment</i>
            </div>
            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
              &times;
            </button>
          </div>
          <div className="modal-body" style={{ width: '700px' }}>
            <div className="container" id="commentContainer" style={{ overflowY: 'scroll', height: '300px' }}>
              <div className="row" id="commentDiv">
                <div className="col-8">
                  <div className="card card-white post">
                    <div className="post-heading">
                      <div className="float-left image">
                        <img
                          src="http://bootdey.com/img/Content/user_1.jpg"
                          className="img-circle avatar"
                          alt="user profile image"
                        />
                      </div>
                      <div className="float-left meta">
                        <div className="title h5">
                          <a href="#">
                            <b>Ryan Haywood</b>
                          </a>
                        </div>
                        <h6 className="text-muted time">1 minute ago</h6>
                      </div>
                    </div>
                    <div className="post-description">
                      <p>
                        Bootdey is a gallery of free snippets resources templates and utilities for bootstrap css
                        html js framework. Codes for developers and web designers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container pb-cmnt-container">
              <div className="row">
                <div className="col-md-8">
                  <div className="card card-info">
                    <div className="card-block">
                      <textarea
                        placeholder="Write your comment here!"
                        id="commentArea"
                        className="pb-cmnt-textarea"
                      ></textarea>
                      <form className="form-inline">
                        <button type="button" className="btn btn-primary float-xs-right commentBtn">
                          Share
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentModal;
