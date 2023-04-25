import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { postStateFamily } from '@/recoil/postStates';
import { createAlarm } from '@/apis/alarm';
import { createLike, deleteLike } from '@/apis/like';
import { AccompanyButton, MyPost } from './style';

interface LikeProps {
  likeId: string;
  authorId: string;
  postId: string;
}

const Like = ({ likeId, authorId, postId }: LikeProps) => {
  const userId = localStorage.getItem('id');
  const [isLike, setIsLike] = useState(likeId ? true : false);
  const [{ post }, setPost] = useRecoilState(postStateFamily(postId));

  const onClickLike = async () => {
    if (isLike) {
      const data = await deleteLike(likeId);
      setIsLike(false);

      if (post) {
        const newPostLike = post.likes.filter((like) => like._id !== data._id);

        setPost({ key: postId, post: { ...post, likes: newPostLike } });
      }
    } else {
      const data = await createLike(postId);
      setIsLike(true);

      if (post) {
        const newPostLike = [...post.likes];

        newPostLike.push(data);
        setPost({ key: postId, post: { ...post, likes: newPostLike } });
      }

      await createAlarm('LIKE', data._id, authorId, data.post);
    }
  };

  return userId === authorId ? (
    <MyPost>내가 작성한 글입니다</MyPost>
  ) : (
    <div onClick={onClickLike}>
      {isLike ? (
        <AccompanyButton clicked={true}>동행 신청함</AccompanyButton>
      ) : (
        <AccompanyButton clicked={false}>동행 신청하기</AccompanyButton>
      )}
    </div>
  );
};

export default Like;