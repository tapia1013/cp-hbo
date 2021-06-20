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
      <MediaRow title="Movies" type="large-v" endpoint="api/movies/234" />
      <MediaRow title="Series" type="small-h" endpoint="api/movies/234" />
      <MediaRow title="Action" type="small-v" endpoint="api/movies/234" />
      <MediaRow title="Horror" type="large-v" endpoint="api/movies/234" />
      <MediaRow title="Animations" type="large-h" endpoint="api/movies/234" />
      <MediaRow title="Scifi" type="small-v" endpoint="api/movies/234" />
    </MainLayout>
  )
}