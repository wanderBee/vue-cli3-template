<template>
  <div class="skeleton">
    <svg width="200" height="80">
      <g class="g-circles">
        <circle cx="85" cy="40" class="primary"></circle>
        <circle cx="115" cy="40"></circle>
      </g>
    </svg>
  </div>
</template>

<style lang="less">
@scale-big: 10;
@scale-small: 7;
.skeleton {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .g-circles circle {
    r: @scale-small;
    fill: gray;
    animation: anim-scale-big 0.8s ease-in-out alternate infinite;
    &.primary {
      r: @scale-big;
      fill: #6c89d5;
      animation-name: anim-scale-small;
    }
  }
}

@keyframes anim-scale-big {
  0% {
    r: @scale-small;
  }
  100% {
    r: @scale-big;
  }
}
@keyframes anim-scale-small {
  0% {
    r: @scale-big;
  }
  100% {
    r: @scale-small;
  }
}
</style>
