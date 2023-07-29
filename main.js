const {compile, runtime} = require("nunjucks");
const {Frame} = require("nunjucks/src/runtime");

function renderFragment(t, blockName, ctx) {
    const tmpl = compile(t)
    try {
        tmpl.render(ctx)
    } catch (err) {
    }
    let output = ""
    let frame = new Frame(null, true);
    frame.variables = ctx
    tmpl.blocks[blockName](
        tmpl.env,
        ctx,
        frame,
        runtime,
        (a, b) => output = b,
    )
    return output
}

module.exports = {
    renderFragment,
}
