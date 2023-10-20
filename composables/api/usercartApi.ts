export const usercartApi = () => {
    /**
     * The function `getsingalProductDetails` is an asynchronous function that makes a GET request to an API and
     * returns the response body.
     * @param {string} userid - The `id` parameter is a string that represents the identifier of the history
     * you want to retrieve.
     * @returns The function `getsingalProductDetails` is returning the `body` property of the response object
     * received from the `useApiFetch` function.
     */
    const getUserCartDetails = async (userid: string): Promise<any> => {
      try {
        const res: any = await useApiFetch(
          `https://fakestoreapi.com/carts/user/${userid}`,
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
  
    return { getUserCartDetails };
  };
  