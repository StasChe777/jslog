import React from 'react';
import Typography from 'material-ui/Typography';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
  heading: Object.assign(
    {
      fontSize: theme.scales.primary.p2,
      textAlign: 'center',
    },
    theme.layout.vertical_spacing_uneven
  )
});

class SectionHeading extends React.Component {
  render () {
    const {classes, children} = this.props;
    return (
      <Typography 
        variant='title' 
        className={classes.heading}
      >
        {children}
      </Typography>
    );
  }
}

export default withStyles(styles)(SectionHeading);
