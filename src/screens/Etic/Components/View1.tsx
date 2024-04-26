import React from 'react'

export interface IEtic {
    onNext: (number: number) => void
}

const View1: React.FC<IEtic> = ({onNext}): JSX.Element => {
	return (
		<svg viewBox="0 37 414 855">
			<defs>
				<style>
					{
						'.a-reward-2-mobile,.e-reward-2-mobile{mix-blend-mode:multiply;isolation:isolate;}.b-reward-2-mobile{fill:url(#a-reward-2-mobile);}.c-reward-2-mobile{opacity:0.9;fill:url(#b-reward-2-mobile);}.d-reward-2-mobile{fill:url(#c-reward-2-mobile);}.e-reward-2-mobile{fill:url(#d-reward-2-mobile);}.f-reward-2-mobile{fill:rgba(67,67,67,0.09);}.g-reward-2-mobile,.h-reward-2-mobile,.j-reward-2-mobile{fill:#fff;}.g-reward-2-mobile,.k-reward-2-mobile{font-size:18px;}.g-reward-2-mobile,.h-reward-2-mobile,.i-reward-2-mobile,.k-reward-2-mobile{font-family:Kiona-Bold, Kiona;font-weight:700;}.h-reward-2-mobile,.i-reward-2-mobile{font-size:32px;}.i-reward-2-mobile,.k-reward-2-mobile,.l-reward-2-mobile{fill:#001f5f;}.m-reward-2-mobile{filter:url(#i-reward-2-mobile);}.n-reward-2-mobile{filter:url(#g-reward-2-mobile);}.o-reward-2-mobile{filter:url(#e-reward-2-mobile);}'
					}
				</style>
				<pattern
					id="a-reward-2-mobile"
					width={1}
					height={1}
					patternTransform="matrix(-1, 0, 0, 1, 1047.416, 0)"
					viewBox="106.883 96.973 309.942 388.551">
					<image
						preserveAspectRatio="xMidYMid slice"
						width={523.708}
						height={519}
						xlinkHref="/images/mobile/etic/etic-1.png"
					/>
				</pattern>
				<linearGradient
					id="b-reward-2-mobile"
					x1={0.5}
					y1={0.462}
					x2={0.5}
					y2={1}
					gradientUnits="objectBoundingBox">
					<stop offset={0} stopColor="#fff" stopOpacity={0} />
					<stop offset={1} stopColor="#fff" />
				</linearGradient>
				<pattern
					id="c-reward-2-mobile"
					preserveAspectRatio="xMidYMid slice"
					width="100%"
					height="100%"
					viewBox="0 0 6000 3375">
					<image
						width={6000}
						height={3375}
						xlinkHref="/images/mobile/etic/etic-2.jpg"
					/>
				</pattern>
				<linearGradient
					id="d-reward-2-mobile"
					x1={0.5}
					x2={0.5}
					y2={1}
					gradientUnits="objectBoundingBox">
					<stop offset={0} stopColor="#001f5f" stopOpacity={0} />
					<stop offset={1} stopColor="#001f5f" />
				</linearGradient>
				<filter
					id="e-reward-2-mobile"
					x={0}
					y={33}
					width={432}
					height={56}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="f" />
					<feFlood floodOpacity={0.302} />
					<feComposite operator="in" in2="f" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="g-reward-2-mobile"
					x={92}
					y={424}
					width={248}
					height={61.169}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="h" />
					<feFlood floodOpacity={0.4} />
					<feComposite operator="in" in2="h" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="i-reward-2-mobile"
					x={92}
					y={804}
					width={248}
					height={61.169}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="j" />
					<feFlood floodOpacity={0.4} />
					<feComposite operator="in" in2="j" />
					<feComposite in="SourceGraphic" />
				</filter>
			</defs>
			<g>
				<g className="a-reward-2-mobile" transform="translate(333 388)">
					<rect
						className="b-reward-2-mobile"
						width={414}
						height={519}
						transform="translate(-333 -11)"
					/>
					<rect
						className="c-reward-2-mobile"
						width={414}
						height={519}
						transform="translate(-333 -11)"
					/>
					<path
						className="d-reward-2-mobile"
						d="M414,0V504.609l-280.964-.423C52.517,486.873,0,446.023,0,400.713V0"
						transform="translate(-333 -388)"
					/>
					<path
						className="e-reward-2-mobile"
						d="M414,0V504.609l-280.964-.423C52.517,486.873,0,446.023,0,400.713V0"
						transform="translate(-333 -388)"
					/>
				</g>
				<g
					className="o-reward-2-mobile"
					transform="matrix(1, 0, 0, 1, -9, 0)">
					<rect
						className="f-reward-2-mobile"
						width={414}
						height={38}
						transform="translate(9 39)"
					/>
				</g>
				<text
					className="g-reward-2-mobile"
					transform="translate(207 65)">
					<tspan x={-95.733} y={0}>
						{'ÉTICA Y COMPLIANCE'}
					</tspan>
				</text>
				<text
					className="h-reward-2-mobile"
					transform="translate(36 381.49)">
					<tspan x={33.592} y={32}>
						{'Código de ética'}
					</tspan>
				</text>
				<text
					className="i-reward-2-mobile"
					transform="translate(36 761.49)">
					<tspan x={75} y={32}>
						{'Línea ética'}
					</tspan>
				</text>
				<g transform="translate(0 -3884)" onClick={() => onNext(1)}>
					<g
						className="n-reward-2-mobile"
						transform="matrix(1, 0, 0, 1, -9, 3884)">
						<path
							className="j-reward-2-mobile"
							d="M0,0H182.824c19.015,0,36.09,12.6,43.034,31.746L230,43.169H48.692c-20.259,0-38.4-13.581-45.534-34.092Z"
							transform="translate(101 430)"
						/>
					</g>
					<text
						className="k-reward-2-mobile"
						transform="translate(147.5 4342.584)">
						<tspan x={0} y={0}>
							{'Conoce Más'}
						</tspan>
					</text>
				</g>
				<g transform="translate(0 -3504)" onClick={() => onNext(2)}>
					<g
						className="m-reward-2-mobile"
						transform="matrix(1, 0, 0, 1, -9, 3504)">
						<path
							className="l-reward-2-mobile"
							d="M0,0H182.824c19.015,0,36.09,12.6,43.034,31.746L230,43.169H48.692c-20.259,0-38.4-13.581-45.534-34.092Z"
							transform="translate(101 810)"
						/>
					</g>
					<text
						className="g-reward-2-mobile"
						transform="translate(147.5 4342.584)">
						<tspan x={0} y={0}>
							{'Conoce Más'}
						</tspan>
					</text>
				</g>
			</g>
		</svg>
	)
}

export default View1