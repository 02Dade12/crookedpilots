import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import "./singlePost.css";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
        title,
        _id,
        slug,
        mainImage{
          asset->{
            _id,
              url
            }
          },
          body,
          "name": author->name,
          "authorImage": author->image
        }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singlePost) return <div>Loading...</div>;

  return (
    <main className="cardz card1">
      <div className="contain row">
        <img
          src={singlePost.mainImage.asset.url}
          alt={singlePost.title}
          className="img col-md-7"/>
           <div className="details col-md-5">
        <h1 className="text-center card-title">{singlePost.title}</h1>
        <h3 className="text-center">Author: {singlePost.name}</h3>
        <img
          src={urlFor(singlePost.authorImage).url()}
          alt={singlePost.name}
          className="rounded cssborder mx-auto d-block w-75"
        />
        
        </div>
          
      
 

        
      </div>
      <div className="details">
        <hr className="my-4" />

        <div className="posted">
          <BlockContent
            blocks={singlePost.body}
            projectId="8oev449o"
            dataset="production"
          />
        </div>
      </div>
    </main>



    // <div className="cards">
    //   <div className="card card1">
    //       <div className="contain">
    //           <img src={singlePost.mainImage.asset.url} alt={singlePost.title}/>
    //       </div>
    //       <div className="details">
    //           <h3>Las Vegas</h3>
    //           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos, minus aperiam adipisci exercitationem.</p>
    //       </div>
    //   </div>


    //   </div>



  );
}