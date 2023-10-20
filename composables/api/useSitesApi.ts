export const useSitesApi = () => {
  /**
   * The function `getsingalProductDetails` is an asynchronous function that makes a GET request to an API and
   * returns the response body.
   * @param {string} id - The `id` parameter is a string that represents the identifier of the history
   * you want to retrieve.
   * @returns The function `getsingalProductDetails` is returning the `body` property of the response object
   * received from the `useApiFetch` function.
   */
  const getsingalProductDetails = async (id: string): Promise<any> => {
    try {
      const res: any = await useApiFetch(
        `https://fakestoreapi.com/products/${id}`,
        {
          method: "get",
          // headers: {
          //   grant_type: "client_credentials",
          // },
        }
      );
      console.log(res, "ttt");
      return res as product;
    } catch (error) {
      console.log(error);
    }
  };

  return { getsingalProductDetails };
};
