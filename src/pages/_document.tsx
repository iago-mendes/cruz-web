import Document, {Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps} from 'next/document'
import {ServerStyleSheet} from 'styled-components'

class MyDocument extends Document
{
	static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps>
	{
		const sheet = new ServerStyleSheet()
		const originalRenderPage = ctx.renderPage
		
		try
		{
			ctx.renderPage = () => originalRenderPage(
			{
				enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
			})
				
			const initialProps = await Document.getInitialProps(ctx)
			return {...initialProps, styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				)}
		}
		finally
		{
			sheet.seal()
		}
	}
			
	render()
	{
		const pwa =
		{
			name: 'Cruz',
			description: 'Excelência em Representação Comercial!',
		}

		return (
			<Html lang='pt'>
				<Head>
						<meta charSet='utf-8' />
						<link rel='icon' href='/favicon.svg' />
						<link
							href='https://fonts.googleapis.com/css2?family=Roboto&family=Ubuntu:wght@400;700&display=swap'
							rel='stylesheet'
						/>

						{/* PWA */}
						<meta name='application-name' content={pwa.name} />
						<meta name='apple-mobile-web-app-capable' content='yes' />
						<meta name='apple-mobile-web-app-status-bar-style' content='default' />
						<meta name='apple-mobile-web-app-title' content={pwa.name} />
						<meta name='description' content={pwa.description} />
						<meta name='format-detection' content='telephone=no' />
						<meta name='mobile-web-app-capable' content='yes' />
						<meta name='theme-color' content='#84130B' />
						<link rel='apple-touch-icon' sizes='192x192' href='/icons/192px_background.png' />
						<link rel='manifest' href='/manifest.json' />
						<link rel='shortcut' href='/icons/192px_background.png' type='image/png' />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument