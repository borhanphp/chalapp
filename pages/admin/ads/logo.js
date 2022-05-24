import React from 'react'
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import Sidebar from '../../../components/Sidebar';
import Dashboard from '../../../components/Dashboard';
import Logo from '../../../components/crud/ads/Logo'
import StyleLinks from '../../../components/StyleLinks';


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
                    <Logo/>
                </div>
            </div>
            </div>
        
      </Admin>
    </Layout>
    
    <div>

 <StyleLinks/>

    </div>
    </>
    
  )
}
AdminIndex.displayName = 'AdminIndex'
export default AdminIndex;
