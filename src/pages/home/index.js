import React, { useEffect, useState } from 'react'
import {Cards, SkeletonCard, Gap} from '../../components'
import callingApi from '../../config/callapi'

const Home = () => {

    const [loading,setLoading] =  useState(false);
    const [berita,setBerita] = useState([]);

    useEffect(()=>{
        callingApi('https://api.jikan.moe/v3/anime/1/recommendations')
        .then((res)=>{
            setBerita(res.recommendations)
            setLoading(true)
            const time = setTimeout(()=>{
                setLoading(false)
            },4000)
            return ()=> clearTimeout(time)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    return (
        <div className="container">
            <Gap height={100}/>
            <div className="row">
                {loading && 
                    berita.map((e,i)=>{
                        return(
                            <div key={i} className="col-md-3">
                                <SkeletonCard/>
                            </div>
                        )
                    })
                }
                {!loading && 
                    berita.map((e,i)=>{
                        return(
                            <div key={i} className="col-md-3">
                                <Cards hero={e.image_url} content={e.title} recomenation={e.recommendation_url}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home
