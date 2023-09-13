# AI 对话机器人

调用的腾讯接口


```vue
<template>
  <div class="chat-box">
    <section v-for="(item, index) in talkDataList" :key="index">
      <div v-if="item.type == 1" class="is-robot mb-2">
        <div class="img"></div>
        <div class="content">
          <div ref="itemRefs">{{item.content}}</div>
        </div>
      </div>
      <div v-if="item.type == 0" class="is-question">
        <div class="content">
          <div ref="itemRefs">{{item.content}}</div>
        </div>
        <div class="img"></div>
      </div>
    </section>

    <div class="question-panel">
      <van-cell-group>
        <van-field v-model="question" label="文本" placeholder="请输入问题" />
      </van-cell-group>
      <van-button class="send" @click="talk">发送</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      question: "", //客户端提问
      talkDataList: [], // type 1表示机器人的回复  0表示 客户端提问
      //
      signature: ""
    };
  },
  methods: {
    async talk() {
      //每次发送消息
      this.talkDataList.push({
        type: 0,
        content: this.question
      });
    
      this.$axios
        .post(
          "https://chatbot.weixin.qq.com/openapi/aibot/RvH4IXN9av9WZf0B2tTgowpKLLT1BF",
          {
            signature: this.signature,
            query: this.question || ""
          }
        )
        .then(res => {
          if (res && res.data) {
            this.talkDataList.push({
              type: 1,
              content:res.data.create_time
            });
          }
        })
        this.question= ""
    },
    init() {
      this.$axios
        .post(
          "https://chatbot.weixin.qq.com/openapi/sign/RvH4IXN9av9WZf0B2tTgowpKLLT1BF",
          {
            userid: Math.random() 
          }
        )
        .then(res => {
          console.log(res);
          if (res && res.data && res.data.signature) {
            this.signature = res.data.signature;
          }
        });
    }
  },
  mounted() {
    this.init();
  }
};
</script>


<style lang="scss" scoped>
.chat-box {
  width: 750px;
  height: calc(100vh - 45px);
  background: white;
  padding: 10px;
}

.is-robot {
  display: flex;
  .img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    // background: url("../../static/wx.jpg");
    background-size: 100% 100%;
    border: solid 1px #333;
  }
  .content {
    margin-left: 10px;
    padding: 10px;
    background-color: #ecf3fe;
    max-width: 500px;
    height: min-content;
    border-radius: 20px;
    color: red;
  }
}
.is-question {
  display: flex;
  justify-content: flex-end;
  .img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    // background: url("../../static/sansan.jpg");
    background-size: 100% 100%;
    border: solid 1px #333;
  }
  .content {
    margin-right: 10px;
    padding: 10px;
    background-color: #ffe7ae;
    max-width: 500px;
    border-radius: 20px;
    height: min-content;
  }
}
.mb-2 {
  margin-bottom: 20px;
}
.question-panel {
  position: fixed;
  bottom: 10px;
  height: 80px;
  width: 750px;
  display: flex;
  align-content: center;
  left: 0;
  .color {
    line-height: 80px;
  }
  input {
    background-color: #f6f6f5;
    height: 80px;
    margin-left: 10px;
    width: 600px;
    border-radius: 20px;
  }
}
.send {
  font-size: 14px;
  line-height: 80px;
  background-color: aquamarine;
}
</style>



```

效果
![alt ](../../../../docs/.vuepress/public/images/ai_robot.png)