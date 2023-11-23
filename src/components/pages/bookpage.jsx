import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { Rating } from "@material-tailwind/react";

import "./Bookpage.css";
import MusicPlayerSlider, { MediaPlayer } from "../items/lastaudioplayer";
import { CustomRatingIcon } from "../items/customrating";
import "./Components/Styles/App.scss";
import Comment from "./Components/Comment";
import AddComment from "./Components/AddComment";


function Bookpage() {

  const [comments, updateComments] = useState([]);
  const [deleteModalState, setDeleteModalState] = useState(false);

  const getData = async () => {
    const res = await fetch("./data/data.json");
    const data = await res.json();
    updateComments(data.comments);
  };

  useEffect(() => {
    localStorage.getItem("comments") !== null
      ? updateComments(JSON.parse(localStorage.getItem("comments")))
      : getData();
  }, []);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
    deleteModalState
      ? document.body.classList.add("overflow--hidden")
      : document.body.classList.remove("overflow--hidden");
  }, [comments, deleteModalState]);

  // update score
  let updateScore = (score, id, type) => {
    let updatedComments = [...comments];

    if (type === "comment") {
      updatedComments.forEach((data) => {
        if (data.id === id) {
          data.score = score;
        }
      });
    } else if (type === "reply") {
      updatedComments.forEach((comment) => {
        comment.replies.forEach((data) => {
          if (data.id === id) {
            data.score = score;
          }
        });
      });
    }
    updateComments(updatedComments);
  };

  // add comments
  let addComments = (newComment) => {
    let updatedComments = [...comments, newComment];
    updateComments(updatedComments);
  };

  // add replies
  let updateReplies = (replies, id) => {
    let updatedComments = [...comments];
    updatedComments.forEach((data) => {
      if (data.id === id) {
        data.replies = [...replies];
      }
    });
    updateComments(updatedComments);
  };

  // edit comment
  let editComment = (content, id, type) => {
    let updatedComments = [...comments];

    if (type === "comment") {
      updatedComments.forEach((data) => {
        if (data.id === id) {
          data.content = content;
        }
      });
    } else if (type === "reply") {
      updatedComments.forEach((comment) => {
        comment.replies.forEach((data) => {
          if (data.id === id) {
            data.content = content;
          }
        });
      });
    }

    updateComments(updatedComments);
  };

  // delete comment
  let commentDelete = (id, type, parentComment) => {
    let updatedComments = [...comments];
    let updatedReplies = [];

    if (type === "comment") {
      updatedComments = updatedComments.filter((data) => data.id !== id);
    } else if (type === "reply") {
      comments.forEach((comment) => {
        if (comment.id === parentComment) {
          updatedReplies = comment.replies.filter((data) => data.id !== id);
          comment.replies = updatedReplies;
        }
      });
    }

    updateComments(updatedComments);
  };




  const { id } = useParams();
  const [bookDetails, setBookDetails] = useState(null);
  const [isListening, setIsListening] = useState(false);

  

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`https://movieproject0001.pythonanywhere.com/api/v1/books/${id}/`);
        const data = await response.json();
        setBookDetails(data);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchBookDetails();
  }, [id]);

  if (!bookDetails) {
    return (
      <div className="bookpage loading">
        Loading...
      </div>
    );
  }

  const { title, author, description, cover, rate, publish_date, audio_link } = bookDetails;

  return (
    <>
    <motion.div className="bookpage">
      <div className="leftside">
        <div className="contimg">
          <div className="img">
            <img src={cover} alt="" />
          </div>
        </div>
      </div>
      <div className="rightside">
        <h2>{title}</h2>
        <p>{description}</p>
        <p className="capitalize">{author}</p>

        

        <div className="buttons">
          <button onClick={() => setIsListening(!isListening)}>Listen</button>
          <button>Read</button>
        </div>
      </div>

     

     
      
    </motion.div>


    <div className="rate">
      <h2>Rating</h2>
     
     <CustomRatingIcon />
     </div>
     <div className="comment">
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          commentData={comment}
          updateScore={updateScore}
          updateReplies={updateReplies}
          editComment={editComment}
          commentDelete={commentDelete}
          setDeleteModalState={setDeleteModalState}
        />
      ))}
      <AddComment buttonValue={"send"} addComments={addComments} />
    </div>


     {isListening &&
          <MediaPlayer 
            coverImage={cover} 
            artist={author} 
            title={title} 
            album={title} 
            audioSource={audio_link} 
          />}

     </>
  );
}

export default Bookpage;