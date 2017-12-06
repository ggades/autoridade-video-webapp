import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Helper from '../helper';

class Navbar extends React.Component {

  constructor(props) {
    super(props);

    // Component state
    this.state = {
      scrollTop: 0,
      form: {
        search: '',
      },
    };

    // Bind
    this.onFormChange = this.onFormChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    // Monitor scroll to define opacity of navbar
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    // Monitor scroll to define opacity of navbar
    window.removeEventListener('scroll', this.handleScroll);
  }

  // Automatic change state of the form and dispatch the search action on each onChange
  onFormChange(e) {
    const value = e.target.value;
    const newForm = _.assign({}, this.state.form);
    newForm[e.target.name] = value;

    const newState = _.assign({}, this.state, { form: newForm });
    this.setState(newState);
  }

  // Dispatch action on form submit
  onSubmit(e) {
    e.preventDefault();

    const channel = Helper.getParameterByName('channel');
    this.props.fetchVideos(channel, this.state.form.search);

    if (channel) {
      window.location.replace(`?channel=${channel}&q=${this.state.form.search}`);
    } else {
      window.location.replace(`?q=${this.state.form.search}`);
    }
  }

  // Set scrollTop to component state
  handleScroll(event) {
    const scrollTop = event.srcElement.body.scrollTop;
    this.setState({ scrollTop });
  }

  // Render component
  render() {
    return (
      <nav className={this.state.scrollTop > 60 ? 'navbar colored navbar-fixed-top' : 'navbar navbar-fixed-top'}>
        <div className="text-center">
          <a href="/" title="Autoridade Fitness" className="logo">
            <img src="./img/logo.png" alt="Autoridade Fitness" />
          </a>

          <form className="form-inline" onSubmit={this.onSubmit}>
            <div className="clearfix"></div>
            <div className="form-group">
              <input
                type="text"
                name="search"
                placeholder="Pesquisar"
                className={this.state.form.search.length ? 'form-control active' : 'form-control'}
                onChange={this.onFormChange}
                value={this.state.form.search}
              />
              <button type="submit" className="btn btn-default"></button>
            </div>
          </form>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  scrollTop: PropTypes.number,
  fetchVideos: PropTypes.func.isRequired,
};

export default Navbar;
