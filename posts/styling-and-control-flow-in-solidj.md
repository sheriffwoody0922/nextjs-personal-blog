---
title: "Exploring SolidJS - Styling and Control Flow"
date: "2021-10-11"
categories: 
  - "code"
  - "en"
  - "post"
tags: 
  - "eng"
---

In the previous post, I reviewed [The Reactive primitives of SolidJS](https://www.cbsofyalioglu.com/code/solidjs-and-reactive-primitives/). In this article, I'll explore styling and control flow usage of Solid. I should have said this at the end of the post, but I can't wait: As a React developer, I can clearly say that SolidJS is superior to React.

## Styling

The way of styling of Solid is a bit different but much better than the React's way.  
if you use style prop in React, this will use `element.style.setProperty` JS method.

In Solid, you'll have two option when you use style prop. You can use your CSS style in string or in JS object. Also, It should be noted that you should use "dash-case" version of the property.

```jsx
// ❌ Wrong
const myStyle = {display: "flex", flexDirection: "column"}

// ✅ Correct (object)
const myStyle = {display: "flex", "flex-direction": "column"}

// ✅ Correct (string)
const myStyle = `display: flex; flex-direction:column`
```

```jsx
const Box = () => <div style={myStyle}>This is a flex-box</div>
```

## Control Flow

### Show

SolidJS allows us to use [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator). However, builtin [Show component](https://www.solidjs.com/docs/latest/api#%3Cshow%3E) is used specifically for this case.

```typescript
function Show<T>(props: {
  when: T | undefined | null | false;
  fallback?: JSX.Element;
  children: JSX.Element | ((item: T) => JSX.Element);
}): () => JSX.Element;
```

Show component has two props `when`and `fallback`. If `when` prop is truthy then the children element will be rendered. Otherwise, `fallback` component will be rendered.

```jsx
const OddComponent = () => <p>Odd! (if the count value is an odd number)</p>;
const EvenComponent = () => <p>Even! (if the count value is an even number)</p>;

const Counter = () => {
    const [count, setCount] = createSignal(0);
    const myStyle = `display: flex; flex-direction:column`;
    return (
        <div style={myStyle}>
            <h2>Count: {count()}</h2>
            <div style={{ display: "flex" }}>
                <button onClick={() => setCount(count() + 1)}>Increase</button>
                <button onClick={() => setCount((c) => c - 1)}>Decrease</button>
            </div>
            <Show when={count() % 2 === 0} fallback={<OddComponent />}>
                <EvenComponent />
            </Show>
        </div>
    );
};
```

Then put Counter component to App component.

```jsx
function App() {
    return (
        <div class={styles.App}>
            <header class={styles.header}>
                <img src={logo} class={styles.logo} alt="logo" />
                <p>
                    Edit <code>src/App.jsx</code> and save to reload.
                </p>
                <a
                    class={styles.link}
                    href="https://github.com/solidjs/solid"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn Solid
                </a>
                <Counter />
            </header>
        </div>
    );
}
```

It is interesting that `fallback` prop accepts those:

```jsx
// ✅ Component
<Show when={count() % 2 === 0} fallback={<OddComponent />}>
    <EvenComponent />
</Show>

// ✅ Function that returns component
<Show when={count() % 2 === 0} fallback={() => <OddComponent />}>
    <EvenComponent />
</Show>

// ✅ Component variable
<Show when={count() % 2 === 0} fallback={OddComponent}>
    <EvenComponent />
</Show>
```

It will continue...
