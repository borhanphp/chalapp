import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import BlogCreate from '../../../components/crud/BlogCreate';
import Link from 'next/link';
import Head from 'next/head';
import Sidebar from '../../../components/Sidebar';

const Blog = () => {

    
    return (



        <>
        
        <Head>
        
           
            <script src="http://cdn.jsdelivr.net/jquery.flot/0.8.3/jquery.flot.min.js"></script>

         

            
        
            <link
                href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700"
                rel="stylesheet"
                type="text/css"
            />
         
            <link href="../../css\bootstrap.min.css" rel="stylesheet" />
            <link href="../../css\nifty.min.css" rel="stylesheet" />
            <link href="../../css\demo\nifty-demo-icons.min.css" rel="stylesheet" />
          <link href="../../plugins\pace\pace.min.css" rel="stylesheet" />
              <link href="../../plugins\summernote\summernote.min.css" rel="stylesheet" />
            <link href="../../plugins\dropzone\dropzone.min.css" rel="stylesheet" />
          


             
   
        </Head>


<Layout>
            <Admin>
            <div className='container-fluid'>
                    <div className='row mt-5'>
                        <div className='col-2'>
                            <Sidebar/>
                        </div>

                        <div className='col-10'>
                            <BlogCreate />
                        </div>
                    </div>
                </div>
                
            </Admin>
        </Layout>







  

    <>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  {/*STYLESHEET*/}
  {/*=================================================*/}
  {/*Open Sans Font [ OPTIONAL ]*/}
  <link
    href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700"
    rel="stylesheet"
    type="text/css"
  />
  {/*Bootstrap Stylesheet [ REQUIRED ]*/}
  <link href="../../css\bootstrap.min.css" rel="stylesheet" />
  {/*Nifty Stylesheet [ REQUIRED ]*/}
  <link href="../../css\nifty.min.css" rel="stylesheet" />
  {/*Nifty Premium Icon [ DEMONSTRATION ]*/}
  <link href="../../css\demo\nifty-demo-icons.min.css" rel="stylesheet" />
  {/*=================================================*/}
  {/*Pace - Page Load Progress Par [OPTIONAL]*/}
  <link href="../../plugins\pace\pace.min.css" rel="stylesheet" />
  {/*Demo [ DEMONSTRATION ]*/}
  <link href="../../css\demo\nifty-demo.min.css" rel="stylesheet" />
  <script src="../../js\jquery.min.js"></script>
            <script src="../../js\bootstrap.min.js"></script>
            <script src="../../js\nifty.min.js"></script>
            <script src="../../js\demo\nifty-demo.min.js"></script>
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
   
    
        </>
        
    );
};

export default Blog;
