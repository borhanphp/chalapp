import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import BlogUpdate from '../../../components/crud/BlogUpdate';
import Link from 'next/link';
import Head from 'next/head';
import Sidebar from '../../../components/Sidebar';

const Blog = () => {
    return (

        <>

<Head>
            <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700' rel='stylesheet' type='text/css'/>
            {/* <link href="../../css\bootstrap.min.css" rel="stylesheet"/> */}
            <link href="../../css\nifty.min.css" rel="stylesheet"/>
            <link href="../../css\demo\nifty-demo-icons.min.css" rel="stylesheet"/>
            <link href="../../plugins\pace\pace.min.css" rel="stylesheet"/>
            <script src="plugins\pace\pace.min.js"></script>
            <link href="../../css\demo\nifty-demo.min.css" rel="stylesheet"/>
            <script src="../../js\jquery.min.js"></script>
            <script src="../../js\bootstrap.min.js"></script>
            <script src="../../js\nifty.min.js"></script>
            <script src="../../js\demo\bg-images.js"></script>
        </Head>

        <Layout>
            <Admin>
            <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-2'>
                            <Sidebar/>
                        </div>

                        <div className='col-10'>
                            <BlogUpdate />
                        </div>
                    </div>
                </div>
                
             </Admin>
        </Layout>
        </>
    );
};

export default Blog;
