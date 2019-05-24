let isEqualPressed = false;
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      singleNumDisplay: "0",
      allNumDisplay: "0" };

    this.handleClick = this.handleClick.bind(this);
    this.handleNumbers = this.handleNumbers.bind(this);
    this.handleOperators = this.handleOperators.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
    this.handleEqual = this.handleEqual.bind(this);
  }

  handleClick(event) {
    const figure = document.getElementById(event.target.id).innerHTML;


    switch (event.target.className) {
      case "clear":
        this.setState({
          singleNumDisplay: "0",
          allNumDisplay: "0" });

        break;
      case "operator":
        this.handleOperators(figure);

        break;

      case "numbers":
        this.handleNumbers(figure);

        break;

      case "equals":
        this.handleEqual(figure);

        break;

      case "decimal":
        this.handleDecimal(figure);

        break;}

  }
  handleNumbers(figure) {
    if (this.state.singleNumDisplay === "0" || this.state.singleNumDisplay.match(/-|\/|\*|\+/) || isEqualPressed) {
      this.setState({
        singleNumDisplay: "" + figure });


      isEqualPressed = false;
    } else
    {
      this.setState({
        singleNumDisplay: this.state.singleNumDisplay + figure });


    }
  }
  handleOperators(figure) {
    var regexp = /[-\/\+\*]/;
    var containOperator = regexp.test(this.state.singleNumDisplay);
    var replacedAllNumDisplay = "";
    console.log(containOperator);

    if (this.state.allNumDisplay === "0") {
      this.setState({
        allNumDisplay: "" + this.state.singleNumDisplay + figure,
        singleNumDisplay: figure });

    } else {
      if (containOperator) {

        replacedAllNumDisplay = this.state.allNumDisplay.replace(/.$/, figure);

        this.setState({
          allNumDisplay: replacedAllNumDisplay,
          singleNumDisplay: figure });


      } else {
        this.setState({
          allNumDisplay: this.state.allNumDisplay + this.state.singleNumDisplay + figure,
          singleNumDisplay: figure });

      }

    }
  }
  handleDecimal(figure) {
    var regexp = /\./g;
    var containDecimal = regexp.test(this.state.singleNumDisplay);
    if (!containDecimal) {
      if (this.state.singleNumDisplay === "0") {
        this.setState({
          singleNumDisplay: "0" + figure });

      } else
      {
        this.handleNumbers(figure);
      }
    }

  }
  handleEqual(figure) {
    var regexp = /[-\/\+\*]/;
    var containOperator = regexp.test(this.state.singleNumDisplay);
    var replacedAllNumDisplay = "";
    isEqualPressed = true;
    if (containOperator) {

      replacedAllNumDisplay = this.state.allNumDisplay.replace(/.$/, "");
      this.setState({
        allNumDisplay: "0",
        singleNumDisplay: eval(replacedAllNumDisplay).toString() });


    } else {
      this.setState({
        singleNumDisplay: eval(this.state.allNumDisplay + this.state.singleNumDisplay).toString(),
        allNumDisplay: "0" });

    }

  }
  render() {
    return React.createElement("div", { class: "calculator-container" },

    React.createElement("div", { id: "display", className: "display" },
    React.createElement("div", { className: "allNumDisplay" }, React.createElement("span", null, this.state.allNumDisplay)),
    React.createElement("div", { id: "singleNumDisplay", className: "singleNumDisplay" }, React.createElement("span", null, this.state.singleNumDisplay))),

    React.createElement("button", { id: "clear", className: "clear", onClick: this.handleClick }, "AC"),
    React.createElement("button", { id: "divide", className: "operator", onClick: this.handleClick }, "/"),
    React.createElement("button", { id: "multiply", className: "operator", onClick: this.handleClick }, "*"),
    React.createElement("button", { id: "subtract", className: "operator", onClick: this.handleClick }, "-"),
    React.createElement("button", { id: "add", className: "operator", onClick: this.handleClick }, "+"),
    React.createElement("button", { id: "equals", className: "equals", onClick: this.handleClick }, "="),
    React.createElement("button", { id: "decimal", className: "decimal", onClick: this.handleClick }, "."),
    React.createElement("button", { id: "zero", className: "numbers", onClick: this.handleClick }, "0"),
    React.createElement("button", { id: "one", className: "numbers", onClick: this.handleClick }, "1"),
    React.createElement("button", { id: "two", className: "numbers", onClick: this.handleClick }, "2"),
    React.createElement("button", { id: "three", className: "numbers", onClick: this.handleClick }, "3"),
    React.createElement("button", { id: "four", className: "numbers", onClick: this.handleClick }, "4"),
    React.createElement("button", { id: "five", className: "numbers", onClick: this.handleClick }, "5"),
    React.createElement("button", { id: "six", className: "numbers", onClick: this.handleClick }, "6"),
    React.createElement("button", { id: "seven", className: "numbers", onClick: this.handleClick }, "7"),
    React.createElement("button", { id: "eight", className: "numbers", onClick: this.handleClick }, "8"),
    React.createElement("button", { id: "nine", className: "numbers", onClick: this.handleClick }, "9"));

  }}


ReactDOM.render(React.createElement(Calculator, null), document.getElementById("main-column"));