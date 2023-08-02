import React, { useEffect, useState } from "react";
// import './home.css';
// import './modal.css'
import { useSelector, useDispatch } from 'react-redux';
// import { AllUser } from "../redux/auth/auth.action";
import { addPost, updatePost, deletePost, getPost } from "../Redux/blog.redux/blogAction";
// import { updateAuth } from "../redux/auth/auth.action"
import Modal from "./Modal";
// import User from "./user";
// import Search from "./search"

export default function Post() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { token, name, email, phone } = useSelector((state) => state.authReducer)
      console.log(token,name,email,phone)
   
    let posts = useSelector(store => store.PostReducer.data)
    let [post, setPost] = useState({ msg: "", title: "" });
    let [item, setItem] = useState('')
    let dispatch = useDispatch()
    // console.log(posts)
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);

    };
    const handleSubmit = (event) => {

        event.preventDefault();
        console.log('111')
        if (item === "") {
            let obj = {};
            obj.msg = post.msg;
            obj.title = post.title;
            obj.likes = 0;
            obj.dislikes = 0;
            if (obj.msg !== "" && obj.title !== "") {
                console.log(obj)
                dispatch(addPost(obj))
                dispatch(getPost())
            }

        } else {
            let obj = {};
            obj.title = post.title || item.title;
            obj.msg = post.msg || item.msg;
            obj.likes = item.likes;
            obj.dislikes = item.dislikes;
            obj.id = item._id;
            dispatch(updatePost(obj))
            dispatch(getPost())
        }
        setPost({ msg: "", title: "" })
        closeModal();
    };

    let handleChange = (e) => {
        const { name, value } = e.target;
        setPost({
            ...post, [name]: value
        })
    }

    let updateDetail = (item) => {
        setItem(item)
        setIsModalOpen(true);

    }
    let updateFolower = (item) => {
        console.log(item.follow)
      dispatch(updateAuth(item))
  }
    useEffect(() => {
        // dispatch(AllUser())
        dispatch(getPost())
    }, [])

    return (
        <>
            {/* <Search /> */}
            <hr />
            { /* All user details */}
            <div>
           <div>{name}</div>
           <div>{email}</div>
           <div>{phone}</div>

            </div>
            {/* single user detail */}
            <div className="total">
                {/* <User user={user} /> */}
                {/* show all posts here */}
                <div className="dashboard">
                    <div className="addPost">
                        <button onClick={openModal}>Create Post</button>
                        {isModalOpen &&
                            <Modal closeModal={closeModal} handleSubmit={handleSubmit} handleChange={handleChange} />
                        }
                    </div>
                    <hr />
                    <div className="showPost">
                        {posts[0]? <div className="postsField">
                            {posts.map((el, i) => {
                                return (
                                    <div className="postsCard" key={i}>
                                        <h4>{user.username}</h4>
                                        <p>{el.title}</p>
                                        <p>{el.msg}</p>
                                        <div className="editDelete">
                                            <button onClick={() => updateDetail(el)}>edit detail</button>

                                            <button onClick={() => {dispatch(deletePost(el._id)); dispatch(getPost())}}>delete post</button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>:
                        <img src="https://fptraffic.com/wp-content/uploads/2020/04/Create-Post-Schedule.png" alt="data not exist" style={{width:"80%"}}/>
                        // <img src="https://www.babyday.in/static/media/cart-empty.27846abe.gif"/>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}