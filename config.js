import getConfig from 'next/config'
const {publicRuntimeConfig} = getConfig()

export const API = 'https://chnews-api.herokuapp.com/api';
export const APP_NAME = publicRuntimeConfig.APP_NAME;
export const DOMAIN = "chalnews.herokuapp.com";


export const FB_APP_ID = publicRuntimeConfig.FB_APP_ID;
// publicRuntimeConfig.PRODUCTION 
// ? publicRuntimeConfig.API_PRODUCTION 
// : publicRuntimeConfig.API_DEVELOPMENT;
// export const APP_NAME = publicRuntimeConfig.APP_NAME;