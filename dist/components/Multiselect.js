"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireDefault(require("react"));

require("../main.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Multiselect(props) {
  let values = props.values;
  if (!props.isMulti) values = [props.values];
  let valueKey = 'id';
  if (props.valueKey) valueKey = props.valueKey;
  let labelKey = 'name';
  if (props.labelKey) labelKey = props.labelKey;
  return /*#__PURE__*/_react.default.createElement("div", null, (props === null || props === void 0 ? void 0 : props.show) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "main-header"
  }, /*#__PURE__*/_react.default.createElement("h1", null, props.title), /*#__PURE__*/_react.default.createElement("span", {
    className: "close-btn",
    onClick: props.handleHide
  }, "\u2716")), /*#__PURE__*/_react.default.createElement("div", {
    className: "content-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "content-part"
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: "list-header"
  }, props.options != null && props.options.map(option => {
    var _values;

    return /*#__PURE__*/_react.default.createElement("li", {
      key: option[valueKey],
      onClick: e => props.handleSelect(option[valueKey], option[labelKey], e),
      className: values && ((_values = values) === null || _values === void 0 ? void 0 : _values.indexOf(option[valueKey])) !== -1 ? 'list selected' : 'list'
    }, option[labelKey]);
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-end"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "update-btn",
    onClick: props.handleHide
  }, props.buttonText))))));
}

var _default = Multiselect;
exports.default = _default;