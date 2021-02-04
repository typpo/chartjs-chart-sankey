const colors = [
  '#1F77B4',
  '#FF7F0E',
  '#2CA02C',
  '#D62728',
  '#9467BD',
  '#8C564B',
  '#E377C2',
  '#7F7F7F',
  '#BCBD22'
];

const category = {
  "Agricultural 'waste'": 'Agricultural',
  'Bio-conversion': 'Bio-conversion',
  Liquid: 'Liquid',
  Losses: 'Losses',
  Solid: 'Solid',
  Gas: 'Gas',
  'Biofuel imports': 'Biofuel',
  'Biomass imports': 'Biomass',
  'Coal imports': 'Coal',
  Coal: 'Coal',
  'Coal reserves': 'Coal',
  'District heating': 'District',
  Industry: 'Industry',
  'Heating and cooling - commercial': 'Heating',
  'Heating and cooling - homes': 'Heating',
  'Electricity grid': 'Electricity',
  'Over generation / exports': 'Over',
  'H2 conversion': 'H2',
  'Road transport': 'Road',
  Agriculture: 'Agriculture',
  'Rail transport': 'Rail',
  'Lighting & appliances - commercial': 'Lighting',
  'Lighting & appliances - homes': 'Lighting',
  'Gas imports': 'Gas',
  Ngas: 'Ngas',
  'Gas reserves': 'Gas',
  'Thermal generation': 'Thermal',
  Geothermal: 'Geothermal',
  H2: 'H2',
  Hydro: 'Hydro',
  'International shipping': 'International',
  'Domestic aviation': 'Domestic',
  'International aviation': 'International',
  'National navigation': 'National',
  'Marine algae': 'Marine',
  Nuclear: 'Nuclear',
  'Oil imports': 'Oil',
  Oil: 'Oil',
  'Oil reserves': 'Oil',
  'Other waste': 'Other',
  'Pumped heat': 'Pumped',
  'Solar PV': 'Solar',
  'Solar Thermal': 'Solar',
  Solar: 'Solar',
  Tidal: 'Tidal',
  'UK land based bioenergy': 'UK',
  Wave: 'Wave',
  Wind: 'Wind',
};

const catColors = {};
let colorIndex = 0;

const getColor = (item) => {
  const cat = category[item];
  if (!catColors[cat]) {
    catColors[cat] = colors[colorIndex % 9];
    colorIndex++;
  }
  return catColors[cat];
};

