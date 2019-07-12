import React, { Fragment } from "react";
import { Router, Route, Switch,Link } from 'react-router-dom'
import MaterialIcon from 'material-icons-react';
import PropTypes from 'prop-types';

function TitleDetails(props) {

  return(
    <Fragment>
    <Link className={props.classNames} to="/category"><MaterialIcon  icon="keyboard_backspace"  color='red' /></Link> 
    <div className='header-title'>{props.match.params.id}</div>
    </Fragment>
  );

}


function HeaderTitle(props) {

    return (

      <Router  history={props.history}>        
        <Switch>
          <Route exact path="/:id" component={TitleDetails}/>
        </Switch>
      </Router>

    );

}

HeaderTitle.propTypes = {
  header: PropTypes.string.isRequired
};

export default HeaderTitle;