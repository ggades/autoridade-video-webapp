import { connect } from 'react-redux';
import Home from '../components/Home.jsx';
import { fetchVideos } from '../actions';

function mapStateToProps(state) {
  return {
    videos: state.home.videosList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchVideos: (channel, query) => {
      dispatch(fetchVideos(channel, query));
    },
  };
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
