Vue.component("test-comp", {
  props: ["item"],
  template: `
        <h2 style="margin: 0">{{item.text}}</h2>`
});
