import moment from 'moment'
import React from 'react'
import { daysFeb } from '../mocks/calendar.mock'

export interface ICalendar {
	next: () => void
	today: number
	month: number
	prev: () => void
	onChangeDay: (day: number) => void
	onChangeMonth: () => void
	onLessMonth: () => void
}

const May02: React.FC<ICalendar> = ({ month, next, prev, today, onChangeDay, onLessMonth, onChangeMonth }) => {
	const currentMonth = moment('02').month() + 1
	const events = Object.values(daysFeb).filter(
		(item: any) => item.hasEvent === true
	)
	const currentTransform = daysFeb[`${today}-${currentMonth}`].transform

	return (
		<svg viewBox="-150 0 1920 998.106">
			<defs>
				<style>
					{
						'.a-item-1813,.o-item-1813{fill:none;}.b-item-1813{fill:#c5dbf7;}.c-item-1813,.d-item-1813,.m-item-1813,.r-item-1813{fill:#001f5f;}.d-item-1813{font-size:55px;}.d-item-1813,.r-item-1813{font-family:Kiona-Bold;font-weight:700;}.e-item-1813,.k-item-1813,.n-item-1813,.s-item-1813{fill:#182856;}.e-item-1813,.m-item-1813{font-size:24px;}.e-item-1813,.s-item-1813{font-family:Silka-Regular, Silka;}.f-item-1813{fill:#e40032;}.g-item-1813{fill:#c7c7cc;}.h-item-1813,.i-item-1813{fill:#fff;}.i-item-1813,.n-item-1813{font-size:42px;}.i-item-1813,.k-item-1813,.n-item-1813{font-family:Silka-SemiBold, Silka;font-weight:600;}.j-item-1813{clip-path:url(#e-item-1813);}.k-item-1813{font-size:32px;}.l-item-1813{clip-path:url(#f-item-1813);}.m-item-1813{font-family:Silka-Medium, Silka;font-weight:500;}.o-item-1813{stroke:#e40032;stroke-width:3px;}.p-item-1813{fill:url(#g-item-1813);}.q-item-1813{fill:url(#h-item-1813);}.r-item-1813{font-size:28px;}.s-item-1813{font-size:18px;}.t-item-1813{filter:url(#c-item-1813);}.u-item-1813{filter:url(#a-item-1813);}'
					}
				</style>
				<filter
					id="a-item-1813"
					x={1220.857}
					y={858.904}
					width={145.48}
					height={78.473}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="b" />
					<feFlood floodOpacity={0.6} />
					<feComposite operator="in" in2="b" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter
					id="c-item-1813"
					x={1004.536}
					y={858.904}
					width={145.48}
					height={78.473}
					filterUnits="userSpaceOnUse">
					<feOffset dy={3} />
					<feGaussianBlur stdDeviation={3} result="d" />
					<feFlood floodOpacity={0.6} />
					<feComposite operator="in" in2="d" />
					<feComposite in="SourceGraphic" />
				</filter>
				<clipPath id="e-item-1813">
					<rect className="a-item-1813" width={567} height={40} />
				</clipPath>
				<clipPath id="f-item-1813">
					<rect className="a-item-1813" width={567} height={230} />
				</clipPath>
				<pattern
					id="g-item-1813"
					preserveAspectRatio="xMidYMid slice"
					width="100%"
					height="100%"
					viewBox="0 0 6000 3363">
					<image
						width={6000}
						height={3363}
						xlinkHref="/images/eventos/3Feb.jpg"
					/>
				</pattern>
				<pattern
					id="h-item-1813"
					preserveAspectRatio="xMidYMid slice"
					width="100%"
					height="100%"
					viewBox="0 0 1500 1000">
					<image
						width={1500}
						height={1000}
						xlinkHref="/images/eventos/9Feb.jpg"
					/>
				</pattern>
			</defs>
			<circle
				className="b-item-1813"
				cx={22}
				cy={22}
				r={22}
				transform="translate(348 565.019)"
			/>
			<circle
				className="b-item-1813"
				cx={22}
				cy={22}
				r={22}
				transform="translate(260 613.019)"
			/>
			<circle
				className="b-item-1813"
				cx={22}
				cy={22}
				r={22}
				transform="translate(348 613.019)"
			/>
			<circle
				className="b-item-1813"
				cx={22}
				cy={22}
				r={22}
				transform="translate(431 613.019)"
			/>
			<circle
				className="b-item-1813"
				cx={22}
				cy={22}
				r={22}
				transform="translate(519 613.019)"
			/>
			<circle
				className="b-item-1813"
				cx={22}
				cy={22}
				r={22}
				transform="translate(348 469.019)"
			/>
			<circle
				className="b-item-1813"
				cx={22}
				cy={22}
				r={22}
				transform="translate(519 469.019)"
			/>
			<path
				className="c-item-1813"
				d="M1136.187,0H50.372C18.5,0-5.357,24.843,1.043,51.375L39.612,842.591l5.914,121.316c4.8,19.905,25.417,34.2,49.329,34.2H1136.187Z"
				transform="translate(643.813 0.003)"
			/>
			<circle
				className="b-item-1813"
				cx={22}
				cy={22}
				r={22}
				transform="translate(519 565.019)"
			/>
			<circle
				className="b-item-1813"
				cx={22}
				cy={22}
				r={22}
				transform="translate(348 660.019)"
			/>
			<circle
				className="b-item-1813"
				cx={22}
				cy={22}
				r={22}
				transform="translate(434 660.019)"
			/>
			<text className="d-item-1813" transform="translate(0 214.019)">
				<tspan x={0} y={50}>
					{'Prográmese con '}
				</tspan>
				<tspan x={0} y={100}>
					{'Grupo Amarey '}
				</tspan>
			</text>
			<g transform="translate(-140 -79.981)">
				<circle
					className="b-item-1813"
					cx={17.5}
					cy={17.5}
					r={17.5}
					transform="translate(416 867)"
				/>
				<text className="e-item-1813" transform="translate(458 893)">
					<tspan x={0} y={0}>
						{'Fecha evento'}
					</tspan>
				</text>
			</g>
			<g transform="translate(-140 -79.981)">
				<circle
					className="f-item-1813"
					cx={17.5}
					cy={17.5}
					r={17.5}
					transform="translate(140 867)"
				/>
				<text className="e-item-1813" transform="translate(182 893)">
					<tspan x={0} y={0}>
						{'Fecha de hoy'}
					</tspan>
				</text>
			</g>
			<g transform="translate(-210.89 -41.981)">
				<g transform="translate(1440.747 906.884)" onClick={next}>
					<g
						className="u-item-1813 cursor-pointer"
						transform="matrix(1, 0, 0, 1, -1229.86, -864.9)">
						<path
							className="g-item-1813 cursor-pointer"
							d="M127.48,0H71.492A70.054,70.054,0,0,0,6.277,44.472L0,60.473H53.69a73.731,73.731,0,0,0,69-47.758Z"
							transform="translate(1229.86 864.9)"
						/>
					</g>
					<path
						className="h-item-1813 cursor-pointer"
						d="M13.947,0,27.893,23.908H0Z"
						transform="translate(75.679 16.27) rotate(90)"
					/>
				</g>
				<g transform="translate(1224.426 906.884)" onClick={prev}>
					<g
						className="t-item-1813 cursor-pointer"
						transform="matrix(1, 0, 0, 1, -1013.54, -864.9)">
						<path
							className="g-item-1813 cursor-pointer"
							d="M0,0H55.988A70.054,70.054,0,0,1,121.2,44.472l6.277,16H73.791a73.731,73.731,0,0,1-69-47.758Z"
							transform="translate(1013.54 864.9)"
						/>
					</g>
					<path
						className="h-item-1813 cursor-pointer"
						d="M13.947,0,27.893,23.908H0Z"
						transform="translate(51.802 44.164) rotate(-90)"
					/>
				</g>
			</g>
			<text className="i-item-1813" transform="translate(988 126.019)">
				<tspan x={0} y={0}>
					{'02 de mayo de 2024'}
				</tspan>
			</text>
			<rect
				className="f-item-1813"
				width={39}
				height={4}
				rx={2}
				transform="translate(350.5 509.019)"
			/>
			<g transform="translate(-140 -133.894)">
				<g className="j-item-1813" transform="translate(140 557)">
					<g transform="translate(-140 -557)">
						<text
							className="k-item-1813"
							transform="translate(165 557)">
							<tspan x={-21.712} y={30}>
								{'Do'}
							</tspan>
						</text>
					</g>
					<g transform="translate(-54 -557)">
						<text
							className="k-item-1813"
							transform="translate(165 557)">
							<tspan x={-17.92} y={30}>
								{'Lu'}
							</tspan>
						</text>
					</g>
					<g transform="translate(32 -557)">
						<text
							className="k-item-1813"
							transform="translate(165 557)">
							<tspan x={-24.576} y={30}>
								{'Ma'}
							</tspan>
						</text>
					</g>
					<g transform="translate(118 -557)">
						<text
							className="k-item-1813"
							transform="translate(165 557)">
							<tspan x={-18.528} y={30}>
								{'Mi'}
							</tspan>
						</text>
					</g>
					<g transform="translate(204 -557)">
						<text
							className="k-item-1813"
							transform="translate(165 557)">
							<tspan x={-19.072} y={30}>
								{'Ju'}
							</tspan>
						</text>
					</g>
					<g transform="translate(290 -557)">
						<text
							className="k-item-1813"
							transform="translate(165 557)">
							<tspan x={-15.264} y={30}>
								{'Vi'}
							</tspan>
						</text>
					</g>
					<g transform="translate(376 -557)">
						<text
							className="k-item-1813"
							transform="translate(165 557)">
							<tspan x={-19.888} y={30}>
								{'Sa'}
							</tspan>
						</text>
					</g>
				</g>
				<g className="l-item-1813" transform="translate(140 610)">
					<g transform="translate(-140 -557)">
						<text
							className="m-item-1813"
							transform="translate(165 557)">
							<tspan x={-14.508} y={23}>
								{'28'}
							</tspan>
						</text>
					</g>
					<g transform="translate(-54 -557)">
						<text
							className="m-item-1813"
							transform="translate(165 557)">
							<tspan x={-14.508} y={23}>
								{'29'}
							</tspan>
						</text>
					</g>
					<g transform="translate(32 -557)">
						<text
							className="m-item-1813"
							transform="translate(165 557)">
							<tspan x={-14.7} y={23}>
								{'30'}
							</tspan>
						</text>
					</g>
					<g transform="translate(118 -557)">
						<text
							className="m-item-1813"
							transform="translate(165 557)">
							<tspan x={-12.324} y={23}>
								{'01'}
							</tspan>
						</text>
					</g>
					<g transform="translate(204 -557)"  onClick={() => onChangeDay(2)}>
						<text
							className="m-item-1813"
							transform="translate(165 557)">
							<tspan x={-14.448} y={23}>
								{'02'}
							</tspan>
						</text>
					</g>
					<g transform="translate(290 -557)">
						<text
							className="m-item-1813"
							transform="translate(165 557)">
							<tspan x={-14.7} y={23}>
								{'03'}
							</tspan>
						</text>
					</g>
					<g transform="translate(376 -557)"  onClick={() => onChangeDay(4)}>
						<text
							className="m-item-1813"
							transform="translate(165 557)">
							<tspan x={-14.844} y={23}>
								{'04'}
							</tspan>
						</text>
					</g>
					<g transform="translate(-140 -509)">
						<text
							className="m-item-1813"
							transform="translate(165 557)">
							<tspan x={-14.64} y={23}>
								{'05'}
							</tspan>
						</text>
					</g>
					<g transform="translate(-54 -509)">
						<text
							className="m-item-1813"
							transform="translate(165 557)">
							<tspan x={-14.892} y={23}>
								{'06'}
							</tspan>
						</text>
					</g>
					<g transform="translate(32 -509)">
						<text
							className="m-item-1813"
							transform="translate(165 557)">
							<tspan x={-14.1} y={23}>
								{'07'}
							</tspan>
						</text>
					</g>
					<g transform="translate(118 -509)">
						<text
							className="m-item-1813"
							transform="translate(165 557)">
							<tspan x={-14.892} y={23}>
								{'08'}
							</tspan>
						</text>
					</g>
					<g transform="translate(204 -509)">
						<text
							className="m-item-1813"
							transform="translate(165 557)">
							<tspan x={-14.892} y={23}>
								{'09'}
							</tspan>
						</text>
					</g>
					<g transform="translate(290 -509)">
						<text
							className="m-item-1813"
							transform="translate(165 557)">
							<tspan x={-12.888} y={23}>
								{'10'}
							</tspan>
						</text>
					</g>
					<g transform="translate(376 -509)">
						<text
							className="m-item-1813"
							transform="translate(165 557)">
							<tspan x={-10.944} y={23}>
								{'11'}
							</tspan>
						</text>
					</g>
					<g transform="translate(-140 -461)">
						<text
							className="m-item-1813"
							transform="translate(165 557)">
							<tspan x={-12.504} y={23}>
								{'12'}
							</tspan>
						</text>
					</g>
					<g transform="translate(-54 -461)">
						<text
							className="m-item-1813"
							transform="translate(165 557)">
							<tspan x={-12.072} y={23}>
								{'13'}
							</tspan>
						</text>
					</g>
					<g transform="translate(32 -461)">
						<text
							className="m-item-1813"
							transform="translate(165 557)">
							<tspan x={-12.528} y={23}>
								{'14'}
							</tspan>
						</text>
					</g>
					<g transform="translate(118 -461)">
						<text
							className="m-item-1813"
							transform="translate(165 557)">
							<tspan x={-12.696} y={23}>
								{'15'}
							</tspan>
						</text>
					</g>
					<g transform="translate(204 -461)" onClick={() => onChangeDay(16)}>
						<text
							className="m-item-1813"
							transform="translate(165 557)">
							<tspan x={-12.948} y={23}>
								{'16'}
							</tspan>
						</text>
					</g>
					<g transform="translate(290 -461)">
						<text
							className="m-item-1813"
							transform="translate(165 557)">
							<tspan x={-12.156} y={23}>
								{'17'}
							</tspan>
						</text>
					</g>
					<g transform="translate(376 -461)"  onClick={() => onChangeDay(18)}>
						<text
							className="m-item-1813"
							transform="translate(165 557)">
							<tspan x={-12.948} y={23}>
								{'18'}
							</tspan>
						</text>
					</g>
					<g transform="translate(-140 -413)">
						<text
							className="m-item-1813"
							transform="translate(165 557)">
							<tspan x={-12.456} y={23}>
								{'19'}
							</tspan>
						</text>
					</g>
					<g transform="translate(-54 -413)">
						<text
							className="m-item-1813"
							transform="translate(165 557)">
							<tspan x={-14.448} y={23}>
								{'20'}
							</tspan>
						</text>
					</g>
					<g transform="translate(32 -413)">
						<text
							className="m-item-1813"
							transform="translate(165 557)">
							<tspan x={-12.504} y={23}>
								{'21'}
							</tspan>
						</text>
					</g>
					<g transform="translate(118 -413)" onClick={() => onChangeDay(22)}>
						<text
							className="m-item-1813"
							transform="translate(165 557)">
							<tspan x={-14.064} y={23}>
								{'22'}
							</tspan>
						</text>
					</g>
					<g transform="translate(204 -413)" onClick={() => onChangeDay(23)}>
						<text
							className="m-item-1813"
							transform="translate(165 557)">
							<tspan x={-14.316} y={23}>
								{'23'}
							</tspan>
						</text>
					</g>
					<g transform="translate(290 -413)" onClick={() => onChangeDay(24)}>
						<text
							className="m-item-1813"
							transform="translate(165 557)">
							<tspan x={-13.596} y={23}>
								{'24'}
							</tspan>
						</text>
					</g>
					<g transform="translate(376 -413)" onClick={() => onChangeDay(25)}>
						<text
							className="m-item-1813"
							transform="translate(165 557)">
							<tspan x={-14.256} y={23}>
								{'25'}
							</tspan>
						</text>
					</g>
					<g transform="translate(-140 -365)">
						<text
							className="m-item-1813"
							transform="translate(165 557)">
							<tspan x={-13.92} y={23}>
								{'26'}
							</tspan>
						</text>
					</g>
					<g transform="translate(-54 -365)">
						<text
							className="m-item-1813"
							transform="translate(165 557)">
							<tspan x={-13.716} y={23}>
								{'27'}
							</tspan>
						</text>
					</g>
					<g transform="translate(32 -365)">
						<text
							className="m-item-1813"
							transform="translate(165 557)">
							<tspan x={-14.508} y={23}>
								{'28'}
							</tspan>
						</text>
					</g>
					<g transform="translate(118 -365)">
						<text
							className="m-item-1813"
							transform="translate(165 557)">
							<tspan x={-14.508} y={23}>
								{'29'}
							</tspan>
						</text>
					</g>
					<g transform="translate(204 -365)" onClick={() => onChangeDay(30)}>
						<text
							className="m-item-1813"
							transform="translate(165 557)">
							<tspan x={-14.7} y={23}>
								{'30'}
							</tspan>
						</text>
					</g>
					<g transform="translate(290 -365)" onClick={() => onChangeDay(31)}>
						<text
							className="m-item-1813"
							transform="translate(165 557)">
							<tspan x={-12.756} y={23}>
								{'31'}
							</tspan>
						</text>
					</g>
					<g transform="translate(376 -365)">
						<text
							className="m-item-1813"
							transform="translate(165 557)">
							<tspan x={-12.324} y={23}>
								{'01'}
							</tspan>
						</text>
					</g>
				</g>
				<text className="n-item-1813" transform="translate(140 525)">
					<tspan x={0} y={0}>
						{'Mayo 2024'}
					</tspan>
				</text>
				<line
					className="o-item-1813"
					x2={567}
					transform="translate(140 546)"
				/>
				<path
					className="c-item-1813"
					d="M13.947,0,27.893,23.908H0Z"
					transform="translate(616.338 532.048) rotate(-90)"
					onClick={onLessMonth}
				/>
				<path
					className="c-item-1813"
					d="M13.947,0,27.893,23.908H0Z"
					transform="translate(698.246 504.155) rotate(90)"
					onClick={onChangeMonth}
				/>
			</g>
			<g transform="translate(-140 -79.894)">
				<path
					className="p-item-1813"
					d="M798.067,18.477l26.614,244.707c.774,8.2,5.936,14.346,12.047,14.346h318.916c-6.112,0-11.273-6.149-12.041-14.346l-26.62-244.707C1116.059,8.673,1121.715,0,1129.031,0H810.108c-7.309,0-12.965,8.673-12.041,18.477"
					transform="translate(104.988 303)"
				/>
				<path
					className="h-item-1813"
					d="M.1,18.477l26.62,244.707c.768,8.2,5.929,14.346,12.041,14.346H518.541c6.1,0,11.247-6.114,12.041-14.282l27.44-244.707C558.979,8.716,553.316,0,545.981,0H12.146C4.831,0-.825,8.673.1,18.477"
					transform="translate(1221.873 303)"
				/>
			</g>
			<g transform="translate(-140 222.576)">
				<path
					className="q-item-1813"
					d="M798.067,18.477l26.614,244.707c.774,8.2,5.936,14.346,12.047,14.346h318.916c-6.112,0-11.273-6.149-12.041-14.346l-26.62-244.707C1116.059,8.673,1121.715,0,1129.031,0H810.108c-7.309,0-12.965,8.673-12.041,18.477"
					transform="translate(104.988 303)"
				/>
				<path
					className="h-item-1813"
					d="M.1,18.477l26.62,244.707c.768,8.2,5.929,14.346,12.041,14.346H518.541c6.1,0,11.247-6.114,12.041-14.282l27.44-244.707C558.979,8.716,553.316,0,545.981,0H12.146C4.831,0-.825,8.673.1,18.477"
					transform="translate(1221.873 303)"
				/>
			</g>
			<text className="r-item-1813" transform="translate(1568 352.019)">
				<tspan x={-432.404} y={0}>
					{'XII Congreso Colombiano De'}
				</tspan>
				<tspan x={-361.788} y={30}>
					{'Trasplante De Órganos'}
				</tspan>
			</text>
			<text className="s-item-1813" transform="translate(1565 401.019)">
				<tspan x={-313.254} y={17}>
					{'Cali 2 y 4 de mayo Intercontinental'}
				</tspan>
			</text>
			<text className="r-item-1813" transform="translate(1568 634.106)">
				<tspan x={-195.748} y={0}>
					{'VII Congreso'}
				</tspan>
				<tspan x={-320.012} y={30}>
					{'Interdisciplinario de'}
				</tspan>
				<tspan x={-430.864} y={60}>
					{'Cirugía Oral y Maxilofacial'}
				</tspan>
			</text>
			<text className="s-item-1813" transform="translate(1565 708.106)">
				<tspan x={-300.834} y={17}>
					{'Cartagena 2 y 4 de mayo Corales'}
				</tspan>
			</text>
		</svg>
	)
}

export default May02
