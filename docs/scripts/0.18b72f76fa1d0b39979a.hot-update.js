webpackHotUpdate(0,{

/***/ 3485:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactUikitCodeblock = __webpack_require__(131);\n\nvar _reactUikitCodeblock2 = _interopRequireDefault(_reactUikitCodeblock);\n\nvar _reactUikitImgGallery = __webpack_require__(3464);\n\nvar _reactUikitImgGallery2 = _interopRequireDefault(_reactUikitImgGallery);\n\nvar _reactUikitTable = __webpack_require__(179);\n\nvar _reactUikitTable2 = _interopRequireDefault(_reactUikitTable);\n\nvar _reactUikitImg = __webpack_require__(1770);\n\nvar _reactUikitImg2 = _interopRequireDefault(_reactUikitImg);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar img = _react2.default.createElement(_reactUikitImg2.default, null);\n\nvar ImgGalleryDoc = function ImgGalleryDoc(props) {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h1',\n        null,\n        'Img Gallery'\n      ),\n      _react2.default.createElement(\n        'p',\n        { className: 'uk-article-lead' },\n        'Create galery of images.'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        _react2.default.createElement(\n          'a',\n          { href: 'https://github.com/otissv/react-uikit-img-gallery' },\n          'react-uikit-img-gallery'\n        ),\n        ' on github.'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Usage'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        null,\n        'npm install react-uikit-img-gallery --save;\\n\\n// ES6\\nimport ImgGallery from \\'react-uikit-img-gallery\\';\\n\\n// ES5\\nvar ImgGallery = require(\\'react-uikit-img-gallery\\');\\n'\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(_reactUikitImgGallery2.default, {\n        component: img,\n        items: [{ src: 'docs/images/placeholder_200x150_2.svg' }, { src: 'docs/images/placeholder_200x150_2.svg' }, { src: 'docs/images/placeholder_200x150_2.svg' }, { src: 'docs/images/placeholder_200x150_2.svg' }, { src: 'docs/images/placeholder_200x150_2.svg' }, { src: 'docs/images/placeholder_200x150_2.svg' }]\n      }),\n      _react2.default.createElement(\n        'h4',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'xml' },\n        '<ImgGroup\\nitems={[\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\'},\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\'},\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\'},\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\'},\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\'},\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\'}\\n]}\\n/>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Img props'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'Props can be passed to the image by adding ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'props'\n        ),\n        ' property to to an item.'\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(_reactUikitImgGallery2.default, {\n        component: img,\n        items: [{ src: 'docs/images/placeholder_200x150_2.svg', props: { margin: 'bottom right' } }, { src: 'docs/images/placeholder_200x150_2.svg', props: { margin: 'bottom right' } }, { src: 'docs/images/placeholder_200x150_2.svg', props: { margin: 'bottom right' } }, { src: 'docs/images/placeholder_200x150_2.svg', props: { margin: 'bottom right' } }, { src: 'docs/images/placeholder_200x150_2.svg', props: { margin: 'bottom right' } }, { src: 'docs/images/placeholder_200x150_2.svg', props: { margin: 'bottom right' } }]\n      }),\n      _react2.default.createElement(\n        'h4',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'xml' },\n        '<ImgGroup\\nitems={[\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\', props: {margin: \\'bottom right\\'}},\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\', props: {margin: \\'bottom right\\'}},\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\', props: {margin: \\'bottom right\\'}},\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\', props: {margin: \\'bottom right\\'}},\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\', props: {margin: \\'bottom right\\'}},\\n  {src: \\'docs/images/placeholder_200x150_2.svg\\', props: {margin: \\'bottom right\\'}}\\n]}\\n/>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Img gallery props'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'See base component for additional utility props.'\n      ),\n      _react2.default.createElement(\n        _reactUikitTable2.default,\n        null,\n        _react2.default.createElement(\n          'thead',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'th',\n              { className: 'uk-text-left' },\n              'Prop'\n            ),\n            _react2.default.createElement(\n              'th',\n              { className: 'uk-text-left' },\n              'Type'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'tbody',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              _react2.default.createElement(\n                'code',\n                null,\n                'items'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'array of objects.',\n              _react2.default.createElement('br', null),\n              '{\\n                alt,\\n                src,\\n                height,\\n                large,\\n                medium,\\n                props,\\n                small,\\n                width,\\n                xlarge\\n              }'\n            )\n          )\n        )\n      )\n    )\n  );\n};\n\nexports.default = ImgGalleryDoc;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbWctZ2FsbGVyeS1kb2MuanN4P2VjZDMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2IsSUFBTSxHQUFHLEdBQUcsNERBQU87O0FBRW5CLElBQU0sYUFBYSxHQUFHLFNBQWhCLGFBQWEsQ0FBSSxLQUFLO1NBQzFCOzs7SUFDRTs7O01BQ0U7Ozs7T0FBb0I7TUFDcEI7O1VBQUcsU0FBUyxFQUFDLGlCQUFpQjs7T0FFMUI7TUFFSjs7O1FBQ0U7O1lBQUcsSUFBSSxFQUFDLG1EQUFtRDs7U0FBNEI7O09BQ3JGO0tBQ0k7SUFHVjs7O01BQ0E7Ozs7T0FBYztNQUNsQjs7OztPQVNZO01BRVI7O1VBQUksU0FBUyxFQUFDLFNBQVM7O09BQWE7TUFDcEM7QUFDRSxpQkFBUyxFQUFFLEdBQUk7QUFDZixhQUFLLEVBQUUsQ0FDTCxFQUFDLEdBQUcsRUFBRSx1Q0FBdUMsRUFBQyxFQUM5QyxFQUFDLEdBQUcsRUFBRSx1Q0FBdUMsRUFBQyxFQUM5QyxFQUFDLEdBQUcsRUFBRSx1Q0FBdUMsRUFBQyxFQUM5QyxFQUFDLEdBQUcsRUFBRSx1Q0FBdUMsRUFBQyxFQUM5QyxFQUFDLEdBQUcsRUFBRSx1Q0FBdUMsRUFBQyxFQUM5QyxFQUFDLEdBQUcsRUFBRSx1Q0FBdUMsRUFBQyxDQUM5QztRQUNGO01BR0Y7O1VBQUksU0FBUyxFQUFDLE1BQU07O09BQVU7TUFDOUI7O1VBQVcsTUFBTSxFQUFDLEtBQUs7O09BYVg7S0FDSjtJQUdWOzs7TUFDRTs7OztPQUFrQjtNQUNsQjs7OztRQUM2Qzs7OztTQUFrQjs7T0FDM0Q7TUFDSjs7VUFBSSxTQUFTLEVBQUMsU0FBUzs7T0FBYTtNQUNwQztBQUNFLGlCQUFTLEVBQUUsR0FBSTtBQUNmLGFBQUssRUFBRSxDQUNMLEVBQUMsR0FBRyxFQUFFLHVDQUF1QyxFQUFFLEtBQUssRUFBRSxFQUFDLE1BQU0sRUFBRSxjQUFjLEVBQUMsRUFBQyxFQUMvRSxFQUFDLEdBQUcsRUFBRSx1Q0FBdUMsRUFBRSxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsY0FBYyxFQUFDLEVBQUMsRUFDL0UsRUFBQyxHQUFHLEVBQUUsdUNBQXVDLEVBQUUsS0FBSyxFQUFFLEVBQUMsTUFBTSxFQUFFLGNBQWMsRUFBQyxFQUFDLEVBQy9FLEVBQUMsR0FBRyxFQUFFLHVDQUF1QyxFQUFFLEtBQUssRUFBRSxFQUFDLE1BQU0sRUFBRSxjQUFjLEVBQUMsRUFBQyxFQUMvRSxFQUFDLEdBQUcsRUFBRSx1Q0FBdUMsRUFBRSxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsY0FBYyxFQUFDLEVBQUMsRUFDL0UsRUFBQyxHQUFHLEVBQUUsdUNBQXVDLEVBQUUsS0FBSyxFQUFFLEVBQUMsTUFBTSxFQUFFLGNBQWMsRUFBQyxFQUFDLENBQy9FO1FBQ0Y7TUFHRjs7VUFBSSxTQUFTLEVBQUMsTUFBTTs7T0FBVTtNQUM5Qjs7VUFBVyxNQUFNLEVBQUMsS0FBSzs7T0FhWDtLQUNKO0lBR1I7OztNQUNFOzs7O09BQTBCO01BRTFCOzs7O09BRUk7TUFFSjs7O1FBQ0U7OztVQUNFOzs7WUFDRTs7Z0JBQUksU0FBUyxFQUFDLGNBQWM7O2FBQVU7WUFDdEM7O2dCQUFJLFNBQVMsRUFBQyxjQUFjOzthQUFVO1dBQ25DO1NBQ0M7UUFDUjs7O1VBQ0U7OztZQUNFOztnQkFBSSxTQUFTLEVBQUMsY0FBYztjQUMxQjs7OztlQUFrQjthQUNmO1lBQ0w7O2dCQUFJLFNBQVMsRUFBQyxjQUFjOztjQUNULHlDQUFLOzthQVluQjtXQUNGO1NBQ0M7T0FDRjtLQUNBO0dBRU47Q0FDUCxDQUFDOztrQkFFYSxhQUFhIiwiZmlsZSI6IjM0ODUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb2RlYmxvY2sgZnJvbSAnLi4vY29tcG9uZW50cy9yZWFjdC11aWtpdC1jb2RlYmxvY2snO1xuaW1wb3J0IEltZ0dyb3VwIGZyb20gJy4uL2NvbXBvbmVudHMvcmVhY3QtdWlraXQtaW1nLWdhbGxlcnknO1xuaW1wb3J0IFRhYmxlIGZyb20gJy4uL2NvbXBvbmVudHMvcmVhY3QtdWlraXQtdGFibGUnO1xuaW1wb3J0IEltZyBmcm9tICcuLi9jb21wb25lbnRzL3JlYWN0LXVpa2l0LWltZyc7XG5cbmNvbnN0IGltZyA9IDxJbWcgLz5cblxuY29uc3QgSW1nR2FsbGVyeURvYyA9IChwcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgxPkltZyBHYWxsZXJ5PC9oMT5cbiAgICAgIDxwIGNsYXNzTmFtZT0ndWstYXJ0aWNsZS1sZWFkJz5cbiAgICAgICAgQ3JlYXRlIGdhbGVyeSBvZiBpbWFnZXMuXG4gICAgICA8L3A+XG5cbiAgICAgIDxwPlxuICAgICAgICA8YSBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vb3Rpc3N2L3JlYWN0LXVpa2l0LWltZy1nYWxsZXJ5Jz5yZWFjdC11aWtpdC1pbWctZ2FsbGVyeTwvYT4gb24gZ2l0aHViLlxuICAgICAgPC9wPlxuICAgIDwvc2VjdGlvbj5cblxuXG4gICAgPHNlY3Rpb24+XG4gICAgPGgyPlVzYWdlPC9oMj5cbjxDb2RlYmxvY2s+XG57YG5wbSBpbnN0YWxsIHJlYWN0LXVpa2l0LWltZy1nYWxsZXJ5IC0tc2F2ZTtcblxuLy8gRVM2XG5pbXBvcnQgSW1nR2FsbGVyeSBmcm9tICdyZWFjdC11aWtpdC1pbWctZ2FsbGVyeSc7XG5cbi8vIEVTNVxudmFyIEltZ0dhbGxlcnkgPSByZXF1aXJlKCdyZWFjdC11aWtpdC1pbWctZ2FsbGVyeScpO1xuYH1cbjwvQ29kZWJsb2NrPlxuXG4gICAgPGgzIGNsYXNzTmFtZT0nZXhhbXBsZSc+RXhhbXBsZTwvaDM+XG4gICAgPEltZ0dyb3VwXG4gICAgICBjb21wb25lbnQ9e2ltZ31cbiAgICAgIGl0ZW1zPXtbXG4gICAgICAgIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJ30sXG4gICAgICAgIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJ30sXG4gICAgICAgIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJ30sXG4gICAgICAgIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJ30sXG4gICAgICAgIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJ30sXG4gICAgICAgIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJ31cbiAgICAgIF19XG4gICAgLz5cblxuXG4gICAgPGg0IGNsYXNzTmFtZT0nY29kZSc+Q29kZTwvaDQ+XG4gICAgPENvZGVibG9jayBzeW50YXg9J3htbCc+XG57XG5gPEltZ0dyb3VwXG5pdGVtcz17W1xuICB7c3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2Zyd9LFxuICB7c3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2Zyd9LFxuICB7c3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2Zyd9LFxuICB7c3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2Zyd9LFxuICB7c3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2Zyd9LFxuICB7c3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2Zyd9XG5dfVxuLz5cbmB9XG4gICAgPC9Db2RlYmxvY2s+XG4gIDwvc2VjdGlvbj5cblxuXG4gIDxzZWN0aW9uPlxuICAgIDxoMj5JbWcgcHJvcHM8L2gyPlxuICAgIDxwPlxuICAgICAgUHJvcHMgY2FuIGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgYnkgYWRkaW5nIDxjb2RlPnByb3BzPC9jb2RlPiBwcm9wZXJ0eSB0byB0byBhbiBpdGVtLlxuICAgIDwvcD5cbiAgICA8aDMgY2xhc3NOYW1lPSdleGFtcGxlJz5FeGFtcGxlPC9oMz5cbiAgICA8SW1nR3JvdXBcbiAgICAgIGNvbXBvbmVudD17aW1nfVxuICAgICAgaXRlbXM9e1tcbiAgICAgICAge3NyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMi5zdmcnLCBwcm9wczoge21hcmdpbjogJ2JvdHRvbSByaWdodCd9fSxcbiAgICAgICAge3NyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMi5zdmcnLCBwcm9wczoge21hcmdpbjogJ2JvdHRvbSByaWdodCd9fSxcbiAgICAgICAge3NyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMi5zdmcnLCBwcm9wczoge21hcmdpbjogJ2JvdHRvbSByaWdodCd9fSxcbiAgICAgICAge3NyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMi5zdmcnLCBwcm9wczoge21hcmdpbjogJ2JvdHRvbSByaWdodCd9fSxcbiAgICAgICAge3NyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMi5zdmcnLCBwcm9wczoge21hcmdpbjogJ2JvdHRvbSByaWdodCd9fSxcbiAgICAgICAge3NyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMi5zdmcnLCBwcm9wczoge21hcmdpbjogJ2JvdHRvbSByaWdodCd9fVxuICAgICAgXX1cbiAgICAvPlxuXG5cbiAgICA8aDQgY2xhc3NOYW1lPSdjb2RlJz5Db2RlPC9oND5cbiAgICA8Q29kZWJsb2NrIHN5bnRheD0neG1sJz5cbntcbmA8SW1nR3JvdXBcbml0ZW1zPXtbXG4gIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJywgcHJvcHM6IHttYXJnaW46ICdib3R0b20gcmlnaHQnfX0sXG4gIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJywgcHJvcHM6IHttYXJnaW46ICdib3R0b20gcmlnaHQnfX0sXG4gIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJywgcHJvcHM6IHttYXJnaW46ICdib3R0b20gcmlnaHQnfX0sXG4gIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJywgcHJvcHM6IHttYXJnaW46ICdib3R0b20gcmlnaHQnfX0sXG4gIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJywgcHJvcHM6IHttYXJnaW46ICdib3R0b20gcmlnaHQnfX0sXG4gIHtzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJywgcHJvcHM6IHttYXJnaW46ICdib3R0b20gcmlnaHQnfX1cbl19XG4vPlxuYH1cbiAgICA8L0NvZGVibG9jaz5cbiAgPC9zZWN0aW9uPlxuXG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMj5JbWcgZ2FsbGVyeSBwcm9wczwvaDI+XG5cbiAgICAgIDxwPlxuICAgICAgU2VlIGJhc2UgY29tcG9uZW50IGZvciBhZGRpdGlvbmFsIHV0aWxpdHkgcHJvcHMuXG4gICAgICA8L3A+XG5cbiAgICAgIDxUYWJsZT5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+UHJvcDwvdGg+XG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPlR5cGU8L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPlxuICAgICAgICAgICAgICA8Y29kZT5pdGVtczwvY29kZT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPlxuICAgICAgICAgICAgICBhcnJheSBvZiBvYmplY3RzLjxici8+XG4gICAgICAgICAgICAgIHtge1xuICAgICAgICAgICAgICAgIGFsdCxcbiAgICAgICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgICAgIGxhcmdlLFxuICAgICAgICAgICAgICAgIG1lZGl1bSxcbiAgICAgICAgICAgICAgICBwcm9wcyxcbiAgICAgICAgICAgICAgICBzbWFsbCxcbiAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICB4bGFyZ2VcbiAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L1RhYmxlPlxuICAgIDwvc2VjdGlvbj5cblxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEltZ0dhbGxlcnlEb2M7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2ltZy1nYWxsZXJ5LWRvYy5qc3hcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

})