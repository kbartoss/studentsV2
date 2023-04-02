import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { ThemeProvider } from './context/ThemeContext'
import store from './redux/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<ThemeProvider>
				<Provider store={store}>
					<App />
				</Provider>
			</ThemeProvider>
		</BrowserRouter>
	</React.StrictMode>
)
