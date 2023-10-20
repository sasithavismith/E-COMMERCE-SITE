export const categoryProductApi = () => {
    /**
     * The function `getCategoryProduct` is an asynchronous function that makes a GET request to an API and
     * returns the response body.
     * @param {string} cName - The `id` parameter is a string that represents the identifier of the history
     * you want to retrieve.
     * @returns The function `getCategoryProduct` is returning the `body` property of the response object
     * received from the `useApiFetch` function.
     */
    const getCategoryproduct = async (cName: string): Promise<any> => {
      try {
        const res: any = await useApiFetch(
          `https://fakestoreapi.com/products/category/${cName}`,
          {
            method: "get",
            // headers: {
            //   grant_type: "client_credentials",
            // },
          }
        );
        return res as product;
      } catch (error) {
        console.log(error);
      }
    };
  
    return { getCategoryproduct };
  };
  