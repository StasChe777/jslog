import React from 'react';
import CodeBlock from '../../CodeBlock.jsx';
import Typography from 'material-ui/Typography';
import {withStyles} from 'material-ui/styles';

const title = "The boolean function";
const image = "boolean-function.png";
const link = "boolean-function";
const blurb = "An description of the native Boolean function and explanation of why understanding this simple function might be more important than you think";
const published = true;

const styles = theme => ({
    table: {
        margin: 'auto auto',
    },
    body_text: theme.layout.body_text,
});

const Table = function (props) {
    return (
<figure>
<table className={props.classes.table}>
<tbody>
  <tr>
    <th>
      Data type
    </th>
    <th>
      Values converted to <code>true</code>
    </th>
    <th>
      Values converted to <code>false</code>
    </th>
  </tr>
  <tr>
    <td>
      Boolean
    </td>
    <td>
      <code>true</code>
    </td>
    <td>
      <code>false</code>
    </td>
  </tr>
  <tr>
    <td>
      String
    </td>
    <td>
      Any nonempty string
    </td>
    <td>
      "" (empty string)
    </td>
  </tr>
  <tr>
    <td>
      Number
    </td>
    <td>
      Any nonzero number (including infinity)
    </td>
    <td>
      0 or <code>NaN</code>
    </td>
  </tr>
  <tr>
    <td>
      Object
    </td>
    <td>
      Any object
    </td>
    <td>
      <code>null</code>
    </td>
  </tr>
  <tr>
    <td>
      Undefined
    </td>
    <td>
      n/a
    </td>
    <td>
      <code>undefined</code>
    </td>
  </tr>
</tbody>
</table>
<figcaption>Mapping of JavaScript's datatypes to boolean literals using Boolean() casting function. Source : <cite>Professional JavaScript for Web Developers third edition pg34</cite></figcaption>
</figure>
    );
};

class PageContents extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div>
                <div className={classes.body_text}>
                    <Typography>
                        The Boolean() function converts a variable of any data type into it's boolean literal equivalent.
                    </Typography>
                </div>
                    <Table classes={classes} />
                <div className={classes.body_text}>
                    <Typography type='display1'>Why is this important?</Typography>
                    <Typography>
                        This casting to boolean literals is performed automatically within flow controls like <i>if statements</i>. Understanding the mappings here means that you will be able to work concisely with flow controls. For example :
                    </Typography>
                    <CodeBlock gist_id="1f97ae4946a3c529283dd648e8c856f0">
                      <output>the Boolean() evaluation of the String true_bool ('false') is true</output>
                      <output>Uncaught TypeError: Cannot read property 'length' of undefined</output>
                    </CodeBlock>
                    <CodeBlock gist_id="fe20761a27144a71a1b126edcce69dcd">
                      <output>the Boolean() evaluation of the String true_bool ('false') is true</output>
                    </CodeBlock>
                    <Typography>
                        In the first example above, the coder has decided to check for the length of the String in order to determine whether or not it has been set with a meaningful value. However their effort is wasted as both of these will produce the same output (printed above).
                    </Typography>
                    <Typography type='title'>Complexity leads to errors</Typography>
                    <Typography>
                        Additionally there is a bug in the first code block. The <code>undefined</code> literal does not contain a <code>length</code> property and evaluation of <code className="language-javascript">undefined.length;</code> throws an error :
                    </Typography>
                    <Typography>
                        <output className="error">Uncaught TypeError: Cannot read property 'length' of undefined(…)</output> in Chrome45.0.
                    </Typography>
                    <Typography>
                        Evaluating an error inside an <i>if statement</i> will always produce a <code>false</code> result. As such, the bug will potentially go unnoticed.
                    </Typography>
                    <Typography type='title'>Conclusion</Typography>
                    <Typography>
                        The first solution will produce the same result as the second, but is less concise and as a result introduces the potential for bugs.
                    </Typography>
                </div>
            </div>
        );
    };
};

const StyledPageContents = withStyles(styles)(PageContents);
export {StyledPageContents}
export {title};
export {image};
export {blurb};
export {link};
export {published};
