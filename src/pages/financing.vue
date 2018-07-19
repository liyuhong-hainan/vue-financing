<template>
  <div>
    <div class="main-wrapper">
      <section class="chat-list">
        <div class="chat-wrapper" ref="chatList">
          <ul class="chat-ul">
            <template v-for="item in records">
              <!--首次未诊断过-->
              <li class="item" v-if="item.type==0&&item.id==-1">
                <div class="chat-service">
                  <div class="left-avatar">
                    <img class="avatar" src="../assets/financing/service@3x.png"/>
                  </div>
                  <div class="right-com">
                    <div class="triangle"></div>
                    <div class="white-box text">
                      <div class="text-content ">
                        您好<img style="width: 20px;height: 20px;vertical-align: middle;margin-left: 5px" src="../assets/financing/emotions_happy@2x.png" />  我是小智，来帮您实现投资目标！<br>先通过几个问题来认识您，真实回答便于推荐产品哦~
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <!--Mike回复文案-->
              <li class="item" v-if="item.type==0&&item.id==0">
                <div class="chat-service single-text">
                  <div class="left-avatar">
                    <img class="avatar" src="../assets/financing/service@3x.png"/>
                  </div>
                  <div class="right-com">
                    <div class="triangle"></div>
                    <div class="white-box text" v-html="item.content">
                    </div>
                  </div>
                </div>
              </li>
              <!--用户回复文案-->
              <li class="item" v-if="item.type==1" style="min-height: 50px;">
                <div class="chat-user">
                  <div class="left-com">
                    <div class="triangle"></div>
                    <div class="white-box text" v-html="item.content">
                    </div>
                  </div>
                  <div class="right-avatar">
                    <img class="avatar" src="../assets/financing/user@3x.png"/>
                  </div>
                </div>
              </li>
              <!--先生还是女士-->
              <li class="item" v-if="item.type==0&&item.id==1">
                <div class="chat-service">
                  <div class="left-avatar">
                    <img class="avatar" src="../assets/financing/service@3x.png"/>
                  </div>
                  <div class="right-com">
                    <div class="triangle"></div>
                    <div class="white-box width-full">
                      <div class="title">
                        (1/5) 我该称呼您先生还是女士呢？
                      </div>
                      <div class="com  qu-sex">
                        <div class="sex-item" @click.stop="singleSelect(item, 1, '(1/5) 我该称呼您先生还是女士呢？', '先生')">
                          <div class="select-icon male">
                            <i class="selected" v-show="item.select==1"></i>
                          </div>
                          <div class="text">男</div>
                        </div>
                        <div class="sex-item" @click.stop="singleSelect(item, 2, '(1/5) 我该称呼您先生还是女士呢？', '女士')">
                          <div class="select-icon female">
                            <i class="selected" v-show="item.select==2"></i>
                          </div>
                          <div class="text">女</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <!--年龄-->
              <li class="item"  v-if="item.type==0&&item.id==2">
                <div class="chat-service">
                  <div class="left-avatar">
                    <img class="avatar" src="../assets/financing/service@3x.png"/>
                  </div>
                  <div class="right-com">
                    <div class="triangle"></div>
                    <div class="white-box width-full">
                      <div class="title">
                        (2/5) 请问您的年龄是？
                      </div>
                      <div class="com qu-num qu-age" style="margin-left: 20px; margin-right: 20px">
                        <div class="num-item">
                          <div class="num-wrapper">
                            <a class="num-up age-up1">
                              <span class="icon-up"></span>
                            </a>
                            <swiper :options="swiperAgeOption1" ref="swiperAge1">
                              <swiper-slide v-for="num in swiperAgeOption1.nums" :key="num">{{num}}</swiper-slide>
                            </swiper>
                            <a class="num-down age-down1">
                              <span class="icon-down"></span>
                            </a>
                          </div>
                        </div>
                        <div class="num-item">
                          <div class="num-wrapper">
                            <a class="num-up age-up2">
                              <span class="icon-up"></span>
                            </a>
                            <swiper :options="swiperAgeOption2" ref="swiperAge2">
                              <swiper-slide v-for="num in swiperAgeOption2.nums" :key="num">{{num}}</swiper-slide>
                            </swiper>
                            <a class="num-down age-down2">
                              <span class="icon-down"></span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="qu-num-btn" @click="getAge(item.id, '(2/5) 请问您的年龄是？')" style="margin-left: -60px">选好了,继续</div>
                  </div>
                </div>
              </li>
              <!--符合下面哪种情况（单身、成家等）-->
              <li class="item"  v-if="item.type==0&&item.id==3">
                <div class="chat-service">
                  <div class="left-avatar">
                    <img class="avatar" src="../assets/financing/service@3x.png"/>
                  </div>
                  <div class="right-com">
                    <div class="triangle"></div>
                    <div class="white-box width-full">
                      <div class="title">
                        (3/5) 请问您符合下面哪种情况？
                      </div>
                      <div class="com qu-family">
                        <div class="family-item" @click.stop="singleSelect(item, 1, '(3/5) 请问您符合下面哪种情况？', '单身')">
                          <div class="select-icon family1">
                            <i class="selected" v-show="item.select==1"></i>
                          </div>
                          <div class="text">单身</div>
                        </div>
                        <div class="family-item" @click.stop="singleSelect(item, 2, '(3/5) 请问您符合下面哪种情况？', '成家')">
                          <div class="select-icon family2">
                            <i class="selected" v-show="item.select==2"></i>
                          </div>
                          <div class="text">成家</div>
                        </div>
                        <div class="family-item" @click.stop="singleSelect(item, 3, '(3/5) 请问您符合下面哪种情况？', '三口之家')">
                          <div class="select-icon family3">
                            <i class="selected" v-show="item.select==3"></i>
                          </div>
                          <div class="text">三口之家</div>
                        </div>
                      </div>
                      <div class="com qu-family" @click.stop="singleSelect(item, 4, '(3/5) 请问您符合下面哪种情况？', '四口之家')">
                        <div class="family-item">
                          <div class="select-icon family4">
                            <i class="selected" v-show="item.select==4"></i>
                          </div>
                          <div class="text">四口之家</div>
                        </div>
                        <div class="family-item" @click.stop="singleSelect(item, 5, '(3/5) 请问您符合下面哪种情况？', '子女已成年')">
                          <div class="select-icon family5">
                            <i class="selected" v-show="item.select==5"></i>
                          </div>
                          <div class="text">子女已成年</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <!--行业工作-->
              <li class="item"  v-if="item.type==0&&item.id==4">
                <div class="chat-service">
                  <div class="left-avatar">
                    <img class="avatar" src="../assets/financing/service@3x.png"/>
                  </div>
                  <div class="right-com">
                    <div class="triangle"></div>
                    <div class="white-box width-full">
                      <div class="title">
                        (4/5) 请问您在什么行业工作？
                      </div>
                      <div class="com qu-industry">
                        <div class="industry-item" @click.stop="singleSelect(item, 1, '(4/5) 请问您在什么行业工作？', '互联网')">
                          <div class="select-icon industry1">
                            <i class="selected" v-show="item.select==1"></i>
                          </div>
                          <div class="text">互联网</div>
                        </div>
                        <div class="industry-item" @click.stop="singleSelect(item, 2, '(4/5) 请问您在什么行业工作？', '金融')">
                          <div class="select-icon industry2">
                            <i class="selected" v-show="item.select==2"></i>
                          </div>
                          <div class="text">金融</div>
                        </div>
                        <div class="industry-item" @click.stop="singleSelect(item, 3, '(4/5) 请问您在什么行业工作？', '医疗')">
                          <div class="select-icon industry3">
                            <i class="selected" v-show="item.select==3"></i>
                          </div>
                          <div class="text">医疗</div>
                        </div>
                      </div>
                      <div class="com qu-industry">
                        <div class="industry-item" @click.stop="singleSelect(item, 4, '(4/5) 请问您在什么行业工作？', '制造业')">
                          <div class="select-icon industry4">
                            <i class="selected" v-show="item.select==4"></i>
                          </div>
                          <div class="text">制造业</div>
                        </div>
                        <div class="industry-item" @click.stop="singleSelect(item, 5, '(4/5) 请问您在什么行业工作？', '教育')">
                          <div class="select-icon industry5">
                            <i class="selected" v-show="item.select==5"></i>
                          </div>
                          <div class="text">教育</div>
                        </div>
                        <div class="industry-item" @click.stop="singleSelect(item, 6, '(4/5) 请问您在什么行业工作？', '其他')">
                          <div class="select-icon industry6">
                            <i class="selected" v-show="item.select==6"></i>
                          </div>
                          <div class="text">其他</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <!--您本次的投资计划预计持续多久？-->
              <li class="item"  v-if="item.type==0&&item.id==5">
                <div class="chat-service">
                  <div class="left-avatar">
                    <img class="avatar" src="../assets/financing/service@3x.png"/>
                  </div>
                  <div class="right-com">
                    <div class="triangle"></div>
                    <div class="white-box width-full">
                      <div class="title">
                        (5/5) 您本次的投资计划预计持续多久？
                      </div>
                      <div class="com  qu-invest-time" @click.stop="singleSelect(item, 1, '(5/5) 您本次的投资计划预计持续多久？', '1年左右')">
                        <div class="sex-item">
                          <div class="select-icon invest-time1">
                            <i class="selected" v-show="item.select==1"></i>
                          </div>
                          <div class="text">短期</div>
                        </div>
                        <div class="sex-item" @click.stop="singleSelect(item, 2, '(5/5) 您本次的投资计划预计持续多久？', '2-3年')">
                          <div class="select-icon invest-time2">
                            <i class="selected" v-show="item.select==2"></i>
                          </div>
                          <div class="text">中长期</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <!--请问您要理财的资金是多少？-->
              <li class="item"  v-if="item.type==0&&item.id==6">
                <div class="chat-service">
                  <div class="left-avatar">
                    <img class="avatar" src="../assets/financing/service@3x.png"/>
                  </div>
                  <div class="right-com">
                    <div class="triangle"></div>
                    <div class="white-box width-full">
                      <div class="title">
                        (1/5) 请问您要理财的资金是多少？
                      </div>
                      <div class="com qu-num qu-financing-fund">
                        <div class="num-item" style="margin-right: 8px">
                          <div class="num-wrapper">
                            <a class="num-up financing-fund-up1">
                              <span class="icon-up"></span>
                            </a>
                            <swiper :options="swiperFinancingFundOption1" ref="swiperFinancingFund1">
                              <swiper-slide v-for="num in swiperFinancingFundOption1.nums" :key="num">{{num}}</swiper-slide>
                            </swiper>
                            <a class="num-down financing-fund-down1">
                              <span class="icon-down"></span>
                            </a>
                          </div>
                        </div>
                        <div class="num-item" style="margin-right: 8px">
                          <div class="num-wrapper">
                            <a class="num-up financing-fund-up2">
                              <span class="icon-up"></span>
                            </a>
                            <swiper :options="swiperFinancingFundOption2" ref="swiperFinancingFund2">
                              <swiper-slide v-for="num in swiperFinancingFundOption2.nums" :key="num">{{num}}</swiper-slide>
                            </swiper>
                            <a class="num-down financing-fund-down2">
                              <span class="icon-down"></span>
                            </a>
                          </div>
                        </div>
                        <div class="num-item" style="margin-right: 0px">
                          <div class="num-wrapper">
                            <a class="num-up financing-fund-up3">
                              <span class="icon-up"></span>
                            </a>
                            <swiper :options="swiperFinancingFundOption3" ref="swiperFinancingFund3">
                              <swiper-slide v-for="num in swiperFinancingFundOption3.nums" :key="num" v-show="num != 0 || swiperFinancingFundOption3.zeroShow">{{num}}</swiper-slide>
                            </swiper>
                            <a class="num-down financing-fund-down3">
                              <span class="icon-down"></span>
                            </a>
                          </div>
                        </div>
                        <div class="num-unit">
                          万元
                        </div>
                      </div>
                    </div>
                    <div class="qu-num-btn" style="margin-left: -80px" @click="getFinancingFund(item.id, '(1/5) 请问您要理财的资金是多少？')">选好了,继续</div>
                  </div>
                </div>
              </li>
              <!--单个产品您能接受多久的投资时间呢？-->
              <li class="item"  v-if="item.type==0&&item.id==7&&tempQuestionType==1">
                <div class="chat-service">
                  <div class="left-avatar">
                    <img class="avatar" src="../assets/financing/service@3x.png"/>
                  </div>
                  <div class="right-com">
                    <div class="triangle"></div>
                    <div class="white-box width-full">
                      <div class="title">
                        (2/5) 单个产品您能接受多久的投资时间呢？
                      </div>
                      <div class="com qu-time">
                        <div class="time-item" @click.stop="singleSelect(item, 1, '(2/5) 单个产品您能接受多久的投资时间呢？', '随存随取')">
                          <div class="select-icon time1">
                            <i class="selected" v-show="item.select==1"></i>
                          </div>
                          <div class="text">随存随取</div>
                        </div>
                        <div class="time-item" @click.stop="singleSelect(item, 2, '(2/5) 单个产品您能接受多久的投资时间呢？', '3个月')">
                          <div class="select-icon time2">
                            <i class="selected" v-show="item.select==2"></i>
                          </div>
                          <div class="text">3个月</div>
                        </div>
                        <div class="time-item" @click.stop="singleSelect(item, 3, '(2/5) 单个产品您能接受多久的投资时间呢？', '6个月')">
                          <div class="select-icon time3">
                            <i class="selected" v-show="item.select==3"></i>
                          </div>
                          <div class="text">6个月</div>
                        </div>
                      </div>
                      <div class="com qu-time">
                        <div class="time-item" @click.stop="singleSelect(item, 4, '(2/5) 单个产品您能接受多久的投资时间呢？', '12个月')">
                          <div class="select-icon time4">
                            <i class="selected" v-show="item.select==4"></i>
                          </div>
                          <div class="text">12个月</div>
                        </div>
                        <div class="time-item" @click.stop="singleSelect(item, 5, '(2/5) 单个产品您能接受多久的投资时间呢？', '24个月左右')">
                          <div class="select-icon time5">
                            <i class="selected" v-show="item.select==5"></i>
                          </div>
                          <div class="text">24个月左右</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <!--如果有张彩票50%的可能中奖1000元，这张彩票的价格是 XXX  你会买吗？？-->
              <li class="item"  v-if="item.type==0&&item.id==8&&tempQuestionType==1">
                <div class="chat-service">
                  <div class="left-avatar">
                    <img class="avatar" src="../assets/financing/service@3x.png"/>
                  </div>
                  <div class="right-com">
                    <div class="triangle"></div>
                    <div class="white-box width-full">
                      <div class="title">
                        (3/5) 如果有张彩票50%的可能中奖1000元，这张彩票的价格是 {{lotteryNum}}00元  你会买吗？
                      </div>
                      <div class="com qu-num qu-lottery">
                        <div class="num-item">
                          <div class="num-wrapper">
                            <transition name="lottery">
                              <div class="num" v-show="lotteryShow">{{lotteryNum}}</div>
                            </transition>
                          </div>
                        </div>
                        <div class="num-item">
                          <div class="num-wrapper">
                            <div class="num">0</div>
                          </div>
                        </div>
                        <div class="num-item">
                          <div class="num-wrapper">
                            <div class="num">0</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="qu-lottery-btns">
                      <div class="lottery-btn lottery-yes" @click="getLottery(item.id, 1, '(3/5) 如果有张彩票50%的可能中奖1000元，这张彩票的价格是 300元 你会买吗？')"></div>
                      <div class="lottery-btn lottery-no" @click="getLottery(item.id, 0, '(3/5) 如果有张彩票50%的可能中奖1000元，这张彩票的价格是 300元  你会买吗？')"></div>
                    </div>
                  </div>
                </div>
              </li>
              <!--如果您的某项投资6个月内亏损了10%，您会如何？-->
              <li class="item"  v-if="item.type==0&&item.id==9&&tempQuestionType==1">
                <div class="chat-service">
                  <div class="left-avatar">
                    <img class="avatar" src="../assets/financing/service@3x.png"/>
                  </div>
                  <div class="right-com">
                    <div class="triangle"></div>
                    <div class="white-box width-full">
                      <div class="title">
                        (4/5) 如果您的某项投资6个月内亏损了10%，您会如何？
                      </div>
                      <div class="com qu-emios">
                        <div class="emios-item" @click.stop="singleSelect(item, 1, '(4/5) 如果您的某项投资6个月内亏损了10%，您会如何？', '抓狂(5%都不能亏)')">
                          <div class="select-icon emios1">
                            <i class="selected" v-show="item.select==1"></i>
                          </div>
                          <div class="text">抓狂<br> (5%都不能亏)</div>
                        </div>
                        <div class="emios-item" @click.stop="singleSelect(item, 2, '(4/5) 如果您的某项投资6个月内亏损了10%，您会如何？', '擦汗(紧张但能承受)')">
                          <div class="select-icon emios2">
                            <i class="selected" v-show="item.select==2"></i>
                          </div>
                          <div class="text">擦汗<br>(紧张但能承受)</div>
                        </div>
                      </div>
                      <div class="com qu-emios">
                        <div class="emios-item" @click.stop="singleSelect(item, 3, '(4/5) 如果您的某项投资6个月内亏损了10%，您会如何？', '悠闲(不管了放着吧)')">
                          <div class="select-icon emios3">
                            <i class="selected" v-show="item.select==3"></i>
                          </div>
                          <div class="text">悠闲<br>(不管了放着吧)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <!--您的钱正持有以下那些金融产品？-->
              <li class="item" v-if="item.type==0&&item.id==10&&tempQuestionType==1">
                <div class="chat-service">
                  <div class="left-avatar">
                    <img class="avatar" src="../assets/financing/service@3x.png"/>
                  </div>
                  <div class="right-com">
                    <div class="triangle"></div>
                    <div class="white-box width-full">
                      <div class="title">
                        (5/5)您的钱正持有以下那些金融产品？
                      </div>
                      <div class="qu-fin-product">
                        <div class="item-text" @click.stop="singleSelect(item, 1, '(5/5)您的钱正持有以下那些金融产品？', '80%买了股票或单个P2P或单个产品')">
                          80%买了股票或单个P2P或单个产品
                        </div>
                        <div class="item-text" @click.stop="singleSelect(item, 2, '(5/5)您的钱正持有以下那些金融产品？', '大部分钱投在了3家以内的P2P平台')">
                          大部分钱投在了3家以内的P2P平台
                        </div>
                        <div class="item-text"  @click.stop="singleSelect(item, 3, '(5/5)您的钱正持有以下那些金融产品？', '分散在余额宝、银行、P2P、股票')">
                          分散在余额宝、银行、P2P、股票
                        </div>
                        <div class="item-text"  @click.stop="singleSelect(item, 4, '(5/5)您的钱正持有以下那些金融产品？', '大部分都是现金或存款')">
                          大部分都是现金或存款
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <!--最后，大声说出你的投资目标是？-->
              <li class="item" v-if="item.type==0&&item.id==11&&tempQuestionType==1">
                <div class="chat-service">
                  <div class="left-avatar">
                    <img class="avatar" src="../assets/financing/service@3x.png"/>
                  </div>
                  <div class="right-com">
                    <div class="triangle"></div>
                    <div class="white-box width-full">
                      <div class="title">
                        最后，大声说出你的投资目标是？
                      </div>
                      <div class="com qu-target">
                        <div class="target-item" @click.stop="singleSelect(item, '买房', '最后，大声说出你的投资目标是？', '买房')">
                          <div class="select-icon target1">
                            <i class="selected" v-show="item.select=='买房'"></i>
                          </div>
                        </div>
                        <div class="target-item" @click.stop="singleSelect(item, '子女教育', '最后，大声说出你的投资目标是？', '子女教育')">
                          <div class="select-icon target2">
                            <i class="selected" v-show="item.select=='子女教育'"></i>
                          </div>
                        </div>
                        <div class="target-item" @click.stop="singleSelect(item, '移民', '最后，大声说出你的投资目标是？', '移民')">
                          <div class="select-icon target3">
                            <i class="selected" v-show="item.select=='移民'"></i>
                          </div>
                        </div>
                      </div>
                      <div class="com qu-target">
                        <div class="target-item" @click.stop="singleSelect(item, '提前退休', '最后，大声说出你的投资目标是？', '提前退休')">
                          <div class="select-icon target4">
                            <i class="selected" v-show="item.select=='提前退休'"></i>
                          </div>
                        </div>
                        <div class="target-item" @click.stop="singleSelect(item, '每年挣10%', '最后，大声说出你的投资目标是？', '每年挣10%')">
                          <div class="select-icon target5">
                            <i class="selected" v-show="item.select=='每年挣10%'"></i>
                          </div>
                        </div>
                        <div class="target-item" @click="targetWriteShow = !targetWriteShow">
                          <div class="select-icon target6">
                          </div>
                        </div>
                      </div>
                      <div class="target-input" v-show="targetWriteShow">
                        <span class="text">投资目标：</span>
                        <input type="text" class="input" v-model="targetText"/>
                      </div>
                    </div>
                    <div v-show="targetWriteShow" class="qu-num-btn" style="margin-left: -60px" @click="targetWrite(item, '最后，大声说出你的投资目标是？')">填好了,继续</div>
                  </div>
                </div>
              </li>
              <!--中长期的规划定好的目标是第一步，您希望2-3年后达到什么目标呢？-->
              <li class="item" v-if="item.type==0&&item.id==12">
                <div class="chat-service">
                  <div class="left-avatar">
                    <img class="avatar" src="../assets/financing/service@3x.png"/>
                  </div>
                  <div class="right-com">
                    <div class="triangle"></div>
                    <div class="white-box width-full">
                      <div class="title">
                        中长期的规划定好的目标是第一步，您希望2-3年后达到什么目标呢？
                      </div>
                      <div class="com qu-target">
                        <div class="target-item" @click.stop="singleSelect(item, '买房', '中长期的规划定好的目标是第一步，您希望2-3年后达到什么目标呢？', '买房')">
                          <div class="select-icon target1">
                            <i class="selected" v-show="item.select=='买房'"></i>
                          </div>
                        </div>
                        <div class="target-item" @click.stop="singleSelect(item, '子女教育', '中长期的规划定好的目标是第一步，您希望2-3年后达到什么目标呢？', '子女教育')">
                          <div class="select-icon target2">
                            <i class="selected" v-show="item.select=='子女教育'"></i>
                          </div>
                        </div>
                        <div class="target-item" @click.stop="singleSelect(item, '移民', '中长期的规划定好的目标是第一步，您希望2-3年后达到什么目标呢？', '移民')">
                          <div class="select-icon target3">
                            <i class="selected" v-show="item.select=='移民'"></i>
                          </div>
                        </div>
                      </div>
                      <div class="com qu-target">
                        <div class="target-item" @click.stop="singleSelect(item, '提前退休', '中长期的规划定好的目标是第一步，您希望2-3年后达到什么目标呢？', '提前退休')">
                          <div class="select-icon target4">
                            <i class="selected" v-show="item.select=='提前退休'"></i>
                          </div>
                        </div>
                        <div class="target-item" @click.stop="singleSelect(item, '每年挣10%', '中长期的规划定好的目标是第一步，您希望2-3年后达到什么目标呢？', '每年挣10%')">
                          <div class="select-icon target5">
                            <i class="selected" v-show="item.select=='每年挣10%'"></i>
                          </div>
                        </div>
                        <div class="target-item" @click="targetWriteShow = !targetWriteShow">
                          <div class="select-icon target6">
                          </div>
                        </div>
                      </div>
                      <div class="target-input" v-show="targetWriteShow">
                        <span class="text">投资目标：</span>
                        <input type="text" class="input" v-model="targetText"/>
                      </div>
                    </div>
                    <div v-show="targetWriteShow" class="qu-num-btn" style="margin-left: -60px" @click="targetWrite(item, '中长期的规划定好的目标是第一步，您希望2-3年后达到什么目标呢？')">填好了,继续</div>
                  </div>
                </div>
              </li>
              <!--为实现目标大概需要的金额-->
              <li class="item" v-if="item.type==0&&item.id==13">
                <div class="chat-service">
                  <div class="left-avatar">
                    <img class="avatar" src="../assets/financing/service@3x.png"/>
                  </div>
                  <div class="right-com">
                    <div class="triangle"></div>
                    <div class="white-box width-full">
                      <div class="title">
                        (1/11) 为实现目标大概需要的金额是：
                      </div>
                      <div class="com qu-num qu-need-money">
                        <div class="num-item" style="margin-right: 8px">
                          <div class="num-wrapper">
                            <a class="num-up need-money-up1">
                              <span class="icon-up"></span>
                            </a>
                            <swiper :options="swiperNeedMoneyOption1" ref="swiperNeedMoney1">
                              <swiper-slide v-for="num in swiperNeedMoneyOption1.nums" :key="num">{{num}}</swiper-slide>
                            </swiper>
                            <a class="num-down need-money-down1">
                              <span class="icon-down"></span>
                            </a>
                          </div>
                        </div>
                        <div class="num-item" style="margin-right: 8px">
                          <div class="num-wrapper">
                            <a class="num-up need-money-up2">
                              <span class="icon-up"></span>
                            </a>
                            <swiper :options="swiperNeedMoneyOption2" ref="swiperNeedMoney2">
                              <swiper-slide v-for="num in swiperNeedMoneyOption2.nums" :key="num">{{num}}</swiper-slide>
                            </swiper>
                            <a class="num-down need-money-down2">
                              <span class="icon-down"></span>
                            </a>
                          </div>
                        </div>
                        <div class="num-item" style="margin-right: 0px">
                          <div class="num-wrapper">
                            <a class="num-up need-money-up3">
                              <span class="icon-up"></span>
                            </a>
                            <swiper :options="swiperNeedMoneyOption3" ref="swiperNeedMoney3">
                              <swiper-slide v-for="num in swiperNeedMoneyOption3.nums" :key="num" v-show="num != 0 || swiperNeedMoneyOption3.zeroShow">{{num}}</swiper-slide>
                            </swiper>
                            <a class="num-down need-money-down3">
                              <span class="icon-down"></span>
                            </a>
                          </div>
                        </div>
                        <div class="num-unit">
                          万元
                        </div>
                      </div>
                    </div>
                    <div class="qu-num-btn" @click="getNeedMoney(item.id, '(1/11) 为实现目标大概需要的金额是：')">选好了,继续</div>
                  </div>
                </div>
              </li>
              <!--你准备投资的金额是：-->
              <li class="item" v-if="item.type==0&&item.id==14">
                <div class="chat-service">
                  <div class="left-avatar">
                    <img class="avatar" src="../assets/financing/service@3x.png"/>
                  </div>
                  <div class="right-com">
                    <div class="triangle"></div>
                    <div class="white-box width-full">
                      <div class="title">
                        (2/11) 你准备投资的金额是：
                      </div>
                      <div class="com qu-num qu-invest-money">
                        <div class="num-item" style="margin-right: 8px">
                          <div class="num-wrapper">
                            <a class="num-up invest-money-up1">
                              <span class="icon-up"></span>
                            </a>
                            <swiper :options="swiperInvestMoneyOption1" ref="swiperInvestMoney1">
                              <swiper-slide v-for="num in swiperNeedMoneyOption1.nums" :key="num">{{num}}</swiper-slide>
                            </swiper>
                            <a class="num-down invest-money-down1">
                              <span class="icon-down"></span>
                            </a>
                          </div>
                        </div>
                        <div class="num-item" style="margin-right: 8px">
                          <div class="num-wrapper">
                            <a class="num-up invest-money-up2">
                              <span class="icon-up"></span>
                            </a>
                            <swiper :options="swiperInvestMoneyOption2" ref="swiperInvestMoney2">
                              <swiper-slide v-for="num in swiperNeedMoneyOption2.nums" :key="num">{{num}}</swiper-slide>
                            </swiper>
                            <a class="num-down invest-money-down2">
                              <span class="icon-down"></span>
                            </a>
                          </div>
                        </div>
                        <div class="num-item" style="margin-right: 0px">
                          <div class="num-wrapper">
                            <a class="num-up invest-money-up3">
                              <span class="icon-up"></span>
                            </a>
                            <swiper :options="swiperInvestMoneyOption3" ref="swiperInvestMoney3">
                              <swiper-slide v-for="num in swiperInvestMoneyOption3.nums" :key="num" v-show="num != 0 || swiperInvestMoneyOption3.zeroShow">{{num}}</swiper-slide>
                            </swiper>
                            <a class="num-down invest-money-down3">
                              <span class="icon-down"></span>
                            </a>
                          </div>
                        </div>
                        <div class="num-unit">
                          万元
                        </div>
                      </div>
                    </div>
                    <div class="qu-num-btn" style="margin-left: -80px"  @click="getInvestMoney(item.id, '(2/11) 你准备投资的金额是：')">选好了,继续</div>
                  </div>
                </div>
              </li>
              <!--请问您是以下哪种情况？-->
              <li class="item" v-if="item.type==0&&item.id==15">
                <div class="chat-service">
                  <div class="left-avatar">
                    <img class="avatar" src="../assets/financing/service@3x.png"/>
                  </div>
                  <div class="right-com">
                    <div class="triangle"></div>
                    <div class="white-box width-full">
                      <div class="title">
                        (3/11) 请问您是以下哪种情况？
                      </div>
                      <div class="com qu-assets">
                        <div class="assets-item" @click.stop="singleSelect(item, 1, '(3/11) 请问您是以下哪种情况？', '奋斗中')">
                          <div class="select-icon assets1">
                            <i class="selected" v-show="item.select==1"></i>
                          </div>
                          <div class="text">奋斗中</div>
                        </div>
                        <div class="assets-item" @click.stop="singleSelect(item, 2, '(3/11) 请问您是以下哪种情况？', '有车')">
                          <div class="select-icon assets2">
                            <i class="selected" v-show="item.select==2"></i>
                          </div>
                          <div class="text">有车</div>
                        </div>
                      </div>
                      <div class="com qu-assets">
                        <div class="assets-item" @click.stop="singleSelect(item, 3, '(3/11) 请问您是以下哪种情况？', '有车有房(1套)')">
                          <div class="select-icon assets3">
                            <i class="selected" v-show="item.select==3"></i>
                          </div>
                          <div class="text">有车有房(1套)</div>
                        </div>
                        <div class="assets-item" @click.stop="singleSelect(item, 4, '(3/11) 请问您是以下哪种情况？', '有车多套房(2套)')">
                          <div class="select-icon assets4">
                            <i class="selected" v-show="item.select==4"></i>
                          </div>
                          <div class="text">有车多套房(2套)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <!--使用哪种卡-->
              <li class="item" v-if="item.type==0&&item.id==16">
                <div class="chat-service">
                  <div class="left-avatar">
                    <img class="avatar" src="../assets/financing/service@3x.png"/>
                  </div>
                  <div class="right-com">
                    <div class="triangle"></div>
                    <div class="white-box width-full">
                      <div class="title">
                        (4/11) 请问您有以下哪种卡呢？
                      </div>
                      <div class="com qu-bank">
                        <div class="bank-item" @click.stop="singleSelect(item, 1, '(4/11) 请问您有以下哪种卡呢？', '银行金卡')">
                          <div class="select-icon bank1">
                            <i class="selected" v-show="item.select==1"></i>
                          </div>
                          <div class="text">银行金卡</div>
                        </div>
                        <div class="bank-item" @click.stop="singleSelect(item, 2, '(4/11) 请问您有以下哪种卡呢？', '银行钻石卡')">
                          <div class="select-icon bank2">
                            <i class="selected" v-show="item.select==2"></i>
                          </div>
                          <div class="text">银行钻石卡</div>
                        </div>
                      </div>
                      <div class="com qu-bank">
                        <div class="bank-item" @click.stop="singleSelect(item, 3, '(4/11) 请问您有以下哪种卡呢？', '银行高净值')">
                          <div class="select-icon bank3">
                            <i class="selected" v-show="item.select==3"></i>
                          </div>
                          <div class="text">银行高净值</div>
                        </div>
                        <div class="bank-item" @click.stop="singleSelect(item, 4, '(4/11) 请问您有以下哪种卡呢？', '其他')">
                          <div class="select-icon bank4">
                            <i class="selected" v-show="item.select==4"></i>
                          </div>
                          <div class="text" >其他</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <!--请问您/您家庭的年收入大概是：-->
              <li class="item" v-if="item.type==0&&item.id==17">
                <div class="chat-service">
                  <div class="left-avatar">
                    <img class="avatar" src="../assets/financing/service@3x.png"/>
                  </div>
                  <div class="right-com">
                    <div class="triangle"></div>
                    <div class="white-box width-full">
                      <div class="title">
                        (5/11) 请问您/您家庭的年收入大概是：
                      </div>
                      <div class="com qu-num qu-annual-income">
                        <div class="num-item" style="margin-right: 8px">
                          <div class="num-wrapper">
                            <a class="num-up annual-income-up1">
                              <span class="icon-up"></span>
                            </a>
                            <swiper :options="swiperAnnualIncomeOption1" ref="swiperAnnualIncome1">
                              <swiper-slide v-for="num in swiperAnnualIncomeOption1.nums" :key="num">{{num}}</swiper-slide>
                            </swiper>
                            <a class="num-down annual-income-down1">
                              <span class="icon-down"></span>
                            </a>
                          </div>
                        </div>
                        <div class="num-item" style="margin-right: 8px">
                          <div class="num-wrapper">
                            <a class="num-up annual-income-up2">
                              <span class="icon-up"></span>
                            </a>
                            <swiper :options="swiperAnnualIncomeOption2" ref="swiperAnnualIncome2">
                              <swiper-slide v-for="num in swiperAnnualIncomeOption2.nums" :key="num">{{num}}</swiper-slide>
                            </swiper>
                            <a class="num-down annual-income-down2">
                              <span class="icon-down"></span>
                            </a>
                          </div>
                        </div>
                        <div class="num-item" style="margin-right: 0px">
                          <div class="num-wrapper">
                            <a class="num-up annual-income-up3">
                              <span class="icon-up"></span>
                            </a>
                            <swiper :options="swiperAnnualIncomeOption3" ref="swiperAnnualIncome3">
                              <swiper-slide v-for="num in swiperAnnualIncomeOption3.nums" :key="num" v-show="num != 0 || swiperAnnualIncomeOption3.zeroShow">{{num}}</swiper-slide>
                            </swiper>
                            <a class="num-down annual-income-down3">
                              <span class="icon-down"></span>
                            </a>
                          </div>
                        </div>
                        <div class="num-unit">
                          万元
                        </div>
                      </div>
                    </div>
                    <div class="qu-num-btn" style="margin-left: -80px" @click="getAnnualIncome(item.id, '(5/11) 请问您/您家庭的年收入大概是：')">选好了,继续</div>
                  </div>
                </div>
              </li>
              <!--请问您/您家庭的年支出大概多少(包含旅行、房贷等)-->
              <li class="item" v-if="item.type==0&&item.id==18">
                <div class="chat-service">
                  <div class="left-avatar">
                    <img class="avatar" src="../assets/financing/service@3x.png"/>
                  </div>
                  <div class="right-com">
                    <div class="triangle"></div>
                    <div class="white-box width-full">
                      <div class="title">
                        (6/11) 请问您/您家庭的年支出大概多少(包含旅行、房贷等)
                      </div>
                      <div class="com qu-num qu-annual-expend">
                        <div class="num-item" style="margin-right: 8px">
                          <div class="num-wrapper">
                            <a class="num-up annual-expend-up1">
                              <span class="icon-up"></span>
                            </a>
                            <swiper :options="swiperAnnualExpendOption1" ref="swiperAnnualExpend1">
                              <swiper-slide v-for="num in swiperAnnualExpendOption1.nums" :key="num">{{num}}</swiper-slide>
                            </swiper>
                            <a class="num-down annual-expend-down1">
                              <span class="icon-down"></span>
                            </a>
                          </div>
                        </div>
                        <div class="num-item" style="margin-right: 8px">
                          <div class="num-wrapper">
                            <a class="num-up annual-expend-up2">
                              <span class="icon-up"></span>
                            </a>
                            <swiper :options="swiperAnnualExpendOption2" ref="swiperAnnualExpend2">
                              <swiper-slide v-for="num in swiperAnnualExpendOption2.nums" :key="num">{{num}}</swiper-slide>
                            </swiper>
                            <a class="num-down annual-expend-down2">
                              <span class="icon-down"></span>
                            </a>
                          </div>
                        </div>
                        <div class="num-item" style="margin-right: 0px">
                          <div class="num-wrapper">
                            <a class="num-up annual-expend-up3">
                              <span class="icon-up"></span>
                            </a>
                            <swiper :options="swiperAnnualExpendOption3" ref="swiperAnnualExpend3">
                              <swiper-slide v-for="num in swiperAnnualExpendOption3.nums" :key="num" v-show="num != 0 || swiperAnnualExpendOption3.zeroShow">{{num}}</swiper-slide>
                            </swiper>
                            <a class="num-down annual-expend-down3">
                              <span class="icon-down"></span>
                            </a>
                          </div>
                        </div>
                        <div class="num-unit">
                          万元
                        </div>
                      </div>
                    </div>
                    <div class="qu-num-btn" style="margin-left: -80px" @click="getAnnualExpend(item.id, '(6/11) 请问您/您家庭的年支出大概多少(包含旅行、房贷等)')">选好了,继续</div>
                  </div>
                </div>
              </li>
              <!--单个产品您能接受多久的投资时间呢？-->
              <li class="item"  v-if="item.type==0&&item.id==7&&tempQuestionType==2">
                <div class="chat-service">
                  <div class="left-avatar">
                    <img class="avatar" src="../assets/financing/service@3x.png"/>
                  </div>
                  <div class="right-com">
                    <div class="triangle"></div>
                    <div class="white-box width-full">
                      <div class="title">
                        (7/11) 单个产品您能接受多久的投资时间呢？
                      </div>
                      <div class="com qu-time">
                        <div class="time-item" @click.stop="singleSelect(item, 1, '(7/11) 单个产品您能接受多久的投资时间呢？', '随存随取')">
                          <div class="select-icon time1">
                            <i class="selected" v-show="item.select==1"></i>
                          </div>
                          <div class="text">随存随取</div>
                        </div>
                        <div class="time-item" @click.stop="singleSelect(item, 2, '(7/11) 单个产品您能接受多久的投资时间呢？', '3个月')">
                          <div class="select-icon time2">
                            <i class="selected" v-show="item.select==2"></i>
                          </div>
                          <div class="text">3个月</div>
                        </div>
                        <div class="time-item" @click.stop="singleSelect(item, 3, '(7/11) 单个产品您能接受多久的投资时间呢？', '6个月')">
                          <div class="select-icon time3">
                            <i class="selected" v-show="item.select==3"></i>
                          </div>
                          <div class="text">6个月</div>
                        </div>
                      </div>
                      <div class="com qu-time">
                        <div class="time-item" @click.stop="singleSelect(item, 4, '(7/11) 单个产品您能接受多久的投资时间呢？', '12个月')">
                          <div class="select-icon time4">
                            <i class="selected" v-show="item.select==4"></i>
                          </div>
                          <div class="text">12个月</div>
                        </div>
                        <div class="time-item" @click.stop="singleSelect(item, 5, '(7/11)单个产品您能接受多久的投资时间呢？', '24个月左右')">
                          <div class="select-icon time5">
                            <i class="selected" v-show="item.select==5"></i>
                          </div>
                          <div class="text">24个月左右</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <!--如果有张彩票50%的可能中奖1000元，这张彩票的价格是 XXX  你会买吗？？-->
              <li class="item"  v-if="item.type==0&&item.id==8&&tempQuestionType==2">
                <div class="chat-service">
                  <div class="left-avatar">
                    <img class="avatar" src="../assets/financing/service@3x.png"/>
                  </div>
                  <div class="right-com">
                    <div class="triangle"></div>
                    <div class="white-box width-full">
                      <div class="title">
                        (3/5) 如果有张彩票50%的可能中奖1000元，这张彩票的价格是 {{lotteryNum}}00元  你会买吗？
                      </div>
                      <div class="com qu-num qu-lottery">
                        <div class="num-item">
                          <div class="num-wrapper">
                            <transition name="lottery">
                              <div class="num" v-show="lotteryShow">{{lotteryNum}}</div>
                            </transition>
                          </div>
                        </div>
                        <div class="num-item">
                          <div class="num-wrapper">
                            <div class="num">0</div>
                          </div>
                        </div>
                        <div class="num-item">
                          <div class="num-wrapper">
                            <div class="num">0</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="qu-lottery-btns">
                      <div class="lottery-btn lottery-yes" @click="getLottery(item.id, 1, '(3/5) 如果有张彩票50%的可能中奖1000元，这张彩票的价格是 300元 你会买吗？')"></div>
                      <div class="lottery-btn lottery-no" @click="getLottery(item.id, 0, '(3/5) 如果有张彩票50%的可能中奖1000元，这张彩票的价格是 300元  你会买吗？')"></div>
                    </div>
                  </div>
                </div>
              </li>
              <!--如果您的某项投资6个月内亏损了10%，您会如何？-->
              <li class="item"  v-if="item.type==0&&item.id==9&&tempQuestionType==2">
                <div class="chat-service">
                  <div class="left-avatar">
                    <img class="avatar" src="../assets/financing/service@3x.png"/>
                  </div>
                  <div class="right-com">
                    <div class="triangle"></div>
                    <div class="white-box width-full">
                      <div class="title">
                        (4/5) 如果您的某项投资6个月内亏损了10%，您会如何？
                      </div>
                      <div class="com qu-emios">
                        <div class="emios-item" @click.stop="singleSelect(item, 1, '(4/5) 如果您的某项投资6个月内亏损了10%，您会如何？', '抓狂(5%都不能亏)')">
                          <div class="select-icon emios1">
                            <i class="selected" v-show="item.select==1"></i>
                          </div>
                          <div class="text">抓狂<br> (5%都不能亏)</div>
                        </div>
                        <div class="emios-item" @click.stop="singleSelect(item, 2, '(4/5) 如果您的某项投资6个月内亏损了10%，您会如何？', '擦汗(紧张但能承受)')">
                          <div class="select-icon emios2">
                            <i class="selected" v-show="item.select==2"></i>
                          </div>
                          <div class="text">擦汗<br>(紧张但能承受)</div>
                        </div>
                      </div>
                      <div class="com qu-emios">
                        <div class="emios-item" @click.stop="singleSelect(item, 3, '(4/5) 如果您的某项投资6个月内亏损了10%，您会如何？', '悠闲(不管了放着吧)')">
                          <div class="select-icon emios3">
                            <i class="selected" v-show="item.select==3"></i>
                          </div>
                          <div class="text">悠闲<br>(不管了放着吧)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <!--您的钱正持有以下那些金融产品？-->
              <li class="item" v-if="item.type==0&&item.id==10&&tempQuestionType==2">
                <div class="chat-service">
                  <div class="left-avatar">
                    <img class="avatar" src="../assets/financing/service@3x.png"/>
                  </div>
                  <div class="right-com">
                    <div class="triangle"></div>
                    <div class="white-box width-full">
                      <div class="title">
                        (5/5) 您的钱正持有以下那些金融产品？
                      </div>
                      <div class="qu-fin-product">
                        <div class="item-text" @click.stop="singleSelect(item, 1, '(5/5) 您的钱正持有以下那些金融产品？', '80%买了股票或单个P2P或单个产品')">
                          80%买了股票或单个P2P或单个产品
                        </div>
                        <div class="item-text" @click.stop="singleSelect(item, 2, '(5/5) 您的钱正持有以下那些金融产品？', '大部分钱投在了3家以内的P2P平台')">
                          大部分钱投在了3家以内的P2P平台
                        </div>
                        <div class="item-text"  @click.stop="singleSelect(item, 3, '(5/5) 您的钱正持有以下那些金融产品？', '分散在余额宝、银行、P2P、股票')">
                          分散在余额宝、银行、P2P、股票
                        </div>
                        <div class="item-text"  @click.stop="singleSelect(item, 4, '(5/5) 您的钱正持有以下那些金融产品？', '大部分都是现金或存款')">
                          大部分都是现金或存款
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <!--买过以下哪些产品-->
              <li class="item" v-if="item.type==0&&item.id==19">
                <div class="chat-service">
                  <div class="left-avatar">
                    <img class="avatar" src="../assets/financing/service@3x.png"/>
                  </div>
                  <div class="right-com">
                    <div class="triangle"></div>
                    <div class="white-box width-full">
                      <div class="title">
                        (8/11) 您有买过以下哪些产品呢？(可多选)
                      </div>
                      <div class="com qu-product">
                        <div class="product-item" @click="multiSelect(item, 1, '股票或基金')">
                          <div class="select-icon product1">
                            <i class="selected" v-show="item.select1"></i>
                          </div>
                        </div>
                        <div class="product-item" @click="multiSelect(item, 2, '信托或资管')">
                          <div class="select-icon product2">
                            <i class="selected" v-show="item.select2"></i>
                          </div>
                        </div>
                        <div class="product-item" @click="multiSelect(item, 3, '私募基金或股权')">
                          <div class="select-icon product3">
                            <i class="selected" v-show="item.select3"></i>
                          </div>
                        </div>
                      </div>
                      <div class="com qu-product">
                        <div class="product-item" @click="multiSelect(item, 4, 'P2P或余额宝')">
                          <div class="select-icon product4">
                            <i class="selected" v-show="item.select4"></i>
                          </div>
                        </div>
                        <div class="product-item" @click="multiSelect(item, 5, '都没有')">
                          <div class="select-icon product5">
                            <i class="selected" v-show="item.select5"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="qu-num-btn" style="margin-left: -60px" @click="getMultiResult(item, '(8/11) 您有买过以下哪些产品呢？(可多选)')">选好了,继续</div>
                  </div>
                </div>
              </li>
              <!--诊断结果-->
              <li class="item" v-if="item.type==2">
                <div class="chat-service">
                  <div class="left-avatar">
                    <img class="avatar" src="../assets/financing/service@3x.png"/>
                  </div>
                  <div class="right-com">
                    <div class="triangle"></div>
                    <div class="white-box width-full">
                      <div class="title">
                        短期投资规划报告
                      </div>
                      <div class="short-result">
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="item" v-if="item.type==3">
                <div class="chat-service">
                  <div class="left-avatar">
                    <img class="avatar" src="../assets/financing/service@3x.png"/>
                  </div>
                  <div class="right-com">
                    <div class="triangle"></div>
                    <div class="white-box width-full">
                      <div class="title">
                        中长期投资规划报告
                      </div>
                      <div class="long-result">
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </template>
            <!--loading-->
            <li class="item" v-show="isLoading">
              <div class="chat-service single-text">
                <div class="left-avatar">
                  <img class="avatar" src="../assets/financing/service@3x.png"/>
                </div>
                <div class="right-com">
                  <div class="triangle" style="top:10px;"></div>
                  <div class="white-box" style="padding:2px">
                    <div class="loading">
                      <div class="loadimg" :class="loadClassMap[loadNum]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li ref="chatBottom" class="chat-bottom">
              <transition name="last-question">
                <div class="last-question" v-show="lastQustionShow" @click="lastQuestion">
                  <span class="icon-last"></span>返回上一题
                </div>
              </transition>
            </li>
          </ul>
        </div>
      </section>
    </div>
    <v-toast :toast="toast"></v-toast>
  </div>
