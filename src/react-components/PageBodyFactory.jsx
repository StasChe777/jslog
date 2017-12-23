import ArticlesPage from './pages/ArticlesPage.jsx';
import IndexPage from './pages/IndexPage.jsx';
import BooleanFunctionPage from './pages/BooleanFunctionPage.jsx';
import UltimatePseudoClassicalInheritancePage from './pages/UltimatePseudoClassicalInheritancePage.jsx';
import TheTwoPillarsOfJavascriptPage from './pages/TheTwoPillarsOfJavascriptPage.jsx';

class PageBodyFactory extends React.Component {
    render() {
        const pathname = window.location.pathname;
        let contentTag;
        if (pathname === "/index") {
            contentTag = <IndexPage />;
        } else if (pathname === "/articles") {
            contentTag = <ArticlesPage />;
        } else if (pathname === "/articles/boolean-function") {
            contentTag = <BooleanFunctionPage />
        } else if (pathname === "/articles/ultimate-pseudo-classical-inheritance") {
            contentTag = <UltimatePseudoClassicalInheritancePage />
        } else if (pathname === "/articles/the-two-pillars-of-javascript") {
            contentTag = <TheTwoPillarsOfJavascriptPage />
        } else {
            contentTag = <IndexPage />
        }
        return contentTag;
    };
}

export default PageBodyFactory;
