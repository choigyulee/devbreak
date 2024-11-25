// 내가 즐겨찾기 한 블로그 목록 조회
import axiosInstance from "../axiosInstance";


export default async function getHomeBlogLike(){
    try {
        const response = await axiosInstance.get(
            `/api/home/blog/like`,
        )
        return response.data;
    }  catch (error) {
        console.error('에러 발생:', error);
        throw error;
    }
}

