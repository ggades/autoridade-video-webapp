import React from 'react';
import PropTypes from 'prop-types';

const Loading = ({ isLoading }) => {
  return (
    <div className={ isLoading ? 'loading-container' : 'loading-container loader-hidden' }>
      <div className="spinner">
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
      </div>
    </div>
  );
};

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};


export default Loading;
