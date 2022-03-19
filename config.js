import getConfig from 'next/config'
const {publicRuntimeConfig} = getConfig()

export const API = 'https://chalaman2.herokuapp.com/api';
export const APP_NAME = publicRuntimeConfig.APP_NAME;



// publicRuntimeConfig.PRODUCTION 
// ? publicRuntimeConfig.API_PRODUCTION 
// : publicRuntimeConfig.API_DEVELOPMENT;
// export const APP_NAME = publicRuntimeConfig.APP_NAME;