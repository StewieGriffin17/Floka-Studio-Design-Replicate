import React from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Portfolio from './components/Portfolio';
import Company from './components/Company';
import Facts from './components/Facts';
import Users from './components/Users';
import Feedback from './components/Feedback';
import Form from './components/Form';
import Rewards from './components/Rewards';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import Footer from './components/Footer';

const App = () => {
    return (
        <div className="bg-[#f2f2f2] min-w-0 overflow-x-clip">
            <CustomCursor />
            <Navbar></Navbar>
            <Hero></Hero>
            <Card></Card>
            <Portfolio></Portfolio>
            <Company></Company>
            <Facts></Facts>
            <Users></Users>
            <Feedback></Feedback>
            <Form></Form>
            <Rewards></Rewards>
            <Team></Team>
            <FAQ></FAQ>
            <Blog></Blog>
            <Footer></Footer>
        </div>
    );
};

export default App;
