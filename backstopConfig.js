'use strict';

const backstop = require('@mate-academy/backstop-config');
const { basicScenario } = backstop;

const basic = {
  ...basicScenario,
  label: 'Elementary test',
  // <-- zmiana na lokalny serwer Parcel
  referenceUrl: 'http://localhost:1234',
};

const config = {
  ...backstop,
  fileNameTemplate: '{scenarioLabel}',
  onBeforeScript: 'puppet/onBefore.js',
  onReadyScript: 'puppet/onReady.js',
  viewports: [
    { name: 'tablet_h', width: 1024, height: 768 },
  ],
  scenarios: [
    {
      ...basic,
      label: 'Card with data-qa_card',
      url: 'http://localhost:1234',   
      selectors: ['[data-qa="card"]'],
    },
    {
      ...basic,
      label: 'Link with data-qa_hover',
      url: 'http://localhost:1234',   
      hoverSelector: '[data-qa="hover"]',
      postInteractionWait: 1000,
      selectors: ['[data-qa="card"]'],
    },
  ],
};

module.exports = config;
