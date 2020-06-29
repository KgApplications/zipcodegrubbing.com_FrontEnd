import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import DashBoard from './Dashboard/Dashboard';
import Reviews from './Reviews/Reviews';

class routing extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" exact component={DashBoard}/>
                    <Route path="/restaurant/:ID/reviews" exact component={Reviews}/>
                </Switch>
            </div>
        )
    }
}

export default routing