'use strict';

const xs = require('xstream').default;
const run = require('@cycle/xstream-run').run;
const cycle_dom = require('@cycle/dom');
const isolate = require('@cycle/isolate').default;

function main() {
  const sinks = {
    DOM: xs.periodic(1000).map(i =>
      cycle_dom.h1('' + i + ' seconds elapsed'))
  };

  return sinks;
}

const drivers = { DOM: cycle_dom.makeDOMDriver('#app') };

run(main, drivers);

