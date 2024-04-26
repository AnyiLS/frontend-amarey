import React from 'react'
import { Carousel } from 'flowbite-react'
import {
	CarouselHeaderItems,
	carouselHeaderItems,
} from 'mocks/carouselHeader.mocks'
import Slide4 from './components/Slide4'

const CarouselHeader: React.FC = () => {
	const [height, setHeight] = React.useState<number>(0)
	const [selected, setSelected] = React.useState<number | null>(null)
	const [slide, setSlide] = React.useState<boolean>(true)

  React.useEffect(() => {
    setHeight(document.getElementById('navbar__container')?.clientHeight ?? 0)
  }, [])

	return (
		<div style={{ height: `calc(100vh - ${(height) - 8}px)` }}>
			<Carousel slide={slide} slideInterval={10000}>
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
		</div>
	)
}

export default CarouselHeader
