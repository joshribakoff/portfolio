---
title: "Jest Snapshot Testing Considered Harmful"
description: "A look at Jest snapshot testing, and the common pitfalls I see developers tend to make"
date: "Sun Jun 14 2020 19:15:34 GMT-0700 "
---

There is a popular feature in Jest called [snapshot testing](https://jestjs.io/docs/en/snapshot-testing). Developers tend to write these types of tests:

```js
it("renders correctly", () => {
  expect(shallow(<Todo isComplete={true} />)).toMatchSnapshot();
  expect(shallow(<Todo isComplete={false} />)).toMatchSnapshot();
});
```

These "it renders correctly" tests _can_ be useful, especially for asserting on small focused things that change frequently, like error messages, logs, or the output of a simple component.

I recommend against using these snapshot tests for verifying that React components render correctly because your Jest snapshots end up asserting on various implementation details such as the HTML & CSS code:

```
exports[`renders correctly 1`] = `
<a
  className="normal"
  href="http://www.facebook.com"
  onMouseEnter={[Function]}
  onMouseLeave={[Function]}
>
  Facebook
</a>
`;
```

For anything more complicated than this example snapshot, they quickly become unwieldy. Imagine if you verified your Javascript code by asserting on the contents of the source code directly, it would be absurd. You would not write a test like this:

```js
it('implements addition correctly', () => {
    const rawCode = fs.readFileSync('./add.js').toString())
    expect(rawCode).toBe('function add(a, b) { return a + b; }')
})
```

This test would _technically_ catch all bugs, but that would only be because it fails on literally any code changes, such as changing formatting or adding a comment. This test would provide no value, and would just be a cumbersome form of pedantry.

It's also so easy to update snapshot tests, and they tend to fail so often, that devs tend to train themselves to blindly update the tests instead of fixing the component, even if its failing for a legit bug. These snapshots tend to grow over time, especially when used with Enzyme's `mount()`.

If you're going to use snapshots, please use them to automate writing the same test you would otherwise write manually, [inline snapshots](https://jestjs.io/docs/en/snapshot-testing#inline-snapshots) are a great way to hold yourself accountable. Use them only with `shallow()` and never with `mount()`, or employ CI checks & lint rules to limit the number of lines in the snapshots.

If you actually wanted to verify a component "renders correctly", I recommend using [story book screenshot tests](https://storybook.js.org/docs/testing/automated-visual-testing/), because they will actually verify the _appearance_ of the component, all the CSS will be evaluated in a headless browser. If you refactor the components in ways that do not affect the visible output, the tests will continue to pass. If the appearance changes, the screenshot tests will highlight the visual changes.

If you do not care about verifying the visual appearance of the component, and you literally want to verify "it renders correctly", I would recommend writing a test by hand that is explicit about which part of the output is important to verify. It is clear the intent of the following test is to verify that the `disabled` CSS class is added to the button:

```js
it("renders the disabled button", () => {
  const wrapper = mount(<MyComponent />);
  expect(wrapper.find(".my-button").hasClass("disabled")).to.equal(true);
});
```

Compare this to the following snapshot test, which is not explicit about which part of the output is important

```js
it("renders the disabled button", () => {
  const wrapper = mount(<MyComponent />);
  expect(wrapper.find(".my-button")).toMatchSnapshot();
});
```

The hand written test provides value as documentation, reading that test tells me something interesting about how the system works. The snapshot test doesn't tell me anything other than to show me the full output, which I can already see in my browser's dev tools without writing the test.

If you make a point to write tests that serve as "documentation", you'll tend to have better tests. It's also worth pointing out its important to verify behavior, in addition to the render output. I recommend integration tests and end to end tests to verify the behavior!
