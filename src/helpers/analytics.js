import ReactGA from 'react-ga'

export const initGA = () => ReactGA.initialize([{ trackingId: 'UA-148031226-1', gaOptions: { name: 'live' } }, { trackingId: 'UA-148031226-2', gaOptions: { name: 'dev' } }])

export const logPageView = path => {
    ReactGA.set({ page: path })
    ReactGA.pageview(path)
}