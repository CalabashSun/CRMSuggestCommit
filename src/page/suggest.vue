<template>
  <div id="questionnaire" style="margin-bottom:50px">

    <div class="questionnairelogo">
      <img
        src="../assets/suggest/backlogo.png"
        alt=""
        class="questionnairelogo_img"
      >
    </div>
    <div class="servequestionnaire"></div>
    <div class="questionnaire_con">
      <div
        style="margin-bottom:1rem;"
        class="questionnaire_header">
        <div style="color:#000;text-indent: 2rem;line-height:1.4rem;margin-top:10px;font-size:0.8rem;">感谢您光临晋家门，您的评价对我们很重要哦,帮助我们提高服务水平 <span
            style="color:red;">完成点评可送5积分哦！</span></div>
        <div style="color:#000;text-indent: 1rem;line-height:1.4rem;font-size:0.8rem;">（请填写完整哦，否则无法提交）</div>
      </div>
      <div class="round1"></div>
      <div class="round2"></div>
      <div class="round3"></div>
      <div class="round4"></div>
      <div class="link1"></div>
      <div class="link2"></div>
      <div class="questionnaire_contain">
        <div class="dishrate">
          <h4>评价：</h4>

          <!--是否愿意再来 begin-->
          <div
            style="margin-left:0rem;margin-bottom: 1rem;"
            class="judge1 eatQuestion">
            <p style="line-height:2rem;font-size:0.8rem;font-weight:500;color:#000;">1. 通过本次用餐体验您是否愿意再来</p>
            <div>
              <el-radio
                v-model="form.eatFeel"
                label="1">是</el-radio>
              <el-radio
                v-model="form.eatFeel"
                label="0">否</el-radio>
            </div>
            <div v-if="form.eatFeel == 1">
              <el-input
                type="textarea"
                :rows="1"
                placeholder="你最想点赞的是"
                maxlength="500"
                v-model="eatFeelDescGood"
                style="outline:none;margin-top:1rem;margin-bottom:0.5rem">
              </el-input>
            </div>
            <div v-if="form.eatFeel == 0">
              <el-input
                type="textarea"
                :rows="1"
                placeholder="你最想吐槽的是"
                maxlength="500"
                v-model="eatFeelDesc"
                style="outline:none;margin-top:1rem;margin-bottom:0.5rem">
              </el-input>
            </div>

          </div>


        </div>
        <br />
        <!--是否愿意再来 end-->
        <!--整体感受 begin-->
        <div style="margin-top:1rem">
            <div class="flex">
              <span
                class="labelnew"
              >2. 整体感受</span>
            </div>
            <div  class="flex">
            <el-rate
                v-model="form.overallFeel"
                style="outline:none;height:2rem;border:none;"
              ></el-rate>
              <div>
                <h5
                  v-show="form.overallFeel<2&&form.overallFeel>=1"
                  style="font-size: 14px;
                  color: gray;"
                >糟糕</h5>
                <h5
                  v-show="form.overallFeel<3&&form.overallFeel>=2"
                  style="font-size: 14px;
                  color: gray;"
                >差</h5>
                <h5
                  v-show="form.overallFeel<4&&form.overallFeel>=3"
                  style="font-size: 14px;
                  color: gray;"
                >一般</h5>
                <h5
                  v-show="form.overallFeel<5&&form.overallFeel>=4"
                  style="font-size: 14px;
                  color: #E6A23C;"
                >好</h5>
                <h5
                  v-show="form.overallFeel==5&&form.overallFeel>=5"
                  style="font-size: 14px;
                  color: #E6A23C;"
                >超赞</h5>
              </div>
            </div>
            <br />
            <input
              v-show="form.overallFeel<=3&&form.overallFeel>=1"
              class="inp1"
              type="button"
              v-for="feelTag in feelTagError"
              :key="feelTag.id"
              :value="feelTag.tagName"
              :class="{tagcolor:feelTag.isChoose}"
              @click="feelTag.isChoose=!feelTag.isChoose"
            />
            <input
              v-show="form.overallFeel>=4"
              class="inp1"
              type="button"
              v-for="feelTag in feelTags"
              :key="feelTag.id"
              :value="feelTag.tagName"
              :class="{tagcolor:feelTag.isChoose}"
              @click="feelTag.isChoose=!feelTag.isChoose"
            />
        </div>
        <!--整体感受 end-->
        <br />
        <div>
          <div>
            <span
              class="labelnew"
            >3.  服务体验</span>
          </div>
          <div class="flex">
            <el-rate
              v-model="form.serviceFeel"
              style="dispaly:inline-block;outline:none;height:2rem;border:none;"
            ></el-rate>
            <h5
              v-show="form.serviceFeel<2&&form.serviceFeel>=1"
              style="font-size: 14px;
                  color: gray;"
            >糟糕</h5>
            <h5
              v-show="form.serviceFeel<3&&form.serviceFeel>=2"
              style="font-size: 14px;
                  color: gray;"
            >差</h5>
            <h5
              v-show="form.serviceFeel<4&&form.serviceFeel>=3"
              style="font-size: 14px;
                  color: gray;"
            >一般</h5>
            <h5
              v-show="form.serviceFeel<5&&form.serviceFeel>=4"
              style="font-size: 14px;
                  color: #E6A23C;"
            >好</h5>
            <h5
              v-show="form.serviceFeel==5&&form.serviceFeel>=5"
              style="font-size: 14px;
                  color: #E6A23C;"
            >超赞</h5>
          </div>
          <br />

          <input
            v-show="form.serviceFeel<=3&&form.serviceFeel>=1"
            class="inp1"
            type="button"
            v-for="feelTagg in serviceTagError"
            :key="feelTagg.id"
            :value="feelTagg.tagName"
            :class="{tagcolor:feelTagg.isChoose}"
            @click="feelTagg.isChoose=!feelTagg.isChoose"
          />
          <input
            v-show="form.serviceFeel>=4&&form.serviceFeel>=4"
            class="inp1"
            type="button"
            v-for="feelTaggq in serviceTagGood"
            :key="feelTaggq.id"
            :value="feelTaggq.tagName"
            :class="{tagcolor:feelTaggq.isChoose}"
            @click="feelTaggq.isChoose=!feelTaggq.isChoose"
          />
          <!--产品体验 begin-->
          <div>
            <br />
            <div>
              <span
                class="labelnew"
              >4.  产品体验</span>
            </div>
            <div class="flex">
              <el-rate
                v-model="form.dishFeel"
                style="dispaly:inline-block;outline:none;height:2rem;border:none;"
              ></el-rate>
              <h5
                v-show="form.dishFeel<2&&form.dishFeel>=1"
                style="font-size: 14px;
                  color: gray;"
              >糟糕</h5>
              <h5
                v-show="form.dishFeel<3&&form.dishFeel>=2"
                style="font-size: 14px;
                  color: gray;"
              >差</h5>
              <h5
                v-show="form.dishFeel<4&&form.dishFeel>=3"
                style="font-size: 14px;
                  color: gray;"
              >一般</h5>
              <h5
                v-show="form.dishFeel<5&&form.dishFeel>=4"
                style="font-size: 14px;
                  color: #E6A23C;"
              >好</h5>
              <h5
                v-show="form.dishFeel==5&&form.dishFeel>=5"
                style="font-size: 14px;
                  color: #E6A23C;"
              >超赞</h5>
            </div>
            <br />
            <input
              v-show="form.dishFeel<=3&&form.dishFeel>=1"
              class="inp1"
              type="button"
              v-for="feelTaggqs in dishFeelError"
              :key="feelTaggqs.id"
              :value="feelTaggqs.tagName"
              :class="{tagcolor:feelTaggqs.isChoose}"
              @click="feelTaggqs.isChoose=!feelTaggqs.isChoose"
            />
            <input
              v-show="form.dishFeel>=4&&form.dishFeel>=4"
              class="inp1"
              type="button"
              v-for="feelTaggqss in dishFeelGood"
              :key="feelTaggqss.id"
              :value="feelTaggqss.tagName"
              :class="{tagcolor:feelTaggqss.isChoose}"
              @click="feelTaggqss.isChoose=!feelTaggqss.isChoose"
            />
          </div>
          <!--产品体验 end-->
        </div>
        <br />
        <div>
          <div>
            <span
              class="labelnew"
            >5.  对花味烤肉还有什么建议与意见？（采纳有奖）</span>
          </div>
          <div class="flex">
            <el-input
                type="textarea"
                :rows="1"
                placeholder=""
                maxlength="500"
                v-model="form.suggestInfo"
                style="outline:none;margin-top:1rem;margin-bottom:0.5rem">
              </el-input>
          </div>
        </div>
         <br />
         <div
           style="text-align:center;" 
           v-show="isshow ==true"
         >
           <el-button
             @click="submit()"
             style="width:70%; margin-bottom:2rem;"
             type="warning"
           >提交</el-button>
         </div>
        
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      ppws: "",
      isscore: true,
      isshow: true,
      openid: "",
      payment_amount: "",
      OrderId: "",
      form: {
        eatFeel:1,
        overallFeel: 0, //新鲜度
        serviceFeel: 0, //口味
        dishFeel: 0, //份量
        suggestInfo:""
      },
      feelTagError:[
        {
          id: 1,
          tagName: "味道不好",
          isChoose: false,
        },{
          id: 2,
          tagName: "食材不新鲜",
          isChoose: false,
        },{
          id: 3,
          tagName: "服务不好",
          isChoose: false,
      },{
          id: 4,
          tagName: "卫生脏乱",
          isChoose: false,
      },{
          id: 5,
          tagName: "上菜慢",
          isChoose: false,
      }],
      feelTags: [
        {
          id: 1,
          tagName: "性价比高",
          isChoose: false,
        },
        {
          id: 2,
          tagName: "味道好",
          isChoose: false,
        },
        {
          id: 3,
          tagName: "代烤肉服务棒",
          isChoose: false,
        },
        {
          id: 4,
          tagName: "环境舒服",
          isChoose: false,
        },
        {
          id: 5,
          tagName: "服务周到",
          isChoose: false,
        },
        {
          id: 6,
          tagName: "干净卫生",
          isChoose: false,
        },{
          id: 7,
          tagName: "上菜速度快",
          isChoose: false,
        }
      ],
      serviceTagError: [
        {
          id: 1,
          tagName: "不主动热情",
          isChoose: false,
        },
        {
          id: 2,
          tagName: "上菜慢",
          isChoose: false,
        },
        {
          id: 3,
          tagName: "响应不及时",
          isChoose: false,
        },
        {
          id: 4,
          tagName: "态度差",
          isChoose: false,
        },
      ],
      serviceTagGood: [
        {
          id: 11,
          tagName: "主动热情",
          isChoose: false,
        },
        {
          id: 22,
          tagName: "人性化服务",
          isChoose: false,
        },
        {
          id: 33,
          tagName: "上菜快",
          isChoose: false,
        },
        {
          id: 44,
          tagName: "响应快速",
          isChoose: false,
        },
      ],
      dishFeelError: [
        {
          id: 111,
          tagName: "口味差",
          isChoose: false,
        },
        {
          id: 222,
          tagName: "性价比低",
          isChoose: false,
        },
        {
          id: 333,
          tagName: "产品种类少",
          isChoose: false,
        },{
          id: 444,
          tagName: "食材不新鲜",
          isChoose: false,
        }
      ],
      dishFeelGood: [
        {
          id: 1111,
          tagName: "口味好",
          isChoose: false,
        },
        {
          id: 2222,
          tagName: "性价比高",
          isChoose: false,
        },
        {
          id: 3333,
          tagName: "产品丰富",
          isChoose: false,
        },{
          id: 4444,
          tagName: "食材新鲜",
          isChoose: false,
        }
      ],
      eatFeelDescGood:"",
      eatFeelDesc:"",//通过本次用餐体验您是否愿意再来描述
      overallFeelDesc:"",//整体感受描述
      servicefeelDesc:"",//服务体验描述
      dishesfeelDesc:""//产品体验描述

    };
  },
  created: function () {
    this.ppws = this.$route.query.ppws;
    this.OrderId = this.$route.query.order_id;
    this.payment_amount = 0;
    this.openid = this.$route.query.openid;
    if (!this.payment_amount) {
      this.payment_amount = 0;
    }
    if (!this.OrderId) {
      this.OrderId = "";
      this.isshow=false;
      this.isscore = false;
    }
    this.panduanyonghu();
  },

  methods: {
    panduanyonghu() {
      if (this.OrderId !== "") {
        var url = "https://wx.dongdongmm.com/xwx/tp.asp?lX=exist&ppws=8";
        var data = {
          orderId: this.OrderId,
          openId: this.openid,
        };

        var postData = {
          DB: JSON.stringify(data),
        };
        this.$post(url, postData).then((res) => {
          console.log(res);
          if (res.errorMsg == "order not exist") {
            console.log("订单不存在");
            (this.isscore = false), (this.OrderId = "");
          } else if (res.errorMsg == "user not exist") {
            console.log("用户不存在");
            (this.isscore = false), (this.OrderId = "");
          } else {
            this.tian();
          }
        });
      } else {
        this.isshow = true;
      }
    },
    //反填数据
    tian() {
      var url = "https://wx.dongdongmm.com/xwx/tp.asp?lX=select&ppws=8";
      var data = {
        OrderId: this.OrderId,
      };
      var postData = {
        DB: JSON.stringify(data),
      };
      this.$post(url, postData).then((res) => {
        console.log(res);
        if (res.total > 0) {
          let resultPJ=res.rows[0];
          let _this=this;
          this.form.eatFeel=resultPJ.EatFeel.toString();
          this.form.dishFeel=resultPJ.DishesFeel;
          this.form.overallFeel=resultPJ.OverallFeel;
          this.form.serviceFeel=resultPJ.ServiceFeel;
          this.form.suggestInfo=resultPJ.SuggestInfo;
          if(this.form.eatFeel==0){
            this.eatFeelDesc=resultPJ.EatFeelDesc;
          }else{
            this.eatFeelDescGood=resultPJ.EatFeelDesc;
          }
          
          //绑定整体感受标签
          if(this.form.overallFeel<=3)
          {
            _this.feelTagError.forEach(function(e){
              if(resultPJ.OverallFeelLables.indexOf(e.tagName+"|")!=-1){
                e.isChoose=true;
              }
            })
          }
          if(this.form.overallFeel>3)
          {
            _this.feelTags.forEach(function(e){
              if(resultPJ.OverallFeelLables.indexOf(e.tagName+"|")!=-1){
                e.isChoose=true;
              }
            })
          }
          // _this.feelTags.forEach(function(e){
          //   if(resultPJ.OverallFeelLables.indexOf(e.tagName+"|")!=-1){
          //     e.isChoose=true;
          //   }
          // })
          //绑定服务体验标签
          if(this.form.serviceFeel<=3){
            _this.serviceTagError.forEach(function(e){
              if(resultPJ.ServiceFeelLables.indexOf(e.tagName+"|")!=-1){
                e.isChoose=true;
              }
            })
          }
          if(this.form.serviceFeel>3){
            _this.serviceTagGood.forEach(function(e){
              if(resultPJ.ServiceFeelLables.indexOf(e.tagName+"|")!=-1){
                e.isChoose=true;
              }
            })
          }
          //绑定产品体验标签
          if(this.form.dishFeel<=3){
            _this.dishFeelError.forEach(function(e){
              if(resultPJ.DishFeelLables.indexOf(e.tagName+"|")!=-1){
                e.isChoose=true;
              }
            })
          }

          if(this.form.dishFeel>3){
            _this.dishFeelGood.forEach(function(e){
              if(resultPJ.DishFeelLables.indexOf(e.tagName+"|")!=-1){
                e.isChoose=true;
              }
            })
          }


          
        }else{
          console.log("not data")
          this.isshow=true;
        }
      });
    },
    tosub(str) {
      if (str == "false") {
        return (str = "0");
      } else {
        return (str = "1");
      }
    },
    tostring(str) {
      return str + "";
    },
    todishFresh() {
      if (this.form.dishFresh == 5) {
        (this.dishFreshType = ""), (this.dishFreshDesc = "");
      }
    },
    todishTaste() {
      if (this.form.dishTaste == 5) {
        (this.dishTasteType = ""), (this.dishTasteDesc = "");
      }
    },
    todishWeight() {
      if (this.form.dishWeight == 5) {
        (this.dishWeightType = ""), (this.dishWeightDesc = "");
      }
    },

    toEatQuestion() {
      if (this.eatQuestionType != 1) {
        this.EatQuestion = "";
      }
    },
    submit: function () {
      let _this=this;
      this.servicefeelDesc="";
      this.overallFeelDesc="";
      this.dishesfeelDesc="";
      //判断是否填写是否愿意再来
      if(this.form.eatFeel==-1){
        this.$layer.msg("您还没选择是否再来");
        return;
      }
      //选择了否并且没有写吐槽的内容
      if(this.form.eatFeel==0&&this.eatFeelDesc==""){
        this.$layer.msg("您还没填写最想吐槽的内容");
        return;
      }
      //整体感受
      if(this.form.overallFeel==0){
        this.$layer.msg("您还没在整体感受打分呢");
        return;
      }
      //用户选择的整体感受标签
      if(this.form.overallFeel==1||this.form.overallFeel==2||this.form.overallFeel==3){
        //用户选择的服务标签
        this.feelTagError.forEach(function(e){
          if(e.isChoose){
            _this.overallFeelDesc+=e.tagName+"|";
          }
        })
      }
      if(this.form.overallFeel==4||this.form.overallFeel==5){
        //用户选择的服务标签
        this.feelTags.forEach(function(e){
          if(e.isChoose){
            _this.overallFeelDesc+=e.tagName+"|";
          }
        })
      }

      if(this.overallFeelDesc==""){
        this.$layer.msg("您还没有选择整体感受标签呢");
        return;
      }


      //服务体验
      if(this.form.serviceFeel==0){
        this.$layer.msg("您还没在服务体验打分呢");
        return;
      }else{
        if(this.form.serviceFeel==1||this.form.serviceFeel==2||this.form.serviceFeel==3){
          //用户选择的服务标签
          this.serviceTagError.forEach(function(e){
            if(e.isChoose){
              _this.servicefeelDesc+=e.tagName+"|";
            }
          })
        }
        if(this.form.serviceFeel==4||this.form.serviceFeel==5){
          //用户选择的服务标签
          this.serviceTagGood.forEach(function(e){
            if(e.isChoose){
              _this.servicefeelDesc+=e.tagName+"|";
            }
          })
        }
      }
      if(this.servicefeelDesc==""){
        this.$layer.msg("您还没有选择服务体验标签呢");
        return;
      }
      //产品体验
      if(this.form.dishFeel==0){
        this.$layer.msg("您还没在产品体验打分呢");
        return;
      }else{
        if(this.form.dishFeel==1||this.form.dishFeel==2||this.form.dishFeel==3){
          //用户选择的产品体验标签
          this.dishFeelError.forEach(function(e){
            if(e.isChoose){
              _this.dishesfeelDesc+=e.tagName+"|";
            }
          })
        }
        if(this.form.dishFeel==4||this.form.dishFeel==5){
          //用户选择的产品体验标签
          this.dishFeelGood.forEach(function(e){
            if(e.isChoose){
              _this.dishesfeelDesc+=e.tagName+"|";
            }
          })
          
        }
      }
      if(this.dishesfeelDesc==""){
        this.$layer.msg("您还没有选择产品体验标签呢");
        return;
      }


      //上传数据
      const loading = this.$loading({
          lock: true,
          text: '提交中，请稍等',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
      });
      
      var data = {
        pp:this.$encodeUnicode('花味烤肉'),
        openid: this.openid,
        OrderId: this.OrderId,
        payment_amount: this.payment_amount,
        eatFeel: this.form.eatFeel,
        eatFeelDesc:this.form.eatFeel==0?this.$encodeUnicode(this.eatFeelDesc):this.$encodeUnicode(this.eatFeelDescGood),
        overallFeel: this.form.overallFeel,
        overallFeelLables: this.$encodeUnicode(this.overallFeelDesc),
        serviceFeel:this.form.serviceFeel,
        serviceFeelLables: this.$encodeUnicode(this.servicefeelDesc),
        dishesFeel: this.form.dishFeel,
        dishFeelLables: this.$encodeUnicode(this.dishesfeelDesc),
        suggestInfo:this.$encodeUnicode(this.form.suggestInfo)
      };
      var postData = {
        DB: JSON.stringify(data)
      };

      var url = "https://wx.dongdongmm.com/xwx/tp.asp?lX=add&ppws=8";
      this.$post(url, postData).then(res => {
        console.log(res)
        if (res.success=="success") {
          this.$message.success({
            message: '提交成功',
            type: 'success'
          });
          this.isshow =false
          this.tian()
          loading.close();
        } else if(res.msg=="success"){
          this.$message.success({
            message: '提交成功',
            type: 'success'
          });
          this.isshow =false
          this.tian()
          loading.close();
        }else if(res.msg == '-100'){
          this.$message.success({
            message: '订单id不存在或该订单已评价积分',
            type: 'success'
          });
          this.isshow =false
          this.tian()
          loading.close();
        }else if(res.errorMsg== "repeated submit"){
          loading.close();
        }else{
          this.$message.error('上传失败，请稍后在重试');
          loading.close();
        }
      });

    },
  },
};
</script>
<style>
.inp1 {
  border-color:#C39C61 ;
  background-color: white;
  border: gray;
  width: 5rem;
  height: 1.5rem;
  border-radius: 0.3rem;
  font-size: 10px;
  margin-left: 0.5rem;
  margin-bottom: 0.5rem;
}
.tagcolor {
  background-color: #E6A23C;
}

