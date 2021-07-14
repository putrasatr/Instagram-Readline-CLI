const { beranda, header } = require("../components")
const { load } = require('../services/apps/index')
const { PATH_POSTS_DB } = require("../constants")
const { commands } = require("../routers/commands")

async function home(rl) {
  const data = await load("posts?page=1", PATH_POSTS_DB)
  console.log(header())
  data.forEach(item => {
    console.log(beranda(item))
  });
  commands(rl)
}

exports.home = home