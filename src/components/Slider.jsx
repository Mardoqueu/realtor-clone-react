import React from 'react'
import { useEffect, useState } from 'react';
import {collection, orderBy, query, limit, getDocs} from 'firebase/firestore'
import {db} from '../firebase';
import Spinner from '../components/Spinner';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {
    EffectFade,
    Autoplay,
    Navigation,
    Pagination
} from "swiper"
import "swiper/css/bundle"
import { useNavigate } from 'react-router';

export default function Slider() {
    const [listings, setListings] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()

    SwiperCore.use([Autoplay, Navigation, Pagination]);
    useEffect(()=>{
        async function fetchListings(){
            const listingsRef = collection(db, "listings");
            const q = query(listingsRef, orderBy("timestamp", "desc"), limit(5))
            const querySnap = await getDocs(q)
            let listings = [];
            querySnap.forEach((doc)=>{
                return listings.push({
                    id: doc.id,
                    data: doc.data(),
                });
            })
            setListings(listings);
            setLoading(false);
        }
        fetchListings()
    }, [])

    if(loading){
        return <Spinner/>
    }
    if(listings.length === 0){
        return <></>;
    }
  return (
    listings && (
        <> 
            <Swiper slidesPerView={1}
            navigation
            pagination={{type: "progressbar"}}
            effect="fade"
            modules={[EffectFade]}
            autoplay={{delay: 3000}}
            >
            {listings.map(({ data, id }) => (
            <SwiperSlide
              key={id}
              onClick={() => navigate(`/category/${data.type}/${id}`)}
            >
              <div
                style={{
                  background: `url(${data.imgUrls[0]}) center, no-repeat`,
                  backgroundSize: "cover",
                  cursor: "pointer",
                }}
                className="relative w-full h-[300px] overflow-hidden"
              ></div>
              <p className="text-[#f1faee] absolute left-1 top-3 font-medium max-w-[90%] bg-[#457b9d] shadow-lg opacity-90 p-2 rounded-br-3xl">
                {data.name}
              </p>
              <p className="text-[#f1faee] absolute left-1 bottom-1 font-semibold max-w-[90%] bg-[#e63946] shadow-lg opacity-90 p-2 rounded-tr-3xl">
                ${data.discountedPrice ?? data.regularPrice}
                {data.type === "rent" && " / month"}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    )
  );
}