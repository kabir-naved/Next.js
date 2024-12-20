// Source: src/pages/index.tsx
import '@/app/globals.css';
import SearchForm from '@/components/SearchForm';
import { Star } from 'lucide-react';
import { SearchParams } from 'next/dist/server/request/search-params';
import { cacheTag } from 'next/dist/server/use-cache/cache-tag';
import StartupCard from '@/components/StartupCard';


export default async function Home({searchParams}:{SearchParams: Promise<{query?: string}>} ) {
  const query = (await searchParams).query;

  const posts = [{
    _createdAt: new Date(),
    views: 100,
    author: {_id:1, name: 'John Doe'},
    _id: '1',
    discription: 'A platform where you can pitch your startup to investors, get feedback and get funded.',
    image: 'https://images.unsplash.com/photo-1634170380004-4',
    category: 'Technology',
    title: 'Tech Beast'
  }]

  return (
    <>
      <section className={`pink_container`}>
        <h1 className="heading">
          Pitch Your Startup, <br />
          Get Funded from Investors
        </h1>

        <p className="sub-heading !max-w-3xl">
          A platform where you can pitch your startup to investors, get feedback and get funded.
        </p>

        <SearchForm query = {query}/> 
      </section>

      <section className='section_container'>
          <p className='text-30-semibold'>
            {query ? `search results for ${query}` : 'Latest Startups'} 
          </p>

          <ul className='mt-7 card_grid'>
             {posts?.length > 0 ? (
             posts.map((post: StartupCardType) => (
              <StartupCard key= {post?._id} post ={post}/>
          ))
          ) : (
            <p className="no-results">No startups found</p>
            )}
          </ul>
      </section>
       
    </>
  );
}
