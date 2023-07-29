
const test = require("node:test")
const assert = require("node:assert/strict")
const {renderFragment} = require("./main");

test("nunjucks fragment without ctx", () => {
    const t = `
<p>{% block frag %}YO{% endblock %}</p>
`
    const s = renderFragment(t, "frag", {})
    assert.equal(s, "YO")
})

test("nunjucks fragment with ctx", () => {
    const t = `
{{ a }}
<p>{% block frag %}Hello {{ name }}{% endblock %}</p>
`
    const s = renderFragment(t, "frag", {name: "alex"})
    assert.equal(s, `Hello alex`)
})
