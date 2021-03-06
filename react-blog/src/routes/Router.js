import React, { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import AppNavbar from "../components/AppNavbar";
import Footer from '../components/Footer';
import Header from '../components/Header';
import CategoryResult from './normalRoute/CategoryResult';
import PostCardList from './normalRoute/PostCardList';
import PostDetail from './normalRoute/PostDetail';
import PostWrite from './normalRoute/PostWrite';
import Search from './normalRoute/Search';

const Router = () => (
    <Fragment>
        <AppNavbar />
        <Header />
        <Container id="main-body">
            <Switch>
                <Route path='/' exact component={PostCardList} />
                <Route path='/post' exact component={PostWrite} />
                <Route path='/post/:id' exact component={PostDetail} />
                <Route path='/post/category/:categoryName' exact component={CategoryResult} />
                <Route path='/search/:searchTerm' exact component={Search} />
                <Redirect from="*" to="/" />
            </Switch>
            {/* <h1>Hello Body</h1> */}
        </Container>
        <Footer />
    </Fragment>
)

export default Router
