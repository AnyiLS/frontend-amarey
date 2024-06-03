import { useLanguage } from 'context/language'
import React from 'react'
import { useTranslation } from 'react-i18next'

const Footer: React.FC = (): JSX.Element => {
	const {t} = useTranslation()
	const { selectedLanguage } = useLanguage()
	return (
		<div>
			<svg viewBox="0 0 1920 318.202" xmlns="http://www.w3.org/2000/svg">
				<defs>
					<style>
						{
							'g,rect,path{stroke: none;}.a-5,.b-5,.d-5,.j-5{fill:#fff;}.b-5{stroke:#707070;}.c-5{fill:#001f5f;}.d-5,.j-5{font-size:12px;font-family:Silka-Regular, Silka;}.e{clip-path:url(#a-5);}.f-5{clip-path:url(#b-5);}.g-5{fill: #000;}.h-5,.j-5{text-decoration:underline;}.i-5{font-size:10px;}'
						}
					</style>
					<clipPath id="a-5">
						<rect
							className="a-5"
							width={294}
							height={83}
							transform="translate(0.044 -0.428)"
						/>
					</clipPath>
					<clipPath id="b-5-footer">
						<path d="M588.257,0H0V445.777H901.844l-115.6-302.531C753.117,56.546,674.961,0,588.257,0" />
					</clipPath>
					<pattern
						id="c-5"
						width={1}
						height={1}
						viewBox="-300.59 44.34 1262.937 624.263">
						<image
							preserveAspectRatio="xMidYMid slice"
							width={901.844}
							height={546.539}
							xlinkHref="/images/mapa.png"
						/>
					</pattern>
				</defs>

				<path className="c-5" d="M0,0H1920V318.2H0Z" />

				<text className="d-5" transform="translate(605 96)">
					<tspan x={262.478} y={11}>
						{t('Carrera 7 # 99-53, pisos 19 y 20')}
					</tspan>
					<tspan x={354.5} y={20} />
					<tspan x={selectedLanguage === 'es' ? 180.056 : 210.056} y={29}>
						{
							t('L\xEDnea de atenci\xF3n al cliente 018000 180066 - (601) 7447300')
						}
					</tspan>
					<tspan x={354.5} y={38} />
					<tspan x={selectedLanguage === 'es' ? 137.12 : 157.12} y={47}>
						{
							t('Reporte de eventos adversos o PQR: servicioalcliente@grupoamarey.c-5om')
						}
					</tspan>
					<tspan x={354.5} y={56} />
					<tspan x={selectedLanguage === 'es' ? 228.41 : 248.41} y={65}>
						{t('Línea ética: linea.etica@grupoamarey.c-5om')}
					</tspan>
				</text>
				<a href="https://facebook.com/GrupoAmarey/" target='_blank' rel='noreferrer'>
				<path
					className="a-5 cursor-pointer"
					d="M31.751,65.1l1.188-7.749H25.5v-5.03c0-2.12,1.039-4.186,4.369-4.186h3.382v-6.6a41.238,41.238,0,0,0-6-.524c-6.124,0-10.127,3.712-10.127,10.431v5.907H10.318V65.1h6.807V83.831a27.114,27.114,0,0,0,8.379,0V65.1Z"
					transform="translate(1486.158 173.371)"
				/>
				</a>
				<a href="https://www.instagram.com/grupoamarey" target='_blank' rel='noreferrer'>
				<g transform="translate(1561.764 214.595)">
					
						<path
						className="a-5 cursor-pointer"
						d="M76.8,45.007c5.7,0,6.379.022,8.632.124a11.8,11.8,0,0,1,3.966.735,7.072,7.072,0,0,1,4.053,4.053,11.812,11.812,0,0,1,.735,3.966c.1,2.253.126,2.929.126,8.632s-.023,6.379-.126,8.632a11.8,11.8,0,0,1-.735,3.966,7.072,7.072,0,0,1-4.053,4.053,11.792,11.792,0,0,1-3.966.737c-2.253.1-2.927.124-8.632.124s-6.379-.022-8.632-.124A11.793,11.793,0,0,1,64.2,79.17a7.072,7.072,0,0,1-4.053-4.053,11.8,11.8,0,0,1-.735-3.966c-.1-2.253-.126-2.927-.126-8.632s.023-6.379.126-8.632a11.812,11.812,0,0,1,.735-3.966A7.072,7.072,0,0,1,64.2,45.867a11.8,11.8,0,0,1,3.966-.735c2.253-.1,2.929-.124,8.632-.124m0-3.849c-5.8,0-6.529.025-8.807.129a15.65,15.65,0,0,0-5.185.993,10.921,10.921,0,0,0-6.247,6.247,15.65,15.65,0,0,0-.993,5.185c-.1,2.279-.129,3.006-.129,8.807s.025,6.529.129,8.807a15.65,15.65,0,0,0,.993,5.185A10.91,10.91,0,0,0,62.8,82.757a15.684,15.684,0,0,0,5.185.994c2.278.1,3.006.127,8.807.127s6.529-.025,8.807-.127a15.684,15.684,0,0,0,5.185-.994,10.91,10.91,0,0,0,6.247-6.247,15.65,15.65,0,0,0,.993-5.185c.1-2.278.129-3.006.129-8.807s-.025-6.528-.129-8.807a15.65,15.65,0,0,0-.993-5.185,10.922,10.922,0,0,0-6.247-6.247,15.65,15.65,0,0,0-5.185-.993c-2.278-.1-3.006-.129-8.807-.129"
						transform="translate(-55.435 -41.158)"
					/>
					
					<path
						className="a-5 cursor-pointer"
						d="M73.585,48.34A10.969,10.969,0,1,0,84.554,59.309,10.968,10.968,0,0,0,73.585,48.34m0,18.088a7.12,7.12,0,1,1,7.12-7.12,7.12,7.12,0,0,1-7.12,7.12"
						transform="translate(-52.224 -37.948)"
					/>
					<path
						className="a-5 cursor-pointer"
						d="M81.43,48.832a2.563,2.563,0,1,1-2.563-2.563,2.563,2.563,0,0,1,2.563,2.563"
						transform="translate(-46.106 -38.873)"
					/>
				</g>
				</a>

				<a href="https://es.linkedin.com/company/grupo-amarey" target='_blank' rel='noreferrer'>
				<g transform="translate(1642.894 215.435)">
					<path
						className="a-5 cursor-pointer"
						d="M129.729,55.067c.57-.641,1.04-1.291,1.626-1.844a8.922,8.922,0,0,1,6.416-2.532,14.816,14.816,0,0,1,4.036.492,7.887,7.887,0,0,1,5.6,5.89,24.621,24.621,0,0,1,.745,6.749c.009,4.8-.013,9.593,0,14.388,0,.45-.124.567-.567.564q-3.705-.03-7.413,0c-.434,0-.528-.13-.527-.541q.02-6.846,0-13.692a12.327,12.327,0,0,0-.4-3.4,3.821,3.821,0,0,0-4.2-2.978c-2.93.155-4.454,1.6-4.827,4.584a16.818,16.818,0,0,0-.13,2.142c0,4.438,0,8.878.012,13.316,0,.443-.11.573-.561.569q-3.733-.033-7.467,0c-.4,0-.515-.1-.514-.508q.015-13.182,0-26.364c0-.434.142-.535.553-.533q3.545.026,7.091,0c.434,0,.547.137.538.548-.025,1.051-.009,2.1-.009,3.152"
						transform="translate(-107.004 -37.737)"
					/>
					<path
						className="a-5 cursor-pointer"
						d="M120.484,64.9c0,4.347-.007,8.7.01,13.042,0,.483-.119.629-.618.624-2.47-.027-4.94-.02-7.41,0-.4,0-.515-.1-.515-.506q.017-13.2,0-26.406c0-.365.088-.495.475-.492,2.506.016,5.011.02,7.518,0,.482,0,.547.182.546.595q-.017,6.575-.007,13.15"
						transform="translate(-111.298 -37.528)"
					/>
					<path
						className="a-5 cursor-pointer"
						d="M121.368,46.647a4.934,4.934,0,1,1-4.926-4.908,4.951,4.951,0,0,1,4.926,4.908"
						transform="translate(-111.5 -41.739)"
					/>
				</g>
				</a>
				<g transform="translate(1435.956 98.428)">
					<g className="e-5" transform="translate(0 0)">
						<path
							className="a-5"
							d="M49.015,52.9,60.636,68.721a.441.441,0,0,1,.083.254l.066,12.383a.434.434,0,0,1-.431.434l-1.728.008a.431.431,0,0,1-.434-.429l-.023-4.392-6.247.031.023,4.394a.432.432,0,0,1-.431.434l-1.728.008a.429.429,0,0,1-.432-.429l-.059-11.377a.43.43,0,0,1,.429-.434l1.728-.01a.434.434,0,0,1,.434.431l.023,4.392,6.247-.031-.025-4.7L47.579,55.324,38.6,55.37,28.2,69.847l.023,4.7,6.249-.033-.023-4.392a.43.43,0,0,1,.429-.434l1.728-.01a.432.432,0,0,1,.434.431L37.1,81.482a.433.433,0,0,1-.429.434l-1.728.008a.431.431,0,0,1-.434-.429L34.486,77.1l-6.247.033.023,4.394a.434.434,0,0,1-.431.434l-1.728.008a.433.433,0,0,1-.434-.429l-.064-12.383a.432.432,0,0,1,.081-.254L37.14,52.964a.436.436,0,0,1,.348-.18l11.177-.058a.429.429,0,0,1,.35.177m-18-12.933L12.32,34a.418.418,0,0,0-.266,0L.3,37.892a.432.432,0,0,0-.274.546l.541,1.641a.432.432,0,0,0,.546.274L5.28,38.975l1.962,5.932L3.071,46.285a.432.432,0,0,0-.274.546l.541,1.641a.434.434,0,0,0,.546.274l10.8-3.572a.431.431,0,0,0,.274-.546l-.541-1.641a.434.434,0,0,0-.546-.274L9.7,44.093,7.742,38.161l4.46-1.476,16.982,5.42,1.387,4.2L32,50.627,21.6,65.1l-4.461,1.474-1.961-5.932,4.171-1.378a.432.432,0,0,0,.274-.546l-.543-1.641a.431.431,0,0,0-.545-.274l-10.8,3.572a.432.432,0,0,0-.274.546L8,62.565a.432.432,0,0,0,.546.274l4.171-1.38,1.962,5.932-4.171,1.38a.432.432,0,0,0-.276.546l.543,1.641a.432.432,0,0,0,.546.274l11.756-3.889a.432.432,0,0,0,.216-.158L34.747,51.246a.428.428,0,0,0,.059-.388L31.3,40.247a.433.433,0,0,0-.279-.277m23.057-2.921,18.635-6.163a.428.428,0,0,0,.215-.158l7.227-10.056a.433.433,0,0,0-.1-.6l-1.4-1.008a.431.431,0,0,0-.6.1l-2.565,3.567L70.41,19.08l2.563-3.567a.431.431,0,0,0-.1-.6l-1.4-1.008a.429.429,0,0,0-.6.1l-6.64,9.238a.433.433,0,0,0,.1.6l1.4,1.008a.433.433,0,0,0,.6-.1L68.9,21.186l5.074,3.646-2.741,3.814-16.924,5.6L47.017,29l-.092-17.825,2.741-3.814,5.074,3.646-2.563,3.567a.431.431,0,0,0,.1.6l1.4,1.008a.431.431,0,0,0,.6-.1L60.92,6.85a.431.431,0,0,0-.1-.6l-1.4-1.008a.433.433,0,0,0-.6.1L56.251,8.9,51.179,5.26l2.563-3.568a.433.433,0,0,0-.1-.6L52.24.081a.429.429,0,0,0-.6.1L44.411,10.237a.439.439,0,0,0-.081.254l.1,19.627a.429.429,0,0,0,.18.348l9.076,6.523a.433.433,0,0,0,.388.059m31.379,2.588.525-1.647a.432.432,0,0,0-.281-.543L73.9,33.682a.435.435,0,0,0-.267,0L55,39.846a.427.427,0,0,0-.276.279l-3.4,10.647a.43.43,0,0,0,.063.386l11.619,15.82a.441.441,0,0,0,.218.155l11.8,3.766a.432.432,0,0,0,.543-.281l.525-1.646a.429.429,0,0,0-.279-.543l-4.186-1.337,1.9-5.952,4.186,1.335a.433.433,0,0,0,.543-.279l.525-1.647a.432.432,0,0,0-.281-.543L67.659,56.549a.43.43,0,0,0-.541.281l-.526,1.647a.43.43,0,0,0,.281.541l4.184,1.337-1.9,5.952-4.476-1.428L54.129,50.511l2.73-8.551,16.924-5.6,4.474,1.429-1.9,5.952-4.186-1.337a.434.434,0,0,0-.543.281l-.525,1.647a.431.431,0,0,0,.281.541l10.837,3.459a.432.432,0,0,0,.543-.279l.526-1.647a.434.434,0,0,0-.281-.543l-4.186-1.335,1.9-5.952,4.186,1.337a.434.434,0,0,0,.543-.281m-53.12-2.552,9-6.628a.435.435,0,0,0,.177-.352l-.13-19.627a.426.426,0,0,0-.084-.253L33.95.255a.431.431,0,0,0-.6-.092L31.954,1.187a.432.432,0,0,0-.091.6L34.47,5.328,29.439,9.033,26.833,5.5a.432.432,0,0,0-.6-.091L24.838,6.431a.432.432,0,0,0-.091.6l6.747,9.16a.432.432,0,0,0,.6.091l1.391-1.025a.432.432,0,0,0,.092-.6L30.976,11.12l5.031-3.705L38.792,11.2l.117,17.825-7.227,5.323-16.988-5.4-2.786-3.783,5.031-3.705L19.543,25a.432.432,0,0,0,.6.091l1.391-1.025a.434.434,0,0,0,.092-.6L14.882,14.3a.431.431,0,0,0-.6-.092l-1.391,1.025a.432.432,0,0,0-.091.6l2.6,3.537-5.029,3.705L7.765,19.544a.433.433,0,0,0-.6-.092L5.77,20.476a.432.432,0,0,0-.091.6l7.345,9.97a.424.424,0,0,0,.216.155l18.706,5.943a.434.434,0,0,0,.388-.064"
							transform="translate(0 0)"
						/>
						<path
							className="a-5"
							d="M101.513,27.708h-7.3a9.889,9.889,0,0,1-5.095-1.367,10.163,10.163,0,0,1-3.7-3.714,10.3,10.3,0,0,1,0-10.253,10.3,10.3,0,0,1,3.7-3.728,10,10,0,0,1,9.15-.512,10.2,10.2,0,0,1,3.37,2.423l-1.025.962a8.8,8.8,0,0,0-6.4-2.8,8.527,8.527,0,0,0-4.38,1.182,8.821,8.821,0,0,0-3.2,3.184,8.809,8.809,0,0,0,0,8.809,8.893,8.893,0,0,0,3.2,3.215,8.43,8.43,0,0,0,4.38,1.2h5.841V19.071H93.4v-1.4h8.109Z"
							transform="translate(54.674 4.726)"
						/>
						<path
							className="a-5"
							d="M111.118,27.61l-8.389-10.19h2.486a9.908,9.908,0,0,0,3.728-.591,4.98,4.98,0,0,0,1.834-1.507,3.557,3.557,0,0,0,.776-2.222,3.663,3.663,0,0,0-.652-2.066,4.821,4.821,0,0,0-1.863-1.6,6.051,6.051,0,0,0-2.8-.622h-5.656v18.8h-1.4V7.415h7.054a7.774,7.774,0,0,1,2.67.451,6.567,6.567,0,0,1,2.175,1.289,5.744,5.744,0,0,1,1.383,1.834,4.992,4.992,0,0,1-.545,5.173A5.917,5.917,0,0,1,109.5,18.1a6.392,6.392,0,0,1-1.88.543,16.452,16.452,0,0,1-1.941.109l7.3,8.855Z"
							transform="translate(64.518 4.823)"
						/>
						<path
							className="a-5"
							d="M119.455,27.828a7.4,7.4,0,0,1-2.936-.606,7.672,7.672,0,0,1-2.5-1.725,7.111,7.111,0,0,1-1.662-2.486A7.975,7.975,0,0,1,111.78,20V7.415h1.4V20a6.5,6.5,0,0,0,.482,2.486,6.145,6.145,0,0,0,1.352,2.05,6.308,6.308,0,0,0,2.05,1.383,6.126,6.126,0,0,0,2.393.482,6.194,6.194,0,0,0,2.423-.482,6.315,6.315,0,0,0,2.052-1.383,6.144,6.144,0,0,0,1.352-2.05,6.534,6.534,0,0,0,.48-2.486V7.415h1.4V20a8.005,8.005,0,0,1-.576,3.014,7.132,7.132,0,0,1-1.662,2.486,7.716,7.716,0,0,1-2.486,1.725,7.44,7.44,0,0,1-2.982.606"
							transform="translate(72.71 4.823)"
						/>
						<path
							className="a-5"
							d="M125.516,27.61l-.031-20.2h7.208a7.042,7.042,0,0,1,3.278.777,6.341,6.341,0,0,1,2.393,2.081,5.037,5.037,0,0,1,0,5.7,6.293,6.293,0,0,1-2.393,2.1,7.042,7.042,0,0,1-3.278.777h-5.778V27.61Zm1.4-10.221h5.778a5.818,5.818,0,0,0,2.58-.574,4.91,4.91,0,0,0,1.88-1.555,3.588,3.588,0,0,0,.7-2.127,3.633,3.633,0,0,0-.7-2.159,4.91,4.91,0,0,0-1.88-1.555,5.818,5.818,0,0,0-2.58-.574h-5.81Z"
							transform="translate(81.624 4.823)"
						/>
						<path
							className="a-5"
							d="M147.076,27.914a9.961,9.961,0,0,1-5.126-1.383,10.3,10.3,0,0,1-5.1-8.932,10.3,10.3,0,0,1,5.1-8.932,10.192,10.192,0,0,1,10.253,0A10.3,10.3,0,0,1,157.3,17.6a10.3,10.3,0,0,1-5.095,8.932,9.961,9.961,0,0,1-5.126,1.383m0-19.2a8.5,8.5,0,0,0-4.412,1.2,9,9,0,0,0-3.217,3.232,8.913,8.913,0,0,0,0,8.916,8.984,8.984,0,0,0,3.217,3.232,8.731,8.731,0,0,0,8.823,0,8.85,8.85,0,0,0,3.2-3.232,9.01,9.01,0,0,0,0-8.916,8.863,8.863,0,0,0-3.2-3.232,8.505,8.505,0,0,0-4.412-1.2"
							transform="translate(89.02 4.738)"
						/>
						<path
							className="a-5"
							d="M81.1,26.233h5.153a.676.676,0,0,1,.675.677v2.1c2.08-2.507,4.212-3.466,7.678-3.466,4.106,0,6.665,1.332,8.691,4.585a10.742,10.742,0,0,1,9.436-4.585c4.639,0,8.371,1.812,10.236,4.958a16.908,16.908,0,0,1,1.761,8.211V55.093a.677.677,0,0,1-.677.677h-5.739a.675.675,0,0,1-.677-.677V39.562c0-3.04-.426-4.692-1.439-5.811a5.225,5.225,0,0,0-4.1-1.707,5.378,5.378,0,0,0-5.065,2.986c-.64,1.334-.906,2.986-.906,6.184V55.093a.677.677,0,0,1-.677.677H99.706a.677.677,0,0,1-.677-.677V39.562c0-2.878-.426-4.639-1.332-5.758a5.7,5.7,0,0,0-4.372-1.759,5.088,5.088,0,0,0-5.118,3.2,17.472,17.472,0,0,0-.693,5.971V55.093a.677.677,0,0,1-.677.677H81.1a.677.677,0,0,1-.677-.677V26.91a.678.678,0,0,1,.677-.677"
							transform="translate(52.312 16.613)"
						/>
						<path
							className="a-5"
							d="M140.365,55.77h-5.151a.677.677,0,0,1-.677-.677V51.931a11.745,11.745,0,0,1-9.81,4.532c-8.637,0-14.876-6.452-14.876-15.356,0-9.01,6.292-15.567,15.036-15.567,4.265,0,7.2,1.386,9.65,4.638v-3.27a.675.675,0,0,1,.677-.675h5.151a.675.675,0,0,1,.677.675V55.093a.677.677,0,0,1-.677.677M117,41.267c0,5.173,3.572,8.691,8.744,8.691,5.118,0,8.584-3.573,8.584-8.851,0-5.331-3.626-9.064-8.8-9.064-4.96,0-8.531,3.893-8.531,9.224"
							transform="translate(71.455 16.613)"
						/>
						<path
							className="a-5"
							d="M132.915,26.233h5.153a.676.676,0,0,1,.675.677v2.2c1.867-2.773,3.359-3.572,6.4-3.572h.533v6.825c-4.266.107-6.344,2.4-6.344,6.985V55.093a.677.677,0,0,1-.677.677h-5.739a.677.677,0,0,1-.677-.677V26.91a.678.678,0,0,1,.677-.677"
							transform="translate(86.017 16.613)"
						/>
						<path
							className="a-5"
							d="M149.026,44.146c.853,3.572,3.945,5.81,8.157,5.81a7.456,7.456,0,0,0,6.3-2.7.682.682,0,0,1,.507-.233h6.452a.674.674,0,0,1,.627.929,13.388,13.388,0,0,1-2,3.176,14.489,14.489,0,0,1-11.73,5.333c-9.1,0-16.133-6.854-15.991-15.615a15.7,15.7,0,0,1,17.091-15.24c8.008.73,13.724,7.188,13.724,15.82a11.422,11.422,0,0,1-.267,2.72Zm16.155-6.239c-.906-3.786-3.785-5.864-8.157-5.864-4.212,0-7.092,2.025-8.211,5.864Z"
							transform="translate(91.943 16.614)"
						/>
						<path
							className="a-5"
							d="M170.844,52.724,160.4,26.889a.675.675,0,0,1,.627-.929h6.618a.674.674,0,0,1,.639.456l6.4,18.683,6.98-18.7a.677.677,0,0,1,.634-.439h6.658a.676.676,0,0,1,.621.944L173.1,64.952a.677.677,0,0,1-.621.408h-6.146a.677.677,0,0,1-.619-.949Z"
							transform="translate(104.301 16.886)"
						/>
						<path
							className="a-5"
							d="M77.045,19.983H71.287L64.033,37.39a.676.676,0,0,0,.624.936h6.191a.676.676,0,0,0,.637-.452l2.682-7.6,4.21,11.943H66.684a6.993,6.993,0,0,0-6.457,4.3L55.256,58.447a.676.676,0,0,0,.624.936h6.592a.676.676,0,0,0,.621-.409l4.2-9.774H81.31l4.039,9.766a.676.676,0,0,0,.626.418h6.582a.676.676,0,0,0,.624-.937Z"
							transform="translate(35.908 12.998)"
						/>
					</g>
				</g>
				<g
          className="f-5"
          width={694}
          height={343}
          transform="translate(-5 -3918)"
        ></g>
				<a href="/contactenos">
					<g transform="translate(-211.955 50)">
						<path
							className="g-5"
							d="M588.257,0H0V445.777H901.844l-115.6-302.531C753.117,56.546,674.961,0,588.257,0"
							style={{ stroke: "#ff0000", strokeWidth: 8}}
						/>
						
						<foreignObject
							x="0"
							y="0"
							width="100%"
							height="100%"
							style={{ clipPath: 'url(#b-5-footer)' }}>
							
							 <img
							width={610.636}
							style={{ objectFit: "contain", width: 841,  objectPosition: "right bottom", height: 360, marginTop: "-19px"}}
							src="/images/video/mapa.webp"
							alt=''
							/>
						</foreignObject>
					</g>
				</a>
				<g transform="translate(851 185)">
					<a href="https://www.google.com" target="_blank" rel='noreferrer'>
						<text className="d-5">
							<tspan className="h-5" x={selectedLanguage === 'es' ? 9.712 : 45.712} y={11}>
								{t('Tratamiento de datos personales')}
							</tspan>
							<tspan className="i-5" y={11} />
						</text>
					</a>
				</g>
				<g transform="translate(698 214)">
					<a href="https://www.google.com" target="_blank" rel='noreferrer'>
						<text className="j-5">
							<tspan x={selectedLanguage === 'es' ? 134.14 : 186.14} y={11}>
								{
									t('Pol\xEDtica de protecci\xF3n de datos personales')
								}
							</tspan>
						</text>
					</a>
				</g>
			</svg>
		</div>
	)
}

export default Footer
