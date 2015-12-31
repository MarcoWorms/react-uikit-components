webpackHotUpdate(0,{

/***/ 3943:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _extends = Object.assign || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }return target;\n};\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactUikitBase = __webpack_require__(126);\n\nvar _reactUikitBase2 = _interopRequireDefault(_reactUikitBase);\n\nvar _ufunc = __webpack_require__(230);\n\nvar _ufunc2 = _interopRequireDefault(_ufunc);\n\nvar _reactUikitImg = __webpack_require__(766);\n\nvar _reactUikitImg2 = _interopRequireDefault(_reactUikitImg);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nvar Thumbnail = function Thumbnail(props) {\n  // CSS classes\n  var size = {\n    large: 'uk-thumbnail-large',\n    medium: 'uk-thumbnail-medium',\n    small: 'uk-thumbnail-small',\n    mini: 'uk-thumbnail-mini',\n    expand: 'uk-thumbnail-expand'\n  };\n\n  var cssClassNames = _reactUikitBase2.default.helpers.cleanClasses(['uk-thumbnail', props.classes, props.className, size[props.size] || null]);\n\n  // Elements\n  var img = _react2.default.createElement(_reactUikitImg2.default, _extends({}, props.img, {\n    kitid: 'tumbimg-' + props.kitid,\n    src: props.src,\n    width: props.width,\n    heigh: props.heigh,\n    small: props.small,\n    medium: props.medium,\n    large: props.large,\n    xlarge: props.xlarge\n  }));\n\n  var figcaption = _react2.default.createElement('figcaption', {\n    className: 'uk-thumbnail-caption'\n  }, props.children);\n\n  var caption = _react2.default.createElement('div', { className: 'uk-thumbnail-caption' }, props.children);\n\n  var children = _ufunc2.default.maybeIf(_ufunc2.default.either(figcaption, caption)(props.type === 'figure'))(props.children);\n\n  var ignoreProps = ['height', 'src', 'width'];\n  var cleanProps = _reactUikitBase2.default.helpers.cleanProps(ignoreProps)(props);\n\n  var attr = _extends({}, cleanProps, _reactUikitBase2.default.events(props), {\n    className: cssClassNames,\n    'data-kitid': props.kitid\n  });\n\n  var type = {\n    block: _react2.default.createElement('div', attr, img, children),\n\n    figure: _react2.default.createElement('figure', attr, img, children),\n\n    link: _react2.default.createElement('a', _extends({}, attr, { href: props.href }), img, children)\n  };\n\n  // Return Component\n  return type[props.type] || type['block'];\n};\n\nThumbnail.propTypes = {\n  img: _react2.default.PropTypes.object,\n  size: _react2.default.PropTypes.oneOf(['large', 'medium', 'small', 'mini', 'expand']),\n  type: _react2.default.PropTypes.oneOf(['block', 'figure', 'link'])\n};\n\nexports.default = _reactUikitBase2.default.base(Thumbnail);\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC10aHVtYm5haWwvbGliL3RodW1ibmFpbC5qcz9mYmRiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFFYixJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLFVBQVUsTUFBTSxFQUFFO0FBQUUsT0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFBRSxRQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUUsS0FBSyxJQUFJLEdBQUcsSUFBSSxNQUFNLEVBQUU7QUFBRSxVQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUU7QUFBRSxjQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO09BQUU7S0FBRTtHQUFHLE9BQU8sTUFBTSxDQUFDO0NBQUUsQ0FBQzs7QUFFalEsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFO0FBQzNDLE9BQUssRUFBRSxJQUFJO0NBQ1osQ0FBQyxDQUFDOztBQUVILElBQUksTUFBTSxHQUFHLG1CQUFPLENBQUMsQ0FBTyxDQUFDLENBQUM7O0FBRTlCLElBQUksT0FBTyxHQUFHLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDOztBQUU3QyxJQUFJLGVBQWUsR0FBRyxtQkFBTyxDQUFDLEdBQXdCLENBQUMsQ0FBQzs7QUFFeEQsSUFBSSxnQkFBZ0IsR0FBRyxzQkFBc0IsQ0FBQyxlQUFlLENBQUMsQ0FBQzs7QUFFL0QsSUFBSSxNQUFNLEdBQUcsbUJBQU8sQ0FBQyxHQUFPLENBQUMsQ0FBQzs7QUFFOUIsSUFBSSxPQUFPLEdBQUcsc0JBQXNCLENBQUMsTUFBTSxDQUFDLENBQUM7O0FBRTdDLElB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VDs7QUFFRCxVQUFNLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQ25DLFFBQVEsRUFDUixJQUFJLEVBQ0osR0FBRyxFQUNILFFBQVEsQ0FDVDs7QUFFRCxRQUFJLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQ2pDLEdBQUcsRUFDSCxRQUFRLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFDeEMsR0FBRyxFQUNILFFBQVEsQ0FDVDtHQUNGOzs7QUFHRCxTQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0NBQzFDLENBQUM7O0FBRUYsU0FBUyxDQUFDLFNBQVMsR0FBRztBQUNwQixLQUFHLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTTtBQUNyQyxNQUFJLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ3JGLE1BQUksRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0NBQ25FLENBQUM7O0FBRUYsT0FBTyxDQUFDLE9BQU8sR0FBRyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyIsImZpbGUiOiIzOTQzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3RVaWtpdEJhc2UgPSByZXF1aXJlKCcuLi8uLi9yZWFjdC11aWtpdC1iYXNlJyk7XG5cbnZhciBfcmVhY3RVaWtpdEJhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RVaWtpdEJhc2UpO1xuXG52YXIgX3VmdW5jID0gcmVxdWlyZSgndWZ1bmMnKTtcblxudmFyIF91ZnVuYzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91ZnVuYyk7XG5cbnZhciBfcmVhY3RVaWtpdEltZyA9IHJlcXVpcmUoJy4uLy4uL3JlYWN0LXVpa2l0LWltZycpO1xuXG52YXIgX3JlYWN0VWlraXRJbWcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RVaWtpdEltZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBUaHVtYm5haWwgPSBmdW5jdGlvbiBUaHVtYm5haWwocHJvcHMpIHtcbiAgLy8gQ1NTIGNsYXNzZXNcbiAgdmFyIHNpemUgPSB7XG4gICAgbGFyZ2U6ICd1ay10aHVtYm5haWwtbGFyZ2UnLFxuICAgIG1lZGl1bTogJ3VrLXRodW1ibmFpbC1tZWRpdW0nLFxuICAgIHNtYWxsOiAndWstdGh1bWJuYWlsLXNtYWxsJyxcbiAgICBtaW5pOiAndWstdGh1bWJuYWlsLW1pbmknLFxuICAgIGV4cGFuZDogJ3VrLXRodW1ibmFpbC1leHBhbmQnXG4gIH07XG5cbiAgdmFyIGNzc0NsYXNzTmFtZXMgPSBfcmVhY3RVaWtpdEJhc2UyLmRlZmF1bHQuaGVscGVycy5jbGVhbkNsYXNzZXMoWyd1ay10aHVtYm5haWwnLCBwcm9wcy5jbGFzc2VzLCBwcm9wcy5jbGFzc05hbWUsIHNpemVbcHJvcHMuc2l6ZV0gfHwgbnVsbF0pO1xuXG4gIC8vIEVsZW1lbnRzXG4gIHZhciBpbWcgPSBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3RVaWtpdEltZzIuZGVmYXVsdCwgX2V4dGVuZHMoe30sIHByb3BzLmltZywge1xuICAgIGtpdGlkOiAndHVtYmltZy0nICsgcHJvcHMua2l0aWQsXG4gICAgc3JjOiBwcm9wcy5zcmMsXG4gICAgd2lkdGg6IHByb3BzLndpZHRoLFxuICAgIGhlaWdoOiBwcm9wcy5oZWlnaCxcbiAgICBzbWFsbDogcHJvcHMuc21hbGwsXG4gICAgbWVkaXVtOiBwcm9wcy5tZWRpdW0sXG4gICAgbGFyZ2U6IHByb3BzLmxhcmdlLFxuICAgIHhsYXJnZTogcHJvcHMueGxhcmdlXG4gIH0pKTtcblxuICB2YXIgZmlnY2FwdGlvbiA9IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICdmaWdjYXB0aW9uJyxcbiAgICB7XG4gICAgICBjbGFzc05hbWU6ICd1ay10aHVtYm5haWwtY2FwdGlvbidcbiAgICB9LFxuICAgIHByb3BzLmNoaWxkcmVuXG4gICk7XG5cbiAgdmFyIGNhcHRpb24gPSBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAnZGl2JyxcbiAgICB7IGNsYXNzTmFtZTogJ3VrLXRodW1ibmFpbC1jYXB0aW9uJyB9LFxuICAgIHByb3BzLmNoaWxkcmVuXG4gICk7XG5cbiAgdmFyIGNoaWxkcmVuID0gX3VmdW5jMi5kZWZhdWx0Lm1heWJlSWYoX3VmdW5jMi5kZWZhdWx0LmVpdGhlcihmaWdjYXB0aW9uLCBjYXB0aW9uKShwcm9wcy50eXBlID09PSAnZmlndXJlJykpKHByb3BzLmNoaWxkcmVuKTtcblxuICB2YXIgaWdub3JlUHJvcHMgPSBbJ2hlaWdodCcsICdzcmMnLCAnd2lkdGgnXTtcbiAgdmFyIGNsZWFuUHJvcHMgPSBfcmVhY3RVaWtpdEJhc2UyLmRlZmF1bHQuaGVscGVycy5jbGVhblByb3BzKGlnbm9yZVByb3BzKShwcm9wcyk7XG5cbiAgdmFyIGF0dHIgPSBfZXh0ZW5kcyh7fSwgY2xlYW5Qcm9wcywgX3JlYWN0VWlraXRCYXNlMi5kZWZhdWx0LmV2ZW50cyhwcm9wcyksIHtcbiAgICBjbGFzc05hbWU6IGNzc0NsYXNzTmFtZXMsXG4gICAgJ2RhdGEta2l0aWQnOiBwcm9wcy5raXRpZFxuICB9KTtcblxuICB2YXIgdHlwZSA9IHtcbiAgICBibG9jazogX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIGF0dHIsXG4gICAgICBpbWcsXG4gICAgICBjaGlsZHJlblxuICAgICksXG5cbiAgICBmaWd1cmU6IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2ZpZ3VyZScsXG4gICAgICBhdHRyLFxuICAgICAgaW1nLFxuICAgICAgY2hpbGRyZW5cbiAgICApLFxuXG4gICAgbGluazogX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnYScsXG4gICAgICBfZXh0ZW5kcyh7fSwgYXR0ciwgeyBocmVmOiBwcm9wcy5ocmVmIH0pLFxuICAgICAgaW1nLFxuICAgICAgY2hpbGRyZW5cbiAgICApXG4gIH07XG5cbiAgLy8gUmV0dXJuIENvbXBvbmVudFxuICByZXR1cm4gdHlwZVtwcm9wcy50eXBlXSB8fCB0eXBlWydibG9jayddO1xufTtcblxuVGh1bWJuYWlsLnByb3BUeXBlcyA9IHtcbiAgaW1nOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLm9iamVjdCxcbiAgc2l6ZTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5vbmVPZihbJ2xhcmdlJywgJ21lZGl1bScsICdzbWFsbCcsICdtaW5pJywgJ2V4cGFuZCddKSxcbiAgdHlwZTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5vbmVPZihbJ2Jsb2NrJywgJ2ZpZ3VyZScsICdsaW5rJ10pXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfcmVhY3RVaWtpdEJhc2UyLmRlZmF1bHQuYmFzZShUaHVtYm5haWwpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL2NvbXBvbmVudHMvcmVhY3QtdWlraXQtdGh1bWJuYWlsL2xpYi90aHVtYm5haWwuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

})