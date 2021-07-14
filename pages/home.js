const { beranda, header } = require("../components")
const { load } = require('../services/apps/index')
const { PATH_POSTS_DB } = require("../constants")
const { commands } = require("../routers/commands")

async function home(rl, page) {
  const data = await load(`posts?page=${page || 1}`, PATH_POSTS_DB)
  header()
  data.forEach(item => {
    beranda(item)
  });
  commands(rl)
}

exports.home = home