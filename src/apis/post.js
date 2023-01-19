import { URL } from '../utils/constant/auth';
import { ERROR_MESSAGE_POST, POST_URL } from '../utils/constant/post';
import { authRequest, baseRequest, postDataRequest } from './core';

export const getChannels = async () => {
  try {
    const data = await baseRequest.get(POST_URL.CHANNELS);

    return data;
  } catch (error) {
    throw new Error(ERROR_MESSAGE_POST.ERROR_CHANNELS);
  }
};

export const getChannelPosts = async (channelId) => {
  try {
    const data = await baseRequest.get(POST_URL.POSTS_IN_CHANNEL + channelId);
    return data;
  } catch (error) {
    throw new Error(ERROR_MESSAGE_POST.ERROR_POSTS);
  }
};

// post 생성하기
export const createPost = async (data) => {
  try {
    return await postDataRequest.post(POST_URL.CREATE_POST, data);
  } catch (error) {
    throw new Error(ERROR_MESSAGE_POST.ERROR_CREATE_POST);
  }
};

export const getAllPosts = async () => {
  try {
    const data = await baseRequest.get(POST_URL.ALL_POST);
    return data;
  } catch (error) {
    throw new Error(ERROR_MESSAGE_POST.ERROR_POST_DETAIL);
  }
};

// postDetail 받아오기
export const getPostDetail = async (postId) => {
  try {
    const data = await baseRequest.get(POST_URL.POST_DETAIL + postId);
    return data;
  } catch (error) {
    throw new Error(ERROR_MESSAGE_POST.ERROR_POST_DETAIL);
  }
};

// 마이페이지 (게시글 삭제)
export const removePost = async (postId) => {
  const data = await authRequest.delete(URL.MYPAGE_DELETE, {
    data: {
      id: postId,
    },
  });

  if (data.status === 200) {
    window.location.reload();
    return data;
  }
};

// 마이페이지 포스트 불러오기 (모달용)
export const getMyPostDetail = async (postId) => {
  return await baseRequest.get(POST_URL.POST_DETAIL + postId);
};

// 마이페이지 게시글 수정
export const updatePost = async (post) => {
  const res = await authRequest.put(URL.MYPAGE_UPDATE, post);

  if (res.status === 200) {
    window.location.reload();
  }
  return res;
};
