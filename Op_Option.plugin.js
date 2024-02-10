/**
 * @name DiscordOpOption
 * @author Vittorio
 * @description Activate option in discord like fake nitro for experiment like custom theme
 * @version 0.2
 * @authorId 
 * @invite JJ6ds6UdNz
 * @website https://github.com/minion6011/better-discord-experimet
 * @source https://github.com/minion6011/better-discord-experimet
 * @updateUrl https://raw.githubusercontent.com/minion6011/better-discord-experimet/main/test.js
 */




module.exports = class discordExperiments {
  start() {
    BdApi.showToast("Pack attivated - Op_Option", {type:"info",icon: true,timeout: 7500,forceShow: true});
    try {

      
/*Unlock Experiment*/
      let c; webpackChunkdiscord_app.push([[Symbol()],{},r=>c=r.c]); webpackChunkdiscord_app.pop();
      let u = Object.values(c).find(x=>x?.exports?.default?.getUsers).exports.default;
      let m = Object.values(u._dispatcher._actionHandlers._dependencyGraph.nodes);
      u.getCurrentUser().flags |= 1;
      m.find((x)=>x.name === "DeveloperExperimentStore").actionHandler["CONNECTION_OPEN"]();
      try {m.find((x)=>x.name === "ExperimentStore").actionHandler["OVERLAY_INITIALIZE"]({user:{flags: 1}})} catch {};
      m.find((x)=>x.name === "ExperimentStore").storeDidChange();







/*Edit Mode - Activate - Deactivate*/
      return BdApi.showNotice(
        `Desing Mode (edit all discord)`,
        {
          type: "warning",
          buttons: [
            {
              label: "activate",
              onClick: () => document.designMode = 'on'
            },
            {
              label: "deactivate",
              onClick: () => document.designMode = 'off'
            }
          ]
        }
      );


   
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
