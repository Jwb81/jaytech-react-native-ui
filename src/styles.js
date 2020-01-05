// import { Platform } from 'react';
// const colors = require('./colors')
// import colors from './colors';
const { StyleSheet } = require('react-native')
// import { StyleSheet } from 'react-native';

const flex = {
  display: 'flex',
};

const flexRow = {
  display: 'flex',
  flexDirection: 'row',
};
const flexColumn = {
  display: 'flex',
  flexDirection: 'column',
};

const start = 'flex-start';
const center = 'center';
const end = 'flex-end';
const around = 'space-around';
const between = 'space-between';
const baseline = 'baseline';
const stretch = 'stretch';

const directions = [
  { name: 'row', value: flexRow },
  { name: 'column', value: flexColumn },
];
const justifySpacing = [
  { name: 'Start', value: start },
  { name: 'Center', value: center },
  { name: 'End', value: end },
  { name: 'Between', value: between },
  { name: 'Around', value: around },
];
const alignSpacing = [
  { name: 'Start', value: start },
  { name: 'Center', value: center },
  { name: 'End', value: end },
  { name: 'Baseline', value: baseline },
  { name: 'Stretch', value: stretch },
];

let flexStyles = {};
directions.forEach(dir => {
  justifySpacing.forEach(justify => {
    alignSpacing.forEach(align => {
      const name = `${dir.name}${justify.name}${align.name}`;
      flexStyles[name] = {
        ...dir.value,
        justifyContent: justify.value,
        alignItems: align.value,
      };
    });
  });
});

// set margin & padding directions
const marginTop = 'marginTop';
const marginRight = 'marginRight';
const marginBottom = 'marginBottom';
const marginLeft = 'marginLeft';

const paddingTop = 'paddingTop';
const paddingRight = 'paddingRight';
const paddingBottom = 'paddingBottom';
const paddingLeft = 'paddingLeft';

const spaceBreakpoints = [5, 10, 15, 20, 25, 50];

const marginDirections = [
  { label: 't', value: [marginTop] },
  { label: 'r', value: [marginRight] },
  { label: 'b', value: [marginBottom] },
  { label: 'l', value: [marginLeft] },
  { label: 'x', value: [marginLeft, marginRight] },
  { label: 'y', value: [marginTop, marginBottom] },
  { label: '', value: [marginTop, marginRight, marginBottom, marginLeft] },
];
const paddingDirections = [
  { label: 't', value: [paddingTop] },
  { label: 'r', value: [paddingRight] },
  { label: 'b', value: [paddingBottom] },
  { label: 'l', value: [paddingLeft] },
  { label: 'x', value: [paddingLeft, paddingRight] },
  { label: 'y', value: [paddingTop, paddingBottom] },
  { label: '', value: [paddingTop, paddingRight, paddingBottom, paddingLeft] },
];
const marginLayouts = {};
const paddingLayouts = {};

// creating margin combos
marginDirections.forEach(dir => {
  spaceBreakpoints.forEach(bp => {
    marginLayouts[`m${dir.label}${bp}`] = dir.value.reduce((acc, cur) => {
      acc[cur] = bp;
      return acc;
    }, {});
  });
});

// creating padding combos
paddingDirections.forEach(dir => {
  spaceBreakpoints.forEach(bp => {
    paddingLayouts[`p${dir.label}${bp}`] = dir.value.reduce((acc, cur) => {
      acc[cur] = bp;
      return acc;
    }, {});
  });
});

const stylesheet = {
  // BASICS
  flex,
  flexRow,
  flexColumn,

  // SIZING
  flexGrow1: {
    flexGrow: 1,
  },
  flexGrow2: {
    flexGrow: 2,
  },
  flexGrow3: {
    flexGrow: 3,
  },
  flexGrow4: {
    flexGrow: 4,
  },
  flexGrow5: {
    flexGrow: 5,
  },

  // flexShink1: {
  //   flexShink: 1,
  // },
  // flexShink2: {
  //   flexShink: 2,
  // },
  // flexShink3: {
  //   flexShink: 3,
  // },
  // flexShink4: {
  //   flexShink: 4,
  // },
  // flexShink5: {
  //   flexShink: 5,
  // },

  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  flex3: {
    flex: 3,
  },
  flex4: {
    flex: 4,
  },
  flex5: {
    flex: 5,
  },

  // OTHER FLEX
  flexWrap: {
    flexWrap: 'wrap',
  },

  alignSelfStretch: {
    alignSelf: 'stretch',
  },

  // TEXT
  textLeft: { textAlign: 'left' },
  textCenter: { textAlign: 'center' },
  textRight: { textAlign: 'right' },

  textSm: {
    fontSize: 14,
  },
  textMd: {
    fontSize: 18,
  },
  textLg: {
    fontSize: 22,
  },
  textXl: {
    fontSize: 26,
  },
  textHeader: {
    fontSize: 40,
  },
  textFamilyChalkboard: {
    fontFamily: 'Chalkboard SE',
    // fontFamily: 'Avenir'
    // fontFamily: 'Optima'
  },
  textBold: {
    fontWeight: 'bold',
  },
  textNote: {
    color: '#777',
  },
  textWhite: {
    color: 'white',
  },
  textBlack: {
    color: 'black',
  },

  // CONTAINERS
  widthFill: {
    width: '100%',
  },
  heightFill: {
    height: '100%',
  },

  // BUTTONS
  button: {
    padding: 15,
    margin: 10,
    borderRadius: 5,
    // backgroundColor: colors.green.light,
  },

  // FLEX STYLES
  ...flexStyles,

  // MARGIN
  ...marginLayouts,

  // PADDING
  ...paddingLayouts,
};

module.exports = StyleSheet.create(stylesheet);
// export default StyleSheet.create(stylesheet);
