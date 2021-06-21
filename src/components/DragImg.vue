<template>
  <div class="drag">
    <img :src="$imgsrc+'default.png'" ref="imgEl" class="move" @dragstart="startMove" @dragover="move" @dragend="stopMove" :style="moveStyle" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      isDrag: false,
      x0: 0,
      y0: 0,
      x1: 0,
      y1: 0,
      moveStyle: "",
    };
  },
  methods: {
    startMove(el) {
      console.log("开始");
      this.isDrag = true;
      this.x0 = el.clientX;
      this.y0 = el.clientY;
    },
    move(e) {
      if (this.isDrag) {
        this.x1 = e.clientX;
        this.y1 = e.clientY;
        let x = this.x1 - this.x0;
        let y = this.y1 - this.y0;
        let top = this.$refs.imgEl.offsetTop;
        if (top + y > 0 && top + y < 250) {
          this.moveStyle = `left:${this.$refs.imgEl.offsetLeft + x}px;top:${
            top + y
          }px`;
          this.x0 = this.x1;
          this.y0 = this.y1;
        }
      }
    },
    stopMove() {
      console.log("结束");
      this.isDrag = false;
    },
  },
};
</script>
<style scoped lang="less">
.drag {
  position: relative;
  width: 100%;
  height: 300px;
  border: 1px solid #000;

  .move {
    position: absolute;
    width: 50px;
  }
}
</style>