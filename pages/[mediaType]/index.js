import { useEffect } from 'react';
import { useStateContext } from '../../components/HBOProvider';
import { useRouter } from 'next/router'
import MainLayout from '../../components/Layout/MainLayout';
import FeaturedMedia from '../../components/UI/FeaturedMedia/FeaturedMedia';
import MediaRow from '../../components/UI/MediaRow/MediaRow';
import AuthCheck from '../../components/AuthCheck';
import LazyLoad from 'react-lazyload';
import Placeholders from '../../components/UI/Placeholders/Placeholders';
import GenreNav from '../../components/UI/GenreNav/GenreNav';


export default function Home() {
  const globalState = useStateContext();
  const router = useRouter();

  useEffect(() => { }, [])

  return AuthCheck(
    <MainLayout>
      {/**<FeaturedMedia
      mediaUrl="https://www.youtube.com/embed/QJHY4ggYCk4?autoplay=1&loop=1&start=12"
      title="Mortal Kombat"
      location="In Theaters and on HBO MAX. Streaming through May 23."
      linkUrl="/movie/460465"
      type="front"
    />*/}
      <GenreNav />
      <LazyLoad
        offset={-400}
        placeholder={<Placeholders title="Movies" type="large-v" />}
      >
        <MediaRow
          title="Movies"
          type="large-v"
          endpoint="discover/movie?sort_by=popularity.desc&primary_release_year=2021"
        />
      </LazyLoad>
    </MainLayout>
  )
}