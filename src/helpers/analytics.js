import ReactGA from 'react-ga'

export const initGA = () => ReactGA.initialize([{ trackingId: 'UA-148031226-1' }, { trackingId: 'UA-148031226-2' }], { debug: true, alwaysSendToDefaultTracker: true })

export const logPageView = path => {
    ReactGA.set({ page: path })
    ReactGA.pageview(path)
}