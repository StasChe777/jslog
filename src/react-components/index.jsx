import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import JsLogTheme from './muiThemes/JsLogMuiThemeGreyscale.js';
import {MuiThemeProvider} from 'material-ui/styles';

import Home from './pages/HomePage.jsx';
import ArticleContainer from './pages/ArticleContainer.jsx';

const JsLog = () => (
    <Router>
        <div>
            <Route component={ScrollToTop} />
            <Route exact path="/" component={Home}/>
            <Route exact path="/articles/:article_id" component={ArticleContainer}/>
        </div>
    </Router>
);

function App() {
    return (
        <MuiThemeProvider theme={JsLogTheme}>
            <JsLog />
        </MuiThemeProvider>
    );
}

const ScrollToTop = () => {
    window.scrollTo(0, 0);
    return null;
};

render(<App/>, document.getElementById("pageBody"));
