export const createuserApi = () => {
  const userCreate = async (req: UserCreateSendRes): Promise<any> => {
    try {
      const res: any = await useApiFetch("https://fakestoreapi.com/users", {
        method: "post",
        body: JSON.stringify({ ...req }),
      });
      return res.body as any;
    } catch (error) {
      console.log(error);
    }
  };
  const userlogin = async (req: UserloginRes): Promise<any> => {
    try {
      const res: any = await useApiFetch(
        "https://fakestoreapi.com/auth/login",
        {
          method: "post",
          body: JSON.stringify({ ...req }),
        }
      );
      console.log("token",res)
      return res as any;
      
    } catch (error) {
      console.log('rtrt',error);
    }
  };
   /**
     * The function `getsingalProductDetails` is an asynchronous function that makes a GET request to an API and
     * returns the response body.
     * @param {string} userid - The `id` parameter is a string that represents the identifier of the history
     * you want to retrieve.
     * @returns The function `getsingalProductDetails` is returning the `body` property of the response object
     * received from the `useApiFetch` function.
     */
   const getUserDetails = async (userid: string): Promise<any> => {
    try {
      const res: any = await useApiFetch(
        `https://fakestoreapi.com/users/${userid}`,
        {
          method: "get",
          // headers: {
          //   grant_type: "client_credentials",
          // },
        }
      );
      console.log(res, "ttt");
      return res as UserCartDataInterface;
    } catch (error) {
      console.log(error);
    }
  };
  return { userCreate, userlogin, getUserDetails };
};
