const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div", { id : "parentContainer"} , 
    [
        React.createElement("h1", {id:"heading"}, "Topics covered"),
        React.createElement("p", {className:"para"}, "The following is a list of all the topics we cover in the MDN learning area."),
        React.createElement("a", {className:"anchor-para"}, "Getting started with the web"),
        React.createElement("p", {className:"paras"}, "Provides a practical introduction to web development for complete beginners."),
        React.createElement("a", {className:"anchor-para"}, "HTML - Structuring the web"),
        React.createElement("p", {className:"paras"}, "HTML is the language that we use the structure the different parts of our content and defined what their meaning or purposes is. This topic teaches HTML in detail."),
        React.createElement("a", {className:"anchor-para"}, "CSS - Styling the web"),
        React.createElement("p", {className:"paras"}, "CSS is the language that we use to control our web content's style and layout , as well as adding behavior like animation. This topic provides comprehensive coverage of CSS."),

    ]
) 

root.render(parent);