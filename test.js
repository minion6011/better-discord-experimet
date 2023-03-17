/**
 * @name DiscordExperiments
 * @author VincentX0905(炸蝦)
 * @description Open Discord Experiments function
 * @version 1.3.0
 * @authorId 909608773927202906
 * @invite Pw8z4YkBFB
 * @website https://github.com/minion6011/better-discord-experimet
 * @source https://github.com/minion6011/better-discord-experimet
 * @updateUrl https://raw.githubusercontent.com/minion6011/DiscordExperiments/plugins/DiscordExperiments.test.js
 */

module.exports = class discordExperiments {
  start() {
    BdApi.showToast("Pack attivated - By Minion", {type:"info",icon: true,timeout: 7500,forceShow: true});
    try {
      let wpRequire;
      window.webpackChunkdiscord_app.push([
        [Math.random()],
        {},
        (req) => {
          wpRequire = req;
        },
      ]);
      let mod = Object.values(wpRequire.c).find((x) => typeof x?.exports?.Z?.isDeveloper !== "undefined");
      let usermod = Object.values(wpRequire.c).find((x) => x?.exports?.default?.getUsers);
      let nodes = Object.values(mod.exports.Z._dispatcher._actionHandlers._dependencyGraph.nodes);
      try {
        nodes.find((x) => x.name == "ExperimentStore").actionHandler["OVERLAY_INITIALIZE"]({ user: { flags: 1 } });
      } catch (e) {}
      let oldGetUser = usermod.exports.default.__proto__.getCurrentUser;
      usermod.exports.default.__proto__.getCurrentUser = () => ({ isStaff: () => true });
      nodes.find((x) => x.name == "DeveloperExperimentStore").actionHandler["CONNECTION_OPEN"]();
      usermod.exports.default.__proto__.getCurrentUser = oldGetUser;
    } catch (err) {
      BdApi.showNotice(
        "Plugin error",
        {
          type: "error",
          buttons: [
            {
              label: "Report",
              onClick: () => window.open("https://github.com/minion6011/better-discord-experimet/issues", "mozillaTab")
            }
          ]
        }
      );
      return BdApi.showNotice(
        `Error: ${err}`,
        {
          type: "error",
          buttons: [
            {
              label: "Report",
              onClick: () => window.open("https://github.com/minion6011/better-discord-experimet/issues", "mozillaTab")
            }
          ]
        }
      );
    }
  }

  stop() {
    BdApi.showNotice("You need to reboot BD for disabling the pack", {
      type: "warning",
      buttons: [{
        label: "Reboot",
        onClick: () => location.reload()
      }]
    });
  }
}
