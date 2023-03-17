/**
 * @name DiscordOpOption
 * @author Vittorio
 * @description Activate option in discord like fake nitro for experiment like custom theme
 * @version 0.1
 * @authorId 
 * @invite JJ6ds6UdNz
 * @website https://github.com/minion6011/better-discord-experimet
 * @source https://github.com/minion6011/better-discord-experimet
 * @updateUrl https://raw.githubusercontent.com/minion6011/better-discord-experimet/main/test.js
 */

module.exports = class discordExperiments {
  start() {
    BdApi.showToast("Pack attivated - By Minion", {type:"info",icon: true,timeout: 7500,forceShow: true});
    try {
(webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m => m?.exports?.default?.getCurrentUser).exports.default.getCurrentUser().premiumType = 2
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