.questionnaire_con {
  position: relative;
  padding: 6rem 1rem 1rem 1rem;
}
.round1 {
  width: 3vw;
  height: 3vw;
  border-radius: 50%;
  background-color: #a2e6e5;
  position: absolute;
  top: 3.5rem;
  left: 4rem;
}
.round2 {
  width: 3vw;
  height: 3vw;
  border-radius: 50%;
  background-color: #a2e6e5;
  position: absolute;
  top: 3.5rem;
  right: 4rem;
}
.round3 {
  width: 3vw;
  height: 3vw;
  border-radius: 50%;
  background-color: #a2e6e5;
  position: absolute;
  top: 6.5rem;
  left: 4rem;
}
.round4 {
  width: 3vw;
  height: 3vw;
  border-radius: 50%;
  background-color: #a2e6e5;
  position: absolute;
  top: 6.5rem;
  right: 4rem;
}
.link1 {
  width: 0.2rem;
  height: 2.8rem;
  background-color: #a2e6e5;
  position: absolute;
  top: 4rem;
  left: 4.25rem;
}
.link2 {
  width: 0.2rem;
  height: 2.8rem;
  background-color: #a2e6e5;
  position: absolute;
  top: 4rem;
  right: 4.25rem;
}
#questionnaire {
  /*background-image: url("https://wx.dongdongmm.com/images/huawei/pjbackground.jpg");*/
  background-size: 100% 100%;

  position: relative;
}
.servequestionnaire {
  position: absolute;
  top: 4rem;
  right: 6.5rem;
  font-size: 1rem;
  text-align: center;
  color: #417648;
  font-size: 1.5rem;
}
.questionnaire_header {
  background:white;
  border-radius: 5vw;
  border: 3px solid #C39C61;
  padding: 2vw 2vw 4vw 2vw;
  position: absolute;
  width: 94vw;
  box-sizing: border-box;
  top: -8vw;
  left: 3vw;
}
.questionnaire_contain {
  border-radius: 5vw;
  border: 3px solid #C39C61;
  padding: 0 2vw;
}
.questionnaire_contain p {
  font-size: 0.8rem;
  color: #000;
}
.questionnairelogo {
  width: 100vw;
}
.questionnairelogo_img {
  width: 100%;
  opacity: 0.9;
}
#questionnaire h4 {
  margin: 1rem 0;
  color: #000;
  font-size: 1rem;
}
#questionnaire .el-radio {
  color: #000;
}
#questionnaire .radio {
  margin-bottom: 1rem;
}
#questionnaire .labelnew {
  text-align: left;
  line-height: 2rem;
  font-size: 0.8rem;
  font-weight: 500;
  color: #000;
}
#questionnaire p {
  margin-bottom: 0.5rem;
}
#questionnaire .flex {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
#questionnaire .el-rate__icon {
  font-size: 1rem;
  outline: none;
}
#questionnaire .el-rate__icon {
  font-size: 2rem;
  outline: none;
}
#questionnaire .el-radio__input.is-checked + .el-radio__label {
  color: #f5ab3d;
  font-size: 0.8rem;
}
#questionnaire .el-radio__input.is-checked .el-radio__inner {
  border-color: #e6a23c;
  background: #e6a23c;
  font-size: 0.8rem;
}

