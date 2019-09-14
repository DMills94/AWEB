import ReactGA from 'react-ga'

export const initGA = () => ReactGA.initialize('UA-148031226-1')

export const logPageView = path => {
    ReactGA.set({ page: path })
    ReactGA.pageview(path)
}