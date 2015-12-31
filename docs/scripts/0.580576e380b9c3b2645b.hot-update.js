webpackHotUpdate(0,{

/***/ 309:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactUikitCodeblock = __webpack_require__(16);\n\nvar _reactUikitCodeblock2 = _interopRequireDefault(_reactUikitCodeblock);\n\nvar _reactUikitTable = __webpack_require__(17);\n\nvar _reactUikitTable2 = _interopRequireDefault(_reactUikitTable);\n\nvar _reactUikitNote = __webpack_require__(21);\n\nvar _reactUikitNote2 = _interopRequireDefault(_reactUikitNote);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar items = [{\n  Name: 'OTIS',\n  score: 39,\n  height: 5.6\n}, {\n  name: 'jocelyn',\n  score: 65,\n  height: 4.8\n}, {\n  name: 'Ania',\n  score: -50,\n  height: 6.10\n}];\n\nvar data = [{ d1: 'Data', d2: 'Data', d3: 'Data' }, { d1: 'Data', d2: 'Data', d3: 'Data' }, { d1: 'Data', d2: 'Data', d3: 'Data' }];\n\nvar TableDoc = function TableDoc(props) {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h1',\n        null,\n        'Table'\n      ),\n      _react2.default.createElement(\n        'p',\n        { className: 'uk-article-lead' },\n        'Create nice looking tables.'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Usage'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        null,\n        '<code>npm install react-uikit-table --save;\\n\\n// ES6\\n<code>import Table from \\'react-uikit-table\\';\\n\\n// ES5\\n<code>var Table = require(\\'react-uikit-table\\');'\n      ),\n      _react2.default.createElement('hr', { className: 'uk-article-divider' }),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'Table can be type declaitively or generated by passing a JSON object to the ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'body'\n        ),\n        ' prop.'\n      ),\n      _react2.default.createElement(\n        _reactUikitNote2.default,\n        null,\n        'Nested properties are not supported at this time.'\n      ),\n      _react2.default.createElement(_reactUikitTable2.default, { caption: 'Table 1 - Generated table.', head: ['Heading', 'Heading', 'Heading'], body: data }),\n      _react2.default.createElement(\n        _reactUikitTable2.default,\n        { caption: 'Table 2 - From Children.' },\n        _react2.default.createElement(\n          'thead',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'th',\n              { className: 'uk-text-left' },\n              'Heading'\n            ),\n            _react2.default.createElement(\n              'th',\n              { className: 'uk-text-left' },\n              'Heading'\n            ),\n            _react2.default.createElement(\n              'th',\n              { className: 'uk-text-left' },\n              'Heading'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'tbody',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'Data'\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'Data'\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'Data'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'Data'\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'Data'\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'Data'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'Data'\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'Data'\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'Data'\n            )\n          )\n        )\n      ),\n      _react2.default.createElement(\n        'h4',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { scroll: 'text', syntax: 'xml' },\n        'const data = [\\n  {d1: \\'Data\\', d2: \\'Data\\', d3: \\'Data\\'},\\n  {d1: \\'Data\\', d2: \\'Data\\', d3: \\'Data\\'},\\n  {d1: \\'Data\\', d2: \\'Data\\', d3: \\'Data\\'}\\n];\\n\\n<Table caption=\\'Table 1 - Generated table.\\' head={[\\'Heading\\', \\'Heading\\', \\'Heading\\']} body={data}/>\\n\\n<Table caption=\\'Table 2 - From Children.\\'>\\n  <thead>\\n    <tr>\\n      <th className=\\'uk-text-left\\'>Heading</th>\\n      <th className=\\'uk-text-left\\'>Heading</th>\\n      <th className=\\'uk-text-left\\'>Heading</th>\\n    </tr>\\n  </thead>\\n\\n  <tbody>\\n    <tr>\\n      <td className=\\'uk-text-left\\'>Data</td>\\n      <td className=\\'uk-text-left\\'>Data</td>\\n      <td className=\\'uk-text-left\\'>Data</td>\\n    </tr>\\n    <tr>\\n      <td className=\\'uk-text-left\\'>Data</td>\\n      <td className=\\'uk-text-left\\'>Data</td>\\n      <td className=\\'uk-text-left\\'>Data</td>\\n    </tr>\\n    <tr>\\n      <td className=\\'uk-text-left\\'>Data</td>\\n      <td className=\\'uk-text-left\\'>Data</td>\\n      <td className=\\'uk-text-left\\'>Data</td>\\n    </tr>\\n  </tbody>\\n</Table>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Table Head'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'Table heaings can be set by passing a list of heading to the ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'head=[]'\n        ),\n        ' prop.',\n        _react2.default.createElement('br', null),\n        'Alternatively if the body prop is being used to genterate table data heading can also be generated using the JSON keys',\n        _react2.default.createElement(\n          'code',\n          null,\n          'head=\\'*\\''\n        ),\n        '.'\n      ),\n      _react2.default.createElement(\n        _reactUikitNote2.default,\n        null,\n        'Keys generate a list of headings in the order they appears. Also the keys will be case insensitve.'\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(_reactUikitTable2.default, { caption: 'Table 1 - Headings from body keys.', condensed: true, head: '*', body: items }),\n      _react2.default.createElement(_reactUikitTable2.default, { caption: 'Table 2 - Headins from prop.', condensed: true, head: ['Heading', 'Heading', 'Heading'], body: items }),\n      _react2.default.createElement(\n        'h4',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { scroll: 'text', syntax: 'xml' },\n        'const items = [\\n  {\\n    Name: \\'OTIS\\',\\n    score: 39,\\n    height: 5.6\\n  }, {\\n    name: \\'jocelyn\\',\\n    score: 65,\\n    height: 4.8\\n  }, {\\n    name: \\'Ania\\',\\n    score: -50,\\n    height: 6.10\\n  }\\n];\\n\\n<Table caption=\\'Table 1 - Headings from body keys.\\' condensed head=\\'*\\' body={items}/>\\n\\n<Table caption=\\'Table 2 - Headins from prop.\\' condensed head={[\\'Heading\\', \\'Heading\\', \\'Heading\\']} body={items}/>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Table condensed'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'To make the table move compact add the ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'condensed'\n        ),\n        ' prop to the Tables props.'\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(_reactUikitTable2.default, { caption: 'Condensed table', condensed: true, head: ['Heading', 'Heading', 'Heading'], body: data }),\n      _react2.default.createElement(\n        'h4',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'xml' },\n        'const data = [\\n  {d1: \\'Data\\', d2: \\'Data\\', d3: \\'Data\\'},\\n  {d1: \\'Data\\', d2: \\'Data\\', d3: \\'Data\\'},\\n  {d1: \\'Data\\', d2: \\'Data\\', d3: \\'Data\\'}\\n];\\n<Table caption=\\'Condensed table\\' condensed head={[\\'Heading\\', \\'Heading\\', \\'Heading\\']} body={data}/>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Table Hover'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'To highlight a row when it is hovered add the ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'hover'\n        ),\n        ' prop to the Tables props.'\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(_reactUikitTable2.default, { caption: 'Hoverable table', hover: true, head: ['Heading', 'Heading', 'Heading'], body: data }),\n      _react2.default.createElement(\n        'h4',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'xml' },\n        'const data = [\\n  {d1: \\'Data\\', d2: \\'Data\\', d3: \\'Data\\'},\\n  {d1: \\'Data\\', d2: \\'Data\\', d3: \\'Data\\'},\\n  {d1: \\'Data\\', d2: \\'Data\\', d3: \\'Data\\'}\\n];\\n\\n<Table caption=\\'Hoverable table\\'  hover head={[\\'Heading\\', \\'Heading\\', \\'Heading\\']} body={data}/>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Table striped'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'Add zebra-striping to table by adding the ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'striped'\n        ),\n        ' prop to the Tables props.'\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(_reactUikitTable2.default, { caption: 'Striped table', striped: true, head: ['Heading', 'Heading', 'Heading'], body: data }),\n      _react2.default.createElement(\n        'h4',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'xml' },\n        'const data = [\\n  {d1: \\'Data\\', d2: \\'Data\\', d3: \\'Data\\'},\\n  {d1: \\'Data\\', d2: \\'Data\\', d3: \\'Data\\'},\\n  {d1: \\'Data\\', d2: \\'Data\\', d3: \\'Data\\'}\\n];\\n\\n<Table caption=\\'Striped table\\'  striped head={[\\'Heading\\', \\'Heading\\', \\'Heading\\']} body={data}/>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Table sort'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'Generated tables can be sorted by passing the keys names to the ',\n        _react2.default.createElement(\n          'code',\n          null,\n          'sort'\n        ),\n        ' prop. The sort prop can either be sting for a single sort or a list for multiple sort. ',\n        _react2.default.createElement('br', null),\n        'To reverse the sort on a feild put \\'-\\' in from of the key name.'\n      ),\n      _react2.default.createElement(\n        'h3',\n        { className: 'example' },\n        'Example'\n      ),\n      _react2.default.createElement(_reactUikitTable2.default, { caption: 'Sortable table', sort: ['name', '-height'], head: '*', body: items }),\n      _react2.default.createElement(\n        'h4',\n        { className: 'code' },\n        'Code'\n      ),\n      _react2.default.createElement(\n        _reactUikitCodeblock2.default,\n        { syntax: 'xml' },\n        'const items = [\\n  {\\n    Name: \\'OTIS\\',\\n    score: 39,\\n    height: 5.6\\n  }, {\\n    name: \\'jocelyn\\',\\n    score: 65,\\n    height: 4.8\\n  }, {\\n    name: \\'Ania\\',\\n    score: -50,\\n    height: 6.10\\n  }\\n];\\n\\n<Table caption=\\'Condensed table\\' sort={[\\'name\\', \\'-height\\']} head=\\'items\\' body={items}/>\\n'\n      )\n    ),\n    _react2.default.createElement(\n      'section',\n      null,\n      _react2.default.createElement(\n        'h2',\n        null,\n        'Table props'\n      ),\n      _react2.default.createElement(\n        'p',\n        null,\n        'See base component for additional utility props.'\n      ),\n      _react2.default.createElement(\n        _reactUikitTable2.default,\n        null,\n        _react2.default.createElement(\n          'thead',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'th',\n              { className: 'uk-text-left' },\n              'Prop'\n            ),\n            _react2.default.createElement(\n              'th',\n              { className: 'uk-text-left' },\n              'Type'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'tbody',\n          null,\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              _react2.default.createElement(\n                'code',\n                null,\n                'body'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'array'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              _react2.default.createElement(\n                'code',\n                null,\n                'caption'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'string'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              _react2.default.createElement(\n                'code',\n                null,\n                'condensed'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'bool'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              _react2.default.createElement(\n                'code',\n                null,\n                'hover'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'bool'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              _react2.default.createElement(\n                'code',\n                null,\n                'head'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'oneOfType',\n              _react2.default.createElement('br', null),\n              'array or string'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              _react2.default.createElement(\n                'code',\n                null,\n                'overflow'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'bool'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              _react2.default.createElement(\n                'code',\n                null,\n                'sort'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'oneOfType',\n              _react2.default.createElement('br', null),\n              'array or string'\n            )\n          ),\n          _react2.default.createElement(\n            'tr',\n            null,\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              _react2.default.createElement(\n                'code',\n                null,\n                'striped'\n              )\n            ),\n            _react2.default.createElement(\n              'td',\n              { className: 'uk-text-left' },\n              'bool'\n            )\n          )\n        )\n      )\n    )\n  );\n};\n\nexports.default = TableDoc;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90YWJsZS1kb2MuanN4PzE0NzQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRYixJQUFNLEtBQUssR0FBRyxDQUNaO0FBQ0UsTUFBSSxFQUFFLE1BQU07QUFDWixPQUFLLEVBQUUsRUFBRTtBQUNULFFBQU0sRUFBRSxHQUFHO0NBQ1osRUFBRTtBQUNELE1BQUksRUFBRSxTQUFTO0FBQ2YsT0FBSyxFQUFFLEVBQUU7QUFDVCxRQUFNLEVBQUUsR0FBRztDQUNaLEVBQUU7QUFDRCxNQUFJLEVBQUUsTUFBTTtBQUNaLE9BQUssRUFBRSxDQUFDLEVBQUU7QUFDVixRQUFNLEVBQUUsSUFBSTtDQUNiLENBQ0YsQ0FBQzs7QUFHRixJQUFNLElBQUksR0FBRyxDQUNYLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUMsRUFDcEMsRUFBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBQyxFQUNwQyxFQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFDLENBQ3JDLENBQUM7O0FBR0YsSUFBTSxRQUFRLEdBQUcsU0FBWCxRQUFRLENBQUksS0FBSztTQUNyQjs7O0lBQ0U7OztNQUNFOzs7O09BQWM7TUFDZDs7VUFBRyxTQUFTLEVBQUMsaUJBQWlCOztPQUUxQjtLQUNJO0lBRVY7OztNQUNBOzs7O09BQWM7TUFDbEI7Ozs7T0FRWTtNQUVSLHNDQUFJLFNBQVMsRUFBQyxvQkFBb0IsR0FBRztNQUVyQzs7VUFBSSxTQUFTLEVBQUMsU0FBUzs7T0FBYTtNQUVwQzs7OztRQUM4RTs7OztTQUFpQjs7T0FDM0Y7TUFFSjs7OztPQUVPO01BRVAsMkRBQU8sT0FBTyxFQUFDLDRCQUE0QixFQUFDLElBQUks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Z0JBQUksU0FBUyxFQUFDLGNBQWM7Y0FDMUI7Ozs7ZUFBaUI7YUFDZDtZQUNMOztnQkFBSSxTQUFTLEVBQUMsY0FBYzs7Y0FDakIseUNBQU07O2FBRVo7V0FDRjtVQUNMOzs7WUFDRTs7Z0JBQUksU0FBUyxFQUFDLGNBQWM7Y0FDMUI7Ozs7ZUFBcUI7YUFDbEI7WUFDTDs7Z0JBQUksU0FBUyxFQUFDLGNBQWM7O2FBQVU7V0FDbkM7VUFDTDs7O1lBQ0U7O2dCQUFJLFNBQVMsRUFBQyxjQUFjO2NBQzFCOzs7O2VBQWlCO2FBQ2Q7WUFDTDs7Z0JBQUksU0FBUyxFQUFDLGNBQWM7O2NBQ2pCLHlDQUFNOzthQUVaO1dBQ0Y7VUFDTDs7O1lBQ0U7O2dCQUFJLFNBQVMsRUFBQyxjQUFjO2NBQzFCOzs7O2VBQW9CO2FBQ2pCO1lBQ0w7O2dCQUFJLFNBQVMsRUFBQyxjQUFjOzthQUFVO1dBQ25DO1NBQ0M7T0FDRjtLQUNBO0dBRU47Q0FDUCxDQUFDOztrQkFFYSxRQUFRIiwiZmlsZSI6IjMwOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb2RlYmxvY2sgZnJvbSAncmVhY3QtdWlraXQtY29kZWJsb2NrJztcbmltcG9ydCBUYWJsZSBmcm9tICdyZWFjdC11aWtpdC10YWJsZSc7XG5pbXBvcnQgTm90ZSBmcm9tICdyZWFjdC11aWtpdC1ub3RlJztcblxuXG5jb25zdCBpdGVtcyA9IFtcbiAge1xuICAgIE5hbWU6ICdPVElTJyxcbiAgICBzY29yZTogMzksXG4gICAgaGVpZ2h0OiA1LjZcbiAgfSwge1xuICAgIG5hbWU6ICdqb2NlbHluJyxcbiAgICBzY29yZTogNjUsXG4gICAgaGVpZ2h0OiA0LjhcbiAgfSwge1xuICAgIG5hbWU6ICdBbmlhJyxcbiAgICBzY29yZTogLTUwLFxuICAgIGhlaWdodDogNi4xMFxuICB9XG5dO1xuXG5cbmNvbnN0IGRhdGEgPSBbXG4gIHtkMTogJ0RhdGEnLCBkMjogJ0RhdGEnLCBkMzogJ0RhdGEnfSxcbiAge2QxOiAnRGF0YScsIGQyOiAnRGF0YScsIGQzOiAnRGF0YSd9LFxuICB7ZDE6ICdEYXRhJywgZDI6ICdEYXRhJywgZDM6ICdEYXRhJ31cbl07XG5cblxuY29uc3QgVGFibGVEb2MgPSAocHJvcHMpID0+IChcbiAgPGRpdj5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMT5UYWJsZTwvaDE+XG4gICAgICA8cCBjbGFzc05hbWU9J3VrLWFydGljbGUtbGVhZCc+XG4gICAgICAgIENyZWF0ZSBuaWNlIGxvb2tpbmcgdGFibGVzLlxuICAgICAgPC9wPlxuICAgIDwvc2VjdGlvbj5cblxuICAgIDxzZWN0aW9uPlxuICAgIDxoMj5Vc2FnZTwvaDI+XG48Q29kZWJsb2NrPlxue2A8Y29kZT5ucG0gaW5zdGFsbCByZWFjdC11aWtpdC10YWJsZSAtLXNhdmU7XG5cbi8vIEVTNlxuPGNvZGU+aW1wb3J0IFRhYmxlIGZyb20gJ3JlYWN0LXVpa2l0LXRhYmxlJztcblxuLy8gRVM1XG48Y29kZT52YXIgVGFibGUgPSByZXF1aXJlKCdyZWFjdC11aWtpdC10YWJsZScpO2B9XG48L0NvZGVibG9jaz5cblxuICAgIDxociBjbGFzc05hbWU9XCJ1ay1hcnRpY2xlLWRpdmlkZXJcIiAvPlxuXG4gICAgPGgzIGNsYXNzTmFtZT0nZXhhbXBsZSc+RXhhbXBsZTwvaDM+XG5cbiAgICA8cD5cbiAgICAgIFRhYmxlIGNhbiBiZSB0eXBlIGRlY2xhaXRpdmVseSBvciBnZW5lcmF0ZWQgYnkgcGFzc2luZyBhIEpTT04gb2JqZWN0IHRvIHRoZSA8Y29kZT5ib2R5PC9jb2RlPiBwcm9wLlxuICAgIDwvcD5cblxuICAgIDxOb3RlPlxuICAgICAgTmVzdGVkIHByb3BlcnRpZXMgYXJlIG5vdCBzdXBwb3J0ZWQgYXQgdGhpcyB0aW1lLlxuICAgIDwvTm90ZT5cblxuICAgIDxUYWJsZSBjYXB0aW9uPSdUYWJsZSAxIC0gR2VuZXJhdGVkIHRhYmxlLicgaGVhZD17WydIZWFkaW5nJywgJ0hlYWRpbmcnLCAnSGVhZGluZyddfSBib2R5PXtkYXRhfS8+XG5cbiAgICA8VGFibGUgY2FwdGlvbj0nVGFibGUgMiAtIEZyb20gQ2hpbGRyZW4uJz5cbiAgICAgIDx0aGVhZD5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0aCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+SGVhZGluZzwvdGg+XG4gICAgICAgICAgPHRoIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5IZWFkaW5nPC90aD5cbiAgICAgICAgICA8dGggY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPkhlYWRpbmc8L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgPC90aGVhZD5cblxuICAgICAgPHRib2R5PlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5EYXRhPC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPkRhdGE8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+RGF0YTwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPkRhdGE8L3RkPlxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+RGF0YTwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5EYXRhPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+RGF0YTwvdGQ+XG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5EYXRhPC90ZD5cbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPkRhdGE8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgPC90Ym9keT5cbiAgICA8L1RhYmxlPlxuXG4gICAgPGg0IGNsYXNzTmFtZT0nY29kZSc+Q29kZTwvaDQ+XG4gICAgPENvZGVibG9jayBzY3JvbGw9J3RleHQnIHN5bnRheD0neG1sJz5cbntcbmBjb25zdCBkYXRhID0gW1xuICB7ZDE6ICdEYXRhJywgZDI6ICdEYXRhJywgZDM6ICdEYXRhJ30sXG4gIHtkMTogJ0RhdGEnLCBkMjogJ0RhdGEnLCBkMzogJ0RhdGEnfSxcbiAge2QxOiAnRGF0YScsIGQyOiAnRGF0YScsIGQzOiAnRGF0YSd9XG5dO1xuXG48VGFibGUgY2FwdGlvbj0nVGFibGUgMSAtIEdlbmVyYXRlZCB0YWJsZS4nIGhlYWQ9e1snSGVhZGluZycsICdIZWFkaW5nJywgJ0hlYWRpbmcnXX0gYm9keT17ZGF0YX0vPlxuXG48VGFibGUgY2FwdGlvbj0nVGFibGUgMiAtIEZyb20gQ2hpbGRyZW4uJz5cbiAgPHRoZWFkPlxuICAgIDx0cj5cbiAgICAgIDx0aCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+SGVhZGluZzwvdGg+XG4gICAgICA8dGggY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPkhlYWRpbmc8L3RoPlxuICAgICAgPHRoIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5IZWFkaW5nPC90aD5cbiAgICA8L3RyPlxuICA8L3RoZWFkPlxuXG4gIDx0Ym9keT5cbiAgICA8dHI+XG4gICAgICA8dGQgY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPkRhdGE8L3RkPlxuICAgICAgPHRkIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5EYXRhPC90ZD5cbiAgICAgIDx0ZCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+RGF0YTwvdGQ+XG4gICAgPC90cj5cbiAgICA8dHI+XG4gICAgICA8dGQgY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPkRhdGE8L3RkPlxuICAgICAgPHRkIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5EYXRhPC90ZD5cbiAgICAgIDx0ZCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+RGF0YTwvdGQ+XG4gICAgPC90cj5cbiAgICA8dHI+XG4gICAgICA8dGQgY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPkRhdGE8L3RkPlxuICAgICAgPHRkIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5EYXRhPC90ZD5cbiAgICAgIDx0ZCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+RGF0YTwvdGQ+XG4gICAgPC90cj5cbiAgPC90Ym9keT5cbjwvVGFibGU+XG5gfVxuICAgIDwvQ29kZWJsb2NrPlxuICA8L3NlY3Rpb24+XG5cblxuICA8c2VjdGlvbj5cbiAgICA8aDI+VGFibGUgSGVhZDwvaDI+XG5cbiAgICA8cD5cbiAgICAgIFRhYmxlIGhlYWluZ3MgY2FuIGJlIHNldCBieSBwYXNzaW5nIGEgbGlzdCBvZiBoZWFkaW5nIHRvIHRoZSA8Y29kZT5oZWFkPVtdPC9jb2RlPiBwcm9wLjxiciAvPlxuICAgICAgQWx0ZXJuYXRpdmVseSBpZiB0aGUgYm9keSBwcm9wIGlzIGJlaW5nIHVzZWQgdG8gZ2VudGVyYXRlIHRhYmxlIGRhdGEgaGVhZGluZyBjYW4gYWxzbyBiZSBnZW5lcmF0ZWQgdXNpbmcgdGhlIEpTT04ga2V5czxjb2RlPmhlYWQ9JyonPC9jb2RlPi5cbiAgICA8L3A+XG4gICAgPE5vdGU+XG4gICAgICBLZXlzIGdlbmVyYXRlIGEgbGlzdCBvZiBoZWFkaW5ncyBpbiB0aGUgb3JkZXIgdGhleSBhcHBlYXJzLiBBbHNvIHRoZSBrZXlzIHdpbGwgYmUgY2FzZSBpbnNlbnNpdHZlLlxuICAgIDwvTm90ZT5cblxuICAgIDxoMyBjbGFzc05hbWU9J2V4YW1wbGUnPkV4YW1wbGU8L2gzPlxuICAgIDxUYWJsZSBjYXB0aW9uPSdUYWJsZSAxIC0gSGVhZGluZ3MgZnJvbSBib2R5IGtleXMuJyBjb25kZW5zZWQgaGVhZD0nKicgYm9keT17aXRlbXN9Lz5cblxuICAgIDxUYWJsZSBjYXB0aW9uPSdUYWJsZSAyIC0gSGVhZGlucyBmcm9tIHByb3AuJyBjb25kZW5zZWQgaGVhZD17WydIZWFkaW5nJywgJ0hlYWRpbmcnLCAnSGVhZGluZyddfSBib2R5PXtpdGVtc30vPlxuXG4gICAgPGg0IGNsYXNzTmFtZT0nY29kZSc+Q29kZTwvaDQ+XG4gICAgPENvZGVibG9jayBzY3JvbGw9J3RleHQnIHN5bnRheD0neG1sJz5cbntcbmBjb25zdCBpdGVtcyA9IFtcbiAge1xuICAgIE5hbWU6ICdPVElTJyxcbiAgICBzY29yZTogMzksXG4gICAgaGVpZ2h0OiA1LjZcbiAgfSwge1xuICAgIG5hbWU6ICdqb2NlbHluJyxcbiAgICBzY29yZTogNjUsXG4gICAgaGVpZ2h0OiA0LjhcbiAgfSwge1xuICAgIG5hbWU6ICdBbmlhJyxcbiAgICBzY29yZTogLTUwLFxuICAgIGhlaWdodDogNi4xMFxuICB9XG5dO1xuXG48VGFibGUgY2FwdGlvbj0nVGFibGUgMSAtIEhlYWRpbmdzIGZyb20gYm9keSBrZXlzLicgY29uZGVuc2VkIGhlYWQ9JyonIGJvZHk9e2l0ZW1zfS8+XG5cbjxUYWJsZSBjYXB0aW9uPSdUYWJsZSAyIC0gSGVhZGlucyBmcm9tIHByb3AuJyBjb25kZW5zZWQgaGVhZD17WydIZWFkaW5nJywgJ0hlYWRpbmcnLCAnSGVhZGluZyddfSBib2R5PXtpdGVtc30vPlxuYH1cbiAgICA8L0NvZGVibG9jaz5cbiAgPC9zZWN0aW9uPlxuXG5cbiAgPHNlY3Rpb24+XG4gICAgPGgyPlRhYmxlIGNvbmRlbnNlZDwvaDI+XG5cbiAgICA8cD5cbiAgICAgIFRvIG1ha2UgdGhlIHRhYmxlIG1vdmUgY29tcGFjdCBhZGRcbiAgICAgIHRoZSA8Y29kZT5jb25kZW5zZWQ8L2NvZGU+IHByb3AgdG8gdGhlIFRhYmxlcyBwcm9wcy5cbiAgICA8L3A+XG5cbiAgICA8aDMgY2xhc3NOYW1lPSdleGFtcGxlJz5FeGFtcGxlPC9oMz5cbiAgICA8VGFibGUgY2FwdGlvbj0nQ29uZGVuc2VkIHRhYmxlJyBjb25kZW5zZWQgaGVhZD17WydIZWFkaW5nJywgJ0hlYWRpbmcnLCAnSGVhZGluZyddfSBib2R5PXtkYXRhfS8+XG5cbiAgICA8aDQgY2xhc3NOYW1lPSdjb2RlJz5Db2RlPC9oND5cbiAgICA8Q29kZWJsb2NrIHN5bnRheD0neG1sJz5cbntcbmBjb25zdCBkYXRhID0gW1xuICB7ZDE6ICdEYXRhJywgZDI6ICdEYXRhJywgZDM6ICdEYXRhJ30sXG4gIHtkMTogJ0RhdGEnLCBkMjogJ0RhdGEnLCBkMzogJ0RhdGEnfSxcbiAge2QxOiAnRGF0YScsIGQyOiAnRGF0YScsIGQzOiAnRGF0YSd9XG5dO1xuPFRhYmxlIGNhcHRpb249J0NvbmRlbnNlZCB0YWJsZScgY29uZGVuc2VkIGhlYWQ9e1snSGVhZGluZycsICdIZWFkaW5nJywgJ0hlYWRpbmcnXX0gYm9keT17ZGF0YX0vPlxuYH1cbiAgICA8L0NvZGVibG9jaz5cbiAgPC9zZWN0aW9uPlxuXG5cbiAgPHNlY3Rpb24+XG4gICAgPGgyPlRhYmxlIEhvdmVyPC9oMj5cblxuICAgIDxwPlxuICAgICAgVG8gaGlnaGxpZ2h0IGEgcm93IHdoZW4gaXQgaXMgaG92ZXJlZCBhZGRcbiAgICAgIHRoZSA8Y29kZT5ob3ZlcjwvY29kZT4gcHJvcCB0byB0aGUgVGFibGVzIHByb3BzLlxuICAgIDwvcD5cblxuICAgIDxoMyBjbGFzc05hbWU9J2V4YW1wbGUnPkV4YW1wbGU8L2gzPlxuICAgICAgPFRhYmxlIGNhcHRpb249J0hvdmVyYWJsZSB0YWJsZScgaG92ZXIgaGVhZD17WydIZWFkaW5nJywgJ0hlYWRpbmcnLCAnSGVhZGluZyddfSBib2R5PXtkYXRhfS8+XG4gICAgPGg0IGNsYXNzTmFtZT0nY29kZSc+Q29kZTwvaDQ+XG4gICAgPENvZGVibG9jayBzeW50YXg9J3htbCc+XG57XG5gY29uc3QgZGF0YSA9IFtcbiAge2QxOiAnRGF0YScsIGQyOiAnRGF0YScsIGQzOiAnRGF0YSd9LFxuICB7ZDE6ICdEYXRhJywgZDI6ICdEYXRhJywgZDM6ICdEYXRhJ30sXG4gIHtkMTogJ0RhdGEnLCBkMjogJ0RhdGEnLCBkMzogJ0RhdGEnfVxuXTtcblxuPFRhYmxlIGNhcHRpb249J0hvdmVyYWJsZSB0YWJsZScgIGhvdmVyIGhlYWQ9e1snSGVhZGluZycsICdIZWFkaW5nJywgJ0hlYWRpbmcnXX0gYm9keT17ZGF0YX0vPlxuYH1cbiAgICA8L0NvZGVibG9jaz5cbiAgPC9zZWN0aW9uPlxuXG5cbiAgPHNlY3Rpb24+XG4gICAgPGgyPlRhYmxlIHN0cmlwZWQ8L2gyPlxuXG4gICAgPHA+XG4gICAgICBBZGQgemVicmEtc3RyaXBpbmcgdG8gdGFibGUgYnkgYWRkaW5nXG4gICAgICB0aGUgPGNvZGU+c3RyaXBlZDwvY29kZT4gcHJvcCB0byB0aGUgVGFibGVzIHByb3BzLlxuICAgIDwvcD5cblxuICAgIDxoMyBjbGFzc05hbWU9J2V4YW1wbGUnPkV4YW1wbGU8L2gzPlxuICAgICAgPFRhYmxlIGNhcHRpb249J1N0cmlwZWQgdGFibGUnIHN0cmlwZWQgaGVhZD17WydIZWFkaW5nJywgJ0hlYWRpbmcnLCAnSGVhZGluZyddfSBib2R5PXtkYXRhfS8+XG5cbiAgICA8aDQgY2xhc3NOYW1lPSdjb2RlJz5Db2RlPC9oND5cbiAgICA8Q29kZWJsb2NrIHN5bnRheD0neG1sJz5cbntcbmBjb25zdCBkYXRhID0gW1xuICB7ZDE6ICdEYXRhJywgZDI6ICdEYXRhJywgZDM6ICdEYXRhJ30sXG4gIHtkMTogJ0RhdGEnLCBkMjogJ0RhdGEnLCBkMzogJ0RhdGEnfSxcbiAge2QxOiAnRGF0YScsIGQyOiAnRGF0YScsIGQzOiAnRGF0YSd9XG5dO1xuXG48VGFibGUgY2FwdGlvbj0nU3RyaXBlZCB0YWJsZScgIHN0cmlwZWQgaGVhZD17WydIZWFkaW5nJywgJ0hlYWRpbmcnLCAnSGVhZGluZyddfSBib2R5PXtkYXRhfS8+XG5gfVxuICAgIDwvQ29kZWJsb2NrPlxuICA8L3NlY3Rpb24+XG5cblxuICA8c2VjdGlvbj5cbiAgICA8aDI+VGFibGUgc29ydDwvaDI+XG5cbiAgICA8cD5cbiAgICAgIEdlbmVyYXRlZCB0YWJsZXMgY2FuIGJlIHNvcnRlZCBieSBwYXNzaW5nIHRoZSBrZXlzIG5hbWVzIHRvIHRoZSA8Y29kZT5zb3J0PC9jb2RlPiBwcm9wLlxuICAgICAgVGhlIHNvcnQgcHJvcCBjYW4gZWl0aGVyIGJlIHN0aW5nIGZvciBhIHNpbmdsZSBzb3J0IG9yIGEgbGlzdCBmb3IgbXVsdGlwbGUgc29ydC4gPGJyIC8+XG4gICAgICBUbyByZXZlcnNlIHRoZSBzb3J0IG9uIGEgZmVpbGQgcHV0ICctJyBpbiBmcm9tIG9mIHRoZSBrZXkgbmFtZS5cbiAgICA8L3A+XG5cbiAgICA8aDMgY2xhc3NOYW1lPSdleGFtcGxlJz5FeGFtcGxlPC9oMz5cbiAgICA8VGFibGUgY2FwdGlvbj0nU29ydGFibGUgdGFibGUnIHNvcnQ9e1snbmFtZScsICctaGVpZ2h0J119IGhlYWQ9JyonIGJvZHk9e2l0ZW1zfS8+XG5cbiAgICA8aDQgY2xhc3NOYW1lPSdjb2RlJz5Db2RlPC9oND5cbiAgICA8Q29kZWJsb2NrIHN5bnRheD0neG1sJz5cbntcbmBjb25zdCBpdGVtcyA9IFtcbiAge1xuICAgIE5hbWU6ICdPVElTJyxcbiAgICBzY29yZTogMzksXG4gICAgaGVpZ2h0OiA1LjZcbiAgfSwge1xuICAgIG5hbWU6ICdqb2NlbHluJyxcbiAgICBzY29yZTogNjUsXG4gICAgaGVpZ2h0OiA0LjhcbiAgfSwge1xuICAgIG5hbWU6ICdBbmlhJyxcbiAgICBzY29yZTogLTUwLFxuICAgIGhlaWdodDogNi4xMFxuICB9XG5dO1xuXG48VGFibGUgY2FwdGlvbj0nQ29uZGVuc2VkIHRhYmxlJyBzb3J0PXtbJ25hbWUnLCAnLWhlaWdodCddfSBoZWFkPSdpdGVtcycgYm9keT17aXRlbXN9Lz5cbmB9XG4gICAgPC9Db2RlYmxvY2s+XG4gIDwvc2VjdGlvbj5cblxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDI+VGFibGUgcHJvcHM8L2gyPlxuICAgICAgPHA+XG4gICAgICAgIFNlZSBiYXNlIGNvbXBvbmVudCBmb3IgYWRkaXRpb25hbCB1dGlsaXR5IHByb3BzLlxuICAgICAgPC9wPlxuXG4gICAgICA8VGFibGU+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPlByb3A8L3RoPlxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5UeXBlPC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5cbiAgICAgICAgICAgICAgPGNvZGU+Ym9keTwvY29kZT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPmFycmF5PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+XG4gICAgICAgICAgICAgIDxjb2RlPmNhcHRpb248L2NvZGU+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5zdHJpbmc8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5cbiAgICAgICAgICAgICAgPGNvZGU+Y29uZGVuc2VkPC9jb2RlPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+Ym9vbDwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPlxuICAgICAgICAgICAgICA8Y29kZT5ob3ZlcjwvY29kZT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPmJvb2w8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5cbiAgICAgICAgICAgICAgPGNvZGU+aGVhZDwvY29kZT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSd1ay10ZXh0LWxlZnQnPlxuICAgICAgICAgICAgICBvbmVPZlR5cGU8YnIgLz5cbiAgICAgICAgICAgICAgYXJyYXkgb3Igc3RyaW5nXG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5cbiAgICAgICAgICAgICAgPGNvZGU+b3ZlcmZsb3c8L2NvZGU+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5ib29sPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+XG4gICAgICAgICAgICAgIDxjb2RlPnNvcnQ8L2NvZGU+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5cbiAgICAgICAgICAgICAgb25lT2ZUeXBlPGJyIC8+XG4gICAgICAgICAgICAgIGFycmF5IG9yIHN0cmluZ1xuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J3VrLXRleHQtbGVmdCc+XG4gICAgICAgICAgICAgIDxjb2RlPnN0cmlwZWQ8L2NvZGU+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ndWstdGV4dC1sZWZ0Jz5ib29sPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC9UYWJsZT5cbiAgICA8L3NlY3Rpb24+XG5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBUYWJsZURvYztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vdGFibGUtZG9jLmpzeFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})