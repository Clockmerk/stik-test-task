export namespace WearOptions {
	export enum WearQuantityEnum {
		ZERO = 'NONE',
		LOW = 'ONE',
		NORMAL = 'FEW',
	}

	export type SizeOptionDto = {
		id: string
		name: string
		quantity: WearQuantityEnum
	}

	export type ColorOptionDto = {
		id: string
		name: string
		color: string
	}

	export interface WearOptionsDto {
		colors: ColorOptionDto[]
		sizes: SizeOptionDto[]
	}
}
