import Document, {Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps} from 'next/document'
import {ServerStyleSheet} from 'styled-components'

class MyDocument extends Document {
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
			
  render() {
    return (
      <Html lang="pt">
        <Head>
            <meta charSet="utf-8" />
            <link rel="icon" href="/favicon.svg" />
            <link
                href="https://fonts.googleapis.com/css2?family=Roboto&family=Ubuntu:wght@700&display=swap"
                rel="stylesheet"
            />
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