const {compile, runtime} = require("nunjucks");
const {Frame} = require("nunjucks/src/runtime");

function renderFragment(t, blockName, ctx) {

    const tmpl = compile(t)

    try {
        // first call to `render` will set the `blocks` attribute...
        tmpl.render(ctx)
    } catch (err) {
        // ... even if it fails!
    }

    // the output will be retrieve by a callback
    let output = ""
    const callback = (err, data) => output = data

    // needs a `Frame` object with ctx as `variables`
    const frame = new Frame(null, true);
    frame.variables = ctx

    // here is the block rendering occurs
    const renderBlock = tmpl.blocks[blockName]
    renderBlock(tmpl.env, ctx, frame, runtime, callback)

    return output
}

module.exports = {
    renderFragment,
}
