import React, { Component } from 'react';
import shaka from 'shaka-player';
import { NavBar, ContentInset } from '../components/Layout';
import { ProfileSummary, Heading, HeaderWrapper } from '../components/Content';
import { ReactComponent as Logo } from '../icons/logo.svg';
import { ReactComponent as Search } from '../icons/search.svg';
import { ReactComponent as Notification } from '../icons/notification.svg';
import { ReactComponent as MusicIcon } from '../icons/musicIcon.svg';
import JsonData from '../data.json'


var manifestUri = '//storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd';

class Player extends Component {

	componentDidMount() {
		// Install built-in polyfills to patch browser incompatibilities.
		shaka.polyfill.installAll();

		// Check to see if the browser supports the basic APIs Shaka needs.
		if (shaka.Player.isBrowserSupported()) {
			// Everything looks good!
			this.initPlayer();
		} else {
			// This browser does not have the minimum set of APIs we need.
			console.error('Browser not supported!');
		}
	}

	initPlayer() {
		var player = new shaka.Player(this.refs.video);
		// Listen for error events.
		player.addEventListener('error', this.onErrorEvent);

		// Try to load a manifest.
		// This is an asynchronous process.
		player.load(manifestUri).then(function () {
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
		//var obj = JSON.parse(JsonData);
		//console.log(obj);
		
		return (
			<div>
				<NavBar
					left={<Logo style={{ justifySelf: 'flex-end' }} />}
					ternaryRight={<Search style={{ justifySelf: 'flex-end' }} />}
					secondaryRight={<Notification style={{ paddingLeft: '30px' }} />}
					right={<ProfileSummary style={{ paddingLeft: '30px' }} />}
				/>
					<HeaderWrapper>
					<MusicIcon />
					<Heading>Latest Music Videos</Heading>
					</HeaderWrapper>
					{/* <video ref="video"
						width='100%'
						poster="https://media.wonderlandmagazine.com/uploads/2019/04/ROLLERCOASTER_CAMILA_06_070color.jpg"
						controls
					    autoPlay
					/> */}
				<ContentInset>
					{videos.map( content => (
						<video ref="video"
						key={content.id}
						width='100%'
						poster="https://media.wonderlandmagazine.com/uploads/2019/04/ROLLERCOASTER_CAMILA_06_070color.jpg"
						controls
					//autoPlay
					/>
					))}
						<button style={{zIndex: '5'}}>Play</button>
					{/* </video> */}
				</ContentInset>
			</div>
		);
	}
}

export default Player;