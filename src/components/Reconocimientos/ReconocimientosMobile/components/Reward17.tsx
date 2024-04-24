import React from 'react'

const Reward17Mobile: React.FC = (): JSX.Element => {
	/** States */
	const [showCard, setShowCard] = React.useState<boolean>(false)

	return (
		<g
			transform="translate(111 1913)"
			onClick={() => setShowCard(!showCard)}>
			{!showCard ? (
				<React.Fragment>
					<defs>
						<style>
							{
								'.a-reward-17-mobile{fill:none;}.a-reward-17-mobile,.aa-reward-17-mobile,.ac-reward-17-mobile,.ae-reward-17-mobile,.ag-reward-17-mobile,.ai-reward-17-mobile,.ak-reward-17-mobile,.am-reward-17-mobile,.ao-reward-17-mobile,.aq-reward-17-mobile,.as-reward-17-mobile,.au-reward-17-mobile,.aw-reward-17-mobile,.ay-reward-17-mobile,.ba-reward-17-mobile,.bc-reward-17-mobile,.be-reward-17-mobile,.bg-reward-17-mobile,.bi-reward-17-mobile,.bk-reward-17-mobile,.bm-reward-17-mobile,.bo-reward-17-mobile,.bq-reward-17-mobile,.bs-reward-17-mobile,.bu-reward-17-mobile,.bw-reward-17-mobile,.by-reward-17-mobile,.cc-reward-17-mobile,.ce-reward-17-mobile,.ch-reward-17-mobile,.cj-reward-17-mobile,.e-reward-17-mobile,.g-reward-17-mobile,.i-reward-17-mobile,.k-reward-17-mobile,.m-reward-17-mobile,.o-reward-17-mobile,.q-reward-17-mobile,.s-reward-17-mobile,.u-reward-17-mobile,.w-reward-17-mobile,.y-reward-17-mobile{stroke:#707070;stroke-width:4px;}.b-reward-17-mobile,.cl-reward-17-mobile{fill:#fff;}.c-reward-17-mobile{clip-path:url(#c-reward-17-mobile);}.d-reward-17-mobile{clip-path:url(#d-reward-17-mobile);}.e-reward-17-mobile{fill:url(#e-reward-17-mobile);}.f-reward-17-mobile{clip-path:url(#f-reward-17-mobile);}.g-reward-17-mobile{fill:url(#g-reward-17-mobile);}.h-reward-17-mobile{clip-path:url(#h-reward-17-mobile);}.i-reward-17-mobile{fill:url(#i-reward-17-mobile);}.j-reward-17-mobile{clip-path:url(#j-reward-17-mobile);}.k-reward-17-mobile{fill:url(#k-reward-17-mobile);}.l-reward-17-mobile{clip-path:url(#l-reward-17-mobile);}.m-reward-17-mobile{fill:url(#m-reward-17-mobile);}.n-reward-17-mobile{clip-path:url(#n-reward-17-mobile);}.o-reward-17-mobile{fill:url(#o-reward-17-mobile);}.p-reward-17-mobile{clip-path:url(#p-reward-17-mobile);}.q-reward-17-mobile{fill:url(#q-reward-17-mobile);}.r-reward-17-mobile{clip-path:url(#r-reward-17-mobile);}.s-reward-17-mobile{fill:url(#s-reward-17-mobile);}.t-reward-17-mobile{clip-path:url(#t-reward-17-mobile);}.u-reward-17-mobile{fill:url(#u-reward-17-mobile);}.v-reward-17-mobile{clip-path:url(#v-reward-17-mobile);}.w-reward-17-mobile{fill:url(#w-reward-17-mobile);}.x-reward-17-mobile{clip-path:url(#x-reward-17-mobile);}.y-reward-17-mobile{fill:url(#y-reward-17-mobile);}.z-reward-17-mobile{clip-path:url(#z-reward-17-mobile);}.aa-reward-17-mobile{fill:url(#aa-reward-17-mobile);}.ab-reward-17-mobile{clip-path:url(#ab-reward-17-mobile);}.ac-reward-17-mobile{fill:url(#ac-reward-17-mobile);}.ad-reward-17-mobile{clip-path:url(#ad-reward-17-mobile);}.ae-reward-17-mobile{fill:url(#ae-reward-17-mobile);}.af-reward-17-mobile{clip-path:url(#af-reward-17-mobile);}.ag-reward-17-mobile{fill:url(#ag-reward-17-mobile);}.ah-reward-17-mobile{clip-path:url(#ah-reward-17-mobile);}.ai-reward-17-mobile{fill:url(#ai-reward-17-mobile);}.aj-reward-17-mobile{clip-path:url(#aj-reward-17-mobile);}.ak-reward-17-mobile{fill:url(#ak-reward-17-mobile);}.al-reward-17-mobile{clip-path:url(#al-reward-17-mobile);}.am-reward-17-mobile{fill:url(#am-reward-17-mobile);}.an-reward-17-mobile{clip-path:url(#an-reward-17-mobile);}.ao-reward-17-mobile{fill:url(#ao-reward-17-mobile);}.ap-reward-17-mobile{clip-path:url(#ap-reward-17-mobile);}.aq-reward-17-mobile{fill:url(#aq-reward-17-mobile);}.ar-reward-17-mobile{clip-path:url(#ar-reward-17-mobile);}.as-reward-17-mobile{fill:url(#as-reward-17-mobile);}.at-reward-17-mobile{clip-path:url(#at-reward-17-mobile);}.au-reward-17-mobile{fill:url(#au-reward-17-mobile);}.av-reward-17-mobile{clip-path:url(#av-reward-17-mobile);}.aw-reward-17-mobile{fill:url(#aw-reward-17-mobile);}.ax-reward-17-mobile{clip-path:url(#ax-reward-17-mobile);}.ay-reward-17-mobile{fill:url(#ay-reward-17-mobile);}.az-reward-17-mobile{clip-path:url(#az-reward-17-mobile);}.ba-reward-17-mobile{fill:url(#ba-reward-17-mobile);}.bb-reward-17-mobile{clip-path:url(#bb-reward-17-mobile);}.bc-reward-17-mobile{fill:url(#bc-reward-17-mobile);}.bd-reward-17-mobile{clip-path:url(#bd-reward-17-mobile);}.be-reward-17-mobile{fill:url(#be-reward-17-mobile);}.bf-reward-17-mobile{clip-path:url(#bf-reward-17-mobile);}.bg-reward-17-mobile{fill:url(#bg-reward-17-mobile);}.bh-reward-17-mobile{clip-path:url(#bh-reward-17-mobile);}.bi-reward-17-mobile{fill:url(#bi-reward-17-mobile);}.bj-reward-17-mobile{clip-path:url(#bj-reward-17-mobile);}.bk-reward-17-mobile{fill:url(#bk-reward-17-mobile);}.bl-reward-17-mobile{clip-path:url(#bl-reward-17-mobile);}.bm-reward-17-mobile{fill:url(#bm-reward-17-mobile);}.bn-reward-17-mobile{clip-path:url(#bn-reward-17-mobile);}.bo-reward-17-mobile{fill:url(#bo-reward-17-mobile);}.bp-reward-17-mobile{clip-path:url(#bp-reward-17-mobile);}.bq-reward-17-mobile{fill:url(#bq-reward-17-mobile);}.br-reward-17-mobile{clip-path:url(#br-reward-17-mobile);}.bs-reward-17-mobile{fill:url(#bs-reward-17-mobile);}.bt-reward-17-mobile{clip-path:url(#bt-reward-17-mobile);}.bu-reward-17-mobile{fill:url(#bu-reward-17-mobile);}.bv-reward-17-mobile{clip-path:url(#bv-reward-17-mobile);}.bw-reward-17-mobile{fill:url(#bw-reward-17-mobile);}.bx-reward-17-mobile{clip-path:url(#bx-reward-17-mobile);}.by-reward-17-mobile{fill:url(#by-reward-17-mobile);}.bz-reward-17-mobile{opacity:0.4;mix-blend-mode:multiply;isolation:isolate;}.ca-reward-17-mobile{clip-path:url(#ca-reward-17-mobile);}.cb-reward-17-mobile{clip-path:url(#cb-reward-17-mobile);}.cc-reward-17-mobile{fill:url(#cc-reward-17-mobile);}.cd-reward-17-mobile{clip-path:url(#cd-reward-17-mobile);}.ce-reward-17-mobile{fill:url(#ce-reward-17-mobile);}.cf-reward-17-mobile{clip-path:url(#cg-reward-17-mobile);}.cg-reward-17-mobile{clip-path:url(#ch-reward-17-mobile);}.ch-reward-17-mobile{fill:url(#ci-reward-17-mobile);}.ci-reward-17-mobile{clip-path:url(#cj-reward-17-mobile);}.cj-reward-17-mobile{fill:url(#ck-reward-17-mobile);}.ck-reward-17-mobile{fill:#543913;font-size:12px;}.ck-reward-17-mobile,.cl-reward-17-mobile{font-family:Silka-SemiBold, Silka;font-weight:600;}.cl-reward-17-mobile{font-size:10px;}.cm-reward-17-mobile{filter:url(#a-reward-17-mobile);}'
							}
						</style>
						<filter
							id="a-reward-17-mobile"
							x={0}
							y={0}
							width={138}
							height={159}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="b" />
							<feFlood floodOpacity={0.4} />
							<feComposite operator="in" in2="b" />
							<feComposite in="SourceGraphic" />
						</filter>
						<clipPath id="c-reward-17-mobile">
							<rect
								className="a-reward-17-mobile"
								width={100.306}
								height={90.076}
							/>
						</clipPath>
						<clipPath id="d-reward-17-mobile">
							<path
								className="a-reward-17-mobile"
								d="M214.658,232.366a13.77,13.77,0,0,0-1.543,4.919,10.627,10.627,0,0,0,3.406-4.155,7.127,7.127,0,0,1-2.237,3.62,7.452,7.452,0,0,1-1.305,1.067c.055,0,.113-.009.169-.014a6.83,6.83,0,0,0-2.582,1.243,11.075,11.075,0,0,1,2.2-.172,12,12,0,0,1,5.7,1.155,17.25,17.25,0,0,0-7.247-.649,21.064,21.064,0,0,0,6.485,2.838,25.232,25.232,0,0,0,4.921.38c-1.473-4.509-5.373-5.487-8.5-5,2.671-.847,5.783-4.022,2.774-7.974a16.333,16.333,0,0,0-2.251,2.744"
								transform="translate(-210.568 -229.622)"
							/>
						</clipPath>
						<linearGradient
							id="e-reward-17-mobile"
							x1={-2.995}
							y1={1.757}
							x2={-2.98}
							y2={1.757}
							gradientUnits="objectBoundingBox">
							<stop offset={0} stopColor="#805a23" />
							<stop offset={0.061} stopColor="#ac925f" />
							<stop offset={0.118} stopColor="#d2c192" />
							<stop offset={0.162} stopColor="#eadeb2" />
							<stop offset={0.186} stopColor="#f3eabe" />
							<stop offset={0.235} stopColor="#e2d3a2" />
							<stop offset={0.312} stopColor="#cbb57c" />
							<stop offset={0.384} stopColor="#ba9f60" />
							<stop offset={0.447} stopColor="#b0914f" />
							<stop offset={0.495} stopColor="#ad8d4a" />
							<stop offset={0.583} stopColor="#ae8f4d" />
							<stop offset={0.661} stopColor="#b59758" />
							<stop offset={0.735} stopColor="#bfa56a" />
							<stop offset={0.806} stopColor="#ceb983" />
							<stop offset={0.875} stopColor="#e0d2a3" />
							<stop offset={0.896} stopColor="#e7dbaf" />
							<stop offset={1} stopColor="#a98d5c" />
						</linearGradient>
						<clipPath id="f-reward-17-mobile">
							<path
								className="a-reward-17-mobile"
								d="M242.243,221.813a14.564,14.564,0,0,0-1.987,4.793,10.619,10.619,0,0,0,3.72-3.842,7.222,7.222,0,0,1-2.532,3.416,7.386,7.386,0,0,1-1.375.946c.053,0,.108,0,.163,0a6.492,6.492,0,0,0-2.625,1,10.339,10.339,0,0,1,2.146.038,11.389,11.389,0,0,1,5.409,1.7,16.244,16.244,0,0,0-6.956-1.341,19.615,19.615,0,0,0,5.972,3.462,23.9,23.9,0,0,0,4.757.841c-.953-4.647-4.649-6-7.731-5.816,2.678-.591,6.044-3.467,3.479-7.735a16.163,16.163,0,0,0-2.441,2.531"
								transform="translate(-237.607 -219.282)"
							/>
						</clipPath>
						<linearGradient
							id="g-reward-17-mobile"
							x1={-3.42}
							y1={1.914}
							x2={-3.405}
							y2={1.914}
							xlinkHref="#e-reward-17-mobile"
						/>
						<clipPath id="h-reward-17-mobile">
							<path
								className="a-reward-17-mobile"
								d="M266.935,212.11a13.1,13.1,0,0,0-.81,4.955,9.227,9.227,0,0,0,2.72-4.285,6.478,6.478,0,0,1-1.662,3.7,6.33,6.33,0,0,1-1.115,1.119c.054-.005.109-.014.164-.022a5.907,5.907,0,0,0-2.332,1.352,10.26,10.26,0,0,1,2.114-.271,12.118,12.118,0,0,1,5.693.888,16.584,16.584,0,0,0-7.12-.315,22.687,22.687,0,0,0,6.7,2.526,24.128,24.128,0,0,0,4.815.158,7.728,7.728,0,0,0-8.94-4.587c2.47-.965,5.025-4.267,1.58-8.048a14.29,14.29,0,0,0-1.806,2.832"
								transform="translate(-263.901 -209.278)"
							/>
						</clipPath>
						<linearGradient
							id="i-reward-17-mobile"
							x1={-3.817}
							y1={2.076}
							x2={-3.802}
							y2={2.076}
							xlinkHref="#e-reward-17-mobile"
						/>
						<clipPath id="j-reward-17-mobile">
							<path
								className="a-reward-17-mobile"
								d="M289.256,199.818a12.692,12.692,0,0,0,.352,4.967,8.408,8.408,0,0,0,1.645-4.6,6.229,6.229,0,0,1-.757,3.87,5.522,5.522,0,0,1-.816,1.258c.054-.013.107-.03.161-.047a5.248,5.248,0,0,0-1.947,1.662,9.523,9.523,0,0,1,1.986-.571,12.022,12.022,0,0,1,5.7.046,15.855,15.855,0,0,0-6.944.72c-.008,0,1.01.378,2.385.758a17.807,17.807,0,0,0,4.692.755,22.273,22.273,0,0,0,4.638-.531c-3.029-4.063-6.967-4.263-9.672-3.219,2.157-1.307,3.835-4.933-.3-8.117a12.966,12.966,0,0,0-1.124,3.047"
								transform="translate(-287.893 -196.771)"
							/>
						</clipPath>
						<linearGradient
							id="k-reward-17-mobile"
							x1={-4.316}
							y1={2.34}
							x2={-4.3}
							y2={2.34}
							xlinkHref="#e-reward-17-mobile"
						/>
						<clipPath id="l-reward-17-mobile">
							<path
								className="a-reward-17-mobile"
								d="M307.527,185.314a13.127,13.127,0,0,0,1.435,4.828,8.259,8.259,0,0,0,.558-4.773,6.454,6.454,0,0,1,.128,3.923,5.071,5.071,0,0,1-.5,1.359c.051-.022.1-.048.152-.074a4.7,4.7,0,0,0-1.495,1.924,8.505,8.505,0,0,1,1.774-.854,12.079,12.079,0,0,1,5.186-.83c.165.017.253.034.256.034a14.422,14.422,0,0,0-6.46,1.733c-.006,0,.7.147,1.714.295a16.15,16.15,0,0,0,9.647-1.044c-3.778-3.585-7.573-3.185-9.918-1.75,1.767-1.608,2.56-5.45-2.044-7.942a12.384,12.384,0,0,0-.435,3.17"
								transform="translate(-307.526 -182.144)"
							/>
						</clipPath>
						<linearGradient
							id="m-reward-17-mobile"
							x1={-4.774}
							y1={2.651}
							x2={-4.758}
							y2={2.651}
							xlinkHref="#e-reward-17-mobile"
						/>
						<clipPath id="n-reward-17-mobile">
							<path
								className="a-reward-17-mobile"
								d="M317.768,169.035a14.006,14.006,0,0,0,2.385,4.542,8.7,8.7,0,0,0-.478-4.8,6.994,6.994,0,0,1,.946,3.858,5.069,5.069,0,0,1-.177,1.419c.046-.031.091-.066.135-.1a4.374,4.374,0,0,0-1,2.131,7.5,7.5,0,0,1,1.5-1.111,10.024,10.024,0,0,1,4.963-1.615,12.8,12.8,0,0,0-5.723,2.694c-.011,0,4.422.252,6.813-.619a15.924,15.924,0,0,0,3.706-1.838c-4.3-3-7.8-2.007-9.707-.222,1.331-1.857,1.279-5.805-3.583-7.531a12.407,12.407,0,0,0,.225,3.2"
								transform="translate(-317.519 -165.838)"
							/>
						</clipPath>
						<linearGradient
							id="o-reward-17-mobile"
							x1={-4.9}
							y1={2.907}
							x2={-4.884}
							y2={2.907}
							xlinkHref="#e-reward-17-mobile"
						/>
						<clipPath id="p-reward-17-mobile">
							<path
								className="a-reward-17-mobile"
								d="M323.316,151.478a14.877,14.877,0,0,0,3.165,4.118,9.524,9.524,0,0,0-1.412-4.684,7.621,7.621,0,0,1,1.66,3.674,5.394,5.394,0,0,1,.124,1.435c.038-.04.075-.083.111-.127a4.32,4.32,0,0,0-.505,2.275,6.8,6.8,0,0,1,1.178-1.335,8.865,8.865,0,0,1,4.311-2.384,11.489,11.489,0,0,0-4.8,3.572c-.006,0,4.215-.432,6.248-1.673a13.534,13.534,0,0,0,3.045-2.418c-4.58-2.324-7.67-.764-9.094,1.318.877-2.05.064-5.991-4.855-6.9a12.747,12.747,0,0,0,.824,3.126"
								transform="translate(-322.492 -148.352)"
							/>
						</clipPath>
						<linearGradient
							id="q-reward-17-mobile"
							x1={-5.028}
							y1={3.216}
							x2={-5.012}
							y2={3.216}
							xlinkHref="#e-reward-17-mobile"
						/>
						<clipPath id="r-reward-17-mobile">
							<path
								className="a-reward-17-mobile"
								d="M325.278,133.175a15.287,15.287,0,0,0,3.753,3.569,10.386,10.386,0,0,0-2.207-4.425,8.043,8.043,0,0,1,2.244,3.379,5.931,5.931,0,0,1,.394,1.408c.028-.047.054-.1.079-.148a4.475,4.475,0,0,0-.025,2.348,6.567,6.567,0,0,1,.837-1.517,8.073,8.073,0,0,1,3.544-3.081,10.831,10.831,0,0,0-3.766,4.342s3.851-1.1,5.474-2.676a12.467,12.467,0,0,0,2.327-2.925c-4.646-1.574-7.24.509-8.166,2.824.433-2.182-1.035-6-5.83-6.059a13.059,13.059,0,0,0,1.34,2.96"
								transform="translate(-323.938 -130.215)"
							/>
						</clipPath>
						<linearGradient
							id="s-reward-17-mobile"
							x1={-5.216}
							y1={3.614}
							x2={-5.199}
							y2={3.614}
							xlinkHref="#e-reward-17-mobile"
						/>
						<clipPath id="t-reward-17-mobile">
							<path
								className="a-reward-17-mobile"
								d="M322.211,111.664a13.127,13.127,0,0,0,1.761,2.7,15.02,15.02,0,0,0,4.145,2.911,10.88,10.88,0,0,0-2.839-4.03,8.032,8.032,0,0,1,2.686,2.981,6.436,6.436,0,0,1,.621,1.338c.017-.051.031-.106.045-.161a4.707,4.707,0,0,0,.411,2.347,6.748,6.748,0,0,1,.5-1.654,7.84,7.84,0,0,1,2.724-3.685,10.927,10.927,0,0,0-2.7,4.981s3.369-1.741,4.565-3.6a12.78,12.78,0,0,0,1.6-3.342c-4.525-.773-6.576,1.769-7.021,4.245a5.2,5.2,0,0,0-5.252-5.152,7.175,7.175,0,0,0-1.251.114"
								transform="translate(-322.211 -111.55)"
							/>
						</clipPath>
						<linearGradient
							id="u-reward-17-mobile"
							x1={-5.528}
							y1={4.161}
							x2={-5.51}
							y2={4.161}
							xlinkHref="#e-reward-17-mobile"
						/>
						<clipPath id="v-reward-17-mobile">
							<path
								className="a-reward-17-mobile"
								d="M324.579,93.458a4.9,4.9,0,0,0-6.893-3.866,12.668,12.668,0,0,0,2.082,2.367,14.074,14.074,0,0,0,4.352,2.166,10.7,10.7,0,0,0-3.3-3.514A7.523,7.523,0,0,1,323.8,93.1a6.66,6.66,0,0,1,.8,1.228c.006-.052.01-.106.013-.161a4.862,4.862,0,0,0,.784,2.266,7.24,7.24,0,0,1,.179-1.74,8.2,8.2,0,0,1,1.9-4.176,11.659,11.659,0,0,0-1.656,5.468c.007,0,2.816-2.326,3.6-4.41a14.4,14.4,0,0,0,.918-3.658c-4.26.054-5.762,2.979-5.764,5.539"
								transform="translate(-317.686 -87.919)"
							/>
						</clipPath>
						<linearGradient
							id="w-reward-17-mobile"
							x1={-5.576}
							y1={4.668}
							x2={-5.559}
							y2={4.668}
							xlinkHref="#e-reward-17-mobile"
						/>
						<clipPath id="x-reward-17-mobile">
							<path
								className="a-reward-17-mobile"
								d="M317.818,68.722c-.662-2.193-3.335-4.989-7.033-2.566a11.819,11.819,0,0,0,2.309,1.957,12.675,12.675,0,0,0,4.4,1.354,9.829,9.829,0,0,0-3.611-2.891,6.66,6.66,0,0,1,3.161,1.929,6.433,6.433,0,0,1,.931,1.08c0-.049-.007-.1-.012-.15a4.818,4.818,0,0,0,1.083,2.11,7.793,7.793,0,0,1-.108-1.773,9.015,9.015,0,0,1,1.129-4.541,12.688,12.688,0,0,0-.7,5.788A14.73,14.73,0,0,0,322,65.931a16.9,16.9,0,0,0,.306-3.863,5.6,5.6,0,0,0-4.492,6.654"
								transform="translate(-310.785 -62.068)"
							/>
						</clipPath>
						<linearGradient
							id="y-reward-17-mobile"
							x1={-5.435}
							y1={5.108}
							x2={-5.417}
							y2={5.108}
							xlinkHref="#e-reward-17-mobile"
						/>
						<clipPath id="z-reward-17-mobile">
							<path
								className="a-reward-17-mobile"
								d="M308.913,45.744c-.92-2.064-3.762-4.31-6.97-1.177a10.611,10.611,0,0,0,2.453,1.487,11.278,11.278,0,0,0,4.321.5,8.534,8.534,0,0,0-3.781-2.18,5.725,5.725,0,0,1,3.228,1.307,5.813,5.813,0,0,1,1.019.9c-.008-.043-.019-.087-.029-.132a4.532,4.532,0,0,0,1.3,1.887,8.125,8.125,0,0,1-.354-1.753,9.993,9.993,0,0,1,.431-4.766,13.516,13.516,0,0,0,.147,5.933,16.669,16.669,0,0,0,1.73-5.613,19.655,19.655,0,0,0-.216-3.95,6.2,6.2,0,0,0-3.284,7.556"
								transform="translate(-301.943 -38.188)"
							/>
						</clipPath>
						<linearGradient
							id="aa-reward-17-mobile"
							x1={-5.355}
							y1={5.611}
							x2={-5.337}
							y2={5.611}
							xlinkHref="#e-reward-17-mobile"
						/>
						<clipPath id="ab-reward-17-mobile">
							<path
								className="a-reward-17-mobile"
								d="M298.311,25.225c-1.125-1.866-4.049-3.484-6.757.256a9.449,9.449,0,0,0,2.53.973,8.126,8.126,0,0,0,3.156-.129c.591-.12,1-.239.995-.239a7.2,7.2,0,0,0-3.842-1.4,6.112,6.112,0,0,1,4.283,1.336c-.011-.036-.026-.074-.039-.111a4.052,4.052,0,0,0,1.458,1.609,7.993,7.993,0,0,1-.556-1.679,10.723,10.723,0,0,1-.173-4.848,13.726,13.726,0,0,0,.863,5.9,19.4,19.4,0,0,0,.918-5.966A21.866,21.866,0,0,0,300.5,17a6.938,6.938,0,0,0-2.194,8.22"
								transform="translate(-291.554 -17.005)"
							/>
						</clipPath>
						<linearGradient
							id="ac-reward-17-mobile"
							x1={-5.249}
							y1={6.089}
							x2={-5.23}
							y2={6.089}
							xlinkHref="#e-reward-17-mobile"
						/>
						<clipPath id="ad-reward-17-mobile">
							<path
								className="a-reward-17-mobile"
								d="M287.332,0a7.546,7.546,0,0,0-1.247,8.636c-1.28-1.608-4.235-2.55-6.46,1.68a8.643,8.643,0,0,0,2.563.429,7.111,7.111,0,0,0,2.605-.611,13.26,13.26,0,0,0,1.326-.613,6.222,6.222,0,0,0-3.833-.582,4.639,4.639,0,0,1,3.149-.037,4.108,4.108,0,0,1,1.094.462c-.013-.031-.03-.062-.044-.094a3.476,3.476,0,0,0,1.56,1.289A7.449,7.449,0,0,1,287.326,9a10.83,10.83,0,0,1-.684-4.781A13.108,13.108,0,0,0,288.1,9.9a22.242,22.242,0,0,0,.217-6.138A22.381,22.381,0,0,0,287.332,0Z"
								transform="translate(-279.625 0.001)"
							/>
						</clipPath>
						<linearGradient
							id="ae-reward-17-mobile"
							x1={-5.12}
							y1={6.52}
							x2={-5.101}
							y2={6.52}
							xlinkHref="#e-reward-17-mobile"
						/>
						<clipPath id="af-reward-17-mobile">
							<path
								className="a-reward-17-mobile"
								d="M280.365,7.928a9.712,9.712,0,0,0,3.467,2.077,9.24,9.24,0,0,0-2.513-3.449,5.759,5.759,0,0,1,2.312,2.434,6.336,6.336,0,0,1,.589,1.213c.338-2.134-.631-5.315-5.415-5.389a8.918,8.918,0,0,0,1.56,3.114"
								transform="translate(-278.805 -4.814)"
							/>
						</clipPath>
						<linearGradient
							id="ag-reward-17-mobile"
							x1={-9.294}
							y1={11.428}
							x2={-9.26}
							y2={11.428}
							xlinkHref="#e-reward-17-mobile"
						/>
						<clipPath id="ah-reward-17-mobile">
							<path
								className="a-reward-17-mobile"
								d="M129.115,237.6c-3.123-.485-7.023.493-8.5,5a25.233,25.233,0,0,0,4.921-.38,21.061,21.061,0,0,0,6.485-2.838,17.25,17.25,0,0,0-7.248.649,12,12,0,0,1,5.7-1.155,11.082,11.082,0,0,1,2.2.172A6.831,6.831,0,0,0,130.1,237.8c.057.005.114.011.169.014a7.458,7.458,0,0,1-1.305-1.067,7.123,7.123,0,0,1-2.237-3.62,10.624,10.624,0,0,0,3.406,4.155,13.776,13.776,0,0,0-1.543-4.919,16.365,16.365,0,0,0-2.251-2.744c-3.009,3.952.1,7.127,2.774,7.974"
								transform="translate(-120.619 -229.622)"
							/>
						</clipPath>
						<linearGradient
							id="ai-reward-17-mobile"
							x1={-1.647}
							y1={1.757}
							x2={-1.632}
							y2={1.757}
							xlinkHref="#e-reward-17-mobile"
						/>
						<clipPath id="aj-reward-17-mobile">
							<path
								className="a-reward-17-mobile"
								d="M104.072,227.017c-3.081-.188-6.778,1.17-7.731,5.816a23.9,23.9,0,0,0,4.757-.841,19.608,19.608,0,0,0,5.972-3.462,16.243,16.243,0,0,0-6.956,1.341,11.387,11.387,0,0,1,5.409-1.7,10.339,10.339,0,0,1,2.146-.038,6.491,6.491,0,0,0-2.624-1c.055,0,.11,0,.163,0a7.387,7.387,0,0,1-1.375-.946,7.22,7.22,0,0,1-2.532-3.416,10.617,10.617,0,0,0,3.72,3.842,14.571,14.571,0,0,0-1.987-4.793,16.14,16.14,0,0,0-2.441-2.531c-2.565,4.268.8,7.144,3.479,7.735"
								transform="translate(-96.341 -219.282)"
							/>
						</clipPath>
						<linearGradient
							id="ak-reward-17-mobile"
							x1={-1.281}
							y1={1.913}
							x2={-1.266}
							y2={1.913}
							xlinkHref="#e-reward-17-mobile"
						/>
						<clipPath id="al-reward-17-mobile">
							<path
								className="a-reward-17-mobile"
								d="M74.135,209.278c-3.445,3.782-.89,7.083,1.58,8.048a7.728,7.728,0,0,0-8.94,4.587,24.128,24.128,0,0,0,4.815-.158,22.684,22.684,0,0,0,6.7-2.526,16.583,16.583,0,0,0-7.12.315,12.116,12.116,0,0,1,5.693-.888,10.259,10.259,0,0,1,2.114.271,5.91,5.91,0,0,0-2.332-1.352c.055.008.11.017.164.022a6.329,6.329,0,0,1-1.115-1.119,6.48,6.48,0,0,1-1.662-3.7,9.229,9.229,0,0,0,2.72,4.285,13.088,13.088,0,0,0-.81-4.955,14.283,14.283,0,0,0-1.806-2.832"
								transform="translate(-66.775 -209.278)"
							/>
						</clipPath>
						<linearGradient
							id="am-reward-17-mobile"
							x1={-0.85}
							y1={2.076}
							x2={-0.835}
							y2={2.076}
							xlinkHref="#e-reward-17-mobile"
						/>
						<clipPath id="an-reward-17-mobile">
							<path
								className="a-reward-17-mobile"
								d="M51.5,204.888c-2.7-1.045-6.642-.844-9.672,3.219a22.28,22.28,0,0,0,4.638.531,17.81,17.81,0,0,0,4.692-.755c1.375-.379,2.394-.758,2.385-.758a15.85,15.85,0,0,0-6.944-.72,12.021,12.021,0,0,1,5.7-.046,9.524,9.524,0,0,1,1.986.571,5.251,5.251,0,0,0-1.947-1.662c.054.017.107.034.161.047a5.519,5.519,0,0,1-.816-1.258,6.23,6.23,0,0,1-.757-3.87,8.406,8.406,0,0,0,1.644,4.6,12.692,12.692,0,0,0,.352-4.967,12.981,12.981,0,0,0-1.124-3.047c-4.131,3.184-2.453,6.81-.3,8.117"
								transform="translate(-41.829 -196.771)"
							/>
						</clipPath>
						<linearGradient
							id="ao-reward-17-mobile"
							x1={-0.509}
							y1={2.34}
							x2={-0.493}
							y2={2.34}
							xlinkHref="#e-reward-17-mobile"
						/>
						<clipPath id="ap-reward-17-mobile">
							<path
								className="a-reward-17-mobile"
								d="M32.323,190.086c-2.345-1.435-6.141-1.835-9.918,1.75a19.176,19.176,0,0,0,4.254,1.2,19.107,19.107,0,0,0,5.392-.159c1.017-.148,1.72-.295,1.714-.295a14.43,14.43,0,0,0-6.46-1.733s.091-.017.256-.034a12.081,12.081,0,0,1,5.186.83,8.506,8.506,0,0,1,1.775.854,4.7,4.7,0,0,0-1.5-1.924c.051.026.1.051.152.074a5.073,5.073,0,0,1-.5-1.359,6.45,6.45,0,0,1,.128-3.923,8.254,8.254,0,0,0,.558,4.773,13.133,13.133,0,0,0,1.435-4.828,12.391,12.391,0,0,0-.435-3.17c-4.6,2.492-3.811,6.334-2.044,7.942"
								transform="translate(-22.405 -182.144)"
							/>
						</clipPath>
						<linearGradient
							id="aq-reward-17-mobile"
							x1={-0.23}
							y1={2.652}
							x2={-0.214}
							y2={2.652}
							xlinkHref="#e-reward-17-mobile"
						/>
						<clipPath id="ar-reward-17-mobile">
							<path
								className="a-reward-17-mobile"
								d="M18.688,173.369c-1.908-1.785-5.411-2.777-9.706.222a15.926,15.926,0,0,0,3.706,1.838c2.392.872,6.825.619,6.814.619a12.8,12.8,0,0,0-5.723-2.694,10.025,10.025,0,0,1,4.963,1.615,7.5,7.5,0,0,1,1.5,1.111,4.371,4.371,0,0,0-1-2.131c.045.035.089.07.135.1a5.069,5.069,0,0,1-.177-1.419,7,7,0,0,1,.946-3.858,8.69,8.69,0,0,0-.478,4.8,14.011,14.011,0,0,0,2.385-4.542,12.383,12.383,0,0,0,.225-3.2c-4.862,1.725-4.913,5.674-3.583,7.531"
								transform="translate(-8.982 -165.838)"
							/>
						</clipPath>
						<linearGradient
							id="as-reward-17-mobile"
							x1={-0.039}
							y1={2.908}
							x2={-0.023}
							y2={2.908}
							xlinkHref="#e-reward-17-mobile"
						/>
						<clipPath id="at-reward-17-mobile">
							<path
								className="a-reward-17-mobile"
								d="M10.715,155.249c-1.424-2.082-4.514-3.641-9.094-1.318a13.526,13.526,0,0,0,3.045,2.418c2.032,1.241,6.254,1.674,6.248,1.673a11.485,11.485,0,0,0-4.8-3.572,8.863,8.863,0,0,1,4.311,2.384,6.777,6.777,0,0,1,1.178,1.335,4.317,4.317,0,0,0-.505-2.275c.036.044.072.088.111.127a5.392,5.392,0,0,1,.124-1.435,7.618,7.618,0,0,1,1.66-3.674A9.522,9.522,0,0,0,11.58,155.6a14.876,14.876,0,0,0,3.165-4.118,12.723,12.723,0,0,0,.824-3.126c-4.918.906-5.732,4.847-4.855,6.9"
								transform="translate(-1.621 -148.352)"
							/>
						</clipPath>
						<linearGradient
							id="au-reward-17-mobile"
							x1={0.059}
							y1={3.216}
							x2={0.075}
							y2={3.216}
							xlinkHref="#e-reward-17-mobile"
						/>
						<clipPath id="av-reward-17-mobile">
							<path
								className="a-reward-17-mobile"
								d="M8.166,136.274c-.926-2.315-3.519-4.4-8.166-2.824a12.467,12.467,0,0,0,2.327,2.925c1.623,1.573,5.475,2.678,5.474,2.676a10.825,10.825,0,0,0-3.766-4.342,8.071,8.071,0,0,1,3.544,3.081,6.555,6.555,0,0,1,.837,1.517,4.472,4.472,0,0,0-.025-2.348c.025.051.051.1.079.148a5.948,5.948,0,0,1,.394-1.408,8.045,8.045,0,0,1,2.244-3.379A10.383,10.383,0,0,0,8.9,136.744a15.291,15.291,0,0,0,3.753-3.569,13.06,13.06,0,0,0,1.34-2.96c-4.8.055-6.263,3.876-5.83,6.059"
								transform="translate(0 -130.215)"
							/>
						</clipPath>
						<linearGradient
							id="aw-reward-17-mobile"
							x1={0.071}
							y1={3.614}
							x2={0.088}
							y2={3.614}
							xlinkHref="#e-reward-17-mobile"
						/>
						<clipPath id="ax-reward-17-mobile">
							<path
								className="a-reward-17-mobile"
								d="M10.516,116.7c-.444-2.476-2.5-5.018-7.02-4.245A12.772,12.772,0,0,0,5.1,115.8c1.2,1.857,4.562,3.6,4.566,3.6a10.922,10.922,0,0,0-2.7-4.981A7.842,7.842,0,0,1,9.692,118.1a6.723,6.723,0,0,1,.5,1.654,4.706,4.706,0,0,0,.411-2.346c.014.055.029.109.046.161a6.437,6.437,0,0,1,.621-1.338,8.029,8.029,0,0,1,2.686-2.981,10.872,10.872,0,0,0-2.839,4.03,15.017,15.017,0,0,0,4.145-2.911,13.116,13.116,0,0,0,1.761-2.7,7.175,7.175,0,0,0-1.251-.114,5.2,5.2,0,0,0-5.252,5.152"
								transform="translate(-3.496 -111.55)"
							/>
						</clipPath>
						<linearGradient
							id="ay-reward-17-mobile"
							x1={-0.001}
							y1={4.161}
							x2={0.017}
							y2={4.161}
							xlinkHref="#e-reward-17-mobile"
						/>
						<clipPath id="az-reward-17-mobile">
							<path
								className="a-reward-17-mobile"
								d="M12.195,91.577c.781,2.084,3.59,4.414,3.6,4.41a11.657,11.657,0,0,0-1.655-5.468,8.2,8.2,0,0,1,1.9,4.176,7.233,7.233,0,0,1,.179,1.74A4.859,4.859,0,0,0,17,94.17c0,.055.007.109.013.161a6.662,6.662,0,0,1,.8-1.228A7.526,7.526,0,0,1,20.8,90.61a10.709,10.709,0,0,0-3.3,3.514,14.068,14.068,0,0,0,4.352-2.166,12.679,12.679,0,0,0,2.082-2.367,4.9,4.9,0,0,0-6.893,3.866c0-2.559-1.5-5.485-5.764-5.539a14.405,14.405,0,0,0,.918,3.658"
								transform="translate(-11.277 -87.919)"
							/>
						</clipPath>
						<linearGradient
							id="ba-reward-17-mobile"
							x1={-0.123}
							y1={4.667}
							x2={-0.106}
							y2={4.667}
							xlinkHref="#e-reward-17-mobile"
						/>
						<clipPath id="bb-reward-17-mobile">
							<path
								className="a-reward-17-mobile"
								d="M22.693,65.931a14.727,14.727,0,0,0,2.634,5.089,12.689,12.689,0,0,0-.7-5.788,9.02,9.02,0,0,1,1.129,4.541,7.773,7.773,0,0,1-.108,1.773,4.818,4.818,0,0,0,1.083-2.11c-.005.05-.01.1-.012.15a6.439,6.439,0,0,1,.931-1.08,6.661,6.661,0,0,1,3.161-1.929A9.829,9.829,0,0,0,27.2,69.467a12.671,12.671,0,0,0,4.4-1.354,11.8,11.8,0,0,0,2.309-1.957c-3.7-2.424-6.371.372-7.033,2.566a5.6,5.6,0,0,0-4.492-6.654,16.917,16.917,0,0,0,.306,3.863"
								transform="translate(-22.374 -62.068)"
							/>
						</clipPath>
						<linearGradient
							id="bc-reward-17-mobile"
							x1={-0.282}
							y1={5.107}
							x2={-0.264}
							y2={5.107}
							xlinkHref="#e-reward-17-mobile"
						/>
						<clipPath id="bd-reward-17-mobile">
							<path
								className="a-reward-17-mobile"
								d="M35.182,42.138a16.666,16.666,0,0,0,1.731,5.613,13.515,13.515,0,0,0,.147-5.933,9.988,9.988,0,0,1,.431,4.766,8.128,8.128,0,0,1-.353,1.753,4.54,4.54,0,0,0,1.3-1.887c-.01.044-.021.088-.029.131a5.8,5.8,0,0,1,1.019-.9,5.724,5.724,0,0,1,3.228-1.307,8.534,8.534,0,0,0-3.781,2.18,11.279,11.279,0,0,0,4.321-.5,10.612,10.612,0,0,0,2.453-1.487c-3.208-3.133-6.05-.887-6.97,1.177A6.2,6.2,0,0,0,35.4,38.188a19.679,19.679,0,0,0-.216,3.95"
								transform="translate(-35.167 -38.188)"
							/>
						</clipPath>
						<linearGradient
							id="be-reward-17-mobile"
							x1={-0.496}
							y1={5.61}
							x2={-0.477}
							y2={5.61}
							xlinkHref="#e-reward-17-mobile"
						/>
						<clipPath id="bf-reward-17-mobile">
							<path
								className="a-reward-17-mobile"
								d="M48.836,20.923a19.389,19.389,0,0,0,.918,5.966,13.732,13.732,0,0,0,.863-5.9,10.718,10.718,0,0,1-.173,4.848,8.018,8.018,0,0,1-.556,1.679,4.051,4.051,0,0,0,1.458-1.609c-.013.037-.027.074-.039.111a6.112,6.112,0,0,1,4.283-1.336,7.2,7.2,0,0,0-3.842,1.4s.4.119.994.238a8.122,8.122,0,0,0,3.156.129,9.449,9.449,0,0,0,2.53-.973c-2.708-3.74-5.632-2.122-6.757-.256A6.938,6.938,0,0,0,49.478,17a21.913,21.913,0,0,0-.642,3.918"
								transform="translate(-48.81 -17.005)"
							/>
						</clipPath>
						<linearGradient
							id="bg-reward-17-mobile"
							x1={-0.734}
							y1={6.089}
							x2={-0.715}
							y2={6.089}
							xlinkHref="#e-reward-17-mobile"
						/>
						<clipPath id="bh-reward-17-mobile">
							<path
								className="a-reward-17-mobile"
								d="M65.487,4.22h0M64.8,0a22.4,22.4,0,0,0-.982,3.766A22.257,22.257,0,0,0,64.032,9.9a13.1,13.1,0,0,0,1.455-5.681A10.822,10.822,0,0,1,64.8,9a7.44,7.44,0,0,1-.719,1.555,3.479,3.479,0,0,0,1.561-1.289c-.015.031-.031.062-.045.094A4.108,4.108,0,0,1,66.695,8.9a4.639,4.639,0,0,1,3.149.037,6.222,6.222,0,0,0-3.833.582,13.211,13.211,0,0,0,1.325.613,7.114,7.114,0,0,0,2.606.611,8.64,8.64,0,0,0,2.562-.429c-2.225-4.23-5.179-3.288-6.459-1.68A7.546,7.546,0,0,0,64.8,0Z"
								transform="translate(-63.666 0.001)"
							/>
						</clipPath>
						<linearGradient
							id="bi-reward-17-mobile"
							x1={-1.01}
							y1={6.52}
							x2={-0.991}
							y2={6.52}
							xlinkHref="#e-reward-17-mobile"
						/>
						<clipPath id="bj-reward-17-mobile">
							<path
								className="a-reward-17-mobile"
								d="M77.169,10.2a6.328,6.328,0,0,1,.589-1.213A5.76,5.76,0,0,1,80.07,6.556a9.247,9.247,0,0,0-2.513,3.449,9.712,9.712,0,0,0,3.467-2.077,8.929,8.929,0,0,0,1.56-3.114C77.8,4.889,76.831,8.07,77.169,10.2"
								transform="translate(-77.108 -4.814)"
							/>
						</clipPath>
						<linearGradient
							id="bk-reward-17-mobile"
							x1={-2.438}
							y1={11.428}
							x2={-2.404}
							y2={11.428}
							xlinkHref="#e-reward-17-mobile"
						/>
						<clipPath id="bl-reward-17-mobile">
							<path
								className="a-reward-17-mobile"
								d="M32.635,272.265l-.878,7.757c-.5,3.772,18.73,6.37,18.944,2.338.271-5.119,1.382-14.238,1.382-14.238Z"
								transform="translate(-31.748 -268.121)"
							/>
						</clipPath>
						<linearGradient
							id="bm-reward-17-mobile"
							x1={-0.383}
							y1={1.019}
							x2={-0.37}
							y2={1.019}
							gradientUnits="objectBoundingBox">
							<stop offset={0} stopColor="#543913" />
							<stop offset={0.385} stopColor="#735626" />
							<stop offset={1} stopColor="#ad8d4a" />
						</linearGradient>
						<clipPath id="bn-reward-17-mobile">
							<path
								className="a-reward-17-mobile"
								d="M48.846,315.166c0,3.028,9.339,3.076,9.457,1.806l.584-6.322-9.425-.268Z"
								transform="translate(-48.846 -310.382)"
							/>
						</clipPath>
						<linearGradient
							id="bo-reward-17-mobile"
							x1={-1.296}
							y1={0.938}
							x2={-1.269}
							y2={0.938}
							gradientUnits="objectBoundingBox">
							<stop offset={0} stopColor="#ad8d4a" />
							<stop offset={0.615} stopColor="#735626" />
							<stop offset={1} stopColor="#543913" />
						</linearGradient>
						<clipPath id="bp-reward-17-mobile">
							<path
								className="a-reward-17-mobile"
								d="M50.227,282.6,48.846,293.33c1.222-4.516,14.4-3.241,14.4-1.806l1-10.909Z"
								transform="translate(-48.846 -280.615)"
							/>
						</clipPath>
						<linearGradient
							id="bq-reward-17-mobile"
							x1={-0.845}
							y1={1.204}
							x2={-0.828}
							y2={1.204}
							gradientUnits="objectBoundingBox">
							<stop offset={0} stopColor="#805a23" />
							<stop offset={0.078} stopColor="#835e27" />
							<stop offset={0.165} stopColor="#8d6a35" />
							<stop offset={0.257} stopColor="#9d7f4b" />
							<stop offset={0.352} stopColor="#b59c6a" />
							<stop offset={0.448} stopColor="#d2c192" />
							<stop offset={0.536} stopColor="#f3eabe" />
							<stop offset={0.569} stopColor="#ebe0b4" />
							<stop offset={0.609} stopColor="#e7dbaf" />
							<stop offset={1} stopColor="#a98d5c" />
						</linearGradient>
						<clipPath id="br-reward-17-mobile">
							<path
								className="a-reward-17-mobile"
								d="M269.135,282.359c.214,4.032,19.445,1.435,18.944-2.338l-.878-7.757-19.447-4.144s1.11,9.12,1.382,14.238"
								transform="translate(-267.754 -268.121)"
							/>
						</clipPath>
						<linearGradient
							id="bs-reward-17-mobile"
							x1={-3.425}
							y1={1.019}
							x2={-3.413}
							y2={1.019}
							xlinkHref="#bm"
						/>
						<clipPath id="bt-reward-17-mobile">
							<path
								className="a-reward-17-mobile"
								d="M289.29,310.65l.584,6.322c.118,1.27,9.458,1.222,9.457-1.806l-.616-4.784Z"
								transform="translate(-289.29 -310.382)"
							/>
						</clipPath>
						<linearGradient
							id="bu-reward-17-mobile"
							x1={-7.676}
							y1={0.938}
							x2={-7.649}
							y2={0.938}
							xlinkHref="#bo"
						/>
						<clipPath id="bv-reward-17-mobile">
							<path
								className="a-reward-17-mobile"
								d="M269.624,287.624c0-1.435,13.176-2.71,14.4,1.806L282.64,278.7l-14.22-3.4Z"
								transform="translate(-268.42 -275.298)"
							/>
						</clipPath>
						<linearGradient
							id="bw-reward-17-mobile"
							x1={-4.584}
							y1={1.183}
							x2={-4.567}
							y2={1.183}
							xlinkHref="#bq"
						/>
						<clipPath id="bx-reward-17-mobile">
							<path
								className="a-reward-17-mobile"
								d="M34.387,232.968c-1.511,3.68-2.6,17.214-2.6,17.214,2.033-7.65,41.612-7.438,41.612-7.438s39.579-.213,41.612,7.438c0,0-1.091-13.533-2.6-17.214-1.8-4.392-25.912-5.525-39.01-5.525s-37.206,1.133-39.009,5.525"
								transform="translate(-31.784 -227.443)"
							/>
						</clipPath>
						<linearGradient
							id="by-reward-17-mobile"
							x1={-0.102}
							y1={1.296}
							x2={-0.099}
							y2={1.296}
							xlinkHref="#e-reward-17-mobile"
						/>
						<clipPath id="ca-reward-17-mobile">
							<rect
								className="a-reward-17-mobile"
								width={83.225}
								height={9.419}
							/>
						</clipPath>
						<clipPath id="cb-reward-17-mobile">
							<path
								className="a-reward-17-mobile"
								d="M73.4,277.434s-37.607-.2-41.383,6.877c-.148,1.536-.23,2.542-.23,2.542,2.033-7.65,41.612-7.438,41.612-7.438s39.579-.213,41.612,7.438c0,0-.081-1.006-.23-2.542C111,277.234,73.4,277.434,73.4,277.434"
								transform="translate(-31.785 -277.434)"
							/>
						</clipPath>
						<linearGradient
							id="cc-reward-17-mobile"
							x1={-0.102}
							y1={1.7}
							x2={-0.099}
							y2={1.7}
							gradientUnits="objectBoundingBox">
							<stop offset={0} stopColor="#805a23" />
							<stop offset={0.049} stopColor="#8a662f" />
							<stop offset={0.138} stopColor="#a68851" />
							<stop offset={0.25} stopColor="#d0bb84" />
							<stop offset={0.324} stopColor="#bea366" />
							<stop offset={0.396} stopColor="#b19351" />
							<stop offset={0.443} stopColor="#ad8d4a" />
							<stop offset={0.599} stopColor="#815d25" />
							<stop offset={0.682} stopColor="#825e26" />
							<stop offset={0.712} stopColor="#88652d" />
							<stop offset={0.734} stopColor="#917139" />
							<stop offset={0.751} stopColor="#9f814a" />
							<stop offset={0.766} stopColor="#b09660" />
							<stop offset={0.776} stopColor="#c1aa74" />
							<stop offset={0.83} stopColor="#b59b65" />
							<stop offset={0.932} stopColor="#97763f" />
							<stop offset={1} stopColor="#805a23" />
						</linearGradient>
						<clipPath id="cd-reward-17-mobile">
							<path
								className="a-reward-17-mobile"
								d="M344.075,312.157c0,.015.011.029.015.044s-.006-.075-.017-.212c0,.058,0,.113,0,.169"
								transform="translate(-344.073 -311.988)"
							/>
						</clipPath>
						<linearGradient
							id="ce-reward-17-mobile"
							x1={-5293.231}
							y1={32.724}
							x2={-5277.848}
							y2={32.724}
							xlinkHref="#cc"
						/>
						<clipPath id="cg-reward-17-mobile">
							<rect
								className="a-reward-17-mobile"
								width={78.724}
								height={6.58}
							/>
						</clipPath>
						<clipPath id="ch-reward-17-mobile">
							<path
								className="a-reward-17-mobile"
								d="M79.592,229.424c12.124,0,34.648.972,39.362,4.6a9.977,9.977,0,0,0-.352-1.054c-1.8-4.392-25.912-5.525-39.01-5.525s-37.206,1.133-39.01,5.525a9.913,9.913,0,0,0-.353,1.054c4.714-3.627,27.238-4.6,39.362-4.6"
								transform="translate(-40.23 -227.443)"
							/>
						</clipPath>
						<linearGradient
							id="ci-reward-17-mobile"
							x1={-0.136}
							y1={4.48}
							x2={-0.133}
							y2={4.48}
							xlinkHref="#cc"
						/>
						<clipPath id="cj-reward-17-mobile">
							<path
								className="a-reward-17-mobile"
								d="M31.785,312.2c0-.015.011-.029.015-.044,0-.055,0-.111,0-.169-.011.137-.018.212-.018.212"
								transform="translate(-31.785 -311.988)"
							/>
						</clipPath>
						<linearGradient
							id="ck-reward-17-mobile"
							x1={-481.591}
							y1={32.724}
							x2={-466.439}
							y2={32.724}
							xlinkHref="#cc"
						/>
					</defs>
					<g>
						<g
							className="cm-reward-17-mobile"
							transform="matrix(1, 0, 0, 1, -9, -6)">
							<rect
								className="b-reward-17-mobile"
								width={120}
								height={141}
								rx={8}
								transform="translate(9 6)"
							/>
						</g>
						<g transform="translate(10.046 25.259)">
							<g
								className="c-reward-17-mobile"
								transform="translate(0)">
								<g transform="translate(56.104 61.181)">
									<g className="d-reward-17-mobile">
										<rect
											className="e-reward-17-mobile"
											width={17.78}
											height={17.78}
											transform="translate(-6.539 6.539) rotate(-45)"
										/>
									</g>
								</g>
								<g transform="translate(63.309 58.426)">
									<g className="f-reward-17-mobile">
										<rect
											className="g-reward-17-mobile"
											width={17.594}
											height={17.594}
											transform="translate(-6.776 6.776) rotate(-45)"
										/>
									</g>
								</g>
								<g transform="translate(70.315 55.761)">
									<g className="h-reward-17-mobile">
										<rect
											className="i-reward-17-mobile"
											width={17.7}
											height={17.7}
											transform="translate(-6.414 6.414) rotate(-45)"
										/>
									</g>
								</g>
								<g transform="translate(76.707 52.428)">
									<g className="j-reward-17-mobile">
										<rect
											className="k-reward-17-mobile"
											width={17.222}
											height={17.222}
											transform="translate(-5.95 5.95) rotate(-45)"
										/>
									</g>
								</g>
								<g transform="translate(81.938 48.531)">
									<g className="l-reward-17-mobile">
										<rect
											className="m-reward-17-mobile"
											width={16.708}
											height={16.708}
											transform="translate(-5.64 5.59) rotate(-45)"
										/>
									</g>
								</g>
								<g transform="translate(84.601 44.186)">
									<g className="n-reward-17-mobile">
										<rect
											className="o-reward-17-mobile"
											width={16.889}
											height={16.889}
											transform="translate(-5.34 5.232) rotate(-45)"
										/>
									</g>
								</g>
								<g transform="translate(85.926 39.527)">
									<g className="p-reward-17-mobile">
										<rect
											className="q-reward-17-mobile"
											width={16.805}
											height={16.805}
											transform="translate(-4.908 4.908) rotate(-45)"
										/>
									</g>
								</g>
								<g transform="translate(86.311 34.695)">
									<g className="r-reward-17-mobile">
										<rect
											className="s-reward-17-mobile"
											width={16.325}
											height={16.325}
											transform="translate(-4.546 4.546) rotate(-45)"
										/>
									</g>
								</g>
								<g transform="translate(85.851 29.722)">
									<g className="t-reward-17-mobile">
										<rect
											className="u-reward-17-mobile"
											width={15.365}
											height={15.365}
											transform="translate(-4.103 4.103) rotate(-45)"
										/>
									</g>
								</g>
								<g transform="translate(84.645 23.425)">
									<g className="v-reward-17-mobile">
										<rect
											className="w-reward-17-mobile"
											width={14.972}
											height={14.972}
											transform="translate(-4.258 4.258) rotate(-45)"
										/>
									</g>
								</g>
								<g transform="translate(82.806 16.538)">
									<g className="x-reward-17-mobile">
										<rect
											className="y-reward-17-mobile"
											width={14.933}
											height={14.933}
											transform="translate(-4.739 4.739) rotate(-45)"
										/>
									</g>
								</g>
								<g transform="translate(80.451 10.175)">
									<g className="z-reward-17-mobile">
										<rect
											className="aa-reward-17-mobile"
											width={14.641}
											height={14.641}
											transform="translate(-5.075 5.075) rotate(-45)"
										/>
									</g>
								</g>
								<g transform="translate(77.683 4.531)">
									<g className="ab-reward-17-mobile">
										<rect
											className="ac-reward-17-mobile"
											width={14.365}
											height={14.365}
											transform="translate(-5.257 5.257) rotate(-45)"
										/>
									</g>
								</g>
								<g transform="translate(74.504 0)">
									<g className="ad-reward-17-mobile">
										<rect
											className="ae-reward-17-mobile"
											width={14.068}
											height={14.068}
											transform="translate(-5.387 5.386) rotate(-45)"
										/>
									</g>
								</g>
								<g transform="translate(74.286 1.283)">
									<g className="af-reward-17-mobile">
										<rect
											className="ag-reward-17-mobile"
											width={7.878}
											height={7.878}
											transform="translate(-2.695 2.695) rotate(-45)"
										/>
									</g>
								</g>
								<g transform="translate(32.138 61.181)">
									<g className="ah-reward-17-mobile">
										<rect
											className="ai-reward-17-mobile"
											width={17.78}
											height={17.78}
											transform="translate(-6.542 6.539) rotate(-45)"
										/>
									</g>
								</g>
								<g transform="translate(25.669 58.426)">
									<g className="aj-reward-17-mobile">
										<rect
											className="ak-reward-17-mobile"
											width={17.594}
											height={17.594}
											transform="translate(-6.778 6.776) rotate(-45)"
										/>
									</g>
								</g>
								<g transform="translate(17.792 55.761)">
									<g className="al-reward-17-mobile">
										<rect
											className="am-reward-17-mobile"
											width={17.7}
											height={17.7}
											transform="translate(-6.417 6.414) rotate(-45)"
										/>
									</g>
								</g>
								<g transform="translate(11.145 52.428)">
									<g className="an-reward-17-mobile">
										<rect
											className="ao-reward-17-mobile"
											width={17.222}
											height={17.222}
											transform="translate(-5.951 5.95) rotate(-45)"
										/>
									</g>
								</g>
								<g transform="translate(5.97 48.531)">
									<g className="ap-reward-17-mobile">
										<rect
											className="aq-reward-17-mobile"
											width={16.708}
											height={16.708}
											transform="translate(-5.59 5.59) rotate(-45)"
										/>
									</g>
								</g>
								<g transform="translate(2.393 44.186)">
									<g className="ar-reward-17-mobile">
										<rect
											className="as-reward-17-mobile"
											width={16.889}
											height={16.889}
											transform="translate(-5.232 5.232) rotate(-45)"
										/>
									</g>
								</g>
								<g transform="translate(0.432 39.527)">
									<g className="at-reward-17-mobile">
										<rect
											className="au-reward-17-mobile"
											width={16.805}
											height={16.805}
											transform="translate(-4.908 4.908) rotate(-45)"
										/>
									</g>
								</g>
								<g transform="translate(0 34.695)">
									<g className="av-reward-17-mobile">
										<rect
											className="aw-reward-17-mobile"
											width={16.325}
											height={16.325}
											transform="translate(-4.546 4.546) rotate(-45)"
										/>
									</g>
								</g>
								<g transform="translate(0.931 29.722)">
									<g className="ax-reward-17-mobile">
										<rect
											className="ay-reward-17-mobile"
											width={15.365}
											height={15.365}
											transform="translate(-4.103 4.102) rotate(-45)"
										/>
									</g>
								</g>
								<g transform="translate(3.005 23.425)">
									<g className="az-reward-17-mobile">
										<rect
											className="ba-reward-17-mobile"
											width={14.972}
											height={14.972}
											transform="translate(-4.258 4.258) rotate(-45)"
										/>
									</g>
								</g>
								<g transform="translate(5.961 16.538)">
									<g className="bb-reward-17-mobile">
										<rect
											className="bc-reward-17-mobile"
											width={14.932}
											height={14.932}
											transform="translate(-4.841 4.739) rotate(-45)"
										/>
									</g>
								</g>
								<g transform="translate(9.37 10.175)">
									<g className="bd-reward-17-mobile">
										<rect
											className="be-reward-17-mobile"
											width={14.641}
											height={14.641}
											transform="translate(-5.145 5.075) rotate(-45)"
										/>
									</g>
								</g>
								<g transform="translate(13.005 4.531)">
									<g className="bf-reward-17-mobile">
										<rect
											className="bg-reward-17-mobile"
											width={14.365}
											height={14.365}
											transform="translate(-5.44 5.257) rotate(-45)"
										/>
									</g>
								</g>
								<g transform="translate(16.963 0)">
									<g className="bh-reward-17-mobile">
										<rect
											className="bi-reward-17-mobile"
											width={14.068}
											height={14.068}
											transform="translate(-5.669 5.386) rotate(-45)"
										/>
									</g>
								</g>
								<g transform="translate(20.545 1.283)">
									<g className="bj-reward-17-mobile">
										<rect
											className="bk-reward-17-mobile"
											width={7.878}
											height={7.878}
											transform="translate(-2.971 2.695) rotate(-45)"
										/>
									</g>
								</g>
								<g transform="translate(8.459 71.439)">
									<g className="bl-reward-17-mobile">
										<rect
											className="bm-reward-17-mobile"
											width={20.827}
											height={18.27}
											transform="translate(-0.492)"
										/>
									</g>
								</g>
								<g transform="translate(13.015 82.699)">
									<g className="bn-reward-17-mobile">
										<rect
											className="bo-reward-17-mobile"
											width={10.042}
											height={7.86}
											transform="translate(-0.001)"
										/>
									</g>
								</g>
								<g transform="translate(13.015 74.768)">
									<g className="bp-reward-17-mobile">
										<rect
											className="bq-reward-17-mobile"
											width={15.394}
											height={12.715}
											transform="translate(0)"
										/>
									</g>
								</g>
								<g transform="translate(71.341 71.439)">
									<g className="br-reward-17-mobile">
										<rect
											className="bs-reward-17-mobile"
											width={20.827}
											height={18.27}
											transform="translate(0 0)"
										/>
									</g>
								</g>
								<g transform="translate(77.079 82.699)">
									<g className="bt-reward-17-mobile">
										<rect
											className="bu-reward-17-mobile"
											width={10.042}
											height={7.86}
											transform="translate(0)"
										/>
									</g>
								</g>
								<g transform="translate(71.519 73.351)">
									<g className="bv-reward-17-mobile">
										<rect
											className="bw-reward-17-mobile"
											width={15.602}
											height={14.132}
											transform="translate(0 0)"
										/>
									</g>
								</g>
								<g transform="translate(8.469 60.601)">
									<g className="bx-reward-17-mobile">
										<rect
											className="by-reward-17-mobile"
											width={83.225}
											height={22.739}
											transform="translate(0)"
										/>
									</g>
								</g>
								<g className="c-reward-17-mobile">
									<g
										className="bz-reward-17-mobile"
										transform="translate(8.469 73.92)">
										<g className="ca-reward-17-mobile">
											<g transform="translate(0 0)">
												<g className="cb-reward-17-mobile">
													<rect
														className="cc-reward-17-mobile"
														width={83.225}
														height={9.619}
														transform="translate(0 -0.2)"
													/>
												</g>
											</g>
										</g>
									</g>
								</g>
								<g transform="translate(91.676 83.127)">
									<g className="cd-reward-17-mobile">
										<rect
											className="ce-reward-17-mobile"
											width={0.017}
											height={0.212}
											transform="translate(0 0)"
										/>
									</g>
								</g>
								<g className="c-reward-17-mobile">
									<g
										className="bz-reward-17-mobile"
										transform="translate(10.719 60.601)">
										<g className="cf-reward-17-mobile">
											<g className="cg-reward-17-mobile">
												<rect
													className="ch-reward-17-mobile"
													width={78.724}
													height={6.58}
												/>
											</g>
										</g>
									</g>
								</g>
								<g transform="translate(8.469 83.127)">
									<g className="ci-reward-17-mobile">
										<rect
											className="cj-reward-17-mobile"
											width={0.018}
											height={0.212}
											transform="translate(0 0)"
										/>
									</g>
								</g>
							</g>
						</g>
						<text
							className="ck-reward-17-mobile"
							transform="translate(60 53)">
							<tspan x={-21.708} y={11}>
								{'Stryker'}
							</tspan>
						</text>
						<text
							className="cl-reward-17-mobile"
							transform="translate(60 89)">
							<tspan x={-11.03} y={9}>
								{'2019'}
							</tspan>
						</text>
					</g>
				</React.Fragment>
			) : (
				<React.Fragment>
					<defs>
						<style>
							{
								'.a-reward-17-mobile{fill:none;}.b-reward-17-mobile{fill:#001f5f;}.c-reward-17-mobile,.d-reward-17-mobile{fill:#fff;font-size:10px;}.c-reward-17-mobile{font-family:Silka-SemiBold, Silka;font-weight:600;}.d-reward-17-mobile{font-family:Silka-Regular, Silka;}.e-reward-17-mobile{clip-path:url(#c-reward-17-mobile);}.f-reward-17-mobile{fill:#f2f2f2;}.g-reward-17-mobile{fill:#e6e6e6;}.h-reward-17-mobile{fill:#ccc;}.i-reward-17-mobile{opacity:0.4;mix-blend-mode:multiply;isolation:isolate;}.j-reward-17-mobile{clip-path:url(#e-reward-17-mobile);}.k-reward-17-mobile{clip-path:url(#f-reward-17-mobile);}.l-reward-17-mobile{fill:#e7002a;}.m-reward-17-mobile{filter:url(#a-reward-17-mobile);}'
							}
						</style>
						<filter
							id="a-reward-17-mobile"
							x={0}
							y={0}
							width={138}
							height={159}
							filterUnits="userSpaceOnUse">
							<feOffset dy={3} />
							<feGaussianBlur stdDeviation={3} result="b" />
							<feFlood floodOpacity={0.4} />
							<feComposite operator="in" in2="b" />
							<feComposite in="SourceGraphic" />
						</filter>
						<clipPath id="c-reward-17-mobile">
							<rect
								className="a-reward-17-mobile"
								width={38}
								height={33.933}
							/>
						</clipPath>
						<clipPath id="e-reward-17-mobile">
							<rect
								className="a-reward-17-mobile"
								width={31.529}
								height={3.548}
							/>
						</clipPath>
						<clipPath id="f-reward-17-mobile">
							<rect
								className="a-reward-17-mobile"
								width={29.824}
								height={2.479}
							/>
						</clipPath>
					</defs>
					<g>
						<g
							className="m-reward-17-mobile"
							transform="matrix(1, 0, 0, 1, -9, -6)">
							<rect
								className="b-reward-17-mobile"
								width={120}
								height={141}
								rx={8}
								transform="translate(9 6)"
							/>
						</g>
						<text
							className="c-reward-17-mobile"
							transform="translate(60 55)">
							<tspan x={-18.09} y={9}>
								{'Stryker'}
							</tspan>
						</text>
						<text
							className="c-reward-17-mobile"
							transform="translate(60 124)">
							<tspan x={-22.055} y={9}>
								{'Año 2019'}
							</tspan>
						</text>
						<text
							className="d-reward-17-mobile"
							transform="translate(9.5 74.602)">
							<tspan x={16.245} y={9}>
								{'North of Latin '}
							</tspan>
							<tspan x={5.785} y={21}>
								{'America Top sales '}
							</tspan>
							<tspan x={34.725} y={33}>
								{'Latam'}
							</tspan>
						</text>
						<g transform="translate(34.93 13.465)">
							<g
								className="e-reward-17-mobile"
								transform="translate(3.57 -1)">
								<g className="e-reward-17-mobile">
									<path
										className="f-reward-17-mobile"
										d="M211.919,232.626a1.844,1.844,0,0,0,1.051-3,6.169,6.169,0,0,0-.853,1.034,5.168,5.168,0,0,0-.584,1.853,4.011,4.011,0,0,0,1.291-1.566,2.674,2.674,0,0,1-.847,1.364,2.827,2.827,0,0,1-.494.4l.064-.005a2.6,2.6,0,0,0-.978.468,4.227,4.227,0,0,1,.834-.065,4.566,4.566,0,0,1,2.161.435,6.573,6.573,0,0,0-2.746-.245,8,8,0,0,0,2.457,1.069,9.6,9.6,0,0,0,1.864.143,2.742,2.742,0,0,0-3.219-1.884"
										transform="translate(-189.312 -206.574)"
									/>
									<path
										className="f-reward-17-mobile"
										d="M238.97,222.2a1.87,1.87,0,0,0,1.318-2.914,6.1,6.1,0,0,0-.925.953,5.47,5.47,0,0,0-.753,1.806,4.013,4.013,0,0,0,1.409-1.447,2.711,2.711,0,0,1-.959,1.287,2.79,2.79,0,0,1-.521.356h.062a2.468,2.468,0,0,0-.994.378,3.951,3.951,0,0,1,.813.014,4.331,4.331,0,0,1,2.049.641,6.189,6.189,0,0,0-2.635-.505,7.435,7.435,0,0,0,2.262,1.3,9.1,9.1,0,0,0,1.8.317,2.647,2.647,0,0,0-2.929-2.191"
										transform="translate(-213.623 -197.272)"
									/>
									<path
										className="f-reward-17-mobile"
										d="M265.135,212.309a1.761,1.761,0,0,0,.6-3.032,5.376,5.376,0,0,0-.684,1.067,4.9,4.9,0,0,0-.307,1.867,3.475,3.475,0,0,0,1.031-1.614,2.424,2.424,0,0,1-.63,1.394,2.385,2.385,0,0,1-.423.422l.062-.008a2.244,2.244,0,0,0-.883.509,3.9,3.9,0,0,1,.8-.1,4.611,4.611,0,0,1,2.157.334,6.315,6.315,0,0,0-2.7-.119,8.623,8.623,0,0,0,2.538.951,9.178,9.178,0,0,0,1.824.059,2.933,2.933,0,0,0-3.387-1.728"
										transform="translate(-237.262 -188.271)"
									/>
									<path
										className="f-reward-17-mobile"
										d="M288.946,199.829c.817-.493,1.453-1.858-.112-3.058a4.873,4.873,0,0,0-.426,1.148,4.756,4.756,0,0,0,.133,1.871,3.156,3.156,0,0,0,.623-1.732,2.331,2.331,0,0,1-.287,1.458,2.072,2.072,0,0,1-.309.474l.061-.018a1.987,1.987,0,0,0-.738.626,3.627,3.627,0,0,1,.753-.215,4.58,4.58,0,0,1,2.158.017,6.039,6.039,0,0,0-2.631.271,9.313,9.313,0,0,0,2.681.57,8.481,8.481,0,0,0,1.757-.2,3.069,3.069,0,0,0-3.664-1.213"
										transform="translate(-258.832 -177.02)"
									/>
									<path
										className="f-reward-17-mobile"
										d="M308.465,185.135c.67-.606.97-2.053-.774-2.992a4.643,4.643,0,0,0-.165,1.194,4.93,4.93,0,0,0,.544,1.819,3.093,3.093,0,0,0,.211-1.8,2.415,2.415,0,0,1,.048,1.478,1.9,1.9,0,0,1-.188.512c.019-.008.039-.018.058-.028a1.77,1.77,0,0,0-.566.725,3.229,3.229,0,0,1,.672-.322,4.269,4.269,0,0,1,2.062-.3,5.486,5.486,0,0,0-2.448.653,9.264,9.264,0,0,0,2.692.171,7.291,7.291,0,0,0,1.612-.453,3.012,3.012,0,0,0-3.757-.659"
										transform="translate(-276.484 -163.861)"
									/>
									<path
										className="f-reward-17-mobile"
										d="M318.886,168.675c.5-.7.485-2.187-1.357-2.837a4.639,4.639,0,0,0,.085,1.2,5.272,5.272,0,0,0,.9,1.711,3.256,3.256,0,0,0-.181-1.809,2.622,2.622,0,0,1,.358,1.453,1.9,1.9,0,0,1-.067.534c.018-.012.034-.025.051-.038a1.644,1.644,0,0,0-.381.8,2.843,2.843,0,0,1,.567-.419,3.816,3.816,0,0,1,1.88-.608,4.861,4.861,0,0,0-2.168,1.015,8.515,8.515,0,0,0,2.581-.233,6.053,6.053,0,0,0,1.4-.693c-1.627-1.13-2.954-.756-3.677-.084"
										transform="translate(-285.469 -149.192)"
									/>
									<path
										className="f-reward-17-mobile"
										d="M324.331,150.95c.332-.772.024-2.257-1.839-2.6a4.77,4.77,0,0,0,.312,1.177,5.606,5.606,0,0,0,1.2,1.551,3.571,3.571,0,0,0-.535-1.764,2.863,2.863,0,0,1,.629,1.384,2.031,2.031,0,0,1,.047.541c.014-.015.028-.031.042-.048a1.619,1.619,0,0,0-.191.857,2.564,2.564,0,0,1,.446-.5,3.366,3.366,0,0,1,1.633-.9,4.349,4.349,0,0,0-1.818,1.346,7.389,7.389,0,0,0,2.367-.63,5.122,5.122,0,0,0,1.154-.911c-1.735-.875-2.906-.288-3.445.5"
										transform="translate(-289.94 -133.461)"
									/>
									<path
										className="f-reward-17-mobile"
										d="M326.285,133.543a6.287,6.287,0,0,0,2.074-1.008,4.7,4.7,0,0,0,.882-1.1c-1.76-.593-2.743.192-3.094,1.064a2.031,2.031,0,0,0-2.209-2.283,4.909,4.909,0,0,0,.508,1.115,5.776,5.776,0,0,0,1.422,1.344,3.9,3.9,0,0,0-.836-1.667,3.032,3.032,0,0,1,.85,1.273,2.231,2.231,0,0,1,.149.53c.011-.018.02-.037.03-.056a1.677,1.677,0,0,0-.01.885,2.47,2.47,0,0,1,.317-.572,3.055,3.055,0,0,1,1.343-1.161,4.081,4.081,0,0,0-1.427,1.636"
										transform="translate(-291.24 -117.144)"
									/>
									<path
										className="f-reward-17-mobile"
										d="M324.675,113.49a1.985,1.985,0,0,0-2.464-1.9,4.945,4.945,0,0,0,.667,1.019,5.693,5.693,0,0,0,1.57,1.1,4.1,4.1,0,0,0-1.076-1.518,3.034,3.034,0,0,1,1.018,1.123,2.416,2.416,0,0,1,.235.5c.007-.019.012-.04.017-.061a1.765,1.765,0,0,0,.156.884,2.536,2.536,0,0,1,.189-.623,2.958,2.958,0,0,1,1.032-1.388A4.109,4.109,0,0,0,325,114.505a5.536,5.536,0,0,0,1.73-1.355,4.8,4.8,0,0,0,.607-1.259,2.053,2.053,0,0,0-2.66,1.6"
										transform="translate(-289.687 -100.353)"
									/>
									<path
										className="f-reward-17-mobile"
										d="M320.3,90.006a1.858,1.858,0,0,0-2.611-1.456,4.783,4.783,0,0,0,.789.892,5.341,5.341,0,0,0,1.649.816,4.039,4.039,0,0,0-1.252-1.324,2.847,2.847,0,0,1,1.132.939,2.5,2.5,0,0,1,.3.463c0-.02,0-.04.005-.061a1.827,1.827,0,0,0,.3.854,2.719,2.719,0,0,1,.068-.656A3.083,3.083,0,0,1,321.4,88.9a4.373,4.373,0,0,0-.627,2.06,5.278,5.278,0,0,0,1.363-1.661,5.391,5.391,0,0,0,.348-1.378,2.011,2.011,0,0,0-2.184,2.087"
										transform="translate(-285.619 -79.094)"
									/>
									<path
										className="f-reward-17-mobile"
										d="M313.45,64.575a1.689,1.689,0,0,0-2.664-.967,4.462,4.462,0,0,0,.875.737,4.822,4.822,0,0,0,1.667.51,3.719,3.719,0,0,0-1.368-1.089,2.527,2.527,0,0,1,1.2.727,2.421,2.421,0,0,1,.353.407c0-.018,0-.038,0-.057a1.812,1.812,0,0,0,.41.795,2.913,2.913,0,0,1-.041-.668,3.385,3.385,0,0,1,.428-1.71,4.753,4.753,0,0,0-.264,2.181,5.539,5.539,0,0,0,1-1.917,6.331,6.331,0,0,0,.116-1.455,2.111,2.111,0,0,0-1.7,2.507"
										transform="translate(-279.415 -55.838)"
									/>
									<path
										className="f-reward-17-mobile"
										d="M304.583,41.034a1.529,1.529,0,0,0-2.641-.443,4.024,4.024,0,0,0,.929.56,4.3,4.3,0,0,0,1.637.189,3.235,3.235,0,0,0-1.432-.821,2.734,2.734,0,0,1,1.609.831c0-.016-.007-.033-.011-.049a1.709,1.709,0,0,0,.494.711,3.044,3.044,0,0,1-.134-.661,3.74,3.74,0,0,1,.163-1.8,5.064,5.064,0,0,0,.056,2.235,6.254,6.254,0,0,0,.655-2.114,7.376,7.376,0,0,0-.082-1.488,2.33,2.33,0,0,0-1.244,2.847"
										transform="translate(-271.464 -34.355)"
									/>
									<path
										className="f-reward-17-mobile"
										d="M291.554,20.2a3.591,3.591,0,0,0,.959.367,3.933,3.933,0,0,0,1.572-.138,2.735,2.735,0,0,0-1.456-.528,1.9,1.9,0,0,1,1.217.243,1.872,1.872,0,0,1,.405.26c0-.014-.01-.028-.015-.042a1.53,1.53,0,0,0,.552.606,3.014,3.014,0,0,1-.211-.633,4,4,0,0,1-.066-1.827,5.147,5.147,0,0,0,.327,2.222,7.269,7.269,0,0,0,.348-2.247,8.2,8.2,0,0,0-.243-1.476,2.6,2.6,0,0,0-.831,3.1c-.426-.7-1.534-1.313-2.56.1"
										transform="translate(-262.125 -15.298)"
									/>
									<path
										className="f-reward-17-mobile"
										d="M279.626,3.886a3.285,3.285,0,0,0,.971.162,3.872,3.872,0,0,0,1.489-.461,2.369,2.369,0,0,0-1.452-.219,1.767,1.767,0,0,1,1.193-.014,1.567,1.567,0,0,1,.415.174c-.005-.012-.011-.023-.017-.035a1.317,1.317,0,0,0,.591.486,2.8,2.8,0,0,1-.272-.586,4.046,4.046,0,0,1-.259-1.8,4.918,4.918,0,0,0,.551,2.141,8.336,8.336,0,0,0,.082-2.312A8.385,8.385,0,0,0,282.546,0a2.83,2.83,0,0,0-.473,3.253c-.485-.606-1.6-.96-2.447.633"
										transform="translate(-251.401)"
									/>
									<path
										className="f-reward-17-mobile"
										d="M280.709,6.77a3.48,3.48,0,0,0-.952-1.3,2.176,2.176,0,0,1,.876.917,2.41,2.41,0,0,1,.223.457c.128-.8-.239-2-2.052-2.03a3.352,3.352,0,0,0,.591,1.173,3.685,3.685,0,0,0,1.313.783"
										transform="translate(-250.662 -4.331)"
									/>
									<path
										className="f-reward-17-mobile"
										d="M125.189,233.172a2.6,2.6,0,0,0-.978-.468l.064.005a2.828,2.828,0,0,1-.495-.4,2.673,2.673,0,0,1-.847-1.364,4.01,4.01,0,0,0,1.291,1.566,5.169,5.169,0,0,0-.584-1.853,6.169,6.169,0,0,0-.853-1.034,1.844,1.844,0,0,0,1.051,3,2.742,2.742,0,0,0-3.219,1.884,9.6,9.6,0,0,0,1.864-.143,8,8,0,0,0,2.457-1.069,6.573,6.573,0,0,0-2.746.245,4.566,4.566,0,0,1,2.161-.435,4.226,4.226,0,0,1,.834.065"
										transform="translate(-108.444 -206.574)"
									/>
									<path
										className="f-reward-17-mobile"
										d="M97.772,223.271a4.329,4.329,0,0,1,2.049-.641,3.941,3.941,0,0,1,.813-.014,2.468,2.468,0,0,0-.994-.378H99.7a2.806,2.806,0,0,1-.521-.356,2.711,2.711,0,0,1-.959-1.287,4.012,4.012,0,0,0,1.409,1.447,5.467,5.467,0,0,0-.753-1.806,6.1,6.1,0,0,0-.925-.953,1.87,1.87,0,0,0,1.318,2.914,2.647,2.647,0,0,0-2.929,2.191,9.083,9.083,0,0,0,1.8-.317,7.432,7.432,0,0,0,2.262-1.3,6.188,6.188,0,0,0-2.635.505"
										transform="translate(-86.617 -197.272)"
									/>
									<path
										className="f-reward-17-mobile"
										d="M68.439,213.145a4.611,4.611,0,0,1,2.157-.334,3.9,3.9,0,0,1,.8.1,2.243,2.243,0,0,0-.883-.509l.062.008a2.394,2.394,0,0,1-.423-.422,2.427,2.427,0,0,1-.63-1.394,3.477,3.477,0,0,0,1.031,1.614,4.907,4.907,0,0,0-.307-1.867,5.376,5.376,0,0,0-.684-1.067,1.761,1.761,0,0,0,.6,3.032,2.933,2.933,0,0,0-3.387,1.728,9.178,9.178,0,0,0,1.824-.059,8.62,8.62,0,0,0,2.538-.952,6.316,6.316,0,0,0-2.7.119"
										transform="translate(-60.035 -188.271)"
									/>
									<path
										className="f-reward-17-mobile"
										d="M43.636,200.4a4.579,4.579,0,0,1,2.158-.017,3.628,3.628,0,0,1,.752.215,1.985,1.985,0,0,0-.737-.626l.061.018a2.078,2.078,0,0,1-.309-.474,2.331,2.331,0,0,1-.287-1.458,3.156,3.156,0,0,0,.623,1.732,4.757,4.757,0,0,0,.133-1.871,4.873,4.873,0,0,0-.426-1.148c-1.565,1.2-.929,2.565-.112,3.058a3.07,3.07,0,0,0-3.664,1.213,8.482,8.482,0,0,0,1.757.2,9.313,9.313,0,0,0,2.681-.57,6.039,6.039,0,0,0-2.631-.271"
										transform="translate(-37.607 -177.02)"
									/>
									<path
										className="f-reward-17-mobile"
										d="M26.709,186.076a5.486,5.486,0,0,0-2.447-.653,4.271,4.271,0,0,1,2.062.3,3.234,3.234,0,0,1,.672.322,1.771,1.771,0,0,0-.566-.725c.019.01.038.019.058.028a1.9,1.9,0,0,1-.188-.512,2.413,2.413,0,0,1,.048-1.478,3.093,3.093,0,0,0,.211,1.8,4.928,4.928,0,0,0,.544-1.819,4.64,4.64,0,0,0-.165-1.194c-1.744.939-1.444,2.386-.774,2.992a3.013,3.013,0,0,0-3.757.659,7.292,7.292,0,0,0,1.612.453,9.263,9.263,0,0,0,2.692-.171"
										transform="translate(-20.143 -163.861)"
									/>
									<path
										className="f-reward-17-mobile"
										d="M12.967,169.684A4.859,4.859,0,0,0,10.8,168.67a3.814,3.814,0,0,1,1.88.608,2.842,2.842,0,0,1,.567.419,1.644,1.644,0,0,0-.381-.8c.017.013.034.026.051.038a1.9,1.9,0,0,1-.067-.535,2.623,2.623,0,0,1,.358-1.453,3.258,3.258,0,0,0-.181,1.809,5.267,5.267,0,0,0,.9-1.711,4.647,4.647,0,0,0,.085-1.2c-1.842.65-1.861,2.137-1.357,2.837-.723-.672-2.05-1.046-3.677.084a6.049,6.049,0,0,0,1.4.693,8.519,8.519,0,0,0,2.581.233"
										transform="translate(-8.075 -149.192)"
									/>
									<path
										className="f-reward-17-mobile"
										d="M5.142,151.994a4.348,4.348,0,0,0-1.818-1.346,3.365,3.365,0,0,1,1.633.9,2.568,2.568,0,0,1,.446.5,1.621,1.621,0,0,0-.191-.857c.014.017.027.033.042.048A2.021,2.021,0,0,1,5.3,150.7a2.865,2.865,0,0,1,.629-1.384,3.572,3.572,0,0,0-.535,1.765,5.606,5.606,0,0,0,1.2-1.551,4.78,4.78,0,0,0,.312-1.178c-1.863.341-2.172,1.826-1.839,2.6-.54-.784-1.71-1.372-3.445-.5a5.119,5.119,0,0,0,1.154.911,7.39,7.39,0,0,0,2.367.63"
										transform="translate(-1.457 -133.46)"
									/>
									<path
										className="f-reward-17-mobile"
										d="M.881,132.535a6.29,6.29,0,0,0,2.074,1.008,4.082,4.082,0,0,0-1.427-1.636,3.055,3.055,0,0,1,1.343,1.161,2.467,2.467,0,0,1,.317.572,1.676,1.676,0,0,0-.009-.885c.01.019.019.038.03.056a2.224,2.224,0,0,1,.149-.53,3.031,3.031,0,0,1,.85-1.273,3.9,3.9,0,0,0-.836,1.667,5.779,5.779,0,0,0,1.422-1.344,4.918,4.918,0,0,0,.508-1.115A2.031,2.031,0,0,0,3.094,132.5c-.351-.872-1.333-1.657-3.094-1.064a4.7,4.7,0,0,0,.881,1.1"
										transform="translate(0 -117.144)"
									/>
									<path
										className="f-reward-17-mobile"
										d="M5.832,114.505a4.108,4.108,0,0,0-1.021-1.876,2.957,2.957,0,0,1,1.032,1.388,2.526,2.526,0,0,1,.189.623,1.764,1.764,0,0,0,.156-.884c.005.021.011.041.017.061a2.415,2.415,0,0,1,.235-.5,3.034,3.034,0,0,1,1.018-1.123,4.1,4.1,0,0,0-1.076,1.518,5.692,5.692,0,0,0,1.57-1.1,4.937,4.937,0,0,0,.667-1.019,1.985,1.985,0,0,0-2.464,1.9,2.053,2.053,0,0,0-2.66-1.6A4.8,4.8,0,0,0,4.1,113.15a5.534,5.534,0,0,0,1.73,1.355"
										transform="translate(-3.142 -100.352)"
									/>
									<path
										className="f-reward-17-mobile"
										d="M12.987,90.958a4.374,4.374,0,0,0-.627-2.06,3.085,3.085,0,0,1,.721,1.573,2.71,2.71,0,0,1,.068.656,1.825,1.825,0,0,0,.3-.854c0,.021,0,.041.005.061a2.5,2.5,0,0,1,.3-.463,2.847,2.847,0,0,1,1.132-.939,4.038,4.038,0,0,0-1.252,1.324,5.34,5.34,0,0,0,1.649-.816,4.8,4.8,0,0,0,.789-.892,1.858,1.858,0,0,0-2.611,1.456,2.011,2.011,0,0,0-2.184-2.087,5.4,5.4,0,0,0,.348,1.378,5.278,5.278,0,0,0,1.363,1.661"
										transform="translate(-10.139 -79.094)"
									/>
									<path
										className="f-reward-17-mobile"
										d="M23.493,65.44a4.753,4.753,0,0,0-.264-2.181,3.383,3.383,0,0,1,.428,1.71,2.914,2.914,0,0,1-.041.668,1.813,1.813,0,0,0,.41-.795c0,.019,0,.038,0,.057a2.412,2.412,0,0,1,.353-.407,2.527,2.527,0,0,1,1.2-.727A3.719,3.719,0,0,0,24.2,64.855a4.822,4.822,0,0,0,1.667-.51,4.46,4.46,0,0,0,.875-.737,1.689,1.689,0,0,0-2.664.967,2.111,2.111,0,0,0-1.7-2.507,6.327,6.327,0,0,0,.116,1.455,5.539,5.539,0,0,0,1,1.917"
										transform="translate(-20.116 -55.838)"
									/>
									<path
										className="f-reward-17-mobile"
										d="M35.829,41.79a5.063,5.063,0,0,0,.056-2.235,3.74,3.74,0,0,1,.163,1.8,3.048,3.048,0,0,1-.134.66,1.708,1.708,0,0,0,.494-.711c0,.016-.008.033-.011.049a2.2,2.2,0,0,1,.386-.339,2.176,2.176,0,0,1,1.223-.492,3.235,3.235,0,0,0-1.432.821,4.3,4.3,0,0,0,1.637-.189,4.026,4.026,0,0,0,.929-.56,1.529,1.529,0,0,0-2.641.443,2.33,2.33,0,0,0-1.244-2.847,7.372,7.372,0,0,0-.082,1.488,6.252,6.252,0,0,0,.655,2.114"
										transform="translate(-31.618 -34.354)"
									/>
									<path
										className="f-reward-17-mobile"
										d="M49.494,18.506a4,4,0,0,1-.066,1.827,3,3,0,0,1-.211.633,1.528,1.528,0,0,0,.552-.606c0,.014-.01.028-.015.042a1.865,1.865,0,0,1,.405-.26,1.9,1.9,0,0,1,1.217-.243,2.735,2.735,0,0,0-1.456.528,3.933,3.933,0,0,0,1.572.138,3.591,3.591,0,0,0,.959-.367c-1.026-1.409-2.134-.8-2.56-.1a2.6,2.6,0,0,0-.831-3.1,8.2,8.2,0,0,0-.243,1.476,7.266,7.266,0,0,0,.348,2.247,5.149,5.149,0,0,0,.327-2.222"
										transform="translate(-43.882 -15.298)"
									/>
									<path
										className="f-reward-17-mobile"
										d="M64.356,1.589a4.046,4.046,0,0,1-.259,1.8,2.8,2.8,0,0,1-.272.586,1.316,1.316,0,0,0,.591-.486c-.006.012-.012.023-.017.035a1.562,1.562,0,0,1,.415-.174,1.767,1.767,0,0,1,1.193.014,2.368,2.368,0,0,0-1.452.219,3.872,3.872,0,0,0,1.489.461,3.285,3.285,0,0,0,.971-.162c-.843-1.594-1.962-1.239-2.447-.633A2.83,2.83,0,0,0,64.095,0a8.4,8.4,0,0,0-.372,1.419A8.333,8.333,0,0,0,63.8,3.73a4.919,4.919,0,0,0,.551-2.141"
										transform="translate(-57.239 0.001)"
									/>
									<path
										className="f-reward-17-mobile"
										d="M77.354,6.387a2.177,2.177,0,0,1,.876-.917,3.481,3.481,0,0,0-.952,1.3,3.686,3.686,0,0,0,1.313-.783,3.355,3.355,0,0,0,.591-1.173C77.37,4.842,77,6.041,77.131,6.844a2.384,2.384,0,0,1,.223-.457"
										transform="translate(-69.325 -4.331)"
									/>
									<path
										className="g-reward-17-mobile"
										d="M31.752,272.6c-.19,1.421,7.1,2.4,7.177.881.1-1.928.523-5.364.523-5.364l-7.367,1.561Z"
										transform="translate(-28.544 -241.208)"
									/>
									<path
										className="h-reward-17-mobile"
										d="M48.845,312.184c0,1.141,3.538,1.159,3.583.681l.221-2.382-3.571-.1Z"
										transform="translate(-43.915 -279.228)"
									/>
									<path
										className="f-reward-17-mobile"
										d="M54.3,284.726c0-.54-4.992-1.021-5.454.68l.523-4.043,5.309-.747Z"
										transform="translate(-43.915 -252.45)"
									/>
									<path
										className="g-reward-17-mobile"
										d="M275.454,272.6c.19,1.421-7.1,2.4-7.177.881-.1-1.928-.523-5.364-.523-5.364l7.367,1.561Z"
										transform="translate(-240.727 -241.208)"
									/>
									<path
										className="h-reward-17-mobile"
										d="M293.094,312.184c0,1.141-3.538,1.159-3.583.681l-.221-2.382,3.571-.1Z"
										transform="translate(-260.089 -279.228)"
									/>
									<path
										className="f-reward-17-mobile"
										d="M268.875,279.942c0-.54,4.992-1.021,5.454.68l-.523-4.043-5.387-1.281Z"
										transform="translate(-241.325 -247.666)"
									/>
									<path
										className="f-reward-17-mobile"
										d="M62.328,229.525c-.683-1.654-9.816-2.081-14.778-2.081s-14.1.427-14.778,2.081c-.572,1.386-.986,6.485-.986,6.485.77-2.882,15.764-2.8,15.764-2.8s14.994-.08,15.764,2.8c0,0-.414-5.1-.986-6.485"
										transform="translate(-28.577 -204.615)"
									/>
									<g
										className="i-reward-17-mobile"
										transform="translate(3.208 27.847)">
										<g className="j-reward-17-mobile">
											<path
												className="h-reward-17-mobile"
												d="M47.549,277.434s-14.247-.076-15.677,2.591c-.056.579-.087.958-.087.958.77-2.882,15.764-2.8,15.764-2.8s14.994-.08,15.764,2.8c0,0-.031-.379-.087-.958-1.43-2.666-15.677-2.591-15.677-2.591"
												transform="translate(-31.785 -277.434)"
											/>
										</g>
									</g>
									<path
										className="h-reward-17-mobile"
										d="M344.074,312.052c0,.006,0,.011.006.016l-.007-.08c0,.022,0,.043,0,.063"
										transform="translate(-309.342 -280.673)"
									/>
									<g
										className="i-reward-17-mobile"
										transform="translate(4.061 22.829)">
										<g className="k-reward-17-mobile">
											<path
												className="h-reward-17-mobile"
												d="M55.142,228.189c4.593,0,13.126.366,14.912,1.732a3.72,3.72,0,0,0-.134-.4c-.683-1.654-9.816-2.081-14.778-2.081s-14.1.427-14.778,2.081a3.741,3.741,0,0,0-.134.4c1.786-1.367,10.319-1.732,14.912-1.732"
												transform="translate(-40.23 -227.443)"
											/>
										</g>
									</g>
									<path
										className="h-reward-17-mobile"
										d="M31.792,311.988l-.007.08c0-.005,0-.011.006-.016v-.063"
										transform="translate(-28.577 -280.673)"
									/>
									<path
										className="l-reward-17-mobile"
										d="M117.713,44.6l1.839-1.347a.088.088,0,0,0,.036-.071l-.026-3.987a.087.087,0,0,0-.017-.051l-1.5-2.026a.088.088,0,0,0-.123-.019l-.284.208a.087.087,0,0,0-.019.123l.532.719-1.028.753-.532-.719a.089.089,0,0,0-.123-.019l-.284.208a.088.088,0,0,0-.019.123l1.379,1.861a.088.088,0,0,0,.123.019l.284-.208a.087.087,0,0,0,.019-.123l-.532-.719,1.028-.753.569.768.024,3.621-1.477,1.082-3.471-1.1-.569-.768,1.028-.753.532.719a.089.089,0,0,0,.123.019l.284-.208a.087.087,0,0,0,.019-.123l-1.379-1.861a.089.089,0,0,0-.123-.019l-.284.208a.087.087,0,0,0-.019.123l.532.719-1.028.753-.532-.719a.089.089,0,0,0-.123-.019l-.284.208a.087.087,0,0,0-.019.123l1.5,2.026a.088.088,0,0,0,.044.032l3.822,1.207a.089.089,0,0,0,.079-.013"
										transform="translate(-100.92 -33.363)"
									/>
									<path
										className="l-reward-17-mobile"
										d="M192.644,44.453l3.807-1.252a.088.088,0,0,0,.044-.032l1.476-2.043a.087.087,0,0,0-.02-.122l-.287-.2a.089.089,0,0,0-.123.02l-.524.725-1.037-.741.524-.725a.087.087,0,0,0-.02-.122l-.287-.2a.088.088,0,0,0-.123.02l-1.357,1.877a.087.087,0,0,0,.02.122l.287.2a.089.089,0,0,0,.123-.02l.524-.725,1.037.741-.56.775-3.458,1.137L191.2,42.819l-.019-3.621.56-.775,1.037.741-.524.725a.087.087,0,0,0,.02.122l.287.2a.089.089,0,0,0,.123-.02l1.356-1.877a.087.087,0,0,0-.02-.122l-.287-.2a.089.089,0,0,0-.123.02l-.524.725L192.052,38l.524-.725a.088.088,0,0,0-.02-.122l-.287-.2a.089.089,0,0,0-.123.02l-1.476,2.043a.087.087,0,0,0-.017.052l.021,3.988a.088.088,0,0,0,.037.071l1.854,1.325a.089.089,0,0,0,.079.012"
										transform="translate(-171.409 -33.22)"
									/>
									<path
										className="l-reward-17-mobile"
										d="M211.748,106.274l.107-.334a.088.088,0,0,0-.057-.11l-2.41-.765a.089.089,0,0,0-.054,0l-3.807,1.252a.088.088,0,0,0-.056.057l-.694,2.163a.087.087,0,0,0,.013.079l2.374,3.214a.088.088,0,0,0,.044.032l2.41.765a.088.088,0,0,0,.111-.057l.107-.334a.088.088,0,0,0-.057-.11l-.855-.271.388-1.209.855.272a.089.089,0,0,0,.111-.057l.107-.334a.088.088,0,0,0-.057-.11l-2.214-.7a.088.088,0,0,0-.111.057l-.107.334a.088.088,0,0,0,.057.11l.855.271-.388,1.209-.914-.29-2.156-2.919.558-1.737,3.458-1.137.914.29-.388,1.209-.855-.271a.088.088,0,0,0-.111.057l-.107.334a.088.088,0,0,0,.057.11l2.214.7a.088.088,0,0,0,.111-.057l.107-.335a.088.088,0,0,0-.057-.11l-.855-.271.388-1.209.855.271a.088.088,0,0,0,.111-.057"
										transform="translate(-184.102 -94.515)"
									/>
									<path
										className="l-reward-17-mobile"
										d="M157.536,143.685l2.374,3.214a.087.087,0,0,1,.017.051l.013,2.516a.088.088,0,0,1-.088.088l-.353,0a.088.088,0,0,1-.089-.087l0-.892-1.276.007,0,.892a.088.088,0,0,1-.088.088l-.353,0a.088.088,0,0,1-.089-.087l-.012-2.311a.088.088,0,0,1,.088-.088l.353,0a.088.088,0,0,1,.089.087l0,.892,1.276-.007-.005-.954-2.156-2.919-1.834.01-2.125,2.941.005.954,1.276-.007,0-.893a.088.088,0,0,1,.088-.088l.353,0a.088.088,0,0,1,.089.087l.012,2.311a.088.088,0,0,1-.088.088l-.353,0a.088.088,0,0,1-.089-.087l0-.892-1.276.007,0,.892a.088.088,0,0,1-.088.088l-.353,0a.088.088,0,0,1-.089-.087l-.013-2.516a.087.087,0,0,1,.017-.052l2.34-3.238a.088.088,0,0,1,.071-.037l2.283-.012a.088.088,0,0,1,.072.036"
										transform="translate(-137.334 -129.23)"
									/>
									<path
										className="l-reward-17-mobile"
										d="M107.264,106.926l-3.82-1.212a.088.088,0,0,0-.055,0l-2.4.79a.088.088,0,0,0-.056.111l.111.333a.088.088,0,0,0,.112.056l.852-.28.4,1.205-.852.28a.088.088,0,0,0-.056.111l.111.333a.088.088,0,0,0,.111.056l2.207-.726a.088.088,0,0,0,.056-.111l-.111-.333a.089.089,0,0,0-.112-.056l-.852.28-.4-1.205.911-.3,3.469,1.1.576,1.731-2.125,2.941-.911.3-.4-1.205.852-.28a.088.088,0,0,0,.056-.111l-.111-.333a.088.088,0,0,0-.111-.056l-2.207.726a.088.088,0,0,0-.056.111l.111.333a.088.088,0,0,0,.111.056l.852-.28.4,1.205-.852.28a.088.088,0,0,0-.056.111l.111.333a.088.088,0,0,0,.111.056l2.4-.79a.087.087,0,0,0,.044-.032l2.34-3.238a.087.087,0,0,0,.012-.079l-.717-2.156a.088.088,0,0,0-.057-.056"
										transform="translate(-90.739 -95.099)"
									/>
								</g>
							</g>
						</g>
					</g>
				</React.Fragment>
			)}
		</g>
	)
}

export default Reward17Mobile
