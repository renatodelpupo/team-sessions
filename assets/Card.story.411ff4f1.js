import { d as defineComponent, av as _export_sfc, a as openBlock, b as createElementBlock, e as createBaseVNode, t as toDisplayString, q as resolveComponent, j as createBlock, k as withCtx, l as createVNode } from "./vendor.3287617d.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Card",
  props: {
    author: {
      required: true,
      type: String
    },
    date: {
      required: true,
      type: String
    },
    description: {
      default: "",
      type: String
    },
    image: {
      required: true,
      type: String
    },
    recordingUrl: {
      required: true,
      type: String
    },
    title: {
      required: true,
      type: String
    }
  },
  setup(__props, { expose }) {
    expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = { class: "bg-zinc-800 focus-within:outline focus-within:outline-2 focus-within:outline-blue-500 hover:outline hover:outline-2 hover:outline-blue-500 overflow-hidden rounded-lg text-slate-50" };
const _hoisted_2 = ["href"];
const _hoisted_3 = ["src"];
const _hoisted_4 = { class: "p-6" };
const _hoisted_5 = ["textContent"];
const _hoisted_6 = { class: "text-lg" };
const _hoisted_7 = ["textContent"];
const _hoisted_8 = ["textContent"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createBaseVNode("a", {
      class: "block",
      href: $props.recordingUrl,
      target: "_blank"
    }, [
      createBaseVNode("img", {
        alt: "",
        class: "block w-full",
        src: $props.image
      }, null, 8, _hoisted_3),
      createBaseVNode("div", _hoisted_4, [
        createBaseVNode("h2", {
          class: "text-2xl",
          textContent: toDisplayString($props.title)
        }, null, 8, _hoisted_5),
        createBaseVNode("p", _hoisted_6, "by " + toDisplayString($props.author), 1),
        createBaseVNode("p", {
          class: "text-sm",
          textContent: toDisplayString($props.date)
        }, null, 8, _hoisted_7),
        createBaseVNode("p", {
          class: "mt-4 text-base whitespace-pre-line",
          textContent: toDisplayString($props.description.trim())
        }, null, 8, _hoisted_8)
      ])
    ], 8, _hoisted_2)
  ]);
}
_sfc_main$1.__file = "components/Card.vue";
var __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/natodp/git/team-sessions/components/Card.vue"]]);
const _sfc_main = {};
const _hoisted_1 = { class: "p-8 w-fit" };
function _sfc_render(_ctx, _cache) {
  const _component_Card = __nuxt_component_0;
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, null, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createVNode(_component_Card, {
          author: "Renato DelPupo",
          date: "19/10/2021",
          description: "\r\n          Topics:\r\n          - Present JavaScript and general web development terms\r\n          - Short explanation about each term\r\n          - Examples of use\r\n        ",
          image: "https://via.placeholder.com/160x90.png",
          recordingUrl: "#",
          title: "JavaScript Recall"
        })
      ])
    ]),
    _: 1
  });
}
_sfc_main.__file = "components/Card.story.vue";
var Card_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/natodp/git/team-sessions/components/Card.story.vue"]]);
export { Card_story as default };
