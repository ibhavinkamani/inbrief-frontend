import Document, {Html, Head, Main, NextScript } from 'next/document';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

class MyDocument extends Document {

    setGoogleTags() {
        if(publicRuntimeConfig.PRODUCTION) {
            return {
                __html: `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-180841557-1');`
            }
        }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="UTF-8"/>
                    <link 
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"/>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/railscasts.min.css" integrity="sha512-0UdQ2subH1uPQAASCGB83KophEAoaJd6ii3D1jKEZ8YMnP7W3dGh3Pn3Pf8P5zKvX+T8Ltp+kY0ABON0mUqP3w==" crossOrigin="anonymous" />
                    <link rel="stylesheet" href="/static/css/styles.css"/>    
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
                    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-180841557-1"></script>
                    <script dangerouslySetInnerHTML = {this.setGoogleTags()}></script>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        );
    }
}

export default MyDocument;