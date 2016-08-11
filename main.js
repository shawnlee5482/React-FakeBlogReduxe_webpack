var React = require('react');
var ReactDOM = require('react-dom');

///////////// HEADER //////////////////
var HeaderComponent = React.createClass({
  render: function(){
    // Data passed into our component can be found in this.props object
    // return React.createElement('div', null,
    //   React.createElement('a', {href: this.props.hrefs[0]}, 'home | '),
    //   React.createElement('a', {href: this.props.hrefs[1]}, 'about')
    // );

    return React.createElement('div', null,
      // React.createElement('a', {href: this.props.hrefs[0]}, 'home | '),
      // React.createElement('a', {href: this.props.hrefs[1]}, 'about')
      <h1>{this.props.test}{this.props.test}</h1>
    );
  }
})

// Note that we're passing properties as a second argument in our createElement() call
ReactDOM.render(React.createElement(HeaderComponent, {hrefs: ['#/', '#/About'], test: 'Shawn Lee'}),
				document.getElementById('header'));





////////////// SIDE ////////////////////
var SideComponent = React.createClass({
  render: function(){
    // Data passed into our component can be found in this.props object
    return React.createElement('div', null,
      React.createElement('a', '#/', 'See order status'),
      React.createElement('br', null, null),      
      React.createElement('a', '#/', 'About us'),
      React.createElement('br', null, null),      
      React.createElement('a', '#/', 'Select Store'),
      React.createElement('br', null, null),      
      React.createElement('a', '#/', 'Customer Service'),                  
      React.createElement('br', null, null),
      React.createElement('a', '#/', 'Location')
    );
  }
})

// Note that we're passing properties as a second argument in our createElement() call
ReactDOM.render(React.createElement(SideComponent, null),
				document.getElementById('side'));


////////////// MAIN ////////////////////
var MainComponent = React.createClass({
  render: function(){
    // Data passed into our component can be found in this.props object
    return React.createElement('div', null,
      React.createElement('p', null, 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'),
      React.createElement('p', null, 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.')
    );
  }
})

// Note that we're passing properties as a second argument in our createElement() call
ReactDOM.render(React.createElement(MainComponent, null),
				document.getElementById('main'));



////////////// FOOTER //////////////////
var FooterComponent = React.createClass({
  render: function(){
    // Data passed into our component can be found in this.props object
    return React.createElement('div', null,
		React.createElement('hr', null, null),	
      	React.createElement('span', null, 'Copyright 2016 All rights reserved.  ')
    );
  }
})

// Note that we're passing properties as a second argument in our createElement() call
ReactDOM.render(React.createElement(FooterComponent, null),
				document.getElementById('footer'));