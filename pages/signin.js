import Layout from "../components/Layout";
import Head from 'next/head';
import SigninComponent from "../components/auth/SigninComponent";

const Signin = () => {




  return (
    <>

      <Head>
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700' rel='stylesheet' type='text/css'/>
        <link href="css\bootstrap.min.css" rel="stylesheet"/>
        <link href="css\nifty.min.css" rel="stylesheet"/>
        <link href="css\demo\nifty-demo-icons.min.css" rel="stylesheet"/>
        <link href="plugins\pace\pace.min.css" rel="stylesheet"/>
        <script src="plugins\pace\pace.min.js"></script>
        <link href="css\demo\nifty-demo.min.css" rel="stylesheet"/>
      </Head>
    
      <Layout>
          <SigninComponent />
         
      </Layout>
    </>
  );
};

export default Signin;