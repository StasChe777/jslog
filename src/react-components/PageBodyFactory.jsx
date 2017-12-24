import ArticlesPage from './pages/ArticlesPage.jsx';
import IndexPage from './pages/IndexPage.jsx';
import BooleanFunctionPage from './pages/BooleanFunctionPage.jsx';
import UltimatePseudoClassicalInheritancePage from './pages/UltimatePseudoClassicalInheritancePage.jsx';
import TheTwoPillarsOfJavascriptPage from './pages/TheTwoPillarsOfJavascriptPage.jsx';
import TheObjectObjectPage from './pages/TheObjectObjectPage.jsx';
import PrefixVsPostfixIncrementUnaryOperatorsPage from './pages/PrefixVsPostfixIncrementUnaryOperatorsPage.jsx';
import NumberConversionPage from './pages/NumberConversionPage.jsx';
import ModularisationWithoutObstructionPage from './pages/ModularisationWithoutObstructionPage.jsx';
import LoopsOrArrayMethodsPage from './pages/LoopsOrArrayMethodsPage.jsx';
import KeywordsAndReservedWordsInJavascriptPage from './pages/KeywordsAndReservedWordsInJavascriptPage.jsx';
import IterativeArrayMethodsPage from './pages/IterativeArrayMethodsPage.jsx';
import FunctionsAreObjectsTooPage from './pages/FunctionsAreObjectsTooPage.jsx';
import FloatingPointVisualisationPage from './pages/FloatingPointVisualisationPage.jsx';
import BuildAGameWithTdd from './pages/BuildAGameWithTdd.jsx';

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
        } else if (pathname === "/articles/the-object-object") {
            contentTag = <TheObjectObjectPage />
        } else if (pathname === "/articles/prefix-vs-postfix-increment-unary-operators") {
            contentTag = <PrefixVsPostfixIncrementUnaryOperatorsPage />
        } else if (pathname === "/articles/number-conversion") {
            contentTag = <NumberConversionPage />
        } else if (pathname === "/articles/modularisation-without-obstruction") {
            contentTag = <ModularisationWithoutObstructionPage />
        } else if (pathname === "/articles/loops-or-array-methods") {
            contentTag = <LoopsOrArrayMethodsPage />
        } else if (pathname === "/articles/keywords-and-reserved-words-in-javascript") {
            contentTag = <KeywordsAndReservedWordsInJavascriptPage />
        } else if (pathname === "/articles/iterative-array-methods") {
            contentTag = <IterativeArrayMethodsPage />
        } else if (pathname === "/articles/functions-are-objects-too") {
            contentTag = <FunctionsAreObjectsTooPage />
        } else if (pathname === "/articles/floating-point-visualisation") {
            contentTag = <FloatingPointVisualisationPage />
        } else if (pathname === "/articles/build-a-game-with-tdd") {
            contentTag = <BuildAGameWithTdd />
        } else {
            contentTag = <IndexPage />
        }
        return contentTag;
    };
}

export default PageBodyFactory;
