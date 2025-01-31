import app1Config from "./apps/app1/app.js";
import app2Config from "./apps/app2/app.js";

export default ({ config }) => {
  const app = process.env.EXPO_APP;

  const appConfig = {
    app1: app1Config,
    app2: app2Config,
  };

  const storybookConfig = {
    newArchEnabled: true,
    name: "Storybook",
    slug: "storybook",
    scheme: "storybook",
    extra: {
      storybookEnabled: "true",
    },
  };

  return {
    ...config,
    ...(process.env.STORYBOOK_ENABLED ? storybookConfig : appConfig[app]),
  };
};
