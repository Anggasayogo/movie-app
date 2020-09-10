import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { Home, About } from '../pages'
import './routes.css'

const Routes = () => {
    return (
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm p-3 bg-white rounded fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to="/">Anime List</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/register"></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/update">Update</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
