import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Modal from 'react-bootstrap/lib/Modal';
import Navbar from './Navbar.jsx';
import Loading from '../containers/LoadingContainer';
import Helper from '../helper';

class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      showModal: false,
      videoId: null,
      mode: 0,
    };

    // Bind
    this.buildVideosList = this.buildVideosList.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.changeMode = this.changeMode.bind(this);
  }

  componentDidMount() {
    this.setState({
      videos: this.props.videos,
    });

    // Get videos list (only if not stored yet)
    const channel = Helper.getParameterByName('channel');
    const query = Helper.getParameterByName('q');
    if (!this.props.videos.length) {
      this.props.fetchVideos(channel, query);
    }
  }

  componentWillReceiveProps(props) {
    this.setState({
      videos: props.videos,
    });
  }

  playVideo(e, videoId) {
    e.preventDefault();
    this.setState({
      showModal: true,
      videoId,
    });
  }

  closeModal() {
    this.setState({
      showModal: false,
      videoId: null,
    });
  }

  changeMode(e) {
    e.stopPropagation();

    if (e.target.checked === true) {
      this.setState({ mode: 1 });
    } else {
      this.setState({ mode: 0 });
    }
  }

  // Build HTML of videos list
  buildVideosList() {
    const htmlVideos = [];
    if (this.state.videos.length) {
      _.forEach(this.state.videos, (video, i) => {
        let title;
        if (video.snippet.title.length > 45) {
          title = `${video.snippet.title.substr(0, 45)}...`;
        } else {
          title = video.snippet.title;
        }
        htmlVideos.push(
          <div className="col-md-3 video" key={i}>
            <div
              title={video.snippet.title}
              onClick={(e) => { this.playVideo(e, video.id.videoId); }}>
              <div className="thumbnail">
                <img
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.snippet.title}
                />
                <div className="play-overlay">
                  <div className="play">
                    <div className="arrow"></div>
                  </div>
                </div>
              </div>
              <div className="title">{title}</div>
            </div>
          </div>);
      });
    } else {
      htmlVideos.push(
        <div key="1" className="no-result">
          <div>Sem resultados.</div>
          <div><img src="/img/no_results.png" alt="Sem resultados." /></div>
        </div>);
    }

    return htmlVideos;
  }

  // Render component
  render() {
    return (
      <div className={this.state.mode === 0 ? 'light-mode' : 'dark-mode'}>
        <div className="videos-container container-fluid">
          <Navbar fetchVideos={this.props.fetchVideos} router={this.props.router} />

          <div className="content clearfix">
            <div className="description clearfix">
              Nossa equipe de profissionais tem anos de experiência treinando desde
              atletas de alto rendimento até esportistas de
              fim de semana. Nossa especialidade é ajudar as pessoas a realizar <strong>seus
              objetivos</strong> respeitando os limites do corpo e da mente.
              Nossa missão é que cada um de nossos conteúdos possa transformar a vida das
              pessoas que buscam alcançar resultados que sempre sonharam mas <strong>nunca
              imaginaram que poderiam ter!</strong>
            </div>
            <div className="clearfix">
              <h1 className="pull-left">Videos</h1>
              <div className="switch">
                <label>
                  <input
                    type="checkbox"
                    className="hidden"
                    onChange={ this.changeMode }
                  />
                  <div className="slider round"></div>
                </label>
              </div>
            </div>

            {/* Videos list */}
            <div className="videos-list row">
              { this.buildVideosList() }
            </div>
          </div>

          {/* Video modal */}
          <Modal
            show={this.state.showModal}
            onHide={this.closeModal}>
            <Modal.Header closeButton={true}></Modal.Header>
            <Modal.Body>
              <div className={this.state.videoId ? 'player text-center' : 'player hidden'}>
                <iframe width="100%" height="315" src={`https://www.youtube.com/embed/${this.state.videoId}`} frameBorder="0" allowFullScreen></iframe>
              </div>
            </Modal.Body>
          </Modal>
          <Loading />
        </div>
        <footer className="footer text-center">
          Made with <img src="./img/react.png" title="ReactJS" /> by
          <a href="https://github.com/ggades" target="_blank" title="Guilherme Gades"> @ggades</a>
        </footer>
      </div>
    );
  }
}

Home.propTypes = {
  fetchVideos: PropTypes.func.isRequired,
  videos: PropTypes.array.isRequired,
  router: PropTypes.object.isRequired,
};

export default Home;
