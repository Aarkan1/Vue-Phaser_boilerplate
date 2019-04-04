new Vue({
  el: "#ui",
  data: {
    message: "Vue Phaser",
    items: [{text: 'test 1'}, {text: 'test 2'}, {text: 'test 3'}]
  },
  template: `
    <div id="ui">
        <hello-world :message="message" />
        <test-comp v-for="(item, index) in items" :item="item" :key="index" />
    </div>`
});
