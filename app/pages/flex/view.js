const React = require('react');
const Script = require('nordic/script');
const serialize = require('serialize-javascript');
const { injectI18n } = require("nordic/i18n");
const Head = require("nordic/head");
const Style = require("nordic/style");
const FlexComponent = require('../../components/FlexComponent');

const restclient = require('nordic/restclient')({
    timeout: 5000,
    baseURL: '/api'
});

function View(props) {
  const { title, i18n, translations  } = props;

  const preloadedState = {
    title,
    i18n,
    translations,
  };
 
  return (
   <>
   <Head>
    <title>
        {i18n.gettext(title)}
    </title>
   </Head>
   <Style href='flex.css'/>
    <Script>
       {`
           window.__PRELOADED_STATE__ = ${serialize(preloadedState, {
             isJSON: true,
           })}
       `}
     </Script>

     <Script src='vendor.js' />

     <Script src='flex.js' />

     <FlexComponent/>
   </>
  );
}
 
module.exports = injectI18n(View);