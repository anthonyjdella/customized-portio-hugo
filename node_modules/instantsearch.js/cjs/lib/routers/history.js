"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = historyRouter;

var _qs = _interopRequireDefault(require("qs"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var setWindowTitle = function setWindowTitle(title) {
  if (title) {
    // This function is only executed on browsers so we can disable this check.
    // eslint-disable-next-line no-restricted-globals
    window.document.title = title;
  }
};

var BrowserHistory = /*#__PURE__*/function () {
  /**
   * Initializes a new storage provider that syncs the search state to the URL
   * using web APIs (`window.location.pushState` and `onpopstate` event).
   */
  function BrowserHistory(_ref) {
    var _this = this;

    var windowTitle = _ref.windowTitle,
        _ref$writeDelay = _ref.writeDelay,
        writeDelay = _ref$writeDelay === void 0 ? 400 : _ref$writeDelay,
        createURL = _ref.createURL,
        parseURL = _ref.parseURL,
        getLocation = _ref.getLocation;

    _classCallCheck(this, BrowserHistory);

    _defineProperty(this, "windowTitle", void 0);

    _defineProperty(this, "writeDelay", void 0);

    _defineProperty(this, "_createURL", void 0);

    _defineProperty(this, "parseURL", void 0);

    _defineProperty(this, "getLocation", void 0);

    _defineProperty(this, "writeTimer", void 0);

    _defineProperty(this, "shouldPushState", true);

    this.windowTitle = windowTitle;
    this.writeTimer = undefined;
    this.writeDelay = writeDelay;
    this._createURL = createURL;
    this.parseURL = parseURL;
    this.getLocation = getLocation;
    (0, _utils.safelyRunOnBrowser)(function () {
      var title = _this.windowTitle && _this.windowTitle(_this.read());

      setWindowTitle(title);
    });
  }
  /**
   * Reads the URL and returns a syncable UI search state.
   */


  _createClass(BrowserHistory, [{
    key: "read",
    value: function read() {
      return this.parseURL({
        qsModule: _qs.default,
        location: this.getLocation()
      });
    }
    /**
     * Pushes a search state into the URL.
     */

  }, {
    key: "write",
    value: function write(routeState) {
      var _this2 = this;

      (0, _utils.safelyRunOnBrowser)(function (_ref2) {
        var window = _ref2.window;

        var url = _this2.createURL(routeState);

        var title = _this2.windowTitle && _this2.windowTitle(routeState);

        if (_this2.writeTimer) {
          clearTimeout(_this2.writeTimer);
        }

        _this2.writeTimer = setTimeout(function () {
          setWindowTitle(title);

          if (_this2.shouldPushState) {
            window.history.pushState(routeState, title || '', url);
          }

          _this2.shouldPushState = true;
          _this2.writeTimer = undefined;
        }, _this2.writeDelay);
      });
    }
    /**
     * Sets a callback on the `onpopstate` event of the history API of the current page.
     * It enables the URL sync to keep track of the changes.
     */

  }, {
    key: "onUpdate",
    value: function onUpdate(callback) {
      var _this3 = this;

      this._onPopState = function (event) {
        if (_this3.writeTimer) {
          clearTimeout(_this3.writeTimer);
          _this3.writeTimer = undefined;
        }

        _this3.shouldPushState = false;
        var routeState = event.state; // At initial load, the state is read from the URL without update.
        // Therefore the state object is not available.
        // In this case, we fallback and read the URL.

        if (!routeState) {
          callback(_this3.read());
        } else {
          callback(routeState);
        }
      };

      (0, _utils.safelyRunOnBrowser)(function (_ref3) {
        var window = _ref3.window;
        window.addEventListener('popstate', _this3._onPopState);
      });
    }
    /**
     * Creates a complete URL from a given syncable UI state.
     *
     * It always generates the full URL, not a relative one.
     * This allows to handle cases like using a <base href>.
     * See: https://github.com/algolia/instantsearch.js/issues/790
     */

  }, {
    key: "createURL",
    value: function createURL(routeState) {
      return this._createURL({
        qsModule: _qs.default,
        routeState: routeState,
        location: this.getLocation()
      });
    }
    /**
     * Removes the event listener and cleans up the URL.
     */

  }, {
    key: "dispose",
    value: function dispose() {
      var _this4 = this;

      (0, _utils.safelyRunOnBrowser)(function (_ref4) {
        var window = _ref4.window;

        if (_this4._onPopState) {
          window.removeEventListener('popstate', _this4._onPopState);
        }
      });

      if (this.writeTimer) {
        clearTimeout(this.writeTimer);
      }

      this.write({});
    }
  }]);

  return BrowserHistory;
}();

function historyRouter() {
  var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref5$createURL = _ref5.createURL,
      createURL = _ref5$createURL === void 0 ? function (_ref6) {
    var qsModule = _ref6.qsModule,
        routeState = _ref6.routeState,
        location = _ref6.location;
    var protocol = location.protocol,
        hostname = location.hostname,
        _location$port = location.port,
        port = _location$port === void 0 ? '' : _location$port,
        pathname = location.pathname,
        hash = location.hash;
    var queryString = qsModule.stringify(routeState);
    var portWithPrefix = port === '' ? '' : ":".concat(port); // IE <= 11 has no proper `location.origin` so we cannot rely on it.

    // IE <= 11 has no proper `location.origin` so we cannot rely on it.
    if (!queryString) {
      return "".concat(protocol, "//").concat(hostname).concat(portWithPrefix).concat(pathname).concat(hash);
    }

    return "".concat(protocol, "//").concat(hostname).concat(portWithPrefix).concat(pathname, "?").concat(queryString).concat(hash);
  } : _ref5$createURL,
      _ref5$parseURL = _ref5.parseURL,
      parseURL = _ref5$parseURL === void 0 ? function (_ref7) {
    var qsModule = _ref7.qsModule,
        location = _ref7.location;
    // `qs` by default converts arrays with more than 20 items to an object.
    // We want to avoid this because the data structure manipulated can therefore vary.
    // Setting the limit to `100` seems a good number because the engine's default is 100
    // (it can go up to 1000 but it is very unlikely to select more than 100 items in the UI).
    //
    // Using an `arrayLimit` of `n` allows `n + 1` items.
    //
    // See:
    //   - https://github.com/ljharb/qs#parsing-arrays
    //   - https://www.algolia.com/doc/api-reference/api-parameters/maxValuesPerFacet/
    return qsModule.parse(location.search.slice(1), {
      arrayLimit: 99
    });
  } : _ref5$parseURL,
      _ref5$writeDelay = _ref5.writeDelay,
      writeDelay = _ref5$writeDelay === void 0 ? 400 : _ref5$writeDelay,
      windowTitle = _ref5.windowTitle,
      _ref5$getLocation = _ref5.getLocation,
      getLocation = _ref5$getLocation === void 0 ? function () {
    return (0, _utils.safelyRunOnBrowser)(function (_ref8) {
      var window = _ref8.window;
      return window.location;
    }, {
      fallback: function fallback() {
        throw new Error('You need to provide `getLocation` to the `history` router in environments where `window` does not exist.');
      }
    });
  } : _ref5$getLocation;

  return new BrowserHistory({
    createURL: createURL,
    parseURL: parseURL,
    writeDelay: writeDelay,
    windowTitle: windowTitle,
    getLocation: getLocation
  });
}