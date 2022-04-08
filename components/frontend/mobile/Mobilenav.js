import React from 'react'
import Link from 'next/link'
import styles from '../../../styles/Frontpage.module.css'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';




const Mobilenav = () => {
  return (
      <>
    <div className='container-fluid my-3'>
        <div className='row'>
            <div className='col-4 mt-3'><MenuIcon className={styles.searchbutton}/></div>
            <div className='col-4'>
              <Link href="/">
                <img src='chalaman.png' className={styles.mobile_logo_img} />
              </Link>
            </div>
            <div className='col-4 mt-3 text-end'><SearchIcon className={styles.searchbutton}/></div>
        </div>
    </div>
    </>
  )
}

export default Mobilenav