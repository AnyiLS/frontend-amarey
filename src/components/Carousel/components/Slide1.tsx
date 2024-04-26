import React from "react";

interface ISlide {
  height: string;
  onClick: (number: number) => void
}

const Slide1: React.FC<ISlide> = ({ height, onClick }): JSX.Element => {
  // `calc(100vh - ${document.getElementById('navbar__container')?.clientHeight}px)`
  return (
    <div>
      <svg
        viewBox="0 82 1920 1080"
        width="100%"
        height='100vh'
        preserveAspectRatio="none"
      >
        <defs>
      <style>
        {
          ".a-1,.j-1{fill:#001f5f;}.b-1,.f-1{fill:none;}.c-1,.g-1,.h-1{fill:#fff;}.d-1{clip-path:url(#a-1);}.e-1{clip-path:url(#b-1);}.f-1{stroke:#e7002a;stroke-miterlimit:10;stroke-width:3px;}.g-1{font-size:28px;}.g-1,.h-1{font-family:Kiona-Bold, Kiona;}.g-1,.h-1,.k-1{font-weight:700;}.h-1{font-size:46px;}.i-1{fill:url(#c-1);}.j-1{font-size:42px;font-family:Silka-SemiBold, Silka;font-weight:600;}.k-1{font-size:60px;font-family:Silka-Bold, Silka;}.l-1{clip-path:url(#f-1);}.m-1{fill:#e40032;}.n-1{mix-blend-mode:multiply;isolation:isolate;}.o-1{fill:#d6d6d6;}.p-1{fill:#eeebeb;}.q-1{filter:url(#d-1);}"
        }
      </style>
      <clipPath id="a-1">
        <rect className="a-1" width={406.518} height={175.872} />
      </clipPath>
      <clipPath id="b-1">
        <rect className="b-1" width={1307.603} height={1087} />
      </clipPath>
      <pattern
        id="c-1"
        width={1}
        height={1}
        viewBox="46.242 -64.414 1579.565 1077.847"
      >
        <image
          preserveAspectRatio="xMidYMid slice"
          width={1625.149}
          height={1083.433}
          xlinkHref="/images/slider1.jpg"
        />
      </pattern>
      <filter
        id="d-1"
        x={469.995}
        y={643.064}
        width={1464.005}
        height={458.172}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dx={-3} dy={-3} />
        <feGaussianBlur stdDeviation={6} result="e-1" />
        <feFlood floodOpacity={0.251} />
        <feComposite operator="in" in2="e-1" />
        <feComposite in="SourceGraphic" />
      </filter>
      <clipPath id="f-1">
        <rect className="b-1" width={668.162} height={186.805} />
      </clipPath>
    </defs>
    <g transform="translate(0 1.404)">
      <rect
        className="c-1"
        width={1920}
        height={1083}
        transform="translate(0 2.596)"
      />
      <g className="d-1" transform="translate(0 -0.404)">
        <path
          className="a-1"
          d="M267.257,175.872H0V0H406.518V45.533c0,71.985-62.349,130.339-139.261,130.339"
        />
      </g>
    </g>
    <g transform="translate(58.607)">
      <g className="e-1">
        <path
          className="a-1"
          d="M597.5,846.313v-719.4H529.28c-142.747,0-271.5,87.509-326.412,221.858L0,846.313Z"
          transform="translate(64.945 240.687)"
        />
        <path
          className="f-1"
          d="M1193.109.5h-344.3C691.391.5,549.41,88.963,488.849,224.777L85.887,1130.707H1193.109Z"
          transform="translate(131.13 -42.303)"
        />
        <path
          className="c-1"
          d="M45.263,0V41.267L81.026,20.632,63.944,10.777Z"
          transform="translate(337.578 651.493) rotate(-63)"
          onClick={() => onClick(0)}
        />
        <text className="g-1" transform="translate(518.393 579.425)" onClick={() => onClick(0)}>
          <tspan x={0} y={0}>
            {"Conoce M\xE1s"}
          </tspan>
        </text>
        <text className="h-1" transform="translate(248.322 920.083) rotate(-65)" onClick={() => onClick(0)}>
          <tspan x={0} y={0}>
            {"Conoce M\xE1s"}
          </tspan>
        </text>
      </g>
    </g>
    <g transform="translate(328.902 2.162)">
      <path
        className="i-1"
        d="M1695.549,14.03H812.3c-149.253,0-254.9,23.27-341.291,223.851L107.8,1097.463H1695.549Z"
        transform="translate(-104.451 -14.03)"
      />
      <g className="q-1" transform="matrix(1, 0, 0, 1, -328.9, -2.16)">
        <path
          className="c-1"
          d="M0,422.172,144.937,90.939C168.523,35.9,224.173,0,285.908,0H1428V422.172Z"
          transform="translate(491 664.06)"
        />
      </g>
      <text className="j-1" transform="translate(810.098 899.837)">
        <tspan x={-328.734} y={40}>
          {"Un compromiso inquebrantable "}
        </tspan>
        <tspan className="k-1" x={-313.83} y={102}>
          {"con la salud y la vida"}
        </tspan>
      </text>
      <g transform="translate(458.784 701.868)">
        <g className="l-1" transform="translate(0 0)">
          <path
            className="m-1"
            d="M111.42,120.159l26.417,35.928a1,1,0,0,1,.188.577l.15,28.126a.986.986,0,0,1-.979.986l-3.928.019a.98.98,0,0,1-.987-.975l-.053-9.975-14.2.071.053,9.979a.981.981,0,0,1-.979.986l-3.928.019a.975.975,0,0,1-.983-.975l-.135-25.84a.978.978,0,0,1,.975-.986l3.928-.022a.986.986,0,0,1,.987.978L118,169.03l14.2-.071-.056-10.673-23.985-32.629-20.406.1-23.644,32.88.053,10.669,14.2-.075-.053-9.975a.978.978,0,0,1,.975-.986l3.928-.022a.981.981,0,0,1,.987.978l.135,25.84a.983.983,0,0,1-.975.986l-3.928.019a.98.98,0,0,1-.987-.975l-.053-9.979-14.2.075.053,9.979a.986.986,0,0,1-.979.986l-3.928.019a.983.983,0,0,1-.987-.975L58.2,157.08a.98.98,0,0,1,.184-.577l26.038-36.2a.992.992,0,0,1,.792-.409l25.407-.131a.976.976,0,0,1,.8.4M70.511,90.784l-42.5-13.552a.951.951,0,0,0-.6,0L.674,86.064a.982.982,0,0,0-.623,1.241l1.231,3.726a.981.981,0,0,0,1.242.622L12,88.523,16.462,102l-9.481,3.13a.982.982,0,0,0-.623,1.241l1.231,3.726a.986.986,0,0,0,1.242.622L33.386,102.6a.979.979,0,0,0,.623-1.241l-1.231-3.726a.986.986,0,0,0-1.242-.622l-9.481,3.134L17.6,86.675l10.137-3.351,38.6,12.311,3.153,9.529,3.251,9.826L49.1,147.869l-10.141,3.348L34.5,137.744l9.481-3.13a.982.982,0,0,0,.623-1.241l-1.234-3.726a.981.981,0,0,0-1.238-.622l-24.556,8.112a.982.982,0,0,0-.623,1.241l1.231,3.726a.983.983,0,0,0,1.242.622l9.481-3.134,4.461,13.473L23.887,156.2a.981.981,0,0,0-.627,1.241l1.234,3.726a.983.983,0,0,0,1.242.622l26.724-8.832a.983.983,0,0,0,.491-.36l26.034-36.2a.971.971,0,0,0,.135-.881l-7.976-24.1a.983.983,0,0,0-.634-.63m52.413-6.635,42.362-14a.973.973,0,0,0,.488-.36L182.2,46.95a.982.982,0,0,0-.225-1.368l-3.189-2.29a.981.981,0,0,0-1.369.225l-5.83,8.1-11.533-8.281,5.827-8.1a.978.978,0,0,0-.221-1.368l-3.189-2.29a.977.977,0,0,0-1.369.225L146.008,52.783a.982.982,0,0,0,.221,1.372l3.193,2.29a.984.984,0,0,0,1.369-.225l5.827-8.1L168.152,56.4l-6.232,8.663L123.449,77.776l-16.572-11.9-.21-40.486,6.232-8.663,11.533,8.281-5.827,8.1a.979.979,0,0,0,.225,1.368l3.189,2.29a.98.98,0,0,0,1.369-.225l15.094-20.985a.979.979,0,0,0-.225-1.368l-3.189-2.29a.984.984,0,0,0-1.369.225l-5.83,8.1-11.529-8.277,5.827-8.1a.982.982,0,0,0-.225-1.368L118.751.185a.977.977,0,0,0-1.369.225L100.953,23.251a1,1,0,0,0-.184.577L101,68.408a.975.975,0,0,0,.409.791l20.631,14.815a.985.985,0,0,0,.882.135m71.33,5.878,1.193-3.741a.982.982,0,0,0-.638-1.233L167.994,76.5a.99.99,0,0,0-.608,0l-42.362,14a.97.97,0,0,0-.627.634l-7.725,24.183a.976.976,0,0,0,.143.877l26.413,35.931a1,1,0,0,0,.5.352l26.814,8.555a.982.982,0,0,0,1.234-.637l1.193-3.737a.974.974,0,0,0-.634-1.233l-9.515-3.036,4.318-13.518,9.515,3.033a.984.984,0,0,0,1.234-.634l1.193-3.741a.982.982,0,0,0-.638-1.233L153.8,128.44a.978.978,0,0,0-1.231.637l-1.2,3.741a.976.976,0,0,0,.638,1.23l9.511,3.036L157.208,150.6l-10.175-3.243-23.989-32.632L129.249,95.3,167.72,82.593l10.171,3.246-4.315,13.518-9.515-3.036a.988.988,0,0,0-1.234.637l-1.193,3.741a.978.978,0,0,0,.638,1.23l24.634,7.857a.982.982,0,0,0,1.234-.634l1.2-3.741a.985.985,0,0,0-.638-1.233l-9.515-3.033L183.5,87.627l9.515,3.036a.988.988,0,0,0,1.234-.637M73.5,84.231,93.956,69.176a.987.987,0,0,0,.4-.8l-.3-44.58a.967.967,0,0,0-.191-.574L77.174.579A.979.979,0,0,0,75.8.369L72.638,2.7a.981.981,0,0,0-.206,1.372L78.356,12.1,66.92,20.518,61,12.485a.982.982,0,0,0-1.373-.206L56.46,14.607a.98.98,0,0,0-.206,1.372L71.591,36.784a.983.983,0,0,0,1.373.206l3.163-2.328a.981.981,0,0,0,.21-1.372l-5.924-8.033,11.436-8.416,6.333,8.592.266,40.486L72.019,78.008,33.4,65.754l-6.333-8.592L38.5,48.746l5.92,8.033a.983.983,0,0,0,1.373.206l3.163-2.328a.984.984,0,0,0,.21-1.372l-15.341-20.8a.98.98,0,0,0-1.373-.21L29.293,34.6a.981.981,0,0,0-.206,1.372l5.92,8.033L23.575,52.423,17.651,44.39a.984.984,0,0,0-1.373-.21l-3.163,2.328a.981.981,0,0,0-.206,1.372L29.6,70.526a.963.963,0,0,0,.491.352l42.523,13.5a.986.986,0,0,0,.882-.146"
            transform="translate(0.001 -0.001)"
          />
          <path
            className="a-1"
            d="M123.743,53.7h-16.6a22.494,22.494,0,0,1-11.582-3.1,23.092,23.092,0,0,1-8.4-8.435,22.765,22.765,0,0,1-3.106-11.677,22.649,22.649,0,0,1,3.106-11.61,23.414,23.414,0,0,1,8.4-8.468,22.746,22.746,0,0,1,20.8-1.162,23.174,23.174,0,0,1,7.661,5.5l-2.33,2.185a20.009,20.009,0,0,0-14.55-6.35,19.4,19.4,0,0,0-9.957,2.684,20.044,20.044,0,0,0-7.275,7.231,19.311,19.311,0,0,0-2.682,9.987A19.49,19.49,0,0,0,89.913,40.5a20.208,20.208,0,0,0,7.275,7.3,19.176,19.176,0,0,0,9.957,2.718h13.278V34.079H105.311V30.9h18.433Z"
            transform="translate(231.299 19.97)"
          />
          <path
            className="a-1"
            d="M126.309,53.284,107.238,30.14h5.65a22.539,22.539,0,0,0,8.475-1.342,11.318,11.318,0,0,0,4.168-3.423,8.074,8.074,0,0,0,1.763-5.046,8.314,8.314,0,0,0-1.482-4.693A10.956,10.956,0,0,0,121.578,12a13.764,13.764,0,0,0-6.356-1.413H102.365V53.284H99.187V7.415h16.035a17.684,17.684,0,0,1,6.07,1.023,14.931,14.931,0,0,1,4.945,2.928,13.046,13.046,0,0,1,3.144,4.165,11.33,11.33,0,0,1-1.238,11.748,13.449,13.449,0,0,1-5.508,4.412,14.539,14.539,0,0,1-4.273,1.233,37.432,37.432,0,0,1-4.412.247l16.594,20.112Z"
            transform="translate(272.945 20.382)"
          />
          <path
            className="a-1"
            d="M129.226,53.779a16.835,16.835,0,0,1-6.675-1.376,17.44,17.44,0,0,1-5.684-3.917,16.15,16.15,0,0,1-3.778-5.646A18.1,18.1,0,0,1,111.78,36V7.415h3.178V36a14.763,14.763,0,0,0,1.1,5.646,13.955,13.955,0,0,0,3.073,4.656,14.339,14.339,0,0,0,4.66,3.141,13.935,13.935,0,0,0,5.44,1.095,14.089,14.089,0,0,0,5.508-1.095A14.356,14.356,0,0,0,139.4,46.3a13.956,13.956,0,0,0,3.073-4.656A14.83,14.83,0,0,0,143.562,36V7.415h3.182V36a18.169,18.169,0,0,1-1.309,6.845,16.2,16.2,0,0,1-3.778,5.646,17.54,17.54,0,0,1-5.65,3.917,16.926,16.926,0,0,1-6.779,1.376"
            transform="translate(307.599 20.382)"
          />
          <path
            className="a-1"
            d="M125.556,53.284l-.071-45.869h16.384a16.019,16.019,0,0,1,7.451,1.766,14.411,14.411,0,0,1,5.44,4.727,11.433,11.433,0,0,1,0,12.952,14.3,14.3,0,0,1-5.44,4.761,16.019,16.019,0,0,1-7.451,1.766H128.734v19.9Zm3.178-23.216h13.135a13.235,13.235,0,0,0,5.864-1.3,11.157,11.157,0,0,0,4.273-3.531,8.144,8.144,0,0,0,1.587-4.832,8.247,8.247,0,0,0-1.587-4.9,11.157,11.157,0,0,0-4.273-3.531,13.235,13.235,0,0,0-5.864-1.3H128.663Z"
            transform="translate(345.312 20.382)"
          />
          <path
            className="a-1"
            d="M160.09,54.142A22.656,22.656,0,0,1,148.437,51a23.379,23.379,0,0,1-11.582-20.288,23.379,23.379,0,0,1,11.582-20.288,23.185,23.185,0,0,1,23.306,0,23.38,23.38,0,0,1,11.582,20.288A23.38,23.38,0,0,1,171.743,51a22.658,22.658,0,0,1-11.653,3.141m0-43.612a19.337,19.337,0,0,0-10.029,2.718,20.443,20.443,0,0,0-7.312,7.34,19.61,19.61,0,0,0-2.716,10.125,19.6,19.6,0,0,0,2.716,10.125,20.413,20.413,0,0,0,7.312,7.34,19.861,19.861,0,0,0,20.057,0,20.109,20.109,0,0,0,7.275-7.34,19.788,19.788,0,0,0,2.683-10.125,19.8,19.8,0,0,0-2.683-10.125,20.138,20.138,0,0,0-7.275-7.34,19.347,19.347,0,0,0-10.028-2.718"
            transform="translate(376.601 20.019)"
          />
          <path
            className="a-1"
            d="M81.96,27.114H93.673a1.536,1.536,0,0,1,1.534,1.537v4.761c4.727-5.694,9.575-7.872,17.453-7.872,9.335,0,15.15,3.025,19.757,10.414,5.451-7.265,11.995-10.414,21.449-10.414,10.546,0,19.029,4.116,23.269,11.261,2.548,4.483,4,10.9,4,18.65V92.664A1.537,1.537,0,0,1,179.6,94.2H166.556a1.535,1.535,0,0,1-1.538-1.537V57.389c0-6.905-.968-10.658-3.272-13.2a11.882,11.882,0,0,0-9.331-3.876c-5.215,0-9.335,2.422-11.514,6.781-1.456,3.029-2.06,6.781-2.06,14.046V92.664A1.537,1.537,0,0,1,137.3,94.2H124.258a1.537,1.537,0,0,1-1.538-1.537V57.389c0-6.538-.968-10.538-3.028-13.079-2.184-2.542-5.819-4-9.939-4-5.7,0-9.7,2.542-11.634,7.265-1.092,2.665-1.576,7.145-1.576,13.563V92.664A1.537,1.537,0,0,1,95.005,94.2H81.96a1.537,1.537,0,0,1-1.538-1.537V28.651a1.54,1.54,0,0,1,1.538-1.537"
            transform="translate(221.307 70.202)"
          />
          <path
            className="a-1"
            d="M179.215,94.2H167.505a1.537,1.537,0,0,1-1.538-1.537V85.482c-6.423,7.385-12.846,10.294-22.3,10.294-19.633,0-33.815-14.654-33.815-34.878,0-20.464,14.3-35.358,34.179-35.358,9.695,0,16.362,3.149,21.937,10.534V28.648a1.534,1.534,0,0,1,1.538-1.533h11.709a1.534,1.534,0,0,1,1.538,1.533V92.664a1.537,1.537,0,0,1-1.538,1.537m-53.122-32.94C126.093,73.01,134.212,81,145.97,81c11.634,0,19.513-8.116,19.513-20.1,0-12.108-8.243-20.588-20-20.588-11.274,0-19.393,8.843-19.393,20.951"
            transform="translate(302.29 70.202)"
          />
          <path
            className="a-1"
            d="M133.776,27.114h11.713a1.537,1.537,0,0,1,1.535,1.537v5c4.243-6.3,7.635-8.112,14.546-8.112h1.212v15.5c-9.7.244-14.422,5.451-14.422,15.865V92.664a1.537,1.537,0,0,1-1.538,1.537H133.776a1.537,1.537,0,0,1-1.538-1.537V28.651a1.54,1.54,0,0,1,1.538-1.537"
            transform="translate(363.896 70.202)"
          />
          <path
            className="a-1"
            d="M158.8,67.8c1.94,8.112,8.967,13.2,18.541,13.2,6.419,0,10.366-1.683,14.328-6.129a1.551,1.551,0,0,1,1.152-.529h14.666a1.531,1.531,0,0,1,1.426,2.111,30.4,30.4,0,0,1-4.543,7.212c-7.027,8.236-15.634,12.112-26.664,12.112-20.684,0-36.674-15.568-36.352-35.466.33-20.479,18.436-36.471,38.85-34.615,18.2,1.657,31.2,16.326,31.2,35.931a25.922,25.922,0,0,1-.608,6.178Zm36.723-14.17c-2.06-8.6-8.6-13.319-18.542-13.319-9.575,0-16.122,4.6-18.665,13.319Z"
            transform="translate(388.967 70.207)"
          />
          <path
            className="a-1"
            d="M184.21,86.749,160.46,28.071a1.534,1.534,0,0,1,1.426-2.111h15.045a1.532,1.532,0,0,1,1.452,1.035L192.936,69.43,208.8,26.957a1.538,1.538,0,0,1,1.441-1h15.135a1.535,1.535,0,0,1,1.411,2.144l-37.451,86.419a1.539,1.539,0,0,1-1.411.926H173.956a1.538,1.538,0,0,1-1.407-2.156Z"
            transform="translate(441.246 71.357)"
          />
          <path
            className="a-1"
            d="M104.854,19.983H91.764L75.275,59.521a1.535,1.535,0,0,0,1.418,2.126H90.766a1.536,1.536,0,0,0,1.448-1.027l6.1-17.263,9.571,27.126H81.3a15.9,15.9,0,0,0-14.677,9.777l-11.3,27.088a1.536,1.536,0,0,0,1.418,2.126H71.725a1.536,1.536,0,0,0,1.411-.93l9.537-22.2h31.876l9.181,22.181a1.536,1.536,0,0,0,1.422.948h14.962a1.536,1.536,0,0,0,1.418-2.129Z"
            transform="translate(151.91 54.928)"
          />
        </g>
      </g>
     
    </g>
      </svg>
    </div>
  );
};

export default Slide1;