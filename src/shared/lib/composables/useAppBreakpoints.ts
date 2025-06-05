import { BREAKPOINTS } from '../../config/breakpoints'

export const useAppBreakpoints = () => {
	const breakpoints = useBreakpoints(BREAKPOINTS)

	const isTablet = useMediaQuery('(max-width: 768px)', { ssrWidth: 1440 })

	return {
		...breakpoints,
		isTablet,
	}
}
