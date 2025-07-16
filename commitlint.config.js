/* eslint-disable */
/** @type {import('cz-git').UserConfig} */
module.exports = {
  extends: ["@commitlint/config-conventional"],
  prompt: {
    scopes: [
      "data_grid",
      "interactive_map",
      "feature_popup",
      "form_components",
    ],
    useEmoji: true,
    useAI: false,
    aiNumber: 5,
    // aiType: "openAI-Davinci",
  },
};
