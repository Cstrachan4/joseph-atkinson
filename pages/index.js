import {connect, useDispatch, useSelector} from "react-redux";
import clsx from 'clsx';

import HeadMeta from '../components/HeadMeta';
import Example from '../components/_refcomponent';

import '../lib/styles.js';

function HomePage() {

  return (
  	<>
	  	<HeadMeta title="Joseph Atkinson" description="Joseph Atkinson is a designer and digital art director who lives and works in London. Currently designing interfaces with TBC.work" />
	  	<div className="home-page">
	  		<div>
	  			<p>
	  			<span>Joseph Atkinson is a designer and digital art director who lives and works in London. </span>
				<span>Currently designing interfaces with <a href="http://tbc.work" target="_blank">TBC.work</a>.</span>
				</p>
	  		</div>
	  		<div>
	  			<ul>
	  				<li>
	  					<a href="mailto:hellojosephatkinson@gmail.com">Email</a>,
	  				</li>
	  				<li>
	  					<a href="https://www.are.na/j-a-jrm_56tfn14">Are.na</a>
	  				</li>
	  			</ul>
	  		</div>
	  	</div>
  	</>
  )
}

export default HomePage;


