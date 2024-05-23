import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import Dummyposts from "../components/Dummyposts";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { login, logout } from "../store/authSlice";
import '../index.css'

function Home() {
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
          console.log("user get ka error");
        }
      })
      .finally(() => setLoading(false));
  }, []);

  // if (posts.length === 0) {
  //     return (
  //         <div className="w-full py-8 mt-4 text-center">
  //             <Container>
  //                 <div className="flex flex-wrap">
  //                     <div className="p-2 w-full">
  //                         <h1 className="text-2xl font-bold hover:text-gray-500">
  //                             Login to read posts
  //                             {console.log('error from home side')}
  //                         </h1>
  //                     </div>
  //                 </div>
  //             </Container>
  //         </div>
  //     )
  // }
  return (
    <>
      <section className=" custom-hero-style">Hero section</section>

      <div className="w-full py-8 bg-gray-300">
        <Container>
          <h1 className="text-center font-bold text-3xl mb-5">All POSTS</h1>
          <div className="flex flex-wrap ">
            <Dummyposts></Dummyposts>

            {posts.map((post) => (
              <div key={post.$id} className="p-2 w-1/4">
                <PostCard {...post} />
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}

export default Home;
