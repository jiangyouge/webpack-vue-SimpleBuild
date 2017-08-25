<template>
  <div>
    <div class="your_scores_container">
      <header class="your_scores"><span class="score_num">{{score}}</span><span class="fenshu">分</span></header>
      <div class="result_tip">{{scoreTips}}</div>
    </div>
  </div>
</template>

<script>
  
  import { mapState } from 'vuex'

  export default {
    name: 'score',
    data() {
      return {
        // showHide: false,
        score: 0,
        scoreTips: '',
        rightAnswer: [2, 7, 12, 13, 18],
        scoreTipsArr: ['一档','二档','三档','四档','没档']
      }
    },
    computed: mapState(['answerid']),
    created(){
      this.computedScore();
      this.getScoreTip();
      document.body.style.backgroundImage = 'url(./src/images/4-1.jpg)'
    },
    methods: {
      computedScore(){
        this.answerid.forEach((item, index) => {
          if(item == this.rightAnswer[index]){
            this.score += 20
          }
        })
      },
      getScoreTip(){
        if(this.score <= 20){
          this.scoreTips = this.scoreTipsArr[0]
          return
        }else if(this.score <= 40){
          this.scoreTips = this.scoreTipsArr[1]
          return
        }else if(this.score <= 60){
          this.scoreTips = this.scoreTipsArr[2]
          return
        }else if(this.score <= 80){
          this.scoreTips = this.scoreTipsArr[3]
          return
        }else{
          this.scoreTips = this.scoreTipsArr[4]
          return
        }
      }
    }
  }
</script>

<style lang="less">
    body{
        background-image: url(../../images/4-1.jpg);
        padding-top: 1.2rem;
    }
    .your_scores_container{
        width: 9.7rem;
        height: 9.1rem;
        background: url(../../images/4-2.png) no-repeat;
        background-size: 100% 100%;
        margin: 0 auto 0;
        position: relative;
        .your_scores{
            position: absolute;
            width: 100%;
            text-indent: 3.3rem;
            top: 4.7rem;
            font-size: 1.4rem;
            font-weight: 900;
            -webkit-text-stroke: 0.05rem #412318;
            font-family: 'Microsoft YaHei';
            .score_num{
                font-family: Tahoma,Helvetica,Arial;
                color: #a51d31;
            }
            .fenshu{
                color: #a51d31;
            }
        }
        .result_tip{
            position: absolute;
            top: 7rem;
            width: 9rem;
            left: 0.6rem;
            color: #3e2415;
            font-size: 0.65rem;
            text-align: center;
        }
    }
    .share_button{
        width: 6.025rem;
        height: 2.4rem;
        margin: 0.8rem auto 0;
        background: url(../../images/4-3.png) no-repeat 0.4rem 0;
        background-size: 5.825rem 100%;
    }
    .share_code{
        width: 5.3rem;
        margin: 1.5rem auto 0;
        .share_header{
            color: #664718;
            font-size: 0.475rem;
            font-family: 'Microsoft YaHei';
            width: 7rem;
            font-weight: 500;
        }
        .code_img{
            height: 5.3rem;
            width: 5.3rem;
            margin-top: 0.5rem;
        }
    }
    .share_cover{
        position: fixed;
        bottom: 0;
        right: 0;
        top: 0;
        left: 0;
        background: url(../../images/5-1.png) no-repeat;
        background-size: 100% 100%;
        opacity: 0.92;
    }
    .share_img{
        height: 10.975rem;
        width: 11.95rem;
        position: fixed;
        top: 0.5rem;
        left: 50%;
        margin-left: -5.975rem;
    }
</style>