#questionnaire .el-radio-button__orig-radio:checked + .el-radio-button__inner {
  border-color: #e6a23c;
  background: #e6a23c;
  box-shadow: none;
  font-size: 0.8rem;
}
#questionnaire .must {
  margin: 0;
  padding: 0;
  color: rgb(255, 152, 152);
  opacity: 0.8;
  text-indent: 2em;
  font-size: 0.6rem;
  line-height: 1rem;
}

#questionnaire .active6 {
  color: red;
}
#questionnaire .active2 {
  color: red;
}
#questionnaire .el-input__inner {
  width: 16rem;
}
#questionnaire .active5 {
  /* height: 9rem; */
  margin-top: 0;
}
#questionnaire .el-radio__label {
  padding-left: 0.4rem;
  font-size: 0.6rem;
}
#questionnaire .el-radio {
  margin-right: 1rem;
}
#questionnaire .el-radio__inner {
  border: 1px solid #000;
}
#questionnaire .usherSpeed .el-radio {
  margin-left: 1.4rem;
}
#questionnaire .service .el-radio {
  margin-left: 1.4rem;
}
#questionnaire .eatQuestion .el-radio {
  margin-left: 1.4rem;
}
#questionnaire .el-icon-star-off {
  color: #666 !important;
}
</style>
