class Helper {
  getParameterByName(name, url) {
    this.name = name;
    let location;
    if (!url) {
      location = window.location.href;
    }

    const stringName = name.replace(/[[]]/g, '\\$&');
    const regex = new RegExp(`[?&]${stringName}(=([^&#]*)|&|#|$)`);
    const results = regex.exec(location);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }
}

export default new Helper();
