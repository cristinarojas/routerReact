import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const PrintPlanner = (props) => {
  const { match } = props;
  console.log('match----->', match);
  const { params: { id } } = match;
  console.log('id====>', id);

  return (
    <div>
      <h1>PRINT PLANNER view</h1>

      <Link to="/overview">overview</Link>
    </div>
  )
}

export default withRouter(PrintPlanner);
