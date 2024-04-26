import React from 'react'
import { Carousel } from 'flowbite-react'
import useGeneral from 'hooks/general.hook'

export const CarouselMovil: React.FC = () => {
	const { width } = useGeneral()
	/** States */
	const [height, setHeight] = React.useState<number>(0)
	const [selectedImage, setSelectedImage] = React.useState<string>('')
	const [step, setStep] = React.useState<number>(0)
	const [showPopup, setShowPopup] = React.useState<boolean>(false)
	const [mute, setMute] = React.useState(true)

	React.useEffect(() => {
		if (document.getElementById('navbar__container')) {
			const navbar: HTMLElement = document.getElementById(
				'navbar__container'
			) as HTMLElement
			setHeight(navbar.clientHeight)
		}
	}, [])

	return (
		<React.Fragment>
			{selectedImage === '' ? (
				<Carousel
					style={{ height: `calc(100vh - ${height}px)` }}
					slide={selectedImage === ''}
					slideInterval={20000}>
					<svg
						viewBox={`0 0 414 906`}
						width="100%"
						height="100vh"
						preserveAspectRatio="none">
						<defs>
							<style>
								{
									'.a-carousel-welcome-1,.g-carousel-welcome-1{fill:#001f5f;}.b-carousel-welcome-1{fill:none;}.c-carousel-welcome-1,.n-carousel-welcome-1{fill:#fff;}.d-carousel-welcome-1{clip-path:url(#a-carousel-welcome-1);}.e-carousel-welcome-1{fill:#e7002a;}.f-carousel-welcome-1{fill:url(#b-carousel-welcome-1);}.g-carousel-welcome-1{font-size:16px;font-family:Silka-Bold, Silka;}.g-carousel-welcome-1,.n-carousel-welcome-1{font-weight:700;}.h-carousel-welcome-1{font-size:22px;}.i-carousel-welcome-1{clip-path:url(#e-carousel-welcome-1);}.j-carousel-welcome-1{fill:#e40032;}.k-carousel-welcome-1{mix-blend-mode:multiply;isolation:isolate;}.l-carousel-welcome-1{fill:#d6d6d6;}.m-carousel-welcome-1{fill:#eeebeb;}.n-carousel-welcome-1{font-size:21px;font-family:Kiona-Bold;}.o-carousel-welcome-1{filter:url(#c-carousel-welcome-1);}'
								}
							</style>
							<clipPath id="a-carousel-welcome-1">
								<rect
									className="a-carousel-welcome-1"
									width={163.429}
									height={74.83}
								/>
							</clipPath>
							<pattern
								id="b-carousel-welcome-1"
								width={1}
								height={1}
								viewBox="402.741 0 415.358 728.356">
								<image
									preserveAspectRatio="xMidYMid slice"
									width={1092.534}
									height={728.356}
									xlinkHref="/images/movil.jpg"
								/>
							</pattern>
							<filter
								id="c-carousel-welcome-1"
								x={0}
								y={637.652}
								width={451.309}
								height={268.348}
								filterUnits="userSpaceOnUse">
								<feOffset dx={-3} dy={-3} />
								<feGaussianBlur stdDeviation={6} result="d" />
								<feFlood floodOpacity={0.251} />
								<feComposite operator="in" in2="d" />
								<feComposite in="SourceGraphic" />
							</filter>
							<clipPath id="e-carousel-welcome-1">
								<rect
									className="b-carousel-welcome-1"
									width={234.264}
									height={65.55}
								/>
							</clipPath>
						</defs>
						<g>
							<rect
								className="c-carousel-welcome-1"
								width={412}
								height={840}
								transform="translate(2)"
							/>
							<g
								className="d-carousel-welcome-1"
								transform="translate(2 0.395)">
								<path
									className="a-carousel-welcome-1"
									d="M107.443,74.83H0V0H163.429V19.373c0,30.628-25.066,55.457-55.986,55.457"
								/>
							</g>
							<path
								className="a-carousel-welcome-1"
								d="M220.545,54.823c-62.13,0-118.133,65.5-141.872,165.936L0,546.75V825.18H417.572V54.823Z"
								transform="translate(0 65.82)"
							/>
							<path
								className="e-carousel-welcome-1"
								d="M286.192,0c-33.942,0-66.76,18.756-94.9,54.235-28.03,35.338-49.65,85.038-62.52,143.723L1.164,767.866h1.61v3.709L131.084,198.52c12.787-58.313,34.238-107.656,62.032-142.7C220.8,20.931,252.98,2.487,286.192,2.487h131.38V0Z"
								transform="translate(0 65.82)"
							/>
							<g transform="translate(2.214 162.644)">
								<path
									className="f-carousel-welcome-1"
									d="M248.754,96.824H417.572V825.18H2.214L127.2,253.713c20.34-94.957,68.325-156.889,121.559-156.889"
									transform="translate(-2.214 -96.824)"
								/>
								<g
									className="o-carousel-welcome-1"
									transform="matrix(1, 0, 0, 1, -21.21, -162.64)">
									<path
										className="c-carousel-welcome-1"
										d="M0,232.348l40.469-182.3C45.342,31.734,53.526,0,98.83,0H415.309V232.348Z"
										transform="translate(21 658.65)"
									/>
								</g>
								<g transform="translate(54.531 553.394)">
									<text
										className="g-carousel-welcome-1"
										transform="translate(150 75.962)">
										<tspan
											x={-125.416}
											y={15}
											xmlSpace="preserve">
											{
												'Un compromiso inquebrantable                  '
											}
										</tspan>
										<tspan
											className="h-carousel-welcome-1"
											x={-115.071}
											y={37}>
											{'con la salud y la vida'}
										</tspan>
									</text>
									<g transform="translate(19.438 0)">
										<g className="i-carousel-welcome-1">
											<path
												className="j-carousel-welcome-1"
												d="M39.065,42.163,48.327,54.77a.351.351,0,0,1,.066.2l.053,9.87a.346.346,0,0,1-.343.346l-1.377.007a.344.344,0,0,1-.346-.342l-.018-3.5-4.979.025.018,3.5a.344.344,0,0,1-.343.346l-1.377.007a.342.342,0,0,1-.345-.342l-.047-9.067a.343.343,0,0,1,.342-.346l1.377-.008a.346.346,0,0,1,.346.343l.018,3.5,4.979-.025-.02-3.745-8.41-11.449-7.155.037-8.29,11.538.018,3.744,4.98-.026-.018-3.5a.343.343,0,0,1,.342-.346l1.377-.008a.344.344,0,0,1,.346.343l.047,9.067a.345.345,0,0,1-.342.346l-1.377.007a.344.344,0,0,1-.346-.342l-.018-3.5-4.979.026.018,3.5a.346.346,0,0,1-.343.346l-1.377.007a.345.345,0,0,1-.346-.342l-.051-9.87a.344.344,0,0,1,.064-.2l9.129-12.7a.348.348,0,0,1,.278-.143l8.908-.046a.342.342,0,0,1,.279.141M24.722,31.856,9.819,27.1a.333.333,0,0,0-.212,0L.237,30.2a.345.345,0,0,0-.218.435L.45,31.943a.344.344,0,0,0,.435.218l3.323-1.1L5.772,35.79l-3.324,1.1a.345.345,0,0,0-.218.435l.431,1.308a.346.346,0,0,0,.435.218L11.706,36a.344.344,0,0,0,.218-.435l-.431-1.308a.346.346,0,0,0-.435-.218l-3.324,1.1L6.171,30.414l3.554-1.176,13.534,4.32L24.365,36.9,25.5,40.35l-8.29,11.538-3.556,1.175L12.1,48.334l3.324-1.1a.345.345,0,0,0,.218-.435l-.433-1.308a.344.344,0,0,0-.434-.218L6.163,48.121a.345.345,0,0,0-.218.435l.431,1.308a.345.345,0,0,0,.435.218l3.324-1.1L11.7,53.71l-3.324,1.1a.344.344,0,0,0-.22.435l.433,1.308a.345.345,0,0,0,.435.218l9.37-3.1a.345.345,0,0,0,.172-.126l9.128-12.7a.341.341,0,0,0,.047-.309l-2.8-8.457a.345.345,0,0,0-.222-.221M43.1,29.528l14.852-4.912a.341.341,0,0,0,.171-.126l5.76-8.015a.345.345,0,0,0-.079-.48l-1.118-.8a.344.344,0,0,0-.48.079l-2.044,2.843-4.044-2.906,2.043-2.843a.343.343,0,0,0-.078-.48l-1.118-.8a.342.342,0,0,0-.48.079l-5.292,7.362A.345.345,0,0,0,51.27,19l1.119.8a.345.345,0,0,0,.48-.079l2.043-2.843,4.044,2.906-2.185,3.04L43.283,27.291l-5.81-4.175L37.4,8.91l2.185-3.04,4.044,2.906-2.043,2.843a.344.344,0,0,0,.079.48l1.118.8a.344.344,0,0,0,.48-.079l5.292-7.364a.344.344,0,0,0-.079-.48l-1.118-.8a.345.345,0,0,0-.48.079L44.832,7.1l-4.042-2.9,2.043-2.844a.345.345,0,0,0-.079-.48l-1.118-.8a.342.342,0,0,0-.48.079L35.4,8.158a.35.35,0,0,0-.064.2L35.412,24a.342.342,0,0,0,.143.278l7.234,5.2a.345.345,0,0,0,.309.047M68.107,31.59l.418-1.313a.345.345,0,0,0-.224-.433l-9.4-3a.347.347,0,0,0-.213,0L43.835,31.757a.34.34,0,0,0-.22.222l-2.708,8.486a.343.343,0,0,0,.05.308l9.261,12.608a.351.351,0,0,0,.174.124l9.4,3a.344.344,0,0,0,.433-.224l.418-1.311a.342.342,0,0,0-.222-.433l-3.336-1.065L58.6,48.73l3.336,1.064a.345.345,0,0,0,.433-.222l.418-1.313a.345.345,0,0,0-.224-.433l-8.638-2.757a.343.343,0,0,0-.431.224l-.42,1.313a.343.343,0,0,0,.224.431L56.632,48.1l-1.513,4.743-3.567-1.138L43.141,40.257l2.176-6.815L58.8,28.982l3.566,1.139-1.513,4.743L57.522,33.8a.346.346,0,0,0-.433.224l-.418,1.313a.343.343,0,0,0,.224.431l8.637,2.757a.344.344,0,0,0,.433-.222l.42-1.313a.346.346,0,0,0-.224-.433l-3.336-1.064,1.514-4.743,3.336,1.065a.346.346,0,0,0,.433-.224M25.77,29.556l7.172-5.283a.346.346,0,0,0,.141-.28l-.1-15.643a.339.339,0,0,0-.067-.2L27.058.2a.343.343,0,0,0-.481-.074L25.468.946a.344.344,0,0,0-.072.481l2.077,2.819L23.463,7.2,21.386,4.381a.344.344,0,0,0-.481-.072L19.8,5.125a.344.344,0,0,0-.072.481l5.377,7.3a.344.344,0,0,0,.481.072l1.109-.817a.345.345,0,0,0,.074-.481L24.688,8.862,28.7,5.909l2.22,3.015.093,14.207-5.76,4.242-13.54-4.3-2.22-3.015L13.5,17.1l2.076,2.819a.344.344,0,0,0,.481.072l1.109-.817a.346.346,0,0,0,.074-.481l-5.379-7.3a.344.344,0,0,0-.481-.074l-1.109.817a.344.344,0,0,0-.072.481l2.076,2.819L8.266,18.4,6.189,15.576a.345.345,0,0,0-.481-.074L4.6,16.319a.344.344,0,0,0-.072.481l5.854,7.946a.338.338,0,0,0,.172.124l14.909,4.737a.346.346,0,0,0,.309-.051"
												transform="translate(0 0)"
											/>
											<path
												className="a-carousel-welcome-1"
												d="M97.969,23.558H92.149a7.882,7.882,0,0,1-4.061-1.089,8.1,8.1,0,0,1-2.947-2.96,8.208,8.208,0,0,1,0-8.171,8.213,8.213,0,0,1,2.947-2.972,7.969,7.969,0,0,1,7.293-.408,8.125,8.125,0,0,1,2.686,1.931l-.817.767a7.013,7.013,0,0,0-5.1-2.228,6.8,6.8,0,0,0-3.491.942,7.031,7.031,0,0,0-2.551,2.537,7.021,7.021,0,0,0,0,7.02,7.088,7.088,0,0,0,2.551,2.562,6.719,6.719,0,0,0,3.491.954H96.8V16.674h-5.3V15.56h6.463Z"
												transform="translate(26.512 2.292)"
											/>
											<path
												className="a-carousel-welcome-1"
												d="M108.7,23.511l-6.686-8.121h1.981a7.9,7.9,0,0,0,2.972-.471,3.969,3.969,0,0,0,1.461-1.2,2.835,2.835,0,0,0,.618-1.771,2.919,2.919,0,0,0-.52-1.647,3.842,3.842,0,0,0-1.485-1.275,4.822,4.822,0,0,0-2.228-.5H100.3V23.511H99.187V7.415h5.622a6.2,6.2,0,0,1,2.128.359A5.234,5.234,0,0,1,108.671,8.8a4.578,4.578,0,0,1,1.1,1.461,3.978,3.978,0,0,1-.434,4.123,4.716,4.716,0,0,1-1.931,1.548,5.094,5.094,0,0,1-1.5.433,13.113,13.113,0,0,1-1.547.087l5.818,7.057Z"
												transform="translate(31.286 2.339)"
											/>
											<path
												className="a-carousel-welcome-1"
												d="M117.9,23.684a5.9,5.9,0,0,1-2.34-.483,6.114,6.114,0,0,1-1.993-1.375,5.667,5.667,0,0,1-1.325-1.981,6.355,6.355,0,0,1-.459-2.4V7.415h1.114V17.444a5.184,5.184,0,0,0,.384,1.981,4.9,4.9,0,0,0,1.077,1.634,5.027,5.027,0,0,0,1.634,1.1,4.882,4.882,0,0,0,1.907.384,4.936,4.936,0,0,0,1.931-.384,5.033,5.033,0,0,0,1.635-1.1,4.9,4.9,0,0,0,1.077-1.634,5.208,5.208,0,0,0,.383-1.981V7.415h1.116V17.444a6.38,6.38,0,0,1-.459,2.4,5.684,5.684,0,0,1-1.325,1.981,6.15,6.15,0,0,1-1.981,1.375,5.93,5.93,0,0,1-2.377.483"
												transform="translate(35.258 2.339)"
											/>
											<path
												className="a-carousel-welcome-1"
												d="M125.51,23.511l-.025-16.1h5.744a5.612,5.612,0,0,1,2.612.62,5.054,5.054,0,0,1,1.907,1.659,4.014,4.014,0,0,1,0,4.545,5.015,5.015,0,0,1-1.907,1.671,5.612,5.612,0,0,1-2.612.62h-4.605v6.982Zm1.114-8.146h4.605a4.637,4.637,0,0,0,2.056-.458,3.913,3.913,0,0,0,1.5-1.239,2.859,2.859,0,0,0,.556-1.7,2.9,2.9,0,0,0-.556-1.721,3.913,3.913,0,0,0-1.5-1.239,4.637,4.637,0,0,0-2.056-.458H126.6Z"
												transform="translate(39.581 2.339)"
											/>
											<path
												className="a-carousel-welcome-1"
												d="M145,23.726a7.938,7.938,0,0,1-4.086-1.1,8.205,8.205,0,0,1-4.061-7.119,8.205,8.205,0,0,1,4.061-7.119,8.123,8.123,0,0,1,8.171,0,8.206,8.206,0,0,1,4.061,7.119,8.206,8.206,0,0,1-4.061,7.119,7.939,7.939,0,0,1-4.086,1.1m0-15.3a6.776,6.776,0,0,0-3.516.954,7.17,7.17,0,0,0-2.564,2.576,7.1,7.1,0,0,0,0,7.106,7.16,7.16,0,0,0,2.564,2.576,6.959,6.959,0,0,0,7.032,0,7.053,7.053,0,0,0,2.551-2.576,7.181,7.181,0,0,0,0-7.106,7.063,7.063,0,0,0-2.551-2.576A6.779,6.779,0,0,0,145,8.422"
												transform="translate(43.167 2.297)"
											/>
											<path
												className="a-carousel-welcome-1"
												d="M80.961,26.092h4.107a.539.539,0,0,1,.538.539V28.3a7.027,7.027,0,0,1,6.119-2.762c3.273,0,5.312,1.062,6.927,3.654a8.562,8.562,0,0,1,7.52-3.654c3.7,0,6.672,1.444,8.158,3.952a13.476,13.476,0,0,1,1.4,6.544V49.094a.539.539,0,0,1-.539.539h-4.574a.538.538,0,0,1-.539-.539V36.716c0-2.423-.339-3.74-1.147-4.632a4.164,4.164,0,0,0-3.271-1.36,4.286,4.286,0,0,0-4.037,2.38c-.51,1.063-.722,2.38-.722,4.929V49.094a.539.539,0,0,1-.539.539H95.791a.539.539,0,0,1-.539-.539V36.716c0-2.294-.339-3.7-1.062-4.59a4.54,4.54,0,0,0-3.485-1.4,4.055,4.055,0,0,0-4.079,2.549,13.925,13.925,0,0,0-.553,4.759V49.094a.539.539,0,0,1-.539.539H80.961a.539.539,0,0,1-.539-.539V26.632a.54.54,0,0,1,.539-.539"
												transform="translate(25.367 8.056)"
											/>
											<path
												className="a-carousel-welcome-1"
												d="M134.171,49.633h-4.105a.539.539,0,0,1-.539-.539v-2.52a9.361,9.361,0,0,1-7.819,3.612c-6.884,0-11.856-5.142-11.856-12.239,0-7.181,5.014-12.407,11.984-12.407a8.75,8.75,0,0,1,7.691,3.7V26.63a.538.538,0,0,1,.539-.538h4.105a.538.538,0,0,1,.539.538V49.094a.539.539,0,0,1-.539.539M115.545,38.075A6.613,6.613,0,0,0,122.515,45c4.079,0,6.841-2.848,6.841-7.055,0-4.249-2.89-7.224-7.011-7.224-3.953,0-6.8,3.1-6.8,7.352"
												transform="translate(34.65 8.056)"
											/>
											<path
												className="a-carousel-welcome-1"
												d="M132.777,26.092h4.107a.539.539,0,0,1,.538.539v1.755c1.488-2.21,2.677-2.847,5.1-2.847h.425v5.439c-3.4.086-5.056,1.913-5.056,5.567V49.094a.539.539,0,0,1-.539.539h-4.574a.539.539,0,0,1-.539-.539V26.632a.54.54,0,0,1,.539-.539"
												transform="translate(41.711 8.056)"
											/>
											<path
												className="a-carousel-welcome-1"
												d="M147.467,40.369c.68,2.847,3.144,4.63,6.5,4.63a5.943,5.943,0,0,0,5.024-2.151.544.544,0,0,1,.4-.185h5.142a.537.537,0,0,1,.5.741,10.67,10.67,0,0,1-1.593,2.531,11.547,11.547,0,0,1-9.349,4.25c-7.252,0-12.858-5.463-12.745-12.445a12.513,12.513,0,0,1,13.621-12.147c6.382.581,10.938,5.729,10.938,12.608a9.1,9.1,0,0,1-.213,2.168ZM160.343,35.4c-.722-3.018-3.016-4.674-6.5-4.674-3.357,0-5.652,1.614-6.544,4.674Z"
												transform="translate(44.585 8.057)"
											/>
											<path
												className="a-carousel-welcome-1"
												d="M168.713,47.291,160.387,26.7a.538.538,0,0,1,.5-.741h5.275a.537.537,0,0,1,.509.363l5.1,14.891,5.563-14.9a.539.539,0,0,1,.505-.35h5.306a.539.539,0,0,1,.495.752L170.511,57.037a.54.54,0,0,1-.495.325h-4.9a.54.54,0,0,1-.493-.756Z"
												transform="translate(50.577 8.189)"
											/>
											<path
												className="a-carousel-welcome-1"
												d="M72.611,19.983h-4.59L62.24,33.857a.539.539,0,0,0,.5.746h4.934a.539.539,0,0,0,.508-.36l2.138-6.058L73.673,37.7h-9.32a5.573,5.573,0,0,0-5.146,3.431l-3.962,9.505a.539.539,0,0,0,.5.746H61a.539.539,0,0,0,.495-.326l3.344-7.79H76.01l3.219,7.783a.538.538,0,0,0,.5.333h5.246a.539.539,0,0,0,.5-.747Z"
												transform="translate(17.412 6.303)"
											/>
										</g>
									</g>
								</g>
							</g>
							<g onClick={() => setSelectedImage('a')}>
								<path
									className="c-carousel-welcome-1"
									d="M0,0V16.967L14.7,8.483,7.68,4.431Z"
									transform="translate(88.108 346.911) rotate(-78)"
								/>
								<text
									className="n-carousel-welcome-1"
									transform="translate(68.462 495.922) rotate(-77)">
									<tspan x={0} y={0}>
										{'Conoce Más'}
									</tspan>
								</text>
							</g>
						</g>
					</svg>
					<svg
						viewBox="0 0 414 906"
						width="100%"
						height="100vh"
						preserveAspectRatio="none">
						<defs>
							<style>
								{
									'.a-carousel-welcome-2,.h-carousel-welcome-2,.i-carousel-welcome-2{fill:#001f5f;}.b-carousel-welcome-2,.g-carousel-welcome-2,.n-carousel-welcome-2{fill:#fff;}.c-carousel-welcome-2{clip-path:url(#a-carousel-welcome-2);}.d-carousel-welcome-2{fill:#e7002a;}.e-carousel-welcome-2{fill:url(#b-carousel-welcome-2);}.f-carousel-welcome-2{fill:#e40032;}.g-carousel-welcome-2{font-size:18px;}.g-carousel-welcome-2,.i-carousel-welcome-2,.n-carousel-welcome-2{font-family:Kiona-Bold;font-weight:700;}.h-carousel-welcome-2{font-size:16px;font-family:Silka-Regular, Silka;}.i-carousel-welcome-2{font-size:32px;}.j-carousel-welcome-2{mix-blend-mode:multiply;isolation:isolate;}.k-carousel-welcome-2{fill:#e2e0e1;}.l-carousel-welcome-2{fill:#cccdcf;}.m-carousel-welcome-2{fill:#eeebeb;}.n-carousel-welcome-2{font-size:21px;}.o-carousel-welcome-2{filter:url(#e-carousel-welcome-2);}.p-carousel-welcome-2{filter:url(#c-carousel-welcome-2);}'
								}
							</style>
							<clipPath id="a-carousel-welcome-2">
								<rect
									className="a-carousel-welcome-2"
									width={163.429}
									height={74.83}
								/>
							</clipPath>
							<pattern
								id="b-carousel-welcome-2"
								width={1}
								height={1}
								viewBox="195.925 0 415.358 728.356">
								<image
									preserveAspectRatio="xMidYMid slice"
									width={1092.534}
									height={728.356}
									xlinkHref="/images/product1.jpg"
								/>
							</pattern>
							<filter
								id="c-carousel-welcome-2"
								x={0}
								y={637.652}
								width={451.309}
								height={268.348}
								filterUnits="userSpaceOnUse">
								<feOffset dx={-3} dy={-3} />
								<feGaussianBlur stdDeviation={6} result="d" />
								<feFlood floodOpacity={0.251} />
								<feComposite operator="in" in2="d" />
								<feComposite in="SourceGraphic" />
							</filter>
							<filter
								id="e-carousel-welcome-2"
								x={84.571}
								y={789}
								width={300.429}
								height={61.168}
								filterUnits="userSpaceOnUse">
								<feOffset dy={3} />
								<feGaussianBlur stdDeviation={3} result="f" />
								<feFlood floodOpacity={0.4} />
								<feComposite operator="in" in2="f" />
								<feComposite in="SourceGraphic" />
							</filter>
						</defs>
						<g>
							<rect
								className="b-carousel-welcome-2"
								width={412}
								height={840}
								transform="translate(2)"
							/>
							<g
								className="c-carousel-welcome-2"
								transform="translate(2 0.395)">
								<path
									className="a-carousel-welcome-2"
									d="M107.443,74.83H0V0H163.429V19.373c0,30.628-25.066,55.457-55.986,55.457"
								/>
							</g>
							<path
								className="a-carousel-welcome-2"
								d="M220.545,54.823c-62.13,0-118.133,65.5-141.872,165.936L0,546.75V825.18H417.572V54.823Z"
								transform="translate(0 65.82)"
							/>
							<path
								className="d-carousel-welcome-2"
								d="M286.192,0c-33.942,0-66.76,18.756-94.9,54.235-28.03,35.338-49.65,85.038-62.52,143.723L1.164,767.866h1.61v3.709L131.084,198.52c12.787-58.313,34.238-107.656,62.032-142.7C220.8,20.931,252.98,2.487,286.192,2.487h131.38V0Z"
								transform="translate(0 65.82)"
							/>
							<g transform="translate(2.214 162.644)">
								<path
									className="e-carousel-welcome-2"
									d="M248.754,96.824H417.572V825.18H2.214L127.2,253.713c20.34-94.957,68.325-156.889,121.559-156.889"
									transform="translate(-2.214 -96.824)"
								/>
								<g
									className="p-carousel-welcome-2"
									transform="matrix(1, 0, 0, 1, -21.21, -162.64)">
									<path
										className="b-carousel-welcome-2"
										d="M0,232.348l40.469-182.3C45.342,31.734,53.526,0,98.83,0H415.309V232.348Z"
										transform="translate(21 658.65)"
									/>
								</g>
								<g
									transform="translate(72.358 632.356)"
									onClick={() => setSelectedImage('a')}>
									<g
										className="o-carousel-welcome-2"
										transform="matrix(1, 0, 0, 1, -93.57, -795)">
										<path
											className="f-carousel-welcome-2"
											d="M282.429,0H57.93C34.58,0,13.613,12.6,5.086,31.746L0,43.169H222.637c24.877,0,47.15-13.581,55.914-34.092Z"
											transform="translate(93.57 795)"
										/>
									</g>
									<text
										className="g-carousel-welcome-2"
										transform="translate(81.714 28.584)">
										<tspan x={0} y={0}>
											{'Conoce Más'}
										</tspan>
									</text>
								</g>
								<text
									className="h-carousel-welcome-2"
									transform="translate(45.358 577.356)">
									<tspan x={7.554} y={15}>
										{
											'Llevando la precisión quirúrgica más allá '
										}
									</tspan>
									<tspan x={39.402} y={33}>
										{'de los límites de nuestras manos'}
									</tspan>
								</text>
								<text
									className="i-carousel-welcome-2"
									transform="translate(220 531.356)">
									<tspan x={-119.552} y={32}>
										{'Robot davinci'}
									</tspan>
								</text>
							</g>
							<g onClick={() => setSelectedImage('a')}>
								<path
									className="b-carousel-welcome-2"
									d="M0,0V16.967L14.7,8.483,7.68,4.431Z"
									transform="translate(88.108 346.911) rotate(-78)"
								/>
								<text
									className="n-carousel-welcome-2"
									transform="translate(68.462 495.922) rotate(-77)">
									<tspan x={0} y={0}>
										{'Conoce Más'}
									</tspan>
								</text>
							</g>
						</g>
					</svg>
					<svg
						viewBox="0 0 414 906"
						width="100%"
						height="100vh"
						preserveAspectRatio="none">
						<defs>
							<style>
								{
									'.a-carousel-welcome-3,.f-carousel-welcome-3,.g-carousel-welcome-3{fill:#001f5f;}.b-carousel-welcome-3,.i-carousel-welcome-3,.n-carousel-welcome-3{fill:#fff;}.c-carousel-welcome-3{clip-path:url(#a-carousel-welcome-3);}.d-carousel-welcome-3{fill:#e7002a;}.e-carousel-welcome-3{fill:url(#b-carousel-welcome-3);}.f-carousel-welcome-3{font-size:22px;font-family:Silka-Bold, Silka;}.f-carousel-welcome-3,.i-carousel-welcome-3,.n-carousel-welcome-3{font-weight:700;}.g-carousel-welcome-3{font-size:16px;font-family:Silka-Regular, Silka;}.h-carousel-welcome-3{fill:#e40032;}.i-carousel-welcome-3{font-size:18px;}.i-carousel-welcome-3,.n-carousel-welcome-3{font-family:Kiona-Bold;}.j-carousel-welcome-3{mix-blend-mode:multiply;isolation:isolate;}.k-carousel-welcome-3{fill:#eae8ea;}.l-carousel-welcome-3{fill:#eeebeb;}.m-carousel-welcome-3{fill:#d1d2d4;}.n-carousel-welcome-3{font-size:21px;}.o-carousel-welcome-3{filter:url(#e-carousel-welcome-3);}.p-carousel-welcome-3{filter:url(#c-carousel-welcome-3);}'
								}
							</style>
							<clipPath id="a-carousel-welcome-3">
								<rect
									className="a-carousel-welcome-3"
									width={163.429}
									height={74.83}
								/>
							</clipPath>
							<pattern
								id="b-carousel-welcome-3"
								width={1}
								height={1}
								viewBox="344.709 177.08 314.375 551.276">
								<image
									preserveAspectRatio="xMidYMid slice"
									width={1092.534}
									height={728.356}
									xlinkHref="/images/slider3.jpg"
								/>
							</pattern>
							<filter
								id="c-carousel-welcome-3"
								x={0}
								y={637.652}
								width={451.309}
								height={268.348}
								filterUnits="userSpaceOnUse">
								<feOffset dx={-3} dy={-3} />
								<feGaussianBlur stdDeviation={6} result="d" />
								<feFlood floodOpacity={0.251} />
								<feComposite operator="in" in2="d" />
								<feComposite in="SourceGraphic" />
							</filter>
							<filter
								id="e-carousel-welcome-3"
								x={77.571}
								y={789}
								width={300.429}
								height={61.168}
								filterUnits="userSpaceOnUse">
								<feOffset dy={3} />
								<feGaussianBlur stdDeviation={3} result="f" />
								<feFlood floodOpacity={0.4} />
								<feComposite operator="in" in2="f" />
								<feComposite in="SourceGraphic" />
							</filter>
						</defs>
						<g>
							<rect
								className="b-carousel-welcome-3"
								width={412}
								height={840}
								transform="translate(2)"
							/>
							<g
								className="c-carousel-welcome-3"
								transform="translate(2 0.395)">
								<path
									className="a-carousel-welcome-3"
									d="M107.443,74.83H0V0H163.429V19.373c0,30.628-25.066,55.457-55.986,55.457"
								/>
							</g>
							<path
								className="a-carousel-welcome-3"
								d="M220.545,54.823c-62.13,0-118.133,65.5-141.872,165.936L0,546.75V825.18H417.572V54.823Z"
								transform="translate(0 65.82)"
							/>
							<path
								className="d-carousel-welcome-3"
								d="M286.192,0c-33.942,0-66.76,18.756-94.9,54.235-28.03,35.338-49.65,85.038-62.52,143.723L1.164,767.866h1.61v3.709L131.084,198.52c12.787-58.313,34.238-107.656,62.032-142.7C220.8,20.931,252.98,2.487,286.192,2.487h131.38V0Z"
								transform="translate(0 65.82)"
							/>
							<g transform="translate(2.214 162.644)">
								<path
									className="e-carousel-welcome-3"
									d="M248.754,96.824H417.572V825.18H2.214L127.2,253.713c20.34-94.957,68.325-156.889,121.559-156.889"
									transform="translate(-2.214 -96.824)"
								/>
								<g
									className="p-carousel-welcome-3"
									transform="matrix(1, 0, 0, 1, -21.21, -162.64)">
									<path
										className="b-carousel-welcome-3"
										d="M0,232.348l40.469-182.3C45.342,31.734,53.526,0,98.83,0H415.309V232.348Z"
										transform="translate(21 658.65)"
									/>
								</g>
								<text
									className="f-carousel-welcome-3"
									transform="translate(210 568.356)">
									<tspan x={-72.71} y={21}>
										{'desarrollo de '}
									</tspan>
									<tspan x={-108.163} y={45}>
										{'tecnología en salud'}
									</tspan>
								</text>
								<text
									className="g-carousel-welcome-3"
									transform="translate(92.51 514.356)">
									<tspan x={6.364} y={15}>
										{'Representamos las marcas '}
									</tspan>
									<tspan x={12.412} y={33}>
										{'de mayor prestigio a nivel '}
									</tspan>
									<tspan x={8.924} y={51}>
										{'mundial en investigación y'}
									</tspan>
								</text>
								<g
									transform="translate(65.358 632.356)"
									onClick={() => setSelectedImage('a')}>
									<g
										className="o-carousel-welcome-3"
										transform="matrix(1, 0, 0, 1, -86.57, -795)">
										<path
											className="h-carousel-welcome-3"
											d="M282.429,0H57.93C34.58,0,13.613,12.6,5.086,31.746L0,43.169H222.637c24.877,0,47.15-13.581,55.914-34.092Z"
											transform="translate(86.57 795)"
										/>
									</g>
									<text
										className="i-carousel-welcome-3"
										transform="translate(81.714 28.584)">
										<tspan x={0} y={0}>
											{'Conoce Más'}
										</tspan>
									</text>
								</g>
							</g>
							<g onClick={() => setSelectedImage('a')}>
								<path
									className="b-carousel-welcome-3"
									d="M0,0V16.967L14.7,8.483,7.68,4.431Z"
									transform="translate(88.108 346.911) rotate(-78)"
								/>
								<text
									className="n-carousel-welcome-3"
									transform="translate(68.462 495.922) rotate(-77)">
									<tspan x={0} y={0}>
										{'Conoce Más'}
									</tspan>
								</text>
							</g>
						</g>
					</svg>
				</Carousel>
			) : (
				<React.Fragment>
					{step === 0 ? (
						<svg
							viewBox="0 0 414 894.293"
							width="100%"
							height="100vh"
							preserveAspectRatio="none">
							<defs>
								<style>
									{
										'.a-pentagrama,.f-pentagrama,.h-pentagrama{fill:#001f5f;}.b-pentagrama,.i-pentagrama{fill:#fff;}.c-pentagrama{clip-path:url(#a-pentagrama);}.d-pentagrama{opacity:0.65;}.e-pentagrama{fill:#e7002a;}.f-pentagrama,.i-pentagrama{font-size:16px;}.f-pentagrama{font-family:Silka-Bold, Silka;}.f-pentagrama,.h-pentagrama{font-weight:700;}.g-pentagrama{fill:#e40032;}.h-pentagrama{font-size:18px;font-family:Kiona-Bold;}.i-pentagrama{font-family:Silka-Medium, Silka;font-weight:500;}.j-pentagrama{fill:url(#f-pentagrama);}.k-pentagrama{filter:url(#d-pentagrama);}.l-pentagrama{filter:url(#b-pentagrama);}'
									}
								</style>
								<clipPath id="a-pentagrama">
									<rect
										className="a-pentagrama"
										width={163.429}
										height={74.83}
									/>
								</clipPath>
								<filter
									id="b-pentagrama"
									x={242.271}
									y={596.293}
									width={117.729}
									height={120.968}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="c"
									/>
									<feFlood floodOpacity={0.502} />
									<feComposite operator="in" in2="c" />
									<feComposite in="SourceGraphic" />
								</filter>
								<filter
									id="d-pentagrama"
									x={223.381}
									y={630.921}
									width={72.113}
									height={89.34}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="e"
									/>
									<feFlood floodOpacity={0.502} />
									<feComposite operator="in" in2="e" />
									<feComposite in="SourceGraphic" />
								</filter>
								<pattern
									id="f-pentagrama"
									width={1}
									height={1}
									viewBox="0 -0.061 148.114 122.757">
									<image
										preserveAspectRatio="none"
										width={148.114}
										height={122.757}
										xlinkHref="/images/mobile/ComponentTMP_0-image2.png"
									/>
								</pattern>
							</defs>
							<g transform="translate(0.572)">
								<rect
									className="b-pentagrama"
									width={413.428}
									height={894.293}
								/>
								<g
									className="c-pentagrama"
									transform="translate(-0.572)">
									<path
										className="a-pentagrama"
										d="M107.443,74.83H0V0H163.429V19.373c0,30.628-25.066,55.457-55.986,55.457"
									/>
								</g>
							</g>
							<g
								className="d-pentagrama"
								transform="translate(0 -892.707)">
								<g
									className="l-pentagrama"
									transform="matrix(1, 0, 0, 1, 0, 892.71)">
									<path
										className="e-pentagrama"
										d="M45.96,102.908,97.722,85.791a1.2,1.2,0,0,0,.6-.439l20.073-27.934a1.2,1.2,0,0,0-.273-1.674l-3.9-2.8a1.2,1.2,0,0,0-1.674.274l-7.122,9.91L91.335,53l7.119-9.909a1.2,1.2,0,0,0-.274-1.674l-3.895-2.8a1.2,1.2,0,0,0-1.675.275L74.168,64.552a1.2,1.2,0,0,0,.273,1.675l3.9,2.8a1.2,1.2,0,0,0,1.674-.275l7.12-9.908,14.093,10.128-7.615,10.6L46.6,95.114,26.356,80.565,26.1,31.053l7.614-10.6L47.805,30.584l-7.12,9.907a1.2,1.2,0,0,0,.273,1.675l3.9,2.8a1.2,1.2,0,0,0,1.674-.275L64.972,19.03a1.2,1.2,0,0,0-.274-1.675l-3.9-2.8a1.2,1.2,0,0,0-1.674.274l-7.12,9.909L37.914,14.61,45.035,4.7a1.2,1.2,0,0,0-.275-1.674l-3.9-2.8A1.2,1.2,0,0,0,39.188.5L19.115,28.435a1.2,1.2,0,0,0-.225.706l.283,54.517a1.2,1.2,0,0,0,.5.968l25.21,18.117a1.2,1.2,0,0,0,1.077.165"
										transform="translate(232.38 602.29)"
									/>
								</g>
								<g
									className="k-pentagrama"
									transform="matrix(1, 0, 0, 1, 0, 892.71)">
									<path
										className="a-pentagrama"
										d="M52.8,76.989a5.445,5.445,0,0,0-5.952-1.515l.342-.342a5.6,5.6,0,0,0,.278-7.749,5.449,5.449,0,0,0-7.824-.121l.939-.939a5.6,5.6,0,0,0,.279-7.749,5.451,5.451,0,0,0-7.825-.121L47.4,44.094a5.6,5.6,0,0,0,.279-7.749,5.451,5.451,0,0,0-7.825-.12L18.083,57.992a33.216,33.216,0,0,0-1.1-12.478,5.124,5.124,0,0,0-7.569-2.98,5.306,5.306,0,0,0-2.222,6.028c2.579,9.332-2,19.137-5.612,27.565-1.74,4.052-3.722,12.364,4.16,20.246l4.639,4.639c10.546,10.546,24.285,1.336,26.572-.952l.894-.894L49.119,87.889l3.3-3.3a5.59,5.59,0,0,0,.385-7.6"
										transform="translate(232.38 602.29)"
									/>
								</g>
								<text
									className="f-pentagrama"
									transform="translate(50 1530)">
									<tspan x={0} y={15}>
										{'Conoce más de '}
									</tspan>
									<tspan x={0} y={33}>
										{'grupo Amarey dando'}
									</tspan>
									<tspan x={0} y={51}>
										{'clic en cada uno '}
									</tspan>
								</text>
							</g>
							<path
								className="g-pentagrama"
								d="M37.093,124.41C48.487,90.449,65.14,61.567,85.812,40.133,110,15.048,138.139,1.788,167.169,1.788H282.007V0H167.169C137.5,0,108.815,13.483,84.214,38.991,63.261,60.717,46.411,90,34.933,124.41Z"
								transform="translate(131.993 769.882)"
							/>
							<text
								className="h-pentagrama"
								transform="translate(210 116.557)">
								<tspan x={-102.024} y={18}>
									{'El origen de nuestra '}
								</tspan>
								<tspan x={-129.438} y={37}>
									{'historia es hoy la esencia '}
								</tspan>
								<tspan x={-87.678} y={56}>
									{'de nuestra marca'}
								</tspan>
							</text>
							<g transform="translate(184.884 718.571)">
								<path
									className="a-pentagrama"
									d="M229.116,155.108V54.822H88.805C53.1,54.822,20.24,93.054,0,155.108Z"
									transform="translate(0 20.613)"
								/>
								<g
									transform="translate(118.116 115.959)"
									onClick={() => setSelectedImage('')}>
									<path
										className="b-pentagrama"
										d="M0,0V19.012L16.462,9.505,8.6,4.965Z"
										transform="translate(16.462 19.012) rotate(180)"
									/>
									<text
										className="i-pentagrama"
										transform="translate(72.852 15.238)">
										<tspan x={-46.928} y={0}>
											{'Volver'}
										</tspan>
									</text>
								</g>
							</g>
							<g
								transform="translate(64.145 240.907)"
								onClick={() => setStep(1)}>
								<image
									width={144.8}
									height={125.545}
									transform="matrix(0.999, 0.035, -0.035, 0.999, 4.381, 0)"
									xlinkHref="/images/mobile/ComponentTMP_0-image.png"
								/>
							</g>
							<g
								transform="translate(207.677 247.877)"
								onClick={() => setStep(2)}>
								<rect
									className="j-pentagrama"
									width={148.114}
									height={122.757}
									transform="matrix(1, 0.017, -0.017, 1, 2.142, 0)"
								/>
							</g>
							<g
								transform="translate(228.315 343.523)"
								onClick={() => setStep(3)}>
								<image
									width={142.231}
									height={146.16}
									transform="translate(7.649) rotate(3)"
									xlinkHref="/images/mobile/ComponentTMP_0-image3.png"
								/>
							</g>
							<g
								transform="translate(36 340.862)"
								onClick={() => setStep(4)}>
								<image
									width={144.04}
									height={145.589}
									transform="matrix(0.999, 0.035, -0.035, 0.999, 5.081, 0)"
									xlinkHref="/images/mobile/ComponentTMP_0-image4.png"
								/>
							</g>
							<g
								transform="translate(123.941 407.523)"
								onClick={() => setStep(5)}>
								<image
									width={168.22}
									height={126.558}
									transform="matrix(1, 0.017, -0.017, 1, 2.209, 0)"
									xlinkHref="/images/mobile/ComponentTMP_0-image5.png"
								/>
							</g>
						</svg>
					) : step === 1 ? (
						<svg viewBox="0 0 414 894.293">
							<defs>
								<style>
									{
										'.a-pentagrama,.g-pentagrama,.i-pentagrama{fill:#001f5f;}.b-pentagrama,.l-pentagrama{fill:none;}.c-pentagrama,.j-pentagrama,.m-pentagrama,.o-pentagrama{fill:#fff;}.d-pentagrama{clip-path:url(#c-pentagrama);}.e-pentagrama{opacity:0.65;}.f-pentagrama{fill:#e7002a;}.g-pentagrama,.j-pentagrama{font-size:16px;}.g-pentagrama{font-family:Silka-Bold, Silka;}.g-pentagrama,.i-pentagrama,.m-pentagrama,.o-pentagrama{font-weight:700;}.h-pentagrama{fill:#e40032;}.i-pentagrama,.m-pentagrama{font-size:18px;font-family:Kiona-Bold;}.j-pentagrama{font-family:Silka-Medium, Silka;font-weight:500;}.k-pentagrama{clip-path:url(#j-pentagrama);}.l-pentagrama{stroke:#e40032;stroke-miterlimit:10;stroke-width:0.979px;}.n-pentagrama{clip-path:url(#k-pentagrama);}.o-pentagrama{font-size:24px;font-family:Helvetica-Bold, Helvetica;}.p-pentagrama{fill:url(#n-pentagrama);}.q-pentagrama{filter:url(#l-pentagrama);}.r-pentagrama{filter:url(#h-pentagrama);}.s-pentagrama{filter:url(#f-pentagrama);}.t-pentagrama{filter:url(#d-pentagrama);}.u-pentagrama{filter:url(#a-pentagrama);}'
									}
								</style>
								<filter
									id="a-pentagrama"
									x={21.813}
									y={591.181}
									width={365.187}
									height={145.92}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="b"
									/>
									<feFlood floodOpacity={0.502} />
									<feComposite operator="in" in2="b" />
									<feComposite in="SourceGraphic" />
								</filter>
								<clipPath id="c-pentagrama">
									<rect
										className="a-pentagrama"
										width={163.429}
										height={74.83}
									/>
								</clipPath>
								<filter
									id="d-pentagrama"
									x={242.271}
									y={596.293}
									width={117.729}
									height={120.968}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="e"
									/>
									<feFlood floodOpacity={0.502} />
									<feComposite operator="in" in2="e" />
									<feComposite in="SourceGraphic" />
								</filter>
								<filter
									id="f-pentagrama"
									x={223.381}
									y={630.921}
									width={72.113}
									height={89.34}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="g"
									/>
									<feFlood floodOpacity={0.502} />
									<feComposite operator="in" in2="g" />
									<feComposite in="SourceGraphic" />
								</filter>
								<filter
									id="h-pentagrama"
									x={21.813}
									y={591.181}
									width={365.187}
									height={145.92}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="i"
									/>
									<feFlood floodOpacity={0.502} />
									<feComposite operator="in" in2="i" />
									<feComposite in="SourceGraphic" />
								</filter>
								<clipPath id="j-pentagrama">
									<g
										className="u-pentagrama"
										transform="matrix(1, 0, 0, 1, 0, 0)">
										<path
											className="a-pentagrama"
											d="M284.956,0H62.231V.026C44.578.7,28.824,14.4,22.09,35.111L0,127.92H284.956v-.026c17.653-.671,33.408-14.375,40.141-35.085L347.187,0Z"
											transform="translate(347.19 127.92) rotate(180)"
										/>
									</g>
								</clipPath>
								<clipPath id="k-pentagrama">
									<rect
										className="b-pentagrama"
										width={118.422}
										height={33.136}
									/>
								</clipPath>
								<filter
									id="l-pentagrama"
									x={344.5}
									y={567.793}
									width={39}
									height={39}
									filterUnits="userSpaceOnUse">
									<feOffset dy={1} />
									<feGaussianBlur
										stdDeviation={0.5}
										result="m"
									/>
									<feFlood floodOpacity={0.4} />
									<feComposite operator="in" in2="m" />
									<feComposite in="SourceGraphic" />
								</filter>
								<pattern
									id="n-pentagrama"
									width={1}
									height={1}
									viewBox="0 -0.061 148.114 122.757">
									<image
										preserveAspectRatio="none"
										width={148.114}
										height={122.757}
										xlinkHref="/images/mobile/ComponentTMP_0-image2.png"
									/>
								</pattern>
							</defs>
							<g transform="translate(0.572)">
								<rect
									className="c-pentagrama"
									width={413.428}
									height={894.293}
								/>
								<g
									className="d-pentagrama"
									transform="translate(-0.572)">
									<path
										className="a-pentagrama"
										d="M107.443,74.83H0V0H163.429V19.373c0,30.628-25.066,55.457-55.986,55.457"
									/>
								</g>
							</g>
							<g
								className="e-pentagrama"
								transform="translate(0 -892.707)">
								<g
									className="t-pentagrama"
									transform="matrix(1, 0, 0, 1, 0, 892.71)">
									<path
										className="f-pentagrama"
										d="M45.96,102.908,97.722,85.791a1.2,1.2,0,0,0,.6-.439l20.073-27.934a1.2,1.2,0,0,0-.273-1.674l-3.9-2.8a1.2,1.2,0,0,0-1.674.274l-7.122,9.91L91.335,53l7.119-9.909a1.2,1.2,0,0,0-.274-1.674l-3.895-2.8a1.2,1.2,0,0,0-1.675.275L74.168,64.552a1.2,1.2,0,0,0,.273,1.675l3.9,2.8a1.2,1.2,0,0,0,1.674-.275l7.12-9.908,14.093,10.128-7.615,10.6L46.6,95.114,26.356,80.565,26.1,31.053l7.614-10.6L47.805,30.584l-7.12,9.907a1.2,1.2,0,0,0,.273,1.675l3.9,2.8a1.2,1.2,0,0,0,1.674-.275L64.972,19.03a1.2,1.2,0,0,0-.274-1.675l-3.9-2.8a1.2,1.2,0,0,0-1.674.274l-7.12,9.909L37.914,14.61,45.035,4.7a1.2,1.2,0,0,0-.275-1.674l-3.9-2.8A1.2,1.2,0,0,0,39.188.5L19.115,28.435a1.2,1.2,0,0,0-.225.706l.283,54.517a1.2,1.2,0,0,0,.5.968l25.21,18.117a1.2,1.2,0,0,0,1.077.165"
										transform="translate(232.38 602.29)"
									/>
								</g>
								<g
									className="s-pentagrama"
									transform="matrix(1, 0, 0, 1, 0, 892.71)">
									<path
										className="a-pentagrama"
										d="M52.8,76.989a5.445,5.445,0,0,0-5.952-1.515l.342-.342a5.6,5.6,0,0,0,.278-7.749,5.449,5.449,0,0,0-7.824-.121l.939-.939a5.6,5.6,0,0,0,.279-7.749,5.451,5.451,0,0,0-7.825-.121L47.4,44.094a5.6,5.6,0,0,0,.279-7.749,5.451,5.451,0,0,0-7.825-.12L18.083,57.992a33.216,33.216,0,0,0-1.1-12.478,5.124,5.124,0,0,0-7.569-2.98,5.306,5.306,0,0,0-2.222,6.028c2.579,9.332-2,19.137-5.612,27.565-1.74,4.052-3.722,12.364,4.16,20.246l4.639,4.639c10.546,10.546,24.285,1.336,26.572-.952l.894-.894L49.119,87.889l3.3-3.3a5.59,5.59,0,0,0,.385-7.6"
										transform="translate(232.38 602.29)"
									/>
								</g>
								<text
									className="g-pentagrama"
									transform="translate(71 1530)">
									<tspan x={0} y={15}>
										{'Conoce más de '}
									</tspan>
									<tspan x={0} y={33}>
										{'Amarey dando clic '}
									</tspan>
									<tspan x={0} y={51}>
										{'en cada uno '}
									</tspan>
								</text>
							</g>
							<path
								className="h-pentagrama"
								d="M37.093,124.41C48.487,90.449,65.14,61.567,85.812,40.133,110,15.048,138.139,1.788,167.169,1.788H282.007V0H167.169C137.5,0,108.815,13.483,84.214,38.991,63.261,60.717,46.411,90,34.933,124.41Z"
								transform="translate(131.993 769.882)"
							/>
							<text
								className="i-pentagrama"
								transform="translate(210 116.557)">
								<tspan x={-102.024} y={18}>
									{'El origen de nuestra '}
								</tspan>
								<tspan x={-129.438} y={37}>
									{'historia es hoy la esencia '}
								</tspan>
								<tspan x={-87.678} y={56}>
									{'de nuestra marca'}
								</tspan>
							</text>
							<g
								transform="translate(184.884 718.571)"
								onClick={() => setSelectedImage('')}>
								<path
									className="a-pentagrama"
									d="M229.116,155.108V54.822H88.805C53.1,54.822,20.24,93.054,0,155.108Z"
									transform="translate(0 20.613)"
								/>
								<g transform="translate(118.116 115.959)">
									<path
										className="c-pentagrama"
										d="M0,0V19.012L16.462,9.505,8.6,4.965Z"
										transform="translate(16.462 19.012) rotate(180)"
									/>
									<text
										className="j-pentagrama"
										transform="translate(72.852 15.238)">
										<tspan x={-46.928} y={0}>
											{'Volver'}
										</tspan>
									</text>
								</g>
							</g>
							<g
								transform="translate(30.813 308.437)"
								onClick={() => setStep(0)}>
								<image
									width={78.751}
									height={68.279}
									transform="matrix(0.999, 0.035, -0.035, 0.999, 100.877, 0)"
									xlinkHref="/images/mobile/ComponentTMP_0-image.png"
								/>
								<g
									transform="translate(-30.813 -1201.144)"
									onClick={() => {
										setShowPopup(true)
										const video: HTMLVideoElement =
											document.getElementById(
												'video-1'
											) as HTMLVideoElement

										if (video) {
											video.currentTime = 0
											video.play()
										}
									}}>
									<g transform="translate(30.813 1489.888)">
										<g
											className="r-pentagrama"
											transform="matrix(1, 0, 0, 1, -30.81, -597.18)">
											<path
												className="a-pentagrama"
												d="M284.956,0H62.231V.026C44.578.7,28.824,14.4,22.09,35.111L0,127.92H284.956v-.026c17.653-.671,33.408-14.375,40.141-35.085L347.187,0Z"
												transform="translate(378 725.1) rotate(180)"
											/>
										</g>
										<g
											className="k-pentagrama"
											transform="translate(0 0)">
											<path
												className="l-pentagrama"
												d="M108.4,0H23.674V.01C16.958.265,10.965,5.476,8.4,13.35L0,48.637H108.4v-.01c6.715-.255,12.709-5.466,15.27-13.34L132.076,0Z"
												transform="translate(237.919 158.05) rotate(180)"
											/>
										</g>
										<path
											className="c-pentagrama"
											d="M49.708,0H48.645V.026C34.845.7,22.531,14.4,17.267,35.111L0,127.92H117.228v-.026c13.8-.671,26.114-14.375,31.377-35.085L165.873,0Z"
											transform="translate(347.187 127.92) rotate(180)"
										/>
										<text
											className="m-pentagrama"
											transform="translate(15.74 56.229)">
											<tspan x={10.373} y={18}>
												{'Nuestro origen'}
											</tspan>
										</text>
									</g>
									<g transform="translate(235.132 1539.493)">
										<g
											className="n-pentagrama"
											transform="translate(0 0)">
											<path
												className="h-pentagrama"
												d="M19.748,21.314l4.682,6.373a.178.178,0,0,1,.033.1l.027,4.989a.175.175,0,0,1-.174.175l-.7,0a.174.174,0,0,1-.175-.173l-.009-1.769-2.517.013.009,1.77a.174.174,0,0,1-.174.175l-.7,0a.173.173,0,0,1-.174-.173l-.024-4.584a.173.173,0,0,1,.173-.175l.7,0a.175.175,0,0,1,.175.174l.009,1.769,2.517-.013-.01-1.893L19.17,22.289l-3.617.019L11.362,28.14l.009,1.892,2.518-.013L13.88,28.25a.173.173,0,0,1,.173-.175l.7,0a.174.174,0,0,1,.175.174l.024,4.584a.174.174,0,0,1-.173.175l-.7,0a.174.174,0,0,1-.175-.173l-.009-1.77-2.517.013.009,1.77a.175.175,0,0,1-.174.175l-.7,0a.174.174,0,0,1-.175-.173l-.026-4.989a.174.174,0,0,1,.033-.1l4.615-6.422a.176.176,0,0,1,.14-.072l4.5-.023a.173.173,0,0,1,.141.071M12.5,16.1,4.964,13.7a.168.168,0,0,0-.107,0L.12,15.266a.174.174,0,0,0-.11.22l.218.661a.174.174,0,0,0,.22.11l1.68-.555.791,2.39-1.68.555a.174.174,0,0,0-.11.22l.218.661a.175.175,0,0,0,.22.11L5.918,18.2a.174.174,0,0,0,.11-.22l-.218-.661a.175.175,0,0,0-.22-.11l-1.68.556-.79-2.39,1.8-.594,6.842,2.184.559,1.69.576,1.743L8.7,26.229l-1.8.594-.79-2.39,1.68-.555a.174.174,0,0,0,.11-.22L7.687,23a.174.174,0,0,0-.219-.11L3.115,24.325a.174.174,0,0,0-.11.22l.218.661a.174.174,0,0,0,.22.11l1.68-.556.791,2.39-1.68.556a.174.174,0,0,0-.111.22l.219.661a.174.174,0,0,0,.22.11L9.3,27.131a.174.174,0,0,0,.087-.064L14,20.646a.172.172,0,0,0,.024-.156L12.61,16.215A.174.174,0,0,0,12.5,16.1m9.289-1.177,7.508-2.483a.173.173,0,0,0,.086-.064l2.912-4.052a.174.174,0,0,0-.04-.243l-.565-.406a.174.174,0,0,0-.243.04L30.412,9.156,28.368,7.687,29.4,6.25a.174.174,0,0,0-.039-.243L28.8,5.6a.173.173,0,0,0-.243.04L25.878,9.362a.174.174,0,0,0,.039.243l.566.406a.174.174,0,0,0,.243-.04l1.033-1.437L29.8,10l-1.1,1.537L21.88,13.8l-2.937-2.111L18.906,4.5l1.1-1.537,2.044,1.469L21.021,5.873a.174.174,0,0,0,.04.243l.565.406a.174.174,0,0,0,.243-.04l2.675-3.722a.174.174,0,0,0-.04-.243l-.565-.406a.174.174,0,0,0-.243.04L22.663,3.587,20.62,2.119,21.653.681a.174.174,0,0,0-.04-.243L21.047.032a.173.173,0,0,0-.243.04L17.893,4.124a.177.177,0,0,0-.033.1l.041,7.908a.173.173,0,0,0,.072.14L21.631,14.9a.174.174,0,0,0,.156.024m12.642,1.043.211-.664a.174.174,0,0,0-.113-.219L29.775,13.57a.175.175,0,0,0-.108,0l-7.508,2.483a.172.172,0,0,0-.111.112l-1.369,4.29a.173.173,0,0,0,.025.156l4.681,6.374a.178.178,0,0,0,.088.063l4.752,1.517a.174.174,0,0,0,.219-.113l.211-.663a.173.173,0,0,0-.112-.219l-1.686-.539.765-2.4,1.686.538a.174.174,0,0,0,.219-.112l.211-.664a.174.174,0,0,0-.113-.219l-4.367-1.394a.173.173,0,0,0-.218.113l-.212.664a.173.173,0,0,0,.113.218l1.686.539-.765,2.4-1.8-.575L21.808,20.35l1.1-3.445,6.818-2.255,1.8.576-.765,2.4-1.686-.539a.175.175,0,0,0-.219.113l-.211.664a.173.173,0,0,0,.113.218l4.366,1.394a.174.174,0,0,0,.219-.112l.212-.664a.175.175,0,0,0-.113-.219l-1.686-.538.765-2.4,1.686.539a.175.175,0,0,0,.219-.113m-21.4-1.028,3.625-2.67a.175.175,0,0,0,.071-.142l-.053-7.908a.172.172,0,0,0-.034-.1L13.678.1a.173.173,0,0,0-.243-.037l-.561.413a.174.174,0,0,0-.037.243l1.05,1.425L11.861,3.639l-1.05-1.425a.174.174,0,0,0-.243-.037l-.561.413a.174.174,0,0,0-.037.243l2.718,3.691a.174.174,0,0,0,.243.037l.561-.413A.174.174,0,0,0,13.53,5.9L12.48,4.48l2.027-1.493,1.122,1.524.047,7.182-2.912,2.144L5.92,11.663,4.8,10.139,6.825,8.646l1.049,1.425a.174.174,0,0,0,.243.037l.561-.413a.175.175,0,0,0,.037-.243L6,5.762a.174.174,0,0,0-.243-.037l-.561.413a.174.174,0,0,0-.037.243L6.2,7.806,4.179,9.3,3.129,7.874a.174.174,0,0,0-.243-.037l-.561.413a.174.174,0,0,0-.037.243L5.247,12.51a.171.171,0,0,0,.087.063l7.537,2.395a.175.175,0,0,0,.156-.026"
												transform="translate(0 0)"
											/>
											<path
												className="a-pentagrama"
												d="M91.088,15.5H88.146a3.984,3.984,0,0,1-2.053-.551,4.094,4.094,0,0,1-1.49-1.5,4.149,4.149,0,0,1,0-4.131,4.151,4.151,0,0,1,1.49-1.5,4.028,4.028,0,0,1,3.687-.206,4.107,4.107,0,0,1,1.358.976l-.413.388a3.545,3.545,0,0,0-2.579-1.126,3.435,3.435,0,0,0-1.765.476,3.554,3.554,0,0,0-1.289,1.283,3.549,3.549,0,0,0,0,3.549,3.583,3.583,0,0,0,1.289,1.3,3.4,3.4,0,0,0,1.765.482H90.5V12.021H87.821v-.563h3.267Z"
												transform="translate(-28.161 -2.434)"
											/>
											<path
												className="a-pentagrama"
												d="M103.994,15.551l-3.38-4.105h1a3.992,3.992,0,0,0,1.5-.238,2.006,2.006,0,0,0,.739-.607,1.433,1.433,0,0,0,.313-.9,1.476,1.476,0,0,0-.263-.833,1.942,1.942,0,0,0-.751-.644,2.438,2.438,0,0,0-1.126-.251H99.75v7.573h-.563V7.415h2.842A3.132,3.132,0,0,1,103.1,7.6a2.646,2.646,0,0,1,.876.519,2.314,2.314,0,0,1,.557.739,2.011,2.011,0,0,1-.219,2.084,2.384,2.384,0,0,1-.976.783,2.575,2.575,0,0,1-.757.219,6.629,6.629,0,0,1-.782.044l2.941,3.568Z"
												transform="translate(-33.232 -2.484)"
											/>
											<path
												className="a-pentagrama"
												d="M114.872,15.639a2.982,2.982,0,0,1-1.183-.244,3.091,3.091,0,0,1-1.007-.695,2.865,2.865,0,0,1-.67-1,3.213,3.213,0,0,1-.232-1.214V7.415h.563v5.07a2.62,2.62,0,0,0,.194,1,2.476,2.476,0,0,0,.545.826,2.541,2.541,0,0,0,.826.557,2.468,2.468,0,0,0,.964.194,2.5,2.5,0,0,0,.976-.194,2.544,2.544,0,0,0,.827-.557,2.475,2.475,0,0,0,.545-.826,2.632,2.632,0,0,0,.194-1V7.415h.564v5.07a3.225,3.225,0,0,1-.232,1.214,2.874,2.874,0,0,1-.67,1,3.109,3.109,0,0,1-1,.695,3,3,0,0,1-1.2.244"
												transform="translate(-37.451 -2.484)"
											/>
											<path
												className="a-pentagrama"
												d="M125.5,15.551l-.013-8.136h2.9a2.837,2.837,0,0,1,1.321.313,2.555,2.555,0,0,1,.964.839,2.029,2.029,0,0,1,0,2.3,2.535,2.535,0,0,1-.964.844,2.837,2.837,0,0,1-1.321.313h-2.328v3.53Zm.563-4.118h2.328a2.344,2.344,0,0,0,1.039-.231,1.978,1.978,0,0,0,.757-.626,1.445,1.445,0,0,0,.281-.857,1.464,1.464,0,0,0-.281-.87,1.978,1.978,0,0,0-.757-.626,2.344,2.344,0,0,0-1.039-.231h-2.341Z"
												transform="translate(-42.043 -2.484)"
											/>
											<path
												className="a-pentagrama"
												d="M140.973,15.595a4.013,4.013,0,0,1-2.065-.557,4.193,4.193,0,0,1-1.5-5.683,4.084,4.084,0,0,1,1.5-1.515,4.106,4.106,0,0,1,4.131,0,4.193,4.193,0,0,1,1.5,5.683,4.084,4.084,0,0,1-1.5,1.515,4.013,4.013,0,0,1-2.065.557m0-7.736a3.425,3.425,0,0,0-1.777.482,3.625,3.625,0,0,0-1.3,1.3,3.591,3.591,0,0,0,0,3.592,3.62,3.62,0,0,0,1.3,1.3,3.518,3.518,0,0,0,3.555,0,3.565,3.565,0,0,0,1.289-1.3,3.63,3.63,0,0,0,0-3.592,3.571,3.571,0,0,0-1.289-1.3,3.427,3.427,0,0,0-1.777-.482"
												transform="translate(-45.852 -2.44)"
											/>
											<path
												className="a-pentagrama"
												d="M80.695,25.819h2.076a.272.272,0,0,1,.272.273v.844a3.552,3.552,0,0,1,3.093-1.4,3.659,3.659,0,0,1,3.5,1.847,4.328,4.328,0,0,1,3.8-1.847,4.584,4.584,0,0,1,4.124,2,6.812,6.812,0,0,1,.71,3.308v6.6a.273.273,0,0,1-.273.273H95.688a.272.272,0,0,1-.273-.273V31.189a3.311,3.311,0,0,0-.58-2.341,2.105,2.105,0,0,0-1.654-.688,2.167,2.167,0,0,0-2.041,1.2,5.622,5.622,0,0,0-.365,2.492v5.592a.273.273,0,0,1-.273.273H88.191a.273.273,0,0,1-.273-.273V31.189a3.636,3.636,0,0,0-.537-2.32,2.3,2.3,0,0,0-1.761-.709,2.05,2.05,0,0,0-2.062,1.289,7.039,7.039,0,0,0-.279,2.406v5.592a.273.273,0,0,1-.273.273H80.695a.273.273,0,0,1-.273-.273V26.092a.273.273,0,0,1,.273-.273"
												transform="translate(-26.945 -8.557)"
											/>
											<path
												className="a-pentagrama"
												d="M122.145,37.719h-2.075a.273.273,0,0,1-.273-.273V36.173A4.732,4.732,0,0,1,115.844,38a5.887,5.887,0,0,1-5.993-6.187,5.96,5.96,0,0,1,6.058-6.272,4.423,4.423,0,0,1,3.888,1.869V26.091a.272.272,0,0,1,.273-.272h2.075a.272.272,0,0,1,.273.272V37.447a.273.273,0,0,1-.273.273m-9.415-5.843a3.491,3.491,0,1,0,6.981-.065,3.5,3.5,0,1,0-6.981.065"
												transform="translate(-36.805 -8.557)"
											/>
											<path
												className="a-pentagrama"
												d="M132.511,25.819h2.076a.272.272,0,0,1,.272.273v.887a2.633,2.633,0,0,1,2.578-1.439h.215v2.75c-1.719.043-2.556.967-2.556,2.814v6.343a.273.273,0,0,1-.273.273h-2.312a.273.273,0,0,1-.273-.273V26.092a.273.273,0,0,1,.273-.273"
												transform="translate(-44.305 -8.557)"
											/>
											<path
												className="a-pentagrama"
												d="M144.442,33.037a3.134,3.134,0,0,0,3.286,2.341,3,3,0,0,0,2.539-1.087.275.275,0,0,1,.2-.094h2.6a.272.272,0,0,1,.253.374,5.394,5.394,0,0,1-.805,1.279A5.837,5.837,0,0,1,147.792,38a6.233,6.233,0,0,1-6.443-6.291,6.326,6.326,0,0,1,6.886-6.14,6.092,6.092,0,0,1,5.529,6.374,4.6,4.6,0,0,1-.108,1.1Zm6.509-2.514a3.04,3.04,0,0,0-3.286-2.363,3.149,3.149,0,0,0-3.308,2.363Z"
												transform="translate(-47.358 -8.558)"
											/>
											<path
												className="a-pentagrama"
												d="M164.576,36.743l-4.209-10.409a.272.272,0,0,1,.253-.374h2.667a.272.272,0,0,1,.257.184l2.579,7.527,2.812-7.534a.273.273,0,0,1,.255-.177h2.682a.272.272,0,0,1,.25.38L165.485,41.67a.273.273,0,0,1-.25.164h-2.476a.273.273,0,0,1-.249-.382Z"
												transform="translate(-53.723 -8.698)"
											/>
											<path
												className="a-pentagrama"
												d="M64,19.983h-2.32L58.761,27a.272.272,0,0,0,.251.377h2.494a.272.272,0,0,0,.257-.182l1.081-3.062,1.7,4.812H59.829a2.817,2.817,0,0,0-2.6,1.734l-2,4.8a.272.272,0,0,0,.251.377h2.656a.272.272,0,0,0,.25-.165l1.69-3.938h5.65l1.627,3.935a.272.272,0,0,0,.252.168h2.652a.272.272,0,0,0,.251-.378Z"
												transform="translate(-18.495 -6.695)"
											/>
										</g>
									</g>
								</g>
								<g onClick={() => setStep(0)}>
									<g
										className="q-pentagrama"
										transform="matrix(1, 0, 0, 1, -30.81, -308.44)">
										<circle
											className="h-pentagrama"
											cx={18}
											cy={18}
											r={18}
											transform="translate(346 568.29)"
										/>
									</g>
									<text
										className="o-pentagrama"
										transform="translate(325.187 286.856)">
										<tspan x={0} y={0}>
											{'X'}
										</tspan>
									</text>
								</g>
							</g>
							<g
								transform="translate(207.677 247.877)"
								onClick={() => setStep(2)}>
								<rect
									className="p-pentagrama"
									width={148.114}
									height={122.757}
									transform="matrix(1, 0.017, -0.017, 1, 2.142, 0)"
								/>
							</g>
							<g
								transform="translate(228.315 343.523)"
								onClick={() => setStep(3)}>
								<image
									width={142.231}
									height={146.16}
									transform="translate(7.649) rotate(3)"
									xlinkHref="/images/mobile/ComponentTMP_0-image3.png"
								/>
							</g>
							<g
								transform="translate(36 340.862)"
								onClick={() => setStep(4)}>
								<image
									width={144.04}
									height={145.589}
									transform="matrix(0.999, 0.035, -0.035, 0.999, 5.081, 0)"
									xlinkHref="/images/mobile/ComponentTMP_0-image4.png"
								/>
							</g>
							<g
								transform="translate(123.941 407.523)"
								onClick={() => setStep(5)}>
								<image
									width={168.22}
									height={126.558}
									transform="matrix(1, 0.017, -0.017, 1, 2.209, 0)"
									xlinkHref="/images/mobile/ComponentTMP_0-image5.png"
								/>
							</g>
						</svg>
					) : step === 2 ? (
						<svg viewBox="0 0 414 894.293">
							<defs>
								<style>
									{
										'.a-pentagrama,.f-pentagrama,.h-pentagrama{fill:#001f5f;}.b-pentagrama,.i-pentagrama,.n-pentagrama,.o-pentagrama{fill:#fff;}.c-pentagrama{clip-path:url(#c-pentagrama);}.d-pentagrama{opacity:0.65;}.e-pentagrama{fill:#e7002a;}.f-pentagrama,.i-pentagrama{font-size:16px;}.f-pentagrama{font-family:Silka-Bold, Silka;}.f-pentagrama,.h-pentagrama,.n-pentagrama,.o-pentagrama{font-weight:700;}.g-pentagrama{fill:#e40032;}.h-pentagrama,.n-pentagrama{font-size:18px;font-family:Kiona-Bold;}.i-pentagrama{font-family:Silka-Medium, Silka;font-weight:500;}.j-pentagrama{fill:url(#h-pentagrama);}.k-pentagrama{clip-path:url(#k-pentagrama);}.l-pentagrama{fill:none;stroke:#e40032;stroke-miterlimit:10;stroke-width:0.979px;}.m-pentagrama{fill:url(#l-pentagrama);}.o-pentagrama{font-size:24px;font-family:Helvetica-Bold, Helvetica;}.p-pentagrama{filter:url(#m-pentagrama);}.q-pentagrama{filter:url(#i-pentagrama);}.r-pentagrama{filter:url(#f-pentagrama);}.s-pentagrama{filter:url(#d-pentagrama);}.t-pentagrama{filter:url(#a-pentagrama);}'
									}
								</style>
								<filter
									id="a-pentagrama"
									x={21.813}
									y={591.181}
									width={365.187}
									height={145.92}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="b"
									/>
									<feFlood floodOpacity={0.502} />
									<feComposite operator="in" in2="b" />
									<feComposite in="SourceGraphic" />
								</filter>
								<clipPath id="c-pentagrama">
									<rect
										className="a-pentagrama"
										width={163.429}
										height={74.83}
									/>
								</clipPath>
								<filter
									id="d-pentagrama"
									x={242.271}
									y={596.293}
									width={117.729}
									height={120.968}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="e"
									/>
									<feFlood floodOpacity={0.502} />
									<feComposite operator="in" in2="e" />
									<feComposite in="SourceGraphic" />
								</filter>
								<filter
									id="f-pentagrama"
									x={223.381}
									y={630.921}
									width={72.113}
									height={89.34}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="g"
									/>
									<feFlood floodOpacity={0.502} />
									<feComposite operator="in" in2="g" />
									<feComposite in="SourceGraphic" />
								</filter>
								<pattern
									id="h-pentagrama"
									width={1}
									height={1}
									viewBox="0 -0.033 80.553 66.763">
									<image
										preserveAspectRatio="none"
										width={80.553}
										height={66.763}
										xlinkHref="/images/mobile/ComponentTMP_0-image2.png"
									/>
								</pattern>
								<filter
									id="i-pentagrama"
									x={21.813}
									y={591.181}
									width={365.187}
									height={145.92}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="j"
									/>
									<feFlood floodOpacity={0.502} />
									<feComposite operator="in" in2="j" />
									<feComposite in="SourceGraphic" />
								</filter>
								<clipPath id="k-pentagrama">
									<g
										className="t-pentagrama"
										transform="matrix(1, 0, 0, 1, 0, 0)">
										<path
											className="a-pentagrama"
											d="M284.956,0H62.231V.026C44.578.7,28.824,14.4,22.09,35.111L0,127.92H284.956v-.026c17.653-.671,33.408-14.375,40.141-35.085L347.187,0Z"
											transform="translate(347.19 127.92) rotate(180)"
										/>
									</g>
								</clipPath>
								<pattern
									id="l-pentagrama"
									width={1}
									height={1}
									patternTransform="translate(333.979 255.839) rotate(-180)"
									viewBox="0 3.552 159.601 123.083">
									<image
										preserveAspectRatio="xMidYMid slice"
										width={191.989}
										height={127.92}
										xlinkHref="/images/mobile/image-3.jpg"
									/>
								</pattern>
								<filter
									id="m-pentagrama"
									x={344.5}
									y={567.793}
									width={39}
									height={39}
									filterUnits="userSpaceOnUse">
									<feOffset dy={1} />
									<feGaussianBlur
										stdDeviation={0.5}
										result="n"
									/>
									<feFlood floodOpacity={0.4} />
									<feComposite operator="in" in2="n" />
									<feComposite in="SourceGraphic" />
								</filter>
							</defs>
							<g transform="translate(0.572)">
								<rect
									className="b-pentagrama"
									width={413.428}
									height={894.293}
								/>
								<g
									className="c-pentagrama"
									transform="translate(-0.572)">
									<path
										className="a-pentagrama"
										d="M107.443,74.83H0V0H163.429V19.373c0,30.628-25.066,55.457-55.986,55.457"
									/>
								</g>
							</g>
							<g
								className="d-pentagrama"
								transform="translate(0 -892.707)">
								<g
									className="s-pentagrama"
									transform="matrix(1, 0, 0, 1, 0, 892.71)">
									<path
										className="e-pentagrama"
										d="M45.96,102.908,97.722,85.791a1.2,1.2,0,0,0,.6-.439l20.073-27.934a1.2,1.2,0,0,0-.273-1.674l-3.9-2.8a1.2,1.2,0,0,0-1.674.274l-7.122,9.91L91.335,53l7.119-9.909a1.2,1.2,0,0,0-.274-1.674l-3.895-2.8a1.2,1.2,0,0,0-1.675.275L74.168,64.552a1.2,1.2,0,0,0,.273,1.675l3.9,2.8a1.2,1.2,0,0,0,1.674-.275l7.12-9.908,14.093,10.128-7.615,10.6L46.6,95.114,26.356,80.565,26.1,31.053l7.614-10.6L47.805,30.584l-7.12,9.907a1.2,1.2,0,0,0,.273,1.675l3.9,2.8a1.2,1.2,0,0,0,1.674-.275L64.972,19.03a1.2,1.2,0,0,0-.274-1.675l-3.9-2.8a1.2,1.2,0,0,0-1.674.274l-7.12,9.909L37.914,14.61,45.035,4.7a1.2,1.2,0,0,0-.275-1.674l-3.9-2.8A1.2,1.2,0,0,0,39.188.5L19.115,28.435a1.2,1.2,0,0,0-.225.706l.283,54.517a1.2,1.2,0,0,0,.5.968l25.21,18.117a1.2,1.2,0,0,0,1.077.165"
										transform="translate(232.38 602.29)"
									/>
								</g>
								<g
									className="r-pentagrama"
									transform="matrix(1, 0, 0, 1, 0, 892.71)">
									<path
										className="a-pentagrama"
										d="M52.8,76.989a5.445,5.445,0,0,0-5.952-1.515l.342-.342a5.6,5.6,0,0,0,.278-7.749,5.449,5.449,0,0,0-7.824-.121l.939-.939a5.6,5.6,0,0,0,.279-7.749,5.451,5.451,0,0,0-7.825-.121L47.4,44.094a5.6,5.6,0,0,0,.279-7.749,5.451,5.451,0,0,0-7.825-.12L18.083,57.992a33.216,33.216,0,0,0-1.1-12.478,5.124,5.124,0,0,0-7.569-2.98,5.306,5.306,0,0,0-2.222,6.028c2.579,9.332-2,19.137-5.612,27.565-1.74,4.052-3.722,12.364,4.16,20.246l4.639,4.639c10.546,10.546,24.285,1.336,26.572-.952l.894-.894L49.119,87.889l3.3-3.3a5.59,5.59,0,0,0,.385-7.6"
										transform="translate(232.38 602.29)"
									/>
								</g>
								<text
									className="f-pentagrama"
									transform="translate(71 1530)">
									<tspan x={0} y={15}>
										{'Conoce más de '}
									</tspan>
									<tspan x={0} y={33}>
										{'Amarey dando clic '}
									</tspan>
									<tspan x={0} y={51}>
										{'en cada uno '}
									</tspan>
								</text>
							</g>
							<path
								className="g-pentagrama"
								d="M37.093,124.41C48.487,90.449,65.14,61.567,85.812,40.133,110,15.048,138.139,1.788,167.169,1.788H282.007V0H167.169C137.5,0,108.815,13.483,84.214,38.991,63.261,60.717,46.411,90,34.933,124.41Z"
								transform="translate(131.993 769.882)"
							/>
							<text
								className="h-pentagrama"
								transform="translate(210 116.557)">
								<tspan x={-102.024} y={18}>
									{'El origen de nuestra '}
								</tspan>
								<tspan x={-129.438} y={37}>
									{'historia es hoy la esencia '}
								</tspan>
								<tspan x={-87.678} y={56}>
									{'de nuestra marca'}
								</tspan>
							</text>
							<g transform="translate(184.884 718.571)">
								<path
									className="a-pentagrama"
									d="M229.116,155.108V54.822H88.805C53.1,54.822,20.24,93.054,0,155.108Z"
									transform="translate(0 20.613)"
								/>
								<g transform="translate(118.116 115.959)">
									<path
										className="b-pentagrama"
										d="M0,0V19.012L16.462,9.505,8.6,4.965Z"
										transform="translate(16.462 19.012) rotate(180)"
									/>
									<text
										className="i-pentagrama"
										transform="translate(72.852 15.238)">
										<tspan x={-46.928} y={0}>
											{'Volver'}
										</tspan>
									</text>
								</g>
							</g>
							<g
								transform="translate(64.145 240.907)"
								onClick={() => setStep(1)}>
								<image
									width={144.8}
									height={125.545}
									transform="matrix(0.999, 0.035, -0.035, 0.999, 4.381, 0)"
									xlinkHref="/images/mobile/ComponentTMP_0-image.png"
								/>
							</g>
							<g
								transform="translate(30.813 312.227)"
								onClick={() => setStep(0)}>
								<rect
									className="j-pentagrama"
									width={80.553}
									height={66.763}
									transform="matrix(1, 0.017, -0.017, 1, 177.721, 0)"
								/>
								<g
									transform="translate(-30.813 -1204.934)"
									onClick={() =>
										(window.location.href = '/historia')
									}>
									<g transform="translate(30.813 1489.888)">
										<g
											className="q-pentagrama"
											transform="matrix(1, 0, 0, 1, -30.81, -597.18)">
											<path
												className="a-pentagrama"
												d="M284.956,0H62.231V.026C44.578.7,28.824,14.4,22.09,35.111L0,127.92H284.956v-.026c17.653-.671,33.408-14.375,40.141-35.085L347.187,0Z"
												transform="translate(378 725.1) rotate(180)"
											/>
										</g>
										<g
											className="k-pentagrama"
											transform="translate(0 0)">
											<path
												className="l-pentagrama"
												d="M108.4,0H23.674V.01C16.958.265,10.965,5.476,8.4,13.35L0,48.637H108.4v-.01c6.715-.255,12.709-5.466,15.27-13.34L132.076,0Z"
												transform="translate(237.919 158.05) rotate(180)"
											/>
										</g>
										<path
											className="m-pentagrama"
											d="M49.708,0H48.645V.026C34.845.7,22.531,14.4,17.267,35.111L0,127.92H117.228v-.026c13.8-.671,26.114-14.375,31.377-35.085L165.873,0Z"
											transform="translate(347.187 127.92) rotate(180)"
										/>
										<text
											className="n-pentagrama"
											transform="translate(18.74 57.229)">
											<tspan x={2.171} y={18}>
												{'Nuestra historia '}
											</tspan>
										</text>
									</g>
								</g>
								<g
									transform="translate(0 -3.79)"
									onClick={() => setStep(0)}>
									<g
										className="p-pentagrama"
										transform="matrix(1, 0, 0, 1, -30.81, -308.44)">
										<circle
											className="g-pentagrama"
											cx={18}
											cy={18}
											r={18}
											transform="translate(346 568.29)"
										/>
									</g>
									<text
										className="o-pentagrama"
										transform="translate(325.187 286.856)">
										<tspan x={0} y={0}>
											{'X'}
										</tspan>
									</text>
								</g>
							</g>
							<g
								transform="translate(228.315 343.523)"
								onClick={() => setStep(3)}>
								<image
									width={142.231}
									height={146.16}
									transform="translate(7.649) rotate(3)"
									xlinkHref="/images/mobile/ComponentTMP_0-image3.png"
								/>
							</g>
							<g
								transform="translate(36 340.862)"
								onClick={() => setStep(4)}>
								<image
									width={144.04}
									height={145.589}
									transform="matrix(0.999, 0.035, -0.035, 0.999, 5.081, 0)"
									xlinkHref="/images/mobile/ComponentTMP_0-image4.png"
								/>
							</g>
							<g
								transform="translate(123.941 407.523)"
								onClick={() => setStep(5)}>
								<image
									width={168.22}
									height={126.558}
									transform="matrix(1, 0.017, -0.017, 1, 2.209, 0)"
									xlinkHref="/images/mobile/ComponentTMP_0-image5.png"
								/>
							</g>
						</svg>
					) : step === 3 ? (
						<svg viewBox="0 0 414 894.293">
							<defs>
								<style>
									{
										'.a-pentagrama,.f-pentagrama,.h-pentagrama{fill:#001f5f;}.b-pentagrama,.i-pentagrama,.n-pentagrama,.o-pentagrama{fill:#fff;}.c-pentagrama{clip-path:url(#c-pentagrama);}.d-pentagrama{opacity:0.65;}.e-pentagrama{fill:#e7002a;}.f-pentagrama,.i-pentagrama{font-size:16px;}.f-pentagrama{font-family:Silka-Bold, Silka;}.f-pentagrama,.h-pentagrama,.n-pentagrama,.o-pentagrama{font-weight:700;}.g-pentagrama{fill:#e40032;}.h-pentagrama,.n-pentagrama{font-size:18px;font-family:Kiona-Bold;}.i-pentagrama{font-family:Silka-Medium, Silka;font-weight:500;}.j-pentagrama{fill:url(#h-pentagrama);}.k-pentagrama{clip-path:url(#k-pentagrama);}.l-pentagrama{fill:none;stroke:#e40032;stroke-miterlimit:10;stroke-width:0.979px;}.m-pentagrama{fill:url(#l-pentagrama);}.o-pentagrama{font-size:24px;font-family:Helvetica-Bold, Helvetica;}.p-pentagrama{filter:url(#m-pentagrama);}.q-pentagrama{filter:url(#i-pentagrama);}.r-pentagrama{filter:url(#f-pentagrama);}.s-pentagrama{filter:url(#d-pentagrama);}.t-pentagrama{filter:url(#a-pentagrama);}'
									}
								</style>
								<filter
									id="a-pentagrama"
									x={21.813}
									y={591.181}
									width={365.187}
									height={145.92}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="b"
									/>
									<feFlood floodOpacity={0.502} />
									<feComposite operator="in" in2="b" />
									<feComposite in="SourceGraphic" />
								</filter>
								<clipPath id="c-pentagrama">
									<rect
										className="a-pentagrama"
										width={163.429}
										height={74.83}
									/>
								</clipPath>
								<filter
									id="d-pentagrama"
									x={242.271}
									y={596.293}
									width={117.729}
									height={120.968}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="e"
									/>
									<feFlood floodOpacity={0.502} />
									<feComposite operator="in" in2="e" />
									<feComposite in="SourceGraphic" />
								</filter>
								<filter
									id="f-pentagrama"
									x={223.381}
									y={630.921}
									width={72.113}
									height={89.34}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="g"
									/>
									<feFlood floodOpacity={0.502} />
									<feComposite operator="in" in2="g" />
									<feComposite in="SourceGraphic" />
								</filter>
								<pattern
									id="h-pentagrama"
									width={1}
									height={1}
									viewBox="0 -0.061 148.114 122.757">
									<image
										preserveAspectRatio="none"
										width={148.114}
										height={122.757}
										xlinkHref="/images/mobile/ComponentTMP_0-image2.png"
									/>
								</pattern>
								<filter
									id="i-pentagrama"
									x={12.943}
									y={591.181}
									width={374.057}
									height={145.92}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="j"
									/>
									<feFlood floodOpacity={0.502} />
									<feComposite operator="in" in2="j" />
									<feComposite in="SourceGraphic" />
								</filter>
								<clipPath id="k-pentagrama">
									<g
										className="t-pentagrama"
										transform="matrix(1, 0, 0, 1, 0, 0)">
										<path
											className="a-pentagrama"
											d="M284.956,0H62.231V.026C44.578.7,28.824,14.4,22.09,35.111L0,127.92H284.956v-.026c17.653-.671,33.408-14.375,40.141-35.085L347.187,0Z"
											transform="translate(347.19 127.92) rotate(180)"
										/>
									</g>
								</clipPath>
								<pattern
									id="l-pentagrama"
									width={1}
									height={1}
									patternTransform="translate(333.342 255.839) rotate(-180)"
									viewBox="50 24.13 125.265 96.603">
									<image
										preserveAspectRatio="xMidYMid slice"
										width={191.671}
										height={127.92}
										xlinkHref="/images/mobile/image-4.jpg"
									/>
								</pattern>
								<filter
									id="m-pentagrama"
									x={344.5}
									y={567.793}
									width={39}
									height={39}
									filterUnits="userSpaceOnUse">
									<feOffset dy={1} />
									<feGaussianBlur
										stdDeviation={0.5}
										result="n"
									/>
									<feFlood floodOpacity={0.4} />
									<feComposite operator="in" in2="n" />
									<feComposite in="SourceGraphic" />
								</filter>
							</defs>
							<g transform="translate(0.572)">
								<rect
									className="b-pentagrama"
									width={413.428}
									height={894.293}
								/>
								<g
									className="c-pentagrama"
									transform="translate(-0.572)">
									<path
										className="a-pentagrama"
										d="M107.443,74.83H0V0H163.429V19.373c0,30.628-25.066,55.457-55.986,55.457"
									/>
								</g>
							</g>
							<g
								className="d-pentagrama"
								transform="translate(0 -892.707)">
								<g
									className="s-pentagrama"
									transform="matrix(1, 0, 0, 1, 0, 892.71)">
									<path
										className="e-pentagrama"
										d="M45.96,102.908,97.722,85.791a1.2,1.2,0,0,0,.6-.439l20.073-27.934a1.2,1.2,0,0,0-.273-1.674l-3.9-2.8a1.2,1.2,0,0,0-1.674.274l-7.122,9.91L91.335,53l7.119-9.909a1.2,1.2,0,0,0-.274-1.674l-3.895-2.8a1.2,1.2,0,0,0-1.675.275L74.168,64.552a1.2,1.2,0,0,0,.273,1.675l3.9,2.8a1.2,1.2,0,0,0,1.674-.275l7.12-9.908,14.093,10.128-7.615,10.6L46.6,95.114,26.356,80.565,26.1,31.053l7.614-10.6L47.805,30.584l-7.12,9.907a1.2,1.2,0,0,0,.273,1.675l3.9,2.8a1.2,1.2,0,0,0,1.674-.275L64.972,19.03a1.2,1.2,0,0,0-.274-1.675l-3.9-2.8a1.2,1.2,0,0,0-1.674.274l-7.12,9.909L37.914,14.61,45.035,4.7a1.2,1.2,0,0,0-.275-1.674l-3.9-2.8A1.2,1.2,0,0,0,39.188.5L19.115,28.435a1.2,1.2,0,0,0-.225.706l.283,54.517a1.2,1.2,0,0,0,.5.968l25.21,18.117a1.2,1.2,0,0,0,1.077.165"
										transform="translate(232.38 602.29)"
									/>
								</g>
								<g
									className="r-pentagrama"
									transform="matrix(1, 0, 0, 1, 0, 892.71)">
									<path
										className="a-pentagrama"
										d="M52.8,76.989a5.445,5.445,0,0,0-5.952-1.515l.342-.342a5.6,5.6,0,0,0,.278-7.749,5.449,5.449,0,0,0-7.824-.121l.939-.939a5.6,5.6,0,0,0,.279-7.749,5.451,5.451,0,0,0-7.825-.121L47.4,44.094a5.6,5.6,0,0,0,.279-7.749,5.451,5.451,0,0,0-7.825-.12L18.083,57.992a33.216,33.216,0,0,0-1.1-12.478,5.124,5.124,0,0,0-7.569-2.98,5.306,5.306,0,0,0-2.222,6.028c2.579,9.332-2,19.137-5.612,27.565-1.74,4.052-3.722,12.364,4.16,20.246l4.639,4.639c10.546,10.546,24.285,1.336,26.572-.952l.894-.894L49.119,87.889l3.3-3.3a5.59,5.59,0,0,0,.385-7.6"
										transform="translate(232.38 602.29)"
									/>
								</g>
								<text
									className="f-pentagrama"
									transform="translate(71 1530)">
									<tspan x={0} y={15}>
										{'Conoce más de '}
									</tspan>
									<tspan x={0} y={33}>
										{'Amarey dando clic '}
									</tspan>
									<tspan x={0} y={51}>
										{'en cada uno '}
									</tspan>
								</text>
							</g>
							<path
								className="g-pentagrama"
								d="M37.093,124.41C48.487,90.449,65.14,61.567,85.812,40.133,110,15.048,138.139,1.788,167.169,1.788H282.007V0H167.169C137.5,0,108.815,13.483,84.214,38.991,63.261,60.717,46.411,90,34.933,124.41Z"
								transform="translate(131.993 769.882)"
							/>
							<text
								className="h-pentagrama"
								transform="translate(210 116.557)">
								<tspan x={-102.024} y={18}>
									{'El origen de nuestra '}
								</tspan>
								<tspan x={-129.438} y={37}>
									{'historia es hoy la esencia '}
								</tspan>
								<tspan x={-87.678} y={56}>
									{'de nuestra marca'}
								</tspan>
							</text>
							<g
								transform="translate(184.884 718.571)"
								onClick={() => setSelectedImage('')}>
								<path
									className="a-pentagrama"
									d="M229.116,155.108V54.822H88.805C53.1,54.822,20.24,93.054,0,155.108Z"
									transform="translate(0 20.613)"
								/>
								<g transform="translate(118.116 115.959)">
									<path
										className="b-pentagrama"
										d="M0,0V19.012L16.462,9.505,8.6,4.965Z"
										transform="translate(16.462 19.012) rotate(180)"
									/>
									<text
										className="i-pentagrama"
										transform="translate(72.852 15.238)">
										<tspan x={-46.928} y={0}>
											{'Volver'}
										</tspan>
									</text>
								</g>
							</g>
							<g
								transform="translate(64.145 240.907)"
								onClick={() => setStep(1)}>
								<image
									width={144.8}
									height={125.545}
									transform="matrix(0.999, 0.035, -0.035, 0.999, 4.381, 0)"
									xlinkHref="/images/mobile/ComponentTMP_0-image.png"
								/>
							</g>
							<g transform="translate(207.677 247.877)">
								<rect
									className="j-pentagrama"
									width={148.114}
									height={122.757}
									transform="matrix(1, 0.017, -0.017, 1, 2.142, 0)"
								/>
							</g>
							<g
								transform="translate(21.943 364.245)"
								onClick={() => setStep(0)}>
								<image
									width={77.354}
									height={79.49}
									transform="translate(200.81) rotate(3)"
									xlinkHref="/images/mobile/ComponentTMP_0-image3.png"
								/>
								<g
									transform="translate(-21.943 -1256.952)"
									onClick={() =>
										(window.location.href =
											'/nuestros-aliados')
									}>
									<g transform="translate(30.813 1489.888)">
										<g
											className="q-pentagrama"
											transform="matrix(1, 0, 0, 1, -30.81, -597.18)">
											<path
												className="a-pentagrama"
												d="M292.236,0H63.821V.026C45.717.7,29.561,14.4,22.654,35.111L0,127.92H292.236v-.026c18.1-.671,34.261-14.375,41.167-35.085L356.057,0Z"
												transform="translate(378 725.1) rotate(180)"
											/>
										</g>
										<g
											className="k-pentagrama"
											transform="translate(0 0)">
											<path
												className="l-pentagrama"
												d="M108.4,0H23.674V.01C16.958.265,10.965,5.476,8.4,13.35L0,48.637H108.4v-.01c6.715-.255,12.709-5.466,15.27-13.34L132.076,0Z"
												transform="translate(237.919 158.05) rotate(180)"
											/>
										</g>
										<path
											className="m-pentagrama"
											d="M49.708,0H48.645V.026C34.845.7,22.531,14.4,17.267,35.111L0,127.92H117.228v-.026c13.8-.671,26.114-14.375,31.377-35.085L165.873,0Z"
											transform="translate(347.187 127.92) rotate(180)"
										/>
										<text
											className="n-pentagrama"
											transform="translate(12.74 56.229)">
											<tspan x={0.117} y={18}>
												{'Nuestros aliados '}
											</tspan>
										</text>
									</g>
								</g>
								<g
									transform="translate(8.87 -55.808)"
									onClick={() => setStep(0)}>
									<g
										className="p-pentagrama"
										transform="matrix(1, 0, 0, 1, -30.81, -308.44)">
										<circle
											className="g-pentagrama"
											cx={18}
											cy={18}
											r={18}
											transform="translate(346 568.29)"
										/>
									</g>
									<text
										className="o-pentagrama"
										transform="translate(325.187 286.856)">
										<tspan x={0} y={0}>
											{'X'}
										</tspan>
									</text>
								</g>
							</g>
							<g
								transform="translate(36 340.862)"
								onClick={() => setStep(4)}>
								<image
									width={144.04}
									height={145.589}
									transform="matrix(0.999, 0.035, -0.035, 0.999, 5.081, 0)"
									xlinkHref="/images/mobile/ComponentTMP_0-image4.png"
								/>
							</g>
							<g
								transform="translate(123.941 407.523)"
								onClick={() => setStep(5)}>
								<image
									width={168.22}
									height={126.558}
									transform="matrix(1, 0.017, -0.017, 1, 2.209, 0)"
									xlinkHref="/images/mobile/ComponentTMP_0-image5.png"
								/>
							</g>
						</svg>
					) : step === 4 ? (
						<svg viewBox="0 0 414 894.293">
							<defs>
								<style>
									{
										'.a-pentagrama,.f-pentagrama,.h-pentagrama{fill:#001f5f;}.b-pentagrama,.i-pentagrama,.n-pentagrama,.o-pentagrama{fill:#fff;}.c-pentagrama{clip-path:url(#c-pentagrama);}.d-pentagrama{opacity:0.65;}.e-pentagrama{fill:#e7002a;}.f-pentagrama,.i-pentagrama{font-size:16px;}.f-pentagrama{font-family:Silka-Bold, Silka;}.f-pentagrama,.h-pentagrama,.n-pentagrama,.o-pentagrama{font-weight:700;}.g-pentagrama{fill:#e40032;}.h-pentagrama,.n-pentagrama{font-size:18px;font-family:Kiona-Bold;}.i-pentagrama{font-family:Silka-Medium, Silka;font-weight:500;}.j-pentagrama{fill:url(#h-pentagrama);}.k-pentagrama{clip-path:url(#k-pentagrama);}.l-pentagrama{fill:none;stroke:#e40032;stroke-miterlimit:10;stroke-width:0.979px;}.m-pentagrama{fill:url(#l-pentagrama);}.o-pentagrama{font-size:24px;font-family:Helvetica-Bold, Helvetica;}.p-pentagrama{filter:url(#m-pentagrama);}.q-pentagrama{filter:url(#i-pentagrama);}.r-pentagrama{filter:url(#f-pentagrama);}.s-pentagrama{filter:url(#d-pentagrama);}.t-pentagrama{filter:url(#a-pentagrama);}'
									}
								</style>
								<filter
									id="a-pentagrama"
									x={21.812}
									y={591.181}
									width={365.187}
									height={145.92}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="b"
									/>
									<feFlood floodOpacity={0.502} />
									<feComposite operator="in" in2="b" />
									<feComposite in="SourceGraphic" />
								</filter>
								<clipPath id="c-pentagrama">
									<rect
										className="a-pentagrama"
										width={163.429}
										height={74.83}
									/>
								</clipPath>
								<filter
									id="d-pentagrama"
									x={242.271}
									y={596.293}
									width={117.729}
									height={120.968}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="e"
									/>
									<feFlood floodOpacity={0.502} />
									<feComposite operator="in" in2="e" />
									<feComposite in="SourceGraphic" />
								</filter>
								<filter
									id="f-pentagrama"
									x={223.381}
									y={630.921}
									width={72.113}
									height={89.34}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="g"
									/>
									<feFlood floodOpacity={0.502} />
									<feComposite operator="in" in2="g" />
									<feComposite in="SourceGraphic" />
								</filter>
								<pattern
									id="h-pentagrama"
									width={1}
									height={1}
									viewBox="0 -0.061 148.114 122.757">
									<image
										preserveAspectRatio="none"
										width={148.114}
										height={122.757}
										xlinkHref="/images/mobile/ComponentTMP_0-image2.png"
									/>
								</pattern>
								<filter
									id="i-pentagrama"
									x={21.812}
									y={591.181}
									width={365.187}
									height={145.92}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="j"
									/>
									<feFlood floodOpacity={0.502} />
									<feComposite operator="in" in2="j" />
									<feComposite in="SourceGraphic" />
								</filter>
								<clipPath id="k-pentagrama">
									<g
										className="t-pentagrama"
										transform="matrix(1, 0, 0, 1, 0, 0)">
										<path
											className="a-pentagrama"
											d="M284.956,0H62.231V.026C44.578.7,28.824,14.4,22.09,35.111L0,127.92H284.956v-.026c17.653-.671,33.408-14.375,40.141-35.085L347.187,0Z"
											transform="translate(347.19 127.92) rotate(180)"
										/>
									</g>
								</clipPath>
								<pattern
									id="l-pentagrama"
									width={1}
									height={1}
									patternTransform="translate(500 255.839) rotate(-180)"
									viewBox="18.276 12.221 147.179 113.503">
									<image
										preserveAspectRatio="xMidYMid slice"
										width={191.879}
										height={127.92}
										xlinkHref="/images/mobile/image-5.jpg"
									/>
								</pattern>
								<filter
									id="m-pentagrama"
									x={344.5}
									y={567.793}
									width={39}
									height={39}
									filterUnits="userSpaceOnUse">
									<feOffset dy={1} />
									<feGaussianBlur
										stdDeviation={0.5}
										result="n"
									/>
									<feFlood floodOpacity={0.4} />
									<feComposite operator="in" in2="n" />
									<feComposite in="SourceGraphic" />
								</filter>
							</defs>
							<g transform="translate(0.572)">
								<rect
									className="b-pentagrama"
									width={413.428}
									height={894.293}
								/>
								<g
									className="c-pentagrama"
									transform="translate(-0.572)">
									<path
										className="a-pentagrama"
										d="M107.443,74.83H0V0H163.429V19.373c0,30.628-25.066,55.457-55.986,55.457"
									/>
								</g>
							</g>
							<g
								className="d-pentagrama"
								transform="translate(0 -892.707)">
								<g
									className="s-pentagrama"
									transform="matrix(1, 0, 0, 1, 0, 892.71)">
									<path
										className="e-pentagrama"
										d="M45.96,102.908,97.722,85.791a1.2,1.2,0,0,0,.6-.439l20.073-27.934a1.2,1.2,0,0,0-.273-1.674l-3.9-2.8a1.2,1.2,0,0,0-1.674.274l-7.122,9.91L91.335,53l7.119-9.909a1.2,1.2,0,0,0-.274-1.674l-3.895-2.8a1.2,1.2,0,0,0-1.675.275L74.168,64.552a1.2,1.2,0,0,0,.273,1.675l3.9,2.8a1.2,1.2,0,0,0,1.674-.275l7.12-9.908,14.093,10.128-7.615,10.6L46.6,95.114,26.356,80.565,26.1,31.053l7.614-10.6L47.805,30.584l-7.12,9.907a1.2,1.2,0,0,0,.273,1.675l3.9,2.8a1.2,1.2,0,0,0,1.674-.275L64.972,19.03a1.2,1.2,0,0,0-.274-1.675l-3.9-2.8a1.2,1.2,0,0,0-1.674.274l-7.12,9.909L37.914,14.61,45.035,4.7a1.2,1.2,0,0,0-.275-1.674l-3.9-2.8A1.2,1.2,0,0,0,39.188.5L19.115,28.435a1.2,1.2,0,0,0-.225.706l.283,54.517a1.2,1.2,0,0,0,.5.968l25.21,18.117a1.2,1.2,0,0,0,1.077.165"
										transform="translate(232.38 602.29)"
									/>
								</g>
								<g
									className="r-pentagrama"
									transform="matrix(1, 0, 0, 1, 0, 892.71)">
									<path
										className="a-pentagrama"
										d="M52.8,76.989a5.445,5.445,0,0,0-5.952-1.515l.342-.342a5.6,5.6,0,0,0,.278-7.749,5.449,5.449,0,0,0-7.824-.121l.939-.939a5.6,5.6,0,0,0,.279-7.749,5.451,5.451,0,0,0-7.825-.121L47.4,44.094a5.6,5.6,0,0,0,.279-7.749,5.451,5.451,0,0,0-7.825-.12L18.083,57.992a33.216,33.216,0,0,0-1.1-12.478,5.124,5.124,0,0,0-7.569-2.98,5.306,5.306,0,0,0-2.222,6.028c2.579,9.332-2,19.137-5.612,27.565-1.74,4.052-3.722,12.364,4.16,20.246l4.639,4.639c10.546,10.546,24.285,1.336,26.572-.952l.894-.894L49.119,87.889l3.3-3.3a5.59,5.59,0,0,0,.385-7.6"
										transform="translate(232.38 602.29)"
									/>
								</g>
								<text
									className="f-pentagrama"
									transform="translate(71 1530)">
									<tspan x={0} y={15}>
										{'Conoce más de '}
									</tspan>
									<tspan x={0} y={33}>
										{'Amarey dando clic '}
									</tspan>
									<tspan x={0} y={51}>
										{'en cada uno '}
									</tspan>
								</text>
							</g>
							<path
								className="g-pentagrama"
								d="M37.093,124.41C48.487,90.449,65.14,61.567,85.812,40.133,110,15.048,138.139,1.788,167.169,1.788H282.007V0H167.169C137.5,0,108.815,13.483,84.214,38.991,63.261,60.717,46.411,90,34.933,124.41Z"
								transform="translate(131.993 769.882)"
							/>
							<text
								className="h-pentagrama"
								transform="translate(210 116.557)">
								<tspan x={-102.024} y={18}>
									{'El origen de nuestra '}
								</tspan>
								<tspan x={-129.438} y={37}>
									{'historia es hoy la esencia '}
								</tspan>
								<tspan x={-87.678} y={56}>
									{'de nuestra marca'}
								</tspan>
							</text>
							<g
								transform="translate(184.884 718.571)"
								onClick={() => setSelectedImage('')}>
								<path
									className="a-pentagrama"
									d="M229.116,155.108V54.822H88.805C53.1,54.822,20.24,93.054,0,155.108Z"
									transform="translate(0 20.613)"
								/>
								<g transform="translate(118.116 115.959)">
									<path
										className="b-pentagrama"
										d="M0,0V19.012L16.462,9.505,8.6,4.965Z"
										transform="translate(16.462 19.012) rotate(180)"
									/>
									<text
										className="i-pentagrama"
										transform="translate(72.852 15.238)">
										<tspan x={-46.928} y={0}>
											{'Volver'}
										</tspan>
									</text>
								</g>
							</g>
							<g
								transform="translate(64.145 240.907)"
								onClick={() => setStep(1)}>
								<image
									width={144.8}
									height={125.545}
									transform="matrix(0.999, 0.035, -0.035, 0.999, 4.381, 0)"
									xlinkHref="/images/mobile/ComponentTMP_0-image.png"
								/>
							</g>
							<g
								transform="translate(207.677 247.877)"
								onClick={() => setStep(2)}>
								<rect
									className="j-pentagrama"
									width={148.114}
									height={122.757}
									transform="matrix(1, 0.017, -0.017, 1, 2.142, 0)"
								/>
							</g>
							<g
								transform="translate(228.315 343.523)"
								onClick={() => setStep(3)}>
								<image
									width={142.231}
									height={146.16}
									transform="translate(7.649) rotate(3)"
									xlinkHref="/images/mobile/ComponentTMP_0-image3.png"
								/>
							</g>
							<g
								transform="translate(30.812 362.798)"
								onClick={() => setStep(0)}>
								<image
									width={78.338}
									height={79.18}
									transform="matrix(0.999, 0.035, -0.035, 0.999, 85.951, 0)"
									xlinkHref="/images/mobile/ComponentTMP_0-image4.png"
								/>
								<g
									transform="translate(-30.813 -1255.505)"
									onClick={() =>
										(window.location.href = '/filosofia')
									}>
									<g transform="translate(30.813 1489.888)">
										<g
											className="q-pentagrama"
											transform="matrix(1, 0, 0, 1, -30.81, -597.18)">
											<path
												className="a-pentagrama"
												d="M284.956,0H62.231V.026C44.578.7,28.824,14.4,22.09,35.111L0,127.92H284.956v-.026c17.653-.671,33.408-14.375,40.141-35.085L347.187,0Z"
												transform="translate(378 725.1) rotate(180)"
											/>
										</g>
										<g
											className="k-pentagrama"
											transform="translate(0 0)">
											<path
												className="l-pentagrama"
												d="M108.4,0H23.674V.01C16.958.265,10.965,5.476,8.4,13.35L0,48.637H108.4v-.01c6.715-.255,12.709-5.466,15.27-13.34L132.076,0Z"
												transform="translate(237.919 158.05) rotate(180)"
											/>
										</g>
										<path
											className="m-pentagrama"
											d="M49.708,0H48.645V.026C34.845.7,22.531,14.4,17.267,35.111L0,127.92H117.228v-.026c13.8-.671,26.114-14.375,31.377-35.085L165.873,0Z"
											transform="translate(347.187 127.92) rotate(180)"
										/>
										<text
											className="n-pentagrama"
											transform="translate(23.74 56.229)">
											<tspan x={35.3} y={18}>
												{'Filosofía '}
											</tspan>
										</text>
									</g>
								</g>
								<g
									transform="translate(0 -54.361)"
									onClick={() => setStep(0)}>
									<g
										className="p-pentagrama"
										transform="matrix(1, 0, 0, 1, -30.81, -308.44)">
										<circle
											className="g-pentagrama"
											cx={18}
											cy={18}
											r={18}
											transform="translate(346 568.29)"
										/>
									</g>
									<text
										className="o-pentagrama"
										transform="translate(325.187 286.856)">
										<tspan x={0} y={0}>
											{'X'}
										</tspan>
									</text>
								</g>
							</g>
							<g transform="translate(123.941 407.523)">
								<image
									width={168.22}
									height={126.558}
									transform="matrix(1, 0.017, -0.017, 1, 2.209, 0)"
									xlinkHref="/images/mobile/ComponentTMP_0-image5.png"
								/>
							</g>
						</svg>
					) : step === 5 ? (
						<svg viewBox="0 0 414 894.293">
							<defs>
								<style>
									{
										'.a-pentagrama,.f-pentagrama,.h-pentagrama{fill:#001f5f;}.b-pentagrama,.i-pentagrama,.n-pentagrama,.o-pentagrama{fill:#fff;}.c-pentagrama{clip-path:url(#c-pentagrama);}.d-pentagrama{opacity:0.65;}.e-pentagrama{fill:#e7002a;}.f-pentagrama,.i-pentagrama{font-size:16px;}.f-pentagrama{font-family:Silka-Bold, Silka;}.f-pentagrama,.h-pentagrama,.n-pentagrama,.o-pentagrama{font-weight:700;}.g-pentagrama{fill:#e40032;}.h-pentagrama,.n-pentagrama{font-size:18px;font-family:Kiona-Bold;}.i-pentagrama{font-family:Silka-Medium, Silka;font-weight:500;}.j-pentagrama{fill:url(#h-pentagrama);}.k-pentagrama{clip-path:url(#k-pentagrama);}.l-pentagrama{fill:none;stroke:#e40032;stroke-miterlimit:10;stroke-width:0.979px;}.m-pentagrama{fill:url(#l-pentagrama);}.o-pentagrama{font-size:24px;font-family:Helvetica-Bold, Helvetica;}.p-pentagrama{filter:url(#m-pentagrama);}.q-pentagrama{filter:url(#i-pentagrama);}.r-pentagrama{filter:url(#f-pentagrama);}.s-pentagrama{filter:url(#d-pentagrama);}.t-pentagrama{filter:url(#a-pentagrama);}'
									}
								</style>
								<filter
									id="a-pentagrama"
									x={21.813}
									y={591.181}
									width={365.187}
									height={145.92}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="b"
									/>
									<feFlood floodOpacity={0.502} />
									<feComposite operator="in" in2="b" />
									<feComposite in="SourceGraphic" />
								</filter>
								<clipPath id="c-pentagrama">
									<rect
										className="a-pentagrama"
										width={163.429}
										height={74.83}
									/>
								</clipPath>
								<filter
									id="d-pentagrama"
									x={242.271}
									y={596.293}
									width={117.729}
									height={120.968}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="e"
									/>
									<feFlood floodOpacity={0.502} />
									<feComposite operator="in" in2="e" />
									<feComposite in="SourceGraphic" />
								</filter>
								<filter
									id="f-pentagrama"
									x={223.381}
									y={630.921}
									width={72.113}
									height={89.34}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="g"
									/>
									<feFlood floodOpacity={0.502} />
									<feComposite operator="in" in2="g" />
									<feComposite in="SourceGraphic" />
								</filter>
								<pattern
									id="h-pentagrama"
									width={1}
									height={1}
									viewBox="0 -0.061 148.114 122.757">
									<image
										preserveAspectRatio="none"
										width={148.114}
										height={122.757}
										xlinkHref="/images/mobile/ComponentTMP_0-image2.png"
									/>
								</pattern>
								<filter
									id="i-pentagrama"
									x={21.813}
									y={591.181}
									width={365.187}
									height={145.92}
									filterUnits="userSpaceOnUse">
									<feOffset dy={3} />
									<feGaussianBlur
										stdDeviation={3}
										result="j"
									/>
									<feFlood floodOpacity={0.502} />
									<feComposite operator="in" in2="j" />
									<feComposite in="SourceGraphic" />
								</filter>
								<clipPath id="k-pentagrama">
									<g
										className="t-pentagrama"
										transform="matrix(1, 0, 0, 1, 0, 0)">
										<path
											className="a-pentagrama"
											d="M284.956,0H62.231V.026C44.578.7,28.824,14.4,22.09,35.111L0,127.92H284.956v-.026c17.653-.671,33.408-14.375,40.141-35.085L347.187,0Z"
											transform="translate(347.19 127.92) rotate(180)"
										/>
									</g>
								</clipPath>
								<pattern
									id="l-pentagrama"
									width={1}
									height={1}
									patternTransform="translate(500 255.839) rotate(-180)"
									viewBox="29.441 12.384 112.718 86.927">
									<image
										preserveAspectRatio="xMidYMid slice"
										width={191.879}
										height={127.92}
										xlinkHref="/images/mobile/rse.jpg"
									/>
								</pattern>
								<filter
									id="m-pentagrama"
									x={344.5}
									y={567.793}
									width={39}
									height={39}
									filterUnits="userSpaceOnUse">
									<feOffset dy={1} />
									<feGaussianBlur
										stdDeviation={0.5}
										result="n"
									/>
									<feFlood floodOpacity={0.4} />
									<feComposite operator="in" in2="n" />
									<feComposite in="SourceGraphic" />
								</filter>
							</defs>
							<g transform="translate(0.572)">
								<rect
									className="b-pentagrama"
									width={413.428}
									height={894.293}
								/>
								<g
									className="c-pentagrama"
									transform="translate(-0.572)">
									<path
										className="a-pentagrama"
										d="M107.443,74.83H0V0H163.429V19.373c0,30.628-25.066,55.457-55.986,55.457"
									/>
								</g>
							</g>
							<g
								className="d-pentagrama"
								transform="translate(0 -892.707)">
								<g
									className="s-pentagrama"
									transform="matrix(1, 0, 0, 1, 0, 892.71)">
									<path
										className="e-pentagrama"
										d="M45.96,102.908,97.722,85.791a1.2,1.2,0,0,0,.6-.439l20.073-27.934a1.2,1.2,0,0,0-.273-1.674l-3.9-2.8a1.2,1.2,0,0,0-1.674.274l-7.122,9.91L91.335,53l7.119-9.909a1.2,1.2,0,0,0-.274-1.674l-3.895-2.8a1.2,1.2,0,0,0-1.675.275L74.168,64.552a1.2,1.2,0,0,0,.273,1.675l3.9,2.8a1.2,1.2,0,0,0,1.674-.275l7.12-9.908,14.093,10.128-7.615,10.6L46.6,95.114,26.356,80.565,26.1,31.053l7.614-10.6L47.805,30.584l-7.12,9.907a1.2,1.2,0,0,0,.273,1.675l3.9,2.8a1.2,1.2,0,0,0,1.674-.275L64.972,19.03a1.2,1.2,0,0,0-.274-1.675l-3.9-2.8a1.2,1.2,0,0,0-1.674.274l-7.12,9.909L37.914,14.61,45.035,4.7a1.2,1.2,0,0,0-.275-1.674l-3.9-2.8A1.2,1.2,0,0,0,39.188.5L19.115,28.435a1.2,1.2,0,0,0-.225.706l.283,54.517a1.2,1.2,0,0,0,.5.968l25.21,18.117a1.2,1.2,0,0,0,1.077.165"
										transform="translate(232.38 602.29)"
									/>
								</g>
								<g
									className="r-pentagrama"
									transform="matrix(1, 0, 0, 1, 0, 892.71)">
									<path
										className="a-pentagrama"
										d="M52.8,76.989a5.445,5.445,0,0,0-5.952-1.515l.342-.342a5.6,5.6,0,0,0,.278-7.749,5.449,5.449,0,0,0-7.824-.121l.939-.939a5.6,5.6,0,0,0,.279-7.749,5.451,5.451,0,0,0-7.825-.121L47.4,44.094a5.6,5.6,0,0,0,.279-7.749,5.451,5.451,0,0,0-7.825-.12L18.083,57.992a33.216,33.216,0,0,0-1.1-12.478,5.124,5.124,0,0,0-7.569-2.98,5.306,5.306,0,0,0-2.222,6.028c2.579,9.332-2,19.137-5.612,27.565-1.74,4.052-3.722,12.364,4.16,20.246l4.639,4.639c10.546,10.546,24.285,1.336,26.572-.952l.894-.894L49.119,87.889l3.3-3.3a5.59,5.59,0,0,0,.385-7.6"
										transform="translate(232.38 602.29)"
									/>
								</g>
								<text
									className="f-pentagrama"
									transform="translate(71 1530)">
									<tspan x={0} y={15}>
										{'Conoce más de '}
									</tspan>
									<tspan x={0} y={33}>
										{'Amarey dando clic '}
									</tspan>
									<tspan x={0} y={51}>
										{'en cada uno '}
									</tspan>
								</text>
							</g>
							<path
								className="g-pentagrama"
								d="M37.093,124.41C48.487,90.449,65.14,61.567,85.812,40.133,110,15.048,138.139,1.788,167.169,1.788H282.007V0H167.169C137.5,0,108.815,13.483,84.214,38.991,63.261,60.717,46.411,90,34.933,124.41Z"
								transform="translate(131.993 769.882)"
							/>
							<text
								className="h-pentagrama"
								transform="translate(210 116.557)">
								<tspan x={-102.024} y={18}>
									{'El origen de nuestra '}
								</tspan>
								<tspan x={-129.438} y={37}>
									{'historia es hoy la esencia '}
								</tspan>
								<tspan x={-87.678} y={56}>
									{'de nuestra marca'}
								</tspan>
							</text>
							<g
								transform="translate(184.884 718.571)"
								onClick={() => setSelectedImage('')}>
								<path
									className="a-pentagrama"
									d="M229.116,155.108V54.822H88.805C53.1,54.822,20.24,93.054,0,155.108Z"
									transform="translate(0 20.613)"
								/>
								<g transform="translate(118.116 115.959)">
									<path
										className="b-pentagrama"
										d="M0,0V19.012L16.462,9.505,8.6,4.965Z"
										transform="translate(16.462 19.012) rotate(180)"
									/>
									<text
										className="i-pentagrama"
										transform="translate(72.852 15.238)">
										<tspan x={-46.928} y={0}>
											{'Volver'}
										</tspan>
									</text>
								</g>
							</g>
							<g
								transform="translate(64.145 240.907)"
								onClick={() => setStep(1)}>
								<image
									width={144.8}
									height={125.545}
									transform="matrix(0.999, 0.035, -0.035, 0.999, 4.381, 0)"
									xlinkHref="/images/mobile/ComponentTMP_0-image.png"
								/>
							</g>
							<g
								transform="translate(207.677 247.877)"
								onClick={() => setStep(2)}>
								<rect
									className="j-pentagrama"
									width={148.114}
									height={122.757}
									transform="matrix(1, 0.017, -0.017, 1, 2.142, 0)"
								/>
							</g>
							<g
								transform="translate(228.315 343.523)"
								onClick={() => setStep(3)}>
								<image
									width={142.231}
									height={146.16}
									transform="translate(7.649) rotate(3)"
									xlinkHref="/images/mobile/ComponentTMP_0-image3.png"
								/>
							</g>
							<g
								transform="translate(36 340.862)"
								onClick={() => setStep(4)}>
								<image
									width={144.04}
									height={145.589}
									transform="matrix(0.999, 0.035, -0.035, 0.999, 5.081, 0)"
									xlinkHref="/images/mobile/ComponentTMP_0-image4.png"
								/>
							</g>
							<g
								transform="translate(30.813 399.052)"
								onClick={() => setStep(0)}>
								<image
									width={91.488}
									height={68.83}
									transform="matrix(1, 0.017, -0.017, 1, 132.216, 0)"
									xlinkHref="/images/mobile/ComponentTMP_0-image5.png"
								/>
								<g
									transform="translate(-30.813 -1291.76)"
									onClick={() =>
										(window.location.href = '/filosofia')
									}>
									<g transform="translate(30.813 1489.888)">
										<g
											className="q-pentagrama"
											transform="matrix(1, 0, 0, 1, -30.81, -597.18)">
											<path
												className="a-pentagrama"
												d="M284.956,0H62.231V.026C44.578.7,28.824,14.4,22.09,35.111L0,127.92H284.956v-.026c17.653-.671,33.408-14.375,40.141-35.085L347.187,0Z"
												transform="translate(378 725.1) rotate(180)"
											/>
										</g>
										<g
											className="k-pentagrama"
											transform="translate(0 0)">
											<path
												className="l-pentagrama"
												d="M108.4,0H23.674V.01C16.958.265,10.965,5.476,8.4,13.35L0,48.637H108.4v-.01c6.715-.255,12.709-5.466,15.27-13.34L132.076,0Z"
												transform="translate(237.919 158.05) rotate(180)"
											/>
										</g>
										<path
											className="m-pentagrama"
											d="M49.708,0H48.645V.026C34.845.7,22.531,14.4,17.267,35.111L0,127.92H117.228v-.026c13.8-.671,26.114-14.375,31.377-35.085L165.873,0Z"
											transform="translate(347.187 127.92) rotate(180)"
										/>
										<text
											className="n-pentagrama"
											transform="translate(27.74 56.229)">
											<tspan x={64.685} y={18}>
												{'RSE'}
											</tspan>
										</text>
									</g>
								</g>
								<g
									transform="translate(0 -90.616)"
									onClick={() => setStep(0)}>
									<g
										className="p-pentagrama"
										transform="matrix(1, 0, 0, 1, -30.81, -308.44)">
										<circle
											className="g-pentagrama"
											cx={18}
											cy={18}
											r={18}
											transform="translate(346 568.29)"
										/>
									</g>
									<text
										className="o-pentagrama"
										transform="translate(325.187 286.856)">
										<tspan x={0} y={0}>
											{'X'}
										</tspan>
									</text>
								</g>
							</g>
						</svg>
					) : (
						<React.Fragment></React.Fragment>
					)}
				</React.Fragment>
			)}
			<div
				className="fixed h-screen w-screen top-0 left-0 z-[100] bg-[#e6e6e6]"
				style={{ display: showPopup ? 'flex' : 'none' }}>
				<video
					src="/images/video/Origen pentamero_1.mp4"
					muted={mute}
					controls
					className="w-full h-full"
					id="video-1"></video>

				<span
					className="absolute top-[5%] right-[5%] text-white text-[30px] text-center font-bold bg-[#00000050] w-[50px] h-[50px] rounded-[100%]"
					onClick={() => {
						setShowPopup(false)
						const video: HTMLVideoElement = document.getElementById(
							'video-1'
						) as HTMLVideoElement

						if (video) {
							video.currentTime = 0
							video.pause()
						}
					}}>
					X
				</span>
				<img
					src={mute ? '/images/mute.png' : '/images/Button.png'}
					className="absolute w-[10%] left-[8%] bottom-[10px]"
					alt="Mute"
					onClick={() => setMute(!mute)}
				/>
			</div>
		</React.Fragment>
	)
}
