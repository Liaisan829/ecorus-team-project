import collection from "../svg-icons/collectionImg.svg";

export interface CollPointsModel {
    id: number,
    img: any,
    address: string,
    fullAddress: string
    phone: string,
    description: string,
    timetable: string[],
    shop: string,
    items: string[]
}

export const CollPoints: Array<CollPointsModel> = [
    {
        id: 1,
        img: collection,
        address: 'ул.Кремлёвская, 88',
        fullAddress: 'Казань, Кремлёвская, 88',
        phone: '+7 (917) 888 88 88',
        description: 'Пластик, стекло, бумага, металл, старая одежда, батареи, аккумуляторы...',
        timetable: ['Пн - Пт  08:00 - 20:00\n', 'Сб - Вс  10:00 - 18:00'],
        shop: 'H&M',
        items: ['Пластик: от 5 кг', 'Стекло: от 2 кг', 'Стекло: от 2 кг']

    },
    {
        id: 2,
        img: collection,
        address: 'ул.Кремлёвская, 88',
        fullAddress: 'Казань, Кремлёвская, 88',
        phone: '+7 (917) 888 88 88',
        description: 'Пластик, стекло, бумага, металл, старая одежда, батареи, аккумуляторы...',
        timetable: ['Пн - Пт  08:00 - 20:00', 'Сб - Вс  10:00 - 18:00'],
        shop: 'H&M',
        items: ['Пластик: от 5 кг', 'Стекло: от 2 кг']
    },
    {
        id: 3,
        img: collection,
        address: 'ул.Кремлёвская, 88',
        fullAddress: 'Казань, Кремлёвская, 88',
        phone: '+7 (917) 888 88 88',
        description: 'Пластик, стекло, бумага, металл, старая одежда, батареи, аккумуляторы...',
        timetable: ['Пн - Пт  08:00 - 20:00', 'Сб - Вс  10:00 - 18:00'],
        shop: 'H&M',
        items: ['Пластик: от 5 кг', 'Стекло: от 2 кг']
    },
]