</template>

<script type="text/ecmascript-6">
  import vToast from '../components/base/toast/toast.vue';
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  import BScroll from 'better-scroll';
  export default {
    data () {
      return {
        toast: {
          isShow: false,
          text: '提交成功'
        },
        swiperAgeOption1: {
          direction: 'vertical',
          initialSlide: 2,
          height: 40,
          prevButton: '.age-down1',
          nextButton: '.age-up1',
          id: 'age1',
          nums: [1, 2, 3, 4, 5, 6, 7, 8, 9],
          activeIndex: 2
        },
        swiperAgeOption2: {
          direction: 'vertical',
          initialSlide: 0,
          height: 40,
          prevButton: '.age-down2',
          nextButton: '.age-up2',
          id: 'age2',
          nums: ['?', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          activeIndex: 0
        },
        swiperFinancingFundOption1: {
          direction: 'vertical',
          initialSlide: 0,
          height: 40,
          prevButton: '.financing-fund-down1',
          nextButton: '.financing-fund-up1',
          id: 'financingFund1',
          nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          activeIndex: 0
        },
        swiperFinancingFundOption2: {
          direction: 'vertical',
          initialSlide: 0,
          height: 40,
          prevButton: '.financing-fund-dwon2',
          nextButton: '.financing-fund-up2',
          id: 'financingFund2',
          nums: ['?', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          activeIndex: 0
        },
        swiperFinancingFundOption3: {
          direction: 'vertical',
          initialSlide: 0,
          height: 40,
          prevButton: '.financing-fund-down3',
          nextButton: '.financing-fund-up3',
          id: 'financingFund3',
          zeroShow: true,
          nums: ['?', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          activeIndex: 0
        },
        swiperNeedMoneyOption1: {
          direction: 'vertical',
          initialSlide: 0,
          height: 40,
          prevButton: '.need-money-down1',
          nextButton: '.need-money-up1',
          id: 'needMoney1',
          nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          activeIndex: 0
        },
        swiperNeedMoneyOption2: {
          direction: 'vertical',
          initialSlide: 0,
          height: 40,
          prevButton: '.need-money-down2',
          nextButton: '.need-money-up2',
          id: 'needMoney2',
          nums: ['?', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          activeIndex: 0
        },
        swiperNeedMoneyOption3: {
          direction: 'vertical',
          initialSlide: 0,
          height: 40,
          prevButton: '.need-money-down3',
          nextButton: '.need-money-up3',
          id: 'needMoney3',
          zeroShow: true,
          nums: ['?', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          activeIndex: 0
        },
        swiperInvestMoneyOption1: {
          direction: 'vertical',
          initialSlide: 0,
          height: 40,
          prevButton: '.invest-money-down1',
          nextButton: '.invest-money-up1',
          id: 'investMoney1',
          nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          activeIndex: 0
        },
        swiperInvestMoneyOption2: {
          direction: 'vertical',
          initialSlide: 0,
          height: 40,
          prevButton: '.invest-money-down2',
          nextButton: '.invest-money-up2',
          id: 'investMoney2',
          nums: ['?', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          activeIndex: 0
        },
        swiperInvestMoneyOption3: {
          direction: 'vertical',
          initialSlide: 0,
          height: 40,
          prevButton: '.invest-money-down3',
          nextButton: '.invest-money-up3',
          id: 'investMoney3',
          zeroShow: true,
          nums: ['?', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          activeIndex: 0
        },
        swiperAnnualIncomeOption1: {
          direction: 'vertical',
          initialSlide: 0,
          height: 40,
          prevButton: '.annual-income-down1',
          nextButton: '.annual-income-up1',
          id: 'annualIncome1',
          nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          activeIndex: 0
        },
        swiperAnnualIncomeOption2: {
          direction: 'vertical',
          initialSlide: 0,
          height: 40,
          prevButton: '.annual-income-down2',
          nextButton: '.annual-income-up2',
          id: 'annualIncome2',
          nums: ['?', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          activeIndex: 0
        },
        swiperAnnualIncomeOption3: {
          direction: 'vertical',
          initialSlide: 0,
          height: 40,
          prevButton: '.annual-income-down3',
          nextButton: '.annual-income-up3',
          id: 'annualIncome3',
          zeroShow: true,
          nums: ['?', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          activeIndex: 0
        },
        swiperAnnualExpendOption1: {
          direction: 'vertical',
          initialSlide: 0,
          height: 40,
          prevButton: '.annual-expend-down1',
          nextButton: '.annual-expend-up1',
          id: 'annualExpend1',
          nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          activeIndex: 0
        },
        swiperAnnualExpendOption2: {
          direction: 'vertical',
          initialSlide: 0,
          height: 40,
          prevButton: '.annual-expend-down2',
          nextButton: '.annual-expend-up2',
          id: 'annualExpend2',
          nums: ['?', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          activeIndex: 0
        },
        swiperAnnualExpendOption3: {
          direction: 'vertical',
          initialSlide: 0,
          height: 40,
          prevButton: '.annual-expend-down3',
          nextButton: '.annual-expend-up3',
          id: 'annualExpend3',
          zeroShow: true,
          nums: ['?', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          activeIndex: 0
        },
        isEvaluated: false,
        userId: 0,
        timestamp: 0,
        records: [],
        loadNum: 0,
        isLoading: false,
        scrollY: 0,
        baseQuestions: [1, 2, 3, 4, 5],
        shortTermQuestions: [6, 7, 8, 9, 10, 11],
        longTermQuestions: [12, 13, 14, 15, 16, 17, 18, 7, 19, 8, 9, 10],
        tempQuestionType: 0,
        tempQuestionIndex: 0,
        lotteryNum: 3,
        lotteryShow: true,
        targetWriteShow: false,
        targetText: '',
        loginBoxShow: true,
        userMobile: '',
        checkCode: '',
        codeText: '获取验证码',
        sendCodeStatus: false,
        subMsg: '提交保存',
        submitStatus: false,
        lastResultType: 1,
        platform: 0
      };
    },
    components: {
      swiper,
      swiperSlide,
      vToast
    },
    computed: {
      lastQustionShow () {
        if (this.tempQuestionType > 0 || this.tempQuestionIndex > 1) {
          if (!this.isLoading && !this.isEnd) {
            return true;
          }
        }
        return false;
      }
    },
    created () {
      this.loadClassMap = ['loadimg1', 'loadimg2', 'loadimg3'];
    },
    mounted () {
     this.getChatWelcome();
      this.initSwiper();
    },
    methods: {
      initSwiper () {
        this.swiperAgeOption1.onTransitionEnd = this.transitionEnd;
        this.swiperAgeOption2.onTransitionEnd = this.transitionEnd;
        this.swiperFinancingFundOption1.onTransitionEnd = this.transitionEnd;
        this.swiperFinancingFundOption2.onTransitionEnd = this.transitionEnd;
        this.swiperFinancingFundOption3.onTransitionEnd = this.transitionEnd;
        this.swiperNeedMoneyOption1.onTransitionEnd = this.transitionEnd;
        this.swiperNeedMoneyOption2.onTransitionEnd = this.transitionEnd;
        this.swiperNeedMoneyOption3.onTransitionEnd = this.transitionEnd;
        this.swiperInvestMoneyOption1.onTransitionEnd = this.transitionEnd;
        this.swiperInvestMoneyOption2.onTransitionEnd = this.transitionEnd;
        this.swiperInvestMoneyOption3.onTransitionEnd = this.transitionEnd;
        this.swiperAnnualIncomeOption1.onTransitionEnd = this.transitionEnd;
        this.swiperAnnualIncomeOption2.onTransitionEnd = this.transitionEnd;
        this.swiperAnnualIncomeOption3.onTransitionEnd = this.transitionEnd;
        this.swiperAnnualExpendOption1.onTransitionEnd = this.transitionEnd;
        this.swiperAnnualExpendOption2.onTransitionEnd = this.transitionEnd;
        this.swiperAnnualExpendOption3.onTransitionEnd = this.transitionEnd;
      },
      transitionEnd (swiper) {
        if (swiper.params.id === 'age1') {
          this.swiperAgeOption1.activeIndex = swiper.activeIndex;
        } else if (swiper.params.id === 'age2') {
          this.swiperAgeOption2.activeIndex = swiper.activeIndex;
        } else if (swiper.params.id === 'financingFund1') {
          this.swiperFinancingFundOption1.activeIndex = swiper.activeIndex;
          let num1 = this.swiperFinancingFundOption1.nums[swiper.activeIndex];
          let activeIndex2 = this.swiperFinancingFundOption2.activeIndex;
          let num2 = this.swiperFinancingFundOption2.nums[activeIndex2];
          if (num1 === 0 && num2 === 0) {
            this.swiperFinancingFundOption3.zeroShow = false;
          } else {
            this.swiperFinancingFundOption3.zeroShow = true;
          }
        } else if (swiper.params.id === 'financingFund2') {
          this.swiperFinancingFundOption2.activeIndex = swiper.activeIndex;
          let num2 = this.swiperFinancingFundOption2.nums[swiper.activeIndex];
          let activeIndex1 = this.swiperFinancingFundOption1.activeIndex;
          let num1 = this.swiperFinancingFundOption1.nums[activeIndex1];
          if (num1 === 0 && num2 === 0) {
            this.swiperFinancingFundOption3.zeroShow = false;
          } else {
            this.swiperFinancingFundOption3.zeroShow = true;
          }
        } else if (swiper.params.id === 'financingFund3') {
          this.swiperFinancingFundOption3.activeIndex = swiper.activeIndex;
        } else if (swiper.params.id === 'needMoney1') {
          this.swiperNeedMoneyOption1.activeIndex = swiper.activeIndex;
          let num1 = this.swiperNeedMoneyOption1.nums[swiper.activeIndex];
          let activeIndex2 = this.swiperNeedMoneyOption2.activeIndex;
          let num2 = this.swiperNeedMoneyOption2.nums[activeIndex2];
          if (num1 === 0 && num2 === 0) {
            this.swiperNeedMoneyOption3.zeroShow = false;
          } else {
            this.swiperNeedMoneyOption3.zeroShow = true;
          }
        } else if (swiper.params.id === 'needMoney2') {
          this.swiperNeedMoneyOption2.activeIndex = swiper.activeIndex;
          let num2 = this.swiperNeedMoneyOption2.nums[swiper.activeIndex];
          let activeIndex1 = this.swiperNeedMoneyOption1.activeIndex;
          let num1 = this.swiperNeedMoneyOption1.nums[activeIndex1];
          if (num1 === 0 && num2 === 0) {
            this.swiperNeedMoneyOption3.zeroShow = false;
          } else {
            this.swiperNeedMoneyOption3.zeroShow = true;
          }
        } else if (swiper.params.id === 'needMoney3') {
          this.swiperNeedMoneyOption3.activeIndex = swiper.activeIndex;
        } else if (swiper.params.id === 'investMoney1') {
          this.swiperInvestMoneyOption1.activeIndex = swiper.activeIndex;
          let num1 = this.swiperInvestMoneyOption1.nums[swiper.activeIndex];
          let activeIndex2 = this.swiperInvestMoneyOption2.activeIndex;
          let num2 = this.swiperInvestMoneyOption2.nums[activeIndex2];
          if (num1 === 0 && num2 === 0) {
            this.swiperInvestMoneyOption3.zeroShow = false;
          } else {
            this.swiperInvestMoneyOption3.zeroShow = true;
          }
        } else if (swiper.params.id === 'investMoney2') {
          this.swiperInvestMoneyOption2.activeIndex = swiper.activeIndex;
          let num2 = this.swiperInvestMoneyOption2.nums[swiper.activeIndex];
          let activeIndex1 = this.swiperInvestMoneyOption1.activeIndex;
          let num1 = this.swiperInvestMoneyOption1.nums[activeIndex1];
          if (num1 === 0 && num2 === 0) {
            this.swiperInvestMoneyOption3.zeroShow = false;
          } else {
            this.swiperInvestMoneyOption3.zeroShow = true;
          }
        } else if (swiper.params.id === 'investMoney3') {
          this.swiperInvestMoneyOption3.activeIndex = swiper.activeIndex;
        } else if (swiper.params.id === 'annualIncome1') {
          this.swiperAnnualIncomeOption1.activeIndex = swiper.activeIndex;
          let num1 = this.swiperAnnualIncomeOption1.nums[swiper.activeIndex];
          let activeIndex2 = this.swiperAnnualIncomeOption2.activeIndex;
          let num2 = this.swiperAnnualIncomeOption2.nums[activeIndex2];
          if (num1 === 0 && num2 === 0) {
            this.swiperAnnualIncomeOption3.zeroShow = false;
          } else {
            this.swiperAnnualIncomeOption3.zeroShow = true;
          }
        } else if (swiper.params.id === 'annualIncome2') {
          this.swiperAnnualIncomeOption2.activeIndex = swiper.activeIndex;
          let num2 = this.swiperAnnualIncomeOption2.nums[swiper.activeIndex];
          let activeIndex1 = this.swiperAnnualIncomeOption1.activeIndex;
          let num1 = this.swiperAnnualIncomeOption1.nums[activeIndex1];
          if (num1 === 0 && num2 === 0) {
            this.swiperAnnualIncomeOption3.zeroShow = false;
          } else {
            this.swiperAnnualIncomeOption3.zeroShow = true;
          }
        } else if (swiper.params.id === 'annualIncome3') {
          this.swiperAnnualIncomeOption3.activeIndex = swiper.activeIndex;
        } else if (swiper.params.id === 'annualExpend1') {
          this.swiperAnnualExpendOption1.activeIndex = swiper.activeIndex;
          let num1 = this.swiperAnnualExpendOption1.nums[swiper.activeIndex];
          let activeIndex2 = this.swiperAnnualExpendOption2.activeIndex;
          let num2 = this.swiperAnnualExpendOption2.nums[activeIndex2];
          if (num1 === 0 && num2 === 0) {
            this.swiperAnnualExpendOption3.zeroShow = false;
          } else {
            this.swiperAnnualExpendOption3.zeroShow = true;
          }
        } else if (swiper.params.id === 'annualExpend2') {
          this.swiperAnnualExpendOption2.activeIndex = swiper.activeIndex;
          let num2 = this.swiperAnnualExpendOption2.nums[swiper.activeIndex];
          let activeIndex1 = this.swiperAnnualExpendOption1.activeIndex;
          let num1 = this.swiperAnnualExpendOption1.nums[activeIndex1];
          if (num1 === 0 && num2 === 0) {
            this.swiperAnnualExpendOption3.zeroShow = false;
          } else {
            this.swiperAnnualExpendOption3.zeroShow = true;
          }
        } else if (swiper.params.id === 'annualExpend3') {
          this.swiperAnnualExpendOption3.activeIndex = swiper.activeIndex;
        }
      },
      getChatWelcome () {
        let record = {type: 0, id: -1, content: ''};
        this.pushChatList(record);
        if (!this.isEvaluated) {
          this.getQuest();
        }
      },
      _initScroll () {
        if (this.chatScroll) {
          this.chatScroll.destroy();
        }
        this.chatScroll = new BScroll(this.$refs.chatList, {
          click: true,
          probeType: 3
        });
        this.chatScroll.on('scroll', (pos) => {
          this.scrollY = Math.abs(Math.round(pos.y));
//          console.log('scrollY:' + this.scrollY);
        });
      },
      pushChatList (record) {
        this.records.push(record);
        this.$nextTick(() => {
          this._initScroll();
          this.scrollToBottom();
          this.initSwiper();
        });
      },
      loadingShow () {
        let num = 0;
        this.intervalid = setInterval(() => {
          this.loadNum = num % 3;
          num++;
          this.isLoading = true;
        }, 500);
        setTimeout(() => {
          this._initScroll();
          this.scrollToBottom();
        }, 500);
      },
      loadingDestroy () {
        this.isLoading = false;
        clearInterval(this.intervalid);
      },
      scrollToBottom () {
        let el = this.$refs.chatBottom;
        this.chatScroll.scrollToElement(el, 0, 0, 0, 'ease-out');
      },
      userReply (text) {
        let record = {type: 1, content: text};
        this.pushChatList(record);
      },
      serviceText (text) {
        let record = {type: 0, id: 0, content: text};
        this.pushChatList(record);
      },
      repeatQuest () {
        this.userReply('开始新的测试');
        this.loadingShow();
        setTimeout(() => {
          this.getQuest();
        }, 500);
      },
      getQuest (answer) {
        let id = '';
        if (this.tempQuestionType === 0) {
          id = this.baseQuestions[this.tempQuestionIndex];
          if (this.tempQuestionIndex === 5) {
            if (answer === 1) {
              this.serviceText('您想要一个短期规划，需要5个问题来了解需求，才能推荐<img style="width: 20px;height: 20px;vertical-align: middle;margin-left: 5px" src="' + require('../assets/financing/emotions_heyha@2x.png') + '" />');
              this.tempQuestionType = 1;
              id = this.shortTermQuestions[0];
            } else {
              this.serviceText('好的，中期的规划定好目标是第1步，您希望2-3年后达到什么目标呢？');
              this.tempQuestionType = 2;
              id = this.longTermQuestions[0];
            }
            this.tempQuestionIndex = 0;
          } else {
            this.tempQuestionIndex++;
          }
        } else if (this.tempQuestionType === 1) {
          id = this.shortTermQuestions[this.tempQuestionIndex];
          if (this.tempQuestionIndex < 6) {
            this.tempQuestionIndex++;
          } else {
            this.chatEnd(0);
            return false;
          }
        } else if (this.tempQuestionType === 2) {
          id = this.longTermQuestions[this.tempQuestionIndex];
          if (this.tempQuestionIndex < 12) {
            this.tempQuestionIndex++;
          } else {
            this.chatEnd(1);
            return false;
          }
        }
        let record = {type: 0, id: id, content: '', select: 0};
//          多选特殊处理
        if (id === 19) {
          record.select1 = false;
          record.select2 = false;
          record.select3 = false;
          record.select4 = false;
          record.select5 = false;
        }
        this.loadingDestroy();
        this.pushChatList(record);
      },
      chatEnd (type, answer) {
        this.tempQuestionType = 0;
        this.tempQuestionIndex = 0;
        if (type === 0) {
          let text = '亲，您投资目标是【' + this.records[this.records.length - 1].content + '】，让我们一起努力实现!<img style="width: 20px;height: 20px;vertical-align: middle;margin-left: 5px" src="' + require('../assets/financing/emotions_fist@2x.png') + '" /><br>以下是您的短期投资规划书<img style="width: 20px;height: 20px;vertical-align: middle;margin-left: 5px" src="' + require('../assets/financing/emotions_happy@2x.png') + '" />';
          this.serviceText(text);
        } else {
          let text = '亲，您能清晰地意识到风险，并可承受中度的风险，我给您的中期投资规划书如下：';
          this.serviceText(text);
        }
        setTimeout(() => {
          this.loadingDestroy();
          let record = {type: 2};
          if (type === 1) {
            record.type = 3;
          }
          this.pushChatList(record);
        }, 500);
        let signObj = {userId: this.userId, timestamp: this.timestamp, questionId: 20, answer: 1};
        if (type === 1) {
          signObj.answer = 2;
        }
      },
      lastQuestion () {
        let len = this.records.length - 1;
        for (let i = len; i > 0; i--) {
          let record = this.records[i];
          if (record.type === 1) {
            break;
          }
          this.records.pop();
        }
        this.records.pop();
        this.records.pop();
        let id = '';
        if (this.tempQuestionType === 0) {
          this.tempQuestionIndex--;
          id = this.baseQuestions[this.tempQuestionIndex - 1];
        } else if (this.tempQuestionType === 1) {
          if (this.tempQuestionIndex > 1) {
            this.tempQuestionIndex--;
            id = this.shortTermQuestions[this.tempQuestionIndex - 1];
          } else {
            this.tempQuestionType = 0;
            this.tempQuestionIndex = 5;
            id = this.baseQuestions[4];
          }
        } else if (this.tempQuestionType === 2) {
          if (this.tempQuestionIndex > 1) {
            this.tempQuestionIndex--;
            id = this.longTermQuestions[this.tempQuestionIndex - 1];
          } else {
            this.tempQuestionType = 0;
            this.tempQuestionIndex = 5;
            id = this.baseQuestions[4];
          }
        }
        this.lastQuestionInit();
        let record = {type: 0, id: id, content: '', select: 0};
//         多选特殊处理
        if (id === 19) {
          record.select1 = false;
          record.select2 = false;
          record.select3 = false;
          record.select4 = false;
          record.select5 = false;
        }
        this.pushChatList(record);
      },
      lastQuestionInit () {
        this.swiperAgeOption1.activeIndex = 2;
        this.swiperAgeOption2.activeIndex = 0;
        this.swiperFinancingFundOption1.activeIndex = 0;
        this.swiperFinancingFundOption2.activeIndex = 0;
        this.swiperFinancingFundOption3.activeIndex = 0;
        this.swiperNeedMoneyOption1.activeIndex = 0;
        this.swiperNeedMoneyOption2.activeIndex = 0;
        this.swiperNeedMoneyOption3.activeIndex = 0;
        this.swiperInvestMoneyOption1.activeIndex = 0;
        this.swiperInvestMoneyOption2.activeIndex = 0;
        this.swiperInvestMoneyOption3.activeIndex = 0;
        this.swiperAnnualIncomeOption1.activeIndex = 0;
        this.swiperAnnualIncomeOption2.activeIndex = 0;
        this.swiperAnnualIncomeOption3.activeIndex = 0;
        this.swiperAnnualExpendOption1.activeIndex = 0;
        this.swiperAnnualExpendOption2.activeIndex = 0;
        this.swiperAnnualExpendOption3.activeIndex = 0;
      },
      singleSelect (item, select, questionText, answerText) {
        item.select = select;
        setTimeout(() => {
          this.records.pop();
          this.serviceText(questionText);
          this.userReply(answerText);
          if (item.id === 12) {
            let text = '您的目标是【' + answerText + '】,让我们一起努力实现！<img style="width: 20px;height: 20px;vertical-align: middle;margin-left: 5px" src="' + require('../assets/financing/emotions_fist@2x.png') + '" />';
            this.serviceText(text);
          }
          this.loadingShow();
        }, 100);
        setTimeout(() => {
          if (item.id === 12) {
            this.tempQuestionIndex++;
          }
          this.questionSubmit(item.id, select);
        }, 1000);
      },
      multiSelect (item, select, answerText) {
        if (select === 1) {
          if (item.select1) {
            item.select1 = false;
          } else {
            item.select1 = true;
            item.select5 = false;
          }
        } else if (select === 2) {
          if (item.select2) {
            item.select2 = false;
          } else {
            item.select2 = true;
            item.select5 = false;
          }
        } else if (select === 3) {
          if (item.select3) {
            item.select3 = false;
          } else {
            item.select3 = true;
            item.select5 = false;
          }
        } else if (select === 4) {
          if (item.select4) {
            item.select4 = false;
          } else {
            item.select4 = true;
            item.select5 = false;
          }
        } else if (select === 5) {
          if (item.select5) {
            item.select5 = false;
          } else {
            item.select5 = true;
            item.select1 = false;
            item.select2 = false;
            item.select3 = false;
            item.select4 = false;
          }
        }
      },
      getMultiResult (item, questionText) {
        let ids = '';
        let answers = '';
        if (item.select1) {
          ids += '1,';
          answers += '股票或基金,';
        }
        if (item.select2) {
          ids += '2,';
          answers += '信托或资管,';
        }
        if (item.select3) {
          ids += '3,';
          answers += '私募基金或股权,';
        }
        if (item.select4) {
          ids += '4,';
          answers += 'P2P或余额宝,';
        }
        if (item.select5) {
          ids += '5,';
          answers += '都没有,';
        }
        if (!ids) {
          this.toast.text = '至少选择一项';
          this.toast.isShow = true;
          setTimeout(() => {
            this.toast.isShow = false;
          }, 1000);
          return false;
        }
        ids = ids.substring(0, ids.length - 1);
        answers = answers.substring(0, answers.length - 1);
        setTimeout(() => {
          this.records.pop();
          this.serviceText(questionText);
          this.userReply(answers);
          this.loadingShow();
        }, 100);
        setTimeout(() => {
          if (item.id === 12) {
            this.tempQuestionIndex++;
          }
          this.questionSubmit(item.id, ids);
        }, 1000);
      },
      targetWrite (item, questionText) {
        if (!this.targetText) {
          this.toast.text = '请填写投资目标';
          this.toast.isShow = true;
          setTimeout(() => {
            this.toast.isShow = false;
          }, 1000);
          return false;
        }
        this.targetWriteShow = false;
        this.records.pop();
        this.serviceText(questionText);
        this.userReply(this.targetText);
        this.loadingShow();
        setTimeout(() => {
          if (item.id === 12) {
            this.tempQuestionIndex++;
          }
          this.questionSubmit(item.id, this.targetText);
        }, 1000);
      },
      getAge (id, questionText) {
        let num1 = this.swiperAgeOption1.nums[this.swiperAgeOption1.activeIndex];
        let num2 = this.swiperAgeOption2.nums[this.swiperAgeOption2.activeIndex];
        if (num2 === '?') {
          this.toast.text = '请选正确数字';
          this.toast.isShow = true;
          setTimeout(() => {
            this.toast.isShow = false;
          }, 1000);
          return false;
        }
        let num = num1 * 10 + num2;
        setTimeout(() => {
          this.records.pop();
          this.serviceText(questionText);
          this.userReply(num);
          let text = '这么年轻就有投资理念，前途无量！<img style="width: 20px;height: 20px;vertical-align: middle;margin-left: 5px" src="' + require('../assets/financing/emotions_praise@2x.png') + '" />';
          if (num >= 26) {
            if (num <= 45) {
              text = '您正处于财富的上升期，未来定能获得丰硕果实！<img style="width: 20px;height: 20px;vertical-align: middle;margin-left: 5px" src="' + require('../assets/financing/emotions_proud@2x.png') + '" />';
            } else {
              text = '投资是⼀项终身事业，让我来帮您打理的更好<img style="width: 20px;height: 20px;vertical-align: middle;margin-left: 5px" src="' + require('../assets/financing/emotions_proud@2x.png') + '" />';
            }
          }
          this.serviceText(text);
          this.loadingShow();
        }, 100);
        setTimeout(() => {
          this.questionSubmit(id, num);
        }, 1000);
      },
      getFinancingFund (id, questionText) {
        let num1 = this.swiperFinancingFundOption1.nums[this.swiperFinancingFundOption1.activeIndex];
        let num2 = this.swiperFinancingFundOption2.nums[this.swiperFinancingFundOption2.activeIndex];
        let num3 = this.swiperFinancingFundOption3.nums[this.swiperFinancingFundOption3.activeIndex];
        if (!this.swiperFinancingFundOption3.zeroShow) {
          num3 = this.swiperFinancingFundOption3.nums[this.swiperFinancingFundOption3.activeIndex + 1];
        }
        if (num2 === '?') {
          this.toast.text = '请选正确数字';
          this.toast.isShow = true;
          setTimeout(() => {
            this.toast.isShow = false;
          }, 1000);
          return false;
        }
        if (num3 === '?') {
          this.toast.text = '请选正确数字';
          this.toast.isShow = true;
          setTimeout(() => {
            this.toast.isShow = false;
          }, 1000);
          return false;
        }
        let num = num1 * 100 + num2 * 10 + num3;
        if (num === 0) {
          this.toast.text = '请选正确数字';
          this.toast.isShow = true;
          setTimeout(() => {
            this.toast.isShow = false;
          }, 1000);
          return false;
        }
        setTimeout(() => {
          this.records.pop();
          this.serviceText(questionText);
          this.userReply(num + '万元');
          let text = '我知道了<img style="width: 20px;height: 20px;vertical-align: middle;margin-left: 5px" src="' + require('../assets/financing/emotions_ok@2x.png') + '" />';
          this.serviceText(text);
          this.loadingShow();
        }, 100);
        setTimeout(() => {
          this.tempQuestionIndex++;
          this.questionSubmit(id, num);
        }, 1000);
      },
      getNeedMoney (id, questionText) {
        let num1 = this.swiperNeedMoneyOption1.nums[this.swiperNeedMoneyOption1.activeIndex];
        let num2 = this.swiperNeedMoneyOption2.nums[this.swiperNeedMoneyOption2.activeIndex];
        let num3 = this.swiperNeedMoneyOption3.nums[this.swiperNeedMoneyOption3.activeIndex];
        if (!this.swiperNeedMoneyOption3.zeroShow) {
          num3 = this.swiperNeedMoneyOption3.nums[this.swiperNeedMoneyOption3.activeIndex + 1];
        }
        if (num2 === '?') {
          this.toast.text = '请选正确数字';
          this.toast.isShow = true;
          setTimeout(() => {
            this.toast.isShow = false;
          }, 1000);
          return -1;
        }
        if (num3 === '?') {
          this.toast.text = '请选正确数字';
          this.toast.isShow = true;
          setTimeout(() => {
            this.toast.isShow = false;
          }, 1000);
          return -1;
        }
        let num = num1 * 100 + num2 * 10 + num3;
        if (num === 0) {
          this.toast.text = '请选正确数字';
          this.toast.isShow = true;
          setTimeout(() => {
            this.toast.isShow = false;
          }, 1000);
          return false;
        }
        this.neeedMoneyNum = num;
        setTimeout(() => {
          this.records.pop();
          this.serviceText(questionText);
          this.userReply(num + '万元');
          this.loadingShow();
        }, 100);
        setTimeout(() => {
          this.questionSubmit(id, num);
        }, 1000);
      },
      getInvestMoney (id, questionText) {
        let num1 = this.swiperInvestMoneyOption1.nums[this.swiperInvestMoneyOption1.activeIndex];
        let num2 = this.swiperInvestMoneyOption2.nums[this.swiperInvestMoneyOption2.activeIndex];
        let num3 = this.swiperInvestMoneyOption3.nums[this.swiperInvestMoneyOption3.activeIndex];
        if (!this.swiperInvestMoneyOption3.zeroShow) {
          num3 = this.swiperInvestMoneyOption3.nums[this.swiperInvestMoneyOption3.activeIndex + 1];
        }
        if (num2 === '?') {
          this.toast.text = '请选正确数字';
          this.toast.isShow = true;
          setTimeout(() => {
            this.toast.isShow = false;
          }, 1000);
          return -1;
        }
        if (num3 === '?') {
          this.toast.text = '请选正确数字';
          this.toast.isShow = true;
          setTimeout(() => {
            this.toast.isShow = false;
          }, 1000);
          return -1;
        }
        let num = num1 * 100 + num2 * 10 + num3;
        if (num === 0) {
          this.toast.text = '请选正确数字';
          this.toast.isShow = true;
          setTimeout(() => {
            this.toast.isShow = false;
          }, 1000);
          return false;
        }
        this.records.pop();
        this.serviceText(questionText);
        this.userReply(num + '万元');
        let differNum = this.neeedMoneyNum - num;
        if (differNum < 0) {
          this.serviceText('您的资金缺口为负数，是不是写错了？ 可以点击底部返回上一题哦。');
          this.tempQuestionIndex++;
          return -1;
        } else {
          this.serviceText('您的资金缺口为' + differNum + '万元， 我会尽力帮你实现！');
        }
        this.loadingShow();
        setTimeout(() => {
          this.questionSubmit(id, num);
        }, 1000);
      },
      getAnnualIncome (id, questionText) {
        let num1 = this.swiperAnnualIncomeOption1.nums[this.swiperAnnualIncomeOption1.activeIndex];
        let num2 = this.swiperAnnualIncomeOption2.nums[this.swiperAnnualIncomeOption2.activeIndex];
        let num3 = this.swiperAnnualIncomeOption3.nums[this.swiperAnnualIncomeOption3.activeIndex];
        if (!this.swiperAnnualIncomeOption3.zeroShow) {
          num3 = this.swiperAnnualIncomeOption3.nums[this.swiperAnnualIncomeOption3.activeIndex + 1];
        }
        if (num2 === '?') {
          this.toast.text = '请选正确数字';
          this.toast.isShow = true;
          setTimeout(() => {
            this.toast.isShow = false;
          }, 1000);
          return -1;
        }
        if (num3 === '?') {
          this.toast.text = '请选正确数字';
          this.toast.isShow = true;
          setTimeout(() => {
            this.toast.isShow = false;
          }, 1000);
          return -1;
        }
        let num = num1 * 100 + num2 * 10 + num3;
        if (num === 0) {
          this.toast.text = '请选正确数字';
          this.toast.isShow = true;
          setTimeout(() => {
            this.toast.isShow = false;
          }, 1000);
          return false;
        }
        setTimeout(() => {
          this.records.pop();
          this.serviceText(questionText);
          this.userReply(num + '万元');
          this.loadingShow();
        }, 100);
        setTimeout(() => {
          this.questionSubmit(id, num);
        }, 1000);
      },
      getAnnualExpend (id, questionText) {
        let num1 = this.swiperAnnualExpendOption1.nums[this.swiperAnnualExpendOption1.activeIndex];
        let num2 = this.swiperAnnualExpendOption2.nums[this.swiperAnnualExpendOption2.activeIndex];
        let num3 = this.swiperAnnualExpendOption3.nums[this.swiperAnnualExpendOption3.activeIndex];
        if (!this.swiperAnnualExpendOption3.zeroShow) {
          num3 = this.swiperAnnualExpendOption3.nums[this.swiperAnnualExpendOption3.activeIndex + 1];
        }
        if (num2 === '?') {
          this.toast.text = '请选正确数字';
          this.toast.isShow = true;
          setTimeout(() => {
            this.toast.isShow = false;
          }, 1000);
          return -1;
        }
        if (num3 === '?') {
          this.toast.text = '请选正确数字';
          this.toast.isShow = true;
          setTimeout(() => {
            this.toast.isShow = false;
          }, 1000);
          return -1;
        }
        let num = num1 * 100 + num2 * 10 + num3;
        if (num === 0) {
          this.toast.text = '请选正确数字';
          this.toast.isShow = true;
          setTimeout(() => {
            this.toast.isShow = false;
          }, 1000);
          return false;
        }
        setTimeout(() => {
          this.records.pop();
          this.serviceText(questionText);
          this.userReply(num + '万元');
          this.loadingShow();
        }, 100);
        setTimeout(() => {
          this.questionSubmit(id, num);
        }, 1000);
      },
      getLottery (id, type, questionText) {
        if (type === 0) {
          this.records.pop();
          let num = 300;
          if (this.lotteryNum > 3) {
            num = this.lotteryNum * 100 - 100;
          } else {
            num = 0;
          }
          let text = '(3/5) 如果有张彩票50%的可能中奖1000元，这张彩票的价格是 ' + num + '元，你会买吗？';
          if (num === 0) {
            text = '(3/5) 如果有张彩票50%的可能中奖1000元，这张彩票的价格是低于300元，你会买吗？';
          }
          this.serviceText(text);
          if (num === 0) {
            this.userReply('低于300元');
          } else {
            this.userReply(num + '元');
          }
          this.loadingShow();
          setTimeout(() => {
            this.questionSubmit(id, num);
          }, 1000);
          this.lotteryNum = 3;
        } else {
          if (this.lotteryNum < 8) {
            this.lotteryShow = false;
            setTimeout(() => {
              this.lotteryNum++;
              this.lotteryShow = true;
            }, 100);
          } else {
            this.records.pop();
            let text = '(3/5) 如果有张彩票50%的可能中奖1000元，这张彩票的价格是800元,你会买吗？';
            this.serviceText(text);
            this.userReply(800 + '元');
            this.loadingShow();
            setTimeout(() => {
              this.questionSubmit(id, 800);
            }, 1000);
            this.lotteryNum = 3;
          }
        }
      },
      questionSubmit (questionId, answer) {
        this.getQuest(answer);
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../common/stylus/mixin.styl"
  .main-wrapper
    height: 100%
    .chat-list
      .chat-wrapper
        position: absolute
        width: 100%
        max-width: 640px
        margin: 0 auto
        top: 0px
        bottom: 0
        left: 0
        right: 0
        overflow: hidden
        &.top0
          top: 0px
        .chat-ul
          width: 100%
          padding-bottom: 20px
          .item
            padding: 0 15px
            margin-top: 30px
            .chat-user
              display: flex
            .left-com
              flex: 1
              position: relative
              .triangle
                position: absolute
                right: 10px
                top: 12px
                width: 0
                height: 0
                border-top: 8px solid transparent
                border-left: 8px solid rgb(90, 164, 252)
                border-bottom: 8px solid transparent
              .white-box
                position: absolute
                top: 0px
                right: 18px
                display: inline-block
                background: rgb(90, 164, 252)
                padding: 10px 15px
                border-radius: 5px
                max-width: 80%
                &.text
                  line-height: 20px
                  font-size: 14px
                  color: #ffffff
            .right-avatar
              flex: 0 40px
              width: 40px
              .avatar
                margin-top: 5px
                width: 30px
                height: 30px
            .chat-service
              display: flex
              animation: service-in .2s linear
              &.single-text
                animation: none
              .left-avatar
                width: 40px
                .avatar
                  margin-top: 5px
                  width: 30px
                  height: 30px
              .right-com
                flex: 1
                position: relative
                .triangle
                  position: absolute
                  left: 0
                  top: 12px
                  width: 0
                  height: 0
                  border-top: 8px solid transparent
                  border-right: 8px solid #ffffff
                  border-bottom: 8px solid transparent
                .loading
                  .loadimg
                    width: 80px
                    height: 30px
                    bg-image('../assets/financing/loading1')
                    background-size: 80px 30px
                    background-repeat: no-repeat
                    &.loadimg1
                      bg-image('../assets/financing/loading1')
                      background-size: 80px 30px
                      background-repeat: no-repeat
                    &.loadimg2
                      bg-image('../assets/financing/loading2')
                      background-size: 80px 30px
                      background-repeat: no-repeat
                    &.loadimg3
                      bg-image('../assets/financing/loading3')
                      background-size: 80px 30px
                      background-repeat: no-repeat
                .white-box
                  display: inline-block
                  margin-left: 8px
                  background: #ffffff
                  padding: 12px 15px
                  border-radius: 5px
                  max-width: 80%
                  &.width-full
                    width: 80%
                  &.text
                    line-height: 20px
                    font-size: 14px
                    color: rgb(34, 34, 34)
                    .start-a
                      display: block
                      position: relative
                      margin-top: 10px
                      padding-top: 5px
                      padding-bottom: 5px
                      border-bottom: 1px dashed rgb(238, 238, 238)
                      font-size: 14px
                      color: rgb(90, 164, 251)
                      .icon-begin-right
                        display: inline-block
                        position: absolute
                        right: 0px
                        top: 10px
                        width: 15px
                        height: 15px
                        bg-image('../assets/financing/begin_right')
                        background-size: 15px 15px
                        background-repeat: no-repeat
                  .title
                    line-height: 20px
                    font-size: 14px
                    color: rgb(34, 34, 34)
                  .short-result
                    margin-top: 5px
                    display: inline-block
                    width: 99%
                    height: 130px
                    bg-image('../assets/financing/short_result')
                    background-size: 100% 100%
                    background-repeat: no-repeat
                  .long-result
                    margin-top: 5px
                    display: inline-block
                    width: 99%
                    height: 130px
                    bg-image('../assets/financing/long_result')
                    background-size: 100% 100%
                    background-repeat: no-repeat
                  .com
                    margin-top: 20px
                    display: flex
                    .selected
                      display: inline-block
                      position: absolute
                      right: 0px
                      bottom: -5px
                      width: 28px
                      height: 28px
                      bg-image('../assets/financing/selected')
                      background-size: 28px 28px
                      background-repeat: no-repeat
                    .text
                      margin-top: 10px
                      line-height: 20px
                      font-size: 14px
                      color: rgb(34, 34, 34)
                    &.qu-sex
                      .sex-item
                        flex: 1
                        text-align: center
                        .select-icon
                          display: inline-block
                          position: relative
                          width: 68px
                          height: 68px
                          &.male
                            bg-image('../assets/financing/male')
                            background-size: 68px 68px
                            background-repeat: no-repeat
                          &.female
                            bg-image('../assets/financing/female')
                            background-size: 68px 68px
                            background-repeat: no-repeat
                    &.qu-family
                      .family-item
                        flex: 1
                        text-align: center
                        .select-icon
                          display: inline-block
                          position: relative
                          width: 60px
                          height: 60px
                          &.family1
                            bg-image('../assets/financing/family_1')
                            background-size: 60px 60px
                            background-repeat: no-repeat
                          &.family2
                            bg-image('../assets/financing/family_2')
                            background-size: 60px 60px
                            background-repeat: no-repeat
                          &.family3
                            bg-image('../assets/financing/family_3')
                            background-size: 60px 60px
                            background-repeat: no-repeat
                          &.family4
                            bg-image('../assets/financing/family_4')
                            background-size: 60px 60px
                            background-repeat: no-repeat
                          &.family5
                            bg-image('../assets/financing/family_5')
                            background-size: 60px 60px
                            background-repeat: no-repeat
                    &.qu-industry
                      .industry-item
                        flex: 1
                        text-align: center
                        .select-icon
                          display: inline-block
                          position: relative
                          width: 60px
                          height: 60px
                          &.industry1
                            bg-image('../assets/financing/industry_1')
                            background-size: 60px 60px
                            background-repeat: no-repeat
                          &.industry2
                            bg-image('../assets/financing/industry_2')
                            background-size: 60px 60px
                            background-repeat: no-repeat
                          &.industry3
                            bg-image('../assets/financing/industry_3')
                            background-size: 60px 60px
                            background-repeat: no-repeat
                          &.industry4
                            bg-image('../assets/financing/industry_4')
                            background-size: 60px 60px
                            background-repeat: no-repeat
                          &.industry5
                            bg-image('../assets/financing/industry_5')
                            background-size: 60px 60px
                            background-repeat: no-repeat
                          &.industry6
                            bg-image('../assets/financing/industry_6')
                            background-size: 60px 60px
                            background-repeat: no-repeat
                    &.qu-invest-time
                      .sex-item
                        flex: 1
                        text-align: center
                        .select-icon
                          display: inline-block
                          position: relative
                          width: 68px
                          height: 68px
                          &.invest-time1
                            bg-image('../assets/financing/invest_time1')
                            background-size: 68px 68px
                            background-repeat: no-repeat
                          &.invest-time2
                            bg-image('../assets/financing/invest_time2')
                            background-size: 68px 68px
                            background-repeat: no-repeat
                    &.qu-assets
                      .assets-item
                        flex: 1
                        text-align: center
                        .select-icon
                          display: inline-block
                          position: relative
                          width: 88px
                          height: 88px
                          &.assets1
                            bg-image('../assets/financing/assets_1')
                            background-size: 88px 88px
                            background-repeat: no-repeat
                          &.assets2
                            bg-image('../assets/financing/assets_2')
                            background-size: 88px 88px
                            background-repeat: no-repeat
                          &.assets3
                            bg-image('../assets/financing/assets_3')
                            background-size: 88px 88px
                            background-repeat: no-repeat
                          &.assets4
                            bg-image('../assets/financing/assets_4')
                            background-size: 88px 88px
                            background-repeat: no-repeat
                    &.qu-bank
                      .bank-item
                        flex: 1
                        text-align: center
                        .select-icon
                          display: inline-block
                          position: relative
                          width: 88px
                          height: 55px
                          .selected
                            display: inline-block
                            position: absolute
                            right: -10px
                            bottom: -10px
                            width: 28px
                            height: 28px
                            bg-image('../assets/financing/selected')
                            background-size: 28px 28px
                            background-repeat: no-repeat
                          &.bank1
                            bg-image('../assets/financing/bank_1')
                            background-size: 88px 55px
                            background-repeat: no-repeat
                          &.bank2
                            bg-image('../assets/financing/bank_2')
                            background-size: 88px 55px
                            background-repeat: no-repeat
                          &.bank3
                            bg-image('../assets/financing/bank_3')
                            background-size: 88px 55px
                            background-repeat: no-repeat
                          &.bank4
                            bg-image('../assets/financing/bank_4')
                            background-size: 88px 55px
                            background-repeat: no-repeat
                    &.qu-product
                      padding-bottom: 20px
                      .product-item
                        flex: 1
                        text-align: center
                        .select-icon
                          display: inline-block
                          position: relative
                          width: 60px
                          height: 60px
                          &.product1
                            bg-image('../assets/financing/product_1')
                            background-size: 60px 60px
                            background-repeat: no-repeat
                          &.product2
                            bg-image('../assets/financing/product_2')
                            background-size: 60px 60px
                            background-repeat: no-repeat
                          &.product3
                            bg-image('../assets/financing/product_3')
                            background-size: 60px 60px
                            background-repeat: no-repeat
                          &.product4
                            bg-image('../assets/financing/product_4')
                            background-size: 60px 60px
                            background-repeat: no-repeat
                          &.product5
                            bg-image('../assets/financing/product_5')
                            background-size: 60px 60px
                            background-repeat: no-repeat
                    &.qu-emios
                      .emios-item
                        flex: 1
                        text-align: center
                        .select-icon
                          display: inline-block
                          position: relative
                          width: 88px
                          height: 88px
                          &.emios1
                            bg-image('../assets/financing/emios_1')
                            background-size: 88px 88px
                            background-repeat: no-repeat
                          &.emios2
                            bg-image('../assets/financing/emios_2')
                            background-size: 88px 88px
                            background-repeat: no-repeat
                          &.emios3
                            bg-image('../assets/financing/emios_3')
                            background-size: 88px 88px
                            background-repeat: no-repeat
                    &.qu-time
                      .time-item
                        flex: 1
                        text-align: center
                        .select-icon
                          display: inline-block
                          position: relative
                          width: 60px
                          height: 60px
                          &.time1
                            bg-image('../assets/financing/time_1')
                            background-size: 60px 60px
                            background-repeat: no-repeat
                          &.time2
                            bg-image('../assets/financing/time_2')
                            background-size: 60px 60px
                            background-repeat: no-repeat
                          &.time3
                            bg-image('../assets/financing/time_3')
                            background-size: 60px 60px
                            background-repeat: no-repeat
                          &.time4
                            bg-image('../assets/financing/time_4')
                            background-size: 60px 60px
                            background-repeat: no-repeat
                          &.time5
                            bg-image('../assets/financing/time_5')
                            background-size: 60px 60px
                            background-repeat: no-repeat
                    &.qu-target
                      .target-item
                        flex: 1
                        text-align: center
                        .select-icon
                          display: inline-block
                          position: relative
                          width: 60px
                          height: 60px
                          &.target1
                            bg-image('../assets/financing/target_1')
                            background-size: 60px 60px
                            background-repeat: no-repeat
                          &.target2
                            bg-image('../assets/financing/target_2')
                            background-size: 60px 60px
                            background-repeat: no-repeat
                          &.target3
                            bg-image('../assets/financing/target_3')
                            background-size: 60px 60px
                            background-repeat: no-repeat
                          &.target4
                            bg-image('../assets/financing/target_4')
                            background-size: 60px 60px
                            background-repeat: no-repeat
                          &.target5
                            bg-image('../assets/financing/target_5')
                            background-size: 60px 60px
                            background-repeat: no-repeat
                          &.target6
                            margin-top: 30px
                            width: 60px
                            height: 15px
                            bg-image('../assets/financing/target_6')
                            background-size: 60px 15px
                            background-repeat: no-repeat
                    &.qu-num
                      padding-bottom: 30px
                      .num-item
                        flex: 1
                        text-align: center
                        .num-wrapper
                          display: inline-block
                          width: 60px
                          height: 80px
                          text-align: center
                          bg-image('../assets/financing/num_bg')
                          background-size: 60px 80px
                          background-repeat: no-repeat
                          .num-up
                            display: block
                            height: 20px
                            text-align: center
                            .icon-up
                              display: inline-block
                              width: 13px
                              height: 7px
                              bg-image('../assets/financing/num_up')
                              background-size: 13px 7px
                              background-repeat: no-repeat
                          .num-down
                            display: block
                            height: 20px
                            text-align: center
                            .icon-down
                              display: inline-block
                              width: 13px
                              height: 7px
                              bg-image('../assets/financing/num_down')
                              background-size: 13px 7px
                              background-repeat: no-repeat
                          .swiper-container
                            width: 100%
                            height: 40px
                            .swiper-slide
                              line-height: 40px
                              font-size: 40px
                              color: rgb(210, 160, 86)
                      .num-unit
                        margin-left: 5px
                        padding-top: 60px
                        font-size: 14px
                        color: rgb(34, 34, 34)
                    &.qu-lottery
                      .num
                        margin-top: 20px
                        height: 40px
                        line-height: 40px
                        font-size: 40px
                        color: rgb(210, 160, 86)
                  .qu-fin-product
                    .item-text
                      width: 95%
                      padding-left: 4%
                      margin-top: 10px
                      height: 34px
                      line-height: 34px
                      border: 1px dashed rgb(238, 238, 238)
                      border-radius: 15px
                      font-size: 12px
                      color: rgb(34, 34, 34)
                .qu-num-btn
                  position: absolute
                  left: 50%
                  bottom: -15px
                  width: 120px
                  height: 32px
                  line-height: 32px
                  margin-left: -80px
                  text-align: center
                  background: rgb(237, 189, 117)
                  border-radius: 16px
                  box-shadow: 2px 2px 5px #ccc
                  color: #ffffff
                  font-size: 16px
                .qu-lottery-btns
                  margin-top: -16px
                  text-align: center
                  .lottery-btn
                    display: inline-block
                    margin-right: 10px
                    width: 80px
                    height: 36px
                    line-height: 36px
                    text-align: center
                    border-radius: 18px
                    color: #ffffff
                    font-size: 16px
                    &.lottery-yes
                      bg-image('../assets/financing/lottery_yes')
                      background-size: 80px 36px
                      background-repeat: no-repeat
                    &.lottery-no
                      bg-image('../assets/financing/lottery_no')
                      background-size: 80px 36px
                      background-repeat: no-repeat
                .target-input
                  margin-top: 10px
                  height: 50px
                  text-align: center
                  .text
                    font-size: 12px
                  .input
                    display: inline-block
                    width: 50%
                    height: 30px
                    padding-left: 5px
                    background: #f2f2f2
                    border-radius: 5px
                .info-item
                  display: flex
                  width: 100%
                  margin: 15px auto
                  .input
                    flex: 1
                    width: 100%
                    height: 26px
                    padding-left: 5px
                    border: none
                    -webkit-appearance: none
                    border-radius: 0
                    border-bottom: 1px solid rgb(221, 221, 221)
                    font-size: 11px
                    &.tel
                      flex: 1
                  .right-com
                    flex: 0 100px
                    width: 100px
                    text-align: right
                    .send-code
                      display: inline-block
                      width 83px
                      height: 23px
                      line-height: 23px
                      text-align: center
                      background: rgb(136, 188, 249)
                      border-radius: 3px
                      color: #fff
                      font-size: 11px
          .chat-bottom
            width: 100%
            height: 120px
            text-align: center
            .last-question
              display: inline-block
              padding: 5px 10px
              margin-top: 70px
              background: #fff
              border: 1px solid #ddd
              border-radius: 15px
              font-size: 14px
              color: rgb(90, 164, 251)
              /*animation: bottom-in .5s ease-out*/
              .icon-last
                display: inline-block
                vertical-align: bottom
                margin-right: 5px
                width: 15px
                height: 15px
                bg-image('../assets/financing/last_question')
                background-size: 15px 15px
                background-repeat: no-repeat
  &.last-question-enter-active, &.last-question-leave-active
    transition: all 0.5s
    opacity: 1
    transform:translate(0,0px)
  &.last-question-enter, &.last-question-leave-active
    opacity: 0
    transform:translate(0,30px)
  &.lottery-enter-active
    transition: all 0.2s ease-out
    opacity: 1
    transform:translate(0,0)
  &.lottery-enter
    opacity: 0
    transform:translate(0,5px)
  @keyframes service-in
    0%
      transform:translate3d(0, 60px, 0)
      opacity: 1
    30%
      transform:translate3d(0, 40px, 0)
      opacity: 1
    60%
      transform:translate3d(0, 20px, 0)
      opacity: 1
    100%
      transform:translate3d(0, 0px, 0)
      opacity: 1
</style>
