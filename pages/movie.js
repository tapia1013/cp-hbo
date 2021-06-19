import Head from 'next/head'
import MainLayout from '../components/Layout/MainLayout';
import AuthCheck from '../components/AuthCheck';
import CastInfo from '../components/UI/CastInfo/CastInfo';
import FeaturedMedia from '../components/UI/FeaturedMedia/FeaturedMedia';
import PosterView from '../components/UI/PosterView/PosterView';
import MediaRow from '../components/UI/MediaRow/MediaRow';



export default function HomeView() {
  return AuthCheck(
    <MainLayout>
      <FeaturedMedia />
      <MediaRow title="More Like This" type="small-v" />
      <CastInfo />
    </MainLayout>
  )
}
