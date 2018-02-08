import {createMuiTheme} from 'material-ui/styles';
import red from 'material-ui/colors/red';
import scales from './scales.js';

let Theme = createMuiTheme({
   scales: scales,
    typography: {
        margin_thin: scales.primary.p1,
        margin_thick: scales.primary.p3,
        line_height: scales.primary.p1,
        code_font_family: '"Droid Sans Mono", monospace',
        code_vertical_padding: scales.primary.m3,
        font_body1: {
            fontSize: scales.primary.main,
        },
        font_title: {
            fontSize: scales.primary.p1,
        },
        font_caption: {
            fontSize: scales.secondary_m1,
        },
    },
    layout: {
        // page_column_width_xs: scales.primary.p6, REPLACED WITH STATIC GUTTERS AT SMALL SCREEN SIZES
        page_column_gutter_xs: scales.px.primary.m1,
        // page_column_width_sm: scale.primary.p7, REPLACED WITH STATIC GUTTERS AT SMALL SCREEN SIZES
        page_column_gutter_sm: scales.px.primary.p2,
        page_column_width_md: scales.primary.p8,
        page_column_width_lg: scales.primary.p8,
        page_column_width_xl: scales.primary.p8,
    },
    palette: {
        primary: {
            light: '#6d6d6d',
            main: '#424242',
            dark: '#1b1b1b',
            contrastText: '#ffffff',
        },
        secondary: {
            light: '#cfcfcf',
            main: '#9e9e9e',
            dark: '#707070',
            contrastText: '#000000',
        },
    },
    overrides: {},
});
Theme.layout.responsive_page_column = {
    marginLeft: scales.primary.m1,
    marginRight: scales.primary.m1,
    [Theme.breakpoints.up('sm')]: {
        marginLeft: scales.primary.p2,
        marginRight: scales.primary.p2,
    },
    [Theme.breakpoints.up('md')]: {
        maxWidth: Theme.layout.page_column_width_md,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    [Theme.breakpoints.up('lg')]: {
        maxWidth: Theme.layout.page_column_width_lg,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    [Theme.breakpoints.up('xl')]: {
        maxWidth: Theme.layout.page_column_width_xl,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
};
Theme.layout.vertical_spacing_even = {
    marginTop: Theme.typography.margin_thin,
    marginBottom: Theme.typography.margin_thin,
    lineHeight: Theme.typography.line_height,
};
Theme.layout.vertical_spacing_uneven = {
    marginTop: Theme.typography.margin_thick,
    marginBottom: Theme.typography.margin_thin,
};
Theme.overrides.MuiTypography = {
    fontSize: 18,
    body1: Object.assign(
        {},
        Theme.layout.vertical_spacing_even,
        Theme.layout.responsive_page_column,
        Theme.typography.font_body1,
    ),
    title: Object.assign(
        {},
        Theme.layout.vertical_spacing_uneven,
        Theme.layout.responsive_page_column,
        Theme.typography.font_title,
    ),
    display1: Object.assign(
        {},
        Theme.layout.vertical_spacing_uneven,
        Theme.layout.responsive_page_column
    ),
    caption: Object.assign(
        {},
        Theme.typography.font_caption
    ),
};

export default Theme;
