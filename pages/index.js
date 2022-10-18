
import { 
  BuyMeCoffee,
  Cover, 
  Title, 
  Section, 
  SocialNetworks,
  PostGrid,
  Post,
  Button,
} from "../components";

import React, {useState} from "react";
import Head from "next/head";

import {loadPosts} from './api/posts'

const LOAD_MORE_STEP = 4;

export default function Home({initialPosts, total }) {

  const [posts, setPosts] = useState(initialPosts);
  const [loadedAmount, setLoaderAmount] = useState(LOAD_MORE_STEP);
  const [loading, setLoading] = useState(false);

  const isLoadButton = total > loadedAmount;

  const getMorePosts = async () => {
    setLoading(true);

    try{
      const data = await fetch(`/api/posts?start=${loadedAmount}&end=${loadedAmount + LOAD_MORE_STEP}`)
      .then((response) => response.json());

      setLoaderAmount(loadedAmount + LOAD_MORE_STEP)
      setPosts([...posts, ...data.posts])
      setLoading(false);
    }catch (error){
      console.log(error);
      setLoading(false);
    }
  }
  
  return (
    <div >
      <Head>
        <title>My super blog</title>
      </Head>
      <Section>
        <Cover title= "Snt.Swetlana<br /> English"/>
        <SocialNetworks />
        <BuyMeCoffee />
      </Section>
      <Section>
        <Title>New Post</Title>
        <PostGrid>
          {posts.map((post) => (
            <Post
              key={post.slug.current}
              {...post} 
            />
          ))}
        </PostGrid>
        {isLoadButton && (
          <div style={{
            display: 'flex',
            justifyContent: 'center'
          }}>
            <Button
            onClick={getMorePosts}            
            disabled={loading}
            >
              Load more posts...
            </Button>
          </div>
        )}
      </Section>
    </div>
  )
}

export const getServerSideProps = async () => {
  const {posts, total} = await loadPosts(0, LOAD_MORE_STEP)

  return {
    props:{
    initialPosts: posts,
    total
  }
  }
}

async function loadData(start, end){
  const query = ``;
}