import { connect } from 'react-redux';
import Loading from '../components/Loading.jsx';

function mapStateToProps(state) {
  return {
    isLoading: state.loading,
  };
}

const LoadingContainer = connect(mapStateToProps)(Loading);

export default LoadingContainer;
