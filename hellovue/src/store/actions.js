export default {
    //context上下文
    // aUpdateInfo(context,payload){
    //   setTimeout(() => {
    //     context.commit("UpdateInfo");
    //     console.log(payload.message);
    //     payload.success();
    //   },1000);
    // }
    aUpdateInfo(context,payload){
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit("UpdateInfo");
          console.log(payload);
          resolve("success")
        },1000)
      })
    }
}