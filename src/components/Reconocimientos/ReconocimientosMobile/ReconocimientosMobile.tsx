import React from 'react'
import { carouselItemsMobile } from '../mocks/Mobile'
import Reward1Mobile from './components/Reward1'
import Reward2Mobile from './components/Reward2'
import Reward3Mobile from './components/Reward3'
import Reward4Mobile from './components/Reward4'
import Reward5Mobile from './components/Reward5'
import Reward6Mobile from './components/Reward6'
import Reward7Mobile from './components/Reward7'
import Reward8Mobile from './components/Reward8'
import Reward9Mobile from './components/Reward9'
import Reward10Mobile from './components/Reward10'
import Reward11Mobile from './components/Reward11'
import Reward12Mobile from './components/Reward12'
import Reward13Mobile from './components/Reward13'
import Reward14Mobile from './components/Reward14'
import Reward15Mobile from './components/Reward15'
import Reward16Mobile from './components/Reward16'
import Reward17Mobile from './components/Reward17'
import Reward18Mobile from './components/Reward18'
import Reward30Mobile from './components/Reward30'
import Reward29Mobile from './components/Reward29'
import Reward28Mobile from './components/Reward28'
import Reward27Mobile from './components/Reward27'
import Reward26Mobile from './components/Reward26'
import Reward25Mobile from './components/Reward25'
import Reward24Mobile from './components/Reward24'
import Reward23Mobile from './components/Reward23'
import Reward22Mobile from './components/Reward22'
import Reward21Mobile from './components/Reward21'
import Reward20Mobile from './components/Reward20'
import Reward19Mobile from './components/Reward19'

