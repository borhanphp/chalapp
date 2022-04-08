import styles from '../../styles/Layout.module.css'
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { API } from '../../config';
import SquareIcon from '@mui/icons-material/Square';





const Scrollbar = () => {
    
    const [lastNews, setLastNews] = useState([]);

    useEffect(() => {
        fetch(`${API}/posts`)
        .then((res)=>{
           return res.json()
        })
        .then((data)=>{
            setLastNews(data);
        })
    }, []);




  return (
      <>
       <div className='container-fluid'>
            <div className="row">
                <div className="col-1 bg-dark">
                    <h6 className="text-white fw-bold pt-2">শিরোনাম</h6>
                </div>

                <div className="col-11 bg-danger">
                    <marquee className="text-white fw-bold pt-1">
                        <span><SquareIcon fontSize='small'/>&nbsp;{lastNews[0]?.title}&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span><SquareIcon fontSize='small'/>&nbsp;{lastNews[1]?.title}&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span><SquareIcon fontSize='small'/>&nbsp;{lastNews[2]?.title}&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span><SquareIcon fontSize='small'/>&nbsp;{lastNews[3]?.title}&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span><SquareIcon fontSize='small'/>&nbsp;{lastNews[4]?.title}&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span><SquareIcon fontSize='small'/>&nbsp;{lastNews[5]?.title}&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    </marquee>
                </div>
            </div>
            </div>



        
      </>
  );
};

export default Scrollbar;
