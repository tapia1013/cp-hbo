import { useEffect } from 'react';
import { useStateContext } from '../components/HBOProvider';
import { useRouter } from 'next/router'
import MainLayout from '../components/Layout/MainLayout';
import FeaturedMedia from '../components/UI/FeaturedMedia/FeaturedMedia';
// import ForYouList from '../components/UI/ForYouList/ForYouList';
// import JustAdded from '../components/UI/JustAdded/JustAdded';
// import PosterView from '../components/UI/PosterView/PosterView';
import MediaRow from '../components/UI/MediaRow/MediaRow';
import AuthCheck from '../components/AuthCheck';



export default function Home() {
  const globalState = useStateContext();
  const router = useRouter();

  useEffect(() => { }, [])

  return AuthCheck(
    <MainLayout>
      <FeaturedMedia />
      <MediaRow title="Movies" type="large-v" />
      <MediaRow title="Series" type="small-h" />
      <MediaRow title="Action" type="small-v" />
      <MediaRow title="Horror" type="small-v" />
      <MediaRow title="Scifi" type="small-v" />
    </MainLayout>
  )
}