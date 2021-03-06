const xs = packs.xstream.default
const {run} = packs.run
const {div, button, p, makeDOMDriver} = packs.dom

const devToolsProducer = {
  start: listener => {
    window.cyclePlug = listener.next.bind(listener)
  },
  stop: () => {
    delete window.cyclePlug
  }
}

function main(sources) {
  const devTools$ = xs.create(devToolsProducer)
  const action$ = xs.merge(
    sources.DOM.select('.dec').events('click').mapTo(-1),
    sources.DOM.select('.inc').events('click').mapTo(+1),
    devTools$
  );

  const count$ = action$.fold((x, y) => x + y, 0);

  const vdom$ = count$.map(count =>
    div([
      button('.dec', 'Decrement'),
      button('.inc', 'Increment'),
      p('Counter: ' + count)
    ])
  );

  return {
    DOM: vdom$
  };
}

run(main, { DOM: makeDOMDriver('#app') })
