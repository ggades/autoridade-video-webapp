import { connect } from 'react-redux';
import Band from '../components/Band.jsx';
import { fetchBandInfo, fetchAlbums } from '../actions';

function mapStateToProps(state) {
  return {
    bandInfo: state.band.bandInfo,
    albums: state.albums.albumsList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchBandInfo: (bandId) => {
      dispatch(fetchBandInfo(bandId));
    },
    fetchAlbums: () => {
      dispatch(fetchAlbums());
    },
  };
}

const BandContainer = connect(mapStateToProps, mapDispatchToProps)(Band);

export default BandContainer;
