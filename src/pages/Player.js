import React, { Component } from 'react';
import shaka from 'shaka-player';
import { NavBar, ContentInset } from '../components/Layout';
import { ProfileSummary, Heading, HeaderWrapper, VideoPlayer } from '../components/Content';
import { ReactComponent as Logo } from '../icons/logo.svg';
import { ReactComponent as Search } from '../icons/search.svg';
import { ReactComponent as Notification } from '../icons/notification.svg';
import { ReactComponent as MusicIcon } from '../icons/musicIcon.svg';
import JsonData from '../videoContent.json';

var manifestUri = '//storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd';

class Player extends Component {

	componentDidMount() {
		shaka.polyfill.installAll();
		if (shaka.Player.isBrowserSupported()) {
			this.initPlayer();
		} else {
			console.error('Browser not supported!');
		}
	}

	initPlayer() {
		var player = new shaka.Player(this.refs.video);
		player.addEventListener('error', this.onErrorEvent);
		player.load(manifestUri).then(function () {
			player.configure({
				streaming: {
					bufferingGoal: 100
				}
			});
			console.log('The video has now been loaded!');
		}).catch(this.onError);
	}

	onErrorEvent(event) {
		this.onError(event.detail);
	}

	onError(error) {
		console.error('Error code', error.code, 'object', error);
	}


	render() {
		var videos = [];
		videos.push(JsonData);
		

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
				<ContentInset>
					{videos.map(content => {
						return (
							<video
								ref="video"
								key={content.id}
								width='100%'
								poster="https://media.wonderlandmagazine.com/uploads/2019/04/ROLLERCOASTER_CAMILA_06_070color.jpg"
								controls
								autoPlay
							/>
						)
					})}
					{videos.map(content => {
						return (
					<VideoPlayer
						key={content.id}
						url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
						playing
						className='react-player'
						width='100%'
						height='auto'
						loop={true}
					/>
					)
					})}
				</ContentInset>
			</div>
		);
	}
}

export default Player;