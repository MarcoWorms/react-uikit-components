'use strict';

import React from 'react';
import uikit from 'react-uikit-base';


const Article = (props) => {
  // CSS classes
  const cssClassNames = uikit.helpers.cleanClasses([
    'uk-article',
    props.classes,
    props.className
  ]);


  // Elements
  const title = props.title ? <h1 className='uk-article-title'>{props.title}</h1> : null;
  const meta = props.meta ? <p className='uk-article-meta'>{props.meta}</p> : null;
  const lead = props.lead ? <p className='uk-article-lead'>{props.lead}</p> : null;


  // Return Component
  return <article
    {...{
      ...uikit.helpers.cleanProps(['title'])(props),
      ...uikit.events(props)
    }}
    className={cssClassNames}
    data-kitid={props.kitid}
  >
    {title}
    {meta}
    {lead}
    {props.children}
  </article>;
};


Article.propTypes = {
  children  : React.PropTypes.any,
  className : React.PropTypes.string,
  classes   : React.PropTypes.array,
  kitid     : React.PropTypes.string,
  lead      : React.PropTypes.string,
  meta      : React.PropTypes.string,
  title     : React.PropTypes.string
};


export default uikit.base(Article);
