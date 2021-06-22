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
import LazyLoad from 'react-lazyload';
import Placeholders from '../components/UI/Placeholders/Placeholders';


export default function Home() {
  const globalState = useStateContext();
  const router = useRouter();

  useEffect(() => { }, [])

  return AuthCheck(
    <MainLayout>
      <FeaturedMedia
        videoUrl="https://www.youtube.com/embed/QJHY4ggYCk4?autoplay=1&loop=1&start=12"
        title="Mortal Kombat"
        location="In Theaters and on HBO MAX. Streaming through May 23."
        mediaUrl="/movies/id"
      />
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
      <LazyLoad
        offset={-400}
        placeholder={<Placeholders title="Movies" type="small-h" />}
      >
        <MediaRow
          title="Series"
          type="small-h"
          endpoint="discover/tv?primary_release_year=2021"
        />
      </LazyLoad>
      <LazyLoad
        offset={-400}
        placeholder={<Placeholders title="Movies" type="small-v" />}
      >
        <MediaRow
          title="Action"
          type="small-v"
          endpoint="discover/movie?with_genres=28&primary_release_year=2021"
        />
      </LazyLoad>
      <LazyLoad
        offset={-400}
        placeholder={<Placeholders title="Movies" type="large-v" />}
      >
        <MediaRow
          title="Horror"
          type="large-v"
          endpoint="discover/movie?with_genres=27&primary_release_year=2021"
        />
      </LazyLoad>
      <LazyLoad
        offset={-400}
        placeholder={<Placeholders title="Movies" type="large-h" />}
      >
        <MediaRow
          title="Animations"
          type="large-h"
          endpoint="discover/movie?with_genres=16&primary_release_year=2021"
        />
      </LazyLoad>
      <LazyLoad
        offset={-400}
        placeholder={<Placeholders title="Movies" type="small-v" />}
      >
        <MediaRow
          title="Scifi"
          type="small-v"
          endpoint="discover/movie?with_genres=878&primary_release_year=2021"
        />
      </LazyLoad>
    </MainLayout>
  )
}