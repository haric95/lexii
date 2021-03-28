import Axios from "axios";

const fetcher = Axios.create({});

// fetcher.interceptors.request.use((request) => {
//   try {
//     const userId = localStorage.getItem("userId");
//     if (!userId) {
//       throw new Error();
//     }
//     return { ...request, data: { ...request.data, userId } };
//   } catch (err) {
//     return request;
//   }
// });

export { fetcher };
