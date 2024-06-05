import React from 'react'
import { Flowbite } from 'flowbite-react'
import customTheme from 'customTheme'
import useRouter from 'routes'
import useGeneral from 'hooks/general.hook'
import Video from 'components/Video/Video'
import { NavbarMovil } from 'componentsmovil/NavbarMovil/NavbarMovil'
import { RouterProvider } from 'react-router-dom'
import FooterMobile from 'componentsmovil/Footer/Video'
import FixedContact from 'components/fixed-components/FixedContact'
import FixedSocialNetworks from 'components/fixed-components/FixedSocialNetworks'
import Navbar from 'components/Navbar/Navbar'
import Footer from 'components/Footer/Footer'
import { LanguageProvider, useLanguage } from 'context/language'
import {
	I18nextProvider,
	initReactI18next,
	useTranslation,
} from 'react-i18next'

import i18n from 'i18next'
/** Mocks */
import { customTexts } from 'mocks/translations'

const Component = () => {
	/** Contexts  */
	const { selectedLanguage } = useLanguage()

	/** Hooks */
	const { router } = useRouter()
	const { width } = useGeneral()

	/** States */
	// const [showVideoPopup, setShowVideoPopup] = React.useState<boolean>(true);
	const showVideoPopup = localStorage.getItem('showVideo')

	const setShowVideoPopup = () => {
		localStorage.setItem('showVideo', 'false')
    window.location.reload()
	}

	i18n.use(initReactI18next).init({
		resources: { ...customTexts },
		lng: selectedLanguage,
		interpolation: { escapeValue: false },
	})

	return (
		<I18nextProvider i18n={i18n}>
			<Flowbite theme={{ theme: customTheme }}>
				{showVideoPopup === 'false' ? (
					<div id="main">
						{width >= 768 ? <Navbar /> : <NavbarMovil />}
						<RouterProvider router={router} />
						{width >= 768 ? <Footer /> : <FooterMobile />}
					</div>
				) : (
					<Video onCloseVideo={setShowVideoPopup} />
				)}
			</Flowbite>
		</I18nextProvider>
	)
}

const App: React.FC = (): JSX.Element => {
  React.useEffect(() => {
    const video = localStorage.getItem('showVideo')

    if(!video) localStorage.setItem('showVideo', 'true')
  }, [])

	return (
		<React.Suspense fallback={null}>
			<LanguageProvider>
				<Component />
				{/* <I18nextProvider i18n={i18next}>
          
            {showVideoPopup && window.location.pathname === "/" ? (
              <Video onCloseVideo={() => setShowVideoPopup(false)} />
            ) : (
              <React.Fragment>
                {width >= 768 ? <Navbar t={t}/> : <NavbarMovil />}
                
                  
                  {width >= 768 ? <Footer /> : <FooterMobile />}
                </div>
                {window.location.pathname !== "/contactenos" && width > 767 && (
                  <React.Fragment>
                    <FixedContact />
                    <FixedSocialNetworks />
                  </React.Fragment>
                )}
              </React.Fragment>
            )}
          </Flowbite>
        </I18nextProvider> */}
			</LanguageProvider>
		</React.Suspense>
	)
}

export default App
