(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var React = require('react'),
    ReactDOM = require('react-dom');

var CARDS = [{
    id: 1,
    image: 'assets/img/card1.jpg',
    discount: '',
    special: '',
    name: 'Маленька пачка',
    priceOld: 9999,
    priceNew: 5000
}, {
    id: 2,
    image: 'assets/img/card2.jpg',
    discount: 15,
    special: 'Хіт продаж',
    name: 'Середня пачка',
    priceOld: 9119,
    priceNew: 6000
}, {
    id: 3,
    image: 'assets/img/card3.jpg',
    discount: 1,
    special: 'Хіт продаж',
    name: 'Велика пачка',
    priceOld: 100,
    priceNew: 60
}, {
    id: 3,
    image: 'assets/img/card1.jpg',
    discount: '',
    special: '',
    name: 'Мега пачка',
    priceOld: 666,
    priceNew: 500
}, {
    id: 4,
    image: 'assets/img/card2.jpg',
    discount: 11,
    special: 'Хіт',
    name: 'Міні пачка',
    priceOld: 2200,
    priceNew: 1500
}, {
    id: 5,
    image: 'assets/img/card3.jpg',
    discount: 1,
    special: 'розпродаж',
    name: 'Екстра пачка',
    priceOld: 10,
    priceNew: 9
}, {
    id: 6,
    image: 'assets/img/card1.jpg',
    discount: '',
    special: '',
    name: 'Маленька пачка',
    priceOld: 9999,
    priceNew: 5000
}, {
    id: 7,
    image: 'assets/img/card2.jpg',
    discount: 15,
    special: 'Хіт продаж',
    name: 'Середня пачка',
    priceOld: 9119,
    priceNew: 6000
}, {
    id: 8,
    image: 'assets/img/card3.jpg',
    discount: 1,
    special: 'Хіт продаж',
    name: 'Велика пачка',
    priceOld: 100,
    priceNew: 60
}, {
    id: 9,
    image: 'assets/img/card1.jpg',
    discount: '',
    special: '',
    name: 'Мега пачка',
    priceOld: 666,
    priceNew: 500
}, {
    id: 10,
    image: 'assets/img/card2.jpg',
    discount: 11,
    special: 'Хіт',
    name: 'Міні пачка',
    priceOld: 2200,
    priceNew: 1500
}, {
    id: 11,
    image: 'assets/img/card3.jpg',
    discount: 1,
    special: 'розпродаж',
    name: 'Екстра пачка',
    priceOld: 10,
    priceNew: 9
}, {
    id: 12,
    image: 'assets/img/card3.jpg',
    discount: 1,
    special: 'новинка',
    name: 'пачка',
    priceOld: 228,
    priceNew: 10
}];

var currentCounted = 0,
    currentAddedToCart = [];

var SearchForm = React.createClass({
    displayName: 'SearchForm',

    render: function render() {
        return React.createElement(
            'form',
            { className: 'search' },
            React.createElement('input', { type: 'search', placeholder: 'Search..', className: 'search__field', onChange: this.props.handleSearch }),
            React.createElement(
                'button',
                { className: 'search__submit' },
                React.createElement('img', { src: 'assets/img/icon-search.png', alt: 'Search' })
            )
        );
    }
});

var CardItem = React.createClass({
    displayName: 'CardItem',


    render: function render() {
        var photoStyle = {
            backgroundImage: "url('assets/img/card1.jpg')"
        };

        var discount = this.props.discount,
            special = this.props.special;

        function checkDiscount() {
            if (discount !== '') {
                return React.createElement(
                    'div',
                    { className: 'cards__item__discount' },
                    React.createElement(
                        'p',
                        null,
                        discount,
                        '%'
                    )
                );
            } else {
                return false;
            }
        }

        function checkSpecial() {
            if (special !== '') {
                return React.createElement(
                    'div',
                    { className: 'cards__item__mark' },
                    React.createElement(
                        'p',
                        null,
                        special
                    )
                );
            } else {
                return false;
            }
        }

        return React.createElement(
            'div',
            { className: 'cards__item' },
            React.createElement(
                'div',
                { className: 'cards__item__photo', style: photoStyle },
                checkDiscount(),
                checkSpecial()
            ),
            React.createElement(
                'div',
                { className: 'cards__item__info' },
                React.createElement(
                    'div',
                    { className: 'cards__item__name' },
                    React.createElement(
                        'a',
                        null,
                        this.props.name
                    )
                ),
                React.createElement(
                    'label',
                    null,
                    React.createElement('input', { type: 'checkbox' }),
                    React.createElement('span', { className: 'checkbox' }),
                    '\u0434\u043E\u0434\u0430\u0442\u0438 \u0434\u043E \u043F\u043E\u0440\u0456\u0432\u043D\u044F\u043D\u043D\u044F'
                ),
                React.createElement(
                    'div',
                    { className: 'cards__item__bottom' },
                    React.createElement(
                        'div',
                        { className: 'cards__item__price' },
                        React.createElement(
                            'div',
                            { className: 'cards__item__price--old' },
                            React.createElement(
                                'p',
                                null,
                                React.createElement(
                                    'strong',
                                    null,
                                    this.props.priceOld
                                )
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'cards__item__price--new' },
                            React.createElement(
                                'p',
                                null,
                                React.createElement(
                                    'strong',
                                    null,
                                    this.props.priceNew
                                ),
                                ' \u0433\u0440\u043D'
                            )
                        )
                    ),
                    React.createElement(
                        'button',
                        { className: 'add-to-cart', onClick: this.props.handleClick },
                        '\u041A\u0443\u043F\u0438\u0442\u044C'
                    )
                )
            )
        );
    }
});

var AddedItem = React.createClass({
    displayName: 'AddedItem',


    render: function render() {

        return React.createElement(
            'div',
            { className: 'cards__item' },
            React.createElement(
                'div',
                { className: 'cards__item__info' },
                React.createElement(
                    'div',
                    { className: 'cards__item__name' },
                    React.createElement(
                        'a',
                        null,
                        this.props.name
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'cards__item__bottom' },
                    React.createElement(
                        'div',
                        { className: 'cards__item__price' },
                        React.createElement(
                            'div',
                            { className: 'cards__item__price--new' },
                            React.createElement(
                                'p',
                                null,
                                React.createElement(
                                    'strong',
                                    null,
                                    this.props.priceNew
                                ),
                                ' \u0433\u0440\u043D'
                            )
                        )
                    ),
                    React.createElement(
                        'button',
                        { className: 'remove-from-cart', onClick: this.props.handleClick },
                        '\u0423\u0434\u0430\u043B\u0438\u0442\u044C'
                    )
                )
            )
        );
    }
});

var SeedShop = React.createClass({
    displayName: 'SeedShop',

    getInitialState: function getInitialState() {
        return {
            cardInfo: CARDS,
            totalCounted: currentCounted,
            addedTotal: CARDS
        };
    },

    handleSearch: function handleSearch(event) {
        var searchQuery = event.target.value.toLowerCase();

        var cardInfo = CARDS.filter(function (el) {
            var searchValue = el.name.toLowerCase();
            return searchValue.indexOf(searchQuery) !== -1; // return element if function returns true
        });

        this.setState({
            cardInfo: cardInfo
        });
    },

    addToCart: function addToCart(e) {
        var target = e.target;

        // console.log('e', e);

        function setCounter() {

            if (!target.classList.contains('disabled')) {
                target.classList.add('disabled');
                target.setAttribute('disabled', 'disabled');

                currentCounted += 1;
            }
        }

        setCounter();

        // currentAddedToCart.push(
        //     {
        //         id: 1,
        //         key: 1,
        //         name: 'zalupa'
        //     }
        // );

        this.setState({
            totalCounted: currentCounted
        });

        function cartTop(key) {
            console.log('k', key);
        }

        // cartTop(key);

        // addedTotal: currentAddedToCart
    },

    render: function render() {
        var addFunc = this.addToCart;

        return React.createElement(
            'div',
            { className: 'shop' },
            React.createElement(
                'div',
                { className: 'header' },
                React.createElement(HeaderLogo, null),
                React.createElement(
                    'div',
                    { className: 'cart' },
                    React.createElement(
                        'a',
                        { href: '#', 'data-counter': this.state.totalCounted },
                        React.createElement('img', { src: 'assets/img/cart.png', alt: 'Cart' })
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'content' },
                React.createElement(SideMenu, null),
                React.createElement(
                    'div',
                    { className: 'cards' },
                    React.createElement(
                        'div',
                        { className: 'cards__controls' },
                        React.createElement(SearchForm, { handleSearch: this.handleSearch }),
                        React.createElement(Switcher, null)
                    ),
                    React.createElement(
                        'div',
                        { className: 'cards__items__list' },
                        this.state.cardInfo.map(function (el) {
                            return React.createElement(CardItem, {
                                key: el.id,
                                name: el.name,
                                discount: el.discount,
                                special: el.special,
                                priceOld: el.priceOld,
                                priceNew: el.priceNew,
                                handleClick: addFunc
                            });
                        })
                    )
                )
            )
        );
    }
});

var HeaderLogo = React.createClass({
    displayName: 'HeaderLogo',

    render: function render() {
        return React.createElement(
            'div',
            { className: 'header__logo' },
            React.createElement('img', { src: 'assets/img/logo.jpg', width: '60', height: '60' })
        );
    }
});

var SideMenu = React.createClass({
    displayName: 'SideMenu',

    render: function render() {
        return React.createElement(
            'nav',
            { className: 'menu' },
            React.createElement(
                'ul',
                null,
                React.createElement(SideMenuItem, null),
                React.createElement(SideMenuItem, null),
                React.createElement(SideMenuItem, null),
                React.createElement(SideMenuItem, null)
            )
        );
    }
});

var SideMenuItem = React.createClass({
    displayName: 'SideMenuItem',

    render: function render() {
        return React.createElement(
            'li',
            { className: 'menu__item' },
            React.createElement(
                'a',
                { href: '#' },
                'Menu Item'
            )
        );
    }
});

var Switcher = React.createClass({
    displayName: 'Switcher',


    toggleList: function toggleList() {
        var switcher = document.querySelector('.switcher'),
            container = document.querySelector('.cards__items__list'),
            list;

        if (typeof switcher != 'undefined' && typeof switcher != 'undefined') {
            list = document.querySelector('.switcher__list');

            container.classList.add('list');
        }
    },

    toggleGrid: function toggleGrid() {
        var switcher = document.querySelector('.switcher'),
            container = document.querySelector('.cards__items__list'),
            grid;

        if (typeof switcher != 'undefined' && typeof switcher != 'undefined') {
            grid = document.querySelector('.switcher__grid');

            container.classList.remove('list');
        }
    },

    render: function render() {
        return React.createElement(
            'ul',
            { className: 'switcher' },
            React.createElement(
                'li',
                null,
                React.createElement(
                    'a',
                    { className: 'switcher__list', onClick: this.toggleList },
                    React.createElement('img', { src: 'assets/img/list.png', width: '30', height: '30', alt: 'List View' })
                )
            ),
            React.createElement(
                'li',
                null,
                React.createElement(
                    'a',
                    { className: 'switcher__grid', onClick: this.toggleGrid },
                    React.createElement('img', { src: 'assets/img/grid.png', width: '30', height: '30', alt: 'Grid View' })
                )
            )
        );
    }
});

//render all

ReactDOM.render(React.createElement(SeedShop, null), document.querySelector('.wrapper'));

},{"react":"react","react-dom":"react-dom"}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHNcXGpzXFxhcHAuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFJLFFBQVEsUUFBUSxPQUFSLENBQVo7QUFBQSxJQUNJLFdBQVcsUUFBUSxXQUFSLENBRGY7O0FBR0EsSUFBSSxRQUFRLENBQ1I7QUFDSSxRQUFJLENBRFI7QUFFSSxXQUFPLHNCQUZYO0FBR0ksY0FBVSxFQUhkO0FBSUksYUFBUyxFQUpiO0FBS0ksVUFBTSxnQkFMVjtBQU1JLGNBQVUsSUFOZDtBQU9JLGNBQVU7QUFQZCxDQURRLEVBU0w7QUFDQyxRQUFJLENBREw7QUFFQyxXQUFPLHNCQUZSO0FBR0MsY0FBVSxFQUhYO0FBSUMsYUFBUyxZQUpWO0FBS0MsVUFBTSxlQUxQO0FBTUMsY0FBVSxJQU5YO0FBT0MsY0FBVTtBQVBYLENBVEssRUFpQkw7QUFDQyxRQUFJLENBREw7QUFFQyxXQUFPLHNCQUZSO0FBR0MsY0FBVSxDQUhYO0FBSUMsYUFBUyxZQUpWO0FBS0MsVUFBTSxjQUxQO0FBTUMsY0FBVSxHQU5YO0FBT0MsY0FBVTtBQVBYLENBakJLLEVBMEJSO0FBQ0ksUUFBSSxDQURSO0FBRUksV0FBTyxzQkFGWDtBQUdJLGNBQVUsRUFIZDtBQUlJLGFBQVMsRUFKYjtBQUtJLFVBQU0sWUFMVjtBQU1JLGNBQVUsR0FOZDtBQU9JLGNBQVU7QUFQZCxDQTFCUSxFQWtDTDtBQUNDLFFBQUksQ0FETDtBQUVDLFdBQU8sc0JBRlI7QUFHQyxjQUFVLEVBSFg7QUFJQyxhQUFTLEtBSlY7QUFLQyxVQUFNLFlBTFA7QUFNQyxjQUFVLElBTlg7QUFPQyxjQUFVO0FBUFgsQ0FsQ0ssRUEwQ0w7QUFDQyxRQUFJLENBREw7QUFFQyxXQUFPLHNCQUZSO0FBR0MsY0FBVSxDQUhYO0FBSUMsYUFBUyxXQUpWO0FBS0MsVUFBTSxjQUxQO0FBTUMsY0FBVSxFQU5Y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InNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKSxcbiAgICBSZWFjdERPTSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgQ0FSRFMgPSBbXG4gICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgaW1hZ2U6ICdhc3NldHMvaW1nL2NhcmQxLmpwZycsXG4gICAgICAgIGRpc2NvdW50OiAnJyxcbiAgICAgICAgc3BlY2lhbDogJycsXG4gICAgICAgIG5hbWU6ICfQnNCw0LvQtdC90YzQutCwINC/0LDRh9C60LAnLFxuICAgICAgICBwcmljZU9sZDogOTk5OSxcbiAgICAgICAgcHJpY2VOZXc6IDUwMDBcbiAgICB9LCB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICBpbWFnZTogJ2Fzc2V0cy9pbWcvY2FyZDIuanBnJyxcbiAgICAgICAgZGlzY291bnQ6IDE1LFxuICAgICAgICBzcGVjaWFsOiAn0KXRltGCINC/0YDQvtC00LDQticsXG4gICAgICAgIG5hbWU6ICfQodC10YDQtdC00L3RjyDQv9Cw0YfQutCwJyxcbiAgICAgICAgcHJpY2VPbGQ6IDkxMTksXG4gICAgICAgIHByaWNlTmV3OiA2MDAwXG4gICAgfSwge1xuICAgICAgICBpZDogMyxcbiAgICAgICAgaW1hZ2U6ICdhc3NldHMvaW1nL2NhcmQzLmpwZycsXG4gICAgICAgIGRpc2NvdW50OiAxLFxuICAgICAgICBzcGVjaWFsOiAn0KXRltGCINC/0YDQvtC00LDQticsXG4gICAgICAgIG5hbWU6ICfQktC10LvQuNC60LAg0L/QsNGH0LrQsCcsXG4gICAgICAgIHByaWNlT2xkOiAxMDAsXG4gICAgICAgIHByaWNlTmV3OiA2MFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMyxcbiAgICAgICAgaW1hZ2U6ICdhc3NldHMvaW1nL2NhcmQxLmpwZycsXG4gICAgICAgIGRpc2NvdW50OiAnJyxcbiAgICAgICAgc3BlY2lhbDogJycsXG4gICAgICAgIG5hbWU6ICfQnNC10LPQsCDQv9Cw0YfQutCwJyxcbiAgICAgICAgcHJpY2VPbGQ6IDY2NixcbiAgICAgICAgcHJpY2VOZXc6IDUwMFxuICAgIH0sIHtcbiAgICAgICAgaWQ6IDQsXG4gICAgICAgIGltYWdlOiAnYXNzZXRzL2ltZy9jYXJkMi5qcGcnLFxuICAgICAgICBkaXNjb3VudDogMTEsXG4gICAgICAgIHNwZWNpYWw6ICfQpdGW0YInLFxuICAgICAgICBuYW1lOiAn0JzRltC90ZYg0L/QsNGH0LrQsCcsXG4gICAgICAgIHByaWNlT2xkOiAyMjAwLFxuICAgICAgICBwcmljZU5ldzogMTUwMFxuICAgIH0sIHtcbiAgICAgICAgaWQ6IDUsXG4gICAgICAgIGltYWdlOiAnYXNzZXRzL2ltZy9jYXJkMy5qcGcnLFxuICAgICAgICBkaXNjb3VudDogMSxcbiAgICAgICAgc3BlY2lhbDogJ9GA0L7Qt9C/0YDQvtC00LDQticsXG4gICAgICAgIG5hbWU6ICfQldC60YHRgtGA0LAg0L/QsNGH0LrQsCcsXG4gICAgICAgIHByaWNlT2xkOiAxMCxcbiAgICAgICAgcHJpY2VOZXc6IDlcbiAgICB9LCB7XG4gICAgICAgIGlkOiA2LFxuICAgICAgICBpbWFnZTogJ2Fzc2V0cy9pbWcvY2FyZDEuanBnJyxcbiAgICAgICAgZGlzY291bnQ6ICcnLFxuICAgICAgICBzcGVjaWFsOiAnJyxcbiAgICAgICAgbmFtZTogJ9Cc0LDQu9C10L3RjNC60LAg0L/QsNGH0LrQsCcsXG4gICAgICAgIHByaWNlT2xkOiA5OTk5LFxuICAgICAgICBwcmljZU5ldzogNTAwMFxuICAgIH0sIHtcbiAgICAgICAgaWQ6IDcsXG4gICAgICAgIGltYWdlOiAnYXNzZXRzL2ltZy9jYXJkMi5qcGcnLFxuICAgICAgICBkaXNjb3VudDogMTUsXG4gICAgICAgIHNwZWNpYWw6ICfQpdGW0YIg0L/RgNC+0LTQsNC2JyxcbiAgICAgICAgbmFtZTogJ9Ch0LXRgNC10LTQvdGPINC/0LDRh9C60LAnLFxuICAgICAgICBwcmljZU9sZDogOTExOSxcbiAgICAgICAgcHJpY2VOZXc6IDYwMDBcbiAgICB9LCB7XG4gICAgICAgIGlkOiA4LFxuICAgICAgICBpbWFnZTogJ2Fzc2V0cy9pbWcvY2FyZDMuanBnJyxcbiAgICAgICAgZGlzY291bnQ6IDEsXG4gICAgICAgIHNwZWNpYWw6ICfQpdGW0YIg0L/RgNC+0LTQsNC2JyxcbiAgICAgICAgbmFtZTogJ9CS0LXQu9C40LrQsCDQv9Cw0YfQutCwJyxcbiAgICAgICAgcHJpY2VPbGQ6IDEwMCxcbiAgICAgICAgcHJpY2VOZXc6IDYwXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA5LFxuICAgICAgICBpbWFnZTogJ2Fzc2V0cy9pbWcvY2FyZDEuanBnJyxcbiAgICAgICAgZGlzY291bnQ6ICcnLFxuICAgICAgICBzcGVjaWFsOiAnJyxcbiAgICAgICAgbmFtZTogJ9Cc0LXQs9CwINC/0LDRh9C60LAnLFxuICAgICAgICBwcmljZU9sZDogNjY2LFxuICAgICAgICBwcmljZU5ldzogNTAwXG4gICAgfSwge1xuICAgICAgICBpZDogMTAsXG4gICAgICAgIGltYWdlOiAnYXNzZXRzL2ltZy9jYXJkMi5qcGcnLFxuICAgICAgICBkaXNjb3VudDogMTEsXG4gICAgICAgIHNwZWNpYWw6ICfQpdGW0YInLFxuICAgICAgICBuYW1lOiAn0JzRltC90ZYg0L/QsNGH0LrQsCcsXG4gICAgICAgIHByaWNlT2xkOiAyMjAwLFxuICAgICAgICBwcmljZU5ldzogMTUwMFxuICAgIH0sIHtcbiAgICAgICAgaWQ6IDExLFxuICAgICAgICBpbWFnZTogJ2Fzc2V0cy9pbWcvY2FyZDMuanBnJyxcbiAgICAgICAgZGlzY291bnQ6IDEsXG4gICAgICAgIHNwZWNpYWw6ICfRgNC+0LfQv9GA0L7QtNCw0LYnLFxuICAgICAgICBuYW1lOiAn0JXQutGB0YLRgNCwINC/0LDRh9C60LAnLFxuICAgICAgICBwcmljZU9sZDogMTAsXG4gICAgICAgIHByaWNlTmV3OiA5XG4gICAgfSwge1xuICAgICAgICBpZDogMTIsXG4gICAgICAgIGltYWdlOiAnYXNzZXRzL2ltZy9jYXJkMy5qcGcnLFxuICAgICAgICBkaXNjb3VudDogMSxcbiAgICAgICAgc3BlY2lhbDogJ9C90L7QstC40L3QutCwJyxcbiAgICAgICAgbmFtZTogJ9C/0LDRh9C60LAnLFxuICAgICAgICBwcmljZU9sZDogMjI4LFxuICAgICAgICBwcmljZU5ldzogMTBcbiAgICB9XG5dO1xuXG52YXIgY3VycmVudENvdW50ZWQgPSAwLFxuICAgIGN1cnJlbnRBZGRlZFRvQ2FydCA9IFtdO1xuXG52YXIgU2VhcmNoRm9ybSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwic2VhcmNoXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaC4uXCIgY2xhc3NOYW1lPVwic2VhcmNoX19maWVsZFwiIG9uQ2hhbmdlPXt0aGlzLnByb3BzLmhhbmRsZVNlYXJjaH0gLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNlYXJjaF9fc3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ltZy9pY29uLXNlYXJjaC5wbmdcIiBhbHQ9XCJTZWFyY2hcIiAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICApXG4gICAgfVxufSk7XG5cbnZhciBDYXJkSXRlbSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICBcbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcGhvdG9TdHlsZSA9IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoJ2Fzc2V0cy9pbWcvY2FyZDEuanBnJylcIlxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZGlzY291bnQgPSB0aGlzLnByb3BzLmRpc2NvdW50LFxuICAgICAgICAgICAgICBzcGVjaWFsID0gdGhpcy5wcm9wcy5zcGVjaWFsO1xuICAgICAgICBcbiAgICAgICAgZnVuY3Rpb24gY2hlY2tEaXNjb3VudCgpIHtcbiAgICAgICAgICAgIGlmIChkaXNjb3VudCAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZHNfX2l0ZW1fX2Rpc2NvdW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPntkaXNjb3VudH0lPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9ICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgICAgIFxuICAgICAgICBmdW5jdGlvbiBjaGVja1NwZWNpYWwoKSB7XG4gICAgICAgICAgICBpZiAoc3BlY2lhbCAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZHNfX2l0ZW1fX21hcmtcIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+e3NwZWNpYWx9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9ICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkc19faXRlbVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZHNfX2l0ZW1fX3Bob3RvXCIgc3R5bGUgPSB7cGhvdG9TdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgIHtjaGVja0Rpc2NvdW50KCl9XG4gICAgICAgICAgICAgICAgICAgIHtjaGVja1NwZWNpYWwoKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRzX19pdGVtX19pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZHNfX2l0ZW1fX25hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPnt0aGlzLnByb3BzLm5hbWV9PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja2JveFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICDQtNC+0LTQsNGC0Lgg0LTQviDQv9C+0YDRltCy0L3Rj9C90L3Rj1xuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRzX19pdGVtX19ib3R0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZHNfX2l0ZW1fX3ByaWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkc19faXRlbV9fcHJpY2UtLW9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48c3Ryb25nPnt0aGlzLnByb3BzLnByaWNlT2xkfTwvc3Ryb25nPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRzX19pdGVtX19wcmljZS0tbmV3XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+e3RoaXMucHJvcHMucHJpY2VOZXd9PC9zdHJvbmc+INCz0YDQvTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhZGQtdG8tY2FydFwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuaGFuZGxlQ2xpY2t9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINCa0YPQv9C40YLRjFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59KTtcblxudmFyIEFkZGVkSXRlbSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZHNfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRzX19pdGVtX19pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZHNfX2l0ZW1fX25hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPnt0aGlzLnByb3BzLm5hbWV9PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkc19faXRlbV9fYm90dG9tXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRzX19pdGVtX19wcmljZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZHNfX2l0ZW1fX3ByaWNlLS1uZXdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHN0cm9uZz57dGhpcy5wcm9wcy5wcmljZU5ld308L3N0cm9uZz4g0LPRgNC9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInJlbW92ZS1mcm9tLWNhcnRcIiBvbkNsaWNrPXt0aGlzLnByb3BzLmhhbmRsZUNsaWNrfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDQo9C00LDQu9C40YLRjFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59KTtcblxuXG52YXIgU2VlZFNob3AgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNhcmRJbmZvOiBDQVJEUyxcbiAgICAgICAgICAgIHRvdGFsQ291bnRlZDogY3VycmVudENvdW50ZWQsXG4gICAgICAgICAgICBhZGRlZFRvdGFsOiBDQVJEU1xuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBoYW5kbGVTZWFyY2g6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIHZhciBzZWFyY2hRdWVyeSA9IGV2ZW50LnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIHZhciBjYXJkSW5mbyA9IENBUkRTLmZpbHRlcihmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgdmFyIHNlYXJjaFZhbHVlID0gZWwubmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgcmV0dXJuIHNlYXJjaFZhbHVlLmluZGV4T2Yoc2VhcmNoUXVlcnkpICE9PSAtMTsgIC8vIHJldHVybiBlbGVtZW50IGlmIGZ1bmN0aW9uIHJldHVybnMgdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGNhcmRJbmZvOiBjYXJkSW5mb1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgYWRkVG9DYXJ0OiBmdW5jdGlvbihlKSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldDtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZygnZScsIGUpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHNldENvdW50ZXIoKSB7XG5cbiAgICAgICAgICAgIGlmICghdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWQnKSkge1xuICAgICAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG5cbiAgICAgICAgICAgICAgICBjdXJyZW50Q291bnRlZCArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc2V0Q291bnRlcigpO1xuXG4gICAgICAgIC8vIGN1cnJlbnRBZGRlZFRvQ2FydC5wdXNoKFxuICAgICAgICAvLyAgICAge1xuICAgICAgICAvLyAgICAgICAgIGlkOiAxLFxuICAgICAgICAvLyAgICAgICAgIGtleTogMSxcbiAgICAgICAgLy8gICAgICAgICBuYW1lOiAnemFsdXBhJ1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyApO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdG90YWxDb3VudGVkOiBjdXJyZW50Q291bnRlZCxcbiAgICAgICAgICAgIC8vIGFkZGVkVG90YWw6IGN1cnJlbnRBZGRlZFRvQ2FydFxuICAgICAgICB9KTtcblxuXG4gICAgICAgIGZ1bmN0aW9uIGNhcnRUb3Aoa2V5KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaycsIGtleSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjYXJ0VG9wKGtleSk7XG5cbiAgICAgICAgLy8gYWRkZWRUb3RhbDogY3VycmVudEFkZGVkVG9DYXJ0XG4gICAgfSxcbiAgICBcbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgYWRkRnVuYyA9IHRoaXMuYWRkVG9DYXJ0O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3BcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyTG9nby8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBkYXRhLWNvdW50ZXI9e3RoaXMuc3RhdGUudG90YWxDb3VudGVkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pbWcvY2FydC5wbmdcIiBhbHQ9XCJDYXJ0XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPFNpZGVNZW51IC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZHNfX2NvbnRyb2xzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlYXJjaEZvcm0gaGFuZGxlU2VhcmNoPXt0aGlzLmhhbmRsZVNlYXJjaH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3dpdGNoZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRzX19pdGVtc19fbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jYXJkSW5mby5tYXAoZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8Q2FyZEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2VsLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2VsLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzY291bnQ9e2VsLmRpc2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWNpYWw9e2VsLnNwZWNpYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VPbGQ9e2VsLnByaWNlT2xkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlTmV3PXtlbC5wcmljZU5ld31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDbGljaz17YWRkRnVuY31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgIFxuICAgIH0gXG59KTtcblxudmFyIEhlYWRlckxvZ28gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19sb2dvXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaW1nL2xvZ28uanBnXCIgd2lkdGg9XCI2MFwiIGhlaWdodD1cIjYwXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn0pO1xuXG52YXIgU2lkZU1lbnUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibWVudVwiPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPFNpZGVNZW51SXRlbSAvPlxuICAgICAgICAgICAgICAgICAgICA8U2lkZU1lbnVJdGVtIC8+XG4gICAgICAgICAgICAgICAgICAgIDxTaWRlTWVudUl0ZW0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFNpZGVNZW51SXRlbSAvPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgKVxuICAgIH1cbn0pO1xuXG52YXIgU2lkZU1lbnVJdGVtID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICByZXR1cm4gKFxuICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWVudV9faXRlbVwiPlxuICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5NZW51IEl0ZW08L2E+XG4gICAgICAgICAgIDwvbGk+XG4gICAgICAgKVxuICAgfSBcbn0pO1xuXG52YXIgU3dpdGNoZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgXG4gICAgdG9nZ2xlTGlzdDogZnVuY3Rpb24oKSB7XG4gICAgICAgdmFyIHN3aXRjaGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN3aXRjaGVyJyksXG4gICAgICAgICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkc19faXRlbXNfX2xpc3QnKSxcbiAgICAgICAgICAgbGlzdDtcbiAgICAgICBcbiAgICAgICBpZiAoKHR5cGVvZiBzd2l0Y2hlciAhPSAndW5kZWZpbmVkJykgJiYgKHR5cGVvZiBzd2l0Y2hlciAhPSAndW5kZWZpbmVkJykpIHtcbiAgICAgICAgICAgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2l0Y2hlcl9fbGlzdCcpO1xuICAgICAgICAgICBcbiAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2xpc3QnKTtcbiAgICAgICB9XG4gICAgfSxcbiAgICBcbiAgICB0b2dnbGVHcmlkOiBmdW5jdGlvbigpIHtcbiAgICAgICB2YXIgc3dpdGNoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3dpdGNoZXInKSxcbiAgICAgICAgICAgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzX19pdGVtc19fbGlzdCcpLFxuICAgICAgICAgICBncmlkO1xuICAgICAgIFxuICAgICAgIGlmICgodHlwZW9mIHN3aXRjaGVyICE9ICd1bmRlZmluZWQnKSAmJiAodHlwZW9mIHN3aXRjaGVyICE9ICd1bmRlZmluZWQnKSkge1xuICAgICAgICAgICBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN3aXRjaGVyX19ncmlkJyk7XG5cbiAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2xpc3QnKTtcbiAgICAgICB9XG4gICB9LFxuICAgIFxuICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICByZXR1cm4gKFxuICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3dpdGNoZXJcIj5cbiAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJzd2l0Y2hlcl9fbGlzdFwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlTGlzdH0+XG4gICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ltZy9saXN0LnBuZ1wiIHdpZHRoPVwiMzBcIiBoZWlnaHQ9XCIzMFwiIGFsdD1cIkxpc3QgVmlld1wiIC8+XG4gICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJzd2l0Y2hlcl9fZ3JpZFwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlR3JpZH0+XG4gICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ltZy9ncmlkLnBuZ1wiIHdpZHRoPVwiMzBcIiBoZWlnaHQ9XCIzMFwiIGFsdD1cIkdyaWQgVmlld1wiIC8+XG4gICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgPC91bD5cbiAgICAgICApXG4gICB9IFxufSk7XG5cbi8vcmVuZGVyIGFsbFxuXG5SZWFjdERPTS5yZW5kZXIoXG4gICAgPFNlZWRTaG9wIC8+LFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJylcbik7XG4iXX0=
