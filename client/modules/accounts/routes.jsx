import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import MainLayout from '/client/modules/core/components/main_layout.jsx';

export default function (injectDeps, {Meteor}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  // Meteor.startup(() => {
  //   ReactDOM.render(
  //     (<Router
  //       history={browserHistory}
  //       onUpdate={() => {window.scrollTo(0, 0);}}>
  //       <Route
  //         path=""
  //         component = {MainLayoutCtx}>
  //         <IndexRoute component={} />
  //       </Route>
  //     </Router>)
  //   );
  // });

}
