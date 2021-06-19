import Head from 'next/head'
import MainLayout from '../components/Layout/MainLayout';
import CastInfo from '../components/UI/CastInfo/CastInfo';
import FeaturedMedia from '../components/UI/FeaturedMedia/FeaturedMedia';
import PosterView from '../components/UI/PosterView/PosterView';
import AuthCheck from '../components/AuthCheck';


export default function HomeView() {
  return AuthCheck(
    <MainLayout>
      <FeaturedMedia />
      <PosterView />
      <CastInfo />
    </MainLayout>
  )
}
