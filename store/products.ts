export const productList = defineStore("product", {
  state: () => ({
    product: {} as ProductDataInterface,
    singleProduct: {} as product,
    category: {} as CategoryInterface,
    categoryProduct: {} as product,
  }),

  actions: {
    async fetchproduct() {
      await useApiFetch("https://fakestoreapi.com/products", {
        method: "get",
      }).then((res: any) => {
        this.product = res as ProductDataInterface;
        console.log(this.product);
      });
    },
    async fetchcategory() {
      await useApiFetch("https://fakestoreapi.com/products/categories", {
        method: "get",
      }).then((res: any) => {
        this.category = res as CategoryInterface;
        console.log(this.category);
      });
    },
    async fetchProductData(req: ProductReqData) {
      const { getsingalProductDetails } = useSitesApi();
      const res = await getsingalProductDetails(req.id);
      this.singleProduct = res;
    },
    async fetchCategoryProductData(req: CategoryProductReqData) {
      const { getCategoryproduct } = categoryProductApi();
      const res = await getCategoryproduct(req.cName);
      this.categoryProduct = res;
    },
  },

  getters: {
    getAllProducts(): ProductDataInterface {
      return this.product;
    },
    getAllProductData(): product {
      return this.singleProduct;
    },
    getAllCategoryData(): CategoryInterface {
      return this.category;
    },
    getAllCategoryProductData(): product {
      return this.categoryProduct;
    },
  },
});
