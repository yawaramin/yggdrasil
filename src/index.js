'use strict';

const xs = require('xstream').default;
const run = require('@cycle/xstream-run').run;
const cycle_dom = require('@cycle/dom');
const h = cycle_dom.h;

const comment_selector = 'li.comment';
const comments =
  xs.of(['Hello, World!', 'Goodbye, cruel world!']).remember();

function num_comments(dom) {
  return dom
    .select(comment_selector)
    .elements()
    .map(arr => arr.length)
    .startWith(2);
}

function view(args) {
  const num_comments = args[0];
  const comments = args[1];

  return h(
    'ul',
    [h('li', 'Showing ' + num_comments + ' comments.')]
      .concat(comments.map(comment => h(comment_selector, comment))));
}

function main(sources) {
  const sinks =
    { DOM: xs.combine(num_comments(sources.DOM), comments).map(view) };

  return sinks;
}

run(main, { DOM: cycle_dom.makeDOMDriver('#app') });

