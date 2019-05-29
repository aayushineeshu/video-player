import React, { Component } from 'react';
import shaka from 'shaka-player';
import { NavBar, ContentInset } from '../components/Layout';
import { ProfileSummary } from '../components/Content';
import { ReactComponent as Logo } from '../icons/logo.svg';
import { ReactComponent as Search } from '../icons/search.svg';
import { ReactComponent as Notification } from '../icons/notification.svg';

var manifestUri = '//storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd';
var video = 'car-20120827-85.mp4';

class Player extends Component {

	componentDidMount() {
	  	// Install built-in polyfills to patch browser incompatibilities.
		shaka.polyfill.installAll();

		// Check to see if the browser supports the basic APIs Shaka needs.
		if (shaka.Player.isBrowserSupported()) {
			console.log("shaka", shaka)
		// Everything looks good!
			this.initPlayer();
			console.log("init", this.initPlayer)
		} else {
			// This browser does not have the minimum set of APIs we need.
			console.error('Browser not supported!');
		}
	}

	initPlayer(){
		var player = new shaka.Player(this.refs.video); 
		console.log("this.refs", this.refs);
		console.log("manifestUri", manifestUri);
		console.log("player", player.configure);
		// Listen for error events.
		player.addEventListener('error', this.onErrorEvent);

		// Try to load a manifest.
		// This is an asynchronous process.
		player.load(manifestUri).then(function() {
			player.configure({
				streaming: {
				  bufferingGoal: 100
				}
			  });
			// This runs if the asynchronous load is successful.
			console.log('The video has now been loaded!');
		}).catch(this.onError);  // onError is executed if the asynchronous load fails.
	}
	
	onErrorEvent(event) {
		// Extract the shaka.util.Error object from the event.
		this.onError(event.detail);
	}
	
	onError(error) {
		// Log the error.
		console.error('Error code', error.code, 'object', error);
	}

	componentWillUnmount() {
		// unmount stuff
		// kill stream hogging...:)
	}
	

	render() {
			var videos = [];
			videos.push('//storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd');
			console.log(videos);

   		return (
	    	<div style={{background: 'red'}}>
				<NavBar 
				 left={<Logo style={{height: '44px', width: '44px', justifySelf: 'flex-end'}} />}
				 ternaryRight={<Search style={{height: '24px', width: '24px', fill: '#fff', justifySelf: 'flex-end'}}  />}
				 secondaryRight={<Notification style={{height: '24px', width: '24px', fill: '#fff', paddingLeft: '30px'}}/>}
				 right={<ProfileSummary style={{paddingLeft: '30px'}}/>}
				/>
				<ContentInset>
					<video ref="video"
					width='100%'
					poster="//shaka-player-demo.appspot.com/assets/poster.jpg"
					controls 
					//autoPlay
					>
					</video>
				</ContentInset>
	    	</div>
	    );
  	}
}

export default Player;