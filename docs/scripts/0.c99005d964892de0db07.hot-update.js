webpackHotUpdate(0,{

/***/ 4130:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactUikitCodeblock = __webpack_require__(2209);\n\nvar _reactUikitCodeblock2 = _interopRequireDefault(_reactUikitCodeblock);\n\nvar _reactUikitImg = __webpack_require__(2210);\n\nvar _reactUikitImg2 = _interopRequireDefault(_reactUikitImg);\n\nvar _reactUikitTable = __webpack_require__(1307);\n\nvar _reactUikitTable2 = _interopRequireDefault(_reactUikitTable);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ImgDoc = function ImgDoc(props) {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h1',\n        null,\n        'Img'\n      ),\n      _react2.default.createElement(\n        'p',\n        { className: 'uk-article-lead' },\n        'Easily create responsive images.'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        _react2.default.createElement(\n          'a',\n          { href: 'https://github.com/otissv/react-uikit-img' },\n          'react-uikit-img'\n        ),\n        ' on github.'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Usage'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        null,\n        'npm install react-uikit-img --save;\\n\\n// ES6\\nimport Img from \\'react-uikit-img\\';\\n\\n// ES5\\nvar Img = require(\\'react-uikit-img\\');\\n'\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(_reactUikitImg2.default, { width: '300px', height: '200px', src: 'docs/images/placeholder_200x150_2.svg' }),\n      _react2.default.createElement(\n        'h4',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'xml' },\n        '<Img width=\\'300px\\' height=\\'200px\\' src=\\'docs/images/placeholder_200x150_2.svg\\' />\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Responsive image'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'The Image component can provide different images for various viewport widths. Enable responsive behavior by adding one or all of the responsive props small, medium, large, xlarge.'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'Each responsive size takes a JSON object.'\n      ),\n      _react2.default.createElement(\n        _reactUikitTable2.default,\n        null,\n        _react2.default.createElement(\n          'thead',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'th',\n              { className: 'uk-text-left' },\n              'JSON key'\n            ),\n            _react2.default.createElement(\n              'th',\n              { className: 'uk-text-left' },\n              'Description'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'tbody',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'width'\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'The width of the image. The defualt width is 100% if no width is specified'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'height'\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'The height of the image. The defualt height is auto if no height is specified'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'src'\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'The src url for the image'\n            )\n          )\n        )\n      ),\n      _react2.default.createElement(\n        'h4',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(_reactUikitImg2.default, {\n        small: { height: '150px', src: 'docs/images/placeholder_200x150_1.svg' },\n        medium: { height: '250px', src: 'docs/images/placeholder_200x150_2.svg' },\n        large: { height: '350px', src: 'docs/images/placeholder_200x150_3.svg' },\n        xlarge: { height: '450px', src: 'docs/images/placeholder_200x150_4.svg' }\n      }),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'xml' },\n        '<Img\\n  small={{height: \\'150px\\', src: \\'docs/images/placeholder_200x150_1.svg\\'} }\\n  medium={{height: \\'250px\\', src: \\'docs/images/placeholder_200x150_2.svg\\'} }\\n  large={{height: \\'350px\\', src: \\'docs/images/placeholder_200x150_3.svg\\'} }\\n  xlarge={{height: \\'450px\\', src: \\'docs/images/placeholder_200x150_4.svg\\'} }\\n/>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h1',\n        null,\n        'Cover images'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'The ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'cover'\n        ),\n        ' prop allows you to create fullscreen teasers using images. It will always be centered vertically and horizontally and cover its container without losing its proportions. You can also place additional content, like text or images on top of the image by placing it inside of the ',\n        _react2.default.createElement(\n          'code',\n          null,\n          '<Image>'\n        ),\n        ' component.'\n      ),\n      _react2.default.createElement(\n        'h4',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(\n        _reactUikitImg2.default,\n        { cover: true,\n          small: { height: '150px', src: 'docs/images/placeholder_200x150_1.svg' },\n          medium: { height: '250px', src: 'docs/images/placeholder_200x150_2.svg' },\n          large: { height: '350px', src: 'docs/images/placeholder_200x150_3.svg' },\n          xlarge: { height: '450px', src: 'docs/images/placeholder_200x150_4.svg' }\n        },\n        _react2.default.createElement(\n          'h1',\n          null,\n          'Cover image'\n        )\n      ),\n      _react2.default.createElement(\n        'h4',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'xml' },\n        '<Img cover\\n  small={{height: \\'150px\\', src: \\'docs/images/placeholder_200x150_1.svg\\'} }\\n  medium={{height: \\'250px\\', src: \\'docs/images/placeholder_200x150_2.svg\\'} }\\n  large={{height: \\'350px\\', src: \\'docs/images/placeholder_200x150_3.svg\\'} }\\n  xlarge={{height: \\'450px\\', src: \\'docs/images/placeholder_200x150_4.svg\\'} }\\n>\\n\\n  <h1>Cover image</h1>\\n</Img>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Img Props'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'See base component for additional utility props.'\n      ),\n      _react2.default.createElement(\n        _reactUikitTable2.default,\n        null,\n        _react2.default.createElement(\n          'thead',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'th',\n              { className: 'uk-text-left' },\n              'Prop'\n            ),\n            _react2.default.createElement(\n              'th',\n              { className: 'uk-text-left' },\n              'Type'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'tbody',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              _react2.default.createElement(\n                'code',\n                null,\n                'alt'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'string'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              _react2.default.createElement(\n                'code',\n                null,\n                'cover'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              { colSpan: '2' },\n              'Bool'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              _react2.default.createElement(\n                'code',\n                null,\n                'height'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'string'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              _react2.default.createElement(\n                'code',\n                null,\n                'large'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'object',\n              _react2.default.createElement('br', null),\n              '{width, height, src}'\n            ),\n            _react2.default.createElement('td', { className: 'uk-text-left' })\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              _react2.default.createElement(\n                'code',\n                null,\n                'medium'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'object',\n              _react2.default.createElement('br', null),\n              '{width, height, src}'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              _react2.default.createElement(\n                'code',\n                null,\n                'small'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'object',\n              _react2.default.createElement('br', null),\n              '{width, height, src}'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              _react2.default.createElement(\n                'code',\n                null,\n                'src'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'string'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              _react2.default.createElement(\n                'code',\n                null,\n                'width'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'string'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              _react2.default.createElement(\n                'code',\n                null,\n                'xlarge'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'object',\n              _react2.default.createElement('br', null),\n              '{width, height, src}'\n            )\n          )\n        )\n      )\n    )\n  );\n};\n\nexports.default = ImgDoc;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbWctZG9jLmpzeD83NDhiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVWIsSUFBTSxNQUFNLEdBQUcsU0FBVCxNQUFNLENBQUksS0FBSztTQUNuQjs7O0lBQ0U7OztNQUNFOzs7O09BQVk7TUFDWjs7VUFBRyxTQUFTLEVBQUMsaUJBQWlCOztPQUUxQjtNQUVKOzs7UUFDRTs7WUFBRyxJQUFJLEVBQUMsMkNBQTJDOztTQUFvQjs7T0FDckU7S0FDSTtJQUdWOzs7TUFDRTs7OztPQUFjO01BQ2Q7Ozs7T0FTWTtNQUdaOztVQUFJLFNBQVMsRUFBQyxTQUFTOztPQUFhO01BQ3BDLHlEQUFLLEtBQUssRUFBQyxPQUFPLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxHQUFHLEVBQUMsdUNBQXVDLEdBQUc7TUFFaEY7O1VBQUksU0FBUyxFQUFDLE1BQU07O09BQVU7TUFDOUI7O1VBQVcsTUFBTSxFQUFDLEtBQUs7O09BSVg7S0FDSjtJQUVWOzs7TUFFQTs7OztPQUF5QjtNQUN6Qjs7OztPQUlJO01BRUo7Ozs7T0FFSTtNQUVKOzs7UUFDRTs7O1VBQ0U7OztZQUNFOztnQkFBSSxTQUFTLEVBQUMsY0FBYzs7YUFBYztZQUMxQzs7Z0JBQUksU0FBUyxFQUFDLGNBQWM7O2FBQWlCO1dBQzFDO1NBQ0M7UUFDUjs7O1VBQ0U7OztZQUNFOztnQkFBSSxTQUFTLEVBQUMsY0FBYzs7YUFBVztZQUN2Qzs7Z0JBQUksU0FBUyxFQUFDLGNBQWM7O2FBQWdGO1dBQ3pHO1VBQ0w7OztZQUNFOztnQkFBSSxTQUFTLEVBQUMsY0FBYzs7YUFBWTtZQUN4Qzs7Z0JBQUksU0FBUyxFQUFDLGNBQWM7O2FBQW1GO1dBQzVHO1VBQ0w7OztZQUNFOztnQkFBSSxTQUFTLEVBQUMsY0FBYzs7YUFBUztZQUNyQzs7Z0JBQUksU0FBUyxFQUFDLGNBQWM7O2FBQStCO1dBQ3hEO1NBQ0M7T0FDRjtNQUVSOztV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QUNMOztnQkFBSSxTQUFTLEVBQUMsY0FBYzs7Y0FBTyx5Q0FBTTs7YUFBNkI7V0FDbkU7U0FDQztPQUNGO0tBQ0E7R0FFTjtDQUNQLENBQUM7O2tCQUVhLE1BQU0iLCJmaWxlIjoiNDEzMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvZGVibG9jayBmcm9tICdyZWFjdC11aWtpdC1jb2RlYmxvY2snO1xuaW1wb3J0IEltZyBmcm9tICdyZWFjdC11aWtpdC1pbWcnO1xuaW1wb3J0IFRhYmxlIGZyb20gJ3JlYWN0LXVpa2l0LXRhYmxlJztcblxuXG5cbmNvbnN0IEltZ0RvYyA9IChwcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgxPkltZzwvaDE+XG4gICAgICA8cCBjbGFzc05hbWU9J3VrLWFydGljbGUtbGVhZCc+XG4gICAgICAgIEVhc2lseSBjcmVhdGUgcmVzcG9uc2l2ZSBpbWFnZXMuXG4gICAgICA8L3A+XG5cbiAgICAgIDxwPlxuICAgICAgICA8YSBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vb3Rpc3N2L3JlYWN0LXVpa2l0LWltZyc+cmVhY3QtdWlraXQtaW1nPC9hPiBvbiBnaXRodWIuXG4gICAgICA8L3A+XG4gICAgPC9zZWN0aW9uPlxuXG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMj5Vc2FnZTwvaDI+XG4gICAgICA8Q29kZWJsb2NrPlxue2BucG0gaW5zdGFsbCByZWFjdC11aWtpdC1pbWcgLS1zYXZlO1xuXG4vLyBFUzZcbmltcG9ydCBJbWcgZnJvbSAncmVhY3QtdWlraXQtaW1nJztcblxuLy8gRVM1XG52YXIgSW1nID0gcmVxdWlyZSgncmVhY3QtdWlraXQtaW1nJyk7XG5gfVxuICAgICAgPC9Db2RlYmxvY2s+XG5cblxuICAgICAgPGgzIGNsYXNzTmFtZT0nZXhhbXBsZSc+RXhhbXBsZTwvaDM+XG4gICAgICA8SW1nIHdpZHRoPSczMDBweCcgaGVpZ2h0PScyMDBweCcgc3JjPSdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzIuc3ZnJyAvPlxuXG4gICAgICA8aDQgY2xhc3NOYW1lPSdjb2RlJz5Db2RlPC9oND5cbiAgICAgIDxDb2RlYmxvY2sgc3ludGF4PSd4bWwnPlxue1xuYDxJbWcgd2lkdGg9JzMwMHB4JyBoZWlnaHQ9JzIwMHB4JyBzcmM9J2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMi5zdmcnIC8+XG5gfVxuICAgICAgPC9Db2RlYmxvY2s+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24+XG5cbiAgICA8aDI+UmVzcG9uc2l2ZSBpbWFnZTwvaDI+XG4gICAgPHA+XG4gICAgICBUaGUgSW1hZ2UgY29tcG9uZW50IGNhbiBwcm92aWRlIGRpZmZlcmVudCBpbWFnZXMgZm9yIHZhcmlvdXNcbiAgICAgIHZpZXdwb3J0IHdpZHRocy4gRW5hYmxlIHJlc3BvbnNpdmUgYmVoYXZpb3IgYnkgYWRkaW5nIG9uZSBvclxuICAgICAgIGFsbCBvZiB0aGUgcmVzcG9uc2l2ZSBwcm9wcyBzbWFsbCwgbWVkaXVtLCBsYXJnZSwgeGxhcmdlLlxuICAgIDwvcD5cblxuICAgIDxwPlxuICAgICAgRWFjaCByZXNwb25zaXZlIHNpemUgdGFrZXMgYSBKU09OIG9iamVjdC5cbiAgICA8L3A+XG5cbiAgICA8VGFibGU+XG4gICAgICA8dGhlYWQ+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGggY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPkpTT04ga2V5PC90aD5cbiAgICAgICAgICA8dGggY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPkRlc2NyaXB0aW9uPC90aD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGhlYWQ+XG4gICAgICA8dGJvZHk+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPndpZHRoPC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPlRoZSB3aWR0aCBvZiB0aGUgaW1hZ2UuIFRoZSBkZWZ1YWx0IHdpZHRoIGlzIDEwMCUgaWYgbm8gd2lkdGggaXMgc3BlY2lmaWVkPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+aGVpZ2h0PC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPlRoZSBoZWlnaHQgb2YgdGhlIGltYWdlLiBUaGUgZGVmdWFsdCBoZWlnaHQgaXMgYXV0byBpZiBubyBoZWlnaHQgaXMgc3BlY2lmaWVkPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+c3JjPC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPlRoZSBzcmMgdXJsIGZvciB0aGUgaW1hZ2U8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgPC90Ym9keT5cbiAgICA8L1RhYmxlPlxuXG4gICAgPGg0IGNsYXNzTmFtZT0nZXhhbXBsZSc+RXhhbXBsZTwvaDQ+XG5cbiAgICA8SW1nXG4gICAgICBzbWFsbD17e2hlaWdodDogJzE1MHB4Jywgc3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8xLnN2Zyd9IH1cbiAgICAgIG1lZGl1bT17e2hlaWdodDogJzI1MHB4Jywgc3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2Zyd9IH1cbiAgICAgIGxhcmdlPXt7aGVpZ2h0OiAnMzUwcHgnLCBzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzMuc3ZnJ30gfVxuICAgICAgeGxhcmdlPXt7aGVpZ2h0OiAnNDUwcHgnLCBzcmM6ICdkb2NzL2ltYWdlcy9wbGFjZWhvbGRlcl8yMDB4MTUwXzQuc3ZnJ30gfVxuICAgIC8+XG5cblxuICAgIDxDb2RlYmxvY2sgc3ludGF4PSd4bWwnPlxue1xuYDxJbWdcbiAgc21hbGw9e3toZWlnaHQ6ICcxNTBweCcsIHNyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMS5zdmcnfSB9XG4gIG1lZGl1bT17e2hlaWdodDogJzI1MHB4Jywgc3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2Zyd9IH1cbiAgbGFyZ2U9e3toZWlnaHQ6ICczNTBweCcsIHNyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMy5zdmcnfSB9XG4gIHhsYXJnZT17e2hlaWdodDogJzQ1MHB4Jywgc3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF80LnN2Zyd9IH1cbi8+XG5gfVxuICAgIDwvQ29kZWJsb2NrPlxuICA8L3NlY3Rpb24+XG5cblxuICA8c2VjdGlvbj5cbiAgICA8aDE+Q292ZXIgaW1hZ2VzPC9oMT5cbiAgICA8cD5cbiAgICAgIFRoZSA8Y29kZT5jb3ZlcjwvY29kZT4gcHJvcCBhbGxvd3MgeW91IHRvIGNyZWF0ZSBmdWxsc2NyZWVuIHRlYXNlcnMgdXNpbmcgaW1hZ2VzLiBJdCB3aWxsIGFsd2F5c1xuICAgICAgYmUgY2VudGVyZWQgdmVydGljYWxseSBhbmQgaG9yaXpvbnRhbGx5IGFuZCBjb3ZlciBpdHMgY29udGFpbmVyIHdpdGhvdXRcbiAgICAgIGxvc2luZyBpdHMgcHJvcG9ydGlvbnMuIFlvdSBjYW4gYWxzbyBwbGFjZSBhZGRpdGlvbmFsIGNvbnRlbnQsIGxpa2UgdGV4dFxuICAgICAgb3IgaW1hZ2VzIG9uIHRvcCBvZiB0aGUgaW1hZ2UgYnkgcGxhY2luZyBpdCBpbnNpZGUgb2YgdGhlIDxjb2RlPiZsdDtJbWFnZSZndDs8L2NvZGU+IGNvbXBvbmVudC5cbiAgICA8L3A+XG5cblxuICAgIDxoNCBjbGFzc05hbWU9J2V4YW1wbGUnPkV4YW1wbGU8L2g0PlxuXG4gICAgPEltZyBjb3ZlclxuICAgICAgc21hbGw9e3toZWlnaHQ6ICcxNTBweCcsIHNyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMS5zdmcnfSB9XG4gICAgICBtZWRpdW09e3toZWlnaHQ6ICcyNTBweCcsIHNyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMi5zdmcnfSB9XG4gICAgICBsYXJnZT17e2hlaWdodDogJzM1MHB4Jywgc3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8zLnN2Zyd9IH1cbiAgICAgIHhsYXJnZT17e2hlaWdodDogJzQ1MHB4Jywgc3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF80LnN2Zyd9IH1cbiAgICA+XG5cbiAgICAgIDxoMT5Db3ZlciBpbWFnZTwvaDE+XG4gICAgPC9JbWc+XG5cblxuICAgIDxoNCBjbGFzc05hbWU9J2NvZGUnPkNvZGU8L2g0PlxuICAgIDxDb2RlYmxvY2sgc3ludGF4PSd4bWwnPlxue1xuYDxJbWcgY292ZXJcbiAgc21hbGw9e3toZWlnaHQ6ICcxNTBweCcsIHNyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMS5zdmcnfSB9XG4gIG1lZGl1bT17e2hlaWdodDogJzI1MHB4Jywgc3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF8yLnN2Zyd9IH1cbiAgbGFyZ2U9e3toZWlnaHQ6ICczNTBweCcsIHNyYzogJ2RvY3MvaW1hZ2VzL3BsYWNlaG9sZGVyXzIwMHgxNTBfMy5zdmcnfSB9XG4gIHhsYXJnZT17e2hlaWdodDogJzQ1MHB4Jywgc3JjOiAnZG9jcy9pbWFnZXMvcGxhY2Vob2xkZXJfMjAweDE1MF80LnN2Zyd9IH1cbj5cblxuICA8aDE+Q292ZXIgaW1hZ2U8L2gxPlxuPC9JbWc+XG5gfVxuICAgIDwvQ29kZWJsb2NrPlxuICA8L3NlY3Rpb24+XG5cblxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgyPkltZyBQcm9wczwvaDI+XG5cbiAgICAgICAgPHA+XG4gICAgICAgIFNlZSBiYXNlIGNvbXBvbmVudCBmb3IgYWRkaXRpb25hbCB1dGlsaXR5IHByb3BzLlxuICAgICAgICA8L3A+XG5cbiAgICAgIDxUYWJsZT5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+UHJvcDwvdGg+XG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPlR5cGU8L3RoPlxuXG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+XG4gICAgICAgICAgICAgIDxjb2RlPmFsdDwvY29kZT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPnN0cmluZzwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPlxuICAgICAgICAgICAgICA8Y29kZT5jb3ZlcjwvY29kZT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQgY29sU3Bhbj0nMic+Qm9vbDwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPlxuICAgICAgICAgICAgICA8Y29kZT5oZWlnaHQ8L2NvZGU+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5zdHJpbmc8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5cbiAgICAgICAgICAgICAgPGNvZGU+bGFyZ2U8L2NvZGU+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5vYmplY3Q8YnIgLz57YHt3aWR0aCwgaGVpZ2h0LCBzcmN9YH08L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz48L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5cbiAgICAgICAgICAgICAgPGNvZGU+bWVkaXVtPC9jb2RlPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+b2JqZWN0PGJyIC8+e2B7d2lkdGgsIGhlaWdodCwgc3JjfWB9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+XG4gICAgICAgICAgICAgIDxjb2RlPnNtYWxsPC9jb2RlPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+b2JqZWN0PGJyIC8+e2B7d2lkdGgsIGhlaWdodCwgc3JjfWB9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+XG4gICAgICAgICAgICAgIDxjb2RlPnNyYzwvY29kZT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPnN0cmluZzwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPlxuICAgICAgICAgICAgICA8Y29kZT53aWR0aDwvY29kZT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPnN0cmluZzwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPlxuICAgICAgICAgICAgICA8Y29kZT54bGFyZ2U8L2NvZGU+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5vYmplY3Q8YnIgLz57YHt3aWR0aCwgaGVpZ2h0LCBzcmN9YH08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L1RhYmxlPlxuICAgIDwvc2VjdGlvbj5cblxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEltZ0RvYztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaW1nLWRvYy5qc3hcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

})