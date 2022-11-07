### react 类似vue中watch这样的api



如何你用的是function component，useEffect可以解决。
```jsx
useEffect(() => {
    console.log('counter发生了变化，最新值：', counter);
}, [counter]);
```
不过如果你用的是Class组件，可以写一个get() ，在get中执行相应的操作：
```jsx
class Test extends Component {
  state = { counter: 0 };

  get newCounter(): number {
    const { counter } = this.state;
    console.log(`counter changed, new value: ${counter}`);
    return counter;
  }

  handleClick = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  }

  render(): JSX.Element {
    return (<div>
      <p>{this.newCounter}</p>
      <Button onClick={this.handleClick.bind(this)}>click + 1</Button>
    </div>);
  }
}

export default Test;
···