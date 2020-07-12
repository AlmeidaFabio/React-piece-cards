import React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import Form from './pages/Form'
import Profile from './pages/Profile'
import ProfileAdm from './pages/Profile/adm'
import Edit from './pages/Edit'
import AddImage from './pages/AddImage'

export default function Routes() {
    return (
        <BrowserRouter>
            <Header/>
            <Switch >
                <Route exact path="/" component={Home}/>

                <Route exact path="/character" component={Form}/>

                <Route path="/character/:id" exact render={(props) => <Profile {...props}/>}/> 

                <Route path="/character/:id/adm" exact render={(props) => <ProfileAdm {...props}/>}/>

                <Route path="/character/:id/edit" exact render={(props) => <Edit {...props}/>}/>

                <Route path="/image/:id" exact render={(props) => <AddImage {...props}/>}/> 

            </Switch>
            <Footer />
        </BrowserRouter>
    )
}