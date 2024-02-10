/**
 * @name DiscordOpOption
 * @author minion6011
 * @description Activate option in discord
 * @version 0.3
 * @authorId 1181630796759564358
 * @invite JJ6ds6UdNz
 * @website https://github.com/minion6011/better-discord-experimet
 * @source https://github.com/minion6011/better-discord-experimet
 * @updateUrl https://raw.githubusercontent.com/minion6011/better-discord-experimet/main/Op_Option.plugin.js
 */



/*Theme-AMOLDE*/
document.body.classList.add("theme-amoled");


/*NSFW unlock on an under-18 account*/
var findModule=(item)=>window.webpackChunkdiscord_app.push([[Math.random()],{},(req)=>{for(const m of Object.keys(req.c).map((x)=>req.c[x].exports).filter((x)=>x)){if(m.default&&m.default[item]!==undefined)return m.default}}])
findModule('getCurrentUser').getCurrentUser().nsfwAllowed = true

/*Spotify without premium Function*/
(webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m => m?.exports?.Z?.getAccounts).exports.Z.getAccounts().forEach((conn) => conn.type === "spotify" && (webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m => m?.exports?.Z?.isDispatching).exports.Z.dispatch({type: "SPOTIFY_PROFILE_UPDATE", accountId: conn.id, isPremium: true}))   


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
