import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Navbar } from './components/Navbar';

export default function App() {
	return (
		<BrowserRouter>
		<Navbar />
		<div className="container pt-4">
			<Switch>
				<Route path={'/'} exact component={Home}></Route>
				<Route path={'/about'} exact component={About}></Route>
			</Switch>
		</div>
		</BrowserRouter>
	);
}
