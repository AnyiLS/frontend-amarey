import React from "react";
import { useTranslation } from "react-i18next";
/** Interfaces & Types */
import type { ISlide } from 'utils/models/Slide';
/** Styles */
import './styles/slide1.css';
import { useLanguage } from "context/language";
import useLayout from "hooks/ancho.hook";


const Slide1: React.FC<ISlide> = ({ onClick }): JSX.Element => {
	/** Hooks */
  const { t } = useTranslation();
  const { isSmallScreen } = useLayout()
	
	/** Contexts */
	const { selectedLanguage } = useLanguage();

  const aditionals = isSmallScreen ? {id: 'slide'} : {preserveAspectRatio: 'none'}

  return (
    <svg
      viewBox={`0 ${isSmallScreen ? '95' : '0'} 1920 ${isSmallScreen ? '975' : '970'}`}
      width="100%"
      className="h-auto"
      {...aditionals}
    >
      <defs>
        <filter
          id="a-bienvenida-1"
          x={247.813}
          y={-1012.689}
          width={613.561}
          height={237.432}
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy={3} />
          <feGaussianBlur stdDeviation={3} result="b" />
          <feFlood floodOpacity={0.502} />
          <feComposite operator="in" in2="b" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="c-bienvenida-1"
          x={1029.375}
          y={-1008.379}
          width={613.561}
          height={237.432}
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy={3} />
          <feGaussianBlur stdDeviation={3} result="d" />
          <feFlood floodOpacity={0.502} />
          <feComposite operator="in" in2="d" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="e-bienvenida-1"
          x={1132.593}
          y={-670.268}
          width={613.561}
          height={237.432}
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy={3} />
          <feGaussianBlur stdDeviation={3} result="f" />
          <feFlood floodOpacity={0.502} />
          <feComposite operator="in" in2="f" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="g-bienvenida-1"
          x={155.813}
          y={-659.922}
          width={613.561}
          height={237.432}
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy={3} />
          <feGaussianBlur stdDeviation={3} result="h" />
          <feFlood floodOpacity={0.502} />
          <feComposite operator="in" in2="h" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="i-bienvenida-1"
          x={641.149}
          y={-463.769}
          width={613.561}
          height={237.432}
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy={3} />
          <feGaussianBlur stdDeviation={3} result="j" />
          <feFlood floodOpacity={0.502} />
          <feComposite operator="in" in2="j" />
          <feComposite in="SourceGraphic" />
        </filter>
        <clipPath id="k-bienvenida-1">
          <rect className="a-bienvenida-1" width={406.518} height={157.266} />
        </clipPath>
        <clipPath id="l-bienvenida-1">
          <rect className="b-bienvenida-1" width={1307.603} height={972} />
        </clipPath>
        <pattern
          id="m-bienvenida-1"
          width={1}
          height={1}
          viewBox={`25.027 ${isSmallScreen ? '0' : '78.091'} 1562.724 953.539`}
        >
          <image
            preserveAspectRatio="xMidYMid slice"
            width={1587.751}
            height={1058.5}
            xlinkHref="/images/movil.webp"
          />
        </pattern>
        <filter
          id="n-bienvenida-1"
          x={469.995}
          y={528.145}
          width={1464.005}
          height={458.172}
          filterUnits="userSpaceOnUse"
        >
          <feOffset dx={-3} dy={-3} />
          <feGaussianBlur stdDeviation={6} result="o" />
          <feFlood floodOpacity={0.251} />
          <feComposite operator="in" in2="o" />
          <feComposite in="SourceGraphic" />
        </filter>
        <linearGradient
          id="p-bienvenida-1"
          y1={0.5}
          x2={1}
          y2={0.5}
          gradientUnits="objectBoundingBox"
        >
          <stop offset={0} stopColor="#dfb663" />
          <stop offset={0.85} stopColor="#b2722c" />
        </linearGradient>
        <linearGradient
          id="q-bienvenida-1"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#p-bienvenida-1"
        />
        <linearGradient
          id="r-bienvenida-1"
          x1={-0.001}
          y1={0.5}
          x2={0.999}
          y2={0.5}
          xlinkHref="#p-bienvenida-1"
        />
        <linearGradient
          id="s-bienvenida-1"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#p-bienvenida-1"
        />
        <linearGradient
          id="t-bienvenida-1"
          x1={0}
          y1={0.5}
          x2={0.999}
          y2={0.5}
          xlinkHref="#p-bienvenida-1"
        />
        <linearGradient
          id="u-bienvenida-1"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#p-bienvenida-1"
        />
        <linearGradient
          id="v-bienvenida-1"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#p-bienvenida-1"
        />
      </defs>
      <g transform="translate(0 0.894)">
        <rect
          className="c-bienvenida-1"
          width={1920}
          height={968.423}
          transform="translate(0 2.683)"
        />
        <g className="d-bienvenida-1" transform={isSmallScreen ? 'translate(0 95)' : 'translate(0 0)'}>
          <path
            className="a-bienvenida-1"
            d="M267.257,157.266H0V0H406.518V40.716c0,64.369-62.349,116.55-139.261,116.55"
          />
        </g>
      </g>
      <g transform="translate(58.607)">
        <g className="e-bienvenida-1">
          <path
            className="a-bienvenida-1"
            d="M597.5,770.2V126.916H529.28c-142.747,0-271.5,78.251-326.412,198.387L0,770.2Z"
            transform="translate(64.945 201.796)"
          />
          <path
            className="f-bienvenida-1"
            d="M1193.109.5h-344.3C691.391.5,549.41,79.6,488.849,201.049L85.887,1011.136H1193.109Z"
            transform="translate(131.13 -37.88)"
          />
          <path
            className="c-bienvenida-1"
            d="M0,0,.706,16.137l.354,8.1.706,16.134L33.642,21.713,17.573,11.342Z"
            transform="translate(329.127 555.178) rotate(-63)"
            onClick={() => onClick(0)}
          />
          <text
            className="h-bienvenida-1"
            transform="translate(226.641 860.695) rotate(-65)"
            onClick={() => onClick(0)}
          >
            <tspan x={0} y={0}>
              {t("Conoce Más")}
            </tspan>
          </text>
        </g>
      </g>
      <g transform="translate(332.249 1.934)">
        <path
          className="i-bienvenida-1"
          d="M1695.549,14.03H812.3c-149.253,0-254.9,20.808-341.291,200.168L107.8,982.84H1695.549Z"
          transform="translate(-107.798 -14.03)"
        />
        <g
          className="x-bienvenida-1"
          transform="matrix(1, 0, 0, 1, -332.25, -1.93)"
        >
          <path
            className="c-bienvenida-1"
            d="M0,422.172,144.937,90.939C168.523,35.9,224.173,0,285.908,0H1428V422.172Z"
            transform="translate(491 549.15)"
          />
        </g>
        <text className="j-bienvenida-1" transform="translate(800.751 804.638)">
          <tspan x={selectedLanguage === 'es' ? -328.734 : -250.734} y={40}>
            {t("Un compromiso inquebrantable")}
          </tspan>
          <tspan className="k-bienvenida-1" x={selectedLanguage === 'es' ? -313.83 : -210.83} y={102}>
            {t("con la salud y la vida")}
          </tspan>
        </text>
        <g transform="translate(383.174 247.268)">
          <g transform="translate(72.285 358.239)">
            <g transform="translate(0 0)">
              <path
                className="l-bienvenida-1"
                d="M156.433,449.139,176.3,476.4a.74.74,0,0,1,.141.435l.034,21.281a.744.744,0,0,1-.74.744h-2.971a.738.738,0,0,1-.744-.736l-.011-7.547-10.736.015.011,7.547a.744.744,0,0,1-.74.744h-2.971a.738.738,0,0,1-.744-.736l-.031-19.553a.744.744,0,0,1,.74-.744h2.971a.738.738,0,0,1,.744.736l.011,7.547L172,486.114l-.011-8.074-18.047-24.755-15.427.023L120.554,478.12l.011,8.074,10.736-.015-.011-7.547a.744.744,0,0,1,.74-.744H135a.738.738,0,0,1,.744.736l.031,19.553a.744.744,0,0,1-.74.744h-2.971a.738.738,0,0,1-.744-.736l-.011-7.547-10.736.015.011,7.547a.744.744,0,0,1-.74.744h-2.971a.738.738,0,0,1-.744-.736l-.034-21.281a.74.74,0,0,1,.141-.435l19.782-27.322a.746.746,0,0,1,.6-.305l19.206-.03a.753.753,0,0,1,.6.305ZM125.584,426.8l-32.1-10.373a.724.724,0,0,0-.458,0L72.8,423.038a.743.743,0,0,0-.477.934l.923,2.822a.743.743,0,0,0,.934.477l7.177-2.345,3.333,10.206-7.177,2.345a.743.743,0,0,0-.477.934l.923,2.822a.743.743,0,0,0,.934.477l18.584-6.071a.743.743,0,0,0,.477-.934l-.923-2.822a.743.743,0,0,0-.934-.477l-7.177,2.345-3.333-10.206,7.673-2.506,29.148,9.42,4.79,14.664-17.966,24.812-7.673,2.506-3.333-10.206,7.174-2.345a.743.743,0,0,0,.477-.934l-.923-2.822a.743.743,0,0,0-.934-.477l-18.584,6.072a.743.743,0,0,0-.477.934l.923,2.822a.743.743,0,0,0,.934.477l7.177-2.345,3.333,10.206-7.174,2.345a.743.743,0,0,0-.477.934l.923,2.822a.743.743,0,0,0,.934.477l20.228-6.609a.753.753,0,0,0,.37-.271L131.911,446.2a.73.73,0,0,0,.1-.667l-5.965-18.26a.743.743,0,0,0-.477-.477Zm39.64-4.878,32.066-10.472a.754.754,0,0,0,.37-.271l12.482-17.238a.743.743,0,0,0-.164-1.037l-2.4-1.743a.743.743,0,0,0-1.037.164l-4.428,6.117-8.7-6.3,4.428-6.113a.743.743,0,0,0-.164-1.037l-2.4-1.743a.743.743,0,0,0-1.037.164l-11.468,15.835a.743.743,0,0,0,.164,1.037l2.406,1.743a.743.743,0,0,0,1.037-.164l4.428-6.113,8.7,6.3-4.737,6.541L165.643,417.1l-12.494-9.046-.05-30.636,4.733-6.537,8.7,6.3L162.1,383.3a.743.743,0,0,0,.164,1.037l2.406,1.743a.743.743,0,0,0,1.037-.164l11.468-15.838a.743.743,0,0,0-.164-1.037l-2.406-1.743a.743.743,0,0,0-1.037.164l-4.428,6.113-8.7-6.3,4.428-6.113a.743.743,0,0,0-.164-1.037L162.3,358.38a.743.743,0,0,0-1.037.164l-12.482,17.238a.74.74,0,0,0-.141.435l.053,33.729a.741.741,0,0,0,.305.6l15.556,11.266a.73.73,0,0,0,.667.1Zm53.911,4.641.911-2.826a.743.743,0,0,0-.477-.934l-20.251-6.544a.724.724,0,0,0-.458,0L166.8,426.734a.743.743,0,0,0-.477.477l-5.907,18.275a.747.747,0,0,0,.107.668l19.87,27.257a.752.752,0,0,0,.37.271l20.251,6.544a.743.743,0,0,0,.934-.477l.911-2.826a.743.743,0,0,0-.477-.934l-7.181-2.323,3.3-10.217,7.185,2.323a.743.743,0,0,0,.934-.477l.911-2.826a.743.743,0,0,0-.477-.934l-18.6-6.014a.743.743,0,0,0-.934.477l-.911,2.826a.743.743,0,0,0,.477.934l7.181,2.323-3.3,10.217-7.685-2.483-18.047-24.755,4.744-14.679,29.118-9.511,7.681,2.483-3.3,10.217-7.185-2.323a.743.743,0,0,0-.934.477l-.911,2.826a.743.743,0,0,0,.477.934l18.6,6.014a.742.742,0,0,0,.934-.477l.911-2.826a.743.743,0,0,0-.477-.934l-7.185-2.323L211,424.72l7.185,2.323a.743.743,0,0,0,.934-.477Zm-91.274-4.714,15.507-11.334a.748.748,0,0,0,.305-.6l-.1-33.729a.718.718,0,0,0-.145-.435L130.87,358.571a.739.739,0,0,0-1.037-.16l-2.4,1.754a.739.739,0,0,0-.16,1.037l4.454,6.094-8.669,6.335-4.454-6.094a.739.739,0,0,0-1.037-.16l-2.4,1.754a.739.739,0,0,0-.16,1.037l11.54,15.785a.739.739,0,0,0,1.037.16l2.4-1.754a.739.739,0,0,0,.16-1.037l-4.454-6.094,8.669-6.335,4.763,6.518.092,30.632-12.452,9.1L97.6,407.764l-4.763-6.518,8.669-6.338L105.958,401a.739.739,0,0,0,1.037.16l2.4-1.754a.739.739,0,0,0,.16-1.037l-11.54-15.785a.739.739,0,0,0-1.037-.16l-2.4,1.754a.739.739,0,0,0-.16,1.037l4.454,6.094-8.669,6.338-4.454-6.094a.739.739,0,0,0-1.037-.16l-2.4,1.754a.739.739,0,0,0-.16,1.037l12.559,17.181a.718.718,0,0,0,.374.267L127.2,421.963a.736.736,0,0,0,.664-.107Z"
                transform="translate(-72.285 -358.239)"
              />
              <g transform="translate(156.372 57.031)">
                <path
                  className="m-bienvenida-1"
                  d="M671.2,550.856l8.855.031a1.165,1.165,0,0,1,1.159,1.167l-.011,3.6c3.589-4.294,7.261-5.93,13.215-5.907,7.055.027,11.445,2.33,14.908,7.932,4.142-5.484,9.1-7.849,16.247-7.822,7.971.031,14.374,3.169,17.562,8.585,1.911,3.4,2.994,8.257,2.971,14.122l-.1,28.157a1.165,1.165,0,0,1-1.167,1.159l-9.862-.034a1.166,1.166,0,0,1-1.159-1.167l.1-26.692c.019-5.221-.7-8.066-2.437-10a8.989,8.989,0,0,0-7.044-2.96,9.242,9.242,0,0,0-8.722,5.1c-1.11,2.288-1.575,5.126-1.6,10.621l-.088,23.851a1.165,1.165,0,0,1-1.167,1.159l-9.862-.034a1.165,1.165,0,0,1-1.159-1.167l.1-26.692c.019-4.946-.706-7.974-2.254-9.9a9.784,9.784,0,0,0-7.5-3.051c-4.305-.015-7.337,1.9-8.817,5.465-.832,2.014-1.209,5.4-1.228,10.259l-.088,23.851a1.165,1.165,0,0,1-1.167,1.159l-9.862-.034a1.165,1.165,0,0,1-1.159-1.167l.175-48.438a1.165,1.165,0,0,1,1.167-1.159Z"
                  transform="translate(-598.327 -533.744)"
                />
                <path
                  className="m-bienvenida-1"
                  d="M941.311,602.6l-8.855-.03A1.165,1.165,0,0,1,931.3,601.4l.019-5.435c-4.878,5.572-9.74,7.753-16.887,7.727-14.843-.054-25.522-11.178-25.468-26.483.057-15.484,10.907-26.715,25.937-26.662,7.33.027,12.36,2.426,16.555,8.032l.019-5.618a1.166,1.166,0,0,1,1.167-1.159l8.855.031A1.165,1.165,0,0,1,942.653,553l-.175,48.438A1.166,1.166,0,0,1,941.311,602.6ZM901.24,577.532c-.031,8.89,6.087,14.958,14.973,14.988,8.794.031,14.774-6.087,14.809-15.156.034-9.164-6.174-15.6-15.06-15.632-8.52-.03-14.683,6.636-14.717,15.8Z"
                  transform="translate(-733.874 -534.238)"
                />
                <path
                  className="m-bienvenida-1"
                  d="M1056.583,552.243l8.855.031a1.166,1.166,0,0,1,1.16,1.167l-.015,3.787c3.223-4.752,5.793-6.117,11.018-6.1h.915l-.042,11.731c-7.33.156-10.919,4.085-10.946,11.964l-.1,27.058a1.165,1.165,0,0,1-1.167,1.159l-9.862-.034a1.165,1.165,0,0,1-1.159-1.167l.176-48.438A1.166,1.166,0,0,1,1056.583,552.243Z"
                  transform="translate(-836.74 -534.597)"
                />
                <path
                  className="m-bienvenida-1"
                  d="M1136.394,583.354c1.445,6.144,6.743,10.011,13.981,10.038,4.851.019,7.841-1.247,10.846-4.6a1.175,1.175,0,0,1,.873-.4l11.087.042a1.157,1.157,0,0,1,1.072,1.6,23.091,23.091,0,0,1-3.455,5.446c-5.336,6.213-11.853,9.118-20.19,9.088-15.64-.057-27.684-11.88-27.386-26.936a26.98,26.98,0,0,1,29.465-26.082c13.756,1.3,23.538,12.437,23.485,27.272a19.735,19.735,0,0,1-.477,4.672l-39.308-.141Zm27.8-10.617c-1.533-6.51-6.468-10.1-13.981-10.129-7.238-.027-12.2,3.436-14.149,10.026Z"
                  transform="translate(-878.791 -534.786)"
                />
                <path
                  className="m-bienvenida-1"
                  d="M1282.629,600.869,1264.834,556.4a1.162,1.162,0,0,1,1.083-1.594l11.373.042a1.165,1.165,0,0,1,1.1.789l10.884,32.15,12.112-32.093a1.16,1.16,0,0,1,1.091-.751l11.441.042a1.162,1.162,0,0,1,1.06,1.628L1286.427,621.9a1.17,1.17,0,0,1-1.068.7l-10.56-.038a1.159,1.159,0,0,1-1.057-1.632l8.886-20.053Z"
                  transform="translate(-966.348 -536.874)"
                />
                <path
                  className="m-bienvenida-1"
                  d="M520.084,507.814l-9.9-.034L497.61,537.649a1.163,1.163,0,0,0,1.068,1.613l10.64.038a1.165,1.165,0,0,0,1.1-.77l4.657-13.047,7.162,20.552-14.477-.053-5.618-.019a12.018,12.018,0,0,0-11.125,7.357L482.4,573.784a1.163,1.163,0,0,0,1.068,1.613l11.327.042a1.171,1.171,0,0,0,1.072-.7l7.273-16.769,24.1.088,6.88,16.807a1.162,1.162,0,0,0,1.072.721l11.312.042a1.165,1.165,0,0,0,1.079-1.609l-27.49-66.2Z"
                  transform="translate(-482.309 -507.78)"
                />
              </g>
            </g>
            <g transform="translate(239.63 21.087)">
              <path
                className="m-bienvenida-1"
                d="M731.61,449.932l-12.986-.046a17.569,17.569,0,0,1-9.054-2.464,18.111,18.111,0,0,1-6.552-6.628,18.308,18.308,0,0,1,.065-18.233,18.288,18.288,0,0,1,6.6-6.605,17.761,17.761,0,0,1,16.273-.85,18.137,18.137,0,0,1,5.98,4.332l-1.831,1.7a15.612,15.612,0,0,0-11.361-5.011,15.147,15.147,0,0,0-7.8,2.071,15.712,15.712,0,0,0-5.713,5.644,15.656,15.656,0,0,0-.057,15.663,15.827,15.827,0,0,0,5.671,5.74,15,15,0,0,0,7.784,2.155l10.388.038.046-12.875-11.823-.042.008-2.487,14.42.053L731.6,449.94Z"
                transform="translate(-700.62 -413.53)"
              />
              <path
                className="m-bienvenida-1"
                d="M830.91,450.9l-14.851-18.176,4.42.015a17.568,17.568,0,0,0,6.636-1.026,8.783,8.783,0,0,0,3.268-2.67,6.319,6.319,0,0,0,1.4-3.947,6.511,6.511,0,0,0-1.148-3.676,8.567,8.567,0,0,0-3.306-2.856,10.735,10.735,0,0,0-4.969-1.121L812.3,417.4l-.122,33.427-2.487-.008.13-35.914,12.543.046a13.823,13.823,0,0,1,4.748.82,11.673,11.673,0,0,1,3.859,2.307,10.207,10.207,0,0,1,2.448,3.268,8.888,8.888,0,0,1-1,9.2,10.507,10.507,0,0,1-4.321,3.436,11.306,11.306,0,0,1-3.345.954,28.511,28.511,0,0,1-3.455.179l12.928,15.793-3.314-.012Z"
                transform="translate(-768.094 -414.384)"
              />
              <path
                className="m-bienvenida-1"
                d="M913.106,451.583a13.146,13.146,0,0,1-5.217-1.1,13.6,13.6,0,0,1-4.435-3.081,12.667,12.667,0,0,1-2.941-4.432,14.228,14.228,0,0,1-1-5.362l.08-22.379,2.486.008L902,437.616a11.655,11.655,0,0,0,.839,4.424,10.9,10.9,0,0,0,2.391,3.657,11.279,11.279,0,0,0,3.638,2.471,10.947,10.947,0,0,0,4.252.873,11.1,11.1,0,0,0,4.313-.839,11.3,11.3,0,0,0,3.657-2.445,10.926,10.926,0,0,0,2.418-3.638,11.634,11.634,0,0,0,.873-4.416l.08-22.379,2.487.008-.084,22.379a14.249,14.249,0,0,1-1.041,5.354,12.717,12.717,0,0,1-2.971,4.409,13.777,13.777,0,0,1-4.431,3.051,13.161,13.161,0,0,1-5.309,1.056Z"
                transform="translate(-823.658 -414.582)"
              />
              <path
                className="m-bienvenida-1"
                d="M997.744,451.514l.076-35.914,12.818.046a12.54,12.54,0,0,1,5.823,1.4,11.244,11.244,0,0,1,4.241,3.718,8.943,8.943,0,0,1-.038,10.137,11.181,11.181,0,0,1-4.268,3.715,12.531,12.531,0,0,1-5.835,1.361l-10.278-.038-.057,15.583-2.486-.008Zm2.551-18.172,10.278.038a10.262,10.262,0,0,0,4.588-1.007,8.664,8.664,0,0,0,3.352-2.75,6.406,6.406,0,0,0,1.259-3.779,6.472,6.472,0,0,0-1.228-3.844,8.664,8.664,0,0,0-3.333-2.773,10.357,10.357,0,0,0-4.58-1.041l-10.331-.038v15.194Z"
                transform="translate(-884.427 -414.81)"
              />
              <path
                className="m-bienvenida-1"
                d="M1096.151,451.728a17.73,17.73,0,0,1-9.108-2.49,18.425,18.425,0,0,1,.115-31.772,18.137,18.137,0,0,1,18.233.065,18.425,18.425,0,0,1-.114,31.772A17.74,17.74,0,0,1,1096.151,451.728Zm.122-34.144a15.121,15.121,0,0,0-7.853,2.1,16,16,0,0,0-5.74,5.724,15.848,15.848,0,0,0-.057,15.858,15.944,15.944,0,0,0,5.7,5.766,15.536,15.536,0,0,0,15.689.057,15.781,15.781,0,0,0,5.713-5.724,16.023,16.023,0,0,0,.057-15.858,15.752,15.752,0,0,0-5.671-5.766,15.1,15.1,0,0,0-7.837-2.155Z"
                transform="translate(-934.102 -414.464)"
              />
            </g>
          </g>
          <g transform="translate(584.025 433.545)">
            <path
              className="n-bienvenida-1"
              d="M1472.661,683.855l-.054,14.374-17.226-.061.053-14.374-41.314-.148.049-13.989,44.278-67.186,14.5.053-.24,65.92,10.1.038-.057,15.411-10.1-.038Zm-17.036-52.385L1431.659,668.3l23.828.088.134-36.909Z"
              transform="translate(-1414.12 -584.633)"
            />
            <g transform="translate(90.778 41.409)">
              <path
                className="o-bienvenida-1"
                d="M1659.178,679.726l-.957-2.338-3.215-.011-1.01,2.33-1.846-.008,3.8-9.02h1.32l3.757,9.05-1.846-.008Zm-2.578-6.686-.977,2.735,1.93.008-.957-2.742Z"
                transform="translate(-1652.15 -668.239)"
              />
              <path
                className="p-bienvenida-1"
                d="M1689.69,675.805l-3.753-6.578-.023,6.563-1.674-.007.034-9.035,1.907.008,3.719,6.59.023-6.575,1.675.008-.035,9.035-1.869-.008Zm-.881-9.866c-.293,0-1.148-.309-1.38-.309-.305,0-.393.034-.858.3l-.656-.98a1.571,1.571,0,0,1,1.262-.568c.293,0,.977.309,1.309.309a1.029,1.029,0,0,0,.82-.412l.656.992a1.429,1.429,0,0,1-1.152.667Z"
                transform="translate(-1672.002 -664.28)"
              />
              <path
                className="q-bienvenida-1"
                d="M1717.927,679.841a4.676,4.676,0,1,1,4.675-4.664A4.6,4.6,0,0,1,1717.927,679.841Zm.015-7.734a3.062,3.062,0,0,0-.023,6.125,2.939,2.939,0,0,0,2.994-3.032A3,3,0,0,0,1717.942,672.107Z"
                transform="translate(-1689.911 -668.122)"
              />
              <path
                className="r-bienvenida-1"
                d="M1748.95,679.951a2.852,2.852,0,0,1-2.959-2.75l1.747.008a1.1,1.1,0,0,0,1.217,1.129,1.117,1.117,0,0,0,1.228-1.095,1.156,1.156,0,0,0-.412-.919,5.261,5.261,0,0,0-1.563-.7,2.584,2.584,0,1,1,3.432-2.445l-1.735-.008a.912.912,0,0,0-.949-.957.872.872,0,0,0-.931.911.948.948,0,0,0,.5.82,5.832,5.832,0,0,0,1,.408c1.831.69,2.331,1.487,2.327,2.712a2.851,2.851,0,0,1-2.895,2.887Z"
                transform="translate(-1710.202 -668.19)"
              />
            </g>
            <path
              className="s-bienvenida-1"
              d="M1630.15,555.7a46.73,46.73,0,1,0,46.729,46.73A46.73,46.73,0,0,0,1630.15,555.7Zm.339,72.461a25.4,25.4,0,1,1,25.4-25.4A25.394,25.394,0,0,1,1630.489,628.161Z"
              transform="translate(-1518.853 -555.7)"
            />
          </g>
          <path
            className="t-bienvenida-1"
            d="M1802.832,588.539a22.924,22.924,0,0,1-2.567-8.825c-.092-2.284-.145-4.759-.183-7.044a18.66,18.66,0,0,0-5.992-15,26.911,26.911,0,0,0-5.465-3.47,140.1,140.1,0,0,1-12.056-7.555l.141-.309c4.3,1.892,8.608,3.772,12.894,5.7,7.185,2.666,12.036,7.662,13.5,15.316a37.546,37.546,0,0,1,.308,7.09c-.038,4.7-.046,9.4-.24,14.1h-.339Z"
            transform="translate(-1054.317 -116.365)"
          />
        </g>
      </g>
    </svg>
  );
};

export default Slide1;
