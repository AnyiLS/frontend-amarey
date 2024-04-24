export interface CarouselPortfolio {
    images: string
    title: string
    title_2?: string
    x: number
    x_selected: number
    x_2?: number
    to: string
    viewbox?: string
    viewbox_2?: string
    width?: string
}

export const carouselPortfolio: CarouselPortfolio[] = [
    
    {
        images: '/images/iamge_portfolio_1.jpg',
        title: 'Medicamentos',
        x: 55,
        x_selected: 15,
        to: '/productos/medicamentos'
    },
    {
        images: '/images/image_portfolio_2.jpg',
        title: 'Equipos Médicos',
        x_selected: 15,
        x: 42.715,
        to: '/productos/equipos-medicos'
    },
    {
        images: '/images/dispositivo.png',
        title: 'Dispositivos',
        x_selected: 0,
        x: 82.715,
        x_2: 35,
        title_2: 'médico-quirúrgicos',
        to: '/productos/dispositivos-medico-quirurgicos'
    },
    {
        images: '/images/ortopedi.png',
        title: 'Ortopedia',
        x_selected: 0,
        x: 93.715,
        to: '/productos/ortopedia',
        viewbox: '135.554 6.532 241.811 269.735',
        viewbox_2: '65.554 6.532 241.811 269.735'
    },
    {
        images: '/images/cirugia.png',
        title: 'Cirugía robótica',
        x_selected: 0,
        x: 57.715,
        to: '/productos/cirugia-robotica',
        viewbox: '61.554 6.532 241.811 269.735'
    },
    {
        images: '/images/genetica.png',
        title: 'Genómica y genética',
        x_selected: 0,
        x: 27.715,
        to: '/productos/genomica-y-genetica',
        viewbox: "185.554 6.532 241.811 269.735",
        viewbox_2: '300 0 267 342',
        width: '600'
    },
    {
        images: '/images/ciudado.png',
        title: 'Cuidado avanzado',
        title_2: 'de heridas',
        x_2: 90,
        x_selected: 0,
        x: 42.715,
        to: '/productos/cuidado-avanzado-de-heridas',
        viewbox: '80.554 6.532 241.811 269.735'
    },
    {
        images: '/images/instrumental.png',
        title: 'Instrumental y',
        title_2: 'esterilización',
        x_2: 67.715,
        x_selected: 0,
        x: 63,
        to: '/productos/instrumental-y-estirilizacion',
        viewbox: '30.554 6.532 241.811 269.735',
        viewbox_2: '40 0 306 342',
        width: '600'
    },
    {
        images: '/images/image_portfolio.jpg',
        title: 'Neurointervencionismo',
        x: 15,
        x_selected: 0,
        to: '/productos/neurointervencionismo',
        viewbox: '165.554 6.532 241.811 269.735',
        viewbox_2: '240 0 306 342',
        width: '600'
    },
    {
        images: '/images/logistica.jpg',
        title: 'Logística',
        title_2: 'hospitalaria',
        x_2: 80.715,
        x_selected: 0,
        x: 100,
        to: '/productos/logistica-hospitalaria',
        viewbox: '30.554 6.532 241.811 269.735',
        viewbox_2: '40 0 306 342',
        width: '600'
    }
]