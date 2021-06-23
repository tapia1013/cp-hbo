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
      <h1 style={{ color: 'white' }}>${props.query.id}</h1>

      <FeaturedMedia title={mediaData.title} />
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
















// LINKING THUMBNAILS TO CORRECT MOVIE PAGE








