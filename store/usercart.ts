export const userCartData = defineStore("cart", {
    state: () => ({
      usercart: {} as UserCartDataInterface,
    }),
  
    actions: {
      async fetchuserCart(req: userId) {
        console.log('id',req)
        const { getUserCartDetails } = usercartApi();
        const res = await getUserCartDetails(req.userid);
        this.usercart = res;
      },
    },
  
    getters: {
        getAllCart(): UserCartDataInterface {
        return this.usercart;
      },
     
    },
  });
  