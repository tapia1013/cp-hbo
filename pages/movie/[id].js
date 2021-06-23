import Head from 'next/head';
import { useEffect, useState } from 'react';
import MainLayout from '../../components/Layout/MainLayout';
import AuthCheck from '../../components/AuthCheck';
import CastInfo from '../../components/UI/CastInfo/CastInfo';
import FeaturedMedia from '../../components/UI/FeaturedMedia/FeaturedMedia';
// import PosterView from '../../components/UI/PosterView/PosterView';
import MediaRow from '../../components/UI/MediaRow/MediaRow';
import { useRouter } from 'next/router';
import axios from 'axios';



export default function SingleMediaPage(props) {
  const router = useRouter();
  const [mediaData, setMediaData] = useState(false);
  // const { id } = router.query;

  console.log(props);
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${props.query.id}?&api_key=c1b0e735ad3ff470f44fa29c9a1e6189&language=en-US`)
      .then(function (response) {
        setMediaData(response.data)
        console.log(response);
      })
      .catch(function (error) {
        console.log('Error response for ');
        console.log(error);
      })
  }, [])



  console.log(router.query);

  return AuthCheck(
    <MainLayout>
      <FeaturedMedia
        title={mediaData.title}
        mediaUrl={`https://image.tmdb.org/t/p/w1280${mediaData.backdrop_path}`}
        title="Mortal Kombat"
        location="In Theaters and on HBO MAX. Streaming through May 23."
        linkUrl="/movies/id"
        type="single" />
      {/*
      <MediaRow title="More Like This" type="small-v" />
      */}
      <CastInfo />
    </MainLayout>
  )
}



export async function getServerSideProps(context) {
  return {
    props: { query: context.query },
  }
}










