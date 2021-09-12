import { Fragment, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { Row, Spinner } from 'reactstrap';
import PostCardOne from "../../components/post/PostCardOne";
import { POSTS_LOADING_REQUEST } from "../../redux/types";

const PostCardList = () => {
    const { posts } = useSelector((state) => state.post)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({ type: POSTS_LOADING_REQUEST })
    }, [dispatch])

    return (
        <Fragment>
            <Helmet title="Home" />
            <Row>
                {posts ? <PostCardOne posts={posts} /> : <Spinner />}
            </Row>
        </Fragment>
    )
}

export default PostCardList;