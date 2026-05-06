module.exports = {
  config: {
    name: "top",
    aliases: ["tp"],
    version: "1.0",
    author: "BaYjid",
    role: 0,
    shortDescription: {
      en: "Top 30 Rich Users"
    },
    longDescription: {
      en: "Displays the top 30 richest users in terms of money with formatted values"
    },
    category: "group",
    guide: {
      en: "{pn}"
    }
  },

  onStart: async function ({ api, args, message, event, usersData }) {
    function formatMoney(amount) {
      if (amount >= 1e9) return `${(amount / 1e9).toFixed(2)} B💵`;
      if (amount >= 1e6) return `${(amount / 1e6).toFixed(2)} M💵`;
      if (amount >= 1e3) return `${(amount / 1e3).toFixed(2)} K💵`;
      return amount.toString();
    }

    const allUsers = await usersData.getAll();
    const topUsers = allUsers.sort((a, b) => b.money - a.money).slice(0, 15);
    const topUsersList = topUsers.map(
      (user, index) => `${index + 1}. 🎀 ${user.name}: 💸 ${formatMoney(user.money)} 💵`
    );
    const messageText = `🎉 𝙏𝙊𝙋 15 𝙍𝙄𝘾𝙃𝙀𝙎𝙏 𝙐𝙎𝙀𝙍𝙎 🎉\n \n${topUsersList.join('\n \n')}\n\n🌟𝙺𝙴𝙴𝙿 𝙀𝙰𝙍𝙉𝙄𝙉𝙶 𝙏𝙊 𝙲𝙇𝙄𝙈𝙗 𝙏𝙃𝙀 𝙍𝙐𝙉𝙆𝙎🌟`;
    message.reply(messageText);
  }
};Entermmodule.exports = {
  config: {
    name: "top",
    aliases: ["tp"],
    version: "1.0",
    author: "BaYjid",
    role: 0,
    shortDescription: {
      en: "Top 30 Rich Users"
    },
    longDescription: {
      en: "Displays the top 30 richest users in terms of money with formatted values"
    },
    category: "group",
    guide: {
      en: "{pn}"
    }
  },

  onStart: async function ({ api, args, message, event, usersData }) {
    function formatMoney(amount) {
      if (amount >= 1e9) return `${(amount / 1e9).toFixed(2)} B💵`;
      if (amount >= 1e6) return `${(amount / 1e6).toFixed(2)} M💵`;
      if (amount >= 1e3) return `${(amount / 1e3).toFixed(2)} K💵`;
      return amount.toString();
    }

    const allUsers = await usersData.getAll();
    const topUsers = allUsers.sort((a, b) => b.money - a.money).slice(0, 15);
    const topUsersList = topUsers.map(
      (user, index) => `${index + 1}. 🎀 ${user.name}: 💸 ${formatMoney(user.money)} 💵`
    );
    const messageText = `🎉 𝙏𝙊𝙋 15 𝙍𝙄𝘾𝙃𝙀𝙎𝙏 𝙐𝙎𝙀𝙍𝙎 🎉\n \n${topUsersList.join('\n \n')}\n\n🌟𝙺𝙴𝙴𝙿 𝙀𝙰𝙍𝙉𝙄𝙉𝙶 𝙏𝙊 𝙲𝙇𝙄𝙈𝙗 𝙏𝙃𝙀 𝙍𝙐𝙉𝙆𝙎🌟`;
    message.reply(messageText);
  }
};Enter
