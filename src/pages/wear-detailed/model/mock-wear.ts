import type { WearDetailed } from './types'
import { wearOptionsModel } from '~/src/features/wear-options'

export const mockWear: WearDetailed.EntityDto = {
	id: '1',
	name: 'ЖАКЕТ УДЛИНЁННЫЙ, БЕЛЫЙ',
	mainImage: 'image/mock/wear-main/image-1.webp',
	images: [
		'image/mock/wear-main/image-1.webp',
		'image/mock/wear-main/image-2.webp',
		'image/mock/wear-main/image-3.webp',
	],
	price: 8900,
	options: {
		sizes: [
			{
				id: '1',
				name: 'XS',
				quantity: wearOptionsModel.WearOptions.WearQuantityEnum.LOW,
			},
			{
				id: '2',
				name: 'S',
				quantity: wearOptionsModel.WearOptions.WearQuantityEnum.NORMAL,
			},
			{
				id: '3',
				name: 'M',
				quantity: wearOptionsModel.WearOptions.WearQuantityEnum.ZERO,
			},
		],
		colors: [
			{
				id: '1',
				name: 'Белый',
				color: '#fff',
			},
			{
				id: '2',
				name: 'Черный',
				color: '#000',
			},
			{
				id: '3',
				name: 'Бежевый',
				color: '#F9F1DC',
			},
		],
	},
	description: 'Жакет удлиненный из мягкой хлопковой ткани с капюшоном. На полочке - потайная молния. На рукавах - манжеты. Застежка на молнии. На спинке - потайная застежка-молния. На полочке - потайная молния. На рукавах - манжеты. Застежка на молнии. На спинке - потайная застежка-молния.',
	compound: 'Состав: 100% хлопок, мешковины: 100% полиэстер',
}
