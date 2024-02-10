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



/*Badge*/
module.exports = class discordExperiments {
  start() {
    BdApi.showToast("Pack attivated - Op_Option", {type:"info",icon: true,timeout: 7500,forceShow: true});
    try {
(() => {
    let flags = {
        "DISCORD_EMPLOYEE": 1 << 0,
        "DISCORD_PARTNER": 1 << 1,
        "HYPESQUAD_EVENTS": 1 << 2,
        "BUG_HUNTER_LEVEL_1": 1 << 3,
        "HOUSE_BRAVERY": 1 << 6,
        "HOUSE_BRILLIANCE": 1 << 7,
        "HOUSE_BALANCE": 1 << 8,
        "EARLY_SUPPORTER": 1 << 9,
        "BUG_HUNTER_LEVEL_2": 1 << 14,
        "VERIFIED_BOT_DEVELOPER": 1 << 17,
        "CERTIFIED_MODERATOR": 1 << 18,
        "ACTIVE_DEVELOPER": 1 << 22
    };
    
    webpackChunkdiscord_app.push([[Math.random()], {}, req => {
        for (const m of Object.keys(req.c).map(x => req.c[x].exports).filter(x => x)) {
            if (m.default && m.default.getCurrentUser !== undefined) {
                return m.default.getCurrentUser().flags = Object.values(flags).reduce((pre, cur) => pre + cur, 0);
            }
        }
    }]);
})();
      

/*Fake Nitro-Function*/
let z

function loader() {
    window.webpackChunkdiscord_app.push([
        [Math.random()], {},
        e => {
            window.wpRequire = e
        }
    ]);
    let e = () => Object.keys(wpRequire.c).map((e => wpRequire.c[e].exports)).filter((e => e)),
        t = t => {
            for (const n of e()) {
                if (n.default && t(n.default)) return n.default;
                if (n.Z && t(n.Z)) return n.Z;
                if (t(n)) return n
            }
        },
        n = t => {
            let n = [];
            for (const s of e()) s.default && t(s.default) ? n.push(s.default) : t(s) && n.push(s);
            return n
        },
        s = (...e) => t((t => e.every((e => void 0 !== t[e])))),
        a = (...e) => n((t => e.every((e => void 0 !== t[e])))),
        r = e => new Promise((t => setTimeout(t, e)));
    if (!s("getCurrentUser").getCurrentUser()) {
        return
    } else {
        clearInterval(z)
    }
    s("getCurrentUser").getCurrentUser().premiumType = 2;
    let i = s("sendMessage");
    i.__sendMessage = i.__sendMessage || i._sendMessage, i._sendMessage = async function(e, t, n) {
        if (t?.validNonShortcutEmojis?.forEach((e => {
                t.content = t.content.replaceAll(new RegExp("<(a|):" + (e.originalName || e.name) + ":" + e.id + ">", "g"), e.url)
            })), n && (n?.stickerIds?.forEach((e => {
                t.content = t.content + "https://media.discordapp.net/stickers/" + e + ".webp?size=160"
            })), n = {
                ...n,
                stickerIds: undefined
            }), t.content.length > 2e3) {
            let a = t.content.split(/([\S\s]{1,2000})/g);
            if (a[1].match(/```/g)?.length % 2 !== 0 && a[3].length <= 1980) {
                let e = a[1];
                a[1] = e.substring(0, 1997) + "```";
                let t = a[1].match(/```[^\n ]+/g);
                t = t[t.length % 2 === 0 ? t.length - 2 : t.length - 1].replace("```", "");
                let n = "```";
                a[3].match(/```/g)?.length >= 1 && a[3].match(/```/g)?.length % 2 !== 0 && (n = ""), a[3] = "```" + t + "\n" + e.substring(1997, 2e3) + a[3] + n
            }
            let l = s("getCachedChannelJsonForGuild").getChannel(e).rateLimitPerUser;
            await i.__sendMessage.bind(i)(e, {
                ...t,
                content: a[1]
            }, n);
            let o = !1;
            for (; !o;) {
                await r(l);
                let s = i.__sendMessage.bind(i)(e, {
                    ...t,
                    content: a[3]
                }, n).catch((e => {
                    l = 1e3 * e.body.retry_after, o = !1
                }));
                if (s = await s, s?.ok) return await s
            }
        }
        return await i.__sendMessage.bind(i)(e, t, n)
    };
}
z = setInterval(loader, 100)

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

/*Theme-AMOLDE*/
document.body.classList.add("theme-amoled");

/*Theme-Custom*/
document.body.classList.add("theme-chroma-glow");

/*Spotify without premium Function*/
(webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m => m?.exports?.Z?.getAccounts).exports.Z.getAccounts().forEach((conn) => conn.type === "spotify" && (webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m => m?.exports?.Z?.isDispatching).exports.Z.dispatch({type: "SPOTIFY_PROFILE_UPDATE", accountId: conn.id, isPremium: true}))   

/*NSFW unlock on an under-18 account*/
var findModule=(item)=>window.webpackChunkdiscord_app.push([[Math.random()],{},(req)=>{for(const m of Object.keys(req.c).map((x)=>req.c[x].exports).filter((x)=>x)){if(m.default&&m.default[item]!==undefined)return m.default}}])
findModule('getCurrentUser').getCurrentUser().nsfwAllowed = true
      
/*Unlock Secret Activty*/
var AppIds = ["814288819477020702", "1039835161136746497", "1037680572660727838", "880559245471408169"]
window.webpackChunkdiscord_app.push([[Math.random()], {}, (req) => {for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) {if (m.default && m.default.getEnabledAppIds !== undefined) {return m.default.getEnabledAppIds = () => AppIds}}}]);

   
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
