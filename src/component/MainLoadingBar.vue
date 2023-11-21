<script setup>
defineProps({
  size: {
    type: String,
    default: '0.8rem',
    // include rem size
    validator: (value) => {
      value.includes('rem');
    },
  },
});
</script>
<template>
  <div :class="$style['main-loading']">
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <div :class="$style['bar']"></div>
  </div>
</template>
<style module>
.main-loading {
  --load-base-size: v-bind(size);
  position: relative;
  left: 50%;
  top: calc(var(--load-base-size) * 13);
  transform: translate(-50%, -50%);
}
.main-loading ul {
  margin: auto;
  width: calc(var(--load-base-size) * 50);
}
.main-loading ul li {
  --load-item-height: calc(var(--load-base-size) * 12);
  --load-item-width: calc(var(--load-base-size) * 5);
  /* Position and size */
  position: absolute;
  top: calc(var(--load-item-height) * (-1));
  height: var(--load-item-height);
  width: var(--load-item-width);
  /* Shape & Color */
  list-style: none;
  background-color: var(--color-primary-500);
  border: calc(var(--load-base-size) * 0.5) solid var(--color-primary-50);
  border-radius: var(--base-border-radius);
  /* Animation */
  opacity: 0;
  transform-origin: bottom left;
  transform: translateX(var(--load-item-height));
  --travel-x-position: calc(var(--load-base-size) * 33);
  --travel-duration: calc(var(--base-transition-duration) * 1.1);
  --item-order: 1;
  animation: travel var(--travel-duration) linear infinite;
  animation-delay: calc(var(--travel-duration) * ((var(--item-order) - 1) / 6));
}
.main-loading li:nth-child(1) {
  --loading-item-height: calc(var(--load-base-size) * 12.5);
}
.main-loading li:nth-child(4) {
  --load-item-height: calc(var(--load-base-size) * 11.5);
}
.main-loading li:nth-child(5) {
  --load-item-height: calc(var(--load-base-size) * 12.8);
}
.main-loading li:nth-child(6) {
  --load-item-height: calc(var(--load-base-size) * 11);
}
.main-loading li:before,
.main-loading li:after {
  content: '';
  position: absolute;
  left: 0;
  top: calc(var(--load-item-height) * 0.15);
  width: 100%;
}
.main-loading li:nth-child(1):before,
.main-loading li:nth-child(1):after {
  top: calc(var(--load-item-height) * 0.5);
  height: calc(var(--load-base-size) * 0.5);
  background-color: var(--color-neutral-50);
}
.main-loading li:nth-child(2):before,
.main-loading li:nth-child(2):after,
.main-loading li:nth-child(5):before,
.main-loading li:nth-child(5):after {
  height: calc(var(--load-base-size) * 2);
  /* Border top and bottom */
  border-block: calc(var(--load-base-size) * 0.5) solid var(--color-accent-50);
}
.main-loading li:nth-child(3):before,
.main-loading li:nth-child(3):after,
.main-loading li:nth-child(6):after {
  --circle-size: calc(var(--load-base-size) * 1.6);
  left: 30%;
  width: var(--circle-size);
  height: var(--circle-size);
  border-radius: 50%;
  border: calc(var(--load-base-size) * 0.5) solid var(--color-accent-50);
}
.main-loading li:nth-child(2):after,
.main-loading li:nth-child(1):after,
.main-loading li:nth-child(3):after {
  top: initial;
  bottom: calc(var(--load-item-height) * 0.15);
}
.main-loading li:nth-child(4):before {
  top: calc(var(--load-item-height) * 0.3);
  height: calc(var(--load-item-height) * 0.15);
  border-block: calc(var(--load-base-size) * 0.5) solid var(--color-accent-50);
}
.main-loading li:nth-child(6):before {
  top: calc(var(--load-item-height) * 0.56);
  bottom: calc(var(--load-item-height) * 0.1);
  height: calc(var(--load-base-size) * 0.5);
  background-color: var(--color-accent-50);
}
.main-loading li:nth-child(6):after {
  top: calc(var(--load-item-height) * 0.68);
}
.main-loading li:nth-child(2) {
  --item-order: 2;
}
.main-loading li:nth-child(3) {
  --item-order: 3;
}
.main-loading li:nth-child(4) {
  --item-order: 4;
}
.main-loading li:nth-child(5) {
  --item-order: 5;
}
.main-loading li:nth-child(6) {
  --item-order: 6;
}
.bar {
  margin: auto;
  position: relative;
  left: calc(var(--load-base-size) * (-3));
  width: calc(var(--load-base-size) * 33);
  height: calc(var(--load-base-size) * 0.6);
  background-color: var(--color-primary-400);
  border-radius: var(--base-border-radius);
}
.bar:before,
.bar:after {
  content: '';
  position: absolute;
  top: 160%;
  left: 3%;
  width: 100%;
  height: 150%;
  background-image: radial-gradient(var(--color-primary-500) 30%, transparent 0);
  background-size: var(--load-base-size);
  background-position: 0;
  --move-duration: calc(var(--base-transition-duration) / 10);
  animation: move var(--move-duration) linear infinite;
}
.bar:after {
  top: 300%;
  left: 6%;
}
@keyframes move {
  from {
    background-position-x: 0;
  }
  to {
    background-position-x: calc(var(--load-base-size) * 1.2);
  }
}
@keyframes travel {
  0% {
    opacity: 0;
    transform: translateX(var(--travel-x-position)) rotateZ(0deg) scaleY(1);
  }
  6.5% {
    transform: translateX(calc(var(--travel-x-position) * (1 - 0.065))) scaleY(1.1);
  }
  8.8% {
    transform: translateX(calc(var(--travel-x-position) * (1 - 0.088))) scaleY(1);
  }
  10% {
    opacity: 1;
  }
  17.6% {
    transform: translateX(calc(var(--travel-x-position) * (1 - 0.18)));
  }
  45% {
    transform: translateX(calc(var(--travel-x-position) * (1 - 0.45))) rotateZ(-30deg);
  }
  49.5% {
    transform: translateX(calc(var(--travel-x-position) * (1 - 0.5))) rotateZ(-40deg);
  }
  61.5% {
    transform: translateX(calc(var(--travel-x-position) * (1 - 0.62))) rotateZ(-50deg);
  }
  67% {
    transform: translateX(calc(var(--travel-x-position) * (1 - 0.67))) rotateZ(-60deg);
  }
  76% {
    transform: translateX(calc(var(--travel-x-position) * (1 - 0.76))) rotateZ(-60deg);
  }
  83.5% {
    opacity: 1;
    transform: translateX(calc(var(--travel-x-position) * (1 - 0.84))) rotateZ(-90deg);
  }
  85% {
    opacity: 0.6;
  }
  90% {
    opacity: 0;
  }
  100% {
    opacity: 0;
    transform: translateX(0px) rotateZ(-90deg);
  }
}
</style>
