import type { wearOptionsModel } from '~/src/features/wear-options'

export namespace WearDetailed {
	export interface EntityDto {
		id: string
		mainImage: string
		images: string[]
		name: string
		price: number
		options: wearOptionsModel.WearOptions.WearOptionsDto
		description: string
		compound: string
	}
}
