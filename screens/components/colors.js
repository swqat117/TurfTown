
_colorGradient = (red) => {
  console.log(red);
  return red;
}

const opacity = [
  '00', '1A', '33', '4D', '66', '80', '99', 'B3', 'CC', 'E6', 'FF'
]



_gradientCreator = (baseColor) => {
  let colorGradient = []
  for (var i=0; i<opacity.length; i++) {
    colorGradient.push(baseColor + opacity[i])
  }
  return colorGradient
}

//op is opacity
export const gradientArray = (baseColor, op) => { 
  let a = baseColor+opacity[op]
  return [a,a]
};

export const colors = {
  white:'#FCFCFC',
  black:'#333333',

  red: '#FF5733',
  maroon: '#AD1457',
  purple: '#6A1B9A',
  indigo: '#283593',
  blue: '#1565C0',
  lightBlue: '#0277BD',
  teal: '#00838F',
  darkGreen: '#00695C',
  lightOrange: '#F57F17',
  darkOrange: '#E65100',

  primary: '#064EE0',
  secondary1: '#FEB63E',
  secondary2: '#3EC119',
  secondary3: '#E81CCD',
  secondary4: '#FE3A46',
  primaryOp4: '#064EE066',
  secondary1Op4: '#FEB63E66',
  secondary2Op4: '#3EC11966',
  secondary3Op4: '#E81CCD66',
  secondary4Op4: '#FE3A4666',
}
