webpackHotUpdate(0,{

/***/ 620:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _ufunc = __webpack_require__(171);\n\nvar _ufunc2 = _interopRequireDefault(_ufunc);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nvar pos = function pos(element) {\n  return {\n    top: element.offsetTop,\n    left: element.offsetLeft\n  };\n};\n\nvar dim = function dim(element) {\n  return {\n    height: element.offsetHeight,\n    width: element.offsetWidth\n  };\n};\n\nvar offset = function offset(opts) {\n  var target = opts.target;\n  var element = opts.element;\n  var flip = opts.flip;\n  var viewPortWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);\n  var viewPortHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);\n\n  var targetDetails = {\n    pos: pos(target),\n    dim: dim(target),\n    boundary: target.getBoundingClientRect()\n  };\n\n  var elementDetails = {\n    pos: pos(element),\n    dim: dim(element),\n    boundary: element.getBoundingClientRect()\n  };\n\n  var topFlip = _ufunc2.default.either(function () {\n    return targetDetails.pos.top + targetDetails.dim.height;\n  }, function () {\n    return targetDetails.pos.top - elementDetails.dim.height;\n  });\n\n  var bottomFlip = _ufunc2.default.either(function () {\n    return targetDetails.pos.top - elementDetails.dim.height;\n  }, function () {\n    return targetDetails.pos.top + targetDetails.dim.height;\n  });\n\n  var leftFlip = _ufunc2.default.either(function () {\n    return targetDetails.pos.left + targetDetails.dim.width;\n  }, function () {\n    return targetDetails.pos.left;\n  });\n\n  var rightFlip = _ufunc2.default.either(function () {\n    return targetDetails.pos.left;\n  }, function () {\n    return targetDetails.pos.left;\n  });\n\n  var top = topFlip(flip && targetDetails.boundary.top - elementDetails.dim.height < 0);\n  var bottom = bottomFlip(flip && targetDetails.boundary.top + elementDetails.dim.height + targetDetails.dim.height > viewPortHeight);\n  var left = leftFlip(flip && elementDetails.boundary.left - targetDetails.dim.width < 0);\n\n  var right = rightFlip(flip && elementDetails.boundary.right + targetDetails.dim.width > 1);\n\n  var horCenter = left - (elementDetails.dim.width - targetDetails.dim.width) / 2;\n  var verCenter = bottom - (elementDetails.dim.height + targetDetails.dim.height) / 2;\n\n  console.log(targetDetails.boundary.top);\n  console.log(targetDetails.dim.height);\n  console.log(elementDetails.dim.height);\n\n  var position = {\n    top: top,\n    bottom: bottom,\n    left: left,\n    right: right,\n\n    'bottom-left': { top: bottom, left: left },\n    'bottom-center': { top: bottom, left: horCenter },\n    'bottom-right': { top: bottom, left: right },\n\n    'top-left': { top: top, left: left },\n    'top-center': { top: top, left: horCenter },\n    'top-right': { top: top, left: right },\n\n    'left-top': { top: top, left: left - elementDetails.dim.width },\n    'left-center': { top: verCenter, left: left - elementDetails.dim.width },\n    'left-bottom': { top: bottom, left: left - elementDetails.dim.width },\n\n    'right-top': { top: top, left: right + elementDetails.dim.width },\n    'right-center': { top: verCenter, left: right + elementDetails.dim.width },\n    'right-bottom': { top: bottom, left: right + elementDetails.dim.width }\n  };\n\n  return function (prop) {\n    return position[prop] || position['bottom-left'];\n  };\n};\n\nexports.default = {\n  dim: dim,\n  pos: pos,\n  offset: offset\n};\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1kcm9wZG93bi9saWIvcG9zT2Zmc2V0LmpzP2NlMjIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUViLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRTtBQUMzQyxPQUFLLEVBQUUsSUFBSTtDQUNaLENBQUMsQ0FBQzs7QUFFSCxJQUFJLE1BQU0sR0FBRyxtQkFBTyxDQUFDLEdBQU8sQ0FBQyxDQUFDOztBQUU5QixJQUFJLE9BQU8sR0FBRyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7QUFFN0MsU0FBUyxzQkFBc0IsQ0FBQyxHQUFHLEVBQUU7QUFBRSxTQUFPLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxHQUFHLEdBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQztDQUFFOztBQUUvRixJQUFJLEdBQUcsR0FBRyxTQUFTLEdBQUcsQ0FBQyxPQUFPLEVBQUU7QUFDOUIsU0FBTztBQUNMLE9BQUcsRUFBRSxPQUFPLENBQUMsU0FBUztBQUN0QixRQUFJLEVBQUUsT0FBTyxDQUFDLFVBQVU7R0FDekIsQ0FBQztDQUNILENBQUM7O0FBRUYsSUFBSSxHQUFHLEdBQUcsU0FBUyxHQUFHLENBQUMsT0FBTyxFQUFFO0FBQzlCLFNBQU87QUFDTCxVQUFNLEVBQUUsT0FBTyxDQUFDLFlBQVk7QUFDNUIsU0FBSyxFQUFFLE9BQU8sQ0FBQyxXQUFXO0dBQzNCLENBQUM7Q0FDSCxDQUFDOztBQUVGLElBQUksTUFBTSxHQUFHLFNBQVMsTUFBTSxDQUFDLElBQUksRUFBRTtBQUNqQyxNQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3pCLE1BQUksT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDM0IsTUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztBQUNyQixNQUFJLGFBQWEsR0FBRyxJ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QUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxHQUFHLGNBQWMsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFO0FBQy9ELGlCQUFhLEVBQUUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxJQUFJLEdBQUcsY0FBYyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUU7QUFDeEUsaUJBQWEsRUFBRSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRTs7QUFFckUsZUFBVyxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxHQUFHLGNBQWMsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFO0FBQ2pFLGtCQUFjLEVBQUUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxLQUFLLEdBQUcsY0FBYyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUU7QUFDMUUsa0JBQWMsRUFBRSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRTtHQUN4RSxDQUFDOztBQUVGLFNBQU8sVUFBVSxJQUFJLEVBQUU7QUFDckIsV0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0dBQ2xELENBQUM7Q0FDSCxDQUFDOztBQUVGLE9BQU8sQ0FBQyxPQUFPLEdBQUc7QUFDaEIsS0FBRyxFQUFFLEdBQUc7QUFDUixLQUFHLEVBQUUsR0FBRztBQUNSLFFBQU0sRUFBRSxNQUFNO0NBQ2YiLCJmaWxlIjoiNjIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3VmdW5jID0gcmVxdWlyZSgndWZ1bmMnKTtcblxudmFyIF91ZnVuYzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91ZnVuYyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBwb3MgPSBmdW5jdGlvbiBwb3MoZWxlbWVudCkge1xuICByZXR1cm4ge1xuICAgIHRvcDogZWxlbWVudC5vZmZzZXRUb3AsXG4gICAgbGVmdDogZWxlbWVudC5vZmZzZXRMZWZ0XG4gIH07XG59O1xuXG52YXIgZGltID0gZnVuY3Rpb24gZGltKGVsZW1lbnQpIHtcbiAgcmV0dXJuIHtcbiAgICBoZWlnaHQ6IGVsZW1lbnQub2Zmc2V0SGVpZ2h0LFxuICAgIHdpZHRoOiBlbGVtZW50Lm9mZnNldFdpZHRoXG4gIH07XG59O1xuXG52YXIgb2Zmc2V0ID0gZnVuY3Rpb24gb2Zmc2V0KG9wdHMpIHtcbiAgdmFyIHRhcmdldCA9IG9wdHMudGFyZ2V0O1xuICB2YXIgZWxlbWVudCA9IG9wdHMuZWxlbWVudDtcbiAgdmFyIGZsaXAgPSBvcHRzLmZsaXA7XG4gIHZhciB2aWV3UG9ydFdpZHRoID0gTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLCB3aW5kb3cuaW5uZXJXaWR0aCB8fCAwKTtcbiAgdmFyIHZpZXdQb3J0SGVpZ2h0ID0gTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCwgd2luZG93LmlubmVySGVpZ2h0IHx8IDApO1xuXG4gIHZhciB0YXJnZXREZXRhaWxzID0ge1xuICAgIHBvczogcG9zKHRhcmdldCksXG4gICAgZGltOiBkaW0odGFyZ2V0KSxcbiAgICBib3VuZGFyeTogdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gIH07XG5cbiAgdmFyIGVsZW1lbnREZXRhaWxzID0ge1xuICAgIHBvczogcG9zKGVsZW1lbnQpLFxuICAgIGRpbTogZGltKGVsZW1lbnQpLFxuICAgIGJvdW5kYXJ5OiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gIH07XG5cbiAgdmFyIHRvcEZsaXAgPSBfdWZ1bmMyLmRlZmF1bHQuZWl0aGVyKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGFyZ2V0RGV0YWlscy5wb3MudG9wICsgdGFyZ2V0RGV0YWlscy5kaW0uaGVpZ2h0O1xuICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRhcmdldERldGFpbHMucG9zLnRvcCAtIGVsZW1lbnREZXRhaWxzLmRpbS5oZWlnaHQ7XG4gIH0pO1xuXG4gIHZhciBib3R0b21GbGlwID0gX3VmdW5jMi5kZWZhdWx0LmVpdGhlcihmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRhcmdldERldGFpbHMucG9zLnRvcCAtIGVsZW1lbnREZXRhaWxzLmRpbS5oZWlnaHQ7XG4gIH0sIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGFyZ2V0RGV0YWlscy5wb3MudG9wICsgdGFyZ2V0RGV0YWlscy5kaW0uaGVpZ2h0O1xuICB9KTtcblxuICB2YXIgbGVmdEZsaXAgPSBfdWZ1bmMyLmRlZmF1bHQuZWl0aGVyKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGFyZ2V0RGV0YWlscy5wb3MubGVmdCArIHRhcmdldERldGFpbHMuZGltLndpZHRoO1xuICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRhcmdldERldGFpbHMucG9zLmxlZnQ7XG4gIH0pO1xuXG4gIHZhciByaWdodEZsaXAgPSBfdWZ1bmMyLmRlZmF1bHQuZWl0aGVyKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGFyZ2V0RGV0YWlscy5wb3MubGVmdDtcbiAgfSwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0YXJnZXREZXRhaWxzLnBvcy5sZWZ0O1xuICB9KTtcblxuICB2YXIgdG9wID0gdG9wRmxpcChmbGlwICYmIHRhcmdldERldGFpbHMuYm91bmRhcnkudG9wIC0gZWxlbWVudERldGFpbHMuZGltLmhlaWdodCA8IDApO1xuICB2YXIgYm90dG9tID0gYm90dG9tRmxpcChmbGlwICYmIHRhcmdldERldGFpbHMuYm91bmRhcnkudG9wICsgZWxlbWVudERldGFpbHMuZGltLmhlaWdodCArIHRhcmdldERldGFpbHMuZGltLmhlaWdodCA+IHZpZXdQb3J0SGVpZ2h0KTtcbiAgdmFyIGxlZnQgPSBsZWZ0RmxpcChmbGlwICYmIGVsZW1lbnREZXRhaWxzLmJvdW5kYXJ5LmxlZnQgLSB0YXJnZXREZXRhaWxzLmRpbS53aWR0aCA8IDApO1xuXG4gIHZhciByaWdodCA9IHJpZ2h0RmxpcChmbGlwICYmIGVsZW1lbnREZXRhaWxzLmJvdW5kYXJ5LnJpZ2h0ICsgdGFyZ2V0RGV0YWlscy5kaW0ud2lkdGggPiAxKTtcblxuICB2YXIgaG9yQ2VudGVyID0gbGVmdCAtIChlbGVtZW50RGV0YWlscy5kaW0ud2lkdGggLSB0YXJnZXREZXRhaWxzLmRpbS53aWR0aCkgLyAyO1xuICB2YXIgdmVyQ2VudGVyID0gYm90dG9tIC0gKGVsZW1lbnREZXRhaWxzLmRpbS5oZWlnaHQgKyB0YXJnZXREZXRhaWxzLmRpbS5oZWlnaHQpIC8gMjtcblxuICBjb25zb2xlLmxvZyh0YXJnZXREZXRhaWxzLmJvdW5kYXJ5LnRvcCk7XG4gIGNvbnNvbGUubG9nKHRhcmdldERldGFpbHMuZGltLmhlaWdodCk7XG4gIGNvbnNvbGUubG9nKGVsZW1lbnREZXRhaWxzLmRpbS5oZWlnaHQpO1xuXG4gIHZhciBwb3NpdGlvbiA9IHtcbiAgICB0b3A6IHRvcCxcbiAgICBib3R0b206IGJvdHRvbSxcbiAgICBsZWZ0OiBsZWZ0LFxuICAgIHJpZ2h0OiByaWdodCxcblxuICAgICdib3R0b20tbGVmdCc6IHsgdG9wOiBib3R0b20sIGxlZnQ6IGxlZnQgfSxcbiAgICAnYm90dG9tLWNlbnRlcic6IHsgdG9wOiBib3R0b20sIGxlZnQ6IGhvckNlbnRlciB9LFxuICAgICdib3R0b20tcmlnaHQnOiB7IHRvcDogYm90dG9tLCBsZWZ0OiByaWdodCB9LFxuXG4gICAgJ3RvcC1sZWZ0JzogeyB0b3A6IHRvcCwgbGVmdDogbGVmdCB9LFxuICAgICd0b3AtY2VudGVyJzogeyB0b3A6IHRvcCwgbGVmdDogaG9yQ2VudGVyIH0sXG4gICAgJ3RvcC1yaWdodCc6IHsgdG9wOiB0b3AsIGxlZnQ6IHJpZ2h0IH0sXG5cbiAgICAnbGVmdC10b3AnOiB7IHRvcDogdG9wLCBsZWZ0OiBsZWZ0IC0gZWxlbWVudERldGFpbHMuZGltLndpZHRoIH0sXG4gICAgJ2xlZnQtY2VudGVyJzogeyB0b3A6IHZlckNlbnRlciwgbGVmdDogbGVmdCAtIGVsZW1lbnREZXRhaWxzLmRpbS53aWR0aCB9LFxuICAgICdsZWZ0LWJvdHRvbSc6IHsgdG9wOiBib3R0b20sIGxlZnQ6IGxlZnQgLSBlbGVtZW50RGV0YWlscy5kaW0ud2lkdGggfSxcblxuICAgICdyaWdodC10b3AnOiB7IHRvcDogdG9wLCBsZWZ0OiByaWdodCArIGVsZW1lbnREZXRhaWxzLmRpbS53aWR0aCB9LFxuICAgICdyaWdodC1jZW50ZXInOiB7IHRvcDogdmVyQ2VudGVyLCBsZWZ0OiByaWdodCArIGVsZW1lbnREZXRhaWxzLmRpbS53aWR0aCB9LFxuICAgICdyaWdodC1ib3R0b20nOiB7IHRvcDogYm90dG9tLCBsZWZ0OiByaWdodCArIGVsZW1lbnREZXRhaWxzLmRpbS53aWR0aCB9XG4gIH07XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgcmV0dXJuIHBvc2l0aW9uW3Byb3BdIHx8IHBvc2l0aW9uWydib3R0b20tbGVmdCddO1xuICB9O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBkaW06IGRpbSxcbiAgcG9zOiBwb3MsXG4gIG9mZnNldDogb2Zmc2V0XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL2NvbXBvbmVudHMvcmVhY3QtdWlraXQtZHJvcGRvd24vbGliL3Bvc09mZnNldC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})