import store from 'store';

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

  setLocalStorage(key, val, exp) {
    this.key = key;
    store.set(key, {
      val,
      exp,
      time: new Date().getTime(),
    });
  }

  getLocalStorage(key) {
    this.key = key;
    const info = store.get(key);

    if (!info) {
      return null;
    }
    if (new Date().getTime() - info.time > info.exp) {
      return null;
    }

    return info.val;
  }
}

export default new Helper();