const data = [
  {from: "Agricultural 'waste'", to: 'Bio-conversion', flow: 124.729},
  {from: 'Bio-conversion', to: 'Liquid', flow: 0.597},
  {from: 'Bio-conversion', to: 'Losses', flow: 26.862},
  {from: 'Bio-conversion', to: 'Solid', flow: 280.322},
  {from: 'Bio-conversion', to: 'Gas', flow: 81.144},
  {from: 'Biofuel imports', to: 'Liquid', flow: 35},
  {from: 'Biomass imports', to: 'Solid', flow: 35},
  {from: 'District heating', to: 'Industry', flow: 10.639},
  {from: 'District heating', to: 'Heating and cooling - commercial', flow: 22.505},
  {from: 'District heating', to: 'Heating and cooling - homes', flow: 46.184},
  {from: 'Electricity grid', to: 'Over generation / exports', flow: 104.453},
  {from: 'Electricity grid', to: 'Heating and cooling - homes', flow: 113.726},
  {from: 'Electricity grid', to: 'H2 conversion', flow: 27.14},
  {from: 'Electricity grid', to: 'Industry', flow: 342.165},
  {from: 'Electricity grid', to: 'Road transport', flow: 37.797},
  {from: 'Electricity grid', to: 'Agriculture', flow: 4.412},
  {from: 'Electricity grid', to: 'Heating and cooling - commercial', flow: 40.858},
  {from: 'Electricity grid', to: 'Losses', flow: 56.691},
  {from: 'Electricity grid', to: 'Rail transport', flow: 7.863},
  {from: 'Electricity grid', to: 'Lighting & appliances - commercial', flow: 90.008},
  {from: 'Electricity grid', to: 'Lighting & appliances - homes', flow: 93.494},
  {from: 'Gas imports', to: 'Ngas', flow: 40.719},
  {from: 'Gas reserves', to: 'Ngas', flow: 82.233},
  {from: 'Gas', to: 'Heating and cooling - commercial', flow: 0.129},
  {from: 'Gas', to: 'Losses', flow: 1.401},
  {from: 'Gas', to: 'Thermal generation', flow: 151.891},
  {from: 'Gas', to: 'Agriculture', flow: 2.096},
  {from: 'Gas', to: 'Industry', flow: 48.58},
  {from: 'Geothermal', to: 'Electricity grid', flow: 7.013},
  {from: 'H2 conversion', to: 'H2', flow: 20.897},
  {from: 'H2 conversion', to: 'Losses', flow: 6.242},
  {from: 'H2', to: 'Road transport', flow: 20.897},
  {from: 'Hydro', to: 'Electricity grid', flow: 6.995},
  {from: 'Liquid', to: 'Industry', flow: 121.066},
  {from: 'Liquid', to: 'International shipping', flow: 128.69},
  {from: 'Liquid', to: 'Road transport', flow: 135.835},
  {from: 'Liquid', to: 'Domestic aviation', flow: 14.458},
  {from: 'Liquid', to: 'International aviation', flow: 206.267},
  {from: 'Liquid', to: 'Agriculture', flow: 3.64},
  {from: 'Liquid', to: 'National navigation', flow: 33.218},
  {from: 'Liquid', to: 'Rail transport', flow: 4.413},
  {from: 'Marine algae', to: 'Bio-conversion', flow: 4.375},
  {from: 'Ngas', to: 'Gas', flow: 122.952},
  {from: 'Nuclear', to: 'Thermal generation', flow: 839.978},
  {from: 'Oil imports', to: 'Oil', flow: 504.287},
  {from: 'Oil reserves', to: 'Oil', flow: 107.703},
  {from: 'Oil', to: 'Liquid', flow: 611.99},
  {from: 'Other waste', to: 'Solid', flow: 56.587},
  {from: 'Other waste', to: 'Bio-conversion', flow: 77.81},
  {from: 'Pumped heat', to: 'Heating and cooling - homes', flow: 193.026},
  {from: 'Pumped heat', to: 'Heating and cooling - commercial', flow: 70.672},
  {from: 'Solar PV', to: 'Electricity grid', flow: 59.901},
  {from: 'Solar Thermal', to: 'Heating and cooling - homes', flow: 19.263},
  {from: 'Solar', to: 'Solar Thermal', flow: 19.263},
  {from: 'Solar', to: 'Solar PV', flow: 59.901},
  {from: 'Solid', to: 'Agriculture', flow: 0.882},
  {from: 'Solid', to: 'Thermal generation', flow: 400.12},
  {from: 'Solid', to: 'Industry', flow: 46.477},
  {from: 'Thermal generation', to: 'Electricity grid', flow: 525.531},
  {from: 'Thermal generation', to: 'Losses', flow: 787.129},
  {from: 'Thermal generation', to: 'District heating', flow: 79.329},
  {from: 'Tidal', to: 'Electricity grid', flow: 9.452},
  {from: 'UK land based bioenergy', to: 'Bio-conversion', flow: 182.01},
  {from: 'Wave', to: 'Electricity grid', flow: 19.013},
  {from: 'Wind', to: 'Electricity grid', flow: 289.366}
];

module.exports = {
  config: {
    type: 'sankey',
    data: {
      datasets: [
        {
          data,
          colorFrom: (c) => getColor(c.dataset.data[c.dataIndex].from),
          colorTo: (c) => getColor(c.dataset.data[c.dataIndex].to),
          color: 'transparent'
        }
      ]
    }
  },
  options: {
    canvas: {
      height: 750,
      width: 1000
    }
  }
};
