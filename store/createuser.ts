export const usercreate = defineStore("usercreateStore", {
  state: () => ({
    userData: {} as UserCreateSendRes,
    userlogin: {} as UserloginRes,
    authenticated: false,
    // userData: {} as UserCreateSendRes,
  }),
  actions: {
    async createUser(req: UserCreateSendRes) {
      console.log(req);
      const { userCreate } = createuserApi();
      const res = await userCreate({
        email: req.email,
        username: req.username,
        password: req.password,
        name: req.name,
        address: req.address,
        phone: req.phone,
      });
      // this.checkoutResData = res;
    },
    async userDetails(req: userId) {
      console.log(req);
      const { getUserDetails } = createuserApi();
      const res = await getUserDetails(req.userid);
      this.userData = res;
    },
    async userlogin(req: UserloginRes) {
      console.log(req);
      const { userlogin } = createuserApi();
      const res = await userlogin({
        username: req.username,
        password: req.password,
      });
      if (res != undefined) {
        const token = useCookie("token"); // useCookie new hook in nuxt 3
        token.value = res.token;
        this.authenticated = true;
      }

      // this.checkoutResData = res;
    },
    logUserOut() {
      const token = useCookie("token"); // useCookie new hook in nuxt 3
      this.authenticated = false; // set authenticated  state value to false
      token.value = null; // clear the token cookie
    },
  },
  getters: {
    getsingleUserDetails(): UserCreateSendRes {
      return this.userData;
    },
  },
});