const ReconocimientosMobile: React.FC = (): JSX.Element => {
	const [carouselSlider, setCarouselSlider] = React.useState<number>(0)

	const handleLessCarouselSlider = () =>
		setCarouselSlider(carouselSlider - 1 < 0 ? 3 : carouselSlider - 1)
	const handleAddCarouselSlider = () =>
		setCarouselSlider(carouselSlider + 1 > 3 ? 0 : carouselSlider + 1)

	return (
		<React.Fragment>
			<svg preserveAspectRatio="none" viewBox="56 0 414 2093">
				<defs>
					<style>
						{
							'.a-time-line,.db-time-line{fill:#fff;}.b-time-line,.j-time-line,.m-time-line,.r-time-line{fill:#001f5f;}.c-time-line{fill:none;}.aa-time-line,.ac-time-line,.ae-time-line,.ag-time-line,.ai-time-line,.ak-time-line,.am-time-line,.ao-time-line,.aq-time-line,.as-time-line,.au-time-line,.aw-time-line,.ay-time-line,.ba-time-line,.bc-time-line,.be-time-line,.bg-time-line,.bi-time-line,.bk-time-line,.bm-time-line,.bo-time-line,.bq-time-line,.bs-time-line,.bu-time-line,.bw-time-line,.by-time-line,.c-time-line,.ca-time-line,.cc-time-line,.ce-time-line,.cg-time-line,.ci-time-line,.ck-time-line,.cm-time-line,.co-time-line,.cs-time-line,.cu-time-line,.cx-time-line,.cz-time-line,.u-time-line,.w-time-line,.y-time-line{stroke:#707070;stroke-width:4px;}.d-time-line{clip-path:url(#a-time-line);}.e-time-line{clip-path:url(#b-time-line);}.f-time-line{fill:#e7002a;}.g-time-line{fill:#1c164e;}.h-time-line{fill:#e40032;}.i-time-line{fill:url(#e-time-line);}.da-time-line,.j-time-line{font-size:12px;}.j-time-line,.r-time-line{font-family:Silka-Bold, Silka;font-weight:700;}.k-time-line,.q-time-line{opacity:0.5;}.l-time-line{fill:url(#h-time-line);}.m-time-line{font-size:9px;}.da-time-line,.db-time-line,.dc-time-line,.m-time-line,.o-time-line{font-family:Silka-SemiBold, Silka;font-weight:600;}.n-time-line{fill:url(#k-time-line);}.o-time-line{fill:#182856;font-size:6px;}.p-time-line,.q-time-line{fill:#c7c7cc;}.r-time-line{font-size:22px;}.s-time-line{clip-path:url(#r-time-line);}.t-time-line{clip-path:url(#s-time-line);}.u-time-line{fill:url(#t-time-line);}.v-time-line{clip-path:url(#u-time-line);}.w-time-line{fill:url(#v-time-line);}.x-time-line{clip-path:url(#w-time-line);}.y-time-line{fill:url(#x-time-line);}.z-time-line{clip-path:url(#y-time-line);}.aa-time-line{fill:url(#z-time-line);}.ab-time-line{clip-path:url(#aa-time-line);}.ac-time-line{fill:url(#ab-time-line);}.ad-time-line{clip-path:url(#ac-time-line);}.ae-time-line{fill:url(#ad-time-line);}.af-time-line{clip-path:url(#ae-time-line);}.ag-time-line{fill:url(#af-time-line);}.ah-time-line{clip-path:url(#ag-time-line);}.ai-time-line{fill:url(#ah-time-line);}.aj-time-line{clip-path:url(#ai-time-line);}.ak-time-line{fill:url(#aj-time-line);}.al-time-line{clip-path:url(#ak-time-line);}.am-time-line{fill:url(#al-time-line);}.an-time-line{clip-path:url(#am-time-line);}.ao-time-line{fill:url(#an-time-line);}.ap-time-line{clip-path:url(#ao-time-line);}.aq-time-line{fill:url(#ap-time-line);}.ar-time-line{clip-path:url(#aq-time-line);}.as-time-line{fill:url(#ar-time-line);}.at-time-line{clip-path:url(#as-time-line);}.au-time-line{fill:url(#at-time-line);}.av-time-line{clip-path:url(#au-time-line);}.aw-time-line{fill:url(#av-time-line);}.ax-time-line{clip-path:url(#aw-time-line);}.ay-time-line{fill:url(#ax-time-line);}.az-time-line{clip-path:url(#ay-time-line);}.ba-time-line{fill:url(#az-time-line);}.bb-time-line{clip-path:url(#ba-time-line);}.bc-time-line{fill:url(#bb-time-line);}.bd-time-line{clip-path:url(#bc-time-line);}.be-time-line{fill:url(#bd-time-line);}.bf-time-line{clip-path:url(#be-time-line);}.bg-time-line{fill:url(#bf-time-line);}.bh-time-line{clip-path:url(#bg-time-line);}.bi-time-line{fill:url(#bh-time-line);}.bj-time-line{clip-path:url(#bi-time-line);}.bk-time-line{fill:url(#bj-time-line);}.bl-time-line{clip-path:url(#bk-time-line);}.bm-time-line{fill:url(#bl-time-line);}.bn-time-line{clip-path:url(#bm-time-line);}.bo-time-line{fill:url(#bn-time-line);}.bp-time-line{clip-path:url(#bo-time-line);}.bq-time-line{fill:url(#bp-time-line);}.br-time-line{clip-path:url(#bq-time-line);}.bs-time-line{fill:url(#br-time-line);}.bt-time-line{clip-path:url(#bs-time-line);}.bu-time-line{fill:url(#bt-time-line);}.bv-time-line{clip-path:url(#bu-time-line);}.bw-time-line{fill:url(#bv-time-line);}.bx-time-line{clip-path:url(#bw-time-line);}.by-time-line{fill:url(#bx-time-line);}.bz-time-line{clip-path:url(#by-time-line);}.ca-time-line{fill:url(#bz-time-line);}.cb-time-line{clip-path:url(#ca-time-line);}.cc-time-line{fill:url(#cb-time-line);}.cd-time-line{clip-path:url(#cc-time-line);}.ce-time-line{fill:url(#cd-time-line);}.cf-time-line{clip-path:url(#ce-time-line);}.cg-time-line{fill:url(#cf-time-line);}.ch-time-line{clip-path:url(#cg-time-line);}.ci-time-line{fill:url(#ch-time-line);}.cj-time-line{clip-path:url(#ci-time-line);}.ck-time-line{fill:url(#cj-time-line);}.cl-time-line{clip-path:url(#ck-time-line);}.cm-time-line{fill:url(#cl-time-line);}.cn-time-line{clip-path:url(#cm-time-line);}.co-time-line{fill:url(#cn-time-line);}.cp-time-line{opacity:0.4;mix-blend-mode:multiply;isolation:isolate;}.cq-time-line{clip-path:url(#cp-time-line);}.cr-time-line{clip-path:url(#cq-time-line);}.cs-time-line{fill:url(#cr-time-line);}.ct-time-line{clip-path:url(#cs-time-line);}.cu-time-line{fill:url(#ct-time-line);}.cv-time-line{clip-path:url(#cv-time-line);}.cw-time-line{clip-path:url(#cw-time-line);}.cx-time-line{fill:url(#cx-time-line);}.cy-time-line{clip-path:url(#cy-time-line);}.cz-time-line{fill:url(#cz-time-line);}.da-time-line,.dc-time-line{fill:#543913;}.db-time-line,.dc-time-line{font-size:10px;}.dd-time-line{fill:url(#qu-time-line);}.de-time-line{fill:url(#qx-time-line);}.df-time-line{filter:url(#cog-time-line);}.dg-time-line{filter:url(#ckv-time-line);}.dh-time-line{filter:url(#chk-time-line);}.di-time-line{filter:url(#cdz-time-line);}.dj-time-line{filter:url(#cao-time-line);}.dk-time-line{filter:url(#bxd-time-line);}.dl-time-line{filter:url(#bts-time-line);}.dm-time-line{filter:url(#bqh-time-line);}.dn-time-line{filter:url(#bmw-time-line);}.do-time-line{filter:url(#bjl-time-line);}.dp-time-line{filter:url(#bga-time-line);}.dq-time-line{filter:url(#bcp-time-line);}.dr-time-line{filter:url(#aze-time-line);}.ds-time-line{filter:url(#avt-time-line);}.dt-time-line{filter:url(#asi-time-line);}.du-time-line{filter:url(#aox-time-line);}.dv-time-line{filter:url(#alm-time-line);}.dw-time-line{filter:url(#aib-time-line);}.dx-time-line{filter:url(#aeq-time-line);}.dy-time-line{filter:url(#abf-time-line);}.dz-time-line{filter:url(#xu-time-line);}.ea-time-line{filter:url(#uj-time-line);}.eb-time-line{filter:url(#qy-time-line);}.ec-time-line{filter:url(#qv-time-line);}.ed-time-line{filter:url(#qs-time-line);}.ee-time-line{filter:url(#nh-time-line);}.ef-time-line{filter:url(#jw-time-line);}.eg-time-line{filter:url(#gl-time-line);}.eh-time-line{filter:url(#da-time-line);}.ei-time-line{filter:url(#p-time-line);}.ej-time-line{filter:url(#n-time-line);}.ek-time-line{filter:url(#l-time-line);}.el-time-line{filter:url(#i-time-line);}.em-time-line{filter:url(#f-time-line);}.en-time-line{filter:url(#c-time-line);}'
						}
					</style>
					<clipPath id="a-time-line">
						<rect
							className="a-time-line"
							width={414}
							height={2095}
							transform="translate(-187.5 -56)"
						/>
					</clipPath>
					<clipPath id="b-time-line">
						<rect
							className="b-time-line"
							width={414.499}
							height={2092.817}
						/>
					</clipPath>
					<filter
						id="c-time-line"
						x={153.393}
						y={143.947}
						width={221.214}
						height={225.606}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="d" />
						<feFlood floodOpacity={0.502} />
						<feComposite operator="in" in2="d" />
						<feComposite in="SourceGraphic" />
					</filter>
					<pattern
						id="e-time-line"
						width={1}
						height={1}
						viewBox="-55.398 -100.145 428.138 437.391">
						<image
							preserveAspectRatio="xMidYMid slice"
							width={329.984}
							height={207.606}
							xlinkHref="/images/mobile/rewards/carousel-1.png"
						/>
					</pattern>
					<filter
						id="f-time-line"
						x={364.227}
						y={179.816}
						width={162.739}
						height={165.867}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="g" />
						<feFlood floodOpacity={0.502} />
						<feComposite operator="in" in2="g" />
						<feComposite in="SourceGraphic" />
					</filter>
					<pattern
						id="h-time-line"
						width={1}
						height={1}
						patternTransform="translate(474.842 295.735) rotate(-180)"
						viewBox="-28.206 -114.859 312.316 319.066">
						<image
							preserveAspectRatio="xMidYMid slice"
							width={237.421}
							height={147.867}
							xlinkHref="ComponentTMP_0-image2.png-time-line"
						/>
					</pattern>
					<filter
						id="i-time-line"
						x={0}
						y={179.816}
						width={162.739}
						height={165.867}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="j" />
						<feFlood floodOpacity={0.502} />
						<feComposite operator="in" in2="j" />
						<feComposite in="SourceGraphic" />
					</filter>
					<pattern
						id="k-time-line"
						width={1}
						height={1}
						patternTransform="translate(865.593 295.735) rotate(-180)"
						viewBox="8.051 -204.827 406.279 415.059">
						<image
							preserveAspectRatio="xMidYMid slice"
							width={432.796}
							height={147.867}
							xlinkHref="ComponentTMP_0-image3.png-time-line"
						/>
					</pattern>
					<filter
						id="l-time-line"
						x={120.107}
						y={365.56}
						width={84.573}
						height={49.58}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="m" />
						<feFlood floodOpacity={0.6} />
						<feComposite operator="in" in2="m" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="n-time-line"
						x={323.32}
						y={365.56}
						width={84.573}
						height={49.58}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="o" />
						<feFlood floodOpacity={0.6} />
						<feComposite operator="in" in2="o" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="p-time-line"
						x={329.983}
						y={652.368}
						width={138}
						height={159}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="q" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="q" />
						<feComposite in="SourceGraphic" />
					</filter>
					<clipPath id="r-time-line">
						<rect
							className="c-time-line"
							width={100.306}
							height={90.076}
						/>
					</clipPath>
					<clipPath id="s-time-line">
						<path
							className="c-time-line"
							d="M214.658,232.366a13.77,13.77,0,0,0-1.543,4.919,10.627,10.627,0,0,0,3.406-4.155,7.127,7.127,0,0,1-2.237,3.62,7.452,7.452,0,0,1-1.305,1.067c.055,0,.113-.009.169-.014a6.83,6.83,0,0,0-2.582,1.243,11.075,11.075,0,0,1,2.2-.172,12,12,0,0,1,5.7,1.155,17.25,17.25,0,0,0-7.247-.649,21.064,21.064,0,0,0,6.485,2.838,25.232,25.232,0,0,0,4.921.38c-1.473-4.509-5.373-5.487-8.5-5,2.671-.847,5.783-4.022,2.774-7.974a16.333,16.333,0,0,0-2.251,2.744"
							transform="translate(-210.568 -229.622)"
						/>
					</clipPath>
					<linearGradient
						id="t-time-line"
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
					<clipPath id="u-time-line">
						<path
							className="c-time-line"
							d="M242.243,221.813a14.564,14.564,0,0,0-1.987,4.793,10.619,10.619,0,0,0,3.72-3.842,7.222,7.222,0,0,1-2.532,3.416,7.386,7.386,0,0,1-1.375.946c.053,0,.108,0,.163,0a6.492,6.492,0,0,0-2.625,1,10.339,10.339,0,0,1,2.146.038,11.389,11.389,0,0,1,5.409,1.7,16.244,16.244,0,0,0-6.956-1.341,19.615,19.615,0,0,0,5.972,3.462,23.9,23.9,0,0,0,4.757.841c-.953-4.647-4.649-6-7.731-5.816,2.678-.591,6.044-3.467,3.479-7.735a16.163,16.163,0,0,0-2.441,2.531"
							transform="translate(-237.607 -219.282)"
						/>
					</clipPath>
					<linearGradient
						id="v-time-line"
						x1={-3.42}
						y1={1.914}
						x2={-3.405}
						y2={1.914}
						xlinkHref="#t-time-line"
					/>
					<clipPath id="w-time-line">
						<path
							className="c-time-line"
							d="M266.935,212.11a13.1,13.1,0,0,0-.81,4.955,9.227,9.227,0,0,0,2.72-4.285,6.478,6.478,0,0,1-1.662,3.7,6.33,6.33,0,0,1-1.115,1.119c.054-.005.109-.014.164-.022a5.907,5.907,0,0,0-2.332,1.352,10.26,10.26,0,0,1,2.114-.271,12.118,12.118,0,0,1,5.693.888,16.584,16.584,0,0,0-7.12-.315,22.687,22.687,0,0,0,6.7,2.526,24.128,24.128,0,0,0,4.815.158,7.728,7.728,0,0,0-8.94-4.587c2.47-.965,5.025-4.267,1.58-8.048a14.29,14.29,0,0,0-1.806,2.832"
							transform="translate(-263.901 -209.278)"
						/>
					</clipPath>
					<linearGradient
						id="x-time-line"
						x1={-3.817}
						y1={2.076}
						x2={-3.802}
						y2={2.076}
						xlinkHref="#t-time-line"
					/>
					<clipPath id="y-time-line">
						<path
							className="c-time-line"
							d="M289.256,199.818a12.692,12.692,0,0,0,.352,4.967,8.408,8.408,0,0,0,1.645-4.6,6.229,6.229,0,0,1-.757,3.87,5.522,5.522,0,0,1-.816,1.258c.054-.013.107-.03.161-.047a5.248,5.248,0,0,0-1.947,1.662,9.523,9.523,0,0,1,1.986-.571,12.022,12.022,0,0,1,5.7.046,15.855,15.855,0,0,0-6.944.72c-.008,0,1.01.378,2.385.758a17.807,17.807,0,0,0,4.692.755,22.273,22.273,0,0,0,4.638-.531c-3.029-4.063-6.967-4.263-9.672-3.219,2.157-1.307,3.835-4.933-.3-8.117a12.966,12.966,0,0,0-1.124,3.047"
							transform="translate(-287.893 -196.771)"
						/>
					</clipPath>
					<linearGradient
						id="z-time-line"
						x1={-4.316}
						y1={2.34}
						x2={-4.3}
						y2={2.34}
						xlinkHref="#t-time-line"
					/>
					<clipPath id="aa-time-line">
						<path
							className="c-time-line"
							d="M307.527,185.314a13.127,13.127,0,0,0,1.435,4.828,8.259,8.259,0,0,0,.558-4.773,6.454,6.454,0,0,1,.128,3.923,5.071,5.071,0,0,1-.5,1.359c.051-.022.1-.048.152-.074a4.7,4.7,0,0,0-1.495,1.924,8.505,8.505,0,0,1,1.774-.854,12.079,12.079,0,0,1,5.186-.83c.165.017.253.034.256.034a14.422,14.422,0,0,0-6.46,1.733c-.006,0,.7.147,1.714.295a16.15,16.15,0,0,0,9.647-1.044c-3.778-3.585-7.573-3.185-9.918-1.75,1.767-1.608,2.56-5.45-2.044-7.942a12.384,12.384,0,0,0-.435,3.17"
							transform="translate(-307.526 -182.144)"
						/>
					</clipPath>
					<linearGradient
						id="ab-time-line"
						x1={-4.774}
						y1={2.651}
						x2={-4.758}
						y2={2.651}
						xlinkHref="#t-time-line"
					/>
					<clipPath id="ac-time-line">
						<path
							className="c-time-line"
							d="M317.768,169.035a14.006,14.006,0,0,0,2.385,4.542,8.7,8.7,0,0,0-.478-4.8,6.994,6.994,0,0,1,.946,3.858,5.069,5.069,0,0,1-.177,1.419c.046-.031.091-.066.135-.1a4.374,4.374,0,0,0-1,2.131,7.5,7.5,0,0,1,1.5-1.111,10.024,10.024,0,0,1,4.963-1.615,12.8,12.8,0,0,0-5.723,2.694c-.011,0,4.422.252,6.813-.619a15.924,15.924,0,0,0,3.706-1.838c-4.3-3-7.8-2.007-9.707-.222,1.331-1.857,1.279-5.805-3.583-7.531a12.407,12.407,0,0,0,.225,3.2"
							transform="translate(-317.519 -165.838)"
						/>
					</clipPath>
					<linearGradient
						id="ad-time-line"
						x1={-4.9}
						y1={2.907}
						x2={-4.884}
						y2={2.907}
						xlinkHref="#t-time-line"
					/>
					<clipPath id="ae-time-line">
						<path
							className="c-time-line"
							d="M323.316,151.478a14.877,14.877,0,0,0,3.165,4.118,9.524,9.524,0,0,0-1.412-4.684,7.621,7.621,0,0,1,1.66,3.674,5.394,5.394,0,0,1,.124,1.435c.038-.04.075-.083.111-.127a4.32,4.32,0,0,0-.505,2.275,6.8,6.8,0,0,1,1.178-1.335,8.865,8.865,0,0,1,4.311-2.384,11.489,11.489,0,0,0-4.8,3.572c-.006,0,4.215-.432,6.248-1.673a13.534,13.534,0,0,0,3.045-2.418c-4.58-2.324-7.67-.764-9.094,1.318.877-2.05.064-5.991-4.855-6.9a12.747,12.747,0,0,0,.824,3.126"
							transform="translate(-322.492 -148.352)"
						/>
					</clipPath>
					<linearGradient
						id="af-time-line"
						x1={-5.028}
						y1={3.216}
						x2={-5.012}
						y2={3.216}
						xlinkHref="#t-time-line"
					/>
					<clipPath id="ag-time-line">
						<path
							className="c-time-line"
							d="M325.278,133.175a15.287,15.287,0,0,0,3.753,3.569,10.386,10.386,0,0,0-2.207-4.425,8.043,8.043,0,0,1,2.244,3.379,5.931,5.931,0,0,1,.394,1.408c.028-.047.054-.1.079-.148a4.475,4.475,0,0,0-.025,2.348,6.567,6.567,0,0,1,.837-1.517,8.073,8.073,0,0,1,3.544-3.081,10.831,10.831,0,0,0-3.766,4.342s3.851-1.1,5.474-2.676a12.467,12.467,0,0,0,2.327-2.925c-4.646-1.574-7.24.509-8.166,2.824.433-2.182-1.035-6-5.83-6.059a13.059,13.059,0,0,0,1.34,2.96"
							transform="translate(-323.938 -130.215)"
						/>
					</clipPath>
					<linearGradient
						id="ah-time-line"
						x1={-5.216}
						y1={3.614}
						x2={-5.199}
						y2={3.614}
						xlinkHref="#t-time-line"
					/>
					<clipPath id="ai-time-line">
						<path
							className="c-time-line"
							d="M322.211,111.664a13.127,13.127,0,0,0,1.761,2.7,15.02,15.02,0,0,0,4.145,2.911,10.88,10.88,0,0,0-2.839-4.03,8.032,8.032,0,0,1,2.686,2.981,6.436,6.436,0,0,1,.621,1.338c.017-.051.031-.106.045-.161a4.707,4.707,0,0,0,.411,2.347,6.748,6.748,0,0,1,.5-1.654,7.84,7.84,0,0,1,2.724-3.685,10.927,10.927,0,0,0-2.7,4.981s3.369-1.741,4.565-3.6a12.78,12.78,0,0,0,1.6-3.342c-4.525-.773-6.576,1.769-7.021,4.245a5.2,5.2,0,0,0-5.252-5.152,7.175,7.175,0,0,0-1.251.114"
							transform="translate(-322.211 -111.55)"
						/>
					</clipPath>
					<linearGradient
						id="aj-time-line"
						x1={-5.528}
						y1={4.161}
						x2={-5.51}
						y2={4.161}
						xlinkHref="#t-time-line"
					/>
					<clipPath id="ak-time-line">
						<path
							className="c-time-line"
							d="M324.579,93.458a4.9,4.9,0,0,0-6.893-3.866,12.668,12.668,0,0,0,2.082,2.367,14.074,14.074,0,0,0,4.352,2.166,10.7,10.7,0,0,0-3.3-3.514A7.523,7.523,0,0,1,323.8,93.1a6.66,6.66,0,0,1,.8,1.228c.006-.052.01-.106.013-.161a4.862,4.862,0,0,0,.784,2.266,7.24,7.24,0,0,1,.179-1.74,8.2,8.2,0,0,1,1.9-4.176,11.659,11.659,0,0,0-1.656,5.468c.007,0,2.816-2.326,3.6-4.41a14.4,14.4,0,0,0,.918-3.658c-4.26.054-5.762,2.979-5.764,5.539"
							transform="translate(-317.686 -87.919)"
						/>
					</clipPath>
					<linearGradient
						id="al-time-line"
						x1={-5.576}
						y1={4.668}
						x2={-5.559}
						y2={4.668}
						xlinkHref="#t-time-line"
					/>
					<clipPath id="am-time-line">
						<path
							className="c-time-line"
							d="M317.818,68.722c-.662-2.193-3.335-4.989-7.033-2.566a11.819,11.819,0,0,0,2.309,1.957,12.675,12.675,0,0,0,4.4,1.354,9.829,9.829,0,0,0-3.611-2.891,6.66,6.66,0,0,1,3.161,1.929,6.433,6.433,0,0,1,.931,1.08c0-.049-.007-.1-.012-.15a4.818,4.818,0,0,0,1.083,2.11,7.793,7.793,0,0,1-.108-1.773,9.015,9.015,0,0,1,1.129-4.541,12.688,12.688,0,0,0-.7,5.788A14.73,14.73,0,0,0,322,65.931a16.9,16.9,0,0,0,.306-3.863,5.6,5.6,0,0,0-4.492,6.654"
							transform="translate(-310.785 -62.068)"
						/>
					</clipPath>
					<linearGradient
						id="an-time-line"
						x1={-5.435}
						y1={5.108}
						x2={-5.417}
						y2={5.108}
						xlinkHref="#t-time-line"
					/>
					<clipPath id="ao-time-line">
						<path
							className="c-time-line"
							d="M308.913,45.744c-.92-2.064-3.762-4.31-6.97-1.177a10.611,10.611,0,0,0,2.453,1.487,11.278,11.278,0,0,0,4.321.5,8.534,8.534,0,0,0-3.781-2.18,5.725,5.725,0,0,1,3.228,1.307,5.813,5.813,0,0,1,1.019.9c-.008-.043-.019-.087-.029-.132a4.532,4.532,0,0,0,1.3,1.887,8.125,8.125,0,0,1-.354-1.753,9.993,9.993,0,0,1,.431-4.766,13.516,13.516,0,0,0,.147,5.933,16.669,16.669,0,0,0,1.73-5.613,19.655,19.655,0,0,0-.216-3.95,6.2,6.2,0,0,0-3.284,7.556"
							transform="translate(-301.943 -38.188)"
						/>
					</clipPath>
					<linearGradient
						id="ap-time-line"
						x1={-5.355}
						y1={5.611}
						x2={-5.337}
						y2={5.611}
						xlinkHref="#t-time-line"
					/>
					<clipPath id="aq-time-line">
						<path
							className="c-time-line"
							d="M298.311,25.225c-1.125-1.866-4.049-3.484-6.757.256a9.449,9.449,0,0,0,2.53.973,8.126,8.126,0,0,0,3.156-.129c.591-.12,1-.239.995-.239a7.2,7.2,0,0,0-3.842-1.4,6.112,6.112,0,0,1,4.283,1.336c-.011-.036-.026-.074-.039-.111a4.052,4.052,0,0,0,1.458,1.609,7.993,7.993,0,0,1-.556-1.679,10.723,10.723,0,0,1-.173-4.848,13.726,13.726,0,0,0,.863,5.9,19.4,19.4,0,0,0,.918-5.966A21.866,21.866,0,0,0,300.5,17a6.938,6.938,0,0,0-2.194,8.22"
							transform="translate(-291.554 -17.005)"
						/>
					</clipPath>
					<linearGradient
						id="ar-time-line"
						x1={-5.249}
						y1={6.089}
						x2={-5.23}
						y2={6.089}
						xlinkHref="#t-time-line"
					/>
					<clipPath id="as-time-line">
						<path
							className="c-time-line"
							d="M287.332,0a7.546,7.546,0,0,0-1.247,8.636c-1.28-1.608-4.235-2.55-6.46,1.68a8.643,8.643,0,0,0,2.563.429,7.111,7.111,0,0,0,2.605-.611,13.26,13.26,0,0,0,1.326-.613,6.222,6.222,0,0,0-3.833-.582,4.639,4.639,0,0,1,3.149-.037,4.108,4.108,0,0,1,1.094.462c-.013-.031-.03-.062-.044-.094a3.476,3.476,0,0,0,1.56,1.289A7.449,7.449,0,0,1,287.326,9a10.83,10.83,0,0,1-.684-4.781A13.108,13.108,0,0,0,288.1,9.9a22.242,22.242,0,0,0,.217-6.138A22.381,22.381,0,0,0,287.332,0Z"
							transform="translate(-279.625 0.001)"
						/>
					</clipPath>
					<linearGradient
						id="at-time-line"
						x1={-5.12}
						y1={6.52}
						x2={-5.101}
						y2={6.52}
						xlinkHref="#t-time-line"
					/>
					<clipPath id="au-time-line">
						<path
							className="c-time-line"
							d="M280.365,7.928a9.712,9.712,0,0,0,3.467,2.077,9.24,9.24,0,0,0-2.513-3.449,5.759,5.759,0,0,1,2.312,2.434,6.336,6.336,0,0,1,.589,1.213c.338-2.134-.631-5.315-5.415-5.389a8.918,8.918,0,0,0,1.56,3.114"
							transform="translate(-278.805 -4.814)"
						/>
					</clipPath>
					<linearGradient
						id="av-time-line"
						x1={-9.294}
						y1={11.428}
						x2={-9.26}
						y2={11.428}
						xlinkHref="#t-time-line"
					/>
					<clipPath id="aw-time-line">
						<path
							className="c-time-line"
							d="M129.115,237.6c-3.123-.485-7.023.493-8.5,5a25.233,25.233,0,0,0,4.921-.38,21.061,21.061,0,0,0,6.485-2.838,17.25,17.25,0,0,0-7.248.649,12,12,0,0,1,5.7-1.155,11.082,11.082,0,0,1,2.2.172A6.831,6.831,0,0,0,130.1,237.8c.057.005.114.011.169.014a7.458,7.458,0,0,1-1.305-1.067,7.123,7.123,0,0,1-2.237-3.62,10.624,10.624,0,0,0,3.406,4.155,13.776,13.776,0,0,0-1.543-4.919,16.365,16.365,0,0,0-2.251-2.744c-3.009,3.952.1,7.127,2.774,7.974"
							transform="translate(-120.619 -229.622)"
						/>
					</clipPath>
					<linearGradient
						id="ax-time-line"
						x1={-1.647}
						y1={1.757}
						x2={-1.632}
						y2={1.757}
						xlinkHref="#t-time-line"
					/>
					<clipPath id="ay-time-line">
						<path
							className="c-time-line"
							d="M104.072,227.017c-3.081-.188-6.778,1.17-7.731,5.816a23.9,23.9,0,0,0,4.757-.841,19.608,19.608,0,0,0,5.972-3.462,16.243,16.243,0,0,0-6.956,1.341,11.387,11.387,0,0,1,5.409-1.7,10.339,10.339,0,0,1,2.146-.038,6.491,6.491,0,0,0-2.624-1c.055,0,.11,0,.163,0a7.387,7.387,0,0,1-1.375-.946,7.22,7.22,0,0,1-2.532-3.416,10.617,10.617,0,0,0,3.72,3.842,14.571,14.571,0,0,0-1.987-4.793,16.14,16.14,0,0,0-2.441-2.531c-2.565,4.268.8,7.144,3.479,7.735"
							transform="translate(-96.341 -219.282)"
						/>
					</clipPath>
					<linearGradient
						id="az-time-line"
						x1={-1.281}
						y1={1.913}
						x2={-1.266}
						y2={1.913}
						xlinkHref="#t-time-line"
					/>
					<clipPath id="ba-time-line">
						<path
							className="c-time-line"
							d="M74.135,209.278c-3.445,3.782-.89,7.083,1.58,8.048a7.728,7.728,0,0,0-8.94,4.587,24.128,24.128,0,0,0,4.815-.158,22.684,22.684,0,0,0,6.7-2.526,16.583,16.583,0,0,0-7.12.315,12.116,12.116,0,0,1,5.693-.888,10.259,10.259,0,0,1,2.114.271,5.91,5.91,0,0,0-2.332-1.352c.055.008.11.017.164.022a6.329,6.329,0,0,1-1.115-1.119,6.48,6.48,0,0,1-1.662-3.7,9.229,9.229,0,0,0,2.72,4.285,13.088,13.088,0,0,0-.81-4.955,14.283,14.283,0,0,0-1.806-2.832"
							transform="translate(-66.775 -209.278)"
						/>
					</clipPath>
					<linearGradient
						id="bb-time-line"
						x1={-0.85}
						y1={2.076}
						x2={-0.835}
						y2={2.076}
						xlinkHref="#t-time-line"
					/>
					<clipPath id="bc-time-line">
						<path
							className="c-time-line"
							d="M51.5,204.888c-2.7-1.045-6.642-.844-9.672,3.219a22.28,22.28,0,0,0,4.638.531,17.81,17.81,0,0,0,4.692-.755c1.375-.379,2.394-.758,2.385-.758a15.85,15.85,0,0,0-6.944-.72,12.021,12.021,0,0,1,5.7-.046,9.524,9.524,0,0,1,1.986.571,5.251,5.251,0,0,0-1.947-1.662c.054.017.107.034.161.047a5.519,5.519,0,0,1-.816-1.258,6.23,6.23,0,0,1-.757-3.87,8.406,8.406,0,0,0,1.644,4.6,12.692,12.692,0,0,0,.352-4.967,12.981,12.981,0,0,0-1.124-3.047c-4.131,3.184-2.453,6.81-.3,8.117"
							transform="translate(-41.829 -196.771)"
						/>
					</clipPath>
					<linearGradient
						id="bd-time-line"
						x1={-0.509}
						y1={2.34}
						x2={-0.493}
						y2={2.34}
						xlinkHref="#t-time-line"
					/>
					<clipPath id="be-time-line">
						<path
							className="c-time-line"
							d="M32.323,190.086c-2.345-1.435-6.141-1.835-9.918,1.75a19.176,19.176,0,0,0,4.254,1.2,19.107,19.107,0,0,0,5.392-.159c1.017-.148,1.72-.295,1.714-.295a14.43,14.43,0,0,0-6.46-1.733s.091-.017.256-.034a12.081,12.081,0,0,1,5.186.83,8.506,8.506,0,0,1,1.775.854,4.7,4.7,0,0,0-1.5-1.924c.051.026.1.051.152.074a5.073,5.073,0,0,1-.5-1.359,6.45,6.45,0,0,1,.128-3.923,8.254,8.254,0,0,0,.558,4.773,13.133,13.133,0,0,0,1.435-4.828,12.391,12.391,0,0,0-.435-3.17c-4.6,2.492-3.811,6.334-2.044,7.942"
							transform="translate(-22.405 -182.144)"
						/>
					</clipPath>
					<linearGradient
						id="bf-time-line"
						x1={-0.23}
						y1={2.652}
						x2={-0.214}
						y2={2.652}
						xlinkHref="#t-time-line"
					/>
					<clipPath id="bg-time-line">
						<path
							className="c-time-line"
							d="M18.688,173.369c-1.908-1.785-5.411-2.777-9.706.222a15.926,15.926,0,0,0,3.706,1.838c2.392.872,6.825.619,6.814.619a12.8,12.8,0,0,0-5.723-2.694,10.025,10.025,0,0,1,4.963,1.615,7.5,7.5,0,0,1,1.5,1.111,4.371,4.371,0,0,0-1-2.131c.045.035.089.07.135.1a5.069,5.069,0,0,1-.177-1.419,7,7,0,0,1,.946-3.858,8.69,8.69,0,0,0-.478,4.8,14.011,14.011,0,0,0,2.385-4.542,12.383,12.383,0,0,0,.225-3.2c-4.862,1.725-4.913,5.674-3.583,7.531"
							transform="translate(-8.982 -165.838)"
						/>
					</clipPath>
					<linearGradient
						id="bh-time-line"
						x1={-0.039}
						y1={2.908}
						x2={-0.023}
						y2={2.908}
						xlinkHref="#t-time-line"
					/>
					<clipPath id="bi-time-line">
						<path
							className="c-time-line"
							d="M10.715,155.249c-1.424-2.082-4.514-3.641-9.094-1.318a13.526,13.526,0,0,0,3.045,2.418c2.032,1.241,6.254,1.674,6.248,1.673a11.485,11.485,0,0,0-4.8-3.572,8.863,8.863,0,0,1,4.311,2.384,6.777,6.777,0,0,1,1.178,1.335,4.317,4.317,0,0,0-.505-2.275c.036.044.072.088.111.127a5.392,5.392,0,0,1,.124-1.435,7.618,7.618,0,0,1,1.66-3.674A9.522,9.522,0,0,0,11.58,155.6a14.876,14.876,0,0,0,3.165-4.118,12.723,12.723,0,0,0,.824-3.126c-4.918.906-5.732,4.847-4.855,6.9"
							transform="translate(-1.621 -148.352)"
						/>
					</clipPath>
					<linearGradient
						id="bj-time-line"
						x1={0.059}
						y1={3.216}
						x2={0.075}
						y2={3.216}
						xlinkHref="#t-time-line"
					/>
					<clipPath id="bk-time-line">
						<path
							className="c-time-line"
							d="M8.166,136.274c-.926-2.315-3.519-4.4-8.166-2.824a12.467,12.467,0,0,0,2.327,2.925c1.623,1.573,5.475,2.678,5.474,2.676a10.825,10.825,0,0,0-3.766-4.342,8.071,8.071,0,0,1,3.544,3.081,6.555,6.555,0,0,1,.837,1.517,4.472,4.472,0,0,0-.025-2.348c.025.051.051.1.079.148a5.948,5.948,0,0,1,.394-1.408,8.045,8.045,0,0,1,2.244-3.379A10.383,10.383,0,0,0,8.9,136.744a15.291,15.291,0,0,0,3.753-3.569,13.06,13.06,0,0,0,1.34-2.96c-4.8.055-6.263,3.876-5.83,6.059"
							transform="translate(0 -130.215)"
						/>
					</clipPath>
					<linearGradient
						id="bl-time-line"
						x1={0.071}
						y1={3.614}
						x2={0.088}
						y2={3.614}
						xlinkHref="#t-time-line"
					/>
					<clipPath id="bm-time-line">
						<path
							className="c-time-line"
							d="M10.516,116.7c-.444-2.476-2.5-5.018-7.02-4.245A12.772,12.772,0,0,0,5.1,115.8c1.2,1.857,4.562,3.6,4.566,3.6a10.922,10.922,0,0,0-2.7-4.981A7.842,7.842,0,0,1,9.692,118.1a6.723,6.723,0,0,1,.5,1.654,4.706,4.706,0,0,0,.411-2.346c.014.055.029.109.046.161a6.437,6.437,0,0,1,.621-1.338,8.029,8.029,0,0,1,2.686-2.981,10.872,10.872,0,0,0-2.839,4.03,15.017,15.017,0,0,0,4.145-2.911,13.116,13.116,0,0,0,1.761-2.7,7.175,7.175,0,0,0-1.251-.114,5.2,5.2,0,0,0-5.252,5.152"
							transform="translate(-3.496 -111.55)"
						/>
					</clipPath>
					<linearGradient
						id="bn-time-line"
						x1={-0.001}
						y1={4.161}
						x2={0.017}
						y2={4.161}
						xlinkHref="#t-time-line"
					/>
					<clipPath id="bo-time-line">
						<path
							className="c-time-line"
							d="M12.195,91.577c.781,2.084,3.59,4.414,3.6,4.41a11.657,11.657,0,0,0-1.655-5.468,8.2,8.2,0,0,1,1.9,4.176,7.233,7.233,0,0,1,.179,1.74A4.859,4.859,0,0,0,17,94.17c0,.055.007.109.013.161a6.662,6.662,0,0,1,.8-1.228A7.526,7.526,0,0,1,20.8,90.61a10.709,10.709,0,0,0-3.3,3.514,14.068,14.068,0,0,0,4.352-2.166,12.679,12.679,0,0,0,2.082-2.367,4.9,4.9,0,0,0-6.893,3.866c0-2.559-1.5-5.485-5.764-5.539a14.405,14.405,0,0,0,.918,3.658"
							transform="translate(-11.277 -87.919)"
						/>
					</clipPath>
					<linearGradient
						id="bp-time-line"
						x1={-0.123}
						y1={4.667}
						x2={-0.106}
						y2={4.667}
						xlinkHref="#t-time-line"
					/>
					<clipPath id="bq-time-line">
						<path
							className="c-time-line"
							d="M22.693,65.931a14.727,14.727,0,0,0,2.634,5.089,12.689,12.689,0,0,0-.7-5.788,9.02,9.02,0,0,1,1.129,4.541,7.773,7.773,0,0,1-.108,1.773,4.818,4.818,0,0,0,1.083-2.11c-.005.05-.01.1-.012.15a6.439,6.439,0,0,1,.931-1.08,6.661,6.661,0,0,1,3.161-1.929A9.829,9.829,0,0,0,27.2,69.467a12.671,12.671,0,0,0,4.4-1.354,11.8,11.8,0,0,0,2.309-1.957c-3.7-2.424-6.371.372-7.033,2.566a5.6,5.6,0,0,0-4.492-6.654,16.917,16.917,0,0,0,.306,3.863"
							transform="translate(-22.374 -62.068)"
						/>
					</clipPath>
					<linearGradient
						id="br-time-line"
						x1={-0.282}
						y1={5.107}
						x2={-0.264}
						y2={5.107}
						xlinkHref="#t-time-line"
					/>
					<clipPath id="bs-time-line">
						<path
							className="c-time-line"
							d="M35.182,42.138a16.666,16.666,0,0,0,1.731,5.613,13.515,13.515,0,0,0,.147-5.933,9.988,9.988,0,0,1,.431,4.766,8.128,8.128,0,0,1-.353,1.753,4.54,4.54,0,0,0,1.3-1.887c-.01.044-.021.088-.029.131a5.8,5.8,0,0,1,1.019-.9,5.724,5.724,0,0,1,3.228-1.307,8.534,8.534,0,0,0-3.781,2.18,11.279,11.279,0,0,0,4.321-.5,10.612,10.612,0,0,0,2.453-1.487c-3.208-3.133-6.05-.887-6.97,1.177A6.2,6.2,0,0,0,35.4,38.188a19.679,19.679,0,0,0-.216,3.95"
							transform="translate(-35.167 -38.188)"
						/>
					</clipPath>
					<linearGradient
						id="bt-time-line"
						x1={-0.496}
						y1={5.61}
						x2={-0.477}
						y2={5.61}
						xlinkHref="#t-time-line"
					/>
					<clipPath id="bu-time-line">
						<path
							className="c-time-line"
							d="M48.836,20.923a19.389,19.389,0,0,0,.918,5.966,13.732,13.732,0,0,0,.863-5.9,10.718,10.718,0,0,1-.173,4.848,8.018,8.018,0,0,1-.556,1.679,4.051,4.051,0,0,0,1.458-1.609c-.013.037-.027.074-.039.111a6.112,6.112,0,0,1,4.283-1.336,7.2,7.2,0,0,0-3.842,1.4s.4.119.994.238a8.122,8.122,0,0,0,3.156.129,9.449,9.449,0,0,0,2.53-.973c-2.708-3.74-5.632-2.122-6.757-.256A6.938,6.938,0,0,0,49.478,17a21.913,21.913,0,0,0-.642,3.918"
							transform="translate(-48.81 -17.005)"
						/>
					</clipPath>
					<linearGradient
						id="bv-time-line"
						x1={-0.734}
						y1={6.089}
						x2={-0.715}
						y2={6.089}
						xlinkHref="#t-time-line"
					/>
					<clipPath id="bw-time-line">
						<path
							className="c-time-line"
							d="M65.487,4.22h0M64.8,0a22.4,22.4,0,0,0-.982,3.766A22.257,22.257,0,0,0,64.032,9.9a13.1,13.1,0,0,0,1.455-5.681A10.822,10.822,0,0,1,64.8,9a7.44,7.44,0,0,1-.719,1.555,3.479,3.479,0,0,0,1.561-1.289c-.015.031-.031.062-.045.094A4.108,4.108,0,0,1,66.695,8.9a4.639,4.639,0,0,1,3.149.037,6.222,6.222,0,0,0-3.833.582,13.211,13.211,0,0,0,1.325.613,7.114,7.114,0,0,0,2.606.611,8.64,8.64,0,0,0,2.562-.429c-2.225-4.23-5.179-3.288-6.459-1.68A7.546,7.546,0,0,0,64.8,0Z"
							transform="translate(-63.666 0.001)"
						/>
					</clipPath>
					<linearGradient
						id="bx-time-line"
						x1={-1.01}
						y1={6.52}
						x2={-0.991}
						y2={6.52}
						xlinkHref="#t-time-line"
					/>
					<clipPath id="by-time-line">
						<path
							className="c-time-line"
							d="M77.169,10.2a6.328,6.328,0,0,1,.589-1.213A5.76,5.76,0,0,1,80.07,6.556a9.247,9.247,0,0,0-2.513,3.449,9.712,9.712,0,0,0,3.467-2.077,8.929,8.929,0,0,0,1.56-3.114C77.8,4.889,76.831,8.07,77.169,10.2"
							transform="translate(-77.108 -4.814)"
						/>
					</clipPath>
					<linearGradient
						id="bz-time-line"
						x1={-2.438}
						y1={11.428}
						x2={-2.404}
						y2={11.428}
						xlinkHref="#t-time-line"
					/>
					<clipPath id="ca-time-line">
						<path
							className="c-time-line"
							d="M32.635,272.265l-.878,7.757c-.5,3.772,18.73,6.37,18.944,2.338.271-5.119,1.382-14.238,1.382-14.238Z"
							transform="translate(-31.748 -268.121)"
						/>
					</clipPath>
					<linearGradient
						id="cb-time-line"
						x1={-0.383}
						y1={1.019}
						x2={-0.37}
						y2={1.019}
						gradientUnits="objectBoundingBox">
						<stop offset={0} stopColor="#543913" />
						<stop offset={0.385} stopColor="#735626" />
						<stop offset={1} stopColor="#ad8d4a" />
					</linearGradient>
					<clipPath id="cc-time-line">
						<path
							className="c-time-line"
							d="M48.846,315.166c0,3.028,9.339,3.076,9.457,1.806l.584-6.322-9.425-.268Z"
							transform="translate(-48.846 -310.382)"
						/>
					</clipPath>
					<linearGradient
						id="cd-time-line"
						x1={-1.296}
						y1={0.938}
						x2={-1.269}
						y2={0.938}
						gradientUnits="objectBoundingBox">
						<stop offset={0} stopColor="#ad8d4a" />
						<stop offset={0.615} stopColor="#735626" />
						<stop offset={1} stopColor="#543913" />
					</linearGradient>
					<clipPath id="ce-time-line">
						<path
							className="c-time-line"
							d="M50.227,282.6,48.846,293.33c1.222-4.516,14.4-3.241,14.4-1.806l1-10.909Z"
							transform="translate(-48.846 -280.615)"
						/>
					</clipPath>
					<linearGradient
						id="cf-time-line"
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
					<clipPath id="cg-time-line">
						<path
							className="c-time-line"
							d="M269.135,282.359c.214,4.032,19.445,1.435,18.944-2.338l-.878-7.757-19.447-4.144s1.11,9.12,1.382,14.238"
							transform="translate(-267.754 -268.121)"
						/>
					</clipPath>
					<linearGradient
						id="ch-time-line"
						x1={-3.425}
						y1={1.019}
						x2={-3.413}
						y2={1.019}
						xlinkHref="#cb-time-line"
					/>
					<clipPath id="ci-time-line">
						<path
							className="c-time-line"
							d="M289.29,310.65l.584,6.322c.118,1.27,9.458,1.222,9.457-1.806l-.616-4.784Z"
							transform="translate(-289.29 -310.382)"
						/>
					</clipPath>
					<linearGradient
						id="cj-time-line"
						x1={-7.676}
						y1={0.938}
						x2={-7.649}
						y2={0.938}
						xlinkHref="#cd-time-line"
					/>
					<clipPath id="ck-time-line">
						<path
							className="c-time-line"
							d="M269.624,287.624c0-1.435,13.176-2.71,14.4,1.806L282.64,278.7l-14.22-3.4Z"
							transform="translate(-268.42 -275.298)"
						/>
					</clipPath>
					<linearGradient
						id="cl-time-line"
						x1={-4.584}
						y1={1.183}
						x2={-4.567}
						y2={1.183}
						xlinkHref="#cf-time-line"
					/>
					<clipPath id="cm-time-line">
						<path
							className="c-time-line"
							d="M34.387,232.968c-1.511,3.68-2.6,17.214-2.6,17.214,2.033-7.65,41.612-7.438,41.612-7.438s39.579-.213,41.612,7.438c0,0-1.091-13.533-2.6-17.214-1.8-4.392-25.912-5.525-39.01-5.525s-37.206,1.133-39.009,5.525"
							transform="translate(-31.784 -227.443)"
						/>
					</clipPath>
					<linearGradient
						id="cn-time-line"
						x1={-0.102}
						y1={1.296}
						x2={-0.099}
						y2={1.296}
						xlinkHref="#t-time-line"
					/>
					<clipPath id="cp-time-line">
						<rect
							className="c-time-line"
							width={83.225}
							height={9.419}
						/>
					</clipPath>
					<clipPath id="cq-time-line">
						<path
							className="c-time-line"
							d="M73.4,277.434s-37.607-.2-41.383,6.877c-.148,1.536-.23,2.542-.23,2.542,2.033-7.65,41.612-7.438,41.612-7.438s39.579-.213,41.612,7.438c0,0-.081-1.006-.23-2.542C111,277.234,73.4,277.434,73.4,277.434"
							transform="translate(-31.785 -277.434)"
						/>
					</clipPath>
					<linearGradient
						id="cr-time-line"
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
					<clipPath id="cs-time-line">
						<path
							className="c-time-line"
							d="M344.075,312.157c0,.015.011.029.015.044s-.006-.075-.017-.212c0,.058,0,.113,0,.169"
							transform="translate(-344.073 -311.988)"
						/>
					</clipPath>
					<linearGradient
						id="ct-time-line"
						x1={-5293.231}
						y1={32.724}
						x2={-5277.848}
						y2={32.724}
						xlinkHref="#cr-time-line"
					/>
					<clipPath id="cv-time-line">
						<rect
							className="c-time-line"
							width={78.724}
							height={6.58}
						/>
					</clipPath>
					<clipPath id="cw-time-line">
						<path
							className="c-time-line"
							d="M79.592,229.424c12.124,0,34.648.972,39.362,4.6a9.977,9.977,0,0,0-.352-1.054c-1.8-4.392-25.912-5.525-39.01-5.525s-37.206,1.133-39.01,5.525a9.913,9.913,0,0,0-.353,1.054c4.714-3.627,27.238-4.6,39.362-4.6"
							transform="translate(-40.23 -227.443)"
						/>
					</clipPath>
					<linearGradient
						id="cx-time-line"
						x1={-0.136}
						y1={4.48}
						x2={-0.133}
						y2={4.48}
						xlinkHref="#cr-time-line"
					/>
					<clipPath id="cy-time-line">
						<path
							className="c-time-line"
							d="M31.785,312.2c0-.015.011-.029.015-.044,0-.055,0-.111,0-.169-.011.137-.018.212-.018.212"
							transform="translate(-31.785 -311.988)"
						/>
					</clipPath>
					<linearGradient
						id="cz-time-line"
						x1={-481.591}
						y1={32.724}
						x2={-466.439}
						y2={32.724}
						xlinkHref="#cr-time-line"
					/>
					<filter
						id="da-time-line"
						x={193.983}
						y={964.368}
						width={138}
						height={159}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="db" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="db" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="gl-time-line"
						x={59.983}
						y={1276.368}
						width={138}
						height={159}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="gm" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="gm" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="jw-time-line"
						x={330.983}
						y={1432.368}
						width={138}
						height={159}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="jx" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="jx" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="nh-time-line"
						x={194.983}
						y={1744.368}
						width={138}
						height={159}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="ni" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="ni" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="qs-time-line"
						x={193.983}
						y={496.368}
						width={138}
						height={159}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="qt" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="qt" />
						<feComposite in="SourceGraphic" />
					</filter>
					<pattern
						id="qu-time-line"
						width={1}
						height={1}
						viewBox="5.537 2.895 94.542 128.105">
						<image
							preserveAspectRatio="xMidYMid slice"
							width={105.617}
							height={131}
							xlinkHref="/images/mobile/rewards/reward-2.png"
						/>
					</pattern>
					<filter
						id="qv-time-line"
						x={57.983}
						y={496.368}
						width={138}
						height={159}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="qw" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="qw" />
						<feComposite in="SourceGraphic" />
					</filter>
					<pattern
						id="qx-time-line"
						width={1}
						height={1}
						viewBox="-3.521 -1.508 106.043 143.532">
						<image
							preserveAspectRatio="xMidYMid slice"
							width={99}
							height={140.516}
							xlinkHref="/images/mobile/rewards/reward-1.png"
						/>
					</pattern>
					<filter
						id="qy-time-line"
						x={57.983}
						y={808.368}
						width={138}
						height={159}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="qz" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="qz" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="uj-time-line"
						x={329.983}
						y={964.368}
						width={138}
						height={159}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="uk" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="uk" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="xu-time-line"
						x={193.983}
						y={1276.368}
						width={138}
						height={159}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="xv" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="xv" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="abf-time-line"
						x={58.983}
						y={1588.368}
						width={138}
						height={159}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="abg" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="abg" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="aeq-time-line"
						x={330.983}
						y={1744.368}
						width={138}
						height={159}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="aer" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="aer" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="aib-time-line"
						x={329.983}
						y={496.368}
						width={138}
						height={159}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="aic" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="aic" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="alm-time-line"
						x={193.983}
						y={808.368}
						width={138}
						height={159}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="aln" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="aln" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="aox-time-line"
						x={58.983}
						y={1120.368}
						width={138}
						height={159}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="aoy" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="aoy" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="asi-time-line"
						x={329.983}
						y={1276.368}
						width={138}
						height={159}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="asj" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="asj" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="avt-time-line"
						x={194.983}
						y={1588.368}
						width={138}
						height={159}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="avu" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="avu" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="aze-time-line"
						x={58.983}
						y={1900.368}
						width={138}
						height={159}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="azf" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="azf" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="bcp-time-line"
						x={57.983}
						y={652.368}
						width={138}
						height={159}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="bcq" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="bcq" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="bga-time-line"
						x={329.983}
						y={808.368}
						width={138}
						height={159}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="bgb" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="bgb" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="bjl-time-line"
						x={194.983}
						y={1120.368}
						width={138}
						height={159}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="bjm" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="bjm" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="bmw-time-line"
						x={59.983}
						y={1432.368}
						width={138}
						height={159}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="bmx" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="bmx" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="bqh-time-line"
						x={330.983}
						y={1588.368}
						width={138}
						height={159}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="bqi" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="bqi" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="bts-time-line"
						x={194.983}
						y={1900.368}
						width={138}
						height={159}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="btt" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="btt" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="bxd-time-line"
						x={193.983}
						y={652.368}
						width={138}
						height={159}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="bxe" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="bxe" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="cao-time-line"
						x={57.983}
						y={964.368}
						width={138}
						height={159}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="cap" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="cap" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="cdz-time-line"
						x={330.983}
						y={1120.368}
						width={138}
						height={159}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="cea" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="cea" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="chk-time-line"
						x={193.983}
						y={1432.368}
						width={138}
						height={159}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="chl" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="chl" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="ckv-time-line"
						x={58.983}
						y={1744.368}
						width={138}
						height={159}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="ckw" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="ckw" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="cog-time-line"
						x={330.983}
						y={1900.368}
						width={138}
						height={159}
						filterUnits="userSpaceOnUse">
						<feOffset dy={3} />
						<feGaussianBlur stdDeviation={3} result="coh" />
						<feFlood floodOpacity={0.4} />
						<feComposite operator="in" in2="coh" />
						<feComposite in="SourceGraphic" />
					</filter>
				</defs>
				<g transform="translate(9)">
					<g
						className="d-time-line"
						transform="translate(234.983 56)">
						<rect
							className="a-time-line"
							width={414}
							height={2095}
							transform="translate(-187.5 -56)"
						/>
						<g transform="translate(-187.5 -53.595)">
							<g
								className="e-time-line"
								transform="translate(-0.499 -2)">
								<path
									className="f-time-line"
									d="M278,1953.27v193.312h72.081c-5.361-3.562-9.9-9.294-13.161-16.625a63.59,63.59,0,0,1-5.181-25.654v-86.936c0-18.541-7.377-35.13-18.793-42.263Z"
									transform="translate(-277.502 -53.765)"
								/>
								<path
									className="f-time-line"
									d="M1818.824,1992.6l-281.891-103.807-.089-.032c-45.5-16.76-74.9-55.738-74.9-99.3V1640.657h-1.234v148.806c0,21.524,7.139,42.365,20.648,60.273,13,17.225,31.09,30.691,52.454,39.06q1.269.5,2.554.973l281.976,103.839Z"
									transform="translate(-1461.819 -1178.021)"
								/>
								<path
									className="g-time-line"
									d="M0,2135.375l364.517,134.234.115.042c58.833,21.672,96.848,72.075,96.848,128.406v192.422h1.6V2398.056c0-27.833-9.232-54.782-26.7-77.939-16.8-22.273-40.2-39.686-67.829-50.508q-1.641-.646-3.3-1.258L.618,2134.075Z"
									transform="translate(-255.827 -774.835)"
								/>
								<path
									className="g-time-line"
									d="M1238,2429.121,1430.854,2511l70.353,29.868.083.034c42.481,18.042,69.931,60,69.931,106.894v160.185h1.152V2647.794a118.166,118.166,0,0,0-19.279-64.882,115.013,115.013,0,0,0-48.977-42.047q-1.185-.538-2.384-1.048l-263.286-111.779Z"
									transform="translate(-1256.961 -1417.147)"
								/>
								<path
									className="f-time-line"
									d="M1693.409,2333.659,1606.1,2518.83l-.027.058c-14.1,29.887-46.879,49.2-83.519,49.2H1397.4v0h-10.416a99.845,99.845,0,0,0-50.694,13.563c-15.062,8.874-26.7,21.369-33.668,36.134l-41.88,88.8L1238,2754.8l.845.311,21.469-45.526,43.147-91.486c14.1-29.886,46.877-49.2,83.517-49.2h135.574a99.835,99.835,0,0,0,50.694-13.564,83.955,83.955,0,0,0,32.852-34.456q.419-.833.818-1.677l87.337-185.226Z"
									transform="translate(-1258.879 -604.942)"
								/>
								<path
									className="f-time-line"
									d="M1622.2,0,1504.738,249.123l-.036.079c-18.965,40.208-63.07,66.188-112.363,66.188H1223.957v0h-14.013a134.322,134.322,0,0,0-68.2,18.248c-20.264,11.939-35.926,28.749-45.3,48.613L1040.1,501.726l-30.588,64.858,1.137.419,28.884-61.249,58.047-123.081c18.965-40.208,63.066-66.192,112.359-66.192h182.395a134.312,134.312,0,0,0,68.2-18.248c19.491-11.484,34.728-27.475,44.2-46.356q.564-1.121,1.1-2.257L1623.337.426Z"
									transform="translate(-1098.563 110.069)"
								/>
								<path
									className="b-time-line"
									d="M2202.014,1820.84H2115.7c-43.65,0-79.034-37.021-79.034-82.689V1590.77h89.585c41.843,0,75.763,35.489,75.763,79.267Z"
									transform="translate(-1714.13 -834.501)"
								/>
								<path
									className="h-time-line"
									d="M597.981,453.3l-8.16,17.3c-14.568,30.89-48.45,50.85-86.318,50.85H259.215v.836H503.5A103.193,103.193,0,0,0,555.9,508.271,88.879,88.879,0,0,0,585,481.032a79.465,79.465,0,0,0,5.7-10.107l8.312-17.624Z"
									transform="translate(-373.903 -499.776)"
								/>
								<path
									className="b-time-line"
									d="M312.653,724.35,364.82,613.712c14.568-30.89,48.45-50.85,86.318-50.85H772.059v-.836H451.138a103.2,103.2,0,0,0-52.394,14.018c-15.567,9.171-27.6,22.085-34.8,37.346l-52.211,110.73.917.229"
									transform="translate(-347.227 -553.949)"
								/>
							</g>
						</g>
					</g>
					<g transform="translate(47.483 -39)">
						{carouselItemsMobile[carouselSlider].text(
							handleAddCarouselSlider,
							handleLessCarouselSlider
						)}
						<text
							className="r-time-line"
							transform="translate(42.813 137.21)">
							<tspan x={82.621} y={21}>
								{'Certificaciones'}
							</tspan>
						</text>
					</g>
					<g transform="translate(82.983 -630.632)">
						<Reward6Mobile />
						<Reward11Mobile/>
						<Reward16Mobile />
						<Reward21Mobile />
						<Reward26Mobile />
						<Reward1Mobile />
						<Reward2Mobile />
						<Reward7Mobile />
						<Reward12Mobile />
						<Reward17Mobile/>
						<Reward22Mobile />
						<Reward27Mobile />
						<Reward3Mobile />
						<Reward8Mobile />
						<Reward13Mobile/>
						<Reward18Mobile />
						<Reward23Mobile />
						<Reward28Mobile />
						<Reward4Mobile />
						<Reward9Mobile />
						<Reward14Mobile/>
						<Reward19Mobile/>
						<Reward24Mobile />
						<Reward29Mobile />
						<Reward5Mobile />
						<Reward10Mobile />
						<Reward15Mobile/>
						<Reward20Mobile />
						<Reward25Mobile />
						<Reward30Mobile />
						<text
							className="r-time-line"
							transform="translate(-25 1080.632)">
							<tspan x={47.533} y={21}>
								{'Premios y reconocimientos'}
							</tspan>
						</text>
					</g>
				</g>
			</svg>
		</React.Fragment>
	)
}

export default ReconocimientosMobile
