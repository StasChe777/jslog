import React from 'react';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
});

const title = "Floating point visualisation";
const image = "floating-point-visualisation.jpg";
const link = "floating-point-visualisation";
const blurb = "A video shining some light on the mechanisms and limitations behind floating point number representation";
const published = true;

const PageContents = () => (
      <div className="container">
         <div className="section">
<div className="bs-example" data-example-id="responsive-embed-16by9-iframe-youtube">
<div className="embed-responsive embed-responsive-16by9">
   <iframe className="embed-responsive-item"src="https://www.youtube.com/embed/MqHDDtVYJRI" frameborder="0" allowfullscreen></iframe>
</div>
</div>
<p>This fascinating expose of the inner workings of the IEEE floating point standard gives foundation to some of the quirky features of the </p>
          </div>
      </div>
);

export default withStyles(styles)(PageContents);
export {title};
export {image};
export {blurb};
export {link};
export {published};
