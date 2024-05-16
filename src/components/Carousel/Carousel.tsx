import React from 'react'
import { Carousel } from 'flowbite-react'
import {
	CarouselHeaderItems,
	carouselHeaderItems,
} from 'mocks/carouselHeader.mocks'
import Slide4 from './components/Slide4'
import Mute from 'assets/images/mute.png'
import Mute2 from 'assets/images/Button.png'
import useGeneral from 'hooks/general.hook'

const CarouselHeader: React.FC = () => {
	const { width } = useGeneral();
	const [height, setHeight] = React.useState<number>(0)
	const [selected, setSelected] = React.useState<number | null>(null)
	const [slide, setSlide] = React.useState<boolean>(true)
	const [showPopup, setShowPopup] = React.useState<boolean>(false)
	const [mute, setMute] = React.useState(false)

  React.useEffect(() => {
    setHeight(document.getElementById('navbar__container')?.clientHeight ?? 0)
  }, [])


	return (
		<div style={{ height: '100%' }}>
			<Carousel slide={slide} slideInterval={20000}>
				{carouselHeaderItems.map(
					(item: CarouselHeaderItems, index: number) => (
						<React.Fragment key={index}>
							{selected === index ? (
								<Slide4
									height={`${height}`}
									image={item.image}
									onReturn={() => {
										setSelected(null)
										setSlide(true)
									}}
									onOpenPopup={() => {
										setShowPopup(true)
										const video: HTMLVideoElement =
											document.getElementById(
												'video-1'
											) as HTMLVideoElement
		
										if (video) {
											video.currentTime = 0
											video.play()
										}
									}}
								/>
							) : (
								<React.Fragment>
									{item.slide(`${height}`, (number: number) => {
										setSelected(number)
										setSlide(false)
									})}
								</React.Fragment>
							)}
						</React.Fragment>
					)
				)}
			</Carousel>
			<div
				className="fixed h-screen w-screen top-0 left-0 z-[100]"
				style={{ display: showPopup ? 'flex' : 'none' }}>
				<video
					src="https://grupoamarey.com/pdf/video/Origen pentamero_1.mp4"
					muted={mute}
					className="w-full h-full"
					id="video-1"></video>
				<img
					src={mute ? Mute : Mute2}
					className="absolute w-[3%] left-[1%] top-[83%] mute-bottom"
					alt="Mute"
					onClick={() => setMute(!mute)}
				/>

				<span
					className="absolute top-[5%] right-[5%] text-white text-[30px] text-center font-bold bg-[#00000050] w-[50px] h-[50px] rounded-[100%]"
					onClick={() => {
						setShowPopup(false)
						const video: HTMLVideoElement = document.getElementById('video-1') as HTMLVideoElement

							if (video) video.pause()
					}}>
					X
				</span>
			</div>
		</div>
	)
}

export default CarouselHeader
