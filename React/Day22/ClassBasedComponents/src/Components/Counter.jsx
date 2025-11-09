import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }


  componentDidMount()
  {
    console.log("Components mounted")
  }


  componentDidUpdate()
  {
    console.log("Components updated")
  }

  componentWillUnmount()
  {
    console.log("components unmounted")
  }

  render() {
    return (
      <div className="flex h-screen w-screen justify-center items-center bg-gradient-to-r from-blue-50 to-gray-100">
        <div className="bg-white w-[320px] p-8 rounded-2xl shadow-xl border border-gray-200 flex flex-col items-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-3">Counter</h2>

          {this.props.name && (
            <div className="text-lg text-gray-600 mb-4 italic">
              {this.props.name}
            </div>
          )}

          <div className="text-6xl font-extrabold text-blue-600 mb-8">
            {this.state.count}
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => {
                this.setState({ count: this.state.count + 1 });
              }}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition"
            >
              Increment
            </button>

            <button
              onClick={() => {
                this.setState({ count: 0 });
              }}
              className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition"
            >
              Reset
            </button>

            <button
              onClick={() => {
                this.setState({ count: this.state.count - 1 });
              }}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition"
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
