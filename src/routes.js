import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 

import Index from './scenes/index';
import Projects from './scenes/projects';
import ProjectId from './scenes/projectById';
import About from './scenes/about';
import Contact from './scenes/contact';
import NoMatch from './components/nomatch';





export default () => {

	
		return (
			<div>
				<BrowserRouter>
					<div>
						<Switch>
							<Route exact={true} path="/" component={Index} />
							<Route exact={true} path="/projects" component={Projects} />
							<Route path="/projects/:id" component={ProjectId} />
							<Route exact={true} path="/about" component={About} />
							<Route exact={true} path="/contact" component={Contact} />
							<Route path="*" component={NoMatch} />
						</Switch>
					</div>
				</BrowserRouter>
				
			</div>
		
		);
	};
