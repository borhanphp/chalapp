import React from 'react'
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/Layout';
import Admin from '../../components/auth/Admin';
import Sidebar from '../../components/Sidebar';
import Dashboard from '../../components/Dashboard';


const AdminIndex = () => {
  return (
    <>

   
    
    <Layout>
      <Admin>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-2'>
                    <Sidebar/>
                </div>

                <div className='col-md-10'>
                    <h1 className='text-center'><Dashboard/></h1>
                </div>
            </div>
            </div>
        
      </Admin>
    </Layout>
    
    <div>

    <>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <title>Dashboard | Nifty - Admin Template</title>
  {/*STYLESHEET*/}
  {/*=================================================*/}
  {/*Open Sans Font [ OPTIONAL ]*/}
  <link
    href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700"
    rel="stylesheet"
    type="text/css"
  />
  {/*Bootstrap Stylesheet [ REQUIRED ]*/}
  <link href="css\bootstrap.min.css" rel="stylesheet" />
  {/*Nifty Stylesheet [ REQUIRED ]*/}
  <link href="css\nifty.min.css" rel="stylesheet" />
  {/*Nifty Premium Icon [ DEMONSTRATION ]*/}
  <link href="css\demo\nifty-demo-icons.min.css" rel="stylesheet" />
  {/*=================================================*/}
  {/*Pace - Page Load Progress Par [OPTIONAL]*/}
  <link href="plugins\pace\pace.min.css" rel="stylesheet" />
  {/*Demo [ DEMONSTRATION ]*/}
  <link href="css\demo\nifty-demo.min.css" rel="stylesheet" />
  {/*=================================================

    REQUIRED
    You must include this in your project.


    RECOMMENDED
    This category must be included but you may modify which plugins or components which should be included in your project.


    OPTIONAL
    Optional plugins. You may choose whether to include it in your project or not.


    DEMONSTRATION
    This is to be removed, used for demonstration purposes only. This category must not be included in your project.


    SAMPLE
    Some script samples which explain how to initialize plugins or components. This category should not be included in your project.


    Detailed information and more samples can be found in the document.

    =================================================*/}
  {/*TIPS*/}
 
  {/*===================================================*/}
  {/* END OF CONTAINER */}
  {/*JAVASCRIPT*/}
  {/*=================================================*/}
  {/*jQuery [ REQUIRED ]*/}
  {/*BootstrapJS [ RECOMMENDED ]*/}
  {/*NiftyJS [ RECOMMENDED ]*/}
  {/*=================================================*/}
  {/*Demo script [ DEMONSTRATION ]*/}
  {/*Flot Chart [ OPTIONAL ]*/}
  {/*Sparkline [ OPTIONAL ]*/}
  {/*Specify page [ SAMPLE ]*/}
</>

    </div>
    </>
    
  )
}
AdminIndex.displayName = 'AdminIndex'
export default AdminIndex;
