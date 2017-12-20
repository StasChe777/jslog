import React from 'react';
//import ReactDOM from 'react-dom';
class Article extends React.Component {
    render() {
        return <div className="col s12 m4">
          <a className="articles-link-box" href={this.props.href}>
            <img src="/images/hero/modularisation-without-obstruction.jpg" alt="this needs defining" style={{width: "100%"}} />
            <h5 className="center">Modularisation without obstruction</h5>
            <p className="light">Overview of the article. Probably the same text which should appear in the hero image under the title when I get round to that</p>
          </a>
      </div>
    };
}
export default Article;
