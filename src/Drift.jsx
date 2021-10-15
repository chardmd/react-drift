import React, { Fragment } from "react";
import PropTypes from "prop-types";

class Drift extends React.Component {
  constructor(props) {
    super(props);

    this.addMainScript = this.addMainScript.bind(this);
    this.addAttributes = this.addAttributes.bind(this);
    this.addEventHandlers = this.addEventHandlers.bind(this);
    this.insertScript = this.insertScript.bind(this);
    this.createStyleString = this.createStyleString.bind(this);
    this.addCustomStyle = this.addCustomStyle.bind(this);
  }

  insertScript(scriptText) {
    const script = document.createElement("script");
    script.innerText = scriptText;
    script.async = true;
    document.body.appendChild(script);
  }

  addMainScript() {
    const scriptText = `!function() {
        var t = window.driftt = window.drift = window.driftt || [];
        if (!t.init) {
          if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
          t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on", "setUserAttributes" ],
          t.factory = function(e) {
            return function() {
              var n = Array.prototype.slice.call(arguments);
              return n.unshift(e), t.push(n), t;
            };
          }, t.methods.forEach(function(e) {
            t[e] = t.factory(e);
          }), t.load = function(t) {
            var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
            o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
            var i = document.getElementsByTagName("script")[0];
            i.parentNode.insertBefore(o, i);
          };
        }
      }();
      drift.SNIPPET_VERSION = '0.3.1';
      drift.load('${this.props.appId}');`;

    this.insertScript(scriptText);
  }

  addAttributes() {
    let scriptText = "";
    if (typeof this.props.userId !== "undefined") {
      scriptText = `
        var t = window.driftt = window.drift = window.driftt || [];
        drift.identify('${this.props.userId}', ${JSON.stringify(
        this.props.attributes
      )})
      `;
      this.insertScript(scriptText);
    } else if (this.props.attributes) {
      scriptText = `
        drift.on('ready', function() {
          drift.api.setUserAttributes(${JSON.stringify(this.props.attributes)})
        })
      `;
      this.insertScript(scriptText);
    }
  }

  addEventHandlers() {
    if (this.props.eventHandlers && Array.isArray(this.props.eventHandlers)) {
      this.props.eventHandlers.forEach((handler) => {
        let scriptText = `
        drift.on('${handler.event}', ${handler.function});
        `;
        this.insertScript(scriptText);
      });
    }
  }

  createStyleString() {
    return Object.keys(this.props.style).reduce((styleString, styleName) => {
      const styleValue = this.props.style[styleName];

      styleName = styleName.replace(
        /[A-Z]/g,
        (match) => `-${match.toLowerCase()}`
      );

      return `${styleString}${styleName}: ${styleValue} !important;`;
    }, "");
  }

  addCustomStyle() {
    if (this.props.style) {
      const style = document.createElement("style");
      document.head.appendChild(style);
      style.innerText = `
        iframe#drift-widget {
          ${this.createStyleString()}
        }
      `;
    }
  }

  componentDidMount() {
    if (typeof window !== "undefined" && !window.drift) {
      this.addMainScript();
      this.addAttributes();
      this.addEventHandlers();
      this.addCustomStyle();
    }
  }

  render() {
    return <Fragment />;
  }
}

const propTypes = {
  appId: PropTypes.string.isRequired,
  userId: PropTypes.string,
  attributes: PropTypes.object,
  eventHandlers: PropTypes.array,
  style: PropTypes.object,
};

Drift.propTypes = propTypes;

export default Drift